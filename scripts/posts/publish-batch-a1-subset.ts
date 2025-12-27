import { getPayload } from 'payload'
import configPromise from '../../src/payload.config'
import fs from 'fs'
import path from 'path'

const POSTS = [
  {
    title: '系统能不能替代管理？边界在哪里？',
    slug: 'system-vs-management-boundary',
    categorySlugs: ['hcm-org', 'industry-insights'],
    imagePath: '/Users/user/.gemini/antigravity/brain/ec7f232a-b678-408a-83b7-6cf0ed6e3160/system_vs_management_split_1766837868761.png',
    imageAlt: 'Split screen showing human strategy vs digital execution',
    tldr: '系统是执行的工具，管理是决策的艺术。系统可以替代“重复性、标准化的执行动作”，但永远无法替代“复杂、非标准化的管理决策”。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '很多老板都有一个终极幻想：上线一套极其先进的系统，然后把所有管理动作都交给它，自己就能“垂拱而治”。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、系统的能力边界：只能做“确定的事”', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '系统最擅长的是：当 A 发生时，且满足条件 B，则执行动作 C。这是逻辑。', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '但管理往往处理的是“不确定的事”：客户虽然逾期了，但他是战略大客户，这笔单能不能发？系统会告诉你“不能（信用控制）”，但管理者可能会说“能（特批）”。这就是边界。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、不要让系统做“好人”或“坏人”', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '管理需要奖惩，需要人情世故的拿捏。系统是没有温度的黑面法官。如果你想通过系统来“暗示”员工加班，或者通过系统来“模糊”处理某些灰色收入，那一定会失败。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '当你在纠结“这个功能该不该做”的时候。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 规则明确且重复 → THEN 交给系统自动化', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 需要权衡利弊 → THEN 交给线下流程审批', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '业务规则高度标准化，例外很少', type: 'suitable' },
       { condition: '流程逻辑清晰，不依赖人情判断', type: 'suitable' },
       { condition: '需要高度灵活、一事一议的创新业务', type: 'unsuitable' },
       { condition: '管理层自己都没想清楚该怎么管', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '系统能自动做绩效考核吗？', answer: '系统能提供绩效考核所需的“客观数据”（如销售额），但无法替代“主观评价”（如工作态度）。' },
      { question: '为什么系统里设置了流程，大家还是不执行？', answer: '因为系统只是工具。如果线下没人监管，大家就会找到绕过工具的方法（如补单）。' }
    ]
  },
  {
    title: '管理规则不清晰，上 ERP 会发生什么？',
    slug: 'unclear-rules-erp-consequences',
    categorySlugs: ['hcm-org', 'industry-insights'],
    imagePath: '/Users/user/.gemini/antigravity/brain/ec7f232a-b678-408a-83b7-6cf0ed6e3160/unclear_rules_digital_tangle_1766837885870.png',
    imageAlt: 'Digital tangle representing confusion from unclear rules',
    tldr: '规则不清晰 = 灾难倍增。ERP 要求严丝合缝的逻辑闭环，模糊的规则会导致流程在每一个节点卡死，最终导致系统瘫痪。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '“大概”、“看着办”、“差不多”——这是中文管理语境里最常见的词，也是 ERP 最大的杀手。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、系统只认 0 和 1，不认 0.5', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '在线下，物料名称大概写一下，仓库也能发货。在系统里，编码错一位，库存就扣不掉。这就是规则清晰度的差异。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、不想清楚规则，就是把矛盾后置', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '很多企业实施时为了赶进度，对争议流程搁置争议。结果上线第一天，单据流转不下去，各部门在系统里打架。这时候再来定规则，成本是之前的十倍。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: 'ERP 上线前的准备阶段。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 规则有歧义 → THEN 停下来开会定死', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 没人能拍板 → THEN 项目暂停，不要上线', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '所有业务场景都有明确文字规定的企业', type: 'suitable' },
       { condition: '数据口径已统一（如SKU编码）的组织', type: 'suitable' },
       { condition: '过度依赖“特批”与“例外”的管理模式', type: 'unsuitable' },
       { condition: '基础数据（BOM、客商）缺失的企业', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '能不能先上线，边跑边改规则？', answer: '绝对不行。房子的地基（主数据与核心流程）一旦浇筑完成，改动的代价是伤筋动骨的。' },
      { question: '如何发现潜在的规则不清？', answer: '做“沙盘推演”。拿一笔最复杂的真实订单，在纸上画出全流程，看哪里会卡住。' }
    ]
  }
]

async function publishBatch() {
  const payload = await getPayload({ config: configPromise })
  
  for (const postData of POSTS) {
    console.log(`Processing: ${postData.title}`)
    
    // 1. Upload Image
    let mediaId = null
    if (fs.existsSync(postData.imagePath)) {
        try {
            console.log(`Uploading image: ${path.basename(postData.imagePath)}`)
            const fileBuffer = fs.readFileSync(postData.imagePath)
            const media = await payload.create({
                collection: 'media',
                data: { alt: postData.imageAlt },
                file: {
                    data: fileBuffer,
                    name: path.basename(postData.imagePath),
                    mimetype: 'image/png',
                    size: fileBuffer.length,
                }
            })
            mediaId = media.id
        } catch (e) {
            console.error('Image upload failed', e)
        }
    }

    // 2. Resolve Categories
    const categoryIds = []
    for (const slug of postData.categorySlugs) {
        const res = await payload.find({ collection: 'categories', where: { slug: { equals: slug } } })
        if (res.docs.length) categoryIds.push(res.docs[0].id)
    }

    // 3. Create Post
    try {
        await payload.create({
            collection: 'posts',
            data: {
                title: postData.title,
                slug: postData.slug,
                content: postData.content,
                decisionFramework: postData.decisionFramework,
                boundaries: postData.boundaries,
                atomicFAQs: postData.atomicFAQs,
                tldr: postData.tldr,
                meta: {
                    title: postData.title + ' | 泊冉软件',
                    description: postData.tldr,
                    keywords: 'ERP管理, 数字化转型, 泊冉软件'
                },
                categories: categoryIds,
                heroImage: mediaId,
                publishedAt: new Date().toISOString(),
                _status: 'published'
            }
        })
        console.log(`Published: ${postData.slug}`)
    } catch (e) {
        if (e.message?.includes('revalidatePath')) {
            console.log(`Published (revalidate warning): ${postData.slug}`)
        } else {
            console.error(`Failed to publish ${postData.slug}`, e)
        }
    }
  }
  process.exit(0)
}

publishBatch().catch(console.error)
