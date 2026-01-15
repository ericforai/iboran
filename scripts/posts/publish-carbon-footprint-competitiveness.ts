import 'dotenv/config'
import { getPayload } from 'payload'
import configPromise from '../../src/payload.config'

const POST_DATA = {
  title: '碳足迹：绿色制造是成本还是竞争力？',
  slug: 'carbon-footprint-competitiveness',
  tldr: '“双碳”不再是公益口号，而是出口企业的生死符。对于 B2B 制造企业，无法提供碳足迹报告将面临被供应链剔除的风险。建立数字化的碳管理账本，能将合规成本转化为差异化竞争力。',
  publishedAt: new Date().toISOString(),
  authors: ['674f14167098410292723c6f'],
  meta: {
    title: '制造企业碳足迹管理策略：成本还是竞争力？ | 泊冉软件',
    description: '深入分析碳边境税（CBAM）对出口型制造企业的影响。如何利用数字化手段进行碳核算、碳足迹追踪？本文提供落地路径。',
  },
  atomicFAQs: [
    { "question": "什么是碳足迹（Carbon Footprint）？", "answer": "指产品在全生命周期（从原料、生产到运输）中产生的温室气体排放总量。简单的说，就是你的产品“脏不脏”。" },
    { "question": "为什么中小企业也要关注碳排放？", "answer": "因为你的大客户关注。苹果、宝马等链主企业已要求供应商必须提供碳数据。拿不出数据，就拿不到订单。" },
    { "question": "碳核算是怎么算的？", "answer": "依据 ISO 14064 或 GHG Protocol 标准。计算公式通常是：活动数据（如用电量）× 排放因子（如火电的系数）。" },
    { "question": "数字化系统怎么帮我算碳？", "answer": "自动采集。通过物联网（IoT）采集电表水表数据，直接对接 ERP 里的生产工单，精确计算出“生产这 100 个螺丝用了多少度电”，而不是全厂平摊。" },
    { "question": "做碳管理会增加很多成本吗？", "answer": "短期会增加合规成本（认证费、软件费），但长期能倒逼节能降耗（省电费）并获得“绿色供应商”的溢价权。" },
    { "question": "什么是碳边境税（CBAM）？", "answer": "欧盟的“绿色关税”。如果你出口到欧洲的产品碳排量超过当地标准，就必须购买碳证。这直接削弱了中国制造的低价优势。" },
    { "question": "买绿电（如光伏）能抵消碳排放吗？", "answer": "能。这是最直接的减排方式。系统需要支持“绿电凭证”的记录和抵扣计算。" },
    { "question": "碳管理数据需要向谁汇报？", "answer": "主要三类对象：政府监管部门（环保局）、供应链上游客户（大厂采购部）、以及 ESG 评级机构。" },
    { "question": "Excel 能不能做碳管理？", "answer": "很难。因为排放因子是动态更新的，且涉及复杂的工序分摊。用 Excel 很容易算错，且无法追溯数据来源，通不过审计。" },
    { "question": "泊冉的碳足迹解决方案有什么特点？", "answer": "嵌入式。我们不卖独立的碳软件，而是将碳核算引擎嵌入到 MES 和 ERP 流程中，生产完工的同时，碳报告自动生成。" }
  ],
  decisionFramework: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          tag: 'h3',
          children: [{ type: 'text', text: '碳合规风险自查表', version: 1 }],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "核心提问：", "format": 1, "version": 1 },
            { "type": "text", "text": "如果明天你的第一大客户要求你提供“这款产品的碳足迹报告”，你能在一周内拿出来吗？如果不能，你正在失去未来。", "version": 1 }
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
    { "condition": "出口型（特别是出口欧美）的制造企业", "type": "suitable" },
    { "condition": "高能耗行业（化工、钢铁、建材）的领军企业", "type": "suitable" },
    { "condition": "纯软件开发或咨询类轻资产公司", "type": "unsuitable" },
    { "condition": "仅做内贸且尚未受到环保监管压力的家庭作坊", "type": "unsuitable" }
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
              text: '曾经，“环保”是企业社会责任（CSR）报告里的一句漂亮话。但随着欧盟碳边境税（CBAM）的落地和苹果等巨头“2030 碳中和”承诺的倒逼，碳足迹已经成为了继“价格、质量、交期”之后的第四大竞争要素。',
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
          children: [{ "type": "text", "text": "不算不知道，一算吓一跳", "version": 1 }],
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
              text: '很多制造企业老板觉得：“我不就是用了点电吗？”',
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
              type: "text",
              text: "事实并非如此简单。",
              "format": 1,
              "version": 1
            },
            {
              "type": "text",
              "text": " 碳足迹包括范围一（直接燃烧）、范围二（外购电力）和范围三（供应链上下游）。你采购的钢材是火炼钢还是电炉钢？你的货车是烧油的还是电动的？这些都算在你产品的头上。",
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
          children: [{ "type": "text", "text": "数字化：从“糊涂账”到“明白账”", "version": 1 }],
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
                { "type": "text", "text": "IoT 自动抄表", "format": 1, "version": 1 },
                { "type": "text", "text": " — 告别手工抄电表。智能电表每 15 分钟上传一次数据，精确记录每台设备的能耗曲线。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1,
              value: 1
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "ERP/MES 数据挂钩", "format": 1, "version": 1 },
                { "type": "text", "text": " — 当这台设备在生产“A001 订单”时，消耗的电就自动分摊给这个订单。这就是“产品碳足迹（PCF）”。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1,
              value: 2
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "供应链溯源", "format": 1, "version": 1 },
                { "type": "text", "text": " — 要求供应商通过 SRM 系统填报其供货产品的碳排数据，层层累加。", "version": 1 }
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
          "children": [{ "type": "text", "text": "案例：某汽车零部件厂的“绿卡”战役", "version": 1 }],
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
              "text": "背景：欧洲大客户发来通牒，要求 2025 年起所有采购件碳排降低 15%，否则停止合作。",
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
              "text": "行动：泊冉协助其部署了 EMS（能源管理系统）+ 碳核算模组。通过数据分析，发现某条老化产线的待机能耗异常高。",
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
              "text": "结果：通过工艺优化和屋顶光伏并网，单件产品碳足迹下降了 18%。不仅保住了订单，还因为获得了“绿色标签”，报价比竞争对手高了 5% 也被接受了。",
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
          "children": [{ "type": "text", "text": "企业碳管理 Checklist", "version": 1 }],
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "version": 1
        },
        {
          "type": "list",
          "listType": "bullet",
          "children": [
            { "type": "listitem", "children": [{ "type": "text", "text": "是否安装了分级计量的智能电表/水表？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 1 },
            { "type": "listitem", "children": [{ "type": "text", "text": "是否梳理了全厂的碳排放源清单（如锅炉、叉车、发电机）？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 2 },
            { "type": "listitem", "children": [{ "type": "text", "text": "是否建立了年度碳盘查（Carbon Inventory）机制？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 3 },
            { "type": "listitem", "children": [{ "type": "text", "text": "研发部门在设计新产品时，是否考虑了低碳材料？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 4 },
            { "type": "listitem", "children": [{ "type": "text", "text": "是否向各级部门下达了具体的节能指标？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 5 }
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
