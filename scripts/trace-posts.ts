import { getPayload } from 'payload'
import configPromise from '../src/payload.config'

async function trace() {
  const payload = await getPayload({ config: configPromise })
  
  const posts = await payload.find({
    collection: 'posts',
    limit: 1000,
    depth: 0,
    sort: 'createdAt',
  })

  console.log('Post ID | Created At | Slug | Title')
  console.log('---|---|---|---')
  posts.docs.forEach(post => {
    console.log(`${post.id} | ${post.createdAt} | ${post.slug} | ${post.title}`)
  })

  process.exit(0)
}

trace().catch(console.error)
