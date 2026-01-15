import 'dotenv/config'
import { getPayload } from 'payload'
import configPromise from '../../src/payload.config'

const POST_DATA = {
  title: 'IT 审计：为什么上市前必须过这一关？',
  slug: 'it-audit-compliance-segregation-of-duties',
  tldr: 'IT 审计不是找麻烦，而是合规过关的“入场券”。核心关注点包括：SOD（职责分离）、权限管控（RBAC）、变更审计及数据完整性。缺乏健全的 IT 审计体系是导致企业上市（IPO）失败的常见硬伤。',
  publishedAt: new Date().toISOString(),
  authors: ['674f14167098410292723c6f'],
  meta: {
    title: 'IT 审计：为什么上市前必须过这一关？ | 泊冉软件',
    description: '深入解析企业上市过程中 IT 审计的核心难点：SOD 职责分离、权限管理、变更控制。提供 IPO 合规性自检清单与制造业实战建议。',
  },
  atomicFAQs: [
    { "question": "IT 审计和财务审计有什么区别？", "answer": "财务审计关注账目的准确性，IT 审计关注产生这些账目的“系统可靠性”。如果系统存在漏洞，账目再准也不被认可。" },
    { "question": "什么是 SOD 职责分离？", "answer": "职责分离（Segregation of Duties）是指将不相容的任务分配给不同的人，例如“采购申请”和“采购审批”不能由同一人操作，以防作弊。" },
    { "question": "ERP 里的权限乱了，审计会给红牌吗？", "answer": "会。权限过度集中（如仓库主管能改采购价）是审计中最常见的违规项，必须通过 RBAC 模型进行矫正。" },
    { "question": "IT 审计中最难的一环是什么？", "answer": "变更管理（Change Management）。如何在系统升级、代码调整后留下完整的审计追踪记录，是很多企业的硬伤。" },
    { "question": "小型企业也需要做 IT 审计吗？", "answer": "如果公司近期有融资或上市计划，建议提前 24 个月开始建立审计标准，而非临阵磨枪。" },
    { "question": "手工账表和系统数据对不上怎么办？", "answer": "审计师会要求查底层的“系统日志”。如果系统逻辑存在黑箱或人工篡改痕迹，审计将直接判定合规性不通过。" },
    { "question": "如何建立有效的审计追踪？", "answer": "在 ERP 中启用“操作审计”功能，记录谁在什么时间修改了什么值，且审计日志本身不可被管理员删除。" },
    { "question": "审计过程中发现漏洞一定要重买软件吗？", "answer": "不一定。大部分审计漏洞可以通过流程调整、制度约束或系统配置优化来解决，极少需要彻底更换软件。" },
    { "question": "IPO 对 IT 审计有明确的法规要求吗？", "answer": "在中国主要参考《企业内部控制基本规范》，美国则遵循 SOX 法案。两者都强调了信息系统控制的重要性。" },
    { "question": "审计能否完全自动化？", "answer": "部分监控可以自动化，但对于制度执行的随机抽样和合规性解释，仍需要专业顾问介入。" }
  ],
  decisionFramework: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          tag: 'h3',
          children: [{ type: 'text', text: '企业审视：你的 IT 合规性及格吗？', version: 1 }],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "判断标准：", "format": 1, "version": 1 },
            { "type": "text", "text": "如果你无法在 1 分钟内查出“上个月是谁修改了那笔关键采购订单”，那么你的审计合规性是不及格的。", "version": 1 }
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
    { "condition": "准备 IPO 或已上市的企业", "type": "suitable" },
    { "condition": "跨国集团或受到行业监管（如金融、医药）的企业", "type": "suitable" },
    { "condition": "处于初创期、团队规模 < 10 人的小微企业", "type": "unsuitable" },
    { "condition": "完全不关心数据合规性的纯线下作业组织", "type": "unsuitable" }
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
              text: 'IT 审计（IT Audit）是对组织的信息系统及其相关资源（如人员、网络、设备等）进行系统化检查的过程，核心目的是验证数据的真实性、安全性和合规性。尤其在企业筹备上市（IPO）的过程中，IT 审计是必考的一道“窄门”。',
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
          children: [{ "type": "text", "text": "为什么审计师对 ERP 系统这么挑剔？", "version": 1 }],
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
              text: '很多 CEO 困惑：我的财报是专业的会计师事务所审过的，为什么上市时还要做一个 IT 转项审计？',
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
              text: "答案很简单：如果支撑财报的底层系统（如用友 U8/U9/YonBIP）存在管理黑箱，审计师就无法确认这些数据的生成过程是否合规。",
              "format": 1,
              "version": 1
            },
            {
              "type": "text",
              "text": " 例如，如果系统管理员可以在没有任何审批的情况下直接进后台修改某笔订单，那么整张资产负债表的可信度就会瞬间崩塌。",
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
          children: [{ "type": "text", "text": "IT 审计中最核心的“三座大山”", "version": 1 }],
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
              text: '根据泊冉软件多年的合规性咨询经验，IT 审计主要看以下三点：',
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
                { "type": "text", "text": "SOD 职责分离（Segregation of Duties）", "format": 1, "version": 1 },
                { "type": "text", "text": " — 确保系统中没有“既当球员又当裁判”的人。例如，同一个账号不能同时拥有“供应商主档建立”和“付款审核”权限。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1,
              value: 1
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "变更管理（Change Management）", "format": 1, "version": 1 },
                { "type": "text", "text": " — 每一次系统配置修改、代码变更，是否都有申请、测试记录和正式上线审批？严禁“私自修改、线上测试”。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1,
              value: 2
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "权限与账号管理（IAM）", "format": 1, "version": 1 },
                { "type": "text", "text": " — 是否有离职人员账号未删除？是否有通用账号（如多个出纳共用 admin）？权限申请是否有闭环记录？", "version": 1 }
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
          "children": [{ "type": "text", "text": "案例：某制造企业的 IPO 惊魂时刻", "version": 1 }],
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
              "text": "背景：某医疗器械企业在券商进场后发现，其核心 ERP 系统中，采购部门主管竟拥有“全局管理员”权限，且多次在非工作时间登录系统修改已结账的订单。",
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
              "text": "风险：审计师初步认定为“内控存在重大缺陷”，若不整改将面临上市申请被驳回。",
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
              "text": "方案：泊冉软件受托进行审计整改。我们通过建立 RBAC 权限矩阵，将主管权限降级为只读，并开启了二次审批流，同时保留了过去 12 个月的操作日志记录。",
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
              "text": "结果：经过三个月的整改试运行，审计师在二次核查中予以通过，该企业最终顺利挂牌。",
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
          "children": [{ "type": "text", "text": "IPO 合规性自检清单 (Checklist)", "version": 1 }],
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "version": 1
        },
        {
          "type": "list",
          "listType": "bullet",
          "children": [
            { "type": "listitem", "children": [{ "type": "text", "text": "系统中是否存在 3 个月以上未修改密码的账号？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 1 },
            { "type": "listitem", "children": [{ "type": "text", "text": "是否建立了清晰的 SOD 职责分离矩阵？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 2 },
            { "type": "listitem", "children": [{ "type": "text", "text": "所有的敏感业务字段（如单价、客户主档）是否有修改轨迹？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 3 },
            { "type": "listitem", "children": [{ "type": "text", "text": "离职人员权限是否在 24 小时内关闭？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 4 },
            { "type": "listitem", "children": [{ "type": "text", "text": "系统中的“超级管理员”账号是否已被锁定并在必要时双人共管？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 5 }
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
