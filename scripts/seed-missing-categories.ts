import { getPayload } from 'payload'
import configPromise from '../src/payload.config'

const CATEGORIES = [
  { title: '变革管理', slug: 'manage-change' },
  { title: '项目管理', slug: 'project-management' },
  { title: '供应链管理', slug: 'supply-chain' },
  { title: '制造运营', slug: 'manufacturing' }
]

async function seed() {
  const payload = await getPayload({ config: configPromise })

  for (const cat of CATEGORIES) {
    const existing = await payload.find({
      collection: 'categories',
      where: { slug: { equals: cat.slug } }
    })

    if (existing.docs.length === 0) {
      await payload.create({
        collection: 'categories',
        data: cat
      })
      console.log(`Created category: ${cat.title} (${cat.slug})`)
    } else {
      console.log(`Category exists: ${cat.title} (${cat.slug})`)
    }
  }
  process.exit(0)
}

seed().catch(console.error)
