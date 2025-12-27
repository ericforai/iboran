import { getPayload } from 'payload'
import configPromise from '../../src/payload.config'

const POSTS = [
  {
    title: '为什么 ERP 上线后，组织摩擦反而更多？',
    slug: 'erp-post-implementation-friction',
    categorySlugs: ['hcm-org', 'digital-transformation'],
    tldr: '系统剥夺了“模糊空间”。过去靠人情、面子解决的灰色地带，在系统里必须黑白分明。摩擦的本质，是“潜规则”与“显规则”的冲突。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '很多企业发现，不上系统大家你好我好，上了系统反而天天吵架。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、系统消灭了“好商量”', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '以前销售欠点资料，库管“通融一下”也就发货了。现在系统里资料不全，按钮是灰的，点都点不动。库管成了“恶人”，销售成了“受害者”。', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '这种摩擦不是坏事，它是企业走向规范化的必经阵痛。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、权力的重新分配', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: 'ERP 的本质是权利的再分配。数据透明了，谁在裸泳一目了然。既得利益者会本能地抗拒这种透明，从而引发名为“系统不好用”实为“不想被管”的摩擦。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '当内部投诉“系统太死板”声浪很高时。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 摩擦源于规则太严 → THEN 坚持住，这是黎明前的黑暗', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 摩擦源于流程错误 → THEN 立即调整系统配置', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '高层有足够定力支持变革的企业', type: 'suitable' },
       { condition: '处于合规上市期的企业', type: 'suitable' },
       { condition: '试图两边讨好、不敢得罪人的管理者', type: 'unsuitable' },
       { condition: '过度依赖人治的小微团队', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '如何缓解上线初期的摩擦？', answer: '通过培训让大家理解“为什么这么做”。摩擦往往源于不理解。同时设置“过渡期”，允许双轨运行但必须有截止日。' },
      { question: '摩擦多是因为软件没选对吗？', answer: '不一定。好的软件通常都带有“管理约束”。如果一个软件让你觉得舒服自在，完全没有摩擦，那它可能只是个电子账本，而不是 ERP。' }
    ]
  },
  {
    title: '多组织企业为什么系统越多越乱？',
    slug: 'multi-org-system-chaos',
    categorySlugs: ['global-supply-chain', 'hcm-org'],
    tldr: '烟囱式建设是万恶之源。如果各子公司、各部门独立采购系统，导致数据孤岛林立，所谓的“数字化”就是构建了一座座信息巴别塔。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '这也是大集团最常见的痛点：买了十套系统，老板想看一张合并报表，还得靠会计手工 Excel 合并。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、缺乏顶层规划', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: 'A 公司用用友，B 公司用金蝶，C 公司用 SAP。主数据（客商、物料）不统一，系统之间完全无法对话。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、看不见的手在作祟', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '每个分公司都想掌握自己的数据主权，不愿意被集团“看透”。各自建系统，是维持独立王国的最佳护城河。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '集团型企业进行 IT 规划时。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 追求集团管控 → THEN 必须统一底座（如 YonBIP）', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 追求板块独立 → THEN 允许异构但统一接口标准', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '强管控型集团', type: 'suitable' },
       { condition: '准备财务共享服务的企业', type: 'suitable' },
       { condition: '各板块业务完全不相关的投资性控股', type: 'unsuitable' },
       { condition: '信息化预算分散在各子公司的模式', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '已经乱了怎么办？推倒重来吗？', answer: '不需要全部推倒。可以建立一个“数据中台”或“主数据管理平台（MDM）”，先把语言统一了，再逐步替换外围系统。' },
      { question: '多组织系统最难的是什么？', answer: '是组织架构的灵活性。企业经常重组、拆分、合并。系统必须支持“组织随需而变”，而不是组织一变，系统就得重开发。' }
    ]
  },
  {
    title: '为什么“流程不清”，是 ERP 最大的风险？',
    slug: 'unclear-process-erp-risk',
    categorySlugs: ['digital-transformation', 'industry-insights'],
    tldr: '流程是 ERP 的血液。流程不通，血栓就形成。大部分“系统 Bug”其实是“流程 Bug”在软件层面的投影。系统无法自动修复逻辑漏洞。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '我们常说“三分技术，七分管理，十二分数据”。流程就是管理在作业层面的体现。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、死循环流程', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '比如：入库需要质检单，质检需要入库单。这种逻辑线下的“神操作”，到了线上就是死锁。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、没有责任人的流程', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '如果不明确每个节点的审批时效和责任，流程就会在系统里沉睡。系统能催办，但叫不醒装睡的人。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '项目蓝图设计阶段。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 流程从未梳理过 → THEN 先画图，再配置', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 流程图都画不出来 → THEN 别上系统', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '业务逻辑闭环的企业', type: 'suitable' },
       { condition: 'SOP 执行到位的团队', type: 'suitable' },
       { condition: '过度依赖“看情况办理”的作坊式管理', type: 'unsuitable' },
       { condition: '拒绝将隐性知识显性化的老师傅主导模式', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '流程越细越好吗？', answer: '不是。流程过细会降低效率。好的流程是“抓大放小”，在风控和效率之间找平衡。系统应该管关键控制点，而不是管死每一步。' },
      { question: '谁来负责梳理流程？', answer: '业务部门负责人。绝对不是 IT 部门，也不是咨询顾问。只有业务自己最清楚业务怎么跑，顾问只能提供方法论。' }
    ]
  },
  {
    title: 'ERP 实施前，组织必须先想清楚哪 3 件事？',
    slug: 'three-prerequisites-before-erp',
    categorySlugs: ['industry-insights', 'digital-transformation'],
    tldr: '1. 谁拥有数据所有权？2. 什么是不可妥协的标准？3. 谁拥有一票否决权？先把这三个“政治问题”解决了，再聊技术问题。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、确权：谁说了算', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '库存数据准不准，是仓库说了算，还是财务说了算？如果不定义清楚 Data Owner，数据质量永远没人负责。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、定标：什么是对的', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '收入确认按发货还是按开票？如果财务和销售标准不一，系统怎么设计都是错的。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '三、授权：谁来仲裁', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '当部门间吵得不可开交时，必须有一个高级别的项目委员会来做最终裁决。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '项目启动会之前。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 三件事没想清楚 → THEN 推迟启动会', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 只想由 IT 部门牵头 → THEN 很难成功', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '战略清晰，管理层共识度高', type: 'suitable' },
       { condition: '有完善的项目治理结构（PMO）', type: 'suitable' },
       { condition: '想把系统建设外包给供应商全权负责', type: 'unsuitable' },
       { condition: '管理层缺位的项目', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '这三件事必须写在文件里吗？', answer: '必须。口头约定是最不可靠的。要在项目章程这一级的文件里明确列出。' },
      { question: '如果想不清楚怎么办？', answer: '找专业的咨询公司做诊断，或者先做局部试点，在小范围内把问题暴露出来解决掉。' }
    ]
  },
  {
    title: '为什么 ERP 更容易放大管理问题？',
    slug: 'erp-amplifies-management-issues',
    categorySlugs: ['digital-transformation', 'hcm-org'],
    tldr: '光速传递错误。ERP 的高集成度意味着一个环节的错误会瞬间传导到全链条。它让“掩盖问题”变得不可能，从而让管理者觉得“问题变多了”。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '很多人抱怨上了 ERP 后，问题不仅没少，反而到处都在报警。其实，问题一直都在，只是以前被“藏”起来了。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、水落石出效应', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: 'ERP 就像把河水抽干。原来藏在水底的石头（由于信息不透明而被掩盖的低效、舞弊、差错）全部暴露了出来。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、这是好事', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '只有暴露问题，才能解决问题。感到疼痛，说明药起效了，正在触及病灶。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '系统上线初期的“排异反应期”。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 暴露的问题能被定位 → THEN 是好系统', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 问题引发了恐慌 → THEN 需要做好变革管理', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '有勇气直面经营惨淡真相的企业', type: 'suitable' },
       { condition: '数据驱动文化的组织', type: 'suitable' },
       { condition: '喜欢粉饰太平的“报喜鸟”文化', type: 'unsuitable' },
       { condition: '无法承受短期效率波动的脆弱组织', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '如何应对问题集中爆发？', answer: '建立“问题清零机制”。每天开早会复盘昨天暴露的问题，指定专人限时解决。不要积压。' },
      { question: '老板觉得系统不好用怎么办？', answer: '给老板看数据。这就是企业的真实面目。系统只是讲真话的孩子。' }
    ]
  },
  {
    title: '什么时候应该先管组织，而不是先上系统？',
    slug: 'organize-before-digitize',
    categorySlugs: ['hcm-org', 'industry-insights'],
    tldr: '当混乱是结构性的时候。如果组织架构本身不合理（如职能重叠、汇报线混乱），盲目上系统只会固化这种不合理。',
    content: {
      root: {
        type: 'root', format: '', indent: 1, version: 1, direction: 'ltr',
        children: [
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '很多企业试图用技术手段解决组织政治问题，这是最大的妄念。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、先理顺关系，再理顺数据', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '如果两个部门为了同一个客户打架，你需要的是重新划分销售区域（OD），而不是上一套 CRM 系统。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、系统的刚性 VS 组织的柔性', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '过于频繁的组织调整不适合重型 ERP。如果你的组织架构一个月变一次，建议先用轻量级的 SaaS 或 Excel。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '信息化战略规划阶段。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 组织架构动荡期 → THEN 暂缓大系统建设', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 业务模式完全未定型 → THEN 不上系统', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '业务模式成熟稳定的企业', type: 'suitable' },
       { condition: '组织架构相对固化的阶段', type: 'suitable' },
       { condition: '正在进行剧烈业务转型的探索期企业', type: 'unsuitable' },
       { condition: '初创期的 0-1 阶段', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '组织变革和上系统能同时进行吗？', answer: '很难。双线作战风险极大。通常建议“组织先行”，或者在系统实施的前期咨询阶段完成组织调整。' },
      { question: '怎么判断是组织问题还是系统问题？', answer: '看问题是个案还是普遍现象。如果是普遍现象，且无法通过修改配置解决，通常是组织架构设计的问题。' }
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
                    keywords: 'ERP管理, 组织变革, 数字化转型'
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
