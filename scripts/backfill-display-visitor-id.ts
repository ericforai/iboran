import config from '@payload-config'
import { getPayload } from 'payload'
import { buildDisplayVisitorId } from '@/utilities/visitorDisplay'

const run = async () => {
  const payload = await getPayload({ config })
  let page = 1
  const limit = 100
  let processed = 0
  let updated = 0

  for (;;) {
    const batch = await payload.find({
      collection: 'conversations',
      depth: 0,
      page,
      limit,
      sort: 'createdAt',
    })

    if (!batch.docs.length) break

    for (const conversation of batch.docs as Array<Record<string, any>>) {
      processed += 1
      if (conversation.displayVisitorId) continue

      const firstSeenAt = conversation.visitorFirstSeenAt || conversation.createdAt || new Date().toISOString()
      const displayData = buildDisplayVisitorId({
        sourcePage: conversation.sourcePage || '/',
        firstSeenAt,
        shortCode: conversation.visitorShortCode || undefined,
      })

      await payload.update({
        collection: 'conversations',
        id: String(conversation.id),
        data: displayData,
      })

      updated += 1
    }

    if (!batch.hasNextPage) break
    page += 1
  }

  console.log(`[backfill-display-visitor-id] processed=${processed} updated=${updated}`)
}

run()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('[backfill-display-visitor-id] failed', error)
    process.exit(1)
  })

