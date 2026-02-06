import { NextResponse } from 'next/server'
import { ensureChatIndexes } from '@/utilities/ensureIndexes'

/**
 * Admin endpoint to ensure database indexes are created.
 * Call this after deploying schema changes or during setup.
 *
 * Usage: POST /api/admin/ensure-indexes
 * Authentication: Requires admin session
 */
export async function POST(req: Request) {
  try {
    const payload = await (await import('payload')).getPayload({
      config: await import('@payload-config'),
    })

    // Verify user is authenticated and is admin
    const { user } = await payload.auth({ headers: req.headers })
    if (!user || (user.role !== 'admin' && user.role !== 'agent')) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    // Ensure indexes in the background
    void ensureChatIndexes()

    return NextResponse.json({
      success: true,
      message: 'Index creation initiated. Check server logs for results.',
    })
  } catch (error) {
    console.error('Failed to trigger index creation:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    )
  }
}
