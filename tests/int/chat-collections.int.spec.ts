import { beforeAll, describe, expect, it } from 'vitest'
import { getPayload, type Payload } from 'payload'

let payload: Payload

describe('chat collections', () => {
  beforeAll(async () => {
    process.env.SMTP_HOST = ''
    const { default: config } = await import('../../src/payload.config')
    payload = await getPayload({ config: await config })
  })

  it('creates conversation and message documents', async () => {
    const conversation = await payload.create({
      collection: 'conversations',
      data: {
        visitorId: `visitor-${Date.now()}`,
        mode: 'ai',
        handoffStatus: 'none',
      },
    })

    const message = await payload.create({
      collection: 'messages',
      data: {
        conversation: conversation.id,
        role: 'visitor',
        content: 'hello',
        clientMessageId: `message-${Date.now()}`,
      },
    })

    expect(conversation.id).toBeDefined()
    expect(message.id).toBeDefined()
  })
})
