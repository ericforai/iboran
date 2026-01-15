import { getPayload } from 'payload'
import configPromise from '../src/payload.config'

async function verifyCategory() {
  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: 'posts',
    where: {
      slug: {
        equals: 'why-erp-projects-fail-not-system-issue',
      },
    },
    depth: 2,
  })

  if (posts.docs.length > 0) {
    const post = posts.docs[0]
    console.log(`Post: ${post.title}`)
    console.log('Categories:', JSON.stringify(post.categories, null, 2))
  }
  process.exit(0)
}

verifyCategory().catch(console.error)
