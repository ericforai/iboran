import { getPayload } from 'payload'
import configPromise from '../src/payload.config'

async function assignCategory() {
  const payload = await getPayload({ config: configPromise })

  console.log('Finding category...')
  const categoryDocs = await payload.find({
    collection: 'categories',
    where: {
      slug: {
        equals: 'industry-insights',
      },
    },
  })

  if (categoryDocs.docs.length === 0) {
    console.error('Category "industry-insights" not found!')
    process.exit(1)
  }

  const categoryId = categoryDocs.docs[0].id
  console.log(`Found Category ID: ${categoryId}`)

  console.log('Finding Post...')
  // Try to find the common test post
  const posts = await payload.find({
    collection: 'posts',
    where: {
      slug: {
        equals: 'yonyou-shanghai-agent-boran',
      },
    },
  })

  if (posts.docs.length === 0) {
    console.error('Post not found!')
    process.exit(1)
  }

  const post = posts.docs[0]
  console.log(`Found Post: ${post.title} (${post.id})`)

  console.log('Updating Post with Category...')
  await payload.update({
    collection: 'posts',
    id: post.id,
    data: {
      categories: [categoryId],
    },
  })

  console.log('Done!')
  process.exit(0)
}

assignCategory().catch(console.error)
