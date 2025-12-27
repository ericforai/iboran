import { getPayload } from 'payload'
import configPromise from '../../src/payload.config'

const POSTS = [
  {
    title: '为什么财务看不清真实经营结果？',
    slug: 'why-finance-cant-see-business-reality',
    categorySlugs: ['financial-management', 'industry-insights'],
    tldr: '因为财务看的是“法人的账”，老板看的是“经营的账”。法人架构是为了合规（避税/责任），管理架构是为了经营。财务系统如果不支持“多维组织视图”，看到的就是假象。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '很多老板抱怨：财务报表我看懂了，但我还是不知道哪个产品赚钱，哪个区域亏钱。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、法人迷雾', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '为了避税或拿补贴，企业设立了很多空壳公司。业务即使是亏的，通过内部转移定价一倒腾，账面上看也是赚的。财务报表反映了法律事实，但掩盖了经营真相。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、分摊的艺术', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '总部费用怎么分摊到各个事业部？按人数？按收入？分摊规则稍微一变，盈亏结果就大相径庭。不懂业务的财务，只能机械分摊，得出荒谬的结论。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '经营分析会（月度/季度）。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 需要看真实利润 → THEN 建立管理会计报表体系', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 只需应付审计 → THEN 法定财务报表足矣', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '多组织、多板块的集团型企业', type: 'suitable' },
       { condition: '实行阿米巴经营模式的组织', type: 'suitable' },
       { condition: '单体公司、业务单一的小微企业', type: 'unsuitable' },
       { condition: '账务处理完全外包给代账公司的企业', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '管理报表和法定报表打架怎么办？', answer: '正常现象。两者的目的不同，口径自然不同。关键是要有“勾稽关系表”，能解释清楚差异（Reconciliation）。' },
      { question: '系统能自动出具管理报表吗？', answer: '能，但前提是基础数据（凭证/单据）上打好了“管理维度标签”（如产品线、区域、项目）。' }
    ]
  },
  {
    title: '业财一体化是不是财务系统升级就够了？',
    slug: 'is-finance-system-upgrade-enough',
    categorySlugs: ['digital-transformation', 'financial-management'],
    tldr: '绝对不够。业财一体化的瓶颈通常在业务端，而不是财务端。如果业务系统（CRM/SRM/MES）不规范，升级财务系统只是“换个更高级的计算器算烂账”。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '这是一个常见的误区：觉得账算不清楚，是因为财务软件太落后，换个云财务就好了。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、水源与水龙头', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '财务系统是水龙头，业务系统是水源。如果水源里流出来的是泥沙，换个金做的水龙头流出来的还是泥沙。一体化的核心是净化水源（规范业务流程）。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、连接比功能重要', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '升级后的孤岛依然是孤岛。新系统的核心价值不在于它本身的记账功能有多强大，而在于它的连接能力（API/集成平台）有多开放。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: 'IT 系统升级论证阶段。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 业务数据质量差 → THEN 先整治业务系统', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 业务数据准但传不过来 → THEN 重点做集成接口', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '愿意推动全流程变革的 CIO', type: 'suitable' },
       { condition: '业务部门配合度高的企业', type: 'suitable' },
       { condition: '以为买个软件就能解决管理问题的企业', type: 'unsuitable' },
       { condition: '业务系统是很多年前的老旧定制开发版', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '只升级财务系统会有什么后果？', answer: '财务人员会更痛苦。因为新系统要求更严，而旧业务数据进不来，最后只能靠财务手工大量补录，沦为数据录入员。' },
      { question: '业务系统改不动怎么办？', answer: '建立“数据中台”作为缓冲层。在中间层清洗、转换数据，再喂给财务系统。不要强行直连。' }
    ]
  },
  {
    title: '什么时候业财一体化会“越做越复杂”？',
    slug: 'when-integration-becomes-complex',
    categorySlugs: ['digital-transformation', 'industry-insights'],
    tldr: '当你想用系统去通过“例外”的时候。如果企业有大量的特批、特殊的结算方式、非标的计价规则，试图把这些都做进系统自动生成凭证，系统就会变成迷宫。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '简单是极致的复杂。但很多项目把“全面”误解为了“复杂”。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、过度的自动化', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '为了解决 1% 的极端场景（如退货后再换货再补差价），开发了极其复杂的代码逻辑。结果导致 99% 的正常场景也跑得磕磕绊绊。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、想管的太多', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '财务试图通过系统控制业务的每一个动作。结果系统变得极其僵化，业务为了效率只能线下搞，线上乱填，最后数据全废。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '系统蓝图评审阶段。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 规则极度复杂 → THEN 简化规则，而不是定制系统', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 无法简化 → THEN 该场景保留手工处理', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '崇尚“二八原则”的管理层', type: 'suitable' },
       { condition: '敢于砍掉低价值长尾流程的团队', type: 'suitable' },
       { condition: '追求“完美主义”的技术控', type: 'unsuitable' },
       { condition: '既要又要还要的甩手掌柜', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '如何避免过度设计？', answer: '坚持“标准化优先”。如果系统标准功能不支持，首先问“我们能不能改业务流程适应系统”，而不是“系统能不能改代码适应我们”。' },
      { question: '手工处理是不是代表落后？', answer: '在低频复杂场景下，人脑处理比代码更高效、更具性价比。盲目追求全自动才是愚蠢。' }
    ]
  },
  {
    title: '多利润中心企业，业财一体化怎么落地？',
    slug: 'multi-profit-center-integration',
    categorySlugs: ['financial-management', 'hcm-org'],
    tldr: '核心是“内部交易市场化”。把部门之间的服务关系变成买卖关系（内部结算）。系统必须支持自动生成内部交易单据，并自动抵销，否则核算成本会高到无法实施。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '阿米巴、划小核算单元、独立经营体——不管叫什么名字，本质都是要算清楚每一个小团队的赖。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、定价难', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '生产卖给销售，价格怎么定？定高了生产赚销售亏，定低了反之。这不是系统问题，是管理博弈。但系统必须能承载这个价格表。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、结算烦', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '每一笔调拨都要生成两个组织的凭证。数据量是指数级增长。没有人能靠手工做完这件事，必须靠系统全自动生成。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '推行阿米巴或内部市场化时。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 内部定价机制已明确 → THEN 上系统固化', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 还在吵价格 → THEN 用 Excel 模拟，别上系统', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '虽然利润中心多，但业务逻辑统一的集团', type: 'suitable' },
       { condition: '有强有力的财务管理部进行仲裁的组织', type: 'suitable' },
       { condition: '连成本都算不清楚的基础管理薄弱企业', type: 'unsuitable' },
       { condition: '各分公司由于收购原因系统完全异构的集团', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '内部交易会虚增收入吗？', answer: '单看各主体会，但集团合并报表时必须抵销。好的系统能自动处理“抵销分录”，否则这块工作量能逼疯财务。' },
      { question: '不仅要算财务账，还要算考核账？', answer: '是的。通常需要“双轨制”。一套账应对税务（法人账），一套账应对考核（管理账）。YonBIP 的多会计准则/多账簿功能就是为此设计的。' }
    ]
  },
  {
    title: '管理层想要的经营视角，系统为什么给不了？',
    slug: 'management-perspective-gap',
    categorySlugs: ['industry-insights', 'digital-transformation'],
    tldr: '因为视角不同。系统记录的是“过去的事实”（Past Data），管理层需要的是“未来的预测”（Future Insight）。中间缺了一个“模型层”来把数据翻译成洞察。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '管理层并不想看资产负债表，他们想看的是“如果原材料涨价 10%，我的利润会掉多少？”', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、报表是死的，问题是活的', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '标准 ERP 报表只能回答“发生了什么”。但管理者问的是“为什么发生”以及“接下来怎么办”。这需要 BI（商业智能）而不是 ERP。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、非财务因子的缺失', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '影响经营结果的往往是非财务指标（如客户满意度、员工离职率）。这些数据通常不在财务系统里。一体化不仅是业财，更是“人、财、物、客”的全域一体。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '高层汇报与驾驶舱建设。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 只展示数字列表 → THEN 老板不会看', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 展示趋势、预警和建议 → THEN 才是决策支持', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '已经完成基础数据治理的企业', type: 'suitable' },
       { condition: '有专职的数据分析师（Data Analyst）团队', type: 'suitable' },
       { condition: '还在为“把账记平”而挣扎的初级阶段', type: 'unsuitable' },
       { condition: '数据孤岛未打通，想靠 PPT 拼凑驾驶舱的', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: 'BI 是不是可以代替 ERP？', answer: '不能。BI 是仪表盘，ERP 是发动机。没有发动机产生数据，仪表盘就是摆设。' },
      { question: '如何让老板爱看系统？', answer: '推送到手机端，并且极简。老板只有碎片化时间。不要扔给他一张只有在 27 寸显示器上才能看清的复杂大表。' }
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
                    keywords: '业财一体化, 商业智能, 管理会计'
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
