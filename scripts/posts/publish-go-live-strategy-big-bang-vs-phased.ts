import 'dotenv/config'
import { getPayload } from 'payload'
import configPromise from '../../src/payload.config'

const POST_DATA = {
  title: '上线策略：一次性切换还是并行运行？',
  slug: 'go-live-strategy-big-bang-vs-phased',
  tldr: '上线策略没有标准答案，只有风险与成本的平衡。大步一跨（Big Bang）效率高但风险大，逐步推进（Phased）安全但跨期长且数据同步难。对于核心财务系统，建议采用“短周期并行（1-2个月）”后择机单飞。',
  publishedAt: new Date().toISOString(),
  authors: ['674f14167098410292723c6f'],
  meta: {
    title: '系统上线策略：大步跨还是分步走？ | 泊冉软件',
    description: '深度对比 Big Bang 一次性上线与分步上线策略的优缺点、适用场景及风险点。为 B2B 企业提供落地建议。',
  },
  atomicFAQs: [
    { "question": "什么是 Big Bang（大爆炸）式上线？", "answer": "在某个时点（如年初 1 月 1 日），直接停掉旧系统，所有模块在全集团同步切换至新系统。通常用于系统间高度集成的情况。" },
    { "question": "并行运行（Parallel Run）一定要做吗？", "answer": "不一定。随着系统成熟度的提升，越来越多的企业倾向于“加强模拟演练”后直接切换，因为两套系统同时记账的人力成本极高。" },
    { "question": "分步上线（Phased Approach）一般怎么排顺序？", "answer": "通常是：财务先行 -> 采购/销售介入 -> 计划/生产最后入场。或者是：先总部试点 -> 后工厂推广。" },
    { "question": "并行运行中，两套系统数据对不上怎么办？", "answer": "这通常是必然的。必须提前定义“以哪套为准”。对于财务合规性，并行期间通常以老系统为报表来源，新系统做验证。" },
    { "question": "为什么很多专家反对长期并行运行？", "answer": "长期并行会导致员工产生“新系统可有可无”的错觉，且双倍的工作量会导致数据录入延迟，最终拖累新系统的成功。" },
    { "question": "上线时间点选在什么时候最好？", "answer": "法定长假（如国庆、春节）或季度初的非高峰期。财务系统强推 1 月 1 日上线，因为涉及年结，逻辑最清晰。" },
    { "question": "如果上线失败，有回滚计划（Rollback）吗？", "answer": "必须有。通常预留“回退到老系统最后一次备份”的窗口期，但一旦开始业务操作超 24 小时，回滚成本将无法承受。" },
    { "question": "上线期间需要顾问驻场吗？", "answer": "绝对需要。上线的头 3-5 天是各种“操作盲区”和“隐性Bug”的高发期，驻场能建立瞬间的信任感。" },
    { "question": "如何判断系统已进入“稳定态”？", "answer": "当每日“技术性咨询”降至 5 条以下，且核心业务流程能在不求助外部的情况下闭环流转。" },
    { "question": "一次性上线的企业通常需要哪些前置条件？", "answer": "成熟的项目管理团队、经过 2 轮以上的高强度压力测试、且旧系统数据质量极高。" }
  ],
  decisionFramework: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          tag: 'h3',
          children: [{ type: 'text', text: '上线策略决策框架', version: 1 }],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "判断准则：", "format": 1, "version": 1 },
            { "type": "text", "text": "如果模块间依赖极强（如 U9 指令驱动模式），选 Big Bang。如果组织庞大、人员素质不一且可按产线切分，选 Phased。", "version": 1 }
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
    { "condition": "系统模块单一、流程集中且具备强力一把手推动的企业", "type": "suitable" },
    { "condition": "高度集成的 ERP 替换项目（如 U8 换 YonSuite）", "type": "suitable" },
    { "condition": "人员分布在多个地理位置、且尚未建立统一标准的大型集团", "type": "unsuitable" },
    { "condition": "业务极度敏感、一秒钟都不能停机且缺乏灾备冗余的组织", "type": "unsuitable" }
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
              text: '站在“系统上线”的临门一脚，CIO 们面临着职业生涯中的最大赌注：是该大步一跃（Big Bang），让所有功能在全公司同步“炸裂”开启？还是小心翼翼地并行运行（Parallel Run），分步蚕食？',
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
          children: [{ "type": "text", "text": "一次性上线（Big Bang）：勇敢者的游戏", "version": 1 }],
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
              text: '优势很明显：',
              version: 1
            },
            {
              type: "text",
              text: "快。没有痛苦的长跑，没有两边对账的折磨。",
              "format": 1,
              "version": 1
            },
            {
              "type": "text",
              "text": " 但副作用同样剧烈：如果测试不到位，可能会导致业务全面瘫痪、工厂停摆。",
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
          children: [{ "type": "text", "text": "并行运行（Parallel Run）：昂贵的保险", "version": 1 }],
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
              text: '很多保守的财务部强推“两套账跑三个月”。但泊冉顾问要提醒：',
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
              text: "双重录入会毁掉项目。 ",
              "format": 1,
              "version": 1
            },
            {
              "type": "text",
              "text": "员工在疲惫中会优先保留老习惯，新系统的数据会变得极不准确，最终导致审计失败。并行周期建议不超过 1 个月。",
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
          children: [{ "type": "text", "text": "分阶段上线（Phased）：推荐的“稳健中庸”", "version": 1 }],
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
                { "type": "text", "text": "按模块切分", "format": 1, "version": 1 },
                { "type": "text", "text": " — 例如先上线“进销存”，三个月后再上线“生产计划”。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1,
              value: 1
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "按组织切分", "format": 1, "version": 1 },
                { "type": "text", "text": " — 选一个最具代表性的分厂作为“样板间”，跑通后复刻。这是泊冉服务的许多跨国企业最爱的方案。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1,
              value: 2
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
          "children": [{ "type": "text", "text": "案例：某家电制造大佬的“快速闪击战”", "version": 1 }],
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
              "text": "背景：旗下 12 家法人实体，原有系统互不通气。项目组原本计划分三年上线。",
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
              "text": "变革：在泊冉顾问的协助下，我们加强了为期三周的“黑盒压力测试”，并配置了自动化数据对比脚本。",
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
              "text": "结果：采用全模块全集团“大转场”模式，仅用 45 天即完成切换，节约了数百万的过渡期开发费。",
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
          "children": [{ "type": "text", "text": "上线准备度 Checklist", "version": 1 }],
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "version": 1
        },
        {
          "type": "list",
          "listType": "bullet",
          "children": [
            { "type": "listitem", "children": [{ "type": "text", "text": "是否完成了三轮以上的数据清洗与模拟导入测试？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 1 },
            { "type": "listitem", "children": [{ "type": "text", "text": "业务主管是否已签署《确认上线书》？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 2 },
            { "type": "listitem", "children": [{ "type": "text", "text": "是否已打印出老系统结账那一刻的所有纸质备份？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 3 },
            { "type": "listitem", "children": [{ "type": "text", "text": "上线期间是否有专职的技术支持热线？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 4 },
            { "type": "listitem", "children": [{ "type": "text", "text": "如果出现熔断状况，是否规定了“回滚到老系统”的具体时间点？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 5 }
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
