import { getPayload } from 'payload'
import configPromise from '../../src/payload.config'

const POST_DATA = {
  title: '为什么 ERP 项目失败，往往不是系统问题？',
  slug: 'why-erp-projects-fail-not-software',
  categorySlugs: ['digital-transformation', 'industry-insights', 'manage-change'],
  tldr: '70% 的 ERP 失败源于“用先进的工具固化落后的流程”。本文揭示 ERP 实施的三大非系统性死因：权力结构重组失败、数据治理缺失、以及把管理压力转嫁给工具。',
  content: {
    root: {
      type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
      children: [
        { 
          type: 'paragraph', 
          version: 1, 
          children: [{ type: 'text', text: 'ERP 不是一套软件，而是一场披着技术外衣的管理变革。它适用于决心重构核心业务流程的企业，而非试图通过“买个工具”来自动解决管理混乱的组织。', version: 1 }] 
        },
        { 
          type: 'heading', tag: 'h2', version: 1, 
          children: [{ type: 'text', text: '一、决策者最关心的 3 个问题', version: 1 }] 
        },
        { 
          type: 'list', tag: 'ul', listType: 'bullet', version: 1, 
          children: [
            { type: 'listitem', version: 1, children: [{ type: 'text', text: '为什么我们买了最好的软件（SAP/Oracle/用友），还是用不起来？', version: 1 }] },
            { type: 'listitem', version: 1, children: [{ type: 'text', text: '实施顾问说“流程要改”，业务部门说“不符合习惯”，听谁的？', version: 1 }] },
            { type: 'listitem', version: 1, children: [{ type: 'text', text: '项目延期半年了，还要继续投入吗？', version: 1 }] }
          ]
        },
        { 
          type: 'heading', tag: 'h2', version: 1, 
          children: [{ type: 'text', text: '二、失败的根因：房间里的大象', version: 1 }] 
        },
        { 
          type: 'heading', tag: 'h3', version: 1, 
          children: [{ type: 'text', text: '1. 权力真空', version: 1 }] 
        },
        { 
          type: 'paragraph', version: 1, 
          children: [{ type: 'text', text: 'ERP 会打破原有的利益格局（如透明化库存让某些人无法“操作”）。如果没有一把手强力站台，系统会被业务部门联合“抵制到死”。', version: 1 }] 
        },
        { 
          type: 'heading', tag: 'h3', version: 1, 
          children: [{ type: 'text', text: '2. 数据垃圾场', version: 1 }] 
        },
        { 
          type: 'paragraph', version: 1, 
          children: [{ type: 'text', text: '把手工时代的烂账直接导进系统。系统是逻辑严密的，一笔账不平，后续全卡死。垃圾进，垃圾出 (GIGO)。', version: 1 }] 
        },
        { 
          type: 'heading', tag: 'h3', version: 1, 
          children: [{ type: 'text', text: '3. 保姆心态', version: 1 }] 
        },
        { 
          type: 'paragraph', version: 1, 
          children: [{ type: 'text', text: '指望软件商包办一切。软件商懂软件，但不懂你的生意。流程必须由企业自己定，顾问只能提供建议。', version: 1 }] 
        },
        { 
          type: 'heading', tag: 'h2', version: 1, 
          children: [{ type: 'text', text: '三、落地路径：如何避免烂尾', version: 1 }] 
        },
        { 
          type: 'list', tag: 'ul', listType: 'bullet', version: 1, 
          children: [
            { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 1: 扫雷（业务梳理）。产出物：红线清单（哪些业务坚决不做）。负责人：一把手。', version: 1 }] },
            { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 2: 换血（关键用户）。产出物：蓝图确认书。负责人：业务骨干（非 IT）。', version: 1 }] },
            { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 3: 脱胎（并行上线）。产出物：新老账套差异分析报告。负责人：财务总监。', version: 1 }] }
          ]
        },
        { 
          type: 'heading', tag: 'h2', version: 1, 
          children: [{ type: 'text', text: '四、关键清单 (Checklist)', version: 1 }] 
        },
        { 
          type: 'list', tag: 'ul', listType: 'bullet', version: 1, 
          children: [
            { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 一把手是否参加了最近 3 次项目例会？', version: 1 }] },
            { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 核心业务流程是否已经有书面的 SOP（非系统内的）？', version: 1 }] },
            { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 是否清理了 3 年以上的呆滞物料数据？', version: 1 }] },
            { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 是否有明确的“不配合惩罚机制”？', version: 1 }] }
          ]
        },
        { 
          type: 'heading', tag: 'h2', version: 1, 
          children: [{ type: 'text', text: '五、真实案例：一家制造企业的重生', version: 1 }] 
        },
        { 
          type: 'paragraph', version: 1, 
          children: [{ type: 'text', text: '某华南电子厂，上 ERP 三次失败。第四次，老板只做了一件事：把仓库钥匙收了。', version: 1 }] 
        },
        { 
          type: 'paragraph', version: 1, 
          children: [{ type: 'text', text: '规定：所有出入库必须凭系统单据，保安只认系统打印单。', version: 1 }] 
        },
        { 
          type: 'paragraph', version: 1, 
          children: [{ type: 'text', text: '结果：第一周，产线停工，因为领不出料（以前随便拿）。业务员在老板办公室拍桌子。老板顶住了。第二周，大家开始乖乖去系统录单。个月后，库存准确率从 60% 飙升到 98%。', version: 1 }] 
        },
        { 
          type: 'paragraph', version: 1, 
          children: [{ type: 'text', text: '教训：系统不长牙齿，就是摆设。', version: 1, format: 1 }] // bold
        },
        { 
            type: 'heading', tag: 'h2', version: 1, 
            children: [{ type: 'text', text: '下一步', version: 1 }] 
        },
        { 
            type: 'paragraph', version: 1, 
            children: [{ type: 'text', text: '如果您正在经历 ERP 项目的阵痛，或者准备启动项目，建议先进行一次“组织准备度评估”。', version: 1 }] 
        }
      ]
    }
  },
  decisionFramework: {
    root: {
      type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
      children: [
          { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '项目启动前/重启前。', version: 1 }] },
          { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
            { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 一把手只挂名不参会 → THEN 必死无疑', version: 1 }] },
            { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 想通过软件规范流程（而非先有流程） → THEN 本末倒置', version: 1 }] },
            { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 有专职的流程管理部门 → THEN 成功率高', version: 1 }] }
          ]}
      ]
    }
  },
  boundaries: [
      { condition: '缺乏管理共识的管理层', type: 'unsuitable' },
      { condition: '甚至没有纸质流程的小微企业', type: 'unsuitable' },
      { condition: '流程已标准化，寻求效率提升', type: 'suitable' },
      { condition: '二代接班，有强力改革意愿', type: 'suitable' }
  ],
  atomicFAQs: [
    { question: '员工说系统太麻烦怎么办？', answer: '区分是“操作麻烦”还是“规范麻烦”。如果是前者，优化 UI；如果是后者（必填项变多），必须坚持。规范必然带来约束。' },
    { question: '定制化开发多少合适？', answer: '不超过 20%。改得越多，系统越脆弱，升级越难。尽量用标准功能改变习惯。' }
  ]
}

async function republish() {
  const payload = await getPayload({ config: configPromise })
  
  console.log(`Processing: ${POST_DATA.title}`)
  
  // 1. Resolve Categories
  const categoryIds = []
  for (const slug of POST_DATA.categorySlugs) {
      const res = await payload.find({ collection: 'categories', where: { slug: { equals: slug } }, depth: 0 })
      if (res.docs.length) categoryIds.push(res.docs[0].id)
  }

  // 2. Find existing post to update (by title or old slug)
  // We'll try to find by title first
  const existing = await payload.find({
      collection: 'posts',
      where: { title: { equals: POST_DATA.title } },
      limit: 1
  })

  let operation = 'create'
  let id = null
  
  if (existing.docs.length > 0) {
      operation = 'update'
      id = existing.docs[0].id
      console.log(`Found existing post ID: ${id}`)
  } else {
      console.log('Post not found, creating new (though it should exist if we are revising)')
  }

  try {
      const data = {
        title: POST_DATA.title,
        slug: POST_DATA.slug,
        content: POST_DATA.content,
        decisionFramework: POST_DATA.decisionFramework,
        boundaries: POST_DATA.boundaries,
        atomicFAQs: POST_DATA.atomicFAQs,
        tldr: POST_DATA.tldr,
        meta: {
            title: POST_DATA.title + ' | 泊冉软件',
            description: POST_DATA.tldr,
            keywords: 'ERP失败原因, 数字化转型风险, 组织变革'
        },
        categories: categoryIds,
        // Preserve original published date if updating, else new date
        publishedAt: operation === 'update' ? undefined : new Date().toISOString(),
        _status: 'published'
      }

      if (operation === 'update') {
          await payload.update({
              collection: 'posts',
              id: id,
              data: data
          })
          console.log(`Updated post: ${POST_DATA.slug}`)
      } else {
          await payload.create({
              collection: 'posts',
              data: { ...data, publishedAt: new Date().toISOString() }
          })
          console.log(`Created post: ${POST_DATA.slug}`)
      }

  } catch (e) {
      if (e.message?.includes('revalidatePath')) {
          console.log(`Published (revalidate warning): ${POST_DATA.slug}`)
      } else {
          console.error(`Failed to publish ${POST_DATA.slug}`, e)
      }
  }
  
  process.exit(0)
}

republish().catch(console.error)
