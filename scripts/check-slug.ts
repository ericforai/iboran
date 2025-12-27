import { getPayload } from 'payload'
import configPromise from '../src/payload.config'

async function checkPost() {
  const payload = await getPayload({ config: configPromise })
  const posts = await payload.find({
    collection: 'posts',
    where: {
      title: { equals: '为什么 ERP 项目失败，往往不是系统问题？' }
    }
  })
  
  if (posts.docs.length > 0) {
    const p = posts.docs[0]
    console.log(`Found post: "${p.title}"`)
    console.log(`Slug: ${p.slug}`)
    console.log(`Status: ${p._status}`)
    console.log(`PublishedAt: ${p.publishedAt}`)
    console.log(`ID: ${p.id}`)
  } else {
    console.log('Post not found by title.')
  }
  process.exit(0)
}

checkPost()
