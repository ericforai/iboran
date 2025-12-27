import { getPayload } from 'payload'
import configPromise from '../src/payload.config'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: path.resolve(__dirname, '../.env') })

if (!process.env.PAYLOAD_SECRET) {
  process.env.PAYLOAD_SECRET = 'd587beaf9532cb1c89f3945e'
}
if (!process.env.DATABASE_URI) {
  process.env.DATABASE_URI = 'mongodb://localhost:27018/iboran'
}

const IMAGE_PATH = '/Users/user/.gemini/antigravity/brain/ec7f232a-b678-408a-83b7-6cf0ed6e3160/b2b_erp_consulting_hero_1766832617789.png'

async function run() {
  try {
    const payload = await getPayload({ config: configPromise })
    
    // 1. Upload media
    console.log('Uploading media...')
    const media = await payload.create({
      collection: 'media',
      data: {
        alt: 'Boran Software B2B Consulting Hero',
      },
      file: {
        data: fs.readFileSync(IMAGE_PATH),
        name: 'b2b-hero.png',
        mimetype: 'image/png',
        size: fs.statSync(IMAGE_PATH).size,
      },
    })
    
    console.log('Media uploaded:', media.id)
    
    // 2. Update post
    const posts = await payload.find({
      collection: 'posts',
      where: {
        slug: {
          equals: 'yonyou-shanghai-agent-boran',
        },
      },
    })
    
    if (posts.docs.length > 0) {
      await payload.update({
        collection: 'posts',
        id: posts.docs[0].id,
        data: {
          heroImage: media.id,
        },
      })
      console.log('Post updated with new hero image')
    } else {
      console.log('Post not found')
    }
    
  } catch (error) {
    console.error('ERROR:', error)
  }
  process.exit(0)
}

run()
