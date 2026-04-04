import 'dotenv/config'
import { getPayload } from 'payload'
import configPromise from '../src/payload.config'

const CATEGORIES_CONFIG = [
  {
    title: '行业解决方案',
    slug: 'industry-solutions',
    keywords: ['能源', '化工', '电子', '汽配', '汽车零部件', '快消', '食品', '乳制品', '商贸', '批发', '跨境', '贸易', '制造', '物流', '服装', '建材', '医药', '餐饮', '连锁', '零售', '离散制造', '流程制造']
  },
  {
    title: '管理咨询',
    slug: 'management-consulting',
    keywords: ['pmo', '变革', '数字化转型', '集团', 'ssc', '共享中心', '共享服务', '核算', '咨询', '选型', '公司治理', '财务管理', '成本控制', '审计', '合规', '绩效', '战略', '风险']
  },
  {
    title: '实施与交付',
    slug: 'implementation',
    keywords: ['实施', '上线', '交付', '数据迁移', '搬家', '培训', '运维', '支持', '方法论', '验收', '里程碑', '项目管理', '蓝图', '业务梳理']
  },
  {
    title: '产品与技术',
    slug: 'products-tech',
    keywords: ['erp', 'saas', 'plm', 'mes', 'yonsuite', 'yonbip', 'bip', 'u9', 'nc', 'u8', '用友', '软件', '系统', '架构', '云', 'api', '接口', '集成', '中台', '低代码', '开发', '技术', '版本', 'BOM', 'ECN']
  }
]

async function auditCategorization() {
  console.log('🚀 Starting Blog Posts Categorization Audit...')
  
  const payload = await getPayload({ config: configPromise })

  // 1. Map slug to ID
  const categoryMap = new Map<string, string>()
  const cats = await payload.find({
    collection: 'categories',
    limit: 100,
  })

  for (const cat of cats.docs) {
    categoryMap.set(cat.slug, cat.id)
  }

  // Ensure all standard categories exist in map
  for (const config of CATEGORIES_CONFIG) {
    if (!categoryMap.has(config.slug)) {
      console.log(`⚠️  Category missing: ${config.title} (${config.slug}). Creating...`)
      const newCat = await payload.create({
        collection: 'categories',
        data: {
          title: config.title,
          slug: config.slug
        }
      })
      categoryMap.set(config.slug, newCat.id)
    }
  }

  // 2. Fetch all posts
  const allPosts = await payload.find({
    collection: 'posts',
    limit: 500, // Fetch all
  })

  console.log(`📝 Total posts found: ${allPosts.docs.length}`)
  let updatedCount = 0
  let skippedCount = 0

  for (const post of allPosts.docs) {
    const searchContent = (post.title + ' ' + (post.slug || '')).toLowerCase()
    const matchedCategoryIds = new Set<string>()

    // Use current categories if already present (optional: replace or append?)
    // User said "全附上分类" - suggesting ensuring they are properly categorized.
    // I will RE-CATEGORIZE to ensure consistency.

    for (const config of CATEGORIES_CONFIG) {
      if (config.keywords.some(keyword => searchContent.includes(keyword.toLowerCase()))) {
        const id = categoryMap.get(config.slug)
        if (id) matchedCategoryIds.add(id)
      }
    }

    // Default to 'Products & Tech' if no match
    if (matchedCategoryIds.size === 0) {
      const techId = categoryMap.get('products-tech')
      if (techId) matchedCategoryIds.add(techId)
    }

    const categoryIds = Array.from(matchedCategoryIds)
    
    // Check if update is needed (to avoid unnecessary API calls)
    const currentCategoryIds = (post.categories || []).map((c: any) => typeof c === 'object' ? c.id : c)
    const isSame = categoryIds.length === currentCategoryIds.length && 
                   categoryIds.every(id => currentCategoryIds.includes(id))

    // Prepare update data
    const updateData: any = {
      categories: categoryIds,
    }

    // [HOTFIX] Fix validation errors for boundaries: [ {} ]
    if (post.boundaries && Array.isArray(post.boundaries)) {
      const cleanBoundaries = post.boundaries.filter((b: any) => b && (b.condition || b.type || b.description))
      if (cleanBoundaries.length !== post.boundaries.length) {
        console.log(`🧹 Cleaning empty boundaries for [${post.title}]`)
        updateData.boundaries = cleanBoundaries
      }
    }

    if (isSame && !updateData.boundaries) {
      skippedCount++
      continue
    }

    console.log(`✅ Updating [${post.title}] -> [${categoryIds.map(id => {
        // Find title for logging
        const cat = CATEGORIES_CONFIG.find(c => categoryMap.get(c.slug) === id)
        return cat ? cat.title : id
    }).join(', ')}]`)

    try {
      await payload.update({
        collection: 'posts',
        id: post.id,
        data: updateData,
      })
      updatedCount++
    } catch (err: any) {
      console.error(`❌ Failed to update [${post.title}] (${post.id}):`)
      if (err.data && err.data.errors) {
        console.error(JSON.stringify(err.data.errors, null, 2))
      } else {
        console.error(err)
      }
      skippedCount++ 
    }
  }

  console.log('\n✨ Audit Complete!')
  console.log(`------------------------------`)
  console.log(`Total Posts:   ${allPosts.docs.length}`)
  console.log(`Updated:       ${updatedCount}`)
  console.log(`No change:     ${skippedCount}`)
  console.log(`------------------------------`)
  
  process.exit(0)
}

auditCategorization().catch(err => {
  console.error('❌ Audit Failed:', err)
  process.exit(1)
})
