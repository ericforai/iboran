import { getPayload } from 'payload'
import configPromise from '../src/payload.config'

async function updatePost() {
  const payload = await getPayload({ config: configPromise })
  
  const postId = '694fe188694f357894794394'
  const mediaId = '694ffd0e2c64ee53e98b9335'

  // Update post by ID
  const result = await payload.update({
    collection: 'posts',
    id: postId,
    data: {
      heroImage: mediaId,
    },
  })

  if (result) {
    console.log(`Successfully updated post ID ${postId} with media ID ${mediaId}`)
  } else {
    console.log(`Failed to update post ID ${postId}`)
  }

  process.exit(0)
}

updatePost().catch(console.error)
