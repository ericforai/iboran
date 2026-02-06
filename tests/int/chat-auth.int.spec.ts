import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { getPayload, type Payload } from 'payload'

let payload: Payload
let createdUserId: string | undefined

describe('chat auth role', () => {
  beforeAll(async () => {
    process.env.SMTP_HOST = ''
    const { default: config } = await import('../../src/payload.config')
    payload = await getPayload({ config: await config })
  })

  it('supports agent role for users', async () => {
    const seed = Date.now()
    const user = await payload.create({
      collection: 'users',
      data: {
        email: `agent-${seed}@test.com`,
        password: 'Passw0rd!',
        role: 'agent',
        name: 'Agent One',
      },
    })

    createdUserId = user.id
    expect(user.role).toBe('agent')
  })

  afterAll(async () => {
    if (!createdUserId) return
    await payload.delete({
      collection: 'users',
      id: createdUserId,
    }).catch(() => {
      // ignore cleanup failure in test teardown
    })
  })
})
