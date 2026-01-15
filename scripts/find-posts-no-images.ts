import { getPayload } from 'payload'
import configPromise from '../src/payload.config'

async function findPostsWithoutImages() {
  const payload = await getPayload({ config: configPromise })
  
  const posts = await payload.find({
    collection: 'posts',
    limit: 100,
    depth: 0,
    where: {
      heroImage: {
          exists: false
      }
    }
  })

  console.log(`Found ${posts.docs.length} posts without images.`)
  posts.docs.slice(0, 5).forEach(post => {
    console.log(`- ${post.slug}: ${post.title}`)
  })

  process.exit(0)
}

findPostsWithoutImages().catch(console.error)
