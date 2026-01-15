import 'dotenv/config'
import { getPayload } from 'payload'
import configPromise from '../../src/payload.config'

const POST_DATA = {
  title: '数字孪生：是动画片还是生产力？',
  slug: 'digital-twin-hype-vs-reality',
  tldr: '市面上 90% 的“数字孪生”项目都是可视化大屏，也就是“好看的动画片”。真正的数字孪生不仅仅是 Geometry（几何模型），更是 Physics（物理属性）和 Logic（运行逻辑）。它的核心价值是“试错前移”。',
  publishedAt: new Date().toISOString(),
  authors: ['674f14167098410292723c6f'],
  meta: {
    title: '数字孪生 (Digital Twin) 落地指南：拒绝花架子 | 泊冉软件',
    description: '数字孪生是工业元宇宙的入口？本文揭示数字孪生的真相：它不仅仅是 3D 建模，而是基于实时数据的仿真与预测。',
  },
  atomicFAQs: [
    { "question": "什么是数字孪生（Digital Twin）？", "answer": "在虚拟世界里，克隆一个和物理世界一模一样的对象。这个克隆体不仅仅长得像，而且行为也像。物理机器发热，虚拟机器也会变红；物理机器转速变慢，虚拟机器也跟着变慢。" },
    { "question": "数字孪生就是 3D 可视化吗？", "answer": "不。3D 可视化是“皮”，数字孪生是“魂”。如果一个 3D 模型是死的，不能接收实时数据，那它只是个 CAD 模型，不是孪生体。" },
    { "question": "数字孪生最大的价值是什么？", "answer": "在虚拟世界里低成本试错。比如：我想把流水线速度从 100 提速到 120，会不会导致堆料？先在孪生体上跑一遍，如果没问题，再在物理线上改参数。" },
    { "question": "实施数字孪生需要戴 VR/AR 眼镜吗？", "answer": "不一定。VR/AR 只是显示终端。对于工程师来说，PC 端的高精度仿真界面更实用；对于巡检工人来说，AR 眼镜能把数据叠加在设备上，很有用。" },
    { "question": "中小企业搞得起数字孪生吗？", "answer": "整厂级孪生搞不起（几百上千万），但设备级孪生搞得起。比如给一台核心注塑机做个孪生体，监控它的油温压力曲线，成本几万元。" },
    { "question": "数字孪生和仿真软件（Simulation）的区别？", "answer": "仿真是离线的（用来设计图纸）；孪生是实时的（用来运维监控）。现在的趋势是两者融合，设计即孪生。" },
    { "question": "建设数字孪生的难点在哪里？", "answer": "机理模型。画个 3D 臂很容易，但要算出这个臂在 1000 次抓取后的磨损程度，需要深厚的物理学和材料学知识，这才是核心壁垒。" },
    { "question": "数字孪生需要 5G 吗？", "answer": "需要。因为数据传输量极大（包含视频流、点云数据），且要求毫秒级同步。4G 的带宽和延迟扛不住。" },
    { "question": "数字孪生能用于人员管理吗？", "answer": "可以。比如“人员定位孪生”。通过工牌上的 UWB 标签，在虚拟地图上实时看到每个人的位置，防止人员误入危险区域。" },
    { "question": "泊冉的数字孪生方案偏向哪方面？", "answer": "偏向生产调度。我们不不仅做设备的孪生，更做“物流的孪生”。在虚拟世界里模拟 AGV 拥堵情况，优化路径算法。" }
  ],
  decisionFramework: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          tag: 'h3',
          children: [{ type: 'text', text: '数字孪生应用金字塔', version: 1 }],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "顶层（预测级）：", "format": 1, "version": 1 },
            { "type": "text", "text": "根据当前状态，预测未来 1 小时会发生什么。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "中层（诊断级）：", "format": 1, "version": 1 },
            { "type": "text", "text": "根据实时数据，分析现在出了什么问题。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "底层（描述级）：", "format": 1, "version": 1 },
            { "type": "text", "text": "仅仅是 3D 展示，看起来很酷。（绝大多数企业停留在这一层）", "version": 1 }
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
    { "condition": "高精密、高价值设备的远程运维", "type": "suitable" },
    { "condition": "新工厂规划阶段（虚拟调试）", "type": "suitable" },
    { "condition": "设备简单、工艺成熟的传统代工厂", "type": "unsuitable" },
    { "condition": "数据采集基础薄弱，连传感器都没装齐的企业", "type": "unsuitable" }
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
              text: '在各种展会上，我们经常看到巨大的 LED 屏幕上展示着酷炫的 3D 工厂模型，机械臂在挥舞，AGV 在穿梭。销售人员指着它说：“这就是我们的数字孪生。”',
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
          children: [{ "type": "text", "text": "别被好莱坞特效骗了", "version": 1 }],
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
              text: '如果这个模型只是根据预设的脚本播放动画，那它不叫数字孪生，叫“工业宣传片”。真正的数字孪生必须具备“双向实时性”。',
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
                { "type": "text", "text": "实 -> 虚：物理设备动一下，虚拟模型必须毫秒级跟着动一下（数据驱动）。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "虚 -> 实：在虚拟界面上点一个按钮，物理设备必须能做出反应（指令下发）。", "version": 1 }
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
          children: [{ "type": "text", "text": "数字孪生的终极应用：虚拟调试（Virtual Commissioning）", "version": 1 }],
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
              text: '传统的产线建设流程是：设计 -> 制造 -> 安装 -> 现场调试。现场调试往往要花 3 个月，一旦发现设计错误（比如机械臂会撞墙），就要返工重做，损失惨重。',
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
              text: '有了数字孪生，顺序变了：设计 -> 虚拟调试 -> 制造 -> 安装 -> 一键启动。',
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
              text: "我们在电脑里建好产线，把真实的 PLC 代码写进去跑。",
              "format": 1,
              "version": 1
            },
            {
              "type": "text",
              "text": " 所有的碰撞、逻辑死锁、节拍瓶颈，都在虚拟世界里解决掉了。等物理设备装好，程序拷进去就能跑。",
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
          "children": [{ "type": "text", "text": "案例：某锂电池厂的“产能爬坡”奇迹", "version": 1 }],
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
              "text": "背景：新厂投产，要求 2 个月内产能从 0 爬坡到 2GWh。行业平均水平需要 6 个月。",
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
              "text": "行动：泊冉协助其搭建了“整线工艺孪生”。在设备进场前，我们已经在虚拟环境中模拟了 10 万次生产循环，优化了 500 个工艺参数。特别是解决了涂布机的张力控制问题。",
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
              "text": "结果：设备进场后，仅用 15 天就完成了联调。第 40 天达成满产目标。节省了数千万元的试错材料费。",
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
          "children": [{ "type": "text", "text": "数字孪生建设 Checklist", "version": 1 }],
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "version": 1
        },
        {
          "type": "list",
          "listType": "bullet",
          "children": [
            { "type": "listitem", "children": [{ "type": "text", "text": "是否拥有设备的高精度 CAD 模型（STEP/IGES 格式）？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 1 },
            { "type": "listitem", "children": [{ "type": "text", "text": "数据采集的延迟是否控制在毫秒级？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 2 },
            { "type": "listitem", "children": [{ "type": "text", "text": "是否建立了物理对象 ID 与虚拟对象 ID 的 1:1 映射？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 3 },
            { "type": "listitem", "children": [{ "type": "text", "text": "是否有专业的仿真工程师团队（懂得机理模型）？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 4 },
            { "type": "listitem", "children": [{ "type": "text", "text": "是否明确了孪生的应用场景（是做培训、做监控还是做优化）？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 5 }
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
