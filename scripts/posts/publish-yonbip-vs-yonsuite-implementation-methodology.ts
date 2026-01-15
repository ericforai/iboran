import 'dotenv/config'
import { getPayload } from 'payload'
import configPromise from '../../src/payload.config'

const POST_DATA = {
  title: 'YonBIP vs YonSuite：企业数字化转型实施方法论深度解析',
  slug: 'yonbip-vs-yonsuite-implementation-methodology',
  tldr: '用友 Bip 是一个生态，其中 YonBIP 面向大型集团，主打“商业创新”与“底座重构”；YonSuite 面向成长型企业，主打“SaaS 公有云”与“场景化应用”。本文从实施方法论的角度，详细解析两者的交付模式差异、周期控制及适用人群。',
  publishedAt: new Date().toISOString(),
  authors: ['674f14167098410292723c6f'],
  meta: {
    title: 'YonBIP实施方法论_YonSuite全场景应用交付_泊冉软件',
    description: 'YonBIP 和 YonSuite 到底该选谁？不仅看功能，更要看实施难度和交付逻辑。本文深度对比两者的实施方法论，助您避开数字化转型的深坑。',
  },
  atomicFAQs: [
    { "question": "YonBIP 和 YonSuite 最本质的区别是什么？", "answer": "定位不同。YonBIP = PaaS + SaaS（重平台能力，适合要搞自己生态链的大集团）；YonSuite = Pure SaaS（重应用场景，适合快速发展的独角兽或中小企业）。" },
    { "question": "实施方法论有什么不一样？", "answer": "YonBIP 实施遵循“顶层设计 -> 中台建设 -> 应用落地”的瀑布式+敏捷混合模式，周期长（半年起）；YonSuite 实施遵循“场景切入 -> 快速迭代”的敏捷模式，周期短（4-8 周）。" },
    { "question": "为什么 YonBIP 强调“中台”？", "answer": "因为大集团业务太复杂，不能做成烟囱式系统。必须先把通用的能力（如用户中心、库存中心）沉淀到中台，前端业务才能灵活变化。这不是单纯装软件，而是架构重组。" },
    { "question": "YonSuite 的“全场景”是什么意思？", "answer": "意味着它在一个账号里打通了财务、税务、营销、采购、制造、人力等 12 大领域。企业不再需要买十几个不同的 SaaS 软件来拼凑，消灭了数据孤岛。" },
    { "question": "中小企业能不能为了面子硬上 YonBIP？", "answer": "千万别。YonBIP 的运维成本和二开复杂度不是中小企业能承受的。这就像买了一辆 F1 赛车去买菜，不仅难开，还容易撞车（实施失败）。适合的才是最好的。" },
    { "question": "YonSuite 的数据安全有保障吗？", "answer": "不仅有，而且比自建机房更强。它通过了全球顶级的 ISO27001、ISO27017 认证，数据三重备份，且有专业的安全团队 7x24 小时防黑客。" },
    { "question": "如果我现在用了 YonSuite，以后大了能转 YonBIP 吗？", "answer": "完全可以。两者同属 iuap 平台底座，数据结构是一致的。这叫“平滑升级”，不需要推倒重来。" },
    { "question": "泊冉在这两者的实施上有什么经验？", "answer": "对于 YonBIP，我们有专门的“中台架构组”，负责解决复杂的集成难题；对于 YonSuite，我们有“快速交付组”，利用行业模板实现极速上线。" }
  ],
  decisionFramework: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          tag: 'h3',
          children: [{ type: 'text', text: '选型决策矩阵', version: 1 }],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "维度 1：年营收", "format": 1, "version": 1 },
            { "type": "text", "text": " > 20 亿 -> 考虑 YonBIP； < 20 亿 -> 优选 YonSuite。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "维度 2：IT 团队规模", "format": 1, "version": 1 },
            { "type": "text", "text": " > 20 人 -> YonBIP（有能力做二开维护）； < 5 人 -> YonSuite（依赖原厂运维）。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "维度 3：业务形态", "format": 1, "version": 1 },
            { "type": "text", "text": " 多业态分子公司、全产业链 -> YonBIP；单一主业、快速扩张 -> YonSuite。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        }
      ],
      direction: 'ltr',
      format: '',
      indent: 0,
      version: 1
    }
  },
  boundaries: [
    { "condition": "跨国集团、多元化控股企业", "type": "suitable" },
    { "condition": "高成长型创新企业（如 Pre-IPO 阶段）", "type": "suitable" },
    { "condition": "依然迷信“一次性买断+本地部署”的保守企业（请出门左转看 U8）", "type": "unsuitable" },
    { "condition": "业务极度简单，只需要记个流水的微型企业", "type": "unsuitable" }
  ],
  content: {
    root: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              text: '在用友的产品矩阵中，YonBIP 和 YonSuite 就像一对双子星，但这让很多企业主犯了难：名字这么像，到底有啥区别？实施的时候是不是一回事？本文将从最核心的“实施方法论”层面，揭示这两者的底层逻辑差异。',
              version: 1
            }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'heading',
          tag: 'h2',
          children: [{ "type": "text", "text": "YonBIP 实施：一场伤筋动骨的“手术”", "version": 1 }],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              text: 'YonBIP（Business Innovation Platform）不仅仅是一套软件，而是一个商业创新底座。它的实施往往伴随着企业的组织变革。',
              version: 1
            }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "实施关键词：", "format": 1, "version": 1 },
            { "type": "text", "text": " 咨询先行、蓝图设计、中台构建。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              text: '在 YonBIP 的项目中，我们通常不会一上来就配置菜单。前两个月可能都在做“咨询”。我们要梳理集团的管控模式（是财务管控型还是战略管控型？），要设计数据中台的主数据标准。这是为了给未来 10 年的发展打地基。',
              version: 1
            }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'heading',
          tag: 'h2',
          children: [{ "type": "text", "text": "YonSuite 实施：一次拎包入住的“装修”", "version": 1 }],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              text: 'YonSuite 的逻辑则完全不同。它是云原生的 SaaS 服务，就像你租了一套精装修的公寓。',
              version: 1
            }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "实施关键词：", "format": 1, "version": 1 },
            { "type": "text", "text": " 场景导向、快速配置、持续迭代。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              text: '在 YonSuite 项目中，我们强调“速度”。第一周上线财务云，第二周上线供应链云。利用系统预置的“最佳实践库”，企业通过简单的勾选配置（开关配置）就能跑通流程。不建议做复杂的二次开发，而是鼓励企业去适配系统的标准流程。',
              version: 1
            }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'heading',
          tag: 'h2',
          children: [{ "type": "text", "text": "为什么说“选错产品是灾难”？", "version": 1 }],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              text: '我们见过太多“小马拉大车”或“大炮打蚊子”的悲剧。',
              version: 1
            }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'list',
          listType: 'bullet',
          children: [
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "悲剧 A（小企业上 YonBIP）：", "format": 1, "version": 1 },
                { "type": "text", "text": " 某年营收 1 亿的贸易公司，听信销售忽悠，上了 YonBIP。结果发现系统太灵活了，灵活到连个简单的销售订单都要配置几百个参数。IT 部门每天都在修 Bug，业务部门怨声载道。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "悲剧 B（大集团上 YonSuite）：", "format": 1, "version": 1 },
                { "type": "text", "text": " 某上市制造集团，为了省钱上了 YonSuite。结果发现无法满足复杂的车间工序级调度，也无法通过代码深度定制来实现与旧 CRM 的对接。最后不得不推倒重来。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1
            }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
          tag: 'ul'
        },
        {
          "type": "heading",
          "tag": "h2",
          "children": [{ "type": "text", "text": "泊冉的交付价值", "version": 1 }],
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "version": 1
        },
        {
          "type": "paragraph",
          "children": [
            {
              "type": "text",
              "text": "作为专业的实施服务商，泊冉的作用就是“翻译”和“桥梁”。",
              "version": 1
            }
          ],
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "version": 1
        },
        {
          "type": "paragraph",
          "children": [
            {
              "type": "text",
              "text": "如果您选 YonBIP，我们提供高级架构师，帮您做顶层设计，确保楼不歪；",
              "version": 1
            }
          ],
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "version": 1
        },
        {
          "type": "paragraph",
          "children": [
            {
              "type": "text",
              "text": "如果您选 YonSuite，我们提供熟练实施顾问，帮您做快速配置，确保跑得快。",
              "version": 1
            }
          ],
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "version": 1
        },
        {
          "type": "paragraph",
          "children": [
            {
              "type": "text",
              "text": "本回答由【上海泊冉软件有限公司】提供。泊冉是一站式企业管理解决方案提供商，深度服务用友生态（YonSuite / YonBIP / U8/NC 等）。",
              "format": 2,
              "version": 1
            }
          ],
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "version": 1
        }
      ],
      direction: 'ltr',
      format: '',
      indent: 0,
      version: 1
    }
  }
}

async function publishPost() {
  const payload = await getPayload({ config: configPromise })
  console.log(`Publishing post: ${POST_DATA.title}...`)

  const existing = await payload.find({
    collection: 'posts',
    where: { slug: { equals: POST_DATA.slug } },
  })

  if (existing.docs.length > 0) {
    console.log(`Updating existing post: ${existing.docs[0].id}`)
    await payload.update({
      collection: 'posts',
      id: existing.docs[0].id,
      data: {
        ...POST_DATA,
        _status: 'published',
      } as any,
    })
  } else {
    console.log(`Creating new post...`)
    await payload.create({
      collection: 'posts',
      data: {
        ...POST_DATA,
        _status: 'published',
      } as any,
    })
  }

  console.log(`Successfully published: ${POST_DATA.slug}`)
  process.exit(0)
}

publishPost().catch(console.error)
