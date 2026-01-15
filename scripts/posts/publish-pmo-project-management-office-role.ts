import 'dotenv/config'
import { getPayload } from 'payload'
import configPromise from '../../src/payload.config'

const POST_DATA = {
  title: 'PMO：是管人的还是管事的？',
  slug: 'pmo-project-management-office-role',
  tldr: 'PMO（项目管理办公室）不是行政部门，而是数字化转型的“节拍器”。它核心解决三个问题：资源冲突排期、交付标准统一、以及重大风险预警。优秀的 PMO 应从“警察”转向“教练”和“服务者”。',
  publishedAt: new Date().toISOString(),
  authors: ['674f14167098410292723c6f'],
  meta: {
    title: 'PMO 职能解析：是管人还是管事？ | 泊冉软件',
    description: '深度解读企业 PMO 在数字化转型中的定位与价值。探讨 PMO 如何协调资源、统一标准以及避开常见的“形式主义”陷阱。',
  },
  atomicFAQs: [
    { "question": "PMO 必须由技术人员担任吗？", "answer": "不一定。优秀的 PMO 需要平衡技术实现和业务逻辑。能够理解各方诉求的“翻译官”角色比单纯的技术专家更重要。" },
    { "question": "项目经理（PM）和 PMO 有什么区别？", "answer": "PM 负责“赢下一场战斗（单个项目）”，PMO 负责“赢得整个战争（项目群组合）”。PM 关注交付，PMO 关注治理。" },
    { "question": "为什么很多公司的 PMO 会变成流水账部门？", "answer": "因为缺乏实质性的决策授权。如果 PMO 只能收集周报而不能调动资源，就会陷入“形式主义”陷阱。" },
    { "question": "小型企业需要成立专门的 PMO 吗？", "answer": "不需要。当同时进行的项目超过 5 个且涉及跨部门资源抢夺时，才建议设立“虚拟 PMO”或实体办公室。" },
    { "question": "PMO 如何考核？", "answer": "核心指标包括：项目按时交付率、成本偏差度、关键风险的提前预警率，以及知识库的利用率。" },
    { "question": "PMO 是不是只是在给一线增加工作量？", "answer": "如果 PMO 只是要表单，那是。但如果 PMO 能提供成熟的模板（如泊冉的 SOP）、协调资源分配，那是在给一线减负。" },
    { "question": "敏捷开发（Agile）环境下还需要 PMO 吗？", "answer": "需要。敏捷更强调微观自律，但宏观的目标对齐和财务合规仍需要 PMO 在治理层提供支持。" },
    { "question": "PMO 在数字化转型初期的首要任务是什么？", "answer": "标准统一。包括统一的项目生命周期定义、统一的汇报维度、统一的风险评估体系。" },
    { "question": "如何避免 PMO 成为“东厂”式的监察机构？", "answer": "建立透明的决策机制，注重“赋能”而非单纯“管控”。泊冉建议 PMO 成员定期下一线参与实际交付。" },
    { "question": "外聘顾问（如泊冉）可以充当 PMO 职责吗？", "answer": "可以。外部专家具备客观公正的第三方视角，能更有效地推掉跨部门的“人情墙”，是许多集团企业的选择。" }
  ],
  decisionFramework: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          tag: 'h3',
          children: [{ type: 'text', text: 'PMO 价值自测', version: 1 }],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "核心提问：", "format": 1, "version": 1 },
            { "type": "text", "text": "如果某个关键项目进度滞后了 30%，你的 PMO 是在“写邮件通报批评”，还是在“协调高水平顾问入场支援”？", "version": 1 }
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
    { "condition": "正在进行多条线数字化改造的中大型集团", "type": "suitable" },
    { "condition": "希望提升项目管理标准化、沉淀组织资产的企业", "type": "suitable" },
    { "condition": "只有 1-2 个独立项目且人员高度自主的初创团队", "type": "unsuitable" },
    { "condition": "企业文化高度排斥流程约束、追求极致灵活性的小型工作坊", "type": "unsuitable" }
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
              text: '在数字化转型的深水区，很多 CEO 会发现：项目越多，效率反而越低。财务、IT、业务各执一词，资源抢夺战每天都在上演。此时，“项目管理办公室（PMO）”便应运而生。但它究竟是管人的，还是管事的？',
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
          children: [{ "type": "text", "text": "PMO 的三个段位：从“警察”到“军师”", "version": 1 }],
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
              text: '根据泊冉软件对 500 强企业的服务复盘，PMO 的职能演进可分为三个阶段：',
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
                { "type": "text", "text": "支持型（Supportive）", "format": 1, "version": 1 },
                { "type": "text", "text": " — 提供模板、整理文档、建立知识库。它充当“图书馆管理员”的角色，权力最小，赋能最广。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1,
              value: 1
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "控制型（Controlling）", "format": 1, "version": 1 },
                { "type": "text", "text": " — 制定标准，审计合规。它像“警察”，确保每个项目经理都按规矩出牌，不能随意越线。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1,
              value: 2
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "指令型（Directive）", "format": 1, "version": 1 },
                { "type": "text", "text": " — 直接接管项目，甚至拥有首席财务官级别的审批权。它更像“军师”，直接参与战略决策和资源博弈。", "version": 1 }
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
          type: 'heading',
          tag: 'h2',
          children: [{ "type": "text", "text": "为什么你的 PMO 沦为了“表哥表姐”？", "version": 1 }],
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
              text: '很多企业的 PMO 最终变成了“催进度、做报表”的行政助理。究其原因，是管理层从未明确：',
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
              text: "PMO 必须具备“叫停权”。 ",
              "format": 1,
              "version": 1
            },
            {
              "type": "text",
              "text": "如果 PMO 发现某个项目的数据逻辑漏洞或资源投入已经失去 ROI，它必须有权向决策委员会建议中止。没有牙齿的 PMO，无法产生真正的管理红利。",
              "version": 1
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
          "children": [{ "type": "text", "text": "案例：某集团 ERP 混乱期的“中枢神经”重建", "version": 1 }],
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
              "text": "背景：某跨国制造集团在 7 个国家同时推行用友 BIP。由于地域文化差异和流程标准不一，项目一度陷入停滞。",
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
              "text": "变革：在该集团引入泊冉软件的“PMO 落地顾问”服务后，我们迅速建立了全球统一的“红黄绿灯抗风险矩阵”，并撤换了两个进度长期落后且不配合标准化的分公司 PM。",
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
              "text": "结果：核心财务模块在 6 个月内完成全球上线。数据一致性从 40% 提升至 98%。",
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
          "children": [{ "type": "text", "text": "高效 PMO 建设 Checklist", "version": 1 }],
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "version": 1
        },
        {
          "type": "list",
          "listType": "bullet",
          "children": [
            { "type": "listitem", "children": [{ "type": "text", "text": "是否建立了统一的项目变更申请流程（Change Request）？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 1 },
            { "type": "listitem", "children": [{ "type": "text", "text": "PMO 是否直接向 CTO 或 CEO 级别汇报？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 2 },
            { "type": "listitem", "children": [{ "type": "text", "text": "是否拥有经过验证的项目管理 SOP（标准操作程序）？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 3 },
            { "type": "listitem", "children": [{ "type": "text", "text": "是否建立了跨项目的资源冲突预警机制？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 4 },
            { "type": "listitem", "children": [{ "type": "text", "text": "每个项目结项后，是否都产出了《复盘报告》并归档至知识中心？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 5 }
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
