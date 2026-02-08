import { getPayload } from 'payload'
import { NextRequest, NextResponse } from 'next/server'

import config from '@payload-config'
import { checkRateLimit, getRequestIP } from '@/utilities/rateLimit'
import { verifyVisitorId } from '@/utilities/visitorId'

type PresencePayload = {
  conversationId?: string
  visitorId?: string
}

const MAX_VISITOR_ID_LEN = 120
const MAX_CONVERSATION_ID_LEN = 120

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get('content-type')
    if (!contentType?.includes('application/json')) {
      return NextResponse.json({ error: 'Unsupported media type' }, { status: 415 })
    }

    const ip = getRequestIP(req.headers)
    const limit = checkRateLimit(`chat-presence:${ip}`, { limit: 40, windowMs: 60_000 })
    if (!limit.allowed) {
      return NextResponse.json(
        { error: 'Too many requests' },
        { status: 429, headers: { 'Retry-After': String(Math.ceil(limit.retryAfterMs / 1000)) } },
      )
    }

    const data = (await req.json()) as PresencePayload
    if (!data.conversationId || !data.visitorId) {
      return NextResponse.json({ error: 'conversationId and visitorId are required' }, { status: 400 })
    }
    if (data.visitorId.length > MAX_VISITOR_ID_LEN || data.conversationId.length > MAX_CONVERSATION_ID_LEN) {
      return NextResponse.json({ error: 'invalid payload' }, { status: 400 })
    }

    const verification = verifyVisitorId(data.visitorId)
    if (!verification.valid) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const payload = await getPayload({ config })
    const conversation = await payload.findByID({
      collection: 'conversations',
      id: data.conversationId,
      depth: 0,
    }).catch(() => null)

    if (!conversation || conversation.visitorId !== data.visitorId) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const now = new Date().toISOString()
    const updated = await payload.update({
      collection: 'conversations',
      id: data.conversationId,
      data: {
        visitorLastSeenAt: now,
      },
    })

    return NextResponse.json({
      conversation: {
        id: String(updated.id),
        visitorLastSeenAt: updated.visitorLastSeenAt,
      },
    })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

