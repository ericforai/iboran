import 'dotenv/config'
import { getPayload } from 'payload'
import configPromise from '../../src/payload.config'

const POST_DATA = {
  title: '2026 用友 YonSuite 与 YonBIP 价格详解与选型避坑指南',
  slug: 'yonsuite-pricing-guide-selection-advice',
  tldr: '“用友 ERP 一套多少钱？”这是最常见但也最难回答的问题。本文公开透明地解析 YonSuite（SaaS 订阅）与 YonBIP（混合部署）的计费逻辑，包括订阅年费、实施人天费及二次开发费用的计算公式，助您避开“低价陷阱”和“隐形消费”。',
  publishedAt: new Date().toISOString(),
  authors: ['674f14167098410292723c6f'],
  meta: {
    title: 'YonSuite年度服务费报价_用友实施费用标准_泊冉软件',
    description: '想买用友软件但怕被坑？一文读懂软件订阅费、实施服务费、运维费的行业标准。揭秘“一口价”背后的猫腻，教您如何做 TCO（总拥有成本）核算。',
  },
  atomicFAQs: [
    { "question": "YonSuite 大概多少钱一年？", "answer": "YonSuite 采用“积木式”计费。起步价（如只用财务云）可能低至几千元/年。但完整的进销存+财务+人力标准版，通常在 5万-20万/年不等。具体取决于您买了多少个“模块”以及多少个“并发用户数”。" },
    { "question": "实施费为什么要单独算？", "answer": "因为“买软件”和“用起来”是两码事。软件本身只是一个工具，实施顾问的服务（调研、配置、培训）是让工具发挥价值的关键。实施费通常是软件首年订阅费的 0.5-1.5 倍。" },
    { "question": "什么是“并发用户数”？", "answer": "这是 SaaS 软件的计费核心。比如您公司有 100 个人，但同时在线操作系统的可能只有 10 个人。您只需要买 10 个并发账号，比给每个人买账号要省钱得多。" },
    { "question": "为什么有的代理商报价特别低？", "answer": "警惕“低价陷阱”。他们通常通过压缩实施天数来降价。原厂标准实施需要 20 人天，他们只报 5 人天。结果就是：系统上线草草了事，遇到问题没人管，最后烂尾。这种看似省钱，实则浪费了全部投资。" },
    { "question": "YonBIP 的费用构成是怎样的？", "answer": "YonBIP 更复杂。除了软件许可（License）或云订阅费外，还需要考虑：服务器资源费（私有化部署时）、数据库授权费（如 Oracle）、以及高昂的定制开发费。" },
    { "question": "第二年续费会涨价吗？", "answer": "公有云产品通常按照官网公开价续费。除非您增加了用户数或新购了模块。好的服务商（如泊冉）会在续费时提供“老客户折扣”或赠送额外的服务包。" },
    { "question": "能不能只买软件，不买实施服务？", "answer": "理论上可以，但强烈不建议。除非您公司拥有非常专业的 IT 团队，且精通用友系统配置。否则，您买回去的只要一个空壳，根本跑不起来。" },
    { "question": "如何评估 TCO（总拥有成本）？", "answer": "不要只看第一年。建议看 3 年或 5 年的总成本。SaaS 模式前几年投入低，适合现金流敏感的企业；买断模式首年投入高，但长期摊销成本低（仅需付运维费）。" }
  ],
  decisionFramework: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          tag: 'h3',
          children: [{ type: 'text', text: '典型企业预算参考（估算值）', version: 1 }],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "小型商贸（5-20人）：", "format": 1, "version": 1 },
            { "type": "text", "text": " YonSuite 普及版。预算范围：1万 - 3万/年（含简易实施）。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "中型制造（50-200人）：", "format": 1, "version": 1 },
            { "type": "text", "text": " YonSuite 标准版（财 + 供 + 产）。预算范围：10万 - 30万/首年（含深度实施）。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "大型集团（上市/拟上市）：", "format": 1, "version": 1 },
            { "type": "text", "text": " YonBIP。预算范围：100万起步，上不封顶（高度依赖二开需求）。", "version": 1 }
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
    { "condition": "愿意为“知识”和“服务”付费，看重最终交付效果的企业", "type": "suitable" },
    { "condition": "有明确预算规划，理解 IT 投入是长期投资的管理者", "type": "suitable" },
    { "condition": "拿着淘宝盗版价格来砍价的客户（我们真的做不了）", "type": "unsuitable" },
    { "condition": "认为“软件就应该免费”的白嫖党", "type": "unsuitable" }
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
              text: '在 B2B 软件采购中，价格永远是绕不开的话题。但 ERP 市场的报价体系极其不透明，导致很多企业主“不敢买”或者“乱买”。今天，泊冉为您揭开这层神秘的面纱。',
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
          children: [{ "type": "text", "text": "SaaS 软件的计费公式", "version": 1 }],
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
              text: 'YonSuite 是典型的公有云 SaaS，其价格公式为：',
              version: 1
            }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'quote',
          children: [
            {
              type: 'text',
              text: '总价 = (模块 A 单价 × 用户数 + 模块 B 单价 × 用户数) + 存储空间费 + 实施服务费',
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
              children: [{ "type": "text", "text": " 模块灵活性：您可以只买“总账”，也可以买“全家桶”。", "version": 1 }],
              direction: 'ltr',
              indent: 0,
              version: 1
            },
            {
              type: 'listitem',
              children: [{ "type": "text", "text": " 弹性扩容：今年只有 3 个会计，就买 3 个账号。明年公司扩大了，随时可以加买。", "version": 1 }],
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
          children: [{ "type": "text", "text": "实施费也是“玄学”吗？", "version": 1 }],
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
              text: '不是。正规的服务器商（如泊冉）有严格的实施人天报价表。',
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
              text: '一个标准的中型项目（进销存+财务+生产），通常需要：',
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
          listType: 'number',
          children: [
            {
              type: 'listitem',
              children: [{ "type": "text", "text": " 项目经理：5 人天（负责规划管控）。", "version": 1 }],
              direction: 'ltr',
              indent: 0,
              version: 1,
              value: 1
            },
            {
              type: 'listitem',
              children: [{ "type": "text", "text": " 高级顾问：15 人天（负责核心蓝图设计和难点攻关）。", "version": 1 }],
              direction: 'ltr',
              indent: 0,
              version: 1,
              value: 2
            },
            {
              type: 'listitem',
              children: [{ "type": "text", "text": " 实施顾问：20 人天（负责具体配置、数据导入和用户培训）。", "version": 1 }],
              direction: 'ltr',
              indent: 0,
              version: 1,
              value: 3
            }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
          tag: 'ol',
          start: 1
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              text: '如果您看到谁家报价特别低，不妨问问他：“你们打算投入多少人天？是高级顾问下场，还是实习生练手？”',
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
          children: [{ "type": "text", "text": "关于“免费版”的真相", "version": 1 }],
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
              text: '市场上确实有一些号称“永久免费”的 SaaS 软件。但请记住：Free is the most expensive（免费的是最贵的）。',
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
              text: '他们的数据所有权归谁？他们的服务器会关闭吗？他们的客服电话打得通吗？对于企业级应用来说，数据的安全性和业务的连续性，价值远超那几万块钱的软件费。',
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
          "children": [{ "type": "text", "text": "泊冉的报价原则", "version": 1 }],
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
              "text": "我们坚持“价值导向”。",
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
              "text": "在报价前，我们一定要做需求调研。如果您的需求只是“开个发票”，我们绝不推荐您买几十万的 ERP。我们会给您推荐最适合、性价比最高的方案。做生意，讲究的是细水长流。",
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
