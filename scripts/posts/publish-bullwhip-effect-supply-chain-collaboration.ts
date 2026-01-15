import 'dotenv/config'
import { getPayload } from 'payload'
import configPromise from '../../src/payload.config'

const POST_DATA = {
  title: '供应链协同：如何消灭“牛鞭效应”？',
  slug: 'bullwhip-effect-supply-chain-collaboration',
  tldr: '“牛鞭效应”是供应链管理的噩梦：终端市场微小的需求波动，传导到上游供应商时会变成巨大的库存积压或断货。解决之道在于“信息共享”和“VMI 寄售库存”。打破企业间的围墙，让供应商通过 ERP 直接看到你的库存。',
  publishedAt: new Date().toISOString(),
  authors: ['674f14167098410292723c6f'],
  meta: {
    title: '供应链牛鞭效应详解与数字化解决方案 | 泊冉软件',
    description: '库存积压的元凶是什么？B2B 供应链如何实现从“推式”到“拉式”的变革？解析 SRM 和 VMI 在消灭牛鞭效应中的作用。',
  },
  atomicFAQs: [
    { "question": "什么是牛鞭效应（Bullwhip Effect）？", "answer": "挥动鞭子时，手腕抖动一点点，鞭梢会甩动很大幅度。供应链同理：消费者买了 1 个，零售商为了保险订 2 个，批发商订 4 个，工厂订 8 个原料。需求在传递中被逐级放大了。" },
    { "question": "牛鞭效应的后果是什么？", "answer": "上游供应商要么囤积了巨量卖不掉的库存，要么完全来不及生产导致断货。整个供应链效率极其低下。" },
    { "question": "为什么会产生牛鞭效应？", "answer": "1. 信息不透明（上游看不到终端真实销量）；2. 批量订货（为了凑整车发货）；3. 价格波动（促销时疯狂囤货）；4. 恐慌性订货（短缺时的博弈）。" },
    { "question": "数字化系统如何消除牛鞭效应？", "answer": "核心是“信息穿透”。通过 SRM（供应商管理系统）和 EDI（电子数据交换），让供应商不仅看到你的订单，还能看到你的实时库存和销售预测。大家对着同一套数据干活。" },
    { "question": "什么是 VMI（供应商管理库存）？", "answer": "Vendor Managed Inventory。你仓库里的货，算供应商的。供应商负责补货，保证你不断货。你用多少结算多少。这把库存压力留给了供应商，但也迫使供应商更精准地备货。" },
    { "question": "什么是 CPFR（协同计划、预测与补货）？", "answer": "比 VMI 更进一步。品牌商和零售商坐在一起制定促销计划和销售预测。比如下个月要搞双十一，双方提前对齐数据，而不是搞突然袭击。" },
    { "question": "小企业怎么做供应链协同？", "answer": "不需要复杂的 SRM。用好云 ERP。给核心供应商开一个“供应商门户”账号，让他们能在线查库存、接订单、打印送货单，这就迈出了第一步。" },
    { "question": "拉式（Pull）供应链和推式（Push）供应链的区别？", "answer": "推式是“做好了再卖”（容易积压）；拉式是“卖了再做”（按单生产）。消灭牛鞭效应就是要把供应链尽可能向“拉式”转变。" },
    { "question": "库存周转天数（DOS）多少才合理？", "answer": "看行业。生鲜可能是 3 天，汽车可能是 30 天，机械设备可能是 90 天。目标是：在不缺货的前提下，DOS 越低越好。" },
    { "question": "泊冉的供应链方案优势是什么？", "answer": "连接性。我们打通了用友 ERP 与主流电商平台及物流系统。订单一下，自动触发采购建议，减少人为“拍脑袋”造成的偏差。" }
  ],
  decisionFramework: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          tag: 'h3',
          children: [{ type: 'text', text: '供应链协同等级模型', version: 1 }],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "Level 1（基础）：", "format": 1, "version": 1 },
            { "type": "text", "text": "通过邮件、电话发订单。信息滞后。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "Level 2（连接）：", "format": 1, "version": 1 },
            { "type": "text", "text": "使用 SRM 门户。线上下单、线上对账。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "Level 3（可视）：", "format": 1, "version": 1 },
            { "type": "text", "text": "分享库存数据。供应商能看到你的水位。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "Level 4（融合）：", "format": 1, "version": 1 },
            { "type": "text", "text": "VMI/JIT。供应商直接驻厂服务，深度绑定。", "version": 1 }
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
    { "condition": "拥有稳定合作伙伴和长期协议的供应链", "type": "suitable" },
    { "condition": "需求波动大、产品生命周期短的行业（如快时尚）", "type": "suitable" },
    { "condition": "一次性买卖，随时更换供应商的采购模式", "type": "unsuitable" },
    { "condition": "涉及核心保密配方，绝不愿透露用量的企业", "type": "unsuitable" }
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
              text: '在啤酒游戏中，消费者多买了一瓶啤酒，传导到酿酒厂可能就是多生产了一万瓶。这就是著名的“牛鞭效应”。它让无数企业的仓库堆满了卖不出去的货，或者在旺季眼睁睁看着客户流失。',
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
          children: [{ "type": "text", "text": "罪魁祸首：信息孤岛", "version": 1 }],
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
              text: '为什么会这样？因为大家都缺乏安全感。',
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
                { "type": "text", "text": "零售商想：", "format": 1, "version": 1 },
                { "type": "text", "text": " “万一厂家断货怎么办？我得多备点。”（+10%）", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "批发商想：", "format": 1, "version": 1 },
                { "type": "text", "text": " “下面要货很猛啊，我得加倍备货。”（+20%）", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "厂家想：", "format": 1, "version": 1 },
                { "type": "text", "text": " “订单暴涨！开足马力生产！”（+50%）", "version": 1 }
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
          type: 'paragraph',
          children: [
            {
              type: "text",
              text: "结果：终端只多卖了 5%，上游却多生产了 50%。等热度一过，全是呆滞库存。",
              "version": 1
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
          children: [{ "type": "text", "text": "解药：拆掉围墙", "version": 1 }],
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
              text: '要消灭牛鞭效应，必须实现全链路的信息共享。',
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
              children: [
                { "type": "text", "text": "POS 数据直连", "format": 1, "version": 1 },
                { "type": "text", "text": " — 像沃尔玛和帮宝适那样。收银台扫走一包纸尿裤，工厂的生产计划就自动更新。不需要经过中间商的层层扭曲。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1,
              value: 1
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "小批量多频次", "format": 1, "version": 1 },
                { "type": "text", "text": " — 放弃“一周送一次大数据量”的习惯，改为“一天送一次小数据量”。这需要强大的物流支持。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1,
              value: 2
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "稳定价格策略", "format": 1, "version": 1 },
                { "type": "text", "text": " — 减少“忽高忽低”的促销。因为促销是人为制造的需求波动，是牛鞭效应的催化剂。", "version": 1 }
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
          "children": [{ "type": "text", "text": "案例：某家电企业的 VMI 实践", "version": 1 }],
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
              "text": "背景：钢板是主要原材料，占用资金巨大，且经常因采购不及时导致停工待料。",
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
              "text": "实施：泊冉协助实施 SRM 系统。钢板供应商在工厂隔壁建库。供应商通过系统实时看到工厂明天的生产计划，自动把钢板送到产线边。",
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
              "text": "成效：工厂的原材料库存天数从 15 天降到了 0.5 天。资金周转率提升了 3 倍。供应商也因为掌握了稳定需求，优化了自己的排产。",
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
          "children": [{ "type": "text", "text": "供应链协同 Checklist", "version": 1 }],
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "version": 1
        },
        {
          "type": "list",
          "listType": "bullet",
          "children": [
            { "type": "listitem", "children": [{ "type": "text", "text": "核心供应商是否 100% 入驻了 SRM 平台？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 1 },
            { "type": "listitem", "children": [{ "type": "text", "text": "是否与供应商签署了数据保密协议（EDA）？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 2 },
            { "type": "listitem", "children": [{ "type": "text", "text": "采购订单的自动化率是否超过 80%？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 3 },
            { "type": "listitem", "children": [{ "type": "text", "text": "是否能实时查询在途库存（In-transit Inventory）？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 4 },
            { "type": "listitem", "children": [{ "type": "text", "text": "是否建立了供应商绩效评估体系（打分、分级）？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 5 }
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
