import { NextRequest, NextResponse } from 'next/server';
import { retrieveKnowledge } from '@/utilities/knowledgeGrounding'
import type { GroundingChunk } from '@/types/ai'
import { checkRateLimit, getRequestIP } from '@/utilities/rateLimit'

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
  '你是泊冉软件官网AI客服。你必须基于提供的知识库进行回答，不编造事实；信息不足时明确说明并建议转人工。'

const HOTLINE = '400-9955-161'
const TRACEABLE_FALLBACK =
  `当前问题涉及关键结论，需要基于可核验资料回答。请补充具体场景，或直接联系人工客服 ${HOTLINE}。`

const CONTACT_DIRECT_REPLY = [
  `您可以直接拨打热线电话 ${HOTLINE}（电话优先）。`,
  '如果您更希望在线沟通，也可以在当前窗口点击“转人工”。',
].join('\n')

const INDUSTRY_ASK =
  '为更准确判断，请先告诉我您的细分行业（如：制造、零售、医药、房地产、能源、金融、互联网、专业服务等）？'
const SCENE_ASK = [
  '收到。请再选择您当前最关注的需求场景（可直接回复名称）：',
  '1) 业财一体',
  '2) 费控报销',
  '3) 资金/银企联',
  '4) 合并报表',
  '5) 合同管理',
  '6) 主数据治理',
  '7) 税务/票税',
  '8) ERP升级迁移',
  '9) 其他（可补充）',
].join('\n')

type RiskLevel = 'medium' | 'high'

type ConsultationContext = {
  industry?: string
  scene?: string
}

const CONTACT_INTENT_RE =
  /(怎么联系|如何联系|联系方式|联系电话|电话多少|电话是|电话为|客服电话|热线|打电话|联系你们|联系顾问|人工客服)/
const HIGH_RISK_RE =
  /(报价|多少钱|价格|合同|条款|承诺|保证|赔偿|法律责任|合规结论|收益承诺|回报率|必须|一定|确保成功)/
const CONSULTATIVE_RE =
  /(是否|能否|可以|适合|怎么做|如何做|方案|场景|行业|yonbip|bip|yonsuite|erp|实施|迁移|费控|合并报表|主数据|合同管理|银企联)/
const SMALL_TALK_RE = /^(你好|您好|hello|hi|在吗|有人吗|谢谢|好的|嗯|收到|ok)[！!。.\s]*$/i

const INDUSTRY_RULES: Array<[RegExp, string]> = [
  [/(房地产|地产|物业|建筑|工程)/, '房地产/工程'],
  [/(制造|工厂|生产|工业|汽配|半导体|电子)/, '制造'],
  [/(零售|商超|电商|消费品|快消|门店)/, '零售/消费品'],
  [/(医药|医疗|生物|药企|器械|医院)/, '医药/医疗'],
  [/(能源|电力|化工|新材料)/, '能源/化工'],
  [/(互联网|软件|saas|科技|it)/, '互联网/科技'],
  [/(服务|咨询|事务所|项目型)/, '专业服务'],
  [/(银行|农信|城商行|农商行)/, '银行'],
  [/(保险|寿险|财险)/, '保险'],
  [/(证券|券商)/, '证券'],
  [/(资管|基金|公募|私募)/, '资管'],
  [/(金租|融资租赁|租赁)/, '金租'],
  [/(金融)/, '金融'],
]

const SCENE_RULES: Array<[RegExp, string]> = [
  [/(业财一体|财务一体)/, '业财一体'],
  [/(费控|报销|差旅)/, '费控报销'],
  [/(银企联|资金|支付|司库)/, '资金/银企联'],
  [/(合并报表|并表|抵销)/, '合并报表'],
  [/(合同)/, '合同管理'],
  [/(主数据|mdm)/, '主数据治理'],
  [/(税务|票税|发票)/, '税务/票税'],
  [/(erp升级|erp 迁移|erp升级迁移|迁移|替换)/, 'ERP升级迁移'],
]

const normalizeSceneReply = (text: string): string | null => {
  const value = text.trim().replace(/^[\d\-\.\)\s]+/, '')
  if (!value || SMALL_TALK_RE.test(value)) return null
  if (detectContactIntent(value)) return null

  for (const [rule, label] of SCENE_RULES) {
    if (rule.test(value.toLowerCase())) return label
  }

  const custom = value
    .replace(/^其他[:：\s]*/i, '')
    .replace(/^其它[:：\s]*/i, '')
    .trim()
  if (!custom) return '其他'
  return `其他：${custom}`
}

const detectContactIntent = (text: string) => CONTACT_INTENT_RE.test(text.toLowerCase())

export const detectRiskLevel = (text: string): RiskLevel => {
  return HIGH_RISK_RE.test(text.toLowerCase()) ? 'high' : 'medium'
}

