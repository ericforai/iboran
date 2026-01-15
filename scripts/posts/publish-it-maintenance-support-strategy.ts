import 'dotenv/config'
import { getPayload } from 'payload'
import configPromise from '../../src/payload.config'

const POST_DATA = {
  title: '运维体系：系统上线了，顾问撤了，谁来管？',
  slug: 'it-maintenance-support-strategy',
  tldr: '上线不是结束，而是“持续价值创造”的开始。企业应建立“内部专家 + 外部专家（如代理商/泊冉） + 原厂”的三级支持体系，避免关键人离职导致的系统瘫痪。建议将运营支出（OPEX）制度化。',
  publishedAt: new Date().toISOString(),
  authors: ['674f14167098410292723c6f'],
  meta: {
    title: '系统上线后的运维体系：谁来负责？ | 泊冉软件',
    description: '破解企业管理系统“上线即落后”的魔咒。探讨如何搭建三级运维体系、进行知识沉淀以及应对关键人员流动。',
  },
  atomicFAQs: [
    { "question": "ERP 系统上线后，为什么还需要专人维护？", "answer": "数据会增长、流程会变动、人员会流动。没有人维护的系统就像长期不保养的车辆，最终会因垃圾数据和配置失效而抛锚。" },
    { "question": "内部 IT 运维和外部顾问有什么区别？", "answer": "内部 IT 负责响应日常突发（如断网、改密码），外部顾问（如泊冉）负责解决复杂的业务逻辑调整、年结及系统优化。" },
    { "question": "关键 IT 负责人离职了，系统没人懂了怎么办？", "answer": "这是最大的风险。建议在运维期强制要求编写《业务逻辑手册》，并采用“二线代理制”，同时引入外部专业团队作为长期知识备份。" },
    { "question": "每年交的 18% 或 20% 服务费到底买了什么？", "answer": "主要买了两个东西：1. 软件持续升级的权利（版本价值）；2. 解决突发疑难杂症的“保险单”。" },
    { "question": "运维期如何评估系统的运行健康度？", "answer": "核心看三个指标：1. 用户需求的响应时间；2. 核心报表的准确率；3. 业务部门的投诉频率。" },
    { "question": "云 ERP (SaaS) 的运维更简单吗？", "answer": "技术基础运维更简单（无需管服务器），但业务层面的“二次优化”和“咨询服务”需求并没有减少。" },
    { "question": "什么时候需要启动“二次开发”？", "answer": "当标准功能无法支撑核心业务闭环，且该需求具备高频次、高价值收益时，才考虑二开，严禁为了“方便”而乱改。" },
    { "question": "运维费能否按次计费？", "answer": "不建议。企业管理系统需要“长期陪伴”和语境熟悉度。长期签约的顾问团队能更前置地发现风险，而非仅在着火时救火。" },
    { "question": "除了技术支持，运维顾问还能提供什么？", "answer": "优秀的运维顾问（如泊冉落地顾问）会定期进行“系统体检”，提出管理改善建议，而非仅仅是修 Bug。" },
    { "question": "年结为什么是运维中的重头戏？", "answer": "年结涉及跨年结转、资产重组和海量数据结算，是验证一整年数据准确性的最后防线，通常需要专业顾问驻场支持。" }
  ],
  decisionFramework: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          tag: 'h3',
          children: [{ type: 'text', text: '三级支持体系模型', version: 1 }],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "黄金法则：", "format": 1, "version": 1 },
            { "type": "text", "text": "一线提需求（关键用户），二线解困惑（IT 部门），三线攻疑难（外部专业服务商/泊冉）。", "version": 1 }
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
    { "condition": "拥有复杂 ERP 系统且业务流程处于动态调整中的中大型企业", "type": "suitable" },
    { "condition": "追求业务连续性、不希望因个人离职导致断层组织", "type": "suitable" },
    { "condition": "系统完全外包给云服务商托管且无任何个性化配置的小微初创", "type": "unsuitable" },
    { "condition": "认为“软件买回来就一劳永逸、不需要后期投入”的企业主", "type": "unsuitable" }
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
              text: '在所有的管理软件项目中，最危险的时刻莫过于“项目结项会”。聚光灯下，顾问们收拾行囊撤场，剩下企业的 IT 经理望着屏幕发呆：万一明天数据报错了，我该找谁？',
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
          children: [{ "type": "text", "text": "“上线即失速”的悲剧是如何上演的？", "version": 1 }],
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
              text: '根据泊冉的长期观察，超过 40% 的优秀系统都在上线后的 12 个月内逐渐“边缘化”。核心原因只有两点：',
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
              text: "知识断层：",
              "format": 1,
              "version": 1
            },
            {
              "type": "text",
              "text": " 负责项目的骨干离职了，没人知道当初为什么这么写配置；",
              "version": 1
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
              text: "需求断层：",
              "format": 1,
              "version": 1
            },
            {
              "type": "text",
              "text": " 公司换了新业务、开了新工厂，老系统跟不上，结果大家又偷偷用回了 Excel。",
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
          children: [{ "type": "text", "text": "搭建“铁三角”式运维体系", "version": 1 }],
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
                { "type": "text", "text": "内部关键用户（Power Users）", "format": 1, "version": 1 },
                { "type": "text", "text": " — 来自财务、采购、生产。他们不一定懂技术，但必须懂本部门的业务逻辑在该系统中如何通过。他们是系统的“火种”。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1,
              value: 1
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "企业 IT 职能部", "format": 1, "version": 1 },
                { "type": "text", "text": " — 负责权限管理、数据备份和基础环境维护。确保系统“活着”。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1,
              value: 2
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "专业外部服务商（如泊冉顾问）", "format": 1, "version": 1 },
                { "type": "text", "text": " — 承接年度结算、版本大更新、管理诊断和深度的二次开发。确保系统“进化”。", "version": 1 }
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
          "children": [{ "type": "text", "text": "案例：某集团公司的“运维资产化”实践", "version": 1 }],
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
              "text": "背景：一家拥有 5 个基地的化工厂，每年运维支出高达 50 万。老板一度认为这钱是白花的。",
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
              "text": "转变：泊冉顾问团队进场后，不再只是修 Bug。我们建立了“季度经营数据回顾会”，用系统导出的数据对比库存损失，帮助工厂降低了 12% 的原材料损耗。",
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
              "text": "结果：老板意识到，运维费不是“修理费”，而是“管理诊断费”。系统使用率从 65% 提升至 95%。",
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
          "children": [{ "type": "text", "text": "运维体系健康度 Checklist", "version": 1 }],
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "version": 1
        },
        {
          "type": "list",
          "listType": "bullet",
          "children": [
            { "type": "listitem", "children": [{ "type": "text", "text": "是否有完整的《核心业务操作手册》且每年更新？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 1 },
            { "type": "listitem", "children": [{ "type": "text", "text": "新入职员工是否需要经过 ERP 基础培训和考核才能入岗？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 2 },
            { "type": "listitem", "children": [{ "type": "text", "text": "是否与外部服务商签订了具有 SLA（服务等级协议）的运维合同？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 3 },
            { "type": "listitem", "children": [{ "type": "text", "text": "过去一年的数据库恢复测试是否成功执行过？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 4 },
            { "type": "listitem", "children": [{ "type": "text", "text": "是否有明确的“二线备份方案”防止关键人岗位流失？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 5 }
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
