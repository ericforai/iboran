import { getPayload } from 'payload'
import configPromise from '../../src/payload.config'

const POST_DATA = {
  title: '灾备演练：如果机房着火了，数据还在吗？',
  slug: 'disaster-recovery-plan-drill',
  tldr: '灾备演练不是走过场。核心指标 RTO 和 RPO 决定业务生死。必须建立“不预告演练”机制，验证 backups 可用性及团队应急响应能力。建议每半年进行一次全栈灾备演练。',
  publishedAt: new Date().toISOString(),
  authors: ['674f14167098410292723c6f'], // Using default author ID from existing scripts
  meta: {
    title: '灾备演练：如果机房着火了，数据还在吗？ | 泊冉软件',
    description: '探讨企业灾备演练的核心价值，解读 RTO 与 RPO 指标，提供 5 步标准演练路径及案例。助力 B2B 企业建立稳健的数字化业务连续性体系。',
  },
  atomicFAQs: [
    { "question": "灾备演练一定要在生产环境做吗？", "answer": "推荐先在等比例缩减的测试环境验证流程，初次实战演练必须在非业务高峰期（如深夜或周末）进行。" },
    { "question": "公有云 SaaS 还需要做灾备演练吗？", "answer": "虽然云厂商有底层备份，但企业需针对“误删除”、“账号被盗”等逻辑灾难进行恢复模拟。" },
    { "question": "异地灾备的最佳距离是多少？", "answer": "一般建议在 100km 以上，以防发生地震、洪水等区域性自然灾害。" },
    { "question": "勒索病毒中招后，备份还有用吗？", "answer": "如果有“物理离线”离线备份（Air-gap），则有用。若备份服务器也在线上且无强读写限制，往往会被一并加密。" },
    { "question": "演练频率怎么定？", "answer": "核心系统建议每半年 1 次，普通系统 1 年 1 次。重大架构调整后需立即增加 1 次。" },
    { "question": "全量备份和增量备份怎么选？", "answer": "通常采用“周全量+日增量”或“永久增量”策略，具体取决于 RPO 要求。" },
    { "question": "恢复的数据不对齐怎么办？", "answer": "这是最常见的问题，通常由于应用层缓存或三方系统集成异步导致。需要引入全局事务锁或一致性校验。" },
    { "question": "模拟什么场景最有效？", "answer": "“勒索病毒加密”和“数据库误删（DBA 跑路）”是目前验证确定性最高的两个场景。" },
    { "question": "灾备演练的成本主要在哪？", "answer": "除了存储和带宽，最大的成本是业务部门配合核对数据（UAT）的人力成本。" },
    { "question": "如何说服老板支持演练？", "answer": "用“停机一小时损失 × 概率”来计算风险敞口，而不是仅谈论技术指标。" }
  ],
  decisionFramework: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          tag: 'h3',
          children: [{ type: 'text', text: '我的企业需要什么样的灾备？', version: 1 }],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { type: 'text', text: '核心原则：', format: 1, version: 1 },
            { type: 'text', text: '投入应与停机一小时的成本成正比。如果停产一小时损失 10 万，则每年投入 5-10 万在灾备上是合理的。', version: 1 }
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
    { condition: '年营收 > 1 亿且对数据安全性有极高要求的制造/金融企业', type: 'suitable' },
    { condition: '处于拟上市审计阶段，需合规性验证的企业', type: 'suitable' },
    { condition: '系统完全承载在公有云 SaaS 层且无私有化数据存储的企业', type: 'unsuitable' },
    { condition: '业务完全不依赖 IT 系统（纯人工作业）', type: 'unsuitable' }
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
              text: '灾备演练（Disaster Recovery Drill）是指通过模拟真实的灾难场景（如机房断电、火灾、勒索病毒攻击等），系统性地测试和验证企业信息化系统的备份恢复能力、技术架构冗余度以及应急预案执行效率的过程。',
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
          children: [{ "type": "text", "text": "如果机房真的烧了，你的数据还在吗？", "version": 1 }],
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
              text: '很多企业老板认为“我有备份，我就安全”。但在我们的顾问调研中发现，超过 ',
              "version": 1
            },
            {
              type: 'text',
              text: '60% 的企业虽然有备份脚本，但从未成功进行过全量恢复测试',
              format: 1,
              "version": 1
            },
            {
              type: 'text',
              text: '。这意味着，当灾难真正降临时，这些所谓的“备份”可能只是一堆无法读取的乱码。',
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
              text: '真正的灾备，买的不是硬件或云服务，而是“业务连续性”的确定性。而这种确定性，只能通过实战演练来获得。',
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
          children: [{ "type": "text", "text": "灾备演练的 5 步标准路径", "version": 1 }],
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
                { "type": "text", "text": "第 1 阶段：预案编制与发布（需管理层签字）", "format": 1, "version": 1 },
                { "type": "text", "text": " — 明确谁是总指挥，谁负责切换网络，谁负责数据库恢复。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1,
              value: 1
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "第 2 阶段：离线数据可用性核查", "format": 1, "version": 1 },
                { "type": "text", "text": " — 随机抽取备份文件到独立机房进行异地重组测试。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1,
              value: 2
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "第 3 阶段：桌面推演（理论验证）", "format": 1, "version": 1 },
                { "type": "text", "text": " — 团队坐在一起，在白板上模拟各种极端情况的应对流程。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1,
              value: 3
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "第 4 阶段：全场景切换演练（实战）", "format": 1, "version": 1 },
                { "type": "text", "text": " — 在非业务高峰期，真正切断主节点，验证备节点接管效率。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1,
              value: 4
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "第 5 阶段：总结与持续改进", "format": 1, "version": 1 },
                { "type": "text", "text": " — 对比实际 RTO/RPO 与预期目标的差距，调整备份频率或架构。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1,
              value: 5
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
          "children": [{ "type": "text", "text": "案例：某上市制造企业的“救命”演练", "version": 1 }],
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

  // 1. Check if post exists
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
