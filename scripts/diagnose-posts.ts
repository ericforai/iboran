import { getPayload } from 'payload'
import configPromise from '../src/payload.config'

async function diagnose() {
  const payload = await getPayload({ config: configPromise })
  
  const posts = await payload.find({
    collection: 'posts',
    limit: 1000,
    depth: 0,
  })

  console.log(`Total Posts in DB: ${posts.docs.length}`)
  
  // Group by title to see duplicates
  const titleMap = new Map()
  posts.docs.forEach(post => {
    const list = titleMap.get(post.title) || []
    list.push({ id: post.id, slug: post.slug, status: post._status, updatedAt: post.updatedAt })
    titleMap.set(post.title, list)
  })

  console.log('\n--- Duplicate Titles ---')
  for (const [title, occurences] of titleMap.entries()) {
    if (occurences.length > 1) {
      console.log(`Title: "${title}"`)
      occurences.forEach(o => console.log(`  - ID: ${o.id}, Slug: ${o.slug}, Status: ${o.status}, Updated: ${o.updatedAt}`))
    }
  }

  console.log('\n--- Posts Detail (First 100) ---')
  posts.docs.slice(0, 100).forEach((post, i) => {
    console.log(`${i+1}. [${post._status}] ${post.slug} | ${post.title}`)
  })

  process.exit(0)
}

diagnose().catch(console.error)
