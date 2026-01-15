import { getPayload } from 'payload'
import configPromise from '../../src/payload.config'

const POSTS = [
  {
    title: '为什么 ERP 上线后，组织摩擦反而更多？',
    slug: 'erp-increases-organizational-friction',
    categorySlugs: ['manage-change', 'industry-insights'],
    tldr: 'ERP 把以前藏在桌子底下的矛盾全部翻到了桌面上。摩擦不是坏事，摩擦是磨合的开始。本文解析如何把“破坏性摩擦”转化为“建设性磨合”。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、决策者最关心的 3 个问题', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '为什么以前大家和和气气，上了系统天天吵架？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '这种混乱会持续多久？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '我是该介入调停，还是让他们自己吵？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、摩擦的本质：灰色地带消失了', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '以前，销售答应客户“先发货后补合同”，这是给客户面子，也是销售的权力。现在系统里没有合同号就开不出送货单。销售骂仓库死板，仓库骂系统弱智。本质上，是销售的“各种特权”被系统剥夺了。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '三、落地路径：把摩擦透明化', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 1: 问题记录。建立“吐槽墙”，谁抱怨就记录下来，不做评价。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 2: 分类处理。是系统Bug？是流程不合理？还是有人不想守规矩？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 3: 公开裁决。一把手亲自主持，针对争议最大的流程，现场拍板。', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '四、关键清单 (Checklist)', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 是否设立了“跨部门协调小组”？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 是否有定期的“系统应用复盘会”？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 老板是否在公开场合支持过“按系统办事”的原则？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '五、真实案例：断供危机', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '某机械厂，采购员习惯压着发票不录入，为了平衡每个月的付款额。上线后，发票不录就不能入库，生产线没料了。采购指责财务不付款，生产指责采购不买料。最后发现是采购想搞“财务平衡术”。老板怒了：以后实事求是，不准搞这种小聪明。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '系统上线后的磨合期（1-3个月）。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 摩擦源于“操作不熟练” → THEN 培训', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 摩擦源于“利益受损” → THEN 坚持', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 摩擦源于“流程确实SB” → THEN 优化流程', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '一把手性格强硬的企业', type: 'suitable' },
       { condition: '有明确绩效考核的企业', type: 'suitable' },
       { condition: '追求“一团和气”的好人文化', type: 'unsuitable' },
       { condition: '部门墙极厚、诸侯割据的集团', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '要不要妥协？', answer: '在原则问题上（如数据真实性）坚决不妥协。在操作体验上（如界面布局）可以妥协。' },
      { question: '吵架影响团结怎么办？', answer: '为了把事情做对而吵架，是好事。为了推卸责任而吵架，要杀鸡儆猴。' }
    ]
  },
  {
    title: '多组织企业为什么系统越多越乱？',
    slug: 'multi-org-system-chaos',
    categorySlugs: ['products-tech', 'digital-transformation'],
    tldr: '因为每个子公司都在建烟囱。集团想要“统”，子公司想要“独”。数据标准不统一，系统之间全是断头路。解决之道不是买个大系统，而是定个好标准。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、决策者最关心的 3 个问题', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '为什么我看不到集团的实时报表？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '为什么 A 公司和 B 公司的同一种物料编码不一样？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '我们要不要搞主数据管理 (MDM)？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、乱象根源：联邦制 vs 郡县制', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '这种乱，是组织架构的映射。如果集团对下属公司管控弱，各自为政，那么系统必然是割裂的。你想通过技术来实现统一管控，但权力的手并没有伸那么长。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '三、落地路径：统一语言', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 1: 统码（主数据）。客商、物料、科目，全集团必须一套码。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 2: 统权（权限管理）。关键操作（如修改信用额度）必须收归集团或统一授权。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 3: 统表（报表体系）。统一口径，比如“什么叫销售额”，是含税还是不含税？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '四、关键清单 (Checklist)', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 是否有集团级的主数据管理专员？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 新成立子公司时，是否能直接复制账号体系？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 跨公司调拨是否自动化？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '五、真实案例：找不到的螺丝钉', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '某集团有 8 个工厂。A 工厂停产待料一种特种螺丝，急得团团转。其实 B 工厂仓库里堆满了这种螺丝，正愁卖不出去。但因为两家编码不一样，系统中谁也看不见谁。最后 A 工厂高价空运买回来，B 工厂当废铁卖出去。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '下一步', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '评估 YonSuite 或 YonBIP 的多组织特性，天然支持社会化商业网络。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '集团型企业系统规划。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 集团强管控 → THEN 一套系统（BIP/YonSuite）', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 集团只管投资（财务管控） → THEN 只要财务接口', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '异地多工厂/多门店', type: 'suitable' },
       { condition: '有上市计划的集团', type: 'suitable' },
       { condition: '单体公司', type: 'unsuitable' },
       { condition: '实际上是各自独立的合伙制', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '数据集中会变慢吗？', answer: '现在的云原生架构（如 YonBIP）已经解决了这个问题。只要带宽够，数据量不是瓶颈。' },
      { question: '子公司抵触怎么办？', answer: '先给甜头。比如集团集采降成本，让子公司尝到统一的好处，再谈统一的约束。' }
    ]
  },
  {
    title: '为什么“流程不清”，是 ERP 最大的风险？',
    slug: 'unclear-process-risk',
    categorySlugs: ['manage-change', 'project-management'],
    tldr: '流程不清就是“自杀”。把错误的流程固化到系统里，不仅不能提升效率，反而会加速错误的执行。你会得到一个以前 10 倍速度犯错的企业。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、决策者最关心的 3 个问题', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '流程梳理要做到多细？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '现在的流程虽然乱但能跑通，要不要改？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '谁来负责梳理流程？IT 还是业务？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、风险透视：高速公路上的破车', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: 'ERP 是一条高速公路。如果你的车（流程）刹车失灵、方向盘跑偏，上了高速公路只会死得更快。很多企业在手工阶段靠“人盯人”来补救流程漏洞，上了系统，漏洞被隐藏在代码里，爆发时就是大雷。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '三、落地路径：流程显性化', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 1: 画出现状图（As-Is）。别美化，越丑越真实越好。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 2: 找堵点。哪里总要等人签字？哪里总要返工？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 3: 设计未来图（To-Be）。砍掉不增值的环节。', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '四、关键清单 (Checklist)', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 关键流程图是否已经由部门负责人签字确认？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 流程节点的责任人是否唯一？（不能是“销售部”，必须是“销售内勤”）', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 异常流程（如退货、急单）是否定义了？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '五、真实案例：退货没人管', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '某电商，退货流程没定义清楚。仓库收到退货往地上一堆，财务不知道要退款，客服还在催客户好评。结果由于不能及时退款，店铺评分暴跌。后来系统里强行必须录入退货单，触发财务退款任务，仓库必须扫描入库。流程通了，评分上来了。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '流程再造（BPR）阶段。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 流程为了“防人”而变得极其复杂 → THEN 简化', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 流程长到没人能完整背下来 → THEN 拆分', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '流程相对稳定的成长期企业', type: 'suitable' },
       { condition: '痛点明确的改革期企业', type: 'suitable' },
       { condition: '朝令夕改的初创期', type: 'unsuitable' },
       { condition: '完全依赖个人能力的作坊', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '先固化再优化，还是先优化再固化？', answer: '先优化。垃圾流程固化了还是垃圾。至少要优化到“不反人类”的程度再进系统。' },
      { question: '流程越细越好吗？', answer: '不是。流程要有颗粒度。太细了僵化，太粗了失控。抓大放小，管住风险点即可。' }
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
            keywords: 'ERP上线, 管理流程, 组织变革'
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
