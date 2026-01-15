import 'dotenv/config'
import { getPayload } from 'payload'
import configPromise from '../../src/payload.config'

const POST_DATA = {
  title: '制造业与新零售：行业化 ERP 解决方案落地案例',
  slug: 'manufacturing-retail-industry-erp-solutions',
  tldr: '通用型 ERP 已死，行业化 ERP 当立。制造业关注工序汇报与物料倒冲，新零售关注 SKU 多规格管理与 O2O 订单同步。泊冉软件分享在汽配、食品、消费电子行业的 YonSuite/YonBIP 落地实战经验，详解如何解决行业特有的痛点。',
  publishedAt: new Date().toISOString(),
  authors: ['674f14167098410292723c6f'],
  meta: {
    title: '制造业YonBIP解决方案_新零售业财一体化_泊冉软件',
    description: '汽配行业如何管理千万级 BOM？食品行业如何追踪批次与保质期？泊冉软件为您提供深度的行业化 ERP 解决方案，覆盖制造、零售、商贸三大领域。',
  },
  atomicFAQs: [
    { "question": "汽配行业的 ERP 难点是什么？", "answer": "两个字：繁琐。一款车型有上万个零件，对应极其复杂的 BOM（物料清单）和 ECN（工程变更）。通用 ERP 根本搞不定这种频繁的版本变动。我们的方案支持“BOM 多版本管理”和“替代料自动计算”功能。" },
    { "question": "食品加工企业最怕什么？", "answer": "最怕食品安全事故。所以 ERP 必须具备“全链路追溯”能力。从原料采购入库（扫码登记批次），到生产投料，再到成品发货，每一个环节都要绑定批次号。一旦出问题，必须在 1 分钟内查出是哪批原料惹的祸。" },
    { "question": "新零售（如连锁门店）怎么解决“账实不符”？", "answer": "以前是门店一套账，总仓一套账，而且数据不同步。YonSuite 的“零售云”实现了“云端一盘货”。门店卖出一双鞋，总部的库存数字秒级扣减。支持线上线下一体化，客户在小程序下单，可以选择就近门店发货。" },
    { "question": "电子元器件贸易公司的痛点是什么？", "answer": "是 SKU 太多且价格波动大。我们实施过一家芯片代理商，他们有 50 万个 SKU。我们利用 YonBIP 的大数据能力，实现了“百万级 SKU 极速检索”和“阶梯报价自动管控”，防止销售员低价卖货导致亏损。" },
    { "question": "行业版 ERP 会不会很贵？", "answer": "不会。因为我们采用的是“行业预配置模板”。相当于买了一套样板房，而不是买地皮自己盖。因为复用率高，实施周期反而比通用版缩短了 30%，费用也相应降低。" },
    { "question": "你们懂我的行业吗？", "answer": "泊冉的顾问团队是按行业分组的。我们的制造组顾问以前就是工厂的 PMC（生产计划员），我们的零售组顾问以前就是连锁店的店长。我们听得懂您的“行话”（如：客单价、连带率、工时定额）。" },
    { "question": "如果我有特殊的行业需求（如钢材切割计算）怎么办？", "answer": "我们在 YonBuilder 平台上开发了大量的行业插件。比如“钢材切割算法”、“印染配方管理”、“危化品证照管理”。这些都是现成的，插上就能用。" },
    { "question": "是否支持多语言多币种（外贸企业）？", "answer": "完美支持。YonSuite 天生具备全球化能力。界面支持中英日法等多语言，财务支持多币种核算及汇兑损益自动计算。非常适合出海企业。" }
  ],
  decisionFramework: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          tag: 'h3',
          children: [{ type: 'text', text: '行业特征匹配度自测', version: 1 }],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "特征 A（离散制造）：", "format": 1, "version": 1 },
            { "type": "text", "text": " 组装为主，BOM 深 --> 重点考察 BOM 管理及 MRP 运算速度。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "特征 B（流程制造）：", "format": 1, "version": 1 },
            { "type": "text", "text": " 配方为主，液体粉末 --> 重点考察 批次追踪及联副产品管理。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "特征 C（全渠道零售）：", "format": 1, "version": 1 },
            { "type": "text", "text": " 线上线下都有，会员通用 --> 重点考察 会员中心及全渠道库存。", "version": 1 }
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
    { "condition": "处于高竞争行业，需要精细化管理（算清每一分钱成本）的企业", "type": "suitable" },
    { "condition": "不仅要管内部 ERP，还要管上下游（供应商协同、经销商订货）的企业", "type": "suitable" },
    { "condition": "行业极其冷门（如殡葬业、核工业），标准 ERP 覆盖率低于 10% 的（需完全定制）", "type": "unsuitable" },
    { "condition": "小作坊式生产，完全靠老法师经验，拒绝数字化的", "type": "unsuitable" }
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
              text: '隔行如隔山。一套 ERP 系统如果不能适配行业的特殊业务逻辑，那就只是一个昂贵的打字机。在过去 5 年里，泊冉深耕“制造”与“零售”两大领域，总结出了一套深度的行业解决方案。',
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
          children: [{ "type": "text", "text": "案例一：汽配行业的“库存风暴”", "version": 1 }],
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
              text: '上海某汽配厂，给主机厂做配套。由于主机厂的订单调整非常频繁（JIT 也就是准时制生产），导致该厂的库存居高不下，呆滞料堆满仓库。',
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
            { "type": "text", "text": "泊冉解决方案：", "format": 1, "version": 1 },
            { "type": "text", "text": " 实施 YonSuite 制造云，并开启 MRP（物料需求计划）每 2 小时运行一次。系统直接对接主机厂的 EDI 预测数据，自动计算到底该买多少原材料。结果：库存周转率提升了 300%，呆滞物料减少了 80%。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'heading',
          tag: 'h2',
          children: [{ "type": "text", "text": "案例二：新零售品牌的“会员资产”", "version": 1 }],
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
              text: '某网红咖啡连锁，拥有 50 家门店。困扰是：会员在微信小程序里积分了，去门店消费却用不了分。因为 POS 系统和线上商城是割裂的。',
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
            { "type": "text", "text": "泊冉解决方案：", "format": 1, "version": 1 },
            { "type": "text", "text": " 上线 YonSuite 数智营销中台。打通了 POS、小程序、抖音本地生活。会员手机号就是唯一 ID。积分实时同步，储值卡全连锁通用。上线后，会员复购率提升了 15%。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'heading',
          tag: 'h2',
          children: [{ "type": "text", "text": "案例三：外贸服装的“尺码矩阵”", "version": 1 }],
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
              text: '服装行业的噩梦是 SKU 太多。一款 T 恤，有 5 个颜色，6 个尺码（S-XXXL），这就是 30 个 SKU。录单录到手抽筋。',
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
            { "type": "text", "text": "泊冉解决方案：", "format": 1, "version": 1 },
            { "type": "text", "text": " 启用 YonSuite 的“二维录入模式”。在同一张单据界面上，横轴是颜色，纵轴是尺码，像填 Excel 一样批量录入数量。效率提升 10 倍以上。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          "type": "heading",
          "tag": "h2",
          "children": [{ "type": "text", "text": "我们的行业沉淀", "version": 1 }],
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
              "text": "我们不做“万金油”，只做“行业专家”。",
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
              "text": "每一个行业包，都凝聚了泊冉顾问数千个小时的现场实施经验。我们知道哪里有坑，哪里能出效益。",
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
