import { getPayload } from 'payload'
import { NextRequest, NextResponse } from 'next/server'

import config from '@payload-config'
import { checkRateLimit, getRequestIP } from '@/utilities/rateLimit'

const MAX_VISITOR_ID_LEN = 120
const MAX_SOURCE_PAGE_LEN = 400

export async function POST(req: NextRequest) {
  try {
    // Validate Content-Type
    const contentType = req.headers.get('content-type')
    if (!contentType?.includes('application/json')) {
      return NextResponse.json({ error: 'Unsupported media type' }, { status: 415 })
    }

    const ip = getRequestIP(req.headers)
    const limit = checkRateLimit(`chat-handoff:${ip}`, { limit: 12, windowMs: 60_000 })
    if (!limit.allowed) {
      return NextResponse.json(
        { error: 'Too many requests' },
        { status: 429, headers: { 'Retry-After': String(Math.ceil(limit.retryAfterMs / 1000)) } },
      )
    }

    const { conversationId, visitorId, sourcePage } = (await req.json()) as {
      conversationId?: string
      visitorId?: string
      sourcePage?: string
    }
    if (visitorId && visitorId.length > MAX_VISITOR_ID_LEN) {
      return NextResponse.json({ error: 'invalid visitorId' }, { status: 400 })
    }
    if (sourcePage && sourcePage.length > MAX_SOURCE_PAGE_LEN) {
      return NextResponse.json({ error: 'invalid sourcePage' }, { status: 400 })
    }

    const payload = await getPayload({ config })
    let activeConversationId = conversationId

    if (!activeConversationId) {
      const createdConversation = await payload.create({
        collection: 'conversations',
        data: {
          visitorId: visitorId || `visitor-${Date.now()}`,
          sourcePage,
          mode: 'ai',
          handoffStatus: 'none',
          needsHuman: false,
          lastMessageAt: new Date().toISOString(),
        },
      })
      activeConversationId = createdConversation.id
    }

    const updatedConversation = await payload.update({
      collection: 'conversations',
      id: activeConversationId,
      data: {
        handoffStatus: 'requested',
        mode: 'hybrid',
        needsHuman: true,
        handoffReminderSent: false,
        handoffReminderSentAt: null,
        lastMessageAt: new Date().toISOString(),
      },
    })

    const systemMessage = await payload.create({
      collection: 'messages',
      data: {
        conversation: activeConversationId,
        role: 'system',
        content: '已为你转人工，工作时间内会优先回复。',
        clientMessageId: `handoff-${activeConversationId}-${Date.now()}`,
        meta: {
          source: 'handoff',
        },
      },
    })

    return NextResponse.json({
      conversation: updatedConversation,
      message: systemMessage,
    })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
