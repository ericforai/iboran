import 'dotenv/config'
import { getPayload } from 'payload'
import configPromise from '../../src/payload.config'

const POST_DATA = {
  title: '为什么 70% 的数字化转型死在“变革管理”？',
  slug: 'change-management-failure',
  tldr: '数字化转型不是技术项目，而是管理项目。失败的核心原因不是软件不好用，而是组织惯性的反扑。成功的变革管理需要“三板斧”：高层的一把手工程、中层的利益再分配、以及基层的操作减负。',
  publishedAt: new Date().toISOString(),
  authors: ['674f14167098410292723c6f'],
  meta: {
    title: '数字化转型中的变革管理 (Change Management) 实战 | 泊冉软件',
    description: '解析 B2B 企业数字化转型失败的根本原因。如何克服员工抵触情绪？如何设计利益分配机制？本文为你拆解变革管理的成功路径。',
  },
  atomicFAQs: [
    { "question": "什么是变革管理（Change Management）？", "answer": "简单说，就是让员工从“抗拒新系统”变成“接受并习惯新系统”的心理和行为疏导过程。它解决的是“人”的问题，而不是“软件”的问题。" },
    { "question": "为什么员工会抵触新系统？", "answer": "因为新系统打破了舒适区。透明化意味着灰色收入消失，标准化意味着权力寻租空间减少。抵触的本质是利益受损或恐惧能力恐慌。" },
    { "question": "变革管理是 HR 的事还是 IT 的事？", "answer": "是一把手的事。HR 负责造势，IT 负责提供武器，但只有老闆能决定“不开火就换人”的决心。" },
    { "question": "何时引入变革管理？", "answer": "项目启动的第一天。如果等到上线后员工开始罢工才想起来做思想工作，那就太晚了。" },
    { "question": "最有效的变革手段是什么？", "answer": "绩效挂钩。把“系统使用率”和“数据准确率”直接纳入部门负责人的月度 KPI。不换思想就换人，不动绩效就没人动真格。" },
    { "question": "如何化解中层干部的阻力？", "answer": "让他们成为变革的受益者。例如，通过新系统的数据驾驶舱，让他们在汇报时更露脸；或者通过系统固化流程，减少他们的管理琐事。" },
    { "question": "变革管理中需要用到外部顾问吗？", "answer": "需要。外部顾问（如泊冉专家）可以充当“坏人”和“磨刀石”，说出内部人员不敢说的真话，推动难啃的骨头。" },
    { "question": "如何识别变革失败的信号？", "answer": "谣言四起（“听说新系统马上要废了”）、消极怠工（“太忙了没空录数据”）、以及旧系统/Excel 的回流。" },
    { "question": "沟通在变革中占多大比重？", "answer": "80%。变革失败往往是因为信息不对称。通过全员大会、内刊、甚至标语，反复宣贯“为什么要变”和“变了有什么好处”。" },
    { "question": "数字化转型的阵痛期一般多久？", "answer": "3-6 个月。这是从“无意识 incompetency”到“有意识 competency”的爬坡期。挺过这半年，习惯就自然成自然了。" }
  ],
  decisionFramework: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          tag: 'h3',
          children: [{ type: 'text', text: '变革阻力分析模型', version: 1 }],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "判断准则：", "format": 1, "version": 1 },
            { "type": "text", "text": "如果不满度 > 0 但执行力 < 0，属于“非暴力不合作”，需通过绩效强压；如果是公开反对，需通过“杀鸡儆猴”建立权威。", "version": 1 }
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
    { "condition": "涉及核心业务流程重组（BPR）的深度转型项目", "type": "suitable" },
    { "condition": "跨部门利益冲突严重、且历史山头林立的集团企业", "type": "suitable" },
    { "condition": "仅仅是办公软件升级（如换个 OA 皮肤）的浅层项目", "type": "unsuitable" },
    { "condition": "老板本人犹豫不决、想试错又怕担当风险的企业", "type": "unsuitable" }
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
              text: '麦肯锡曾有一份报告指出：70% 的数字化转型项目以失败告终。而在这些失败案例中，技术原因占比不到 20%，绝大多数是因为“组织和人”出了问题。这就是“变革管理”的战场。',
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
          children: [{ "type": "text", "text": "变革的敌人是谁？", "version": 1 }],
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
              text: '不是那个难用的界面，也不是偶尔崩溃的服务器，而是：惯性。',
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
              text: "销售总监反对：",
              "format": 1,
              "version": 1
            },
            {
              "type": "text",
              "text": " “我要打单子，哪有时间给你们填 CRM？”（潜台词：我的客户资源不想充公。）",
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
              text: "采购经理反对：",
              "format": 1,
              "version": 1
            },
            {
              "type": "text",
              "text": " “系统比 Excel 慢多了。”（潜台词：系统会自动比价，我的回扣空间没了。）",
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
          children: [{ "type": "text", "text": "成功的变革管理“三板斧”", "version": 1 }],
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
                { "type": "text", "text": "制造紧迫感（Create Urgency）", "format": 1, "version": 1 },
                { "type": "text", "text": " — 必须让全员意识到：“不变革就是死”。泊冉顾问入场时，通常会协助 CEO 召开誓师大会，明确“不换思想就换人”的底线。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1,
              value: 1
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "构建指导联盟（Guiding Coalition）", "format": 1, "version": 1 },
                { "type": "text", "text": " — 找出组织里的“意见领袖”。不仅仅是高管，还包括那些在群众中威望很高的老员工。搞定他们，就搞定了一大半。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1,
              value: 2
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "创造短期共赢（Short-term Wins）", "format": 1, "version": 1 },
                { "type": "text", "text": " — 别画大饼。上线第一个月，就要让基层员工尝到甜头。比如：报销审批从 3 天缩短到 3 小时；或者是自动生成的日报表。", "version": 1 }
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
          "children": [{ "type": "text", "text": "案例：某国企的“破冰行动”", "version": 1 }],
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
              "text": "背景：推行全员绩效考核系统，遭到中层的集体软抵制，上线半年使用率不到 10%。",
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
              "text": "对策：泊冉建议引入“红榜机制”。每个月系统自动抓取数据，排名前三的部门直接发奖金，排名后三的部门负责人在月会上做检讨。同时，将使用率与年终奖系数强挂钩。",
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
              "text": "结果：第 2 个月，使用率飙升至 95%。不是大家爱用了，是因为利益机制变了。",
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
          "children": [{ "type": "text", "text": "变革健康度 Checklist", "version": 1 }],
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "version": 1
        },
        {
          "type": "list",
          "listType": "bullet",
          "children": [
            { "type": "listitem", "children": [{ "type": "text", "text": "一把手是否亲自出席项目启动会并发表了强硬讲话？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 1 },
            { "type": "listitem", "children": [{ "type": "text", "text": "是否识别并谈话了项目中的“潜在反对者”？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 2 },
            { "type": "listitem", "children": [{ "type": "text", "text": "是否修改了相关部门的 KPI，将系统推广纳入考核？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 3 },
            { "type": "listitem", "children": [{ "type": "text", "text": "宣传渠道（邮件、海报、会议）是否覆盖了全员？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 4 },
            { "type": "listitem", "children": [{ "type": "text", "text": "上线初期是否有专门的“心理疏导”或吐槽渠道？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 5 }
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
