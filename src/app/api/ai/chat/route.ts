import { NextRequest, NextResponse } from 'next/server';
import { retrieveKnowledge } from '@/utilities/knowledgeGrounding'
import type { GroundingChunk } from '@/types/ai'
import { checkRateLimit, getRequestIP } from '@/utilities/rateLimit'
import {
  CONTACT_DIRECT_REPLY,
  detectChoice,
  detectContactIntent,
  detectRiskLevel,
  extractConsultationContext,
  HOTLINE,
  INDUSTRY_ASK,
  isDirectProductQuestion,
  isConsultativeQuestion,
  normalizeSceneReply,
  pickLastSubstantiveQuestion,
  SCENE_ASK,
} from '@/utilities/aiChatStrategy'

interface ChatMessage {
  role: 'user' | 'assistant' | 'model';
  content: string;
}

const MAX_HISTORY = 20
const MAX_CONTENT_LEN = 2000
const MAX_SYSTEM_HINT_LEN = 800
const ENABLE_PUBLIC_DOCS_KB = process.env.AI_ALLOW_PUBLIC_DOCS_KB === 'true'
const FIXED_SYSTEM_PROMPT =
  process.env.AI_SYSTEM_PROMPT ||
  '你是泊冉软件官网在线客服。你必须基于提供的知识库进行回答，不编造事实；信息不足时明确说明并建议联系人工客服。'

const TRACEABLE_FALLBACK =
  `当前问题涉及关键结论，需要基于可核验资料回答。请补充具体场景，或直接联系人工客服 ${HOTLINE}。`

type TakeoverTone = '轻松' | '专业' | '犀利' | '克制'
type TakeoverBrevity = '短' | '中' | '长'

const DEFAULT_TAKEOVER_TONE: TakeoverTone =
  (process.env.AI_TAKEOVER_TONE as TakeoverTone) || '专业'
const DEFAULT_TAKEOVER_VIVID = Number.parseInt(process.env.AI_TAKEOVER_VIVID || '1', 10)
const DEFAULT_TAKEOVER_BREVITY: TakeoverBrevity =
  (process.env.AI_TAKEOVER_BREVITY as TakeoverBrevity) || '短'

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

const applyVendorFence = (text: string) => {
  let result = text
  for (const pattern of BLOCKED_VENDOR_PATTERNS) {
    result = result.replace(pattern, '其他厂商')
  }
  return result
}

const parseTakeoverStyle = (systemInstruction: string) => {
  const toneMatch = systemInstruction.match(/\/tone\s*(轻松|专业|犀利|克制)/)
  const vividMatch = systemInstruction.match(/\/vivid\s*([0-3])/)
  const brevityMatch = systemInstruction.match(/\/brevity\s*(短|中|长)/)

  const tone = (toneMatch?.[1] as TakeoverTone) || DEFAULT_TAKEOVER_TONE
  const vividValue = vividMatch?.[1]
  const vivid = vividValue ? Number.parseInt(vividValue, 10) : DEFAULT_TAKEOVER_VIVID
  const brevity = (brevityMatch?.[1] as TakeoverBrevity) || DEFAULT_TAKEOVER_BREVITY

  const safeVivid = Number.isFinite(vivid) ? Math.min(3, Math.max(0, vivid)) : 1
  const safeTone: TakeoverTone = ['轻松', '专业', '犀利', '克制'].includes(tone) ? tone : '专业'
  const safeBrevity: TakeoverBrevity = ['短', '中', '长'].includes(brevity) ? brevity : '短'

  return {
    tone: safeTone,
    vivid: safeVivid,
    brevity: safeBrevity,
  }
}

const buildTakeoverSystemPrompt = (systemInstruction: string) => {
  const style = parseTakeoverStyle(systemInstruction)
  return (
  `${FIXED_SYSTEM_PROMPT}\n\n` +
  `${systemInstruction.slice(0, MAX_SYSTEM_HINT_LEN)}\n\n` +
  '你现在是泊冉网站在线客服，使用人工服务语气回复。\n' +
  '目标：回复自然、有人味、简洁可执行，不让用户感到机器感。\n' +
  '硬约束：\n' +
  '1) 不得出现“作为AI/模型/机器人”等表述。\n' +
  '2) 不得提及除“用友、泊冉”外的厂商名；需要对比时统一写“其他厂商”。\n' +
  '3) 不得使用绝对化承诺（如：一定、必须、保证、唯一、100%）。\n' +
  `4) 涉及价格、合同、法律、上线周期等关键决策，给出保守建议并引导人工顾问电话：${HOTLINE}。\n` +
  '人类化表达规则（仅用于语气，不改变事实）：\n' +
  'a) 长短句交替，允许轻微停顿。\n' +
  'b) 多用“我/你/我们”。\n' +
  'c) 可少量使用“其实/说真的/你知道吗”（每段最多1次）。\n' +
  'd) 少用报告腔连接词。\n' +
  'e) 用具体细节替代空洞形容。\n' +
  'f) 每100-150字有一次自然转折。\n' +
  'g) 允许温和共鸣，不煽情。\n' +
  `输出参数：tone=${style.tone}，vivid=${style.vivid}，brevity=${style.brevity}。\n` +
  '输出要求：先直接回答用户问题，再给1-2步可执行建议；不做“总的来说”式总结。'
  )
}

