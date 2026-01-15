import 'dotenv/config'
import { getPayload } from 'payload'
import configPromise from '../src/payload.config'

const CATEGORIES = [
  { title: '行业解决方案', slug: 'industry-solutions', keywords: ['manufacturing', 'retail', 'pharma', 'construction', 'catering', 'chemical', 'auto', 'logistics', 'trade', 'finance', 'project', 'chain', 'gsp', 'haccp', 'jit', 'safety', 'wms', 'tms', 'dhr', 'hcm', 'mes', 'crm'] },
  { title: '产品与技术', slug: 'products-tech', keywords: ['yonbip', 'yonsuite', 'u8', 'nc', 'iuap', 'low-code', 'api', 'saas', 'cloud', 'data', 'ai', 'mobile', 'dev', 'integration', 'interface', 'erp', 'system', 'software', 'platform'] },
  { title: '实施与交付', slug: 'implementation', keywords: ['implementation', 'methodology', 'training', 'migration', 'upgrade', 'shanghai', 'support', 'maintenance', 'go-live', 'deploy', 'install', 'config', 'setup', 'delivery', 'service'] },
  { title: '管理咨询', slug: 'management-consulting', keywords: ['pricing', 'audit', 'compliance', 'cost', 'strategy', 'pmo', 'failure', 'risk', 'contract', 'rate', 'selection', 'guide', 'advice', 'consulting', 'management', 'plan', 'drill'] },
]

async function reclassifyPosts() {
  const payload = await getPayload({ config: configPromise })
  console.log('Starting reclassification...')

  // 1. Ensure Categories Exist
  const categoryMap = new Map<string, string>() // slug -> id
  for (const cat of CATEGORIES) {
    const existing = await payload.find({
      collection: 'categories',
      where: { slug: { equals: cat.slug } },
    })

    if (existing.docs.length > 0) {
      console.log(`Category exists: ${cat.title}`)
      categoryMap.set(cat.slug, existing.docs[0].id)
    } else {
      console.log(`Creating category: ${cat.title}`)
      const newCat = await payload.create({
        collection: 'categories',
        data: { title: cat.title, slug: cat.slug },
      })
      categoryMap.set(cat.slug, newCat.id)
    }
  }

  // 2. Fetch All Posts
  const posts = await payload.find({
    collection: 'posts',
    limit: 100,
  })

  console.log(`Found ${posts.docs.length} posts to classify.`)

  // 3. Classify and Update
  for (const post of posts.docs) {
    const text = (post.title + ' ' + post.slug).toLowerCase()
    const matchedCategoryIds = new Set<string>()

    // Priority matching
    for (const cat of CATEGORIES) {
      if (cat.keywords.some(k => text.includes(k))) {
        const catId = categoryMap.get(cat.slug)
        if (catId) matchedCategoryIds.add(catId)
      }
    }

    // Default to 'Management Consulting' or 'Products' if no match found, or finding a best fit
    // Logic: if 'industry' keywords match, prioritize Industry.
    
    // Simplification: Assign ALL matched categories
    if (matchedCategoryIds.size === 0) {
        // Fallback based on content analysis if needed, but for now let's see
        console.warn(`No match for: ${post.title}`)
    } else {
        const categoryIds = Array.from(matchedCategoryIds)
        console.log(`Updating [${post.title}] -> Categories: ${categoryIds.length}`)
        
        await payload.update({
            collection: 'posts',
            id: post.id,
            data: {
                categories: categoryIds
            }
        })
    }
  }

  console.log('Reclassification complete.')
  process.exit(0)
}

reclassifyPosts().catch(console.error)
