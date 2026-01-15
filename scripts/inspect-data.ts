import 'dotenv/config'
import { getPayload } from 'payload'
import configPromise from '../src/payload.config'

async function inspect() {
  const payload = await getPayload({ config: configPromise })
  
  const posts = await payload.find({
    collection: 'posts',
    limit: 5,
    depth: 0 // Get raw IDs
  })

  console.log('--- Sample Posts Data (depth: 0) ---')
  posts.docs.forEach(p => {
    console.log(`Title: ${p.title} | Categories:`, p.categories)
  })

  // Check one specific category
  const cats = await payload.find({ collection: 'categories' })
  if(cats.docs.length > 0) {
      const cat = cats.docs[0]
      console.log(`\nQuerying for Category: ${cat.title} [${cat.id}]`)
      
      const match = await payload.find({
          collection: 'posts',
          where: {
              categories: { equals: cat.id }
          }
      })
      console.log(`Found ${match.docs.length} posts matching this category.`)
  }

  process.exit(0)
}

inspect().catch(console.error)
