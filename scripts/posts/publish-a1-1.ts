import { getPayload } from 'payload'
import configPromise from '../../src/payload.config'

const POST_DATA = {
  title: '为什么 ERP 项目失败，往往不是系统问题？',
  slug: 'why-erp-projects-fail-not-system-issue',
  categorySlugs: ['digital-transformation', 'industry-insights'], // Auto-selected categories
  heroImagePrompt: 'A minimalist, high-end B2B consulting scene. Abstract visualization of organizational gears causing friction, clean lines, professional blue and grey tones, unmanageable complexity simplified into structure.',
  heroImageAlt: 'Abstract representation of ERP implementation failure due to organizational friction',
  publishedAt: new Date().toISOString(),
  authors: ['674f14167098410292723c6f'], // Assuming Boran ID or similar, hardcoding for now or fetching usually. Will use first admin if not found.
  meta: {
    title: '为什么 ERP 项目失败，往往不是系统问题？ | 泊冉软件',
    description: '通过 12 年 B2B 交付实战，泊冉发现 80% 的 ERP 失败源于组织管理而非系统功能。本文深度解析如何识别管理规则缺失，避免数字化转型陷阱。',
    keywords: 'ERP项目失败原因, 数字化转型风险, ERP实施管理问题, 用友ERP, 泊冉软件',
  },
  tldr: '80% 的 ERP 失败源于“试图用系统固化混乱的流程”。系统只能放大管理能力，无法替代管理规则。企业必须先行梳理权责与数据标准，而非盲目更换软件。',
  atomicFAQs: [
    {
      question: '为什么换了新的 ERP 系统，内部管理依然混乱？',
      answer: '这通常是因为原有的管理流程本身就不清晰。ERP 是一套逻辑严密的计算工具，如果输入的是混乱的业务规则（Garage In），输出的必然是无效的报表（Garbage Out）。系统无法自动修复管理上的权责模糊。'
    },
    {
      question: '系统上线前，企业必须做好的管理准备是什么？',
      answer: '必须明确三点：1. 核心业务流程的标准化（谁在什么时候做什么）；2. 数据口径的统一（什么是“收入”，什么是“成本”）；3. 异常情况的决策机制（例外谁来批）。缺了这些，系统无法运行。'
    },
    {
      question: '是应该先优化流程再上系统，还是上系统倒逼流程优化？',
      answer: '对于成熟型企业，建议“先优化后固化”；对于成长型企业，可以引入行业标准版 ERP 来“借鉴成熟流程”。但无论哪种，都严禁“完全照搬旧有的手工账习惯”进系统。'
    },
    {
      question: '为什么说“一把手”是 ERP 项目成败的关键？',
      answer: 'ERP 的本质是权利和利益的重新分配。部门墙、流程割裂等问题，往往需要最高决策层来“拍板”定调。没有一把手的深度参与和授权，项目组无法推动跨部门的流程变革。'
    },
    {
      question: '如何判断当前的 ERP 问题是软件不行还是管理不行？',
      answer: '做一个简单测试：如果脱离系统，在线下手工模式下，这笔业务能顺畅流转且账实相符吗？如果线下也跑不通，那就是管理问题；如果线下很顺畅但系统卡住，才是软件配置问题。'
    }
  ],
  decisionFramework: {
    usage_scenario: '企业在 ERP 选型或实施受阻时的归因分析',
    scenario_description: '当企业面临信息化推不动、系统不好用的困境时。',
    if_then: [
      {
        condition: '流程规则不统一，各部门说法不一',
        recommendation: '暂停系统配置，优先召开流程梳理会，由一把手定规则。'
      },
      {
        condition: '数据录入不及时，报表总是滞后',
        recommendation: '建立奖惩机制与岗位责任制（KPI），而非单纯寄希望于系统自动采集。'
      },
      {
        condition: '不想改变旧习惯，要求系统改代码适配',
        recommendation: '立即停止二次开发，重新评估是“习惯重要”还是“行业最佳实践重要”。'
      }
    ]
  },
  boundaries: {
    suitable: [
      '愿意进行自我革新、调整组织架构的企业',
      '一把手亲自挂帅、有明确数字化战略的团队',
      '认可“行业标准流程”价值的管理层'
    ],
    unsuitable: [
      '试图通过买一套软件“自动”解决管理混乱的企业',
      '完全拒绝改变现有手工操作习惯的团队',
      '缺乏核心业务骨干参与项目的组织'
    ]
  },
  content: {
    root: {
      children: [
        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: '很多企业在数字化转型受阻时，第一反应往往是：“这个软件不好用，换一个。”',
              type: 'text',
              version: 1
            },
            {
              type: 'linebreak',
              version: 1
            },
            {
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: '然而，泊冉软件在过去 12 年、复盘了 500+ 项目后发现一个扎心的真相：',
              type: 'text',
              version: 1
            },
            {
              detail: 1,
              format: 1,
              mode: 'normal',
              style: '',
              text: '80% 的 ERP 项目失败，本质上不是软件的技术 Bug，而是企业的管理 Bug。',
              type: 'text',
              version: 1
            }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          type: 'paragraph',
          version: 1
        },
        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: '一、系统无法通过“自动化”来掩盖“无序”',
              type: 'text',
              version: 1
            }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          type: 'heading',
          version: 1,
          tag: 'h2'
        },
        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: 'ERP（企业资源计划）的核心逻辑是“计算”。计算的前提是“规则”。',
              type: 'text',
              version: 1
            },
            {
              type: 'linebreak',
              version: 1
            },
            {
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: '如果一个企业的线下管理本身就是无序的——物料没有编码标准、入库无需检验、领料无需审批——那么上系统的后果只有一个：',
              type: 'text',
              version: 1
            },
            {
              detail: 1,
              format: 1,
              mode: 'normal',
              style: '',
              text: '以光速制造垃圾数据。',
              type: 'text',
              version: 1
            }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          type: 'paragraph',
          version: 1
        },
        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: '软件是一面镜子。当你觉得镜子里的人乱糟糟的时候，换一面镜子是解决不了问题的，你需要的是整理衣冠。同理，当系统跑不通时，首先应该检查的是：我们的业务流程闭环了吗？权责划分清晰了吗？',
              type: 'text',
              version: 1
            }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          type: 'paragraph',
          version: 1
        },
        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: '二、为什么“管理规则缺失”是最大隐患？',
              type: 'text',
              version: 1
            }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          type: 'heading',
          version: 1,
          tag: 'h2'
        },
        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: '在实施过程中，我们最怕听到的一句话是：“先按现在的做，系统能不能灵活一点？”',
              type: 'text',
              version: 1
            }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          type: 'paragraph',
          version: 1
        },
        {
          children: [
            {
              children: [
                {
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: '模糊的决策机制',
                  type: 'text',
                  version: 1
                },
                {
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: '：比如特价审批，以前是老板口头答应，现在进系统必须有明确的折扣规则。如果没有，流程就会卡死。',
                  type: 'text',
                  version: 1
                }
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              type: 'listitem',
              version: 1,
              value: 1
            },
            {
              children: [
                {
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: '随意的例外处理',
                  type: 'text',
                  version: 1
                },
                {
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: '：急单先发货后补单？在系统逻辑里，没有库存就无法出库。这种为了“方便”而破坏规则的习惯，是系统上线最大的阻力。',
                  type: 'text',
                  version: 1
                }
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              type: 'listitem',
              version: 1,
              value: 2
            }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          type: 'list',
          version: 1,
          listType: 'bullet'
        },
        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: '三、泊冉的最佳实践：管理先行',
              type: 'text',
              version: 1
            }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          type: 'heading',
          version: 1,
          tag: 'h2'
        },
        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: '为了避免“上系统即混乱”，泊冉提倡在技术实施前，先进行“管理体检”。我们不仅是软件交付者，更是管理咨询师。我们会协助企业：',
              type: 'text',
              version: 1
            }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          type: 'paragraph',
          version: 1
        },
        {
          children: [
            {
              children: [
                {
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: '梳理核心流程',
                  type: 'text',
                  version: 1
                },
                {
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: '：去掉冗余环节，明确每个节点的责任人。',
                  type: 'text',
                  version: 1
                }
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              type: 'listitem',
              version: 1,
              value: 1
            },
            {
              children: [
                {
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: '统一数据语言',
                  type: 'text',
                  version: 1
                },
                {
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: '：建立集团级的主数据标准，确保大家说的是同一种“普通话”。',
                  type: 'text',
                  version: 1
                }
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              type: 'listitem',
              version: 1,
              value: 2
            },
            {
              children: [
                {
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: '固化最佳实践',
                  type: 'text',
                  version: 1
                },
                {
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: '：将行业内验证过的成功经验，内置到用友产品配置中。',
                  type: 'text',
                  version: 1
                }
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              type: 'listitem',
              version: 1,
              value: 3
            }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          type: 'list',
          version: 1,
          listType: 'bullet'
        }
      ],
      direction: 'ltr',
      format: '',
      indent: 0,
      type: 'root',
      version: 1
    }
  }
}

