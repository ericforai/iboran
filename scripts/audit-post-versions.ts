import { getPayload } from 'payload'
import configPromise from '../src/payload.config'

async function audit() {
  const payload = await getPayload({ config: configPromise })
  
  const posts = await payload.find({
    collection: 'posts',
    limit: 1000,
    depth: 1,
  })

  console.log(`Total Posts: ${posts.docs.length}`)
  
  let v3Count = 0
  let draftCount = 0
  let noCategoryCount = 0
  
  const categoriesMap = new Map()

  posts.docs.forEach(post => {
    // V3.0 check: Has decisionFramework and boundaries
    const isV3 = post.decisionFramework && post.boundaries && post.boundaries.length > 0
    if (isV3) v3Count++
    
    if (post._status === 'draft') draftCount++
    
    if (!post.categories || post.categories.length === 0) {
        noCategoryCount++
    } else {
        post.categories.forEach(cat => {
            const name = typeof cat === 'object' ? cat.slug : cat
            categoriesMap.set(name, (categoriesMap.get(name) || 0) + 1)
        })
    }
  })

  console.log(`\nStatistics:`)
  console.log(`- V3.0 Posts (New structure): ${v3Count}`)
  console.log(`- Drafts: ${draftCount}`)
  console.log(`- Posts with NO categories: ${noCategoryCount}`)
  
  console.log(`\nCategories distribution:`)
  for (const [slug, count] of categoriesMap.entries()) {
    console.log(`- ${slug}: ${count}`)
  }

  // Find exact duplicates by title
  const titleMap = new Map()
  posts.docs.forEach(post => {
    const list = titleMap.get(post.title) || []
    list.push(post.slug)
    titleMap.set(post.title, list)
  })

  console.log(`\nDuplicate Titles:`)
  let dupCount = 0
  for (const [title, slugs] of titleMap.entries()) {
    if (slugs.length > 1) {
      console.log(`- "${title}": [${slugs.join(', ')}]`)
      dupCount++
    }
  }
  console.log(`Total duplicate titles found: ${dupCount}`)

  process.exit(0)
}

audit().catch(console.error)
