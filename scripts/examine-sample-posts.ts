import { getPayload } from 'payload'
import configPromise from '../src/payload.config'

async function examine() {
  const payload = await getPayload({ config: configPromise })
  const posts = await payload.find({
    collection: 'posts',
    limit: 3,
  })

  for (const post of posts.docs) {
    console.log(`\n\n=== SLUG: ${post.slug} ===`)
    console.log(`TITLE: ${post.title}`)
    console.log('CONTENT TYPE:', typeof post.content)
    console.log('CONTENT STRINGIFIED:', JSON.stringify(post.content, null, 2))
    console.log('GEO TLDR:', post.tldr)
    console.log('GEO FAQ COUNT:', (post.atomicFAQs as any)?.length)
  }

  process.exit(0)
}

examine().catch(console.error)
