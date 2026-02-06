import { getPayload } from 'payload'
import { NextResponse } from 'next/server'

import config from '@payload-config'
import { checkRateLimit, getRequestIP } from '@/utilities/rateLimit'

type MessageDoc = {
  id: string
  role: 'visitor' | 'ai' | 'agent' | 'system'
  content: string
  createdAt?: string
}

const encoder = new TextEncoder()
const SSE_HEADERS = {
  'Content-Type': 'text/event-stream; charset=utf-8',
  'Cache-Control': 'no-cache, no-transform',
  Connection: 'keep-alive',
}

const serialize = (event: string, data: unknown) => {
  return encoder.encode(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`)
}

export async function GET(req: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params
  const { searchParams } = new URL(req.url)
  const payload = await getPayload({ config })
  const { user } = await payload.auth({ headers: req.headers })
  const ip = getRequestIP(req.headers)
  const limiterKey = user ? `chat-events-auth:${user.id}:${ip}` : `chat-events-visitor:${ip}`
  const limiter = checkRateLimit(limiterKey, { limit: 40, windowMs: 60_000 })
  if (!limiter.allowed) {
    return NextResponse.json(
      { error: 'Too many requests' },
      { status: 429, headers: { 'Retry-After': String(Math.ceil(limiter.retryAfterMs / 1000)) } },
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

  const role = user?.role
  const isAgent = role === 'agent' || role === 'admin'
  if (!isAgent) {
    const visitorId = req.headers.get('x-chat-visitor-id')?.trim() || searchParams.get('visitorId')?.trim() || ''
    if (!visitorId || visitorId !== conversation.visitorId) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }
  }

  let interval: ReturnType<typeof setInterval> | undefined
  let heartbeat: ReturnType<typeof setInterval> | undefined
  let shutdown: ReturnType<typeof setTimeout> | undefined
  let closed = false
  let isPolling = false
  // History is loaded via /messages API; SSE should focus on near-real-time updates.
  let lastSeenAt = new Date(Date.now() - 5000).toISOString()
  let lastSeenIdsAtTimestamp = new Set<string>()

  const stream = new ReadableStream({
    async start(controller) {
      const safeEnqueue = (chunk: Uint8Array) => {
        if (closed) return false
        try {
          controller.enqueue(chunk)
          return true
        } catch {
          closed = true
          return false
        }
      }

      const close = () => {
        if (closed) return
        closed = true
        if (interval) clearInterval(interval)
        if (heartbeat) clearInterval(heartbeat)
        if (shutdown) clearTimeout(shutdown)
        try {
          controller.close()
        } catch {
          // already closed
        }
      }

      const poll = async () => {
        if (closed || isPolling) return
        isPolling = true

        try {
          const result = await payload.find({
            collection: 'messages',
            where: {
              and: [
                {
                  conversation: {
                    equals: id,
                  },
                },
                {
                  createdAt: {
                    greater_than_equal: lastSeenAt,
                  },
                },
              ],
            },
            sort: 'createdAt',
            limit: 50,
            pagination: false,
          })

          if (!closed && result.docs.length > 0) {
            const docs = result.docs as MessageDoc[]
            const freshDocs = docs.filter((doc) => {
              if (!doc.createdAt) return true
              if (doc.createdAt > lastSeenAt) return true
              if (doc.createdAt === lastSeenAt && !lastSeenIdsAtTimestamp.has(doc.id)) return true
              return false
            })

            if (freshDocs.length === 0) return

            const tail = freshDocs[freshDocs.length - 1]
            if (tail?.createdAt) {
              lastSeenAt = tail.createdAt
              lastSeenIdsAtTimestamp = new Set(
                freshDocs
                  .filter((item) => item.createdAt === tail.createdAt)
                  .map((item) => item.id),
              )
            }

            safeEnqueue(serialize('messages', { docs: freshDocs }))
          }
        } catch {
          safeEnqueue(serialize('error', { message: 'message stream failed' }))
        } finally {
          isPolling = false
        }
      }

      safeEnqueue(serialize('ready', { conversationId: id }))
      await poll()

      interval = setInterval(() => {
        void poll()
      }, 2500)

      heartbeat = setInterval(() => {
        if (closed) return
        safeEnqueue(serialize('ping', { at: Date.now() }))
      }, 15000)

      shutdown = setTimeout(() => {
        close()
      }, 55000)

      req.signal.addEventListener('abort', close)
    },
    cancel() {
      closed = true
      if (interval) clearInterval(interval)
      if (heartbeat) clearInterval(heartbeat)
      if (shutdown) clearTimeout(shutdown)
    },
  })

  return new Response(stream, {
    headers: SSE_HEADERS,
  })
}
