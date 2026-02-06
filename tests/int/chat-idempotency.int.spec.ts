import { beforeAll, describe, expect, it } from 'vitest'
import { getPayload, type Payload } from 'payload'
import { NextRequest } from 'next/server'

let payload: Payload

describe('chat idempotency', () => {
  beforeAll(async () => {
    process.env.SMTP_HOST = ''
    const { default: config } = await import('../../src/payload.config')
    payload = await getPayload({ config: await config })
  })

  it('does not duplicate a message when clientMessageId is retried', async () => {
    const conversation = await payload.create({
      collection: 'conversations',
      data: {
        visitorId: `idempotency-${Date.now()}`,
        mode: 'ai',
        handoffStatus: 'none',
      },
    })

    const { POST } = await import('../../src/app/api/chat/messages/route')
    const clientMessageId = `same-${Date.now()}`

    const firstReq = new NextRequest('http://localhost/api/chat/messages', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        conversationId: conversation.id,
        content: 'hello',
        clientMessageId,
      }),
    })

    const secondReq = new NextRequest('http://localhost/api/chat/messages', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        conversationId: conversation.id,
        content: 'hello',
        clientMessageId,
      }),
    })

    const firstResponse = await POST(firstReq)
    const secondResponse = await POST(secondReq)

    expect(firstResponse.status).toBe(200)
    expect(secondResponse.status).toBe(200)

    const secondJson = (await secondResponse.json()) as { deduped: boolean }
    expect(secondJson.deduped).toBe(true)

    const records = await payload.find({
      collection: 'messages',
      where: {
        clientMessageId: {
          equals: clientMessageId,
        },
      },
      limit: 10,
    })

    expect(records.docs).toHaveLength(1)
  })
})
