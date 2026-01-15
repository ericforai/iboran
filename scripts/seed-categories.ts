import { getPayload } from 'payload'
import configPromise from '../src/payload.config'

const CATEGORIES = [
  { title: '行业洞察', slug: 'industry-insights' },
  { title: '数智化转型', slug: 'digital-transformation' },
  { title: '产品与技术', slug: 'products-tech' },
  { title: '客户案例', slug: 'success-stories' },
  { title: '企业动态', slug: 'company-news' },
]

async function seedCategories() {
  const payload = await getPayload({ config: configPromise })
  
  console.log('Starting category seed...')

  for (const cat of CATEGORIES) {
    const existing = await payload.find({
      collection: 'categories',
      where: {
        slug: {
          equals: cat.slug,
        },
      },
    })

    if (existing.docs.length > 0) {
      console.log(`Category exists: ${cat.title}`)
      continue
    }

    await payload.create({
      collection: 'categories',
      data: {
        title: cat.title,
        slug: cat.slug,
      },
    })
    
    console.log(`Created category: ${cat.title}`)
  }

  console.log('Seeding complete.')
  process.exit(0)
}

seedCategories().catch(console.error)
