import { NextRequest, NextResponse } from 'next/server'

import { generateSignedVisitorId, getVisitorIdExpiry } from '@/utilities/visitorId'

export async function POST(req: NextRequest) {
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
