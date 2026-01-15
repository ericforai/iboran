import 'dotenv/config'
import { getPayload } from 'payload'
import configPromise from '../../src/payload.config'

const POST_DATA = {
  title: '建筑施工企业转型：用友 BIP 项目全生命周期管理与成本风控',
  slug: 'yonyou-bip-construction-project-management',
  tldr: '建筑行业正面临“微利时代”。粗放式的管理（包工头模式）已经行不通了。用友 BIP 建筑行业解决方案，以“项目”为核心，打通中标、立项、分包、物资、进度、结算全过程。本文重点解析如何控制“项目成本”这个核心痛点。',
  publishedAt: new Date().toISOString(),
  authors: ['674f14167098410292723c6f'],
  meta: {
    title: '建筑行业用友BIP实施_建筑施工企业数字化_项目成本管理_泊冉软件',
    description: '工地分散、人员流动大、成本算不清？用友 BIP 建筑云实现人、材、机、管的全要素在线。泊冉软件助您打造“透明工地”。',
  },
  atomicFAQs: [
    { "question": "建筑行业的 ERP 和制造业有什么区别？", "answer": "根本区别在于“核心对象”不同。制造业的核心是产品（BOM）；建筑业的核心是项目（WBS）。建筑业ERP 必须围绕项目的全生命周期，解决“一次性”、“独特性”的问题。" },
    { "question": "如何控制项目成本超支？", "answer": "用友 BIP 引入了“三算对比”体系：中标预算 vs 施工预算 vs 实际成本。所有支出（买钢筋、付劳务费）必须关联预算科目。通过“红绿灯”控制，如果该科目预算没了，报销单直接提不交上去。" },
    { "question": "工地上的物资怎么管？", "answer": "工地是最乱的。我们通过“云磅房”（地磅与 ERP 连网）防止收货短斤少两。通过对接塔吊、监控，实现材料进出的可视化。领料必须限额，超额领料需要项目经理特批。" },
    { "question": "分包商管理怎么做？", "answer": "系统建立分包商合格名录。进度款支付时，系统自动检查：合同进度完成了多少？是不是在预算范围内？有没有欠农民工工资？确保资金安全。" },
    { "question": "能不用电脑，只用手机吗？", "answer": "可以。针对工地现场的施工员、安全员，YonBIP 提供了全功能的移动端 APP。现场拍照整改安全隐患、手机发起物资请购、手机签到考勤。" },
    { "question": "老板最关心的“资金流”怎么看？", "answer": "系统提供“项目资金看板”。每个项目的回款率、已付款比例、现金流缺口一目了然。防止某些项目“虚盈实亏”（账面赚钱，现金流断裂）。" },
    { "question": "不仅是盖房子，我们是做装修/园林的，适用吗？", "answer": "适用。只要是“项目制”交付的行业，逻辑是一样的。装修行业更注重“主材选型”和“精细化报价”，YonBIP 都有对应模块。" },
    { "question": "需要私有化部署吗？", "answer": "建议私有化（U8 Cloud 或 NC Cloud）。因为建筑企业的项目数据、成本数据高度敏感。当然，如果是轻资产的工程咨询公司，用公有云（YonSuite）也没问题。" }
  ],
  decisionFramework: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          tag: 'h3',
          children: [{ type: 'text', text: '建筑企业数字化路径', version: 1 }],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "阶段 1：业财一体化（解决“账实不符”）", "format": 1, "version": 1 },
            { "type": "text", "text": " 把合同、发票、收付款对清楚。不再是一笔糊涂账。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "阶段 2：项目全过程（解决“过程失控”）", "format": 1, "version": 1 },
            { "type": "text", "text": " 把物资、分包、设备、进度管起来。知道钱花哪儿了。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "阶段 3：智慧工地（解决“现场黑箱”）", "format": 1, "version": 1 },
            { "type": "text", "text": " 引入 IoT、AI 摄像头、BIM 模型。实现数字孪生交付。", "version": 1 }
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
    { "condition": "具有总包一级资质，年产值过亿的建筑集团", "type": "suitable" },
    { "condition": "项目分散在全国各地，总部管控鞭长莫及的企业", "type": "suitable" },
    { "condition": "挂靠经营为主的皮包公司（不需要系统，只需要财务记账）", "type": "unsuitable" },
    { "condition": "纯劳务分包班组（用个记工本 APP 就行了）", "type": "unsuitable" }
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
              text: '建筑行业有句老话：“中标靠运气，赚钱靠管理”。在原材料价格上涨、人工成本剧增的今天，只有做到“颗粒归仓”的精细化管理，才能活下去。',
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
          children: [{ "type": "text", "text": "以“预算”为龙头的成本控制体系", "version": 1 }],
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
              text: '用友 BIP 主张“无预算不支出”。',
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
              text: '项目开工前，必须编制详细的《目标成本预算书》。从钢筋水泥到招待费，每一分钱都要有预算归属。',
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
              text: '执行过程中，系统实时计算：预算剩余多少？已发生多少？待发生多少？一旦超支，审批流自动变红，提示项目经理“必须做成本调整或优化方案”，否则谁也签不了字。',
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
          children: [{ "type": "text", "text": "税务风险管控：金税四期下的生存之道", "version": 1 }],
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
              text: '建筑业是发票违规的重灾区。YonBIP 通过“四流合一”（合同流、发票流、资金流、物流/业务流）稽查，帮助企业规避风险。',
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
            { "type": "text", "text": "收票时，系统自动校验发票真伪。", "format": 1, "version": 1 },
            { "type": "text", "text": " 支付时，系统强制检查受款人账号是否与合同乙方一致，是否存在“挂靠方”直接打款给个人的情况。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          "type": "heading",
          "tag": "h2",
          "children": [{ "type": "text", "text": "泊冉的实施特色", "version": 1 }],
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
              "text": "我们深知，建筑业实施难，难在“人”。工地的业务员文化程度参差不齐。",
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
              "text": "所以，泊冉的实施策略是“极简前端，强大后台”。前端操作界面尽量傻瓜化（拍照、语音录入），把复杂的逻辑留在后台处理。确保系统真正在工地上用起来，而不是躺在服务器里。",
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
