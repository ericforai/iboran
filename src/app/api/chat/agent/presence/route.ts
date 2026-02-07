import { getPayload } from 'payload'
import { NextRequest, NextResponse } from 'next/server'
import config from '@payload-config'
import { checkRateLimit, getRequestIP } from '@/utilities/rateLimit'

type PresencePayload = {
  online?: boolean
}

export async function POST(req: NextRequest) {
  try {
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
    const limit = checkRateLimit(`agent-presence:${user.id}:${ip}`, { limit: 30, windowMs: 60_000 })
    if (!limit.allowed) {
      return NextResponse.json(
        { error: 'Too many requests' },
        { status: 429, headers: { 'Retry-After': String(Math.ceil(limit.retryAfterMs / 1000)) } },
      )
    }

    const data = (await req.json()) as PresencePayload
    if (typeof data.online !== 'boolean') {
      return NextResponse.json({ error: 'online is required' }, { status: 400 })
    }

    await payload.update({
      collection: 'users',
      id: user.id,
      data: {
        isOnline: data.online,
      },
    })

    if (data.online) {
      await payload.update({
        collection: 'conversations',
        where: {
          and: [
            {
              or: [
                {
                  handoffStatus: {
                    equals: 'requested',
                  },
                },
                {
                  handoffStatus: {
                    equals: 'active',
                  },
                },
              ],
            },
            {
              serviceMode: {
                not_equals: 'human_online',
              },
            },
          ],
        },
        data: {
          serviceMode: 'human_online',
        },
      })
    } else {
      await payload.update({
        collection: 'conversations',
        where: {
          and: [
            {
              or: [
                {
                  handoffStatus: {
                    equals: 'requested',
                  },
                },
                {
                  handoffStatus: {
                    equals: 'active',
                  },
                },
              ],
            },
            {
              serviceMode: {
                equals: 'human_online',
              },
            },
          ],
        },
        data: {
          serviceMode: 'human_offline',
        },
      })
    }

    const onlineCount = await payload.find({
      collection: 'users',
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
      limit: 100,
      pagination: false,
    })

    return NextResponse.json({
      ok: true,
      online: data.online,
      onlineAgentCount: onlineCount.docs.length,
    })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
