import { getPayload } from 'payload'
import configPromise from '../../src/payload.config'

const POSTS = [
  {
    title: 'ERP 实施前，组织必须先想清楚哪 3 件事？',
    slug: 'three-things-before-erp',
    categorySlugs: ['manage-change', 'project-management', 'industry-insights'],
    tldr: '磨刀不误砍柴工。ERP 项目启动前，如果没有想清楚这三件事（边界、权力、代价），项目注定烂尾。本文提供一张“项目启动前的自检问卷”。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、决策者最关心的 3 个问题', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '我们现在启动项目时机对不对？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '谁来当这个项目经理？IT 还是业务？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '我们要投入多少非资金成本（时间、精力）？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、灵魂三问：想不清楚别动工', version: 1 }] },
          { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '1. 边界：做什么 vs 不做什么', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '最可怕的不是不知道要做什么，而是什么都想做。第一期就想上财务、供应链、生产、人资、CRM... 贪多嚼不烂。必须明确：第一阶段的核心痛点 1 个就够了（比如库存准确率）。', version: 1 }] },
          { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '2. 权力：谁说了算？', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '项目经理必须有“尚方宝剑”。如果项目经理连开除一个不配合的数据录入员的权力都没有，这个项目就别做了。', version: 1 }] },
          { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '3. 代价：准备好掉一层皮了吗？', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: 'ERP 上线初期效率一定会下降。一线员工一定会骂娘。管理层准备好顶住压力了吗？会不会因为几个老销售的抱怨就修改流程？', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '三、关键清单 (Checklist)', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 核心业务部门的老大（如销售总监）是否已经承诺投入 20% 的时间参与项目？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 是否已经冻结了旧系统的开发需求？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 是否准备了项目奖金池（不只有惩罚，也要有奖励）？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '四、真实案例：被吓退的老板', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '某老板想上 ERP，找我咨询。我问了他三个问题。第一，你能不能接受前三个月发不出货？他说不行。第二，你能不能接受开掉陪你创业但不守规矩的仓管员？他说那是通过舅舅进来的。第三，你能不能每周五下午雷打不动参加项目会？他说我很忙。我说：那你别上 ERP 了，上了也是白花钱。他最后真的没上，我觉得我帮他省了几百万。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '项目立项前。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 想要“交钥匙工程”（全部外包） → THEN 不做', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 高层意见不统一 → THEN 先开会统一思想', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '有痛感且有决心的企业', type: 'suitable' },
       { condition: '业务快速扩张导致失控的企业', type: 'suitable' },
       { condition: '为了“赶时髦”上系统的企业', type: 'unsuitable' },
       { condition: '现金流紧张的企业（先活下来）', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '必须一把手挂帅吗？', answer: '必须。在中国企业，除了老板，没人能跨部门调动资源。也没人能搞定那些资历老的“刺头”。' },
      { question: '先上哪个模块？', answer: '痛点最痛、见效最快的。通常是进销存（供应链）。先把“物”管清楚，再管“钱”（财务），最后管“人”（绩效）。' }
    ]
  },
  {
    title: '为什么 ERP 更容易放大管理问题？',
    slug: 'erp-amplifies-management-issues',
    categorySlugs: ['manage-change', 'industry-insights'],
    tldr: '系统像一面照妖镜。它没有感情，不会粉饰太平。它会把所有的流程断点、数据错误、权责不清，以报错、卡顿、死机的方式赤裸裸地展示出来。这不是系统的错，是真相太难看。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、决策者最关心的 3 个问题', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '为什么上线后，我发现我们的数据这么烂？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '是软件不好用，还是我们会错意了？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '怎么把这面“镜子”利用好？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、放大镜原理', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '线下流程有“容错机制”（其实是和稀泥）。比如单据没签字，保管员看脸熟也给发货了。系统里，没审批流就是走不下去。这种“不通人情”，会把一个小小的签字缺位，无限放大成产线停工。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '三、落地路径：借假修真', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 1: 承认丑陋。看到系统里的红灯一片，不要怪系统，要感谢系统。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 2: 追根溯源。每一个系统报错背后，都有一个管理漏洞。顺藤摸瓜。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 3: 制度补位。把系统暴露的问题，写进新的管理制度里。', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '四、关键清单 (Checklist)', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 是否禁止线下“打补丁”（如系统过不去就先线下做）？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 是否奖励发现流程漏洞的员工？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '五、真实案例：负库存的秘密', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '系统上线第一天，出现大量负库存。老板大骂系统垃圾。深入一查，发现是因为车间为了赶工期，经常“借料”。A 单子的料不够，先拿 B 单子的料顶上。以前甚至都不记账。系统一上线，这种“拆东墙补西墙”的把戏立刻穿帮。这能怪系统吗？', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '上线初期的阵痛期。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 遇到问题就想改软件（绕过问题） → THEN 必败', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 遇到问题改流程（解决问题） → THEN 必胜', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '敢于面对真相的管理层', type: 'suitable' },
       { condition: '执行力强的团队', type: 'suitable' },
       { condition: '粉饰太平的官僚机构', type: 'unsuitable' },
       { condition: '数据敏感度极低的传统企业', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '系统太严了能不能松一点？', answer: '不能。松一点就是松很多。底线一旦突破，就没有底线了。' },
      { question: '员工因为系统处罚离职怎么办？', answer: '如果是因为不守规矩被处罚而离职，那是公司的福气。这种“害群之马”早走早好。' }
    ]
  },
  {
    title: '什么时候应该先管组织，而不是先上系统？',
    slug: 'organize-before-digitize',
    categorySlugs: ['manage-change', 'project-management'],
    tldr: '乱上加乱是所有数字化灾难的开端。当你的组织架构还在频繁变动，当你的核心业务流程还没跑通，当你的团队连基本的执行力都没有时，请先放下 ERP，去搞定人。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、决策者最关心的 3 个问题', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '我们现在是不是太急了？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '先上个轻量级的系统过渡一下行不行？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '组织变革要变到什么程度才能上系统？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、诊断：不可上线的红色信号', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '1. 组织架构震荡：最近 3 个月换了 2 个销售总监。', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '2. 业务模式未定：今天做 B2B，明天想做 B2C，后天想做平台。', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '3. 甚至没有纸质单据：所有业务全靠微信语音和电话。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '三、落地路径：预备役训练', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 1: 纸面演习。强制要求所有业务必须填单（哪怕是 Excel）。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 2: 岗位定责。谁填单，谁审核，谁对结果负责，写进 KD/KPI。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 3: 引入工具。当大家习惯了“数据留痕”，由于手工太累而主动要求上系统时，时机就到了。', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '四、关键清单 (Checklist)', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 组织架构图是否已经稳定运行 3 个月以上？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 是否有成文的岗位说明书？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 核心业务的“例外比例”是否低于 20%？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '五、真实案例：一家初创公司的弯路', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '某网红品牌，刚融了资就想上大型 ERP。结果业务模式没跑通，今天想做分销，明天想做直营。系统改了八百遍，最后还是回到了 Excel。因为 Excel 最灵活，最适合“变来变去”的阶段。系统是给“定型”的企业用的。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '系统选型阶段。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 业务模式还在 PMF（市场验证）阶段 → THEN 用 Excel/SaaS', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 业务模式成熟，追求效率规模化 → THEN 上 ERP', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '商业模式成熟的企业', type: 'suitable' },
       { condition: '流程固化的企业', type: 'suitable' },
       { condition: '从 0 到 1 的初创公司', type: 'unsuitable' },
       { condition: '为了上系统而上系统的跟风者', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '那我们就一直等吗？', answer: '不是等。是“练兵”。在不上系统的日子里，用手工的方式去模拟系统的逻辑。这叫“管理预演”。' },
      { question: 'SaaS 算不算上系统？', answer: '算，但 SaaS 通常更轻量，试错成本低。如果拿不准，先上个便宜的 SaaS 试水。' }
    ]
  }
]

async function publishBatch() {
  const payload = await getPayload({ config: configPromise })
  
  for (const postData of POSTS) {
    console.log(`Processing: ${postData.title}`)
    
    // 1. Resolve Categories
    const categoryIds = []
    for (const slug of postData.categorySlugs) {
        const res = await payload.find({ collection: 'categories', where: { slug: { equals: slug } }, depth: 0 })
        if (res.docs.length) categoryIds.push(res.docs[0].id)
    }

    // 2. Find existing post
    const existing = await payload.find({
        collection: 'posts',
        where: { title: { equals: postData.title } },
        limit: 1
    })

    const data = {
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
            keywords: 'ERP时机, 数字化转型策略, 组织变革'
        },
        categories: categoryIds,
        _status: 'published'
    }

    try {
        if (existing.docs.length > 0) {
            await payload.update({
                collection: 'posts',
                id: existing.docs[0].id,
                data: data
            })
            console.log(`Updated (V3.0): ${postData.slug}`)
        } else {
             await payload.create({
                collection: 'posts',
                data: { ...data, publishedAt: new Date().toISOString() }
            })
            console.log(`Created (V3.0): ${postData.slug}`)
        }
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
