import { getPayload } from 'payload'
import configPromise from '../src/payload.config'

async function check() {
  const payload = await getPayload({ config: configPromise })
  
  const slug = 'organize-before-digitize'
  const res = await payload.find({
    collection: 'posts',
    where: { slug: { equals: slug } },
    depth: 2,
    select: {
      categories: true,
    }
  })
  
  if (res.docs.length > 0) {
    const post = res.docs[0]
    console.log(`\nPost: ${slug}`)
    console.log(`Categories Data (with select): ${JSON.stringify(post.categories, null, 2)}`)
  } else {
    console.log(`Post not found: ${slug}`)
  }
  process.exit(0)
}

check().catch(console.error)
