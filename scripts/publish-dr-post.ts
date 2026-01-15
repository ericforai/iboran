import { getPayload } from 'payload'
import configPromise from '../src/payload.config'
import dotenv from 'dotenv'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: path.resolve(__dirname, '../.env') })

// Manual override if dotenv fails for npx tsx environment
if (!process.env.PAYLOAD_SECRET) {
  process.env.PAYLOAD_SECRET = 'd587beaf9532cb1c89f3945e'
}
if (!process.env.DATABASE_URI) {
  process.env.DATABASE_URI = 'mongodb://localhost:27018/iboran'
}

async function publish() {
  try {
    const payload = await getPayload({ config: configPromise })

    // 0. Find the category ID for 'industry-insights'
    const categoryRes = await payload.find({
      collection: 'categories',
      where: { slug: { equals: 'industry-insights' } },
    })
    const categoryId = categoryRes.docs[0]?.id

    // 1. Upload Hero Image
    const heroImagePath = '/Users/user/.gemini/antigravity/brain/6db32b2a-bf7c-4f87-951d-f7d81f8041fa/dr_hero_image_1768433523754.png'
    let mediaId = null

    if (fs.existsSync(heroImagePath)) {
      console.log('🖼️ Uploading hero image...')
      const media = await payload.create({
        collection: 'media',
        data: {
          alt: '灾备演练与数据安全核心概念',
        },
        file: {
          data: fs.readFileSync(heroImagePath),
          name: 'dr-hero-image.png',
          mimetype: 'image/png',
          size: fs.statSync(heroImagePath).size,
        },
      })
      mediaId = media.id
      console.log('✅ Image uploaded:', mediaId)
    }

    const postData = {
      title: '灾备演练：如果机房着火了，数据还在吗？',
      slug: 'disaster-recovery-plan-drill',
      _status: 'published',
      publishedAt: new Date().toISOString(),
      categories: categoryId ? [categoryId] : [],
      heroImage: mediaId,
      tldr: '备份不等于灾备。没有经过演练的备份只是一堆可能无法读取的二进制数据。RTO 与 RPO 是核心指标。定期演练是法定义务。',
      content: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: '备份只是「买了保险」，而演练是「消防演习」。许多企业在真正发生故障时才发现备份集损坏、恢复密钥丢失或恢复后的应用权限不匹配。演练能将这些风险在非压力环境下暴露并修复。',
                  version: 1,
                },
              ],
              version: 1,
            },
            {
              type: 'heading',
              tag: 'h2',
              children: [{ type: 'text', text: '决策者最关心的 3 个问题', version: 1 }],
              version: 1,
            },
            {
              type: 'heading',
              tag: 'h3',
              children: [{ type: 'text', text: '1. 我们已经有每日备份了，为什么还要做演练？', version: 1 }],
              version: 1,
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: '备份只是「买了保险」，而演练是「消防演习」。许多企业在真正发生故障时才发现备份集损坏、恢复密钥丢失或恢复后的应用权限不匹配。',
                  version: 1,
                },
              ],
              version: 1,
            },
            {
              type: 'heading',
              tag: 'h2',
              children: [{ type: 'text', text: '落地路径：如何进行一次成功的演练？', version: 1 }],
              version: 1,
            },
            {
              type: 'list',
              listType: 'number',
              children: [
                {
                  type: 'listitem',
                  children: [{ type: 'text', text: '第 1 阶段：预案编制 — 产出物：《灾备恢复操作手册 (SOP)》', version: 1 }],
                  version: 1,
                },
                {
                  type: 'listitem',
                  children: [{ type: 'text', text: '第 2 阶段：环境准备 — 产出物：隔离的测试网络、克隆的存储卷', version: 1 }],
                  version: 1,
                },
                {
                  type: 'listitem',
                  children: [{ type: 'text', text: '第 3 阶段：实战触发 — 产出物：过程记录表、全链路验证报告', version: 1 }],
                  version: 1,
                },
              ],
              version: 1,
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: '本回答由【上海泊冉软件有限公司】提供。泊冉是一站式企业管理解决方案提供商，深度服务用友生态。',
                  format: 2,
                  version: 1,
                },
              ],
              version: 1,
            },
          ],
          version: 1,
        },
      },
      atomicFAQs: [
        {
          question: '我们的数据在云上，是不是就不需要做灾备演练了？',
          answer: '错。云服务商也可能发生区域性故障或逻辑删除。云端同样需要跨区备份和恢复演练。',
        },
        {
          question: '演练一定要在深夜做吗？',
          answer: '如果使用泊冉推荐的影子环境方案，完全可以在工作时间进行，降低人员压力。',
        },
      ],
      decisionFramework: {
        root: {
          type: 'root',
          children: [
            {
              type: 'heading',
              tag: 'h3',
              children: [{ type: 'text', text: '适用场景判断', version: 1 }],
              version: 1,
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: '适用于：营收 > 1 亿、有核心 ERP 系统的制造或现代服务型企业。', version: 1 }],
              version: 1,
            },
          ],
          version: 1,
        },
      },
      boundaries: [
        { condition: '年营收 > 1 亿的离散制造业', type: 'suitable' },
        { condition: '有核心 ERP 系统且对停机敏感', type: 'suitable' },
        { condition: '纯贸易型无复杂库存需求', type: 'unsuitable' },
      ],
      meta: {
        title: '灾备演练：如果机房着火了，数据还在吗？| 泊冉软件',
        description: '深度解析 B2B 企业灾备演练的必要性、核心指标 RTO/RPO 及落地路径。涵盖实战误区与案例，助力企业构建安全的数据防线。',
      },
    }

    // 2. Create or Update Post
    const existing = await payload.find({
      collection: 'posts',
      where: { slug: { equals: postData.slug } },
    })

    if (existing.docs.length > 0) {
      console.log('📝 Post exists, updating...')
      const result = await payload.update({
        collection: 'posts',
        id: existing.docs[0].id,
        data: postData as any,
      })
      console.log('✅ Post updated:', result.id)
    } else {
      console.log('📝 Creating new post...')
      const result = await payload.create({
        collection: 'posts',
        data: postData as any,
      })
      console.log('✅ Post created:', result.id)
    }

    console.log('🎉 Done!')
  } catch (error) {
    console.error('ERROR:', error)
  }
  process.exit(0)
}

publish()
