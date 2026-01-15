import { getPayload } from 'payload'
import configPromise from '../src/payload.config'
import { PILOT_CONTENT } from './pilot-content-data'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: path.resolve(__dirname, '../.env') })

if (!process.env.PAYLOAD_SECRET) {
  process.env.PAYLOAD_SECRET = 'd587beaf9532cb1c89f3945e'
}
if (!process.env.DATABASE_URI) {
  process.env.DATABASE_URI = 'mongodb://localhost:27018/iboran'
}

async function bulkOptimize() {
  try {
    const payload = await getPayload({ config: configPromise })

    for (const item of PILOT_CONTENT) {
      console.log(`Optimizing post: ${item.slug}`)

      const posts = await payload.find({
        collection: 'posts',
        where: { slug: { equals: item.slug } },
      })

      if (posts.docs.length === 0) {
        console.warn(`Post not found: ${item.slug}`)
        continue
      }
      const post = posts.docs[0]

      await payload.update({
        collection: 'posts',
        id: post.id,
        data: {
          title: item.title,
          heroImage: item.heroImageId,
          tldr: item.tldr,
          atomicFAQs: item.atomicFAQs,
          decisionFramework: item.decisionFramework,
          boundaries: item.boundaries,
          content: item.content,
          _status: 'published', // Ensure they are published
        },
      })
      console.log(`✓ Post optimized: ${item.slug}`)
    }
  } catch (error) {
    console.error('ERROR during bulk optimize:', error)
  }
  process.exit(0)
}

bulkOptimize()
