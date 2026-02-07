import type { Payload } from 'payload'

export type ServiceMode = 'human_offline' | 'human_online' | 'ai_takeover'

export const hasAnyOnlineAgent = async (payload: Payload) => {
  const result = await payload.find({
    collection: 'users',
    depth: 0,
    limit: 1,
    pagination: false,
    where: {
      and: [
        {
          isOnline: {
            equals: true,
          },
        },
        {
          or: [
            {
              role: {
                equals: 'agent',
              },
            },
            {
              role: {
                equals: 'admin',
              },
            },
          ],
        },
      ],
    },
  })

  return result.docs.length > 0
}

