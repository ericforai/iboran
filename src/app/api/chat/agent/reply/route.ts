import { getPayload } from 'payload'
import { NextRequest, NextResponse } from 'next/server'

import config from '@payload-config'
import { checkRateLimit, getRequestIP } from '@/utilities/rateLimit'

type AgentReplyPayload = {
  conversationId?: string
  content?: string
  clientMessageId?: string
}

const MAX_CONTENT_LEN = 2000
const MAX_CLIENT_MESSAGE_ID_LEN = 120

export async function POST(req: NextRequest) {
  try {
    const payload = await getPayload({ config })
    const { user } = await payload.auth({ headers: req.headers })
    const effectiveRole = user?.role || 'agent'

    if (!user || (effectiveRole !== 'agent' && effectiveRole !== 'admin')) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const ip = getRequestIP(req.headers)
    const limit = checkRateLimit(`agent-reply:${user.id}:${ip}`, { limit: 80, windowMs: 60_000 })
    if (!limit.allowed) {
      return NextResponse.json(
        { error: 'Too many requests' },
        { status: 429, headers: { 'Retry-After': String(Math.ceil(limit.retryAfterMs / 1000)) } },
      )
    }

    const data = (await req.json()) as AgentReplyPayload
    if (!data.conversationId || !data.content?.trim() || !data.clientMessageId) {
      return NextResponse.json(
        { error: 'conversationId, content, clientMessageId are required' },
        { status: 400 },
      )
    }
    if (data.content.length > MAX_CONTENT_LEN) {
      return NextResponse.json({ error: 'content too long' }, { status: 400 })
    }
    if (data.clientMessageId.length > MAX_CLIENT_MESSAGE_ID_LEN) {
      return NextResponse.json({ error: 'invalid clientMessageId' }, { status: 400 })
    }

    const conversation = await payload.findByID({
      collection: 'conversations',
      id: data.conversationId,
    })

    if (!conversation) {
      return NextResponse.json({ error: 'Conversation not found' }, { status: 404 })
    }

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
      return NextResponse.json({ deduped: true, message: duplicate.docs[0] })
    }

    const message = await payload.create({
      collection: 'messages',
      data: {
        conversation: data.conversationId,
        role: 'agent',
        content: data.content,
        clientMessageId: data.clientMessageId,
        meta: {
          source: 'agent',
          actorId: user.id,
        },
      },
    })

    const updatedConversation = await payload.update({
      collection: 'conversations',
      id: data.conversationId,
      data: {
        mode: 'human',
        handoffStatus: 'active',
        needsHuman: true,
        assignedAgent: user.id,
        lastMessageAt: new Date().toISOString(),
      },
    })

    return NextResponse.json({ deduped: false, conversation: updatedConversation, message })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
