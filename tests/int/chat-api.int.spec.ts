import { beforeAll, describe, expect, it } from 'vitest'
import { getPayload, type Payload } from 'payload'
import { NextRequest } from 'next/server'
import { generateSignedVisitorId } from '../../src/utilities/visitorId'

let payload: Payload

describe('chat api routes', () => {
  beforeAll(async () => {
    process.env.SMTP_HOST = ''
    const { default: config } = await import('../../src/payload.config')
    payload = await getPayload({ config: await config })
  })

  it('sets handoffStatus to requested when visitor requests handoff', async () => {
    const conversation = await payload.create({
      collection: 'conversations',
      data: {
        visitorId: `handoff-${Date.now()}`,
        mode: 'ai',
        handoffStatus: 'none',
      },
    })

    const { POST } = await import('../../src/app/api/chat/handoff/route')

    const req = new NextRequest('http://localhost/api/chat/handoff', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ conversationId: conversation.id }),
    })

    const response = await POST(req)
    expect(response.status).toBe(200)

    const updated = await payload.findByID({ collection: 'conversations', id: conversation.id })
    expect(updated.handoffStatus).toBe('requested')
  })

  it('rejects unauthenticated agent reply requests', async () => {
    const { POST } = await import('../../src/app/api/chat/agent/reply/route')

    const req = new NextRequest('http://localhost/api/chat/agent/reply', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        conversationId: 'missing',
        content: 'hello',
        clientMessageId: `agent-${Date.now()}`,
      }),
    })

    const response = await POST(req)
    expect(response.status).toBe(403)
  })

  it('sends handoff phone reminder after 60s and only once', async () => {
    const visitorId = generateSignedVisitorId()
    const conversation = await payload.create({
      collection: 'conversations',
      data: {
        visitorId,
        mode: 'hybrid',
        handoffStatus: 'requested',
        needsHuman: true,
        handoffReminderSent: false,
      },
    })

    const visitorMessage = await payload.create({
      collection: 'messages',
      data: {
        conversation: conversation.id,
        role: 'visitor',
        content: '请人工尽快回复我',
        clientMessageId: `visitor-${Date.now()}`,
      },
    })

    const { GET } = await import('../../src/app/api/chat/conversations/[id]/messages/route')
    const originalNow = Date.now
    const baseNow = originalNow()

    try {
      Date.now = () => baseNow + 61_000

      const req1 = new NextRequest(`http://localhost/api/chat/conversations/${conversation.id}/messages?limit=50`, {
        method: 'GET',
        headers: {
          'x-chat-visitor-id': visitorId,
        },
      })

      const response1 = await GET(req1, { params: Promise.resolve({ id: conversation.id }) })
      expect(response1.status).toBe(200)

      const afterFirst = await payload.find({
        collection: 'messages',
        where: {
          and: [
            {
              conversation: {
                equals: conversation.id,
              },
            },
            {
              role: {
                equals: 'system',
              },
            },
            {
              content: {
                equals: '人工客服暂时繁忙，您可直接拨打热线电话 400-9955-161，我们将优先处理。',
              },
            },
          ],
        },
        limit: 10,
        pagination: false,
      })

      expect(afterFirst.docs).toHaveLength(1)

      const req2 = new NextRequest(`http://localhost/api/chat/conversations/${conversation.id}/messages?limit=50`, {
        method: 'GET',
        headers: {
          'x-chat-visitor-id': visitorId,
        },
      })

      const response2 = await GET(req2, { params: Promise.resolve({ id: conversation.id }) })
      expect(response2.status).toBe(200)

      const afterSecond = await payload.find({
        collection: 'messages',
        where: {
          and: [
            {
              conversation: {
                equals: conversation.id,
              },
            },
            {
              role: {
                equals: 'system',
              },
            },
            {
              content: {
                equals: '人工客服暂时繁忙，您可直接拨打热线电话 400-9955-161，我们将优先处理。',
              },
            },
          ],
        },
        limit: 10,
        pagination: false,
      })

      expect(afterSecond.docs).toHaveLength(1)

      const updatedConversation = await payload.findByID({
        collection: 'conversations',
        id: conversation.id,
      })
      expect(updatedConversation.handoffReminderSent).toBe(true)
      expect(updatedConversation.handoffReminderSentAt).toBeTruthy()
    } finally {
      Date.now = originalNow
      await payload.delete({
        collection: 'messages',
        id: visitorMessage.id,
      }).catch(() => undefined)
      await payload.delete({
        collection: 'conversations',
        id: conversation.id,
      }).catch(() => undefined)
    }
  })
})
