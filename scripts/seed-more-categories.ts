import { getPayload } from 'payload'
import configPromise from '../src/payload.config'

// Expanded Category List
const CATEGORIES = [
  // 1. Industry Verticals (Micro-segmentation)
  { title: '半导体与芯片', slug: 'semiconductor-ic' },
  { title: '汽车汽配', slug: 'automotive-parts' },
  { title: '医药与大健康', slug: 'pharma-healthcare' },
  { title: '装备制造', slug: 'equipment-manufacturing' },
  
  // 2. Functional Domains (Business Lines)
  { title: '精细化财务', slug: 'financial-management' },
  { title: '全球化供应链', slug: 'global-supply-chain' },
  { title: '人力资源与组织', slug: 'hcm-org' },
  
  // 3. Product Specific (Tech Stack)
  { title: 'U9 Cloud 专栏', slug: 'u9-cloud-series' },
  { title: 'YonBIP 深度', slug: 'yonbip-deep-dive' },
  
  // 4. Resources
  { title: '白皮书与报告', slug: 'whitepapers-reports' },
]

async function seedCategories() {
  const payload = await getPayload({ config: configPromise })
  
  console.log('Starting expanded category seed...')

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

  console.log('Expansion complete.')
  process.exit(0)
}

seedCategories().catch(console.error)
