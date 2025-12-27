import { getPayload } from 'payload'
import configPromise from '../src/payload.config'
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
  process.env.DATABASE_URI = 'mongodb://localhost:27017/iboran'
}

async function check() {
  try {
    const payload = await getPayload({ config: configPromise })
    
    const posts = await payload.find({
      collection: 'posts',
      where: {
        slug: {
          equals: 'yonyou-shanghai-agent-boran',
        },
      },
    })
    
    if (posts.docs.length > 0) {
      console.log('POST_EXISTS:', posts.docs[0].id)
    } else {
      console.log('POST_NOT_FOUND')
    }
  } catch (error) {
    console.error('ERROR:', error)
  }
  process.exit(0)
}

check()