export const isConsultativeQuestion = (text: string) => {
  const normalized = text.trim().toLowerCase()
  if (!normalized || SMALL_TALK_RE.test(normalized)) return false
  return CONSULTATIVE_RE.test(normalized) || /(\?|？|吗|呢|如何|怎么)/.test(normalized)
}

export const extractConsultationContext = (userTexts: string[]): ConsultationContext => {
  const combined = userTexts.join('\n').toLowerCase()
  const context: ConsultationContext = {}

  const explicitIndustryMatch =
    combined.match(/([a-z0-9\u4e00-\u9fa5]{2,16})行业/) ||
    combined.match(/我们是([a-z0-9\u4e00-\u9fa5]{2,16})/)
  if (explicitIndustryMatch?.[1]) {
    const raw = explicitIndustryMatch[1].trim()
    const blacklist = ['是否', '适合', '当前', '你们', '我们', '这个', '那个']
    if (!blacklist.includes(raw)) {
      context.industry = raw
    }
  }

  for (const [rule, label] of INDUSTRY_RULES) {
    if (rule.test(combined)) {
      context.industry = label
      break
    }
  }
  for (const [rule, label] of SCENE_RULES) {
    if (rule.test(combined)) {
      context.scene = label
      break
    }
  }

  return context
}

export const detectChoice = (text: string): 'self_service' | 'human' | null => {
  const normalized = text.toLowerCase()
  if (/(转人工|人工客服|人工|打电话|热线|联系客服)/.test(normalized)) return 'human'
  if (/(继续自助|继续|自助|先自助|继续回答)/.test(normalized)) return 'self_service'
  return null
}

export const buildChoicePrompt = (context: ConsultationContext) => {
  const industry = context.industry || '当前行业'
  const scene = context.scene || '当前场景'
  return [
    `已了解，您目前是“${industry}”行业，关注“${scene}”场景。`,
    '您可以选择：',
    '1) 继续自助（我给您下一步建议）',
    `2) 转人工（热线电话 ${HOTLINE}）`,
  ].join('\n')
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

  lines.push('以上为已命中的可追溯信息；如需结论建议，请转人工客服。 [K1]')
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
    const contextInfo = extractConsultationContext(userTexts)
    if (contextInfo.industry && !contextInfo.scene) {
      const maybeScene = normalizeSceneReply(latestUserMessage)
      if (maybeScene) {
        contextInfo.scene = maybeScene
      }
    }
    const userChoice = detectChoice(latestUserMessage)
    const riskLevel = detectRiskLevel(latestUserMessage)
    const consultative = isConsultativeQuestion(latestUserMessage)

    if (detectContactIntent(latestUserMessage)) {
      return NextResponse.json({
        text: CONTACT_DIRECT_REPLY,
        groundingChunks: [],
      })
    }

    if (userChoice === 'human') {
      return NextResponse.json({
        text: `好的，建议您现在点击“转人工”，或直接拨打热线电话 ${HOTLINE}，我们会优先安排顾问跟进。`,
        groundingChunks: [],
      })
    }

    const forceSelfService = userChoice === 'self_service'
    if (!forceSelfService && consultative) {
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

      return NextResponse.json({
        text: buildChoicePrompt(contextInfo),
        groundingChunks: [],
      })
    }

    const apiKey = process.env.DEEPSEEK_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: 'API key not configured' }, { status: 500 })
    }

    const baseUrl = process.env.DEEPSEEK_BASE_URL || 'https://api.deepseek.com'
    const knowledge = await retrieveKnowledge(latestUserMessage, 6, {
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
      if (riskLevel === 'high') {
        return NextResponse.json({
          text: TRACEABLE_FALLBACK,
          groundingChunks: [],
        })
      }

      const fallback =
        contextInfo.industry && contextInfo.scene
          ? `我暂未命中可直接引用的资料。您可以回复“继续自助”，我先给通用落地建议；也可转人工或拨打 ${HOTLINE}。`
          : `${INDUSTRY_ASK}\n\n如需人工支持，可直接拨打 ${HOTLINE}。`
      return NextResponse.json({
        text: fallback,
        groundingChunks: [],
      })
    }

    // Build messages for DeepSeek API
    const messages = [
      {
        role: 'system',
        content:
          `${FIXED_SYSTEM_PROMPT}\n\n` +
          `${systemInstruction.slice(0, MAX_SYSTEM_HINT_LEN)}\n\n` +
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
    const text =
      riskLevel === 'high' && !ensureSentenceCitations(rawText, knowledge.length)
        ? buildTraceableFallbackFromKnowledge(knowledge)
        : rawText || `建议您补充具体场景，或直接拨打热线电话 ${HOTLINE}。`

    return NextResponse.json({ text, groundingChunks })

  } catch (error) {
    console.error('AI Chat API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
