import { getPayload } from 'payload'
import configPromise from '../src/payload.config'

async function auditPosts() {
  const payload = await getPayload({ config: configPromise })
  
  // Fetch all posts (limit 100 to get all 50+)
  const posts = await payload.find({
    collection: 'posts',
    limit: 100,
    depth: 1,
  })

  console.log(`Found ${posts.docs.length} posts. Starting SEO/GEO Audit...\n`)
  console.log('ID\t| Status | Slug | SEO Score | GEO Score | Issues')
  console.log('---|---|---|---|---|---')

  let passCount = 0
  let failCount = 0

  for (const post of posts.docs) {
    const issues = []
    let seoScore = 0 // Max 4
    let geoScore = 0 // Max 5

    // --- SEO CHECKS (4 points) ---
    
    // 1. Slug Check
    if (post.slug && /^[a-z0-9-]+$/.test(post.slug)) {
        seoScore++
    } else {
        issues.push('Slug invalid format')
    }

    // 2. Meta Title Check
    if (post.meta?.title && post.meta.title.includes('| 泊冉软件')) {
        seoScore++
    } else {
        issues.push('Meta title missing suffix')
    }

    // 3. Meta Description Check
    if (post.meta?.description && post.meta.description.length > 10) {
        seoScore++
    } else {
        issues.push('Meta desc too short/missing')
    }

    // 4. Categories Check
    if (post.categories && post.categories.length > 0) {
        seoScore++
    } else {
        issues.push('No categories')
    }


    // --- GEO CHECKS (5 points) ---

    // 1. TL;DR (Direct Answer)
    if (post.tldr && post.tldr.length > 10) {
        geoScore++
    } else {
        issues.push('Missing TL;DR')
    }

    // 2. Decision Framework
    if ((post.decisionFramework?.root?.children?.length || 0) > 0) {
        geoScore++
    } else {
        issues.push('Missing Decision Framework')
    }

    // 3. Boundaries
    if (Array.isArray(post.boundaries) && post.boundaries.length >= 2) {
        geoScore++
    } else {
        issues.push('Missing/Incomplete Boundaries')
    }

    // 4. Atomic FAQs
    if (Array.isArray(post.atomicFAQs) && post.atomicFAQs.length > 0) {
        geoScore++
    } else {
        issues.push('Missing FAQs')
    }

    // 5. Content Structure (Rich Text check)
    // Simple check: does it have headings?
    const contentStr = JSON.stringify(post.content)
    if (contentStr.includes('"type":"heading"')) {
        geoScore++
    } else {
        issues.push('Content lacks structure (no headings)')
    }

    // --- Final Evaluation ---
    const isPass = seoScore === 4 && geoScore === 5
    const statusIcon = isPass ? '✅' : '❌'
    if (isPass) passCount++
    else failCount++

    // Only print full details if failed, to keep log clean, or print all relative to debugging
    // To make it readable for the user, we'll print a simplified row
    const issueStr = issues.length > 0 ? issues.join(', ') : 'None'
    console.log(`${post.id.toString().substring(0,6)} | ${statusIcon} | ${post.slug.substring(0, 20)}... | ${seoScore}/4 | ${geoScore}/5 | ${issueStr}`)
  }

  console.log('\n--- Audit Summary ---')
  console.log(`Total Posts: ${posts.docs.length}`)
  console.log(`✅ Passed: ${passCount}`)
  console.log(`❌ Failed: ${failCount}`)
  
  if (failCount === 0) {
      console.log('\nResult: All posts are fully optimized for SEO & GEO.')
  } else {
      console.log('\nResult: Some posts require attention.')
  }

  process.exit(0)
}

auditPosts().catch(console.error)