const buildGroundingChunks = (knowledge: Awaited<ReturnType<typeof retrieveKnowledge>>): GroundingChunk[] => {
  const toWebURI = (source: string) => {
    if (!source.startsWith('site:')) return undefined
    const value = source.replace('site:', '')
    const [collection, slug = ''] = value.split('/')
    if (!slug) return undefined

    if (collection === 'posts') return `/posts/${slug}`
    if (collection === 'resources') return `/resources/${slug}`
    if (collection === 'success-stories') return `/cases/${slug}`
    if (collection === 'pages') return slug === 'home' ? '/' : `/${slug}`
    return undefined
  }

  return knowledge.map((item) => {
    const uri = toWebURI(item.source)
    return {
      web: uri
        ? {
            uri,
            title: item.title,
          }
        : undefined,
      source: item.source,
      excerpt: item.content,
    }
  })
}

const ensureSentenceCitations = (text: string, maxKey: number) => {
  const validKey = (value: string) => {
    const parsed = Number.parseInt(value, 10)
    return Number.isFinite(parsed) && parsed >= 1 && parsed <= maxKey
  }

  const lines = text
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)

  if (lines.length === 0) return false

  const sentenceLike = lines.filter((line) => /[\u4e00-\u9fa5A-Za-z0-9]/.test(line))
  if (sentenceLike.length === 0) return false

  return sentenceLike.every((line) => {
    const matches = [...line.matchAll(/\[K(\d+)\]/g)]
    if (matches.length === 0) return false
    return matches.some((match) => validKey(match[1] || ''))
  })
}

const buildTraceableFallbackFromKnowledge = (knowledge: Awaited<ReturnType<typeof retrieveKnowledge>>) => {
  if (!knowledge.length) return TRACEABLE_FALLBACK

  const top = knowledge.slice(0, 3)
  const lines = top.map((item, idx) => {
    const key = idx + 1
    return `${item.title}：${item.content.slice(0, 80)} [K${key}]`
  })

  lines.push('以上为已命中的可追溯信息；如需结论建议，请联系人工客服。 [K1]')
  return lines.join('\n')
}

