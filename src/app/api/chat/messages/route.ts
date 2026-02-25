import { getPayload } from 'payload'
import { NextRequest, NextResponse } from 'next/server'

import config from '@payload-config'
import { checkRateLimit, getRequestIP } from '@/utilities/rateLimit'
import { hasAnyOnlineAgent } from '@/utilities/serviceMode'
import { buildDisplayVisitorId } from '@/utilities/visitorDisplay'

type MessagePayload = {
  conversationId?: string
  visitorId?: string
  sourcePage?: string
  content?: string
  clientMessageId?: string
}

const MAX_CONTENT_LEN = 2000
const MAX_VISITOR_ID_LEN = 120
const MAX_SOURCE_PAGE_LEN = 400
const MAX_CLIENT_MESSAGE_ID_LEN = 120
const globalScope = globalThis as typeof globalThis & {
  __chatInquiryEmailLocks?: Map<string, Promise<void>>
}
const QUICK_GREETING_WINDOW_MS = 20_000
const QUICK_GREETING_TEXT =
  '在的，已收到您的消息。我先帮您安排处理，方便的话请说下行业和您当前最想解决的问题。'

const getInquiryEmailLockStore = () => {
  if (!globalScope.__chatInquiryEmailLocks) {
    globalScope.__chatInquiryEmailLocks = new Map<string, Promise<void>>()
  }
  return globalScope.__chatInquiryEmailLocks
}

const withConversationEmailLock = async <T>(conversationId: string, task: () => Promise<T>): Promise<T> => {
  const locks = getInquiryEmailLockStore()
  const previous = locks.get(conversationId) || Promise.resolve()
  let release: () => void = () => undefined
  const current = new Promise<void>((resolve) => {
    release = resolve
  })
  locks.set(conversationId, previous.then(() => current))

  await previous
  try {
    return await task()
  } finally {
    release()
    if (locks.get(conversationId) === current) {
      locks.delete(conversationId)
    }
  }
}

const isQuickGreetingInput = (text: string) => {
  const normalized = text.trim().toLowerCase()
  if (!normalized) return false

  const businessKeywordRe =
    /(报价|价格|合同|部署|私有化|行业|场景|方案|实施|上线|周期|预算|演示|yonbip|yonsuite|erp|对接|接口)/
  if (businessKeywordRe.test(normalized)) return false

  const greetingRe =
    /^(你好|您好|在吗|有人吗|hi|hello|嗨|哈喽|你好在吗|您好在吗|在吗你好|在吗您好|hello there|hi there)[！!。.\s]*$/i
  return greetingRe.test(normalized) || normalized.length <= 8
}

const maybeSendQuickGreeting = async (
  payload: Awaited<ReturnType<typeof getPayload>>,
  conversationId: string,
  visitorContent: string,
) => {
  if (!isQuickGreetingInput(visitorContent)) return false

  const bucket = Math.floor(Date.now() / QUICK_GREETING_WINDOW_MS)
  const clientMessageId = `quick-greet-${conversationId}-${bucket}`
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
  if (existing.docs[0]) return false

  try {
    await payload.create({
      collection: 'messages',
      data: {
        conversation: conversationId,
        role: 'system',
        content: QUICK_GREETING_TEXT,
        clientMessageId,
        meta: {
          source: 'quick-greeting',
        },
      },
    })
  } catch {
    // Ignore duplicate-key races and keep main chat flow healthy.
    return false
  }
  return true
}

