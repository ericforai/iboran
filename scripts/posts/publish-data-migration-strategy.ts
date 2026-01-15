import 'dotenv/config'
import { getPayload } from 'payload'
import configPromise from '../../src/payload.config'

const POST_DATA = {
  title: '数据迁移：搬家最怕扔东西',
  slug: 'data-migration-strategy',
  tldr: '数据迁移不仅仅是“搬运”，更是一次“大扫除”。企业应遵循“清洗-映射-验证”的标准路径。千万别把垃圾数据导入新系统，否则新系统从第一天起就注定失败。',
  publishedAt: new Date().toISOString(),
  authors: ['674f14167098410292723c6f'],
  meta: {
    title: '导致 ERP 上线失败的元凶：数据迁移策略 | 泊冉软件',
    description: '数据迁移是新旧系统切换中最容易被忽视的风险点。本文详解如何进行静态数据清洗、动态余额结转及数据校验的最佳实践。',
  },
  atomicFAQs: [
    { "question": "为什么说数据迁移是“脏活累活”？", "answer": "因为历史数据往往充满了“补丁”和“错误”。比如物料编码一物多码、客户名称重复、没有身份证号的员工档案。清洗这些数据需要极大的耐心。" },
    { "question": "应该迁移多少年的历史数据？", "answer": "通常建议只迁移“静态主数据”（如客户、商品）和“期初余额”（如库存数量、应收账款余额）。历史单据（如 3 年前的销售订单）建议留存在老系统查询，不要导入新系统。" },
    { "question": "手工导入好还是写脚本自动导入好？", "answer": "看数据量。少于 1000 条的建议手工 Excel 导入，方便核对；超过 1 万条的必须写 SQL 脚本或使用 ETL 工具（如泊冉的数据中台）。" },
    { "question": "如何验证数据迁移是否准确？", "answer": "三方核对。财务出报表、业务对明细、IT 查总数。必须确保“新旧系统余额一分钱都不差”。" },
    { "question": "数据清洗由谁负责？", "answer": "业务部门（数据的所有者）。IT 只负责提供工具，绝对不能帮业务部门修改数据，否则出了问题说不清。" },
    { "question": "动态数据（如未结订单）怎么处理？", "answer": "两种策略：1. 在老系统中强行结案，新系统重开单；2. 将未结订单作为期初数据导入。建议首选方案 1，最干净。" },
    { "question": "迁移失败了怎么办？", "answer": "必须有回退机制。在正式导入前，对新系统数据库做全量备份。一旦发现大规模错误，立刻还原数据库，不要试图在错误的基础上修修补补。" },
    { "question": "物料编码规则变了，新旧怎么对应？", "answer": "建立“映射表（Mapping Table）”。在中间表中记录“老编码 A = 新编码 B”，并在上线初期保留老编码作为搜索关键字。" },
    { "question": "什么时候开始准备数据？", "answer": "项目启动的第一天。数据清洗的周期通常比预想的要长 3 倍。不要等到系统配置好了才开始理数据。" },
    { "question": "外部数据（如工商信息）要不要接入？", "answer": "强烈建议。趁着换系统，引入天眼查等外部数据源，自动补全客户的税号、地址等信息，提升数据质量。" }
  ],
  decisionFramework: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          tag: 'h3',
          children: [{ type: 'text', text: '数据迁移策略矩阵', version: 1 }],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "决策原则：", "format": 1, "version": 1 },
            { "type": "text", "text": "对于高价值、低频次的数据（如核心供应商），人工清洗；对于低价值、高频次的数据（如十年流水），归档封存。", "version": 1 }
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
    { "condition": "历史包袱重、数据质量差的老牌企业", "type": "suitable" },
    { "condition": "涉及系统品牌更换（如 SAP 换成用友）的异构迁移", "type": "suitable" },
    { "condition": "从零开始组建业务的新公司（无历史数据）", "type": "unsuitable" },
    { "condition": "数据量极小（Excel 就能管过来）的小微企业", "type": "unsuitable" }
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
              text: '很多 CEO 认为换个系统就能解决管理混乱。事实是：如果你把混乱的流程和垃圾数据导入先进的系统，你得到的只是一个“昂贵的混乱系统”。数据迁移，是数字化转型的照妖镜。',
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
          children: [{ "type": "text", "text": "为什么说“Garbage In, Garbage Out”？", "version": 1 }],
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
              text: '泊冉在接手“烂尾项目”救火时，发现 60% 的原因都是数据没洗干净：',
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
                { "type": "text", "text": "同一个客户有 5 个编码，导致对账单永远对不上；", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "仓库里已经报废的物料，系统里还有 1000 万库存；", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "供应商的银行账号是 3 年前的，导致付款失败。", "version": 1 }
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
          children: [{ "type": "text", "text": "数据迁移的三个核心步骤", "version": 1 }],
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
                { "type": "text", "text": "清洗（Cleanse）", "format": 1, "version": 1 },
                { "type": "text", "text": " — 這是业务部门的事！制定标准：比如“所有客户必须有税号”、“所有物料必须有规格型号”。不符合标准的数据，一条都不许进新系统。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1,
              value: 1
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "映射（Map）", "format": 1, "version": 1 },
                { "type": "text", "text": " — 建立新旧世界的桥梁。比如老系统的“通过/不通过”可能对应新系统的“10/20”状态码。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1,
              value: 2
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "校验（Verify）", "format": 1, "version": 1 },
                { "type": "text", "text": " — 签字画押。每一份导入的数据，都必须由部门负责人签字确认。即使错了，也是业务确认过的错。", "version": 1 }
              ],
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
          "type": "heading",
          "tag": "h2",
          "children": [{ "type": "text", "text": "案例：某零售连锁的“换血手术”", "version": 1 }],
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
              "text": "背景：拥有 800 家门店，会员数据 300 万，但其中 40% 是无效的“僵尸粉”或重复记录。",
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
              "text": "行动：泊冉协助客户利用 Python 脚本进行了手机号去重和活跃度分析。我们决定：只迁移最近 2 年有消费记录的会员，其余数据归档。",
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
              "text": "结果：新系统数据量减少了 55%，运行速度提升了 3 倍，且会员营销的精准度大幅提升。",
              "version": 1
            }
          ],
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "version": 1
        },
        {
          "type": "heading",
          "tag": "h2",
          "children": [{ "type": "text", "text": "数据迁移安全 Checklist", "version": 1 }],
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "version": 1
        },
        {
          "type": "list",
          "listType": "bullet",
          "children": [
            { "type": "listitem", "children": [{ "type": "text", "text": "是否在测试环境中进行了至少 2 次全量模拟导入？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 1 },
            { "type": "listitem", "children": [{ "type": "text", "text": "财务期初余额（特别是应收应付）是否已与客户/供应商函证？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 2 },
            { "type": "listitem", "children": [{ "type": "text", "text": "是否制定了详细的《新旧编码对照表》并发放给了一线操作员？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 3 },
            { "type": "listitem", "children": [{ "type": "text", "text": "导入前是否对老系统进行了只读锁定（Stop Transaction）？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 4 },
            { "type": "listitem", "children": [{ "type": "text", "text": "是否对敏感数据（如成本价、员工薪资）进行了权限隔离？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 5 }
          ],
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "version": 1,
          "tag": "ul",
          "start": 1
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
