import 'dotenv/config'
import { getPayload } from 'payload'
import configPromise from '../../src/payload.config'

const POST_DATA = {
  title: '制造智能 (MI)：比 BI 强在哪？',
  slug: 'manufacturing-intelligence-vs-bi',
  tldr: '很多老板买了 BI 报表，却发现对生产现场帮助不大。因为 BI看的是“后视镜”（昨天的产量），而 MI（制造智能）看的是“仪表盘”（现在的转速）。MI 深入 OT 层，强调实时性和闭环控制。',
  publishedAt: new Date().toISOString(),
  authors: ['674f14167098410292723c6f'],
  meta: {
    title: 'MI 制造智能与 BI 商业智能的区别解析 | 泊冉软件',
    description: '为什么有了 BI 还需要 MI？本文深入解析制造智能（MI）在实时预警、工艺优化和设备互联方面的独特价值，帮助工厂从“看见数据”走向“利用数据”。',
  },
  atomicFAQs: [
    { "question": "MI（制造智能）和 BI（商业智能）的核心区别是什么？", "answer": "数据时效性。BI 通常处理 T+1 的历史数据，用于做月度总结；MI 处理毫秒级/秒级的实时数据，用于做现场干预（如温度过高自动停机）。" },
    { "question": "MI 系统的数据源来自哪里？", "answer": "直接来自生产设备（PLC、SCADA、传感器）。它不需要通过人脑过滤，而是通过网关直采，保证了数据的绝对真实（Raw Data）。" },
    { "question": "实施 MI 之前需要先上 ERP 吗？", "answer": "不一定。MI 侧重于现场 OT（运营技术）层的数据，可以独立于 ERP 存在。但如果有 MES 作为载体，MI 的效果会更好。" },
    { "question": "MI 能解决什么具体问题？", "answer": "比如：刀具什么时候该换了（预测性维护）、 这批产品的良率为什么突然下降了（根因分析）、现在的能耗是不是超标了（实时监控）。" },
    { "question": "中小企业用得起 MI 吗？", "answer": "用得起。泊冉推荐从“关键瓶颈工序”开始试点。不必全厂覆盖，只需给那台最贵的设备装上“大脑”，ROI 通常在 3-6 个月。" },
    { "question": "可视化大屏就是 MI 吗？", "answer": "不是。大屏只是“皮”，逻辑才是“骨”。如果大屏上跳动的数字不能触发车间主任的行动（Actionable），那只是个花瓶。真正的 MI 带有自动报警和推送功能。" },
    { "question": "MI 需要 AI 技术支持吗？", "answer": "MI 是 AI 在工业领域的初级应用。先有规则（Rule-based MI），再有模型（Model-based AI）。先把“温度超过 80 度报警”做好了，再谈“预测温度趋势”。" },
    { "question": "如何打破 IT 和 OT 的隔阂？", "answer": "建立联合小组。IT 懂数据库，OT 懂工艺。MI 项目实施必须由懂工艺的老师傅带头，IT 人员配合提取数据。" },
    { "question": "MI 对操作工有什么影响？", "answer": "减少记录工作，增加“被管理”感。操作工不再需要手写报表，但他的每一次停机、每一次调速都被系统记录在案，透明度极高。" },
    { "question": "未来的工厂需要几个“脑”？", "answer": "两个。一个是 ERP（商业大脑，管钱和单），一个是 MI（工业大脑，管物和质）。两者通过 MES 握手。" }
  ],
  decisionFramework: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          tag: 'h3',
          children: [{ type: 'text', text: 'MI 选型决策树', version: 1 }],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "判断准则：", "format": 1, "version": 1 },
            { "type": "text", "text": "如果你的痛点是“财务报表出得慢”，选 BI；如果你的痛点是“由于设备故障导致交期不可控”或“良率波动找不到原因”，选 MI。", "version": 1 }
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
    { "condition": "流程型制造（化工、食品、医药）", "type": "suitable" },
    { "condition": "高度自动化、设备价值极高的离散制造（汽车、芯片）", "type": "suitable" },
    { "condition": "纯手工装配、劳动密集型企业", "type": "unsuitable" },
    { "condition": "数据孤岛严重，连基础 PLC 联网都没做好的老旧工厂", "type": "unsuitable" }
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
              text: '在数字化转型的浪潮中，BI（商业智能）几乎成了标配。老板们坐在办公室里，看着大屏上的饼图和柱状图，觉得自己掌控了一切。直到——客户打电话来投诉这批货全是次品，或者产线突然停机导致订单延误。',
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
          children: [{ "type": "text", "text": "BI 的“迟滞效应”", "version": 1 }],
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
              text: 'BI 处理的是结构化的历史数据。当你从 BI 报表里看到“上个月设备故障率上升 5%”时，损失已经造成了，且无法挽回。这就好比开车时只看后视镜，虽然清楚走过的路，但看不见前面的坑。',
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
          children: [{ "type": "text", "text": "MI：深入生产心脏的实战派", "version": 1 }],
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
              text: '制造智能（Manufacturing Intelligence）不看“上个月”，它看“这一秒”。',
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
                { "type": "text", "text": "实时上下文（Real-time Context）", "format": 1, "version": 1 },
                { "type": "text", "text": " — MI 不仅记录“温度是 100 度”，还记录“此时正在生产 A 订单、操作员是老张、用的是 3 号模具”。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1,
              value: 1
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "闭环控制（Closed-loop）", "format": 1, "version": 1 },
                { "type": "text", "text": " — BI 发现问题靠人去解决；MI 发现问题可以反向控制设备。例如：检测到尺寸偏差趋势，MI 自动指令机床进行刀补。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1,
              value: 2
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "预测分析（Predictive）", "format": 1, "version": 1 },
                { "type": "text", "text": " — 基于设备振动频率的分析，MI 会告诉你：“主轴轴承将在 48 小时内损坏，请立即停机检修。”", "version": 1 }
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
          "children": [{ "type": "text", "text": "案例：某半导体封装厂的良率保卫战", "version": 1 }],
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
              "text": "背景：产品良率一直在 98% 徘徊，怎么都上不去。工程师每天分析 BI 报表，认为原因是原材料波动，但换了供应商也没用。",
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
              "text": "洞察：泊冉协助上线 MI 系统后，我们将每颗芯片的测试数据与当时的焊线机参数进行了毫秒级对齐。结果发现：每当午休刚结束设备重启时，前 50 颗产品的拉力测试值偏低。",
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
              "text": "解决：这是典型的“冷机效应”。MI 系统设置了一条规则：设备重启后，自动执行 5 分钟的空跑预热程序。良率稳定提升至 99.5%。",
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
          "children": [{ "type": "text", "text": "制造智能实施 Checklist", "version": 1 }],
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "version": 1
        },
        {
          "type": "list",
          "listType": "bullet",
          "children": [
            { "type": "listitem", "children": [{ "type": "text", "text": "你的设备是否支持标准协议（如 OPC-UA, MQTT, Modbus）？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 1 },
            { "type": "listitem", "children": [{ "type": "text", "text": "是否定义了清晰的数据采集频率（是每秒采一次，还是每班采一次）？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 2 },
            { "type": "listitem", "children": [{ "type": "text", "text": "是否有 OT 安全网关来隔离生产网和办公网？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 3 },
            { "type": "listitem", "children": [{ "type": "text", "text": "MI 系统的报警是否直达一线班组长的手机/手环？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 4 },
            { "type": "listitem", "children": [{ "type": "text", "text": "是否建立了基于实时数据的“快速反应会议（QRQC）”机制？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 5 }
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
