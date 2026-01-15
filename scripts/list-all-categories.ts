import { getPayload } from 'payload'
import configPromise from '../src/payload.config'

async function listCategories() {
  const payload = await getPayload({ config: configPromise })
  const categories = await payload.find({
    collection: 'categories',
    limit: 100,
  })
  
  console.log('Existing Categories:')
  categories.docs.forEach(c => console.log(`- ${c.slug}: ${c.title}`))
  process.exit(0)
}

listCategories().catch(console.error)
