import type { Payload } from 'payload'
import { retrieveKnowledge } from '@/utilities/knowledgeGrounding'

const AUTO_TAKEOVER_DELAY_MS = 30 * 1000
const HOTLINE = '400-9955-161'
const ENABLE_PUBLIC_DOCS_KB = process.env.AI_ALLOW_PUBLIC_DOCS_KB === 'true'

const BLOCKED_VENDOR_PATTERNS: RegExp[] = [
  /\bSAP\b/gi,
  /\bOracle\b/gi,
  /\bSalesforce\b/gi,
  /\bWorkday\b/gi,
  /\bOdoo\b/gi,
  /金蝶/g,
  /浪潮/g,
  /鼎捷/g,
  /明源/g,
  /致远/g,
  /泛微/g,
  /微软/g,
  /华为/g,
  /阿里(巴巴)?/g,
  /腾讯/g,
]

type MessageDoc = {
  id: string
  role: 'visitor' | 'ai' | 'agent' | 'system'
  content: string
  createdAt?: string
}

type ConversationDoc = {
  id: string
  handoffStatus?: 'none' | 'requested' | 'active' | 'closed'
  serviceMode?: 'human_offline' | 'human_online' | 'ai_takeover'
  lastHumanReplyAt?: string | null
}

const applyVendorFence = (text: string) => {
  let result = text
  for (const pattern of BLOCKED_VENDOR_PATTERNS) {
    result = result.replace(pattern, '其他厂商')
  }
  return result
}

const buildTakeoverPrompt = () => {
  return (
    '你现在是泊冉网站在线客服，使用人工服务语气回复。\n' +
    '不允许出现“我是AI/模型/机器人”等表述。\n' +
    '不得提及除“用友、泊冉”之外的厂商名；需要对比时统一写“其他厂商”。\n' +
    '不要使用绝对化承诺措辞（如：一定、必须、保证、唯一、100%）。\n' +
    `必要时引导人工顾问电话：${HOTLINE}。\n` +
    '回答先直接结论，再给1-2步建议，语气自然、简洁、专业。'
  )
}

const buildFallbackAnswer = () =>
  `我先帮你继续跟进这个问题。结合当前信息，建议先明确你们的现有系统、上线节奏和预算边界，我们可以据此给出更稳妥的实施路径。` +
  `如需快速确认方案细节，可直接联系服务顾问：${HOTLINE}。`

const buildKnowledgePrompt = async (question: string) => {
  const knowledge = await retrieveKnowledge(question, 5, {
    includeDocs: ENABLE_PUBLIC_DOCS_KB,
    includeSite: true,
  })

  if (knowledge.length === 0) {
    return '知识库暂无命中，请基于公开信息和通用实施经验回答，不要编造具体客户事实。'
  }

  return `知识资料（优先使用并保持一致）：\n${knowledge
    .map((item, idx) => `【K${idx + 1}】${item.title} | ${item.content}`)
    .join('\n')}`
}

const generateAutoReply = async (messages: MessageDoc[]) => {
  const latestVisitor = [...messages].reverse().find((msg) => msg.role === 'visitor')
  const question = latestVisitor?.content?.trim()
  if (!question) return buildFallbackAnswer()

  const apiKey = process.env.DEEPSEEK_API_KEY
  if (!apiKey) return buildFallbackAnswer()

  const baseUrl = process.env.DEEPSEEK_BASE_URL || 'https://api.deepseek.com'
  const knowledgePrompt = await buildKnowledgePrompt(question)
  const recent = messages.slice(-10).map((message) => ({
    role: message.role === 'visitor' ? 'user' : 'assistant',
    content: message.content,
  }))

  const response = await fetch(`${baseUrl}/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'deepseek-chat',
      temperature: 0.4,
      max_tokens: 900,
      messages: [
        {
          role: 'system',
          content: `${buildTakeoverPrompt()}\n${knowledgePrompt}`,
        },
        ...recent,
      ],
    }),
  })

  if (!response.ok) return buildFallbackAnswer()

  const data = (await response.json().catch(() => ({}))) as {
    choices?: Array<{ message?: { content?: string } }>
  }
  const raw = data.choices?.[0]?.message?.content?.trim()
  if (!raw) return buildFallbackAnswer()

  return applyVendorFence(raw)
}

export const maybeRunAutoTakeover = async (payload: Payload, conversationId: string) => {
  const conversation = (await payload
    .findByID({
      collection: 'conversations',
      id: conversationId,
      depth: 0,
    })
    .catch(() => null)) as ConversationDoc | null

  if (!conversation) return
  if (conversation.handoffStatus !== 'requested' && conversation.handoffStatus !== 'active') return
  if (conversation.serviceMode !== 'human_online') return

  const latestBatch = await payload.find({
    collection: 'messages',
    where: {
      conversation: {
        equals: conversationId,
      },
    },
    sort: '-createdAt',
    limit: 1,
    pagination: false,
  })

  const latest = latestBatch.docs[0] as MessageDoc | undefined
  if (!latest || latest.role !== 'visitor' || !latest.createdAt) return

  const elapsed = Date.now() - new Date(latest.createdAt).getTime()
  if (!Number.isFinite(elapsed) || elapsed < AUTO_TAKEOVER_DELAY_MS) return

  const lastHumanReplyAt = conversation.lastHumanReplyAt
  if (lastHumanReplyAt) {
    const humanReplyAt = new Date(lastHumanReplyAt).getTime()
    const visitorAt = new Date(latest.createdAt).getTime()
    if (Number.isFinite(humanReplyAt) && humanReplyAt >= visitorAt) return
  }

  const clientMessageId = `auto-takeover-${conversationId}-${latest.id}`
  const existing = await payload.find({
    collection: 'messages',
    where: {
      clientMessageId: {
        equals: clientMessageId,
      },
    },
    limit: 1,
    pagination: false,
  })
  if (existing.docs[0]) return

  const recentMessages = await payload.find({
    collection: 'messages',
    where: {
      conversation: {
        equals: conversationId,
      },
    },
    sort: 'createdAt',
    limit: 30,
    pagination: false,
  })

  const autoReply = await generateAutoReply(recentMessages.docs as MessageDoc[])
  const now = new Date().toISOString()

  await payload.create({
    collection: 'messages',
    data: {
      conversation: conversationId,
      role: 'ai',
      content: autoReply,
      clientMessageId,
      meta: {
        source: 'ai-auto-takeover',
      },
    },
  })

  await payload.update({
    collection: 'conversations',
    id: conversationId,
    data: {
      mode: 'hybrid',
      handoffStatus: 'active',
      needsHuman: true,
      serviceMode: 'ai_takeover',
      lastAutoReplyAt: now,
      lastMessageAt: now,
    },
  })
}

