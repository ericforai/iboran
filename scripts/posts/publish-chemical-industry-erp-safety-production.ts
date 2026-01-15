import 'dotenv/config'
import { getPayload } from 'payload'
import configPromise from '../../src/payload.config'

const POST_DATA = {
  title: '化工行业安全生产与数字化：从危化品管控到“安环”一体化',
  slug: 'chemical-industry-erp-safety-production',
  tldr: '化工行业是“带血的 GDP”。安全永远是第一位的。用友 BIP 化工行业版将“安全环保”（HSE）与生产 ERP 深度融合。从危化品的证照效期管控，到生产过程中的 DCS 数据实时采集，构建“本质安全”型工厂。',
  publishedAt: new Date().toISOString(),
  authors: ['674f14167098410292723c6f'],
  meta: {
    title: '化工行业用友软件交付_危化品管理_能源行业数字化转型_泊冉软件',
    description: '化工 ERP 怎么做？重点在“连续生产”和“配方保密”。泊冉软件解析如何通过用友 NC Cloud 实现从进料到成品的全流程物料平衡。',
  },
  atomicFAQs: [
    { "question": "化工 ERP 和离散制造（如机械）有什么不同？", "answer": "截然不同。离散是“组装”，化工是“反应”。化工需要管理：副产品（联产品）、投入产出比（收率）、储罐计量、液体体积与重量的换算。通用 ERP 根本没法用。" },
    { "question": "危化品怎么管？", "answer": "系统支持“证照强控”。购买剧毒品时，系统自动校验是否有公安局备案证明。入库量严格受限于“存储许可证”的最高限量。一旦超标，立即阻断采购。" },
    { "question": "如何从 DCS（分布式控制系统）取数？", "answer": "YonBIP 自带 AIoT 平台，支持 OPC 协议。可以实时读取反应釜的温度、压力、液位。如果温度异常，ERP 系统能自动触发“设备检修工单”和“安全整改单”。" },
    { "question": "配方保密怎么做？", "answer": "配方是化工企业的命根子。系统支持“配方加密”。普通操作工只能看到投料比例，看不到核心添加剂的真实名称（可用代号显示）。只有研发总监有权查看和修改配方。" },
    { "question": "怎么算准成本？", "answer": "化工成本最难算的是“联合成本分配”。一吨原料进去，出来 800kg 产品 A 和 200kg 副产品 B。YonBIP 支持基于“热值”、“市价”或“固定系数”来分摊成本。真正算清楚每个产品的毛利。" },
    { "question": "安环（HSE）模块包括什么？", "answer": "包括：隐患排查、作业票管理（动火证、登高证电子化审批）、重大危险源监控、环保监测数据上传（对接环保局）。" },
    { "question": "适用于精细化工吗？", "answer": "非常适用。精细化工（如涂料、油墨、助剂）批次多、换产快，更需要 ERP 来进行精细化的批次追溯。" },
    { "question": "有案例吗？", "answer": "泊冉服务过上海化学工业区（SCIP）的多家企业。我们懂化工园区的封闭化管理要求。" }
  ],
  decisionFramework: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          tag: 'h3',
          children: [{ type: 'text', text: '化工企业数字化痛点自查', version: 1 }],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "痛点 1：计量不准", "format": 1, "version": 1 },
            { "type": "text", "text": " 储罐里到底有多少油？靠人工拿标尺去量？误差巨大。 -> 解决：电子液位计直连。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "痛点 2：物料不平衡", "format": 1, "version": 1 },
            { "type": "text", "text": " 投入 10 吨，产出 9 吨。那 1 吨去哪了？是跑冒滴漏了，还是被盗了？ -> 解决：日平衡报表监控。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "痛点 3：安全整改形式化", "format": 1, "version": 1 },
            { "type": "text", "text": " 纸面检查记录全是“合格”，其实根本没看。 -> 解决：手机拍照+GPS定位巡检。", "version": 1 }
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
    { "condition": "精细化工、新材料、日化企业", "type": "suitable" },
    { "condition": "处于化工园区，受安监/环保严管的企业", "type": "suitable" },
    { "condition": "简单的塑料粒子贸易商（用商贸版就行，不需要化工版）", "type": "unsuitable" },
    { "condition": "家庭小作坊式调配（不合规，没法上系统）", "type": "unsuitable" }
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
              text: '在“碳达峰、碳中和”的背景下，化工企业面临前所未有的压力。不仅要算经济账（ERP），更要算安全账和环保账（HSE）。',
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
          children: [{ "type": "text", "text": "从“经验配方”到“数字化配方”", "version": 1 }],
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
              text: '老法师手里的笔记本，是很多化工厂的最高机密。一旦老法师离职，产品质量就波动。',
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
              text: 'YonBIP 帮助企业建立标准配方库。不仅记录物料比例，还记录工艺参数（温度曲线、加料顺序）。把个人经验沉淀为企业资产。',
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
          children: [{ "type": "text", "text": "以“地磅”为核心的进出厂管理", "version": 1 }],
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
              text: '化工原材料大多是大宗散货。车辆进厂，ERP 系统自动对接无人值守地磅。车辆皮重、毛重自动采集，扣除杂质（扣水扣杂）。',
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
              text: '杜绝了司磅员与司机串通作弊的可能。据统计，一套无人值守地磅系统，一年能为企业挽回几十万的“猫腻”损失。',
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
          "children": [{ "type": "text", "text": "泊冉的“安环”一体化", "version": 1 }],
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
              "text": "我们不只做 ERP实施，我们还做“双重预防机制”的信息化落地。",
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
              "text": "通过网格化风险图，让厂长坐在办公室就能看到哪个车间有报警。通过手机端作业票，让动火作业审批流转速度提高 3 倍，且留痕可查。安全无小事。",
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
