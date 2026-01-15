import 'dotenv/config'
import { getPayload } from 'payload'
import configPromise from '../../src/payload.config'

const POST_DATA = {
  title: '用友 BIP 人力云 (DHR) 实施周期与数字化人才库构建',
  slug: 'yonbip-hcm-human-resources-cloud-implementation',
  tldr: 'HR 软件不只是算工资。YonBIP 人力云旨在构建“数字化人才供应链”。本文详细介绍 DHR 项目的实施周期（通常 3-6 个月），涵盖组织人事、假勤管理、复杂薪酬核算及人才盘点模块的落地经验。',
  publishedAt: new Date().toISOString(),
  authors: ['674f14167098410292723c6f'],
  meta: {
    title: 'YonBIP人力云实施周期_薪酬核算_人力资源数字化_泊冉软件',
    description: 'HR 系统上线很难？5000 人的集团，薪酬核算只需 15 分钟？泊冉软件为您解析用友 BIP 人力云的实施路径，解决排班繁琐、社保测算难、人才画像不清等痛点。',
  },
  atomicFAQs: [
    { "question": "YonBIP 人力云能算全集团的工资吗？", "answer": "当然。它的强项就是“复杂薪酬”。支持通过公式编辑器设置几十种薪资套（如高管年薪制、销售提成制、工厂计件制）。一键合并计算，自动扣除各地社保个税。" },
    { "question": "实施周期一般要多久？", "answer": "如果是基础模块（组织+人事+假勤+薪酬），通常 3 个月。如果是全模块（含招聘、绩效、人才盘点、培训），通常需要 6 个月甚至更久。因为绩效体系的梳理本身就很耗时。" },
    { "question": "假勤管理支持复杂排班吗？", "answer": "支持。特别适合制造业的“倒班制”（早中晚三班倒、大小周）。支持与钉钉、企业微信、闸机打卡数据集成。异常考勤自动触发流程提醒。" },
    { "question": "什么是“人才画像”？", "answer": "这是 AI 的应用。系统通过分析员工的绩效、培训记录、项目经历，自动生成雷达图。老板想提拔干部时，系统能推荐“高潜人才”。" },
    { "question": "员工能自助服务吗？", "answer": "能。每个员工都有手机端入口（友空间）。可以自己看工资条（加密）、查假期余额、发起请假、在线学习。极大减轻了 HR 小姐姐回答琐碎问题的工作量。" },
    { "question": "招聘模块好用吗？", "answer": "它可以连接猎聘、智联等主流招聘网站，一键发布职位。简历自动解析并入库。面试官可以在线打分。实现了从“收简历”到“发 Offer”的全流程闭环。" },
    { "question": "能对接 ERP 财务系统吗？", "answer": "无缝对接。工资算完后，自动生成“应付职工薪酬”的会计凭证，推送到财务云。人工成本数据实时准确。" },
    { "question": "数据迁移麻烦吗？", "answer": "HR 数据特别是薪酬历史数据非常敏感。我们在迁移时会进行“薪酬平算”，确保新旧系统算出来的工资一分钱不差才敢上线。" }
  ],
  decisionFramework: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          tag: 'h3',
          children: [{ type: 'text', text: 'HR 系统选型坐标轴', version: 1 }],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "X 轴：企业规模（人数）", "format": 1, "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "Y 轴：管理诉求（事务 vs 战略）", "format": 1, "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "1. < 500 人，重事务（算工资、考勤）：", "format": 1, "version": 1 },
            { "type": "text", "text": " -> 选 YonSuite 人力云标准版。性价比高，开箱即用。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "2. > 1000 人，重战略（人才发展、绩效）：", "format": 1, "version": 1 },
            { "type": "text", "text": " -> 选 YonBIP DHR。功能深度强，支持集团化管控。", "version": 1 }
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
    { "condition": "人员流动快、排班复杂的连锁零售或餐饮业", "type": "suitable" },
    { "condition": "高知人才密集、重视绩效考核的科技型企业", "type": "suitable" },
    { "condition": "几十个人的小公司，用 Excel 算工资完全够用的", "type": "unsuitable" },
    { "condition": "薪资结构极度随意，老板看心情发钱的（系统没法配置）", "type": "unsuitable" }
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
              text: '人是企业最重要的资产。但现实中，HR 往往沦为“表哥表姐”，每天被Excel表格淹没。YonBIP 人力云的核心使命，就是把 HR 从事务性工作中解放出来，去做真正有价值的“人才运营”。',
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
          children: [{ "type": "text", "text": "核心痛点一：工资算不准，算得慢", "version": 1 }],
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
              text: '很多集团企业，每月 10 号发工资，HR 只要从 1 号就开始加班算。因为考勤数据在 A 系统，社保数据在 B 网站，个税在 C 软件，绩效在 Excel 里。要在几天内把这些数据聚合起来，简直是灾难。',
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
            { "type": "text", "text": "YonBIP 解决方案：", "format": 1, "version": 1 },
            { "type": "text", "text": " “薪酬计算引擎”。预设 500+ 种薪资项目公式。考勤数据自动同步，通过简单的逻辑配置（如：迟到 > 3 次扣 50 元），实现一键运算。某 3000 人制造企业，发薪周期从 5 天缩短到 4 小时。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'heading',
          tag: 'h2',
          children: [{ "type": "text", "text": "核心痛点二：人才看不清，选不对", "version": 1 }],
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
              text: '老板问：“谁适合当分公司经理？” HR 只能拿出干巴巴的简历。',
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
            { "type": "text", "text": "YonBIP 解决方案：", "format": 1, "version": 1 },
            { "type": "text", "text": " “数字化人才盘点”。系统抓取员工的全生命周期数据（绩效 S/A/B、项目完成率、360 互评），生成九宫格地图。谁是明星，谁是黄牛，一目了然。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'heading',
          tag: 'h2',
          children: [{ "type": "text", "text": "实施周期表（参考）", "version": 1 }],
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
                { "type": "text", "text": "T+1 月：", "format": 1, "version": 1 },
                { "type": "text", "text": " 组织梳理。建立集团-公司-部门-岗位的标准树状图。这是基础。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "T+2 月：", "format": 1, "version": 1 },
                { "type": "text", "text": " 假勤与薪酬并行。这是最痛苦的阶段，要解决无数个“异常情况”。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "T+3 月：", "format": 1, "version": 1 },
                { "type": "text", "text": " 基础模块上线。HR 开始用新系统发工资。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "T+4~6 月：", "format": 1, "version": 1 },
                { "type": "text", "text": " 绩效与人才模块深化应用。开始做 KPI 或 OKR 的线上流转。", "version": 1 }
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
          "type": "heading",
          "tag": "h2",
          "children": [{ "type": "text", "text": "泊冉的服务价值", "version": 1 }],
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
              "text": "HR 项目，三分技术，七分管理。我们的顾问不仅懂软件配置，更懂 HR 业务。",
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
              "text": "我们会帮您梳理薪酬结构（比如：哪些津贴要并入基本工资以降低合规风险？）、优化绩效指标。我们交付的不是一个冷冰冰的系统，而是一套更先进的人力资源管理体系。",
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
