import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: path.resolve(__dirname, '../.env') })

// Manual override if dotenv fails for npx tsx environment
if (!process.env.PAYLOAD_SECRET) {
  process.env.PAYLOAD_SECRET = 'd587beaf9532cb1c89f3945e'
}
if (!process.env.DATABASE_URI) {
  process.env.DATABASE_URI = 'mongodb://localhost:27017/iboran'
}

import { getPayload } from 'payload'
import configPromise from '../src/payload.config'

async function list() {
  try {
    const payload = await getPayload({ config: configPromise })
    
    const users = await payload.find({
      collection: 'users',
      limit: 1,
    })
    
    const media = await payload.find({
      collection: 'media',
      limit: 1,
    })
    
    console.log('USER_ID:', users.docs[0]?.id)
    console.log('MEDIA_ID:', media.docs[0]?.id)
  } catch (error) {
    console.error('ERROR:', error)
  }
  process.exit(0)
}

list()
