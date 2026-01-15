import 'dotenv/config'
import { getPayload } from 'payload'
import configPromise from '../../src/payload.config'

const POST_DATA = {
  title: '精益生产 vs 大规模生产：矛盾吗？',
  slug: 'lean-vs-mass-production',
  tldr: '很多人认为精益生产是“小作坊模式”，大规模生产是“工业化模式”。其实，现代顶级工厂（如丰田、特斯拉）都是“大规模精益”。精益的灵魂是“流动”，大规模的灵魂是“标准”。两者结合，就是降本增效的终极答案。',
  publishedAt: new Date().toISOString(),
  authors: ['674f14167098410292723c6f'],
  meta: {
    title: '精益生产与大规模生产的融合之道 | 泊冉软件',
    description: 'B2B 制造企业如何平衡效率与柔性？解析 TPS（丰田生产方式）与福特模式的优劣，探讨大规模定制（Mass Customization）的数字化落地路径。',
  },
  atomicFAQs: [
    { "question": "什么是精益生产（Lean Production）？", "answer": "起源于丰田（TPS）。核心思想是“消除一切浪费”。库存是浪费、搬运是浪费、等待是浪费。只做客户愿意买单的价值增值过程。" },
    { "question": "什么是大规模生产（Mass Production）？", "answer": "起源于福特。核心思想是“标准化与互换性”。通过极致的分工和流水线，把单一产品的成本压到极致。" },
    { "question": "两者冲突吗？", "answer": "在过去冲突（效率 vs 柔性）。但在数字化时代，两者融合了。通过软件控制，我们可以在一条大规模流水线上，实现单件流的精益排产。这就叫“大规模定制”。" },
    { "question": "JIT（准时制）在中国真的行得通吗？", "answer": "很难完全照搬。中国供应链的诚信度和物流稳定性参差不齐。建议采用“缓冲库存（Buffer）”策略，而不是追求绝对的零库存。" },
    { "question": "自动化程度越高越精益吗？", "answer": "大错特错。如果流程是错误的，自动化只是在“加速制造垃圾”。精益强调“先优化流程，再固化软件，最后上自动化”。" },
    { "question": "数字化系统如何支持精益？", "answer": "比如电子看板（E-Kanban）替代纸质卡片；Andon（安灯）系统实现异常呼叫；MES 统计 OEE 帮助识别瓶颈。" },
    { "question": "什么是“单件流（One Piece Flow）”？", "answer": "精益的理想状态。做一个、传一个、查一个。而不是做一批、传一批。单件流能最快暴露质量问题，避免批量报废。" },
    { "question": "中小企业做精益通过什么切入？", "answer": "5S（整理、整顿、清扫、清洁、素养）。这是基本功。连工具都找不到的工厂，上什么系统都是白搭。" },
    { "question": "库存多少才合理？", "answer": "没有标准答案。库存是“掩盖问题的水面”。精益的逻辑是：主动降低库存水位，把水底的礁石（问题）暴露出来，逐个击碎。" },
    { "question": "泊冉的精益数字化方案包括什么？", "answer": "我们提供以 MES 为核心的精益套件：Andon异常管理、电子看板、OEE 分析以及物料拉动系统（Pull System）。" }
  ],
  decisionFramework: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          tag: 'h3',
          children: [{ type: 'text', text: '生产模式选择矩阵', version: 1 }],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "大批量 + 少品种 =", "format": 1, "version": 1 },
            { "type": "text", "text": " 自动化专机线（福特模式）。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "小批量 + 多品种 =", "format": 1, "version": 1 },
            { "type": "text", "text": " 单元化精益生产（丰田模式）。", "version": 1 }
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
    { "condition": "离散制造（电子、机械、家具）", "type": "suitable" },
    { "condition": "受市场波动影响大、订单碎片化的企业", "type": "suitable" },
    { "condition": "流程制造（炼钢、发电）工艺不可中断", "type": "unsuitable" },
    { "condition": "纯手工艺术品或极度个性化的高定作坊", "type": "unsuitable" }
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
              text: '在制造业管理界，有两个门派长期对立：一派信奉亨利·福特的“大规模生产”，追求极致的效率和低成本；另一派信奉大野耐一的“精益生产”，追求极致的柔性和零浪费。',
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
          children: [{ "type": "text", "text": "误区：精益 = 抠门？", "version": 1 }],
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
              text: '很多老板以为精益生产就是“省钱”：不发手套、不修设备、少雇人。这是对精益最大的误解。精益（Lean）的本意是“肌肉强健，没有脂肪”。',
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
              text: "精益眼中的 7 大浪费：",
              "format": 1,
              "version": 1
            },
            {
              "type": "text",
              "text": " 过量生产（罪魁祸首）、库存、等待、搬运、过度加工、动作、缺陷。其中“过量生产”是最严重的，因为它掩盖了其它的浪费。",
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
          children: [{ "type": "text", "text": "当大规模遇上数字化：Mass Customization", "version": 1 }],
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
              text: '今天的市场需求既要“大规模生产的价格”，又要“精益生产的个性化”。这看似矛盾，实则可通过数字化解题。',
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
                { "type": "text", "text": "模块化的产品架构", "format": 1, "version": 1 },
                { "type": "text", "text": " — 像乐高一样。底盘是大规模生产的（降本），上层积木是精益生产的（满足个性）。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1,
              value: 1
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "数字化的拉动系统", "format": 1, "version": 1 },
                { "type": "text", "text": " — 以前靠看板卡片，现在靠 MES 电子看板。只有当后道工序发出了需求，前道工序才开始干活。不生产任何多余的零件。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1,
              value: 2
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "安灯（Andon）系统", "format": 1, "version": 1 },
                { "type": "text", "text": " — 赋予每个工人“拉闸停线”的权力。发现缺陷立即停线，全员解决。虽牺牲了瞬间的效率，但保证了 100% 的直通率。", "version": 1 }
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
          "children": [{ "type": "text", "text": "案例：某家电巨头的“黑灯工厂”", "version": 1 }],
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
              "text": "事实：并不是没有人的工厂就是精益的。该工厂在早期过度追求自动化，买了很多机械臂，结果因为不同型号切换太慢，机械臂经常停在那里晒太阳。",
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
              "text": "改进：泊冉顾问建议拆除部分刚性传送带，改为 AGV 柔性岛。根据订单量动态调整 AGV 路线。虽然看上去没那么壮观了，但坪效（每平米产出）提升了 30%。",
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
          "children": [{ "type": "text", "text": "精益数字化 Checklist", "version": 1 }],
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "version": 1
        },
        {
          "type": "list",
          "listType": "bullet",
          "children": [
            { "type": "listitem", "children": [{ "type": "text", "text": "是否有 5S 现场管理标准并每日执行？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 1 },
            { "type": "listitem", "children": [{ "type": "text", "text": "是否统计并分析了OEE（设备综合效率）中的六大损失？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 2 },
            { "type": "listitem", "children": [{ "type": "text", "text": "是否建立了快速换模（SMED）的操作规范？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 3 },
            { "type": "listitem", "children": [{ "type": "text", "text": "物流周转箱是否实现了标准化和循环使用？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 4 },
            { "type": "listitem", "children": [{ "type": "text", "text": "是否通过价值流图（VSM）识别了流程中的断点？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 5 }
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
