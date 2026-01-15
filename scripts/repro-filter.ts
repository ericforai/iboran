import 'dotenv/config'
import { getPayload } from 'payload'
import configPromise from '../src/payload.config'

async function repro() {
  const payload = await getPayload({ config: configPromise })
  
  // 1. Get a category slug that definitely exists
  const category = await payload.find({
    collection: 'categories',
    limit: 1,
  })

  if (category.docs.length === 0) {
    console.log('No categories found')
    process.exit(1)
  }

  const targetSlug = category.docs[0].slug
  console.log(`Testing filter for category slug: ${targetSlug}`)

  // 2. Simulate the query from page.tsx
  const where: any = {
    categories: {
      elemMatch: {
        slug: {
          equals: targetSlug,
        },
      },
    }
  }

  try {
    const posts = await payload.find({
      collection: 'posts',
      where,
      limit: 5,
    })
    console.log(`Method 1 (elemMatch slug) found ${posts.docs.length} posts`)
  } catch (e) {
    console.log('Method 1 failed:', e.message)
  }

  // 3. Try the "correct" way: Find ID first
  try {
    const cat = await payload.find({
        collection: 'categories',
        where: { slug: { equals: targetSlug }},
    })
    if (cat.docs.length > 0) {
        const catId = cat.docs[0].id
        console.log(`Category ID: ${catId}`)
        const postsCorrect = await payload.find({
            collection: 'posts',
            where: {
                categories: {
                    equals: catId
                }
            }
        })
        console.log(`Method 2 (ID match) found ${postsCorrect.docs.length} posts`)
    }
  } catch(e) {
    console.log('Method 2 failed:', e)
  }

  process.exit(0)
}

repro().catch(console.error)
