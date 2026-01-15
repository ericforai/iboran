import 'dotenv/config'
import { getPayload } from 'payload'
import configPromise from '../../src/payload.config'

const POST_DATA = {
  title: '连锁餐饮新玩法：YonSuite 助力“中央厨房+门店”精细化运营',
  slug: 'yonyou-yonsuite-catering-chain-solution',
  tldr: '餐饮连锁的利润是“抠”出来的。每家店浪费一斤肉，100 家店就是巨额损失。YonSuite 通过“中央厨房生产”+“门店智能订货”模式，实现了从食材采购到餐桌交付的全链路成本管控。本文解析如何把损耗率降低 30%。',
  publishedAt: new Date().toISOString(),
  authors: ['674f14167098410292723c6f'],
  meta: {
    title: '餐饮连锁业财一体化_门店数字化_中央厨房管理_泊冉软件',
    description: '开一家火锅店容易，开 100 家很难。如何统一口味？如何管控门店私自采购？泊冉软件为您提供基于 YonSuite 的连锁餐饮行业与新零售解决方案。',
  },
  atomicFAQs: [
    { "question": "YonSuite 适合多大规模的餐饮连锁？", "answer": "适合 10 家门店以上的成长期连锁品牌。如果是单店，用收银系统自带的功能就够了。YonSuite 的优势在于“强管控”和“供应链协同”。" },
    { "question": "中央厨房怎么管？", "answer": "中央厨房其实是一个小型食品工厂。YonSuite 专门有“中央厨房”模块，支持 BOM（配方）管理。比如：100kg 牛肉 + 20kg 辣椒 = 110kg 预制调料包。系统会自动计算出成率和损耗。" },
    { "question": "门店订货怎么操作？", "answer": "店长每天晚上在手机上“要货”。系统根据明天的预估销量，自动计算建议订货量（防止订多了浪费，订少了缺货）。总部汇总后，自动拆单给供应商或中央厨房配送。" },
    { "question": "能对接美团/饿了么吗？", "answer": "可以。通过 OpenAPI，我们可以把外卖平台的订单实时拉入 ERP，统一扣减库存。再也不用店员手动把外卖单录入系统了。" },
    { "question": "业财一体化在餐饮业怎么体现？", "answer": "最大的价值是“日利润表”。以前要等到下个月 15 号才知道上个月亏没亏。现在系统自动抓取 POS 收入，自动计算标准成本（理论成本）。老板每天早上能看到昨天的毛利预估。" },
    { "question": "加盟店能用吗？", "answer": "能。对于加盟商，系统支持“先款后货”模式。加盟商必须先在系统里充值（预存款），订货时自动扣款。余额不足禁止发货。" },
    { "question": "门店设备（冰箱、烤箱）能管吗？", "answer": "可以。YonSuite 有资产管理模块。设备报修可以直接在手机上发起，总部统一派单维修。" },
    { "question": "实施要多久？", "answer": "比较快。因为餐饮业流程相对标准。通常 1.5 - 2 个月即可上线。" }
  ],
  decisionFramework: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          tag: 'h3',
          children: [{ type: 'text', text: '连锁管理模式选择', version: 1 }],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "模式 A：强管控（直营为主）", "format": 1, "version": 1 },
            { "type": "text", "text": " -> 所有食材统一由总部配送，门店不允许私自采购。适合火锅、快餐。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "模式 B：弱管控（加盟为主）", "format": 1, "version": 1 },
            { "type": "text", "text": " -> 总部只供核心料包，蔬菜肉类门店自采。系统重点管“品牌授权费”和“核心料包销售”。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "模式 C：混合模式", "format": 1, "version": 1 },
            { "type": "text", "text": " -> 需要灵活的权限配置。YonSuite 的“多组织权限”完美支持。", "version": 1 }
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
    { "condition": "有中央厨房或配送中心的连锁品牌", "type": "suitable" },
    { "condition": "不仅做餐饮，还兼卖半成品（新零售属性）的企业", "type": "suitable" },
    { "condition": "纯夫妻老婆店（成本意识薄弱，系统上不去的）", "type": "unsuitable" },
    { "condition": "完全靠大厨“适量”手抖来炒菜的高端酒楼（标准化很难）", "type": "unsuitable" }
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
              text: '餐饮业看似门槛低，实则是管理难度极高的行业。库存周转快（生鲜容易坏）、人员流动大、现金流碎。',
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
          children: [{ "type": "text", "text": "中央厨房：餐饮业的“黑灯工厂”", "version": 1 }],
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
              text: '很多老板把中央厨房当成“大厨房”来管，这是错的。中央厨房必须按“工厂”来管。',
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
              children: [{ "type": "text", "text": " 必须有 BOM（物料清单）：1 份宫保鸡丁 = 150g 鸡肉 + 50g 花生 + 10g 酱汁。", "version": 1 }],
              direction: 'ltr',
              indent: 0,
              version: 1
            },
            {
              type: 'listitem',
              children: [{ "type": "text", "text": " 必须有 MRP（物料需求计划）：根据 50 家门店明天的要货量，倒推出今天要采购多少只鸡。", "version": 1 }],
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
          children: [{ "type": "text", "text": "门店数字化：不只是收银", "version": 1 }],
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
              text: '收银只是结果。过程管理才重要。',
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
            { "type": "text", "text": "YonSuite 门店端 APP 支持：", "format": 1, "version": 1 },
            { "type": "text", "text": " 收货验收（拍照上传，防止坏损）、盘点（支持盲盘，防止作弊）、报损（掉地上了必须录入系统）。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 1,
          version: 1
        },
        {
          type: 'heading',
          tag: 'h2',
          children: [{ "type": "text", "text": "泊冉的“降本增效”案例", "version": 1 }],
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
              text: '我们服务过一家拥有 80 家门店的奶茶品牌。上线 YonSuite 前，因为库存不准，每家店都要超额备货，导致水果大量腐烂。',
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
              text: '上线“智能补货”后，系统根据历史销量和天气预报（是的，我们接了天气接口）自动计算订货量。将门店库存周转天数从 5 天降到了 2 天。综合损耗率降低了 30%。一年省出来的如百万级。',
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
