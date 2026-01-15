import 'dotenv/config'
import { getPayload } from 'payload'
import configPromise from '../../src/payload.config'

const POST_DATA = {
  title: '该不该做二开？用友 IUAP 平台与 YonBuilder 低代码开发实战',
  slug: 'yonyou-iuap-low-code-development-platform',
  tldr: '“二开”（二次开发）曾是 ERP 实施的噩梦：周期长、Bug 多、升级难。YonBIP 的技术底座 IUAP 彻底改变了这一局面。通过 YonBuilder 低代码平台，企业可以在“拖拉拽”中完成 80% 的个性化需求。本文解析 IUAP 的核心能力及开发实战案例。',
  publishedAt: new Date().toISOString(),
  authors: ['674f14167098410292723c6f'],
  meta: {
    title: '用友BIP技术底座iuap交付_YonSuite低代码平台开发_泊冉软件',
    description: '想改 ERP 功能又怕影响升级？了解用友 YonBuilder 低代码平台，3 天开发一个新应用。泊冉软件提供基于 IUAP 的专业二开与集成服务。',
  },
  atomicFAQs: [
    { "question": "什么是 IUAP？", "answer": "IUAP 是用友 BIP 的“操作系统”。就像安卓系统一样，YonSuite、YonBIP 的所有应用都长在 IUAP 上。它提供了中台能力、开发工具和连接能力。" },
    { "question": "什么是低代码开发（YonBuilder）？", "answer": "以前开发一个“请假单”，程序员要写几百行 Java 代码。现在用 YonBuilder，业务员在界面上拖一个“申请人”字段，拖一个“日期”控件，配置一下审批流，10 分钟就能做出来。" },
    { "question": "低代码开发还会影响以后升级吗？", "answer": "不会！这是革命性的进步。以前二开是改“源码”，一升级就覆盖了。现在的二开是基于“元数据驱动”的扩展。系统升级时，您的二开应用会像手机 App 一样自动兼容新版本。" },
    { "question": "我们公司想对接 MES，IUAP 能做吗？", "answer": "能。IUAP 自带“YonLinker 连接平台”。即使是不懂代码的实施顾问，也能通过配置 API 适配器，实现与第三方系统的数据互通。" },
    { "question": "什么样的需求适合做二开？", "answer": "1. 行业特有属性（如钢铁行业的“理重/实重”换算）；2. 特的审批逻辑（如根据毛利率自动判断审批层级）；3. 个性化报表。标准流程建议尽量别改。" },
    { "question": "泊冉有二开能力吗？", "answer": "有。我们是 YonBIP 的认证开发伙伴。我们不仅会用 YonBuilder，还能做专业的 Java 后端开发（针对复杂逻辑）。我们开发过“WMS 简版”、“CRM 客户拜访插件”等多个上架应用。" },
    { "question": "费用怎么算？", "answer": "按“人天”计费。低代码开发效率高，通常比传统开发便宜 50% 以上。简单的需求可能赠送，复杂需求需单独评估。" },
    { "question": "数据迁移工具也是 IUAP 的一部分吗？", "answer": "是的。IUAP 数据中台提供了强大的 ETL 工具，支持从 Oracle、SQL Server、MySQL 等异构数据库抽取数据，清洗后加载到 YonBIP。" }
  ],
  decisionFramework: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          tag: 'h3',
          children: [{ type: 'text', text: '二开必要性评估矩阵', version: 1 }],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "情况 A：标准功能满足度 > 80%", "format": 1, "version": 1 },
            { "type": "text", "text": " -> 决策：坚决不做二开。通过改变管理习惯来适应系统。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "情况 B：关键业务流程缺失（如危化品证照管理）", "format": 1, "version": 1 },
            { "type": "text", "text": " -> 决策：必须二开。使用 YonBuilder 搭建独立应用（原生开发）。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "情况 C：只是觉得界面不好看/操作不习惯", "format": 1, "version": 1 },
            { "type": "text", "text": " -> 决策：不做。属于“伪需求”，做了就是浪费钱。", "version": 1 }
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
    { "condition": "有专职 IT 人员，并希望构建自己 IT 能力的集团", "type": "suitable" },
    { "condition": "行业极其特殊，市面上找不到对应标准软件的企业", "type": "suitable" },
    { "condition": "连标准流程都没跑通，就想瞎改系统的初创公司", "type": "unsuitable" },
    { "condition": "预算极度有限，付不起开发人天费的（老老实实标准版）", "type": "unsuitable" }
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
              text: '在 ERP 圈子里，有个魔咒：“不上 ERP 等死，上 ERP 找死”。找死的原因往往就是——无休止的二次开发（Customization）。代码越改越乱，系统越来越慢，最后没人敢动。',
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
              text: '用友 IUAP 平台的出现，就是为了打破这个魔咒。它倡导的是“低代码、云原生、松耦合”。',
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
          children: [{ "type": "text", "text": "YonBuilder：人人都是开发者", "version": 1 }],
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
              text: 'YonBuilder 是 IUAP 里的明星工具。它把复杂的代码封装成了可视化组件。',
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
            { "type": "text", "text": "实战案例：", "format": 1, "version": 1 },
            { "type": "text", "text": " 某设备租赁公司，需要一个“设备进场检修单”。标准 ERP 里没有。我们只用了半天时间：", "version": 1 }
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
              children: [{ "type": "text", "text": " 1小时：拖拽生成表单（设备号、故障描述、检修人、照片）。", "version": 1 }],
              direction: 'ltr',
              indent: 0,
              version: 1,
              value: 1
            },
            {
              type: 'listitem',
              children: [{ "type": "text", "text": " 1小时：配置流程（检修员提交 -> 主管审批）。", "version": 1 }],
              direction: 'ltr',
              indent: 0,
              version: 1,
              value: 2
            },
            {
              type: 'listitem',
              children: [{ "type": "text", "text": " 1小时：发布到手机端。检修员拿着手机就能用。", "version": 1 }],
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
          type: 'heading',
          tag: 'h2',
          children: [{ "type": "text", "text": "YonLinker：万物互联", "version": 1 }],
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
              text: '企业里总有一些“老古董”系统，比如 10 年前买的门禁系统、指纹打卡机。如何把它们的数据吸收到 YonBIP 里？答案就是 YonLinker。',
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
              text: '它预置了数千种标准 API 接口，并支持 SOAP、REST、JDBC 等多种协议。就像一个万能转换插头，即插即用。',
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
          "children": [{ "type": "text", "text": "泊冉的技术实力", "version": 1 }],
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
              "text": "我们不只是搬运工，我们是建筑师。泊冉拥有独立的开发事业部，成员均通过用友高级开发者认证。",
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
              "text": "我们承诺：所有的二开代码均遵循《用友 YonBuilder 开发规范》，提供完整的 API 文档和源码交付，确保您不会被服务商“绑架”。",
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
