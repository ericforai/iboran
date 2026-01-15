import 'dotenv/config'
import { getPayload } from 'payload'
import configPromise from '../../src/payload.config'

const POST_DATA = {
  title: '柔性制造系统 (FMS)：如何一条线生产 100 种产品？',
  slug: 'flexible-manufacturing-system-mass-customization',
  tldr: '“小单快返”倒逼制造业告别刚性产线。柔性制造系统 (FMS) 的本质是降低“切换成本”。通过模块化工艺、AGV 物流和混流排产算法，实现从“以产定销”到“以销定产”的飞跃。',
  publishedAt: new Date().toISOString(),
  authors: ['674f14167098410292723c6f'],
  meta: {
    title: '柔性制造系统 (FMS) 实战解析：多品种小批量的生存之道 | 泊冉软件',
    description: 'B2B 客户需求越来越碎片化，传统大批量生产线如何转型？本文深度解析柔性制造系统的三大支柱：SMED 快速换模、模块化工艺及高级排产（APS）。',
  },
  atomicFAQs: [
    { "question": "什么是柔性制造系统（FMS）？", "answer": "Simple Definition: 一条能“随时变脸”的生产线。上一分钟生产 A 产品，下一分钟就能生产 B 产品，且不需要停机太久调整。" },
    { "question": "FMS 和传统流水线的根本区别？", "answer": "传统流水线追求“规模效应”（量大成本低）；FMS 追求“范围效应”（品种多成本不增）。FMS 牺牲了一点点节拍速度，换来了极大的市场响应速度。" },
    { "question": "实现柔性制造必须买机器人吗？", "answer": "误区。机器人的柔性其实不如人。真正的柔性来自“软件”和“工装”。比如快换夹具（SMED）和参数化的 CNC 程序，比买几个机械臂重要得多。" },
    { "question": "什么是 SMED（一分钟快速换模）？", "answer": "Single Minute Exchange of Die。这是柔性制造的基础。通过将“内部作业”（停机做的事）转化为“外部作业”（不停机做的事），把换型时间从几小时缩短到几分钟。" },
    { "question": "混流生产（Mixed Model）怎么防错？", "answer": "靠 RFID 和 SOP。产品走到工位，RFID 告诉设备“我是 A 款”，设备自动调用 A 款程序；屏幕显示 A 款作业指导书。杜绝“张冠李戴”。" },
    { "question": "中小企业适合上 FMS 吗？", "answer": "非常适合。因为中小企业的订单本来就碎。不需要全自动 FMS，可以先做“单元化生产（Cell）”，把机床围成 U 型，单人多机，这就是低成本的柔性。" },
    { "question": "FMS 对排产有什么要求？", "answer": "不再是 Excel 能搞定的了。必须上 APS（高级计划排程）。因为 100 种产品混在一起，甚至还要考虑颜色、材质的共用以减少清洗，计算量是指数级的。" },
    { "question": "什么是“模块化设计”？", "answer": "产品研发端的柔性。像搭积木一样设计产品。底盘是通用的，外壳是定制的。70% 的标准件 + 30% 的定制件 = 100% 的个性化体验。" },
    { "question": "服装行业（SHEIN 模式）的柔性是怎么做到的？", "answer": "极致的供应链协同。面料提前备好，版型数字化。一旦前端爆款，后端只做“裁剪+缝纫”的最后一步组装。" },
    { "question": "柔性制造会增加成本吗？", "answer": "初期设备投入会增加，单品制造成本可能略高于大规模生产。但考虑到库存积压风险的降低（卖不掉才是最大的成本），综合利润率FMS 完胜。" }
  ],
  decisionFramework: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          tag: 'h3',
          children: [{ type: 'text', text: '柔性与效率平衡矩阵', version: 1 }],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "判断准则：", "format": 1, "version": 1 },
            { "type": "text", "text": "如果产品生命周期 < 1 年且 SKU > 50 个，必须上 FMS；如果产品是矿泉水、标准螺丝这种十年不变的爆品，坚持刚性专机生产，别折腾柔性。", "version": 1 }
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
    { "condition": "3C 电子、家电、定制家具等个性化需求强烈的行业", "type": "suitable" },
    { "condition": "多品种、小批量、交期极短的零部件加工企业", "type": "suitable" },
    { "condition": "大宗原材料（发电、炼油）行业", "type": "unsuitable" },
    { "condition": "年产量百万级且款式单一的单品制造", "type": "unsuitable" }
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
              text: '福特 T 型车时代有一句名言：“顾客可以要任何颜色的车，只要它是黑色的。”但在今天，如果你告诉客户只有黑色，客户转身就会去找你的竞争对手。市场正在从“卖方市场”全面转向“买方市场”，逼着工厂拆掉围墙，拥抱柔性。',
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
          children: [{ "type": "text", "text": "刚性生产线的噩梦：换型", "version": 1 }],
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
              text: '在传统的刚性产线上，换产一次简直是“脱层皮”。停机、拆模具、洗机器、调试首件……半天时间就过去了。为了分摊这半天的损失，工厂只能要求销售：“每个订单最少 5000 件起订”。',
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
              text: "可以现在的订单是：500 件红色，200 件蓝色，还有 50 件要加 Logo。接，是亏本；不接，是等死。",
              "format": 1,
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
          children: [{ "type": "text", "text": "FMS 的三大黑科技", "version": 1 }],
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
                { "type": "text", "text": "通用化载具与零点定位", "format": 1, "version": 1 },
                { "type": "text", "text": " — 不管产品千奇百怪，底座（托盘）是一样的。机器手只认托盘，抓起来就干。这就是“以不变应万变”。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1,
              value: 1
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "AGV 柔性物流", "format": 1, "version": 1 },
                { "type": "text", "text": " — 拆掉固定的传送带。AGV 小车像出租车一样，把产品随时送到空闲的工位。A 工序堵了，马上绕道 B 工序。路径是动态规划的。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1,
              value: 2
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "数字孪生驱动的 APS", "format": 1, "version": 1 },
                { "type": "text", "text": " — 人的脑子算不过来混流排产。必须靠算法模拟：“如果把这三个蓝色订单拼在一起生产，能省下 20 分钟换色时间。”", "version": 1 }
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
          "children": [{ "type": "text", "text": "案例：某定制家具厂的“零库存”奇迹", "version": 1 }],
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
              "text": "背景：全屋定制行业，板材尺寸完全不一样，每块板都有唯一的 ID。",
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
              "text": "实施：泊冉协助其打通了 CAD 设计软件与 CNC 开料机。设计师画完图，数据直接生成加工代码（G-Code）下发机床。板材上贴二维码，封边机扫码自动调整宽度。",
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
              "text": "结果：1 条产线每天混流生产 80 个家庭的订单，出错率为 0。从下单到发货缩短至 7 天，成品库存真正做到了“零仓库”。",
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
          "children": [{ "type": "text", "text": "柔性化改造 Checklist", "version": 1 }],
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "version": 1
        },
        {
          "type": "list",
          "listType": "bullet",
          "children": [
            { "type": "listitem", "children": [{ "type": "text", "text": "是否统计过目前的平均换型时间（Changeover Time）？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 1 },
            { "type": "listitem", "children": [{ "type": "text", "text": "产品设计是否遵循了“标准化接口”原则？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 2 },
            { "type": "listitem", "children": [{ "type": "text", "text": "是否在关键工位配备了能显示 SOP 的数字终端？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 3 },
            { "type": "listitem", "children": [{ "type": "text", "text": "你的刀具库/模具库是否够大且支持自动调用？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 4 },
            { "type": "listitem", "children": [{ "type": "text", "text": "是否打通了销售选配器（CPQ）到生产 BOM 的数据链？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 5 }
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
