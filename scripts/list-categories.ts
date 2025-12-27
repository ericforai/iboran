import { getPayload } from 'payload'
import configPromise from '../src/payload.config'

async function listCategories() {
  const payload = await getPayload({ config: configPromise })
  const categories = await payload.find({
    collection: 'categories',
    limit: 100,
  })

  console.log('Current Categories:')
  categories.docs.forEach(cat => {
    console.log(`- ${cat.title} (slug: ${cat.slug})`)
  })
}

listCategories().catch(console.error)
