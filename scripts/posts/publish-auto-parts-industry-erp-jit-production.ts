import 'dotenv/config'
import { getPayload } from 'payload'
import configPromise from '../../src/payload.config'

const POST_DATA = {
  title: '汽配行业数字化突围：如何应对主机厂的 JIT 供货与 16949 审核',
  slug: 'auto-parts-industry-erp-jit-production',
  tldr: '做汽车零部件太难了。上游主机厂（OEM）要求极致的 JIT（准时制）供货，迟到一分钟就要罚款；还要面对 IATF16949 的严苛审核。YonBIP 汽配行业版通过 EDI 数据集成和看板拉动生产，帮助企业在“微利”中挤出利润。',
  publishedAt: new Date().toISOString(),
  authors: ['674f14167098410292723c6f'],
  meta: {
    title: '汽配行业ERP管理系统_IATF16949认证_准时制生产(JIT)_泊冉软件',
    description: '主机厂发来预测订单怎么转生产计划？VMI 寄售仓怎么对账？泊冉软件为您提供基于用友 U8C/YonBIP 的汽配行业全流程解决方案。',
  },
  atomicFAQs: [
    { "question": "什么是“看板拉动”？", "answer": "这是丰田生产方式的核心。不按预测生产（那是推式），而是按实际消耗生产。YonBIP 支持电子看板。总装线拿走一个零件，系统自动触发前道工序生产一个零件。没有订单，绝不生产。极大降低库存（WIP）。" },
    { "question": "主机厂要求 EDI 对接，能做吗？", "answer": "必须能。大众、通用、特斯拉等主机厂都有标准的 EDI 协议。YonBIP 内置了 EDI 适配器，自动接收主机厂发布的“830 长期预测”和“862 每日要货指令”，直接生成内部生产计划，无需人工录入。" },
    { "question": "如何应对 IATF16949 审核？", "answer": "审核员最看重“可追溯性”。如果发现一个零件缺陷，必须在 4 小时内查出：哪天生产的？哪批原材料？哪个工人操作的？设备参数是多少？YonBIP 通过条码/RFID 实现了全要素记录，一键导出《追溯报告》。" },
    { "question": "模具寿命怎么管？", "answer": "系统支持“模次管理”。每生产一个产品，模具寿命自动减 1。当剩余寿命低于预警值时，系统提示“修模”或“开模”。防止因模具磨损导致产品报废。" },
    { "question": "VMI（寄售）业务怎么对账？", "answer": "很多时候货已经发到主机厂仓库了，但这不叫销售。只有主机厂把货装到车上了（上线结算），才算销售。系统支持导入主机厂的“结算清单”，自动与发货单核对，生成应收账款。" },
    { "question": "实施要多久？", "answer": "汽配行业流程复杂，通常需要 4-6 个月。" },
    { "question": "支持设备联网吗？", "answer": "支持。通过 AIoT 平台，直连注塑机、冲压机。实时采集 OEE（设备综合效率），自动统计废品率。" },
    { "question": "泊冉懂汽配吗？", "answer": "我们深耕嘉定安亭汽车城多年。服务过上汽、蔚来的一级/二级供应商。我们懂什么叫 PPAP，什么叫 8D 报告。" }
  ],
  decisionFramework: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          tag: 'h3',
          children: [{ type: 'text', text: '汽配企业数字化分级', version: 1 }],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "Level 1（黑箱工厂）：", "format": 1, "version": 1 },
            { "type": "text", "text": " 计划靠 Excel，进度靠吼。主机厂一调整计划，全厂鸡飞狗跳。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "Level 2（数据透明）：", "format": 1, "version": 1 },
            { "type": "text", "text": " 实现了条码管理。知道仓库里有多少货，知道每个工单的进度。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "Level 3（精益协同）：", "format": 1, "version": 1 },
            { "type": "text", "text": " 与主机厂 EDI 直连。内部实现 JIT 拉动。库存周转率极高。", "version": 1 }
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
    { "condition": "主机厂的一级供应商（Tier 1），面临高压交付考核", "type": "suitable" },
    { "condition": "产品种类多（如紧固件），批次管理复杂的企业", "type": "suitable" },
    { "condition": "路边汽修店（那个叫后市场，不适用这个系统）", "type": "unsuitable" },
    { "condition": "全手工装配的小作坊，没有标准化节拍的", "type": "unsuitable" }
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
              text: '在制造业的金字塔尖，汽车行业对供应链的要求是最变态的。“零库存”不仅是目标，更是生存资格。',
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
          children: [{ "type": "text", "text": "应对 JIT 的秘密武器：滚动计划", "version": 1 }],
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
              text: '传统的 MRP 是“月计划”。但在汽配行业，计划是按“分钟”变的。YonBIP 支持“滚动计划（Rolling Wave Planning）”。',
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
              text: '系统每天晚上根据主机厂最新的 EDI 预测，重新跑一次 MRP，自动调整未来 3 天的生产排程和未来 7 天的物料到货计划。以“变”应“变”。',
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
          children: [{ "type": "text", "text": "质量追溯：不仅是记录，更是防错", "version": 1 }],
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
              text: '很多系统只是记录了条码，这叫“死数据”。YonBIP 实现了“防错（Poka-yoke）”。',
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
            { "type": "text", "text": "场景：", "format": 1, "version": 1 },
            { "type": "text", "text": " 工人扫描原材料条码投料。如果该批次原材料已经过期，或者不符合该产品的 BOM 规格，PDA 立即报警并锁死机器，禁止开工。把质量隐患消灭在源头。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 1,
          version: 1
        },
        {
          "type": "heading",
          "tag": "h2",
          "children": [{ "type": "text", "text": "泊冉的实施承诺", "version": 1 }],
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
              "text": "我们不仅帮您上线系统，更帮您梳理体系。我们的顾问会对照 16949 条款，帮您检查流程漏洞。我们的目标是：让您在应对主机厂二方审核时，能自信地打开系统，展示所有的数据。",
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
