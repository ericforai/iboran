import 'dotenv/config'
import { getPayload } from 'payload'
import configPromise from '../../src/payload.config'

const POST_DATA = {
  title: '工业物联网 (IIoT)：设备连上网就能叫智能制造吗？',
  slug: 'iiot-smart-manufacturing-myth',
  tldr: '很多工厂以为买了带网口的设备、装了 Wi-Fi 就是 IIoT。其实，IIoT 的核心不在“联网”，而在“会说话”。让设备主动告诉人“我渴了（缺料）”、“由于（振动）”、“我病了（故障）”。',
  publishedAt: new Date().toISOString(),
  authors: ['674f14167098410292723c6f'],
  meta: {
    title: '工业物联网 (IIoT) 避坑指南：数据采集与价值挖掘 | 泊冉软件',
    description: 'IIoT 项目为什么容易烂尾？只采集不分析是通病。本文详解如何构建“端-边-云”架构，以及如何解决设备协议“万国牌”的兼容难题。',
  },
  atomicFAQs: [
    { "question": "什么是工业物联网（IIoT）？", "answer": "Industrial Internet of Things。它把工厂里的机器、物料、人通过传感器连接起来。与消费级 IoT（如智能家居）不同，IIoT 对稳定性、延迟和安全性要求极高。" },
    { "question": "设备连上网有什么用？", "answer": "比如：空压机连上网，就能远程调参；数控机床连上网，就能自动下发程序；AGV 连上网，就能互相避让调度。" },
    { "question": "老旧设备（哑设备）怎么联网？", "answer": "加装外挂传感器。不需要换设备，只需在关键部位（如电机）加装振动传感器、电流互感器，配合边缘网关（Edge Gateway）即可低成本改造。" },
    { "question": "设备协议五花八门（西门子、三菱、欧姆龙）怎么通？", "answer": "这是 IIoT 最头疼的问题。通常需要部署“协议转换网关”，把 Modbus、Profibus 等私有语言统一翻译成 MQTT 或 OPC-UA 这种普通话。" },
    { "question": "IIoT 数据存在哪里？云端还是本地？", "answer": "推荐“云边协同”。高频的实时控制数据（如机械臂防撞）在边缘端本地处理；低频的分析数据（如月度能耗）上传到云端处理。" },
    { "question": "工业 Wi-Fi 靠谱吗？", "answer": "在强电磁干扰的车间，WI-Fi 通常不稳定。对于关键控制信号，依然推荐有线连接；对于移动设备（如 PDA、AGV），推荐工业级 5G 或专网。" },
    { "question": "数据安全怎么保障？", "answer": "物理隔离是底线。生产网（OT）和办公网（IT）必须通过防火墙单向传输。绝对禁止在机床的工控机上插 U 盘或连外网看视频。" },
    { "question": "IIoT 实施多久能见效？", "answer": "通常 3-6 个月。建议先做“OEE（设备综合效率）监控”，这是最容易量化 ROI 的场景。看到设备开动率提升了，这钱就没白花。" },
    { "question": "5G 对 IIoT 是必须的吗？", "answer": "目前还不是。在 90% 的场景下，千兆以太网 + Wi-Fi 6 已经足够。但随着“云化 PLC”和“AR 远程运维”的普及，5G 低延迟的优势会体现出来。" },
    { "question": "泊冉提供什么样的 IIoT 服务？", "answer": "我们提供“软硬一体”方案。包括工业网关硬件、协议解析中间件以及上层的设备管理软件（TPM）。" }
  ],
  decisionFramework: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          tag: 'h3',
          children: [{ type: 'text', text: 'IIoT 价值评估模型', version: 1 }],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "判断准则：", "format": 1, "version": 1 },
            { "type": "text", "text": "如果你的设备停机一小时损失超过 1 万元，请立即上 IIoT 做预测性维护；如果设备很便宜且坏了随时能换，人工巡检就够了。", "version": 1 }
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
    { "condition": "设备数量多且分布分散（如风电场、分布式工厂）", "type": "suitable" },
    { "condition": "工艺参数对环境敏感（如需要严格温湿度控制的药厂）", "type": "suitable" },
    { "condition": "只有 3-5 台独立设备的小作坊", "type": "unsuitable" },
    { "condition": "涉及国家机密或极高安全等级、物理隔绝的军工车间", "type": "unsuitable" }
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
              text: '走进很多所谓的“智能工厂”，你会看到大屏幕上花花绿绿的数据在跳动。但仔细一看，旁边的工人还在拿纸笔记录设备参数。这种“两张皮”的现象，就是典型的伪 IIoT。',
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
          children: [{ "type": "text", "text": "连网本身产生不了价值", "version": 1 }],
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
              text: '把设备连上网，就像给哑巴装了电话。如果电话那头没人接（没有软件分析），或者哑巴只会说乱码（协议未解析），那这个电话装了也白装。',
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
              text: "IIoT 的真正价值链是：",
              "format": 1,
              "version": 1
            },
            {
              "type": "text",
              "text": " 采集（Sensor） -> 连接（Network） -> 翻译（Gateway） -> 分析（Analytics） -> 行动（Action）。绝大多数烂尾项目，都死在后两步。",
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
          children: [{ "type": "text", "text": "打破“万国牌”设备的巴别塔", "version": 1 }],
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
              text: '工厂里通常有：德国的机床、日本的机械臂、国产的注塑机。它们说着完全不同的语言（西门子 S7、三菱 Melsec、欧姆龙 Fins）。',
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
              text: '泊冉的解决方案是部署“边缘智能网关”。它就像一个精通 100 种方言的同声传译员，把所有设备的语言统一翻译成 JSON 格式发给服务器。这是 IIoT 地基中的地基。',
              version: 1
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
          "children": [{ "type": "text", "text": "案例：某空压机厂商的商业模式变革", "version": 1 }],
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
              "text": "背景：传统模式是卖设备，然后等客户报修。竞争激烈，利润微薄。",
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
              "text": "转型：给每台出厂的空压机内置 IoT 模块。厂商在总部能实时看到全国 5000 台设备的运行状态。",
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
              "text": "结果：推出了“按气量收费”的新模式。客户不需要买设备，只按每立方米压缩空气付费。设备故障前，厂商主动上门维保。从“卖铁”变成了“卖服务”，利润率提升了 40%。",
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
          "children": [{ "type": "text", "text": "IIoT 实施 Checklist", "version": 1 }],
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "version": 1
        },
        {
          "type": "list",
          "listType": "bullet",
          "children": [
            { "type": "listitem", "children": [{ "type": "text", "text": "是否盘点了所有设备的控制器型号和接口类型？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 1 },
            { "type": "listitem", "children": [{ "type": "text", "text": "车间网络（布线/Wi-Fi）覆盖是否无死角？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 2 },
            { "type": "listitem", "children": [{ "type": "text", "text": "数据采集频率（1Hz / 10Hz）是否匹配业务需求？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 3 },
            { "type": "listitem", "children": [{ "type": "text", "text": "是否建立了统一的设备命名规范（Tag Naming）？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 4 },
            { "type": "listitem", "children": [{ "type": "text", "text": "是否考虑了断网续传机制（数据先存本地）？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 5 }
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
