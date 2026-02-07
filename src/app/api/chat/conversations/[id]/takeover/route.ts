import { getPayload } from 'payload'
import { NextRequest, NextResponse } from 'next/server'
import config from '@payload-config'
import { checkRateLimit, getRequestIP } from '@/utilities/rateLimit'

export async function POST(req: NextRequest, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params
    const contentType = req.headers.get('content-type')
    if (!contentType?.includes('application/json')) {
      return NextResponse.json({ error: 'Unsupported media type' }, { status: 415 })
    }

    const payload = await getPayload({ config })
    const { user } = await payload.auth({ headers: req.headers })
    const role = user?.role
    if (!user || (role !== 'agent' && role !== 'admin')) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const ip = getRequestIP(req.headers)
    const limit = checkRateLimit(`agent-takeover:${user.id}:${ip}`, { limit: 60, windowMs: 60_000 })
    if (!limit.allowed) {
      return NextResponse.json(
        { error: 'Too many requests' },
        { status: 429, headers: { 'Retry-After': String(Math.ceil(limit.retryAfterMs / 1000)) } },
      )
    }

    const conversation = await payload.findByID({
      collection: 'conversations',
      id,
      depth: 0,
    }).catch(() => null)

    if (!conversation) {
      return NextResponse.json({ error: 'Conversation not found' }, { status: 404 })
    }

    const now = new Date().toISOString()
    const updatedConversation = await payload.update({
      collection: 'conversations',
      id,
      data: {
        handoffStatus: 'active',
        mode: 'human',
        needsHuman: true,
        serviceMode: 'human_online',
        assignedAgent: user.id,
        lastMessageAt: now,
      },
    })

    await payload.create({
      collection: 'messages',
      data: {
        conversation: id,
        role: 'system',
        content: '人工客服已接管当前会话。',
        clientMessageId: `manual-takeover-${id}-${Date.now()}`,
        meta: {
          source: 'manual-takeover',
          actorId: user.id,
        },
      },
    })

    return NextResponse.json({ conversation: updatedConversation })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

