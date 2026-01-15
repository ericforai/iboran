import 'dotenv/config'
import { getPayload } from 'payload'
import configPromise from '../../src/payload.config'

const POST_DATA = {
  title: '告别 U8/NC：传统 ERP 向 YonBIP 平滑升级的完整路径',
  slug: 'u8-nc-upgrade-to-yonbip-cloud-migration',
  tldr: '随着 Win7 和 SQL Server 2008 的停止服务，老旧的 U8/NC 系统面临巨大的安全风险与性能瓶颈。从“本地部署”迁移到“云端 BIP”已是大势所趋。本文详解升级的三个阶段、数据迁移的核心工具以及泊冉独家的“无损升级”方案。',
  publishedAt: new Date().toISOString(),
  authors: ['674f14167098410292723c6f'],
  meta: {
    title: '用友U8升级BIP服务_NC系统迁移YonSuite_泊冉软件',
    description: '用了 10 年的 U8 该换了！老系统卡顿、查报表慢、不支持手机端？泊冉软件提供从 U8/NC/T+ 到 YonBIP/YonSuite 的一站式升级迁移服务。',
  },
  atomicFAQs: [
    { "question": "为什么要现在升级？我用的 U8 好好的。", "answer": "因为环境变了。1. 技术风险：服务器老化，操作系统停保，勒索病毒横行；2. 业务需求：以前只要记账，现在老板要在手机上看报表，销售要在外面下单，老 U8 做不到；3. 政策要求：数电票（全电发票）推行，老版本必须打补丁，成本也不低。" },
    { "question": "升级期间会影响业务吗？", "answer": "会有一点，但我们能控制在最小范围。泊冉采用“平行运行”策略。新系统上线前，会和老系统并行跑 1 个月账。确认数据完全一致后，周末进行“割接”。业务停顿时间不超过 48 小时。" },
    { "question": "历史数据能带过去吗？", "answer": "基础档案（客商、物料、科目）100% 迁移。期初余额 100% 迁移。至于历史所有的业务单据（10 年前的每一张凭证），建议“封存查询”。我们提供独立的查询工具，既减轻了新系统的负担，又能随时查老账。" },
    { "question": "升级后的操作习惯变化大吗？", "answer": "确实有变化。YonBIP 是 Web 端架构，操作像逛淘宝，比老 U8 的 CS 架构更现代、更直观。我们提供 3 轮以上的全员培训，保证老会计也能在一周内上手。" },
    { "question": "NC Cloud 和 YonBIP 选哪个？", "answer": "如果您是超大型集团，且必须私有化部署，NC Cloud 是稳妥之选。但如果您追求创新和弹性，YonBIP（公有云或混合云）是未来。用友研发重心都在 BIP 上，新功能也是 BIP 先有。" },
    { "question": "升级大概需要多少钱？", "answer": "升级费 = 软件差价（通常有老客户置换折扣） + 实施迁移费。相比重新买一套，升级通常能省 30%-50% 的预算。而且这部分投入是符合“信创”国产化改造政策的。" },
    { "question": "泊冉的升级服务有什么特色？", "answer": "我们有自研的“ETL 迁移工具”，比手工导 Excel 快 10 倍。而且我们在升级过程中会帮您做“数据清洗”，把这十几年积累的垃圾数据（如重复的物料、废弃的客商）清理干净，轻装上阵。" },
    { "question": "不升级行不行？", "answer": "短期行，长期不行。这就像坚持用诺基亚手机，虽然能打电话，但你扫不了码、打不了车，逐渐就被时代淘汰了。企业的竞争力也体现在数字化工具的先进性上。" }
  ],
  decisionFramework: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          tag: 'h3',
          children: [{ type: 'text', text: '升级路径推荐图', version: 1 }],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "路径 1：U8/T+ -> YonSuite", "format": 1, "version": 1 },
            { "type": "text", "text": " 适合：成长型企业，想彻底拥抱云端，不想再维护服务器。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "路径 2：U8/NC -> U9 Cloud", "format": 1, "version": 1 },
            { "type": "text", "text": " 适合：重度离散制造企业，对生产管理极其精细。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "路径 3：NC v6.5 -> YonBIP", "format": 1, "version": 1 },
            { "type": "text", "text": " 适合：大型集团，需要架构重构，建立共享中心和中台能力。", "version": 1 }
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
    { "condition": "服务器已使用超过 5 年，经常宕机或中毒的企业", "type": "suitable" },
    { "condition": "有多组织核算需求，老 U8 只能分账套管理极其痛苦的企业", "type": "suitable" },
    { "condition": "只剩 1-2 个会计养老，业务完全停滞的公司（没必要折腾）", "type": "unsuitable" },
    { "condition": "期望一分钱不花就能完成升级（原厂置换也需要补差价的）", "type": "unsuitable" }
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
              text: '很多老财务对 U8 有深厚的感情，“F2 参照，空格保存”，闭着眼睛都能操作。但是，感情不能当饭吃。在数智化时代，老旧的 ERP 系统已经成了企业发展的绊脚石。',
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
          children: [{ "type": "text", "text": "为什么说“现在”是升级的最佳时机？", "version": 1 }],
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
              text: '除了技术上的淘汰压力（Win7/Win Server 2008 停服），更重要的是用友官方的战略转移。',
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
              text: '未来的资源（研发、支持、生态）将全部集中在 YonBIP 和 YonSuite 上。老产品虽然还能用，但会逐渐边缘化，变成“孤儿”。此刻升级，不仅能享受到最新的技术红利（如 AI 助手、RPA 机器人），还能用到极具吸引力的“老客户置换政策”。',
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
          children: [{ "type": "text", "text": "升级的三大误区", "version": 1 }],
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
                { "type": "text", "text": "误区一：“升级就是重装系统”", "format": 1, "version": 1 },
                { "type": "text", "text": " 错。升级是系统重构。底层的数据库结构变了，业务流程也变了。需要重新做蓝图设计。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1,
              value: 1
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "误区二：“数据都要带走”", "format": 1, "version": 1 },
                { "type": "text", "text": " 没必要。把近 3 年的数据带走就行了。再早的垃圾数据（如早已倒闭的客户信息）带到新家只会污染环境。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1,
              value: 2
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "误区三：“自己搞搞就行”", "format": 1, "version": 1 },
                { "type": "text", "text": " 高风险。数据库迁移脚本极其复杂，稍微错一个字段映射，财务报表就不平了。必须找专业团队。", "version": 1 }
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
          "children": [{ "type": "text", "text": "泊冉的“平滑升级”三步法", "version": 1 }],
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
              "text": "1. 诊断与清洗：",
              "format": 1,
              "version": 1
            },
            {
              "type": "text",
              "text": " 我们先派专家对老系统做“体检”，标记出哪些是脏数据，哪些是必须保留的核心数据。",
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
              "text": "2. 平行模拟：",
              "format": 1,
              "version": 1
            },
            {
              "type": "text",
              "text": " 在沙箱环境搭建新系统，导入旧数据，让关键用户试运行一周，查找差异。",
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
              "text": "3. 瞬间割接：",
              "format": 1,
              "version": 1
            },
            {
              "type": "text",
              "text": " 选择在月初或月底的那个周末。周五晚上封账，周日晚上新系统开账。周一上班，大家用的就是新系统了。",
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
