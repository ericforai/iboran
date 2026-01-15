
import { getPayload } from 'payload'
import configPromise from '../src/payload.config'
import dotenv from 'dotenv'
import * as path from 'path'
import { fileURLToPath } from 'url'
import * as fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Load .env file
const envPath = path.resolve(__dirname, '../.env')
if (fs.existsSync(envPath)) {
  dotenv.config({ path: envPath })
}

async function debugUsers() {
  process.env.PAYLOAD_CONFIG_PATH = path.resolve(__dirname, '../src/payload.config.ts')

  const payload = await getPayload({
    config: configPromise,
  })

  console.log('Connected to Payload CMS.')
  console.log(`Database URI: ${process.env.DATABASE_URI}`)

  try {
    const users = await payload.find({
      collection: 'users',
    })

    console.log(`Found ${users.totalDocs} users.`)

    if (users.totalDocs > 0) {
      users.docs.forEach((user: any) => {
        console.log(`- User: ${user.email} (ID: ${user.id})`)
      })
    } else {
      console.log('CRITICAL: No users found in the database!')
      
      // Optional: Create a default admin user if none exist?
      // Better to just report first.
    }
  } catch (error) {
    console.error('Error querying users:', error)
  }

  process.exit(0)
}

debugUsers()
