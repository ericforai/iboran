import 'dotenv/config'
import { getPayload } from 'payload'
import configPromise from '../../src/payload.config'

const POST_DATA = {
  title: '打造韧性供应链：YonBIP 供应链云部署方案与采购协同案例',
  slug: 'yonbip-supply-chain-management-deployment',
  tldr: '供应链不仅是“买东西”，更是企业的生命线。YonBIP 供应链云实现了从 SRM（供应商协同）到 WMS（智能仓储）再到 VMI（库存共享）的全链路闭环。本文详解供应链云的部署架构，以及如何通过数字化手段降低“断供”风险。',
  publishedAt: new Date().toISOString(),
  authors: ['674f14167098410292723c6f'],
  meta: {
    title: 'YonBIP供应链云部署方案_采购协同SRM_存货核算_泊冉软件',
    description: '您的供应链够敏捷吗？YonBIP 供应链云帮助企业构建 SRM 采购协同平台，实现询比价透明化、订单执行可视化。',
  },
  atomicFAQs: [
    { "question": "供应链云能解决什么痛点？", "answer": "主要解决“信息不对称”。过去采购员打电话催货，供应商说发了，其实没发。现在通过 SRM 门户，供应商在线确认订单、在线预约送货。企业这边实时看到物流轨迹，消灭了“黑箱操作”。" },
    { "question": "什么是“社会化供应链”？", "answer": "这是 YonBIP 的特色。它不仅连接你的一级供应商，还能穿透到二级、三级供应商。甚至能连接京东、震坤行等电商平台，实现“企业购”超市化采购，自动比价下单。" },
    { "question": "库存核算太复杂，总是算不准成本，怎么办？", "answer": "这是通病。YonBIP 支持“全月一次加权平均”、“移动平均”、“个别计价”等多种核算方式。关键是支持“出库暂估”和“采购发票自动结算”，保证月底成本必定算准。" },
    { "question": "VMI（供应商管理库存）支持吗？", "answer": "完美支持。我们可以设置“寄售仓”。供应商把货放到你仓库，物权还是他的。你用多少，系统自动结算多少。这样你的库存资金占用几乎为零。" },
    { "question": "供应链云实施周期多久？", "answer": "因为涉及到外部供应商的配合（开账号、培训），周期通常在 2-3 个月。我们建议先上“采购云”，把供应商拉上线；再上“库存云”，优化内部管理。" },
    { "question": "和 WMS（仓储系统）怎么对接？", "answer": "YonBIP 自带 WMS 模块，支持 PDA 扫码、货位管理、AGV 调度。如果一定要接第三方的 WMS，我们也有标准 API 接口。" },
    { "question": "数据安全怎么保证？供应商能看到我的底价吗？", "answer": "看不到。系统有严格的权限隔离。供应商只能看到发给他的订单，看不到你给别人的价格。招投标过程更是全加密的。" },
    { "question": "对采购员会有什么影响？", "answer": "采购员从“跟单员”变成了“资源管理者”。以前 80% 时间在打电话催货、录单子；现在 80% 时间在分析数据、开发优质供应商。" }
  ],
  decisionFramework: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          tag: 'h3',
          children: [{ type: 'text', text: '供应链成熟度自测', version: 1 }],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "Level 1（被动型）：", "format": 1, "version": 1 },
            { "type": "text", "text": " 缺货了才去买。库存积压严重。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "Level 2（计划型）：", "format": 1, "version": 1 },
            { "type": "text", "text": " 有 MRP 运算，根据销售预测来采购。但准确率依赖人工经验。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "Level 3（协同型 - 目标）：", "format": 1, "version": 1 },
            { "type": "text", "text": " 与供应商系统互通。你的生产计划自动变成供应商的备货计划。库存维持在最低安全水位。", "version": 1 }
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
    { "condition": "供应商数量超过 50 家，管理混乱的制造企业", "type": "suitable" },
    { "condition": "MRO（备品备件）采购杂乱无章，希望能像淘宝一样买东西的企业", "type": "suitable" },
    { "condition": "采购完全靠老板一个电话搞定的小作坊", "type": "unsuitable" },
    { "condition": "涉及灰色采购（回扣），抗拒透明化的企业（系统上不了）", "type": "unsuitable" }
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
              text: '传统的 ERP 把供应链看作是企业内部的事：采购-入库-出库。但在 YonBIP 的视角里，供应链是无边界的。它要整合上游的资源，为我所用。',
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
          children: [{ "type": "text", "text": "SRM：让供应商为你打工", "version": 1 }],
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
              text: 'SRM（供应商关系管理）是 YonBIP 供应链云的皇冠。它把供应商拉到了你的战壕里。',
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
                { "type": "text", "text": "寻源协同：", "format": 1, "version": 1 },
                { "type": "text", "text": " 以前询价发邮件，供应商回 Excel，很难比价。现在系统一键发标，供应商在线报价。系统自动生成“比价单”，谁贵谁便宜一目了然。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "质量协同：", "format": 1, "version": 1 },
                { "type": "text", "text": " 发现来料不良？质检员拍照上传，供应商立刻收到“整改通知单”。不整改就不付款。倒逼供应商提高质量。", "version": 1 }
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
          children: [{ "type": "text", "text": "采购商城：把权力关进笼子", "version": 1 }],
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
              text: '对于办公用品、劳保用品这些非生产物料，YonBIP 提供类似京东界面的“内部商城”。',
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
            { "type": "text", "text": "怎么用？", "format": 1, "version": 1 },
            { "type": "text", "text": " 员工登录系统，搜索“打印纸”，看到公司协议价是 18 元/包（某东卖 25 元），直接下单。部门经理审批一下，货就送到了。财务月结一张大发票。既方便，又合规。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'heading',
          tag: 'h2',
          children: [{ "type": "text", "text": "库存优化的终极武器：多地点库存", "version": 1 }],
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
              text: '如果集团有 5 个仓库，经常是 A 仓爆满，B 仓缺货。YonBIP 支持“全局库存可视”。',
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
              text: '销售员下单时，系统自动计算：B 仓没货，但 A 仓有，且运费最便宜，那就从 A 仓发货。这叫“智能寻源”。大大降低了整体库存水位。',
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
          "children": [{ "type": "text", "text": "泊冉的避坑指南", "version": 1 }],
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
              "text": "1. 别搞太复杂：",
              "format": 1,
              "version": 1
            },
            {
              "type": "text",
              "text": " 刚上线时，供应商可能不会用。流程要尽量简单。不要强迫供应商填一堆非必需的字段。",
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
              "text": "2. 数据清洗是前提：",
              "format": 1,
              "version": 1
            },
            {
              "type": "text",
              "text": " 如果你的物料编码还在“一物多码”，那 SRM 一定跑不通。上线前，必须把物料档案洗干净。",
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