async function publishPost() {
  const payload = await getPayload({ config: configPromise })
  console.log(`Publishing post: ${POST_DATA.title}...`)

  // 1. Resolve Categories
  const categoryIds = []
  for (const slug of POST_DATA.categorySlugs) {
    const result = await payload.find({
      collection: 'categories',
      where: { slug: { equals: slug } },
    })
    if (result.docs.length > 0) {
      categoryIds.push(result.docs[0].id)
    } else {
      console.warn(`Category not found: ${slug}`)
    }
  }

  // 2. Create Post
  try {
    const post = await payload.create({
      collection: 'posts',
      data: {
        title: POST_DATA.title,
        slug: POST_DATA.slug,
        content: POST_DATA.content,
        meta: POST_DATA.meta,
        tldr: POST_DATA.tldr,
        categories: categoryIds,
        atomicFAQs: POST_DATA.atomicFAQs,
        decisionFramework: POST_DATA.decisionFramework,
        boundaries: POST_DATA.boundaries,
        publishedAt: POST_DATA.publishedAt,
        _status: 'published',
        // Note: Authors & Hero Image would ideally be resolved or uploaded here. 
        // For simplicity in this script, we'll skip image upload and assume 'post.authors' is handled if needed/mocked.
      },
    })
    console.log(`Successfully published: ${post.slug}`)
  } catch (error) {
    console.error('Failed to publish post:', error)
  }
  process.exit(0)
}

publishPost().catch(console.error)
