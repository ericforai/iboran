import 'dotenv/config'
import { getPayload } from 'payload'
import configPromise from '../../src/payload.config'

const POST_DATA = {
  title: '商贸物流大变局：如何用 TMS+WMS 构建“仓配一体化”新底座',
  slug: 'logistics-trade-wms-tms-integration',
  tldr: '商贸企业的核心竞争力在于“周转”。货还在路上，订单就已经匹配好了。用友 BIP 将 TMS（运输管理）与 WMS（仓储管理）无缝集成。实现车辆智能调度、运费自动结算、司机 APP 在线签收。',
  publishedAt: new Date().toISOString(),
  authors: ['674f14167098410292723c6f'],
  meta: {
    title: '商贸物流数字化转型方案_TMS运输管理_WMS仓储_泊冉软件',
    description: '自有车队管理难？第三方物流对账慢？泊冉软件为您详解如何通过 TMS 系统实现路径优化和运费精算。',
  },
  atomicFAQs: [
    { "question": "我们的车队有自有的，也有外包的，系统能统一管吗？", "answer": "可以。自有车辆管理“油耗、维修、保险、折旧”；外包车辆管理“运费结算”。调度中心可以在一个大屏上看到所有可用运力，统一派单。" },
    { "question": "TMS 能帮我省运费吗？", "answer": "能。核心是“路径优化”和“拼载率”。系统根据送货地址自动规划最优路线（不绕路）。自动计算车辆装载率（体积/重量），防止“大车拉小货”。" },
    { "question": "仓配一体化有什么好处？", "answer": "WMS（仓）和 TMS（配）如果不打通，仓库配好货了，车还没来；或者车来了，货还没备好。打通后，TMS 的预调度信息会直接驱动 WMS 的波次拣货。实现“车等货”或“货等车”的精准协同。" },
    { "question": "司机怎么用？", "answer": "司机不需要装复杂软件，用微信小程序即可。接收派车单、导航、到达打卡、客户电子签名回单。回单上传瞬间，系统自动触发“运费结算”流程。" },
    { "question": "能对接快递公司吗？", "answer": "支持。系统对接了顺丰、京东、中通等主流快递 API。针对小件电商包裹，可以自动打印电子面单，自动回传物流单号给电商平台。" },
    { "question": "我是做 3PL（第三方物流）的，能算清楚仓储费吗？", "answer": "这是强项。系统支持复杂的“计费引擎”。按托盘天数算、按面积算、按吞吐量算。系统每天晚上自动跑批，生成客户对账单。" },
    { "question": "实施要多久？", "answer": "标准版（WMS+TMS）通常 2-3 个月。如果涉及自动化立库（AS/RS）或 AGV 集成，周期会更长。" },
    { "question": "支持冷链吗？", "answer": "支持。可以对接车载温度记录仪，生成全程温度曲线。" }
  ],
  decisionFramework: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          tag: 'h3',
          children: [{ type: 'text', text: '物流系统选型象限', version: 1 }],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "象限 1：城配（城市配送）", "format": 1, "version": 1 },
            { "type": "text", "text": " -> 核心是“排线”和“司机 APP”。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "象限 2：干线（长途运输）", "format": 1, "version": 1 },
            { "type": "text", "text": " -> 核心是“在途监控”和“回单管理”。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "象限 3：仓储型（落地配）", "format": 1, "version": 1 },
            { "type": "text", "text": " -> 核心是 WMS 的拣货效率。", "version": 1 }
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
    { "condition": "拥有 20 辆以上自有/合同货车的商贸批发企业", "type": "suitable" },
    { "condition": "专业的第三方物流公司（3PL）", "type": "suitable" },
    { "condition": "全部发快递的淘宝店（直接用 ERP 里的打单功能就行，不需要 TMS）", "type": "unsuitable" },
    { "condition": "只有 1 辆金杯车的个体户", "type": "unsuitable" }
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
              text: '物流是供应链的最后一公里。也是客户体验最直接的感知点。“货还在仓库里找半天”、“司机送错货了”、“运费糊里糊涂算不清”，这些都是企业的隐形成本。',
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
          children: [{ "type": "text", "text": "智能调度：告别“老调度的一张嘴”", "version": 1 }],
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
              text: '传统的调度全靠老员工经验。人一走，线路就乱了。',
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
              text: 'YonBIP TMS 内置 GIS 地图算法。导入 500 个送货单，系统自动聚类。哪些单子在一个区域？哪辆车能装得下？自动生成派车建议。调度员只需要审核微调。效率提升 80%。',
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
          children: [{ "type": "text", "text": "运费结算：堵住利润漏斗", "version": 1 }],
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
              text: '物流行业的运费计算极其复杂：按吨公里、按方、按件、最低起步价、多点卸货费、上楼费…… Excel 根本算不清楚。',
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
              text: '系统预置“计费引擎”。可以配置任何复杂的合同条款。发货瞬间，预估运费已经算出来了。月底承运商来对账，一分钱都不会差。',
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
          "children": [{ "type": "text", "text": "泊冉的实施优势", "version": 1 }],
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
              "text": "我们不仅懂软件，更懂物流现场。我们知道怎么在仓库里贴地标码，知道怎么教那个只有初中文化的司机用 APP 拍照回单。",
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
