
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

async function createAdmin() {
  process.env.PAYLOAD_CONFIG_PATH = path.resolve(__dirname, '../src/payload.config.ts')

  const payload = await getPayload({
    config: configPromise,
  })

  console.log('Connected to Payload CMS.')

  const email = 'admin@boran.com'
  const password = 'password123'

  try {
    // Check if user exists
    const existingUsers = await payload.find({
      collection: 'users',
      where: {
        email: {
          equals: email,
        },
      },
    })

    if (existingUsers.totalDocs > 0) {
      console.log(`User ${email} already exists.`)
    } else {
      console.log(`Creating user ${email}...`)
      await payload.create({
        collection: 'users',
        data: {
          email,
          password,
          // Add any other required fields for your user collection if necessary
          // e.g., name, roles, etc. assuming default Payload 'users' collection
        },
      })
      console.log('✅ Admin user created successfully!')
      console.log(`Email: ${email}`)
      console.log(`Password: ${password}`)
    }
  } catch (error) {
    console.error('Error creating admin user:', error)
  }

  process.exit(0)
}

createAdmin()
