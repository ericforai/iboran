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

  it('switches conversation to ai_takeover when human_online times out for 30s', async () => {
    const visitorId = generateSignedVisitorId()
    const conversation = await payload.create({
      collection: 'conversations',
      data: {
        visitorId,
        mode: 'hybrid',
        handoffStatus: 'requested',
        serviceMode: 'human_online',
        needsHuman: true,
      },
    })

    const visitorMessage = await payload.create({
      collection: 'messages',
      data: {
        conversation: conversation.id,
        role: 'visitor',
        content: '我们想了解BIP私有化部署',
        clientMessageId: `visitor-timeout-${Date.now()}`,
      },
    })

    const { GET } = await import('../../src/app/api/chat/conversations/[id]/messages/route')
    const originalNow = Date.now
    const baseNow = originalNow()

    try {
      Date.now = () => baseNow + 31_000

      const req = new NextRequest(`http://localhost/api/chat/conversations/${conversation.id}/messages?limit=100`, {
        method: 'GET',
        headers: {
          'x-chat-visitor-id': visitorId,
        },
      })

      const response = await GET(req, { params: Promise.resolve({ id: conversation.id }) })
      expect(response.status).toBe(200)

      const aiMessages = await payload.find({
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
                equals: 'ai',
              },
            },
          ],
        },
        limit: 10,
        pagination: false,
      })
      expect(aiMessages.docs.length).toBeGreaterThan(0)

      const updatedConversation = await payload.findByID({
        collection: 'conversations',
        id: conversation.id,
      })
      expect(updatedConversation.serviceMode).toBe('ai_takeover')
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

  it('does not auto-takeover when human has already replied after visitor message', async () => {
    const visitorId = generateSignedVisitorId()
    const conversation = await payload.create({
      collection: 'conversations',
      data: {
        visitorId,
        mode: 'hybrid',
        handoffStatus: 'active',
        serviceMode: 'human_online',
        needsHuman: true,
      },
    })

    const visitorMessage = await payload.create({
      collection: 'messages',
      data: {
        conversation: conversation.id,
        role: 'visitor',
        content: '请给我报价建议',
        clientMessageId: `visitor-human-replied-${Date.now()}`,
      },
    })

    const humanReplyAt = new Date(Date.now() + 2_000).toISOString()
    await payload.update({
      collection: 'conversations',
      id: conversation.id,
      data: {
        lastHumanReplyAt: humanReplyAt,
      },
    })

    const { GET } = await import('../../src/app/api/chat/conversations/[id]/messages/route')
    const originalNow = Date.now
    const baseNow = originalNow()

    try {
      Date.now = () => baseNow + 31_000

      const req = new NextRequest(`http://localhost/api/chat/conversations/${conversation.id}/messages?limit=100`, {
        method: 'GET',
        headers: {
          'x-chat-visitor-id': visitorId,
        },
      })

      const response = await GET(req, { params: Promise.resolve({ id: conversation.id }) })
      expect(response.status).toBe(200)

      const aiMessages = await payload.find({
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
                equals: 'ai',
              },
            },
          ],
        },
        limit: 10,
        pagination: false,
      })
      expect(aiMessages.docs).toHaveLength(0)
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

  it('sends inquiry email only once under concurrent visitor messages', async () => {
    const emailCalls: Array<{ subject?: string; to?: unknown }> = []
    const payloadAny = payload as unknown as {
      sendEmail: (args: { subject?: string; to?: unknown }) => Promise<void>
    }
    const originalSendEmail = payloadAny.sendEmail.bind(payloadAny)
    payloadAny.sendEmail = async (args: { subject?: string; to?: unknown }) => {
      emailCalls.push({ subject: args.subject, to: args.to })
      await new Promise((resolve) => setTimeout(resolve, 100))
    }

    try {
      const visitorId = generateSignedVisitorId()
      const conversation = await payload.create({
        collection: 'conversations',
        data: {
          visitorId,
          mode: 'hybrid',
          handoffStatus: 'requested',
          serviceMode: 'human_online',
          needsHuman: true,
          inquiryEmailSent: false,
        },
      })

      const { POST } = await import('../../src/app/api/chat/messages/route')
      const base = Date.now()

      const reqA = new NextRequest('http://localhost/api/chat/messages', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          conversationId: conversation.id,
          visitorId,
          content: '并发消息-A',
          clientMessageId: `concurrent-a-${base}`,
        }),
      })

      const reqB = new NextRequest('http://localhost/api/chat/messages', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          conversationId: conversation.id,
          visitorId,
          content: '并发消息-B',
          clientMessageId: `concurrent-b-${base + 1}`,
        }),
      })

      const [resA, resB] = await Promise.all([POST(reqA), POST(reqB)])
      expect(resA.status).toBe(200)
      expect(resB.status).toBe(200)

      const inquiryEmails = emailCalls.filter((item) =>
        String(item.subject || '').includes('在线客服新咨询'),
      )
      expect(inquiryEmails).toHaveLength(1)

      const updatedConversation = await payload.findByID({
        collection: 'conversations',
        id: conversation.id,
      })
      expect(updatedConversation.inquiryEmailSent).toBe(true)
      expect(updatedConversation.inquiryEmailSentAt).toBeTruthy()
    } finally {
      payloadAny.sendEmail = originalSendEmail
    }
  })

  it('responds quickly to greeting-only messages with a system reply', async () => {
    const visitorId = generateSignedVisitorId()
    const conversation = await payload.create({
      collection: 'conversations',
      data: {
        visitorId,
        mode: 'ai',
        handoffStatus: 'none',
      },
    })

    const { POST } = await import('../../src/app/api/chat/messages/route')
    const req = new NextRequest('http://localhost/api/chat/messages', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        conversationId: conversation.id,
        visitorId,
        content: '你好 在吗',
        clientMessageId: `quick-greeting-${Date.now()}`,
      }),
    })

    const response = await POST(req)
    expect(response.status).toBe(200)

    const quickReply = await payload.find({
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
              equals:
                '在的，已收到您的消息。我先帮您安排处理，方便的话请说下行业和您当前最想解决的问题。',
            },
          },
        ],
      },
      limit: 10,
      pagination: false,
    })

    expect(quickReply.docs.length).toBeGreaterThan(0)
  })
})
