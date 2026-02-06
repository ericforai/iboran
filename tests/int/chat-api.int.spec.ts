import { beforeAll, describe, expect, it } from 'vitest'
import { getPayload, type Payload } from 'payload'
import { NextRequest } from 'next/server'

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
})
