
import { getPayload } from 'payload'

import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

dotenv.config({
  path: path.resolve(dirname, '../.env'),
})


const restore = async () => {
  try {
    // Dynamically import config after dotenv loads
    const { default: configPromise } = await import('../src/payload.config')
    const payload = await getPayload({ config: configPromise })

    payload.logger.info('Restoring admin user...')

    const users = await payload.find({
      collection: 'users',
      where: {
        email: {
          equals: 'admin@boran.cn',
        },
      },
      showHiddenFields: true,
    })

    if (users.docs.length > 0) {
      payload.logger.info(`Found user with ID: ${users.docs[0].id}`)
      payload.logger.info('User exists, resetting password...')
      await payload.update({
        collection: 'users',
        id: users.docs[0].id,
        data: {
          password: 'Boran123',
        },
      })
      payload.logger.info('Password reset to "Boran123"')
    } else {
      payload.logger.info('User not found, creating...')
      await payload.create({
        collection: 'users',
        data: {
          email: 'admin@boran.cn',
          name: 'Admin',
          password: 'Boran123',
        },
      })
      payload.logger.info('User created with email: admin@boran.cn and password: Boran123')
    }
    process.exit(0)
  } catch (err) {
    console.error('Failed to restore user:', err)
    process.exit(1)
  }
}

restore()
