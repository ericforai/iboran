import 'dotenv/config'
import { getPayload } from 'payload'
import configPromise from '../../src/payload.config'

const POST_DATA = {
  title: '用户培训：讲了一遍就会了吗？',
  slug: 'user-training-best-practices',
  tldr: '用户培训是系统上线成败的最后一步关键。传统的“填鸭式”培训效果极差，导致上线后工单激增。企业应建立“角色化培训”、“沙箱实操考核”及“视频知识库”三位一体的培训体系，确保员工从“知道”到“会用”。',
  publishedAt: new Date().toISOString(),
  authors: ['674f14167098410292723c6f'],
  meta: {
    title: 'ERP 用户培训有效性提升指南 | 泊冉软件',
    description: '告别无效的软件培训。本文分享 B2B 企业如何设计高效的用户培训方案，包括考核机制、培训材料制作及关键用户（Key User）培养策略。',
  },
  atomicFAQs: [
    { "question": "为什么培训了三天，上线时员工还是不会用？", "answer": "因为只听不练。成人学习需要“场景化”代入。如果只是对着 PPT 讲功能点，听众 10 分钟后就会走神。必须配合沙箱环境进行实操演练。" },
    { "question": "培训应该在什么时间点进行？", "answer": "不要太早，也不要太晚。建议在上线前 2 周开始密集培训。太早会忘，太晚会来不及消化。" },
    { "question": "大班授课好还是小班辅导好？", "answer": "分角色。通用概念（如全员报销）可以大班讲；核心业务（如采购下单、财务核算）必须分部门小班精讲，甚至一对一辅导。" },
    { "question": "如何检验培训效果？", "answer": "考试。必须设置上岗资格考试（笔试+机试）。只有通过考试的员工才能获得正式系统的登录账号。这不是刁难，是负责。" },
    { "question": "关键用户（Key User）在培训中扮演什么角色？", "answer": "助教和未来的内部讲师。顾问不可能永远陪跑，Key User 必须在培训期间学会不仅自己会做，还能教会别人。" },
    { "question": "是否需要录制培训视频？", "answer": "非常有必要。将核心操作录制成 3-5 分钟的微课，放在内部知识库中，方便员工随时回看，也是新员工入职的必修课。" },
    { "question": "培训资料是给原来厂提供的操作手册就可以了吗？", "answer": "绝对不行。原厂手册是“字典”（解释每个按钮是什么），你需要的是“攻略”（第一步做啥，第二步做啥）。必须编写基于企业自身业务流程的操作 SOP。" },
    { "question": "老员工抵触新系统，不愿意学怎么办？", "answer": "这是变革管理的问题。除了行政命令，更要让他们看到新系统带来的个人价值（如减少加班、自动生成报表），或者通过“技能竞赛”等激励手段。" },
    { "question": "培训环境的数据应该用现在的真实数据吗？", "answer": "最好是。使用脱敏后的真实业务数据（如真实的客户名、物料名），会让员工有极强的代入感，而不是对着“测试商品 A”发呆。" },
    { "question": "培训结束后，还会有“回炉重造”吗？", "answer": "会。上线后 1 个月，针对高频报错的问题点，组织一次“痛点答疑会”，效果往往比上线前的普讲好得多。" }
  ],
  decisionFramework: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          tag: 'h3',
          children: [{ type: 'text', text: '培训成效评估模型', version: 1 }],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "核心指标：", "format": 1, "version": 1 },
            { "type": "text", "text": "上线第一周的“操作类”工单数量。如果超过总工单的 50%，说明培训是失败的。", "version": 1 }
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
    { "condition": "员工人数超过 50 人、岗位分工明确的企业", "type": "suitable" },
    { "condition": "存在大量一线操作工或年龄偏大员工的传统制造企业", "type": "suitable" },
    { "condition": "全员都是 IT 精英、对新软件上手极快的极客团队", "type": "unsuitable" },
    { "condition": "系统极度简单（如只有打卡功能）的场景", "type": "unsuitable" }
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
              text: '很多项目经理都有过这样的噩梦：系统上线第一天，电话被打爆。员工问的不是只有上帝知道的技术难题，而是：“在这个界面我该点哪个按钮？”或者更糟：“我怎么找不到保存键？”',
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
          children: [{ "type": "text", "text": "培训的误区：由于“傲慢”产生的“偏见”", "version": 1 }],
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
              text: '实施顾问和 IT 人员往往会犯一个错误：觉得这个系统逻辑很清晰、界面很友好，主要讲一遍大家应该都懂了。',
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
              text: "这是一个巨大的认知偏差（Curse of Knowledge）。",
              "format": 1,
              "version": 1
            },
            {
              "type": "text",
              "text": " 对于每天和机器打交道的一线库管员，或者习惯了纸笔记账的老会计，屏幕上的每一个弹窗都可能是阻碍他们完成工作的“怪兽”。",
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
          children: [{ "type": "text", "text": "泊冉“实战派”培训三部曲", "version": 1 }],
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
                { "type": "text", "text": "编制剧本（Scenario-based）", "format": 1, "version": 1 },
                { "type": "text", "text": " — 别讲“采购模块功能介绍”，要讲“当你收到缺货提醒时，该怎么下个急单”。把功能点串成业务故事。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1,
              value: 1
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "沙箱演练（Sandbox Simulation）", "format": 1, "version": 1 },
                { "type": "text", "text": " — 搭建一个和生产环境一模一样的测试区。让员工在里面随便造，造错了也没关系。只有在安全的环境下，成年人才愿意尝试新事物。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1,
              value: 2
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "持证上岗（Certification）", "format": 1, "version": 1 },
                { "type": "text", "text": " — 不通过考试，不发系统账号。这不仅是考核，更是一种“仪式感”，让员工意识到掌握新系统是职业技能的一部分。", "version": 1 }
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
          "children": [{ "type": "text", "text": "案例：某物流企业的“游戏化”培训", "version": 1 }],
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
              "text": "背景：该企业有 2000 多名司机和调度员，而且分散在全国各地，集中培训成本极高，且人员受教育程度参差不齐。",
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
              "text": "创新：泊冉协助其开发了一套“闯关游戏”。将系统操作录屏做成短视频，看完一个回答 3 个问题，答对解锁下一关并获得积分红包。",
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
              "text": "结果：仅用 2 周时间，全员通关率达到 96%，且大家对新 APP 的接受度极高，上线后操作失误率低于 5%。",
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
          "children": [{ "type": "text", "text": "培训准备度 Checklist", "version": 1 }],
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "version": 1
        },
        {
          "type": "list",
          "listType": "bullet",
          "children": [
            { "type": "listitem", "children": [{ "type": "text", "text": "是否编写了分岗位的《SOP 操作手册》（图文版）？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 1 },
            { "type": "listitem", "children": [{ "type": "text", "text": "培训用的沙箱环境数据是否已清洗并脱敏？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 2 },
            { "type": "listitem", "children": [{ "type": "text", "text": "所有关键用户（Key User）是否已经通过了专家级的考核？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 3 },
            { "type": "listitem", "children": [{ "type": "text", "text": "培训教室的网络和投影设备是否已调试完毕？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 4 },
            { "type": "listitem", "children": [{ "type": "text", "text": "是否建立了线上知识库供随时查阅？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 5 }
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
