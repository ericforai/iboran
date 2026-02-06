import { NextResponse } from 'next/server'

import { generateSignedVisitorId, getVisitorIdExpiry } from '@/utilities/visitorId'

export async function POST() {
  try {
    const visitorId = generateSignedVisitorId()

    return NextResponse.json({
      visitorId,
      expiresAt: getVisitorIdExpiry(),
    })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
