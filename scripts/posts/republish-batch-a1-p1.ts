import { getPayload } from 'payload'
import configPromise from '../../src/payload.config'

const POSTS = [
  {
    title: '为什么组织管理问题，上什么系统都没用？',
    slug: 'organizational-issues-cannot-be-solved-by-system',
    categorySlugs: ['manage-change', 'industry-insights'],
    tldr: '系统放大的是能力。如果管理能力是负数，上系统后只会把负数放大。本文通过“烂泥扶不上墙”的真实困境，解析为什么没有组织变革的数字化转型注定是徒劳。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、决策者最关心的 3 个问题', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '是不是换个更贵的软件（比如从用友换成 SAP）就能解决问题？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '为什么上线后，部门之间的推诿反而更严重了？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '如何判断是人的问题，还是系统的问题？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、失败的根因：物理世界与数字世界的割裂', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '很多企业试图用“数字世界的严谨”来掩盖“物理世界的随意”。比如，线下发货从来不点数，指望上了系统库存能准。这不仅不可能，还会导致系统数据与实物彻底脱节，形成“两张皮”。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '三、落地路径：管理先行', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 1: 物理流程标准化。不谈软件，先把线下的单据流跑通。签字必须到位。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 2: 数据治理。把物料、客户、供应商整理干净，去除重复项。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 3: 系统固化。这时候再把跑通的流程搬到系统上。', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '四、真实案例：汽配厂的那个“幽灵库存”', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '某汽配厂，系统显示库存 1000 个，仓库里只有 800 个。查了半天，发现是因为车间领料从来不打单，全是“口头领料”。因为老板就是这么干的，“急件先拿走，回头再补单”。', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '结果：补单永远跟不上拿货。系统库存永远是错的。财务没法核算成本。', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '解决：老板带头，谁不打单就开除。坚持了两个月，库存准了。这跟软件有关系吗？没有。全是管理。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '系统上线前夕的自我诊断。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 线下流程乱成一团麻 → THEN 别上系统，先整顿', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 岗位职责不清（一人多岗且无授权） → THEN 别上系统', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '有明确的 SOP 手册', type: 'suitable' },
       { condition: '有强势的运营总监推行制度', type: 'suitable' },
       { condition: '全靠“老法师”凭经验干活', type: 'unsuitable' },
       { condition: '甚至没有一个像样的会议室的企业', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '顾问能不能帮我管管理？', answer: '不能。顾问是教练，不能替运动员上场跑步。管理是企业的内政，必须自己解决。' },
      { question: '要不要请管理咨询？', answer: '如果内部阻力太大，可以请。外来的和尚好念经。利用咨询公司的权威来推动内部变革。' }
    ]
  },
  {
    title: '系统能不能替代管理？边界在哪里？',
    slug: 'system-vs-management-boundaries',
    categorySlugs: ['manage-change', 'industry-insights'],
    tldr: '系统是“法治”的工具，管理是“人治”的艺术。系统能替代重复的计算、校验和流转，但不能替代决策、激励和例外处理。搞混边界，就是灾难的开始。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、决策者最关心的 3 个问题', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '上了 ERP 是不是就可以少招几个管理人员？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '为什么有些事系统里能做，现实中却走不通？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '系统能防止贪污舞弊吗？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、边界解析：上帝的归上帝，凯撒的归凯撒', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '系统的长处是记忆、计算、约束。人的长处是判断、沟通、创新。系统可以强制“必须有合同才能付款”，但无法判断“这份合同是不是为了洗钱”。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '三、关键清单 (Checklist)', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 是否把“需要灵活判断”的事交给了死板的系统？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 是否把“机械重复”的事还在让人做？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 是否为了系统流程而牺牲了客户体验？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '四、下一步', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '梳理业务流程图，用红笔圈出“必须人来做判断”的节点。这些节点，系统只能辅助，不能替代。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '蓝图设计阶段。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 规则是 A=B+C （数学逻辑） → THEN 系统做', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 规则是“看着办”（模糊逻辑） → THEN 人做', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '标准化程度高的制造业', type: 'suitable' },
       { condition: '业务逻辑清晰的电商', type: 'suitable' },
       { condition: '极度依赖创意的设计公司', type: 'unsuitable' },
       { condition: '处于探索期的初创团队', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '系统能减人吗？', answer: '通常不能。系统往往需要更多的数据录入员。但系统能减少“脑力浪费”，让同样的会计能管更多的账，这是增效，不是减人。' },
      { question: '太僵化了怎么办？', answer: '设特批通道。但特批必须有代价（比如扣绩效或层层审批），否则特批泛滥，系统就废了。' }
    ]
  },
  {
    title: '管理规则不清晰，上 ERP 会发生什么？',
    slug: 'unclear-rules-erp-disaster',
    categorySlugs: ['manage-change', 'project-management'],
    tldr: '系统会挂起。因为代码不做选择题。如果规则是“有时候这样，有时候那样”，程序员就没法写代码。最后的结果是系统里充斥着大量的“其他”选项，数据完全不可分析。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、决策者最关心的 3 个问题', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '为什么顾问总逼我们定规则？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '能不能先上线，以后再慢慢定规则？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '怎么处理那些“说不清”的历史遗留问题？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、灾难现场：死循环', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '销售觉得这单能打折，财务觉得不能。以前线下吵一架就解决了（老板拍板）。上线后，系统卡在“待审批”，谁也推不动。老板在飞机上，没法拍板。单子黄了。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '三、落地路径：规则清洗', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 1: 穷举例外。把所有“特殊情况”都列出来。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 2: 二选一。要么把特殊变成一般（制定规则），要么坚决砍掉特殊业务。', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '四、真实案例：那个永远配不平的 BOM', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '某家具厂，油漆用量永远算不准。因为工人有时候喷厚点，有时候喷薄点。规则是“看手感”。工程师崩溃了。后来规定：必须用标准喷枪，每平米只准领 xx 克油漆。多领就罚款。问题解决。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '需求调研阶段。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 没人能说清某个业务的具体逻辑 → THEN 暂停该模块上线', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 规则依赖于“看人面子” → THEN 没法上', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '有《员工手册》且严格执行的企业', type: 'suitable' },
       { condition: '愿意为了规范而牺牲一点灵活性的企业', type: 'suitable' },
       { condition: '“有什么事打个电话就行”的草莽江湖', type: 'unsuitable' },
       { condition: '利益关系错综复杂的家族企业', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '规则定错了怎么办？', answer: '改配置。但改配置有成本。所以前期蓝图设计要尽可能考虑周全。与其上线后频繁改，不如上线前多吵架。' },
      { question: '能模糊搜索吗？', answer: '查询可以，业务逻辑不能。比如审批流，必须精确匹配条件，不能“大概大概”。' }
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
            keywords: '组织管理, ERP风险, 数字化转型'
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
