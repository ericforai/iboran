import 'dotenv/config'
import { getPayload } from 'payload'
import configPromise from '../../src/payload.config'

const POST_DATA = {
  title: 'ERP 系统集成实战：打通 OA、MES 与银企直连的数据孤岛',
  slug: 'erp-system-integration-oa-mes-bank',
  tldr: '没有集成的 ERP 只是一个数据孤岛。本文深度解析用友 YonSuite/YonBIP 如何通过 API、OpenAPI 和 AIP 平台，实现与致远 OA、MES 系统及银行系统的无缝对接。泊冉软件分享“银企直连”与“凭证自动生成”的实战代码逻辑。',
  publishedAt: new Date().toISOString(),
  authors: ['674f14167098410292723c6f'],
  meta: {
    title: '用友YonSuite接口开发_与致远OA集成_银企直连_泊冉软件',
    description: 'B2B 企业的 IT 痛点：系统多了，数据反而乱了。泊冉软件提供专业的用友 ERP 二次开发与集成服务，涵盖 OA 审批流回写、MES 工单同步及银企直连付款自动化。',
  },
  atomicFAQs: [
    { "question": "用友系统支持哪些集成方式？", "answer": "主要有三种：1. API 接口（适合轻量级数据交换）；2. DIP 数据集成平台（适合大批量 ETL 任务）；3. 银企互联前置机（专门处理银行支付指令）。" },
    { "question": "用友和致远 OA 深度集成能做什么？", "answer": "实现“单点登录”和“流程互通”。比如员工在 OA 里提交报销单，审批通过后，自动在 ERP 里生成凭证，无需财务手工录入。同时，ERP 里的工资条可以自动推送到 OA 的个人中心。" },
    { "question": "银企直连安全吗？", "answer": "非常安全。我们通过直连专线（或 VPN）直接对接银行前置机。所有支付指令都需要 U 盾复核。最大的好处是：出纳在 ERP 里点一下“付款”，银行那边就自动转账了，不用再去网银手动敲一遍，彻底杜绝输错账号的风险。" },
    { "question": "MES 和 ERP 集成难点在哪里？", "answer": "难点在于“颗粒度”对齐。MES 管的是“工序”（比如车削、打磨），ERP 管的是“订单”。我们通常的做法是：ERP 下达生产订单给 MES，MES 反馈完工数量和工时给 ERP，自动生成入库单和成本核算单。" },
    { "question": "电商订单能自动同步到 ERP 吗？", "answer": "必须能。我们有成熟的“电商通”插件，可以对接天猫、京东、抖音小店。自动抓单、自动拆单、自动锁库存。发货后，快递单号自动回传给电商平台。" },
    { "question": "集成项目一般需要开发多久？", "answer": "看复杂度。标准的 OA 集成通常 1-2 周即可（因为有现成接口）。复杂的 MES 对接可能需要 1-2 个月，涉及大量的字段映射和异常处理逻辑（比如 API 调不通怎么重试）。" },
    { "question": "如果不做集成会有什么后果？", "answer": "那就是“数据孤岛”。采购在 ERP 里做了一遍入库，仓库在 WMS 里又录了一遍。不仅浪费人力，还容易出错（比如两边库存对不上）。集成是数字化转型的必经之路。" },
    { "question": "泊冉的开发能力如何？", "answer": "我们有 10+ 人的专职开发团队，精通 Java 、Python 和 SQL。我们曾为大型光伏企业开发过全套的“设备管理系统”并无缝嵌入到 YonBIP 中。" }
  ],
  decisionFramework: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          tag: 'h3',
          children: [{ type: 'text', text: '常用集成方案拓扑图', version: 1 }],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "场景 A：ERP + OA", "format": 1, "version": 1 },
            { "type": "text", "text": " -> 推荐：NC/U8 + 致远 COP（最佳 CP）。实现审批在 OA，凭证在 ERP。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "场景 B：ERP + WMS/MES", "format": 1, "version": 1 },
            { "type": "text", "text": " -> 推荐：API 实时对接。不要用文件导入导出（时效性太差）。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "场景 C：ERP + 银行", "format": 1, "version": 1 },
            { "type": "text", "text": " -> 推荐：银企直连。这是财务自动化这一步必须要跨越的门槛。", "version": 1 }
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
    { "condition": "拥有异构系统（如泛微 OA、自研 MES）需要互通的中大型企业", "type": "suitable" },
    { "condition": "日单量巨大（超过 500 单），人工录入已崩溃的电商企业", "type": "suitable" },
    { "condition": "完全没有 IT 维护能力，且期望“零代码”实现复杂逻辑的小微企业", "type": "unsuitable" },
    { "condition": "把 Excel 当数据库用的原始管理模式", "type": "unsuitable" }
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
              text: '在 CIO 圈子里有句话：“没有接口的软件是‘死’的，连通了数据的软件才是‘活’的。” 随着企业使用的 SaaS 软件越来越多（OA 审批、CRM 客户管理、MES 生产、SRM 采购），系统集成（Integration）已经成为实施项目的深水区。',
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
          children: [{ "type": "text", "text": "场景一：财务人员的福音——银企直连", "version": 1 }],
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
              text: '传统模式下，出纳要干三件事：1. 在 ERP 里做个付款单；2. 登录网银转账；3. 回来 ERP 做个凭证。累不说，要是手抖转错了账号，麻烦就大了。',
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
              text: '有了银企直连，出纳只做一件事：在 ERP 里点“付款”。系统自动调用银行接口，资金秒到账，回单自动下载并生成凭证。',
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
              children: [{ "type": "text", "text": " 效益：出纳工作量减少 80%，数据准确率 100%。", "version": 1 }],
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
          children: [{ "type": "text", "text": "场景二：行政人员的解放——OA 与 ERP 互通", "version": 1 }],
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
              text: '用友和致远 OA 的关系源远流长。我们能做到极深度的集成。',
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
              text: '举个例子：销售在手机 OA 上提交“差旅报销单”，领导审批通过后，这张单子会自动飞到 ERP 里变成一张“付款申请单”，甚至直接生成会计凭证（借：管理费用-差旅费，贷：银行存款）。',
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
              text: '这中间不需要任何人手工干预。这就是流程自动化的魅力。',
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
          children: [{ "type": "text", "text": "场景三：生产数据的闭环——MES 对接", "version": 1 }],
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
              text: '很多工厂上了 ERP，也上了 MES，但还是需要文员每天把 MES 里的报工单导出来，做成 Excel，再导入 ERP。这种“半自动化”非常容易出错。',
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
              text: '泊冉的集成方案：通过 API 中间件，实现两个系统的“握手”。',
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
              children: [{ "type": "text", "text": " ERP 生产订单审核 -> 自动推送到 MES 生产列表。", "version": 1 }],
              direction: 'ltr',
              indent: 0,
              version: 1,
              value: 1
            },
            {
              type: 'listitem',
              children: [{ "type": "text", "text": " MES 扫码完工 -> 自动触发 ERP 产成品入库。", "version": 1 }],
              direction: 'ltr',
              indent: 0,
              version: 1,
              value: 2
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
          "type": "heading",
          "tag": "h2",
          "children": [{ "type": "text", "text": "为什么选择泊冉做二次开发？", "version": 1 }],
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
              "text": "因为我们懂业务。纯软件公司写的接口，经常出现“字段对上了，但业务逻辑不对”的情况（比如退货单忘记处理负库存）。做接口开发，不仅要懂 coding，更要懂财务逻辑和供应链流程。这正是泊冉“技术+咨询”双轮驱动的优势所在。",
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
