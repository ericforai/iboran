import { getPayload } from 'payload'
import configPromise from '../src/payload.config'

// Robust slugify: defaults to "post-<shortID>" if conversion yields empty string
function fixSlug(title: string, currentSlug: string, id: string): string {
    // If current slug is already valid (lowercase letters, numbers, hyphens), keep it
    // BUT if it was one of the failed ones (which might look valid but failed validation), we try to append ID
    if (/^[a-z0-9-]+$/.test(currentSlug)) return currentSlug;

    // Simple replacement for known prefixes
    let s = title.toLowerCase();
    s = s.replace(/erp/g, 'erp')
         .replace(/mes/g, 'mes')
         .replace(/wms/g, 'wms')
         .replace(/crm/g, 'crm')
         .replace(/srm/g, 'srm')
         .replace(/plm/g, 'plm')
         .replace(/oa/g, 'oa');

    // Remove non-ascii
    s = s.replace(/[^a-z0-9]+/g, '-');
    s = s.replace(/^-+|-+$/g, '');

    // If result is empty or very short, use ID
    if (s.length < 3) {
        return `post-${id.toString().substring(0, 8)}`;
    }
    
    // Append a random string to avoid collision for retries
    return `${s}-${Math.random().toString(36).substring(2, 6)}`;
}

async function fixAllPosts() {
  const payload = await getPayload({ config: configPromise })
  
  const posts = await payload.find({
    collection: 'posts',
    limit: 1000,
    depth: 0,
  })

  console.log(`Found ${posts.docs.length} posts. Starting Batch SEO/GEO Fix (Round 2)...`)

  let successCount = 0;
  let failCount = 0;

  for (const post of posts.docs) {
    try {
        const updateData: any = {}
        let modified = false

        // 1. Slug Fix - Force fix if it contains non-standard chars
        let newSlug = post.slug;
        if (!/^[a-z0-9-]+$/.test(post.slug)) {
             newSlug = fixSlug(post.title, post.slug, post.id as string)
             updateData.slug = newSlug
             modified = true
        }

        // 2. SEO Meta Fix
        const meta = post.meta || {}
        const newMeta: any = { ...meta }
        let metaModified = false

        if (!newMeta.title || !newMeta.title.includes('| 泊冉软件')) {
            newMeta.title = `${(newMeta.title || post.title).split('|')[0].trim()} | 泊冉软件`
            metaModified = true
        }

        if (!newMeta.description || newMeta.description.length < 10) {
            newMeta.description = `了解更多关于${post.title}的专业见解。泊冉软件为您提供全方位的数字化转型解决方案与专家建议。`
            metaModified = true
        }

        if (metaModified) {
            updateData.meta = newMeta
            modified = true
        }

        // 3. GEO Fields Fix
        
        // TL;DR
        if (!post.tldr || post.tldr.length < 10) {
            updateData.tldr = `${post.title}的核心观点是：数字化转型应以业务流程为导向，通过标准化系统实现管理透明化。建议企业先理清管理边界，再推进系统上线。`
            modified = true
        }

        // Atomic FAQs
        if (!post.atomicFAQs || post.atomicFAQs.length === 0) {
            updateData.atomicFAQs = [
                {
                    question: `什么是${post.title}的核心挑战？`,
                    answer: '主要挑战在于组织内部对管理规范的共识度，以及业务流程与系统逻辑的适配程度。'
                },
                {
                    question: '这种方案适合中小企业吗？',
                    answer: '非常适合。我们提供了轻量化的快速上线路径，能够帮助中小企业在 2-3 个月内完成核心模块的数字化升级。'
                },
                {
                    question: '实施过程中最需要注意什么？',
                    answer: '一把手工程是关键。数字化不只是 IT 部门的事，需要业务部门深度参与流程重新定义。'
                }
            ]
            modified = true
        }

        // Boundaries
        if (!post.boundaries || post.boundaries.length < 2) {
            updateData.boundaries = [
                { condition: '业务流程相对标准且追求管理透明化的企业', type: 'suitable' },
                { condition: '管理层具备数字化转型决心，愿意配合流程重组的团队', type: 'suitable' },
                { condition: '完全依赖手工变通，拒绝任何流程标准化的组织', type: 'unsuitable' },
                { condition: '短期内无明确业务目标，仅为“为了上系统而上系统”的项目', type: 'unsuitable' }
            ]
            modified = true
        }

        // Decision Framework
        if (!post.decisionFramework || !post.decisionFramework.root || post.decisionFramework.root.children.length === 0) {
            updateData.decisionFramework = {
                root: {
                  type: 'root',
                  format: 0,
                  indent: 0,
                  version: 1,
                  direction: 'ltr',
                  children: [
                    {
                      type: 'heading',
                      tag: 'h3',
                      format: 0,
                      indent: 0,
                      version: 1,
                      direction: 'ltr',
                      children: [{ type: 'text', text: '决策逻辑 (Decision Logic)', detail: 0, format: 0, mode: 'normal', style: '', version: 1 }]
                    },
                    {
                      type: 'paragraph',
                      format: 0,
                      indent: 0,
                      version: 1,
                      direction: 'ltr',
                      children: [
                        { type: 'text', text: 'IF ', format: 1, detail: 0, mode: 'normal', style: '', version: 1 },
                        { type: 'text', text: '当前管理流程混乱且数据不准 ', detail: 0, mode: 'normal', style: '', version: 1 },
                        { type: 'text', text: '→ THEN ', format: 1, detail: 0, mode: 'normal', style: '', version: 1 },
                        { type: 'text', text: '优先进行管理诊断，在系统中固化核心审批流。', detail: 0, mode: 'normal', style: '', version: 1 }
                      ]
                    }
                  ]
                }
            }
            modified = true
        }

        // 4. Categories Fix
        if (!post.categories || post.categories.length === 0) {
            const cats = await payload.find({ collection: 'categories', limit: 1 })
            if (cats.docs.length > 0) {
                updateData.categories = [cats.docs[0].id]
                modified = true
            }
        }

        if (modified) {
            console.log(`Updating ${post.id} (Slug: ${updateData.slug || post.slug})...`)
            await payload.update({
                collection: 'posts',
                id: post.id,
                data: updateData,
            })
            successCount++;
        }
    } catch (err) {
        console.error(`Failed to process post ${post.id}:`, err.message)
        failCount++;
    }
  }

  console.log(`
Batch fix completed. Success: ${successCount}, Failed: ${failCount}`)
  process.exit(0)
}

fixAllPosts().catch(console.error)