export async function POST(req: NextRequest) {
  try {
    const ip = getRequestIP(req.headers)
    const limit = checkRateLimit(`ai-chat:${ip}`, { limit: 20, windowMs: 60_000 })
    if (!limit.allowed) {
      return NextResponse.json(
        { error: 'Too many requests' },
        { status: 429, headers: { 'Retry-After': String(Math.ceil(limit.retryAfterMs / 1000)) } },
      )
    }

    const body = (await req.json()) as { history?: ChatMessage[]; systemInstruction?: string }
    const history = Array.isArray(body.history) ? body.history : []
    const systemInstruction = typeof body.systemInstruction === 'string' ? body.systemInstruction : ''

    if (history.length === 0) {
      return NextResponse.json({ error: 'history is required' }, { status: 400 })
    }

    if (history.length > MAX_HISTORY) {
      return NextResponse.json({ error: 'history too long' }, { status: 400 })
    }

    const hasInvalidMessage = history.some(
      (item) =>
        !item ||
        (item.role !== 'user' && item.role !== 'assistant' && item.role !== 'model') ||
        typeof item.content !== 'string' ||
        item.content.trim().length === 0 ||
        item.content.length > MAX_CONTENT_LEN,
    )
    if (hasInvalidMessage) {
      return NextResponse.json({ error: 'invalid history payload' }, { status: 400 })
    }

    const latestUserMessage = [...history].reverse().find((msg) => msg.role === 'user')?.content || ''
    const userTexts = history.filter((msg) => msg.role === 'user').map((msg) => msg.content)
    const userChoice = detectChoice(latestUserMessage)
    const effectiveUserMessage =
      userChoice === 'self_service'
        ? pickLastSubstantiveQuestion(userTexts.slice(0, -1)) || latestUserMessage
        : latestUserMessage
    const contextInfo = extractConsultationContext(userTexts)
    if (contextInfo.industry && !contextInfo.scene) {
      const maybeScene = normalizeSceneReply(latestUserMessage)
      if (maybeScene) {
        contextInfo.scene = maybeScene
      }
    }
    const riskLevel = detectRiskLevel(effectiveUserMessage)
    const consultative = isConsultativeQuestion(effectiveUserMessage)
    const directProductQuestion = isDirectProductQuestion(effectiveUserMessage)

    if (detectContactIntent(latestUserMessage)) {
      return NextResponse.json({
        text: CONTACT_DIRECT_REPLY,
        groundingChunks: [],
      })
    }

    if (userChoice === 'human') {
      return NextResponse.json({
        text: `好的，建议您直接留言当前问题，或拨打热线电话 ${HOTLINE}，我们会优先安排顾问跟进。`,
        groundingChunks: [],
      })
    }

    if (consultative && !directProductQuestion) {
      if (!contextInfo.industry) {
        return NextResponse.json({
          text: INDUSTRY_ASK,
          groundingChunks: [],
        })
      }

      if (!contextInfo.scene) {
        return NextResponse.json({
          text: SCENE_ASK,
          groundingChunks: [],
        })
      }
    }

    const apiKey = process.env.DEEPSEEK_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: 'API key not configured' }, { status: 500 })
    }

    const baseUrl = process.env.DEEPSEEK_BASE_URL || 'https://api.deepseek.com'
    const knowledge = await retrieveKnowledge(effectiveUserMessage, 6, {
      includeDocs: ENABLE_PUBLIC_DOCS_KB,
      includeSite: true,
    })
    const knowledgePrompt = knowledge.length
      ? `知识库（来自网站与/docs，请优先使用并保持一致）：\n${knowledge
          .map((item, idx) => `【K${idx + 1}】来源: ${item.source}\n标题: ${item.title}\n内容: ${item.content}`)
          .join('\n\n')}`
      : '知识库暂无命中，请明确说明信息不足，不要编造。'
    const groundingChunks = buildGroundingChunks(knowledge)

    if (knowledge.length === 0) {
      const genericMessages = [
        {
          role: 'system',
          content:
            `${buildTakeoverSystemPrompt(systemInstruction)}\n` +
            '当前问题未命中站内可直接引用资料，请基于公开信息与通用实施经验给出初步建议，避免编造具体客户事实。',
        },
        { role: 'user', content: effectiveUserMessage },
      ]

      const fallbackResponse = await fetch(`${baseUrl}/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'deepseek-chat',
          messages: genericMessages,
          temperature: 0.4,
          max_tokens: 900,
        }),
      })

      const fallbackData = fallbackResponse.ok ? await fallbackResponse.json().catch(() => ({})) : {}
      const fallbackRaw = (fallbackData?.choices?.[0]?.message?.content || '').trim()
      const genericAdvice = applyVendorFence(
        fallbackRaw ||
          (riskLevel === 'high'
            ? '该问题涉及关键决策，建议先明确当前系统版本、部署方式和合规要求后再判断。'
            : '建议先明确企业规模、现有系统现状、预算和上线周期，再评估产品与实施路径。'),
      )

      const text = [
        '当前未命中可直接引用的站内资料。',
        '以下回答基于公开信息与通用实施经验整理，供您初步参考，具体以顾问评估为准：',
        '',
        genericAdvice,
        '',
        `建议直接咨询我们的服务顾问：${HOTLINE}。`,
      ].join('\n')

      return NextResponse.json({ text, groundingChunks: [] })
    }

    // Build messages for DeepSeek API
    const messages = [
      {
        role: 'system',
        content:
          `${FIXED_SYSTEM_PROMPT}\n\n` +
          `${systemInstruction.slice(0, MAX_SYSTEM_HINT_LEN)}\n\n` +
          '电子围栏：回答中不得出现除“用友”“泊冉”之外的任何厂商或品牌名；若需对比，请统一写为“其他厂商”。\n' +
          '回答规则：仅基于“知识库”与用户问题回答；若知识不足请明确告知并建议联系人工，不可编造事实。\n' +
          (riskLevel === 'high'
            ? '这是高风险问题：每一句结论后必须附来源编号，格式为 [K1] / [K2]；不得输出没有 [Kx] 的结论句。\n'
            : '这是一般咨询：优先给出简洁可执行建议；若引用知识库信息，请尽量在句末附 [Kx]。\n') +
          `若用户询问联系方式，优先给出热线电话 ${HOTLINE}。\n` +
          '优先引用知识库中的具体术语、产品名、页面信息和流程描述。\n' +
          '输出简洁、专业、可执行。',
      },
      { role: 'system', content: knowledgePrompt },
      ...history.map(msg => ({
        role: msg.role === 'user' ? 'user' : 'assistant',
        content: msg.content
      }))
    ];

    const response = await fetch(`${baseUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages,
        temperature: 0.7,
        max_tokens: 2000
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('DeepSeek API Error:', errorData);
      return NextResponse.json(
        { error: 'API request failed' },
        { status: response.status }
      );
    }

    const data = await response.json()
    const rawText = (data.choices?.[0]?.message?.content || '').trim()
    const text = applyVendorFence(
      riskLevel === 'high' && !ensureSentenceCitations(rawText, knowledge.length)
        ? buildTraceableFallbackFromKnowledge(knowledge)
        : rawText || `建议您补充具体场景，或直接拨打热线电话 ${HOTLINE}。`,
    )

    return NextResponse.json({ text, groundingChunks })

  } catch (error) {
    console.error('AI Chat API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
