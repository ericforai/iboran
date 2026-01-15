import 'dotenv/config'
import { getPayload } from 'payload'
import configPromise from '../../src/payload.config'

const POST_DATA = {
  title: '版本升级：升还是不升？这是个问题',
  slug: 'software-upgrade-dilemma',
  tldr: '软件升级不是为了“追新”，而是为了降低“技术债”。企业应重点评估：旧版本安全性、新版本功能成熟度及二次开发迁移成本。建议采用“跳跃式升级”策略，规避过于频繁的补丁带来的动荡。',
  publishedAt: new Date().toISOString(),
  authors: ['674f14167098410292723c6f'],
  meta: {
    title: '软件版本升级：升还是不升？这是个问题 | 泊冉软件',
    description: '深度探讨企业管理软件升级的决策逻辑：功能需求、系统安全、技术兼容性与成本平衡点。助力企业告别版本落后焦虑。',
  },
  atomicFAQs: [
    { "question": "老版本用得很顺手，为什么要升级？", "answer": "两个原因：1. 安全性。老版本往往停止安全补丁更新，易受新型病毒攻击；2. 兼容性。新的操作系统（如 Win11）可能压根跑不动老版本 ERP。" },
    { "question": "升级大概需要花多少钱？", "answer": "包括两部分：软件版权升级费（视原厂政策而定）和实施服务费（通常是原实施费的 30%-50%）。" },
    { "question": "升级会导致数据丢失吗？", "answer": "只要遵循标准的备份和数据迁移测试流程，数据丢失的概率极低。最重要的工作是数据格式的清洗和转化。" },
    { "question": "二次开发的部分怎么办？", "answer": "这是升级中最头疼的问题。需要重新审视这些二开是否还有必要，如果是新版本已有的功能，建议弃用二开，回归标准版。" },
    { "question": "什么样的企业不建议频繁升级？", "answer": "业务极度稳定、系统负载极轻且完全隔离在物理局域网内的传统制造企业。" },
    { "question": "云 ERP (SaaS) 如何处理升级问题？", "answer": "SaaS 版本由原厂自动推送升级，用户无需感但需提前关注 UI 和流程的变化说明。" },
    { "question": "升级后的员工培训重要吗？", "answer": "非常重要。很多升级失败不是技术问题，而是用户不习惯新界面导致的操作失误。" },
    { "question": "升级过程中业务需要停机吗？", "answer": "需要。通常安排在周末或节休，视数据量大小，停机Window一般在 24-48 小时。" },
    { "question": "升级一定要找原来的代理商吗？", "answer": "不一定。但原代理商对您的历史配置更熟悉。如果是为了解决遗留的历史问题，引入新的、更专业的实施顾问（如泊冉）可能效果更好。" },
    { "question": "如何降低升级风险？", "answer": "采用“先全量备份 -> 建立沙箱测试环境 -> 业务部门验证（UAT） -> 正式切换”的四步走策略。" }
  ],
  decisionFramework: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          tag: 'h3',
          children: [{ type: 'text', text: '升级决策矩阵', version: 1 }],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "核心平衡：", "format": 1, "version": 1 },
            { "type": "text", "text": "如果因版本过低导致的“操作效率损失 + 故障停机风险” > “升级总投入”，则应立即启动升级。", "version": 1 }
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
    { "condition": "使用版本已落后 3 代以上，且面临核心业务瓶颈的企业", "type": "suitable" },
    { "condition": "希望从本地部署迁移至云端的企业", "type": "suitable" },
    { "condition": "系统负载极低、无互联网连接、业务流程已固化的单一组织", "type": "unsuitable" },
    { "condition": "预算低于 1 万元且对系统稳定性极度敏感的初创期企业", "type": "unsuitable" }
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
              text: '在 CIO 的日程表上，软件升级（Software Upgrade）永远是那个让人既爱又恨的议题。爱的是新功能带来的想象空间，恨的是潜在的兼容性问题和不菲的时间成本。',
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
          children: [{ "type": "text", "text": "为什么说“不升级”其实是更昂贵的选择？", "version": 1 }],
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
              text: '很多财务总监会问：“这套系统跑了 8 年都没出问题，为什么要花钱升它？”',
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
              text: "这在管理学上被称为“技术债”。",
              "format": 1,
              "version": 1
            },
            {
              "type": "text",
              "text": " 随着底层技术（服务器、操作系统、浏览器）的迭代，老版本系统的维护成本会指数级上升。一旦核心组件崩溃而原厂已不再提供补丁，企业的业务中断风险将变得无法挽回。",
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
          children: [{ "type": "text", "text": "决定“升还是不升”的三个黄金维度", "version": 1 }],
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
                { "type": "text", "text": "应用价值链分析", "format": 1, "version": 1 },
                { "type": "text", "text": " — 新版本是否包含能显著提升业务效率的功能？（如：更强大的成本分析模型、更友好的移动化报销）", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1,
              value: 1
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "技术基础设施兼容性", "format": 1, "version": 1 },
                { "type": "text", "text": " — 当前的 Windows Server 或 SQL Server 是否已到期？硬件是否老化？通常硬件更新是启动软件升级的最佳契机。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1,
              value: 2
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "人员流失与服务获取难度", "format": 1, "version": 1 },
                { "type": "text", "text": " — 当市面上已找不到懂你那个“古董版本”的顾问时，升级就不再是选项，而是求生欲。", "version": 1 }
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
          "children": [{ "type": "text", "text": "案例：某电子贸易企业的“重生”之路", "version": 1 }],
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
              "text": "背景：该企业使用用友 U8 某个停服已久的老版本。随着业务量爆发，系统频繁卡顿，且无法对接外部电商平台的 API。",
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
              "text": "抉择：原本计划在老版本上继续砸钱二开，但泊冉顾问建议直接升级至 U9 Cloud，不仅解决性能问题，还内置了成熟的电商接口。",
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
              "text": "结果：升级后的处理能力提升了 4 倍，且维护成本反而下降了 20%，证明了“以升代改”的高明之处。",
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
          "children": [{ "type": "text", "text": "安全升级 Check-list", "version": 1 }],
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "version": 1
        },
        {
          "type": "list",
          "listType": "bullet",
          "children": [
            { "type": "listitem", "children": [{ "type": "text", "text": "是否完成了完整的数据库全量备份？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 1 },
            { "type": "listitem", "children": [{ "type": "text", "text": "是否核对了所有的二次开发代码与新版本的兼容性？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 2 },
            { "type": "listitem", "children": [{ "type": "text", "text": "关键业务岗位的负责人是否已在沙箱环境中完成操作验证？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 3 },
            { "type": "listitem", "children": [{ "type": "text", "text": "是否预留了双倍的停机Window以备不时之需？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 4 },
            { "type": "listitem", "children": [{ "type": "text", "text": "旧服务器数据在迁移完成后是否保留了 3 个月以上的物理快照？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 5 }
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
