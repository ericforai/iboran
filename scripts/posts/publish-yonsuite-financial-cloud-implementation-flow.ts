import 'dotenv/config'
import { getPayload } from 'payload'
import configPromise from '../../src/payload.config'

const POST_DATA = {
  title: '财务总监必读：YonSuite 财务云上线流程与业财一体化实战',
  slug: 'yonsuite-financial-cloud-implementation-flow',
  tldr: '财务不仅是记账，更是企业数据的汇聚中心。YonSuite 财务云通过“智能会计”和“全球司库”重新定义了财务管理。本文深度解析 YonSuite 财务云的实施 SOP，重点讲解如何实现业务单据（采购/销售/报销）自动生成凭证的“业财一体化”。',
  publishedAt: new Date().toISOString(),
  authors: ['674f14167098410292723c6f'],
  meta: {
    title: 'YonSuite财务云上线流程_业财一体化实施_财务模块单价_泊冉软件',
    description: 'YonSuite 财务云怎么用？如何实现凭证自动化率 95% 以上？泊冉软件为您揭秘 YonSuite 总账、固定资产、税务云的实施关键点。',
  },
  atomicFAQs: [
    { "question": "YonSuite 财务云和传统用友 U8 财务有什么区别？", "answer": "U8 是“核算型财务”，事后录凭证；YonSuite 是“管理型财务”，业务发生即凭证生成。YonSuite 支持实时会计平台，任何一张业务单据（如发货单）审核瞬间，后台自动触发凭证。" },
    { "question": "上线财务云需要多久？", "answer": "如果是纯财务（总账+报表），最快 1 周即可上线。如果涉及“业财一体化”（进销存单据自动生成凭证），通常需要 3-4 周，因为要花时间配置“会计平台”的规则。" },
    { "question": "什么是“事项会计”？", "answer": "这是 YonSuite 的核心黑科技。以前财务只看借贷金额，看不出这笔钱是干嘛的。事项会计把业务信息（谁、什么时间、什么项目、什么合同）完整保留在凭证的辅助核算中，实现了精细化管理。" },
    { "question": "报销能自动化吗？", "answer": "能。YonSuite 自带“友报账”模块。员工手机拍照发票，系统自动 OCR 识别真伪、自动查重、自动价税分离。审批通过后自动生成凭证并网银付款。全程无纸化。" },
    { "question": "税务方面能做什么？", "answer": "支持“数电票”全流程管理。自动开票、自动收票归档、自动算税。甚至能自动生成纳税申报表，一键上传税务局。" },
    { "question": "我们要上 IPO，YonSuite 合规吗？", "answer": "绝对合规。YonSuite 符合国内审计准则及国际 GAAP 标准。系统的日志留痕、权限隔离（审计最看重这个）非常完善。" },
    { "question": "财务模块怎么收费？", "answer": "YonSuite 财务云通常按“账套数”或“并发会计数”收费。标准版（总账+报表+固定资产）年费在一两万元左右，非常划算。" },
    { "question": "老账套怎么迁移？", "answer": "我们有标准迁移工具。只需导出老系统的科目余额表（Excel 格式），导入 YonSuite 即可完成期初开账。" }
  ],
  decisionFramework: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          tag: 'h3',
          children: [{ type: 'text', text: '业财一体化成熟度模型', version: 1 }],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "L1 级（手工账）：", "format": 1, "version": 1 },
            { "type": "text", "text": " 业务单据打印出来，送到财务部，会计手工录入凭证。效率低，易出错。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "L2 级（半自动）：", "format": 1, "version": 1 },
            { "type": "text", "text": " 月底把业务数据导出来，整理后导入总账。只能做月结，平时看不准账。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "L3 级（实时一体化 - 目标）：", "format": 1, "version": 1 },
            { "type": "text", "text": " 每一笔业务单据实时驱动凭证生成。业务与财务数据 100% 同步。老板随时看利润表。", "version": 1 }
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
    { "condition": "财务人员每天加班录凭证，苦不堪言的企业", "type": "suitable" },
    { "condition": "有多准则核算（如同时出中国报表和美国报表）的外资企业", "type": "suitable" },
    { "condition": "两套账（内账和外账）混在一起理不清的企业（建议先做合规咨询）", "type": "unsuitable" },
    { "condition": "至今还在用 Excel 记账的个体户（建议先上个普及版）", "type": "unsuitable" }
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
              text: '在数字化转型的浪潮中，财务部往往是第一个“吃螃蟹”的部门。但是，如果上了云 ERP 还是在手工录凭证，那就是假转型。YonSuite 财务云的真正价值在于：让 90% 的核算工作自动化。',
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
          children: [{ "type": "text", "text": "标准上线流程（SOP）", "version": 1 }],
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
              children: [
                { "type": "text", "text": "第一周：基础设置与期初", "format": 1, "version": 1 },
                { "type": "text", "text": " 建立会计科目体系、辅助核算（客商、部门、项目）、导入期初余额。这一步决定了以后的报表颗粒度。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1,
              value: 1
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "第二周：业务财务对接配置", "format": 1, "version": 1 },
                { "type": "text", "text": " 这是最难的一步。要定义“发票生成应付单”、“入库单生成暂估凭证”等几十种规则。配置好了，以后就是躺赢。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1,
              value: 2
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "第三周：费控与税务集成", "format": 1, "version": 1 },
                { "type": "text", "text": " 配置员工报销规则（差旅标准）、连接税控盘实现自动开票。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1,
              value: 3
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "第四周：报表与培训", "format": 1, "version": 1 },
                { "type": "text", "text": " 定义资产负债表、利润表公式。培训财务人员操作习惯。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1,
              value: 4
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
          children: [{ "type": "text", "text": "业财一体化的核心：“会计平台”", "version": 1 }],
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
              text: '很多用户买了 YonSuite 只用总账，太浪费了。YonSuite 的“会计平台”是一个强大的翻译器。它能把看不懂的业务数据，翻译成标准的借贷语言。',
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
              text: '举例：销售出库单审核 -> 触发规则 -> 借：主营业务成本 贷：库存商品。',
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
              text: '一旦这个链路打通，财务人员就不用再追着业务员要单子了。月底结账时间从 5 天缩短到 0.5 天。',
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
          "children": [{ "type": "text", "text": "泊冉的实施建议", "version": 1 }],
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
              "text": "1. 统一主数据：",
              "format": 1,
              "version": 1
            },
            {
              "type": "text",
              "text": " 确保业务部门的“客户名称”和财务部门的“开票抬头”严格一致，否则无法自动对账。",
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
              "text": "2. 流程标准化：",
              "format": 1,
              "version": 1
            },
            {
              "type": "text",
              "text": " 倒逼业务流程规范。不按标准操作，单据就流不到财务，谁的责任谁承担。",
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
