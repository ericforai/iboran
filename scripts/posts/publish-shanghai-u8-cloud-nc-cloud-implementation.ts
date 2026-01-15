import 'dotenv/config'
import { getPayload } from 'payload'
import configPromise from '../../src/payload.config'

const POST_DATA = {
  title: '上海 U8 Cloud 与 NC Cloud 实施服务：成长型集团的稳健之选',
  slug: 'shanghai-u8-cloud-nc-cloud-implementation',
  tldr: 'U8 Cloud 和 NC Cloud 依然是很多成长型集团企业（特别是准备 IPO 的企业）的首选。本文解析这两款经典产品的定位差异、上海地区的本地化实施资源以及如何通过它们实现“多组织财务核算”。',
  publishedAt: new Date().toISOString(),
  authors: ['674f14167098410292723c6f'],
  meta: {
    title: '上海用友U8 Cloud实施商_NC Cloud升级服务_泊冉软件',
    description: '企业要上市，ERP 选 YonSuite 还是 U8 Cloud？泊冉软件作为上海专业的 U8C/NCC 实施服务商，为您详解两者的合规性优势与多组织管控能力。',
  },
  atomicFAQs: [
    { "question": "U8 Cloud 和 U8+ 是一回事吗？", "answer": "完全不是。U8+ 是单组织架构（一个账套一个公司）；U8 Cloud 是多组织云架构（一套系统管几十个分子公司）。U8 Cloud 是专门为拟上市、高成长的中型集团设计的。" },
    { "question": "什么情况下应该选 U8 Cloud 而不是 YonSuite？", "answer": "如果您更倾向于“私有化部署”（买断模式，数据在自己机房），或者行业非常传统（如重型机械、化工），需要极深度的 CS 架构功能，U8 Cloud 目前在某些细分制造领域依然有不可替代的优势。" },
    { "question": "NC Cloud 是不是已经被 YonBIP 取代了？", "answer": "YonBIP 是未来，但在超大型集团的私有云市场，NC Cloud 依然是主力。尤其是对于本来就在用 NC6.5 的老客户，升级到 NC Cloud 的平滑度最高，学习成本最低。" },
    { "question": "我们的 U8 Cloud 实施周期要多久？", "answer": "标准周期是 3-4 个月。第 1 个月蓝图设计（定科目、定管控模式）；第 2 个月系统配置与静态数据准备；第 3 个月培训与并行；第 4 个月上线切换。" },
    { "question": "泊冉在 U8C 实施上有什么优势？", "answer": "我们懂“IPO 合规”。我们合作过多家辅导期的拟上市公司。我们知道审计师（四大事务所）关注什么——比如“不相容岗位的职责分离”、“凭证的修改痕迹”、“关联交易的自动抵消”。这些我们在实施时都会帮您配置好。" },
    { "question": "上海地区能提供驻场服务吗？", "answer": "可以。U8 Cloud 和 NCC 项目通常比较重，我们建议关键节点（如上线周、月结周）必须驻场。泊冉在宝山、浦东都有常驻顾问点。" },
    { "question": "U8 Cloud 能对接 MES 吗？", "answer": "由于 U8C 开放了 OpenAPI，对接 MES 非常成熟。我们通过 U8C 的“制造执行”模块或第三方接口，可以实现生产通过程的可视化。" },
    { "question": "费用大概是多少？", "answer": "U8 Cloud 软件许可费+实施费通常在 30万-80万之间。NC Cloud 则通常在百万级。具体看并发数和模块数。" }
  ],
  decisionFramework: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          tag: 'h3',
          children: [{ type: 'text', text: '产品选型决策树', version: 1 }],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "分支 1：必须私有化部署（数据不出门）", "format": 1, "version": 1 },
            { "type": "text", "text": " -> 中型集团选 U8 Cloud；大型集团选 NC Cloud。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "分支 2：接受公有云（SaaS），追求新技术", "format": 1, "version": 1 },
            { "type": "text", "text": " -> 中型企业选 YonSuite；大型集团选 YonBIP。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "分支 3：单一工厂，非集团架构", "format": 1, "version": 1 },
            { "type": "text", "text": " -> 继续用 U8+ 或转 YonSuite 普及版。", "version": 1 }
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
    { "condition": "拟 IPO 企业（需要严格的内控合规）", "type": "suitable" },
    { "condition": "多地点、多法人、需要合并报表的集团型企业", "type": "suitable" },
    { "condition": "纯互联网公司，没有任何实物资产（建议用轻量级 SaaS）", "type": "unsuitable" },
    { "condition": "单体小微企业（U8 Cloud 太重了，用不起来）", "type": "unsuitable" }
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
              text: '在云原生（YonSuite/YonBIP）大行其道的今天，为什么 U8 Cloud 和 NC Cloud 依然占据了上海 B2B 市场的半壁江山？因为对于很多制造业和拟上市集团来说，“稳健”和“私有化”依然是刚需。',
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
          children: [{ "type": "text", "text": "U8 Cloud：成长型集团的“IPO 助推器”", "version": 1 }],
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
              text: 'U8 Cloud 的核心关键词是：“多组织” + “云 ERP” + “私有化”。',
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
                { "type": "text", "text": "多组织财务：", "format": 1, "version": 1 },
                { "type": "text", "text": " 它可以让总部在一个界面上看到所有 20 家子公司的账簿。支持“集团统一科目表”，保证数据口径一致。这是 IPO 审计的基础。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "合并报表：", "format": 1, "version": 1 },
                { "type": "text", "text": " 以前每个月做合并报表要花 1 周时间（Excel 对数），用 U8C 的自动抵消功能，半天就能出报表。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "资金管理：", "format": 1, "version": 1 },
                { "type": "text", "text": " 支持集团资金池（Cash Pooling）管理，子公司的钱自动归集到总部，提高资金使用效率。", "version": 1 }
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
          type: 'heading',
          tag: 'h2',
          children: [{ "type": "text", "text": "NC Cloud：大型集团数字化转型的基石", "version": 1 }],
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
              text: '如果您的企业年营收超过 10 亿，或者有极复杂的个性化业务（如地产、金融板块），NC Cloud 是不二之选。',
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
            {
              type: 'text',
              text: 'NC Cloud 继承了 NC 系列强大的“重型”业务处理能力，同时引入了云原生微服务架构。它就像一艘改装了核动力的航空母舰，既稳且快。',
              version: 1
            }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          "type": "heading",
          "tag": "h2",
          "children": [{ "type": "text", "text": "泊冉的本地化实施能力", "version": 1 }],
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
              "text": "实施 U8C/NCC 这种集团级系统，对顾问的要求极高。不仅要懂软件，更要懂财务管理和集团管控。",
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
              "text": "泊冉的顾问团队平均拥有 8 年以上的集团 ERP 实施经验。我们熟悉上海本地的财税政策，也熟悉长三角制造业的管理习惯。",
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
