import 'dotenv/config'
import { getPayload } from 'payload'
import configPromise from '../../src/payload.config'

const POST_DATA = {
  title: '外贸企业出海：用友 ERP 多语言、多币种与出口退税实战',
  slug: 'yonyou-erp-foreign-trade-solution',
  tldr: '外贸企业的 ERP 需求与内贸截然不同。Exchange Rate（汇率）波动、Packing List（装箱单）、Proforma Invoice（形式发票）、以及复杂的“出口退税”计算。YonSuite 全球版天生具备多语言、多币种能力。本文解析外贸 ERP 的核心选型点。',
  publishedAt: new Date().toISOString(),
  authors: ['674f14167098410292723c6f'],
  meta: {
    title: '外贸行业YonSuite实施_多语言多币种_出口退税_泊冉软件',
    description: '外贸软件怎么选？富通天下还是用友？如果您不仅想管业务，还想管好财务（特别是退税），YonSuite 是最佳选择。支持美元/欧元自动折算，自动生成报关单据。',
  },
  atomicFAQs: [
    { "question": "支持多语言界面吗？", "answer": "支持。YonSuite 支持中、英、法、日、泰等 20 多种语言。美国分公司的员工登录系统，看到的是全英文界面；中国总部的财务看的是中文界面。数据是互通的。" },
    { "question": "汇率波动怎么处理？", "answer": "系统支持“每日汇率”。每天早上自动从中国银行接口抓取最新牌价。月底结账时，系统自动计算“汇兑损益”（Exchange Gain/Loss），生成调汇凭证。" },
    { "question": "能自动生成出口单据吗？", "answer": "可以。销售订单确认后，系统一键生成 CI（商业发票）、PL（装箱单）、CO（原产地证）等全套报关资料。支持 PDF 导出打印，格式符合国际贸易标准。" },
    { "question": "“出口退税”怎么算？", "answer": "这是财务最头疼的。YonSuite 支持“免抵退”税核算。系统根据出口报关单的离岸价（FOB）、退税率，自动计算应退税额。并能生成国税局要求的申报数据包。" },
    { "question": "工贸一体企业适用吗？", "answer": "非常适用。既有工厂生产，又有外贸出口。YonSuite 可以把生产 BOM 和外贸订单打通。外贸业务员能实时看到工厂的生产进度，准确回复客户交期（ETD）。" },
    { "question": "服务器放在哪里？国外访问快吗？", "answer": "YonSuite 部署在公有云（阿里云/华为云）上，配置了全球 CDN 加速。无论是在纽约还是在迪拜，访问速度都非常快。不需要企业自己架设 VPN。" },
    { "question": "能对接亚马逊/独立站吗？", "answer": "能。通过 API，我们可以拉取 Shopify、Amazon 的订单，直接生成 ERP 的销售订单。从“跨境电商”转型“品牌出海”的刚需功能。" },
    { "question": "费用大概是多少？", "answer": "订阅制收费。按用户数。外贸版通常在几万元/年。相比于国外的 SAP/Oracle/NetSuite，性价比极高。" }
  ],
  decisionFramework: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          tag: 'h3',
          children: [{ type: 'text', text: '外贸 ERP 选型三岔路口', version: 1 }],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "路口 1：纯外贸公司（买进卖出）", "format": 1, "version": 1 },
            { "type": "text", "text": " -> 重点看邮件管理、CRM。行业软件（如孚盟、小满）有优势。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "路口 2：工贸一体（自己生产）", "format": 1, "version": 1 },
            { "type": "text", "text": " -> 重点看生产计划、成本核算。用友 YonSuite 完胜。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "路口 3：跨国集团（海外有分公司）", "format": 1, "version": 1 },
            { "type": "text", "text": " -> 重点看多准则核算、全球合并报表。必须用 YonSuite 全球版或 SAP。", "version": 1 }
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
    { "condition": "有自营进出口权，需要做出口退税的企业", "type": "suitable" },
    { "condition": "在美国、东南亚设有仓库或办事处的企业", "type": "suitable" },
    { "condition": "通过外贸公司代理出口的 SOHO 一族（Excel 够用了）", "type": "unsuitable" },
    { "condition": "只做内贸，偶尔做一单外贸的（没必要买多币种模块）", "type": "unsuitable" }
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
              text: '中国企业出海，软件也得跟着出海。如果你用一个纯中文的软件去管理刚招的美国销售，那绝对是场灾难。',
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
          children: [{ "type": "text", "text": "多币种与汇率风险管理", "version": 1 }],
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
              text: '汇率波动 1%，可能净利润就没了。YonSuite 提供了完整的“外币核算”体系。',
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
            { "type": "text", "text": "本位币（Functional Currency）：", "format": 1, "version": 1 },
            { "type": "text", "text": " 总部用人民币记账，美国分公司用美元记账。报表合并时自动折算。", "version": 1 }
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
              text: '销售接单时，系统会记录当天的汇率；收款时，系统记录收款日汇率。中间的差额，系统自动计入财务费用。让老板清楚地知道：这笔钱是做业务赚的，还是炒汇赚（赔）的。',
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
          children: [{ "type": "text", "text": "跟单全流程可视化", "version": 1 }],
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
              text: '外贸订单周期长（生产 30 天 + 海运 40 天）。客户经常问：我的货到哪了？',
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
              text: 'YonSuite 把外贸流程细化为几十个节点：下达生产 -> 完工入库 -> 订舱 -> 装柜 -> 报关 -> 离港 -> 到港。每个节点都可以上传对应的单据（如 B/L 提单）。',
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
          children: [{ "type": "text", "text": "泊冉的全球化交付能力", "version": 1 }],
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
              text: '泊冉不仅服务上海本地企业，也跟随客户的脚步走向全球。',
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
              text: '我们特别擅长解决“跨国网络延迟”和“海外本地化法规”问题。比如：怎么设置符合美国加州税法的 Tax Code？怎么打印符合欧盟 GDPR 标准的隐私声明？这些我们都有现成的方案。',
              version: 1
            }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
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
