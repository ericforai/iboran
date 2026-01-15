
import { getPayload } from 'payload'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

dotenv.config({
  path: path.resolve(dirname, '../.env'),
})

const inspect = async () => {
  try {
    // Dynamically import config after dotenv loads
    const { default: configPromise } = await import('../src/payload.config')
    const payload = await getPayload({ config: configPromise })

    payload.logger.info('--- Database Inspection ---')
    payload.logger.info(`Database URI: ${process.env.DATABASE_URI}`)

    // List Users
    const users = await payload.find({
      collection: 'users',
      limit: 100,
      showHiddenFields: true,
    })

    payload.logger.info(`Found ${users.totalDocs} users:`)
    users.docs.forEach((u: any) => {
      payload.logger.info(`- ID: ${u.id}, Email: ${u.email}, Name: ${u.name}`)
    })

    // Count other collections to gauge data integrity
    const pages = await payload.count({ collection: 'pages' })
    const posts = await payload.count({ collection: 'posts' })
    const media = await payload.count({ collection: 'media' })
    const forms = await payload.count({ collection: 'forms' })

    payload.logger.info('--- Collection Counts ---')
    payload.logger.info(`Pages: ${pages.totalDocs}`)
    payload.logger.info(`Posts: ${posts.totalDocs}`)
    payload.logger.info(`Media: ${media.totalDocs}`)
    payload.logger.info(`Forms: ${forms.totalDocs}`)

    // Detailed Form Inspection
    const formsData = await payload.find({
      collection: 'forms',
      depth: 1,
    })
    
    if (formsData.docs.length > 0) {
        payload.logger.info('--- Form Email Settings ---')
        formsData.docs.forEach((f: any) => {
            payload.logger.info(`Form: ${f.title}`)
            if (f.emails && f.emails.length > 0) {
                f.emails.forEach((e: any, i: number) => {
                    payload.logger.info(`  [Email #${i+1}] To: ${e.emailTo}, Subject: ${e.subject}`)
                })
            } else {
                payload.logger.info(`  (No email notifications configured)`)
            }
        })
    }

    // Check backups folder
    const backupDir = path.resolve(dirname, '../backups')
    payload.logger.info('--- Checking Backups ---')
    if (fs.existsSync(backupDir)) {
      const files = fs.readdirSync(backupDir)
      if (files.length > 0) {
        payload.logger.info(`Found ${files.length} backups in ${backupDir}:`)
        files.forEach(f => payload.logger.info(`- ${f}`))
      } else {
        payload.logger.info('Backups directory exists but is empty.')
      }
    } else {
      payload.logger.info('No backups directory found.')
    }

    process.exit(0)
  } catch (err) {
    console.error('Failed to inspect DB:', err)
    process.exit(1)
  }
}

inspect()
