import { getPayload } from 'payload'
import { NextRequest, NextResponse } from 'next/server'

import config from '@payload-config'
import { checkRateLimit, getRequestIP } from '@/utilities/rateLimit'
import { hasAnyOnlineAgent } from '@/utilities/serviceMode'

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

const resolveConversation = async (payload: Awaited<ReturnType<typeof getPayload>>, data: MessagePayload) => {
  if (data.conversationId) {
    try {
      const existing = await payload.findByID({
        collection: 'conversations',
        id: data.conversationId,
      })
      if (existing) {
        return existing
      }
    } catch {
      // Create a new conversation below when provided id does not exist
    }
  }

  return payload.create({
    collection: 'conversations',
    data: {
      visitorId: data.visitorId || `visitor-${Date.now()}`,
      sourcePage: data.sourcePage,
      mode: 'ai',
      handoffStatus: 'none',
      serviceMode: 'human_offline',
      needsHuman: false,
      lastMessageAt: new Date().toISOString(),
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
