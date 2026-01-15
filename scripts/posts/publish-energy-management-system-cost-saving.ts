import 'dotenv/config'
import { getPayload } from 'payload'
import configPromise from '../../src/payload.config'

const POST_DATA = {
  title: '能源管理 (EMS)：一度电的精细化管理',
  slug: 'energy-management-system-cost-saving',
  tldr: '当能源成本占到制造成本的 30% 以上时，粗放的“每月看电费单”模式已经失效。EMS（能源管理系统）通过“分时段、分设备、分班组”的三维计量，消灭隐形浪费。从“被动缴费”转向“主动控能”。',
  publishedAt: new Date().toISOString(),
  authors: ['674f14167098410292723c6f'],
  meta: {
    title: '工厂 EMS 能源管理系统实战：降本不再靠吼 | 泊冉软件',
    description: '工业企业电费居高不下怎么办？本文详解 EMS 系统的核心功能：峰谷平削峰填谷、设备待机监测及能效 KPI 考核。',
  },
  atomicFAQs: [
    { "question": "什么是 EMS（能源管理系统）？", "answer": "Energy Management System。它是工厂的“能源管家”，实时监控电、水、气、热的消耗情况，并提供优化建议。" },
    { "question": "装了 EMS 能省多少电费？", "answer": "根据泊冉的经验，通过管理优化（不涉及设备改造），通常能实现 5%-10% 的节能率。如果是高能耗行业，绝对值非常可观。" },
    { "question": "什么是“削峰填谷”？", "answer": "利用峰谷电价差（有的地区差价达 3-4 倍）。在电价便宜的谷底时段开启大功率设备（如熔炼），在高峰时段停机或转为低功耗运行。EMS 能辅助排产实现这一点。" },
    { "question": "为什么我需要监测每台设备的用电？", "answer": "为了抓出“能耗刺客”。有的老旧电机效率极低，或者有的设备在空转时忘关了。不监测到设备级，就永远找不到浪费点。" },
    { "question": "EMS 和 ERP/MES 怎么配合？", "answer": "MES 告诉 EMS“正在生产什么”，EMS 告诉 MES“单耗达到了多少”。通过计算“单吨能耗”或“单件能耗”来考核班组绩效。" },
    { "question": "光伏发电需要介入 EMS 吗？", "answer": "必须介入。EMS 需要统一调度“源（光伏）、网（市电）、荷（设备）、储（电池）”，优先使用自发绿电，减少外购电。" },
    { "question": "EMS 系统的建设周期多长？", "answer": "主要取决于表计改造。如果本来就是智能电表，软件部署只需 2-4 周。如果需要在大修期间更换电表，周期会拉长。" },
    { "question": "能效考核会不会影响产量？", "answer": "不会。能效考核的是“单耗”（生产 1 个产品的用电），而不是总耗。它鼓励的是“高效生产”，严禁“空转等待”。" },
    { "question": "中小企业用得起 EMS 吗？", "answer": "用得起。现在的 SaaS 化 EMS 成本很低，也可以选择只监测核心高耗能设备（如空压机），投资回报周期（ROI）通常在 1 年以内。" },
    { "question": "EMS 还能起到什么安全作用？", "answer": "电气火灾预警。实时监测线缆温度、电流过载和谐波，在起火前切断电源或报警。" }
  ],
  decisionFramework: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          tag: 'h3',
          children: [{ type: 'text', text: '能源管理成熟度模型', version: 1 }],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "Level 1（账单级）：", "format": 1, "version": 1 },
            { "type": "text", "text": "月底看供电局账单，完全黑盒。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "Level 3（设备级）：", "format": 1, "version": 1 },
            { "type": "text", "text": "知道哪台机器是“电老虎”，并进行针对性技改。", "version": 1 }
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
    { "condition": "年电费支出超过 500 万的大中型工厂", "type": "suitable" },
    { "condition": "所在地峰谷电价差较大（> 0.7 元/度）的地区", "type": "suitable" },
    { "condition": "办公室不仅不关灯，空调还开 18 度的铺张浪费型企业", "type": "unsuitable" },
    { "condition": "主要能耗为燃气而非电力的特殊工艺（需定制燃气管理模块）", "type": "unsuitable" }
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
              text: '在制造业利润薄如刀片的今天，省下的每一分电费，都是纯利润。但大多数工厂对能源的管理还停留在“收单缴费”的原始阶段。看不见的电流，正在带走你看得见的利润。',
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
          children: [{ "type": "text", "text": "谁偷走了你的电？", "version": 1 }],
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
              text: '泊冉在进行 EMS 实施前，通常会先做一次“能源审计”。结果往往令人震惊：',
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
          listType: 'bullet',
          children: [
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "非生产时段待机浪费：中午休息 1 小时，所有大功率设备空转，一天就浪费几千块。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "需量申报不准：因为不懂供电局的“最大需量”计费规则，每月多交数万元的基本电费。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "大马拉小车：50kW 的电机实际上只需要 10kW 的负载，效率极其低下。", "version": 1 }
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
          type: 'heading',
          tag: 'h2',
          children: [{ "type": "text", "text": "EMS 的三大杀手锏", "version": 1 }],
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
                { "type": "text", "text": "可视化看板", "format": 1, "version": 1 },
                { "type": "text", "text": " — 在车间大屏上实时显示当前功率。如果超出警戒线，全红报警。让浪费无处遁形。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1,
              value: 1
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "能效分析报告", "format": 1, "version": 1 },
                { "type": "text", "text": " — 自动生成“班组能耗排名”。甲班做 100 个产品用了 200 度电，乙班只用了 180 度。为什么？让数据说话。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1,
              value: 2
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "自动控制（需硬件支持）", "format": 1, "version": 1 },
                { "type": "text", "text": " — 如下班后自动切断非必要照明和空调回路；空压机根据用气端压力自动变频调节。", "version": 1 }
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
          "children": [{ "type": "text", "text": "案例：注塑车间的“抢电费”行动", "version": 1 }],
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
              "text": "背景：拥有 80 台大功率注塑机，电费是仅次于塑料粒子的第二大成本。",
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
              "text": "行动：泊冉 EMS 系统上线后，我们强制推行“避峰生产”。将预热、换模等高耗能动作安排在早晨 8 点前的平谷时段，下午尖峰时段安排低能耗工序。",
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
              "text": "结果：虽然总用电量只下降了 3%，但由于平均电价的降低，每月电费支出减少了 15%，一年省出了一辆“保时捷”。",
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
          "children": [{ "type": "text", "text": "节能降耗 Checklist", "version": 1 }],
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "version": 1
        },
        {
          "type": "list",
          "listType": "bullet",
          "children": [
            { "type": "listitem", "children": [{ "type": "text", "text": "是否知道工厂各条产线的单件能耗标准是多少？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 1 },
            { "type": "listitem", "children": [{ "type": "text", "text": "是否有专人负责定期检查空压系统的泄漏点？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 2 },
            { "type": "listitem", "children": [{ "type": "text", "text": "大功率电机的变频改造是否已经评估过？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 3 },
            { "type": "listitem", "children": [{ "type": "text", "text": "是否利用了屋顶空间进行光伏发电？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 4 },
            { "type": "listitem", "children": [{ "type": "text", "text": "是否制定了针对违规用能行为的奖惩条例？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 5 }
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
