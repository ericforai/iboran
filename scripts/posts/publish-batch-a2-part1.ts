import { getPayload } from 'payload'
import configPromise from '../../src/payload.config'

const POSTS = [
  {
    title: '为什么企业总是做不好业财一体化？',
    slug: 'business-finance-integration-failure-reasons',
    categorySlugs: ['financial-management', 'digital-transformation'],
    tldr: '因为大家把它当成了一个“财务项目”，而非“业务项目”。业财一体化的本质，是财务视角的业务重构。如果业务不改变，财务永远无法“一体化”。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '这是一个老生常谈的话题，也是每一个 CFO 心中的痛。系统上了，接口通了，但想要的数据就是出不来。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、语言不通', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '业务说“SKU”，财务说“存货科目”。业务看“订单交付”，财务看“收入确认”。两套语言如果不翻译，数据就是两张皮。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、时间错位', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '业务是实时的，财务是事后的。业财一体化要求财务必须前置到业务发生的那一刻，这对传统财务人员是巨大的挑战。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '企业启动业财一体化项目前。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 由财务部牵头业务不配合 → THEN 必死无疑', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 由 CEO 牵头强推 → THEN 有成功可能', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '财务话语权较强的组织', type: 'suitable' },
       { condition: '业务流程相对标准化的行业', type: 'suitable' },
       { condition: '财务只是“记账员”角色的企业', type: 'unsuitable' },
       { condition: '业务模式极其灵活多变（如创意设计）', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '业财一体化能省人吗？', answer: '不能。它省去的是低端录入人员，但需要增加高端的财务分析人员（BP）。总体人力成本可能还会上升，但价值完全不同。' },
      { question: '先搞业务系统还是财务系统？', answer: '最好同步。如果必须分先后，建议先业务。没有业务数据的规范化，财务系统只能是一本烂账的电子化。' }
    ]
  },
  {
    title: '业财一体化失败，最常见的根本原因是什么？',
    slug: 'root-cause-of-integration-failure',
    categorySlugs: ['financial-management', 'industry-insights'],
    tldr: '根本原因是“颗粒度”不匹配。业务管得细（按单个订单），财务管得粗（按月度汇总）。如果不解决数据颗粒度的对齐问题，一体化就是空谈。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、颗粒度战争', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '销售想看“张三这个客户买了多少红色 A 款产品”，财务只记“主营业务收入”。当老板问利润来源时，财务答不上来，业务觉得财务没用。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、凭证只是结果', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '很多项目以为自动生成凭证就是一体化。错！凭证是结果，过程数据丢失了，分析价值也就没了。真正的一体化是保留业务过程标签到财务凭证里。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '系统实施方案设计阶段。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 财务只想要总账凭证 → THEN 不需要复杂的一体化', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 需要按单、按SKU核算利润 → THEN 必须细化颗粒度', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '有精细化核算需求的企业', type: 'suitable' },
       { condition: '愿意为数据准确性投入人力的组织', type: 'suitable' },
       { condition: '只想应付税务局报表的企业', type: 'unsuitable' },
       { condition: '业务数据质量极差的组织', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '如何解决颗粒度不匹配？', answer: '使用“辅助核算”或“多维核算”功能。不要在科目表里通过增加子科目来解决，会导致科目表爆炸。' },
      { question: '业务人员不懂财务怎么办？', answer: '系统要封装复杂性。业务人员只负责录入业务单据（如发货单），系统后台自动映射会计分录，不要让业务人员选科目。' }
    ]
  },
  {
    title: '为什么业务跑得很快，财务却永远在后面？',
    slug: 'business-fast-finance-slow',
    categorySlugs: ['financial-management', 'hcm-org'],
    tldr: '因为业务是“流”，财务是“切片”。业务在不断创新（新模式、新渠道），财务还在守着旧准则。除非财务能变成“嵌入式财务”，否则永远是追赶者。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '老板问：既然是实时的，为什么我看个报表还要等下个月 15 号？', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、结账的陋习', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '传统财务习惯“月末突击”。平时单据积压不审，月底熬夜加班。这种工作习惯导致财务数据天生滞后。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、新业务不支持', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '业务搞了个“分销裂变”新玩法，财务系统里没有对应的核算逻辑，只能手工记账（挂小账）。这一挂，数就乱了。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '业务创新频繁的企业。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 业务变动快于系统配置 → THEN 采用低代码或中台架构', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 财务响应时间超过3天 → THEN 流程有问题', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '推行“日清日结”管理制度的企业', type: 'suitable' },
       { condition: '财务BP 深入业务线的组织', type: 'suitable' },
       { condition: '财务部门还在用纯手工 Excel 等月底记账', type: 'unsuitable' },
       { condition: '业务先斩后奏、完全不合规的野蛮生长型', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '如何实现财务实时化？', answer: '利用 OCR 和 银企直连 实现单据自动化。让机器做 90% 的基础审核，人只做例外处理。' },
      { question: '即时报表真的可能吗？', answer: '可能，但需要前提：所有业务动作在发生时即刻录入系统。如果业务员下周才补录，系统再快也没用。' }
    ]
  },
  {
    title: 'ERP 已上线，为什么经营数据还是不准？',
    slug: 'erp-live-data-inaccurate',
    categorySlugs: ['digital-transformation', 'industry-insights'],
    tldr: '垃圾进，垃圾出 (GIGO)。系统是放大器，它会忠实地记录每一个错误。数据不准通常是因为源头输入不规范，而不是计算逻辑错误。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、谁录入，谁受益？', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '通常是业务员录入，领导看报表。业务员觉得录入是繁琐的负担，随便填填交差。如果数据质量不与录入者的绩效挂钩，数据永远不准。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、口径打架', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '库存数据，仓库看数量，财务看成本金额。如果出库单没填单价，数量准了，在财务账上金额还是错的。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '系统上线运维期。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 数据经常对不上 → THEN 追溯源头，严惩随意录入', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 怎么查都查不出原因 → THEN 可能是系统 Bug（极少见）', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '建立了主数据管理规范的企业', type: 'suitable' },
       { condition: '有数据质量考核机制的团队', type: 'suitable' },
       { condition: '允许“先发货后补单”的随意管理模式', type: 'unsuitable' },
       { condition: '缺乏唯一数据源（Excel 满天飞）', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '怎么保证数据源头准确？', answer: '减少人工录入。尽量用扫码枪、传感器、接口自动采集数据。人是最不可靠的因素。' },
      { question: '数据治理是一次性的吗？', answer: '不是。数据治理是长期的脏活累活。需要有专人定期清洗数据，就像定期打扫卫生一样。' }
    ]
  },
  {
    title: '预算为什么在执行阶段失效？',
    slug: 'budget-failure-execution',
    categorySlugs: ['financial-management', 'hcm-org'],
    tldr: '因为预算通常是“软约束”。如果没有系统强制控制（硬控制），预算就是一张画在墙上的饼。真正的预算控制是在单据提交的那一刻就拦截。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '年初定预算，大家吵得面红耳赤。年中执行时，谁都不看预算。年底一算账，超支了 50%。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、事后诸葛亮', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '财务往往是报销时才发现超预算了。钱已经花出去了，还能不报吗？这时候控制已经晚了。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、刚性太强', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '市场变化快，预算定死了。如果不允许灵活调整（滚动预算），业务为了活下去只能绕过预算。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '全面预算管理导入期。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 需要强控费用 → THEN 必须在申请环节拦截', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 业务波动大 → THEN 必须要支持预算调整和借用', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '实施了费控系统（如费控报销）的企业', type: 'suitable' },
       { condition: '能够做到季度/月度滚动预测的组织', type: 'suitable' },
       { condition: '连科目体系都没统一的企业', type: 'unsuitable' },
       { condition: '老板带头随意批条子的公司', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '预算是不是一定要强控？', answer: '不一定。对成熟业务（如行政费用）建议强控（刚性）；对创新业务（如市场推广）建议弱控（弹性/超预警）。' },
      { question: '预算编制太耗时怎么办？', answer: '用系统模型代替手工 Excel。基于历史数据自动生成基准，人只负责调整参数。不要从零开始填表。' }
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

    // 2. Create Post without Image
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
                    keywords: '业财一体化, 财务管理, 数字化转型'
                },
                categories: categoryIds,
                publishedAt: new Date().toISOString(),
                _status: 'published'
            }
        })
        console.log(`Published (Text Only): ${postData.slug}`)
    } catch (e) {
        if (e.message?.includes('revalidatePath')) {
            console.log(`Published (Text Only, revalidate warning): ${postData.slug}`)
        } else {
            console.error(`Failed to publish ${postData.slug}`, e)
        }
    }
  }
  process.exit(0)
}

publishBatch().catch(console.error)