const escapeHtml = (unsafe: string | undefined): string => {
  if (typeof unsafe !== 'string') return ''
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

const maybeSendInquiryEmail = async (
  payload: Awaited<ReturnType<typeof getPayload>>,
  conversation: any,
  content: string,
) => {
  return withConversationEmailLock(conversation.id, async () => {
    const latestConversation = await payload.findByID({
      collection: 'conversations',
      id: conversation.id,
      depth: 0,
    }).catch(() => null)

    if (!latestConversation || latestConversation.inquiryEmailSent) return false

    await payload.update({
      collection: 'conversations',
      id: conversation.id,
      data: {
        inquiryEmailSent: true,
        inquiryEmailSentAt: new Date().toISOString(),
      },
    })

    const adminEmail = process.env.LEAD_EMAIL_TO || 'hzwyz@qq.com'
    const recipients = adminEmail.includes(',')
      ? adminEmail.split(',').map((item) => item.trim()).filter(Boolean)
      : adminEmail
    const siteUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'https://www.iboran.com'
    const loginUrl = `${siteUrl}/admin/login?redirect=${encodeURIComponent('/admin/agent-console')}`
    const readableVisitorId = conversation?.displayVisitorId || conversation?.visitorId || 'anonymous'
    const safeVisitorId = escapeHtml(readableVisitorId)
    const safeSource = escapeHtml(conversation?.sourcePage || '')
    const safeContent = escapeHtml(content)

    try {
      await payload.sendEmail({
        from: process.env.SMTP_FROM || 'noreply@iboran.com',
        to: recipients,
        subject: `🔔 在线客服新咨询 - ${safeVisitorId}`,
        html:
          `<div style="font-family: Arial, sans-serif; max-width: 680px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">` +
          `<div style="background-color: #ffffff; padding: 24px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.08);">` +
          `<h2 style="color: #1F2329; margin: 0 0 16px;">🔔 在线客服收到新咨询</h2>` +
          `<p style="margin: 0 0 10px; color: #475467;"><strong>访客ID：</strong>${safeVisitorId}</p>` +
          `${safeSource ? `<p style="margin: 0 0 10px; color: #475467;"><strong>来源页面：</strong>${safeSource}</p>` : ''}` +
          `<div style="margin: 12px 0 0; padding: 14px; border-radius: 6px; background: #f8fafc; color: #111827; line-height: 1.6;">${safeContent}</div>` +
          `<p style="margin: 16px 0 0; color: #667085; font-size: 12px;">时间：${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}</p>` +
          `<div style="margin-top: 18px;">` +
          `<a href="${loginUrl}" style="display: inline-block; padding: 10px 18px; background: #4f46e5; color: #fff; text-decoration: none; border-radius: 6px;">进入 Agent Console</a>` +
          `</div></div></div>`,
      })

      return true
    } catch {
      await payload.update({
        collection: 'conversations',
        id: conversation.id,
        data: {
            inquiryEmailSent: false,
            inquiryEmailSentAt: null,
          },
      }).catch(() => undefined)
      return false
    }
  })
}

const resolveConversation = async (payload: Awaited<ReturnType<typeof getPayload>>, data: MessagePayload) => {
  if (data.conversationId) {
    try {
      const existing = await payload.findByID({
        collection: 'conversations',
        id: data.conversationId,
      })
      if (existing) {
        if (!existing.displayVisitorId) {
          const firstSeenAt = existing.visitorFirstSeenAt || existing.createdAt || new Date().toISOString()
          const displayData = buildDisplayVisitorId({
            sourcePage: existing.sourcePage || data.sourcePage,
            firstSeenAt,
            shortCode: existing.visitorShortCode || undefined,
          })

          return payload.update({
            collection: 'conversations',
            id: existing.id,
            data: displayData,
          })
        }
        return existing
      }
    } catch {
      // Create a new conversation below when provided id does not exist
    }
  }

  const firstSeenAt = new Date().toISOString()
  const displayData = buildDisplayVisitorId({
    sourcePage: data.sourcePage,
    firstSeenAt,
  })

  return payload.create({
    collection: 'conversations',
    data: {
      visitorId: data.visitorId || `visitor-${Date.now()}`,
      sourcePage: data.sourcePage,
      ...displayData,
      mode: 'ai',
      handoffStatus: 'none',
      serviceMode: 'human_offline',
      needsHuman: false,
      inquiryEmailSent: false,
      lastMessageAt: firstSeenAt,
    },
  })
}

export async function POST(req: NextRequest) {
  try {
    // Validate Content-Type
    const contentType = req.headers.get('content-type')
    if (!contentType?.includes('application/json')) {
      return NextResponse.json({ error: 'Unsupported media type' }, { status: 415 })
    }

    const ip = getRequestIP(req.headers)
    const limit = checkRateLimit(`chat-message:${ip}`, { limit: 40, windowMs: 60_000 })
    if (!limit.allowed) {
      return NextResponse.json(
        { error: 'Too many requests' },
        { status: 429, headers: { 'Retry-After': String(Math.ceil(limit.retryAfterMs / 1000)) } },
      )
    }

    const data = (await req.json()) as MessagePayload

    if (!data.content?.trim() || !data.clientMessageId) {
      return NextResponse.json({ error: 'content and clientMessageId are required' }, { status: 400 })
    }
    if (data.content.length > MAX_CONTENT_LEN) {
      return NextResponse.json({ error: 'content too long' }, { status: 400 })
    }
    if (data.clientMessageId.length > MAX_CLIENT_MESSAGE_ID_LEN) {
      return NextResponse.json({ error: 'invalid clientMessageId' }, { status: 400 })
    }
    if (data.visitorId && data.visitorId.length > MAX_VISITOR_ID_LEN) {
      return NextResponse.json({ error: 'invalid visitorId' }, { status: 400 })
    }
    if (data.sourcePage && data.sourcePage.length > MAX_SOURCE_PAGE_LEN) {
      return NextResponse.json({ error: 'invalid sourcePage' }, { status: 400 })
    }

    const payload = await getPayload({ config })

    const duplicate = await payload.find({
      collection: 'messages',
      limit: 1,
      where: {
        clientMessageId: {
          equals: data.clientMessageId,
        },
      },
    })

    if (duplicate.docs[0]) {
      return NextResponse.json({
        deduped: true,
        message: duplicate.docs[0],
      })
    }

    const conversation = await resolveConversation(payload, data)

    const message = await payload.create({
      collection: 'messages',
      data: {
        conversation: conversation.id,
        role: 'visitor',
        content: data.content,
        clientMessageId: data.clientMessageId,
        meta: {
          source: 'visitor',
        },
      },
    })

    await maybeSendQuickGreeting(payload, conversation.id, data.content)
    await maybeSendInquiryEmail(payload, conversation, data.content)

    // Preserve existing handoffStatus - don't reset 'active' or 'closed' back to 'none'
    const now = new Date().toISOString()
    const onlineAgentExists = await hasAnyOnlineAgent(payload)
    const serviceMode =
      conversation.handoffStatus === 'requested' || conversation.handoffStatus === 'active'
        ? conversation.serviceMode === 'ai_takeover'
          ? 'ai_takeover'
          : onlineAgentExists
            ? 'human_online'
            : 'human_offline'
        : conversation.serviceMode || 'human_offline'

    const updatedConversation = await payload.update({
      collection: 'conversations',
      id: conversation.id,
      data: {
        serviceMode,
        lastUserMessageAt: now,
        lastMessageAt: now,
      },
    })

    return NextResponse.json({
      deduped: false,
      conversation: updatedConversation,
      message,
      aiFallbackEnabled: updatedConversation.handoffStatus !== 'active',
    })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
