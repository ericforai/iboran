import 'dotenv/config'
import { getPayload } from 'payload'
import configPromise from '../../src/payload.config'

const POST_DATA = {
  title: 'MES 实施陷阱：上了很重，不上很痛，到底怎么办？',
  slug: 'mes-implementation-dilemma',
  tldr: '制造执行系统（MES）被誉为工厂的大脑，但也是实施失败率最高的工业软件之一。中小企业在面对 MES 时常常陷入两难：上传统 MES 太贵太重，维护不动；不上 MES 又无法满足客户对追溯性的要求。本文给出“轻量化 MES”的破局之道。',
  publishedAt: new Date().toISOString(),
  authors: ['674f14167098410292723c6f'],
  meta: {
    title: 'MES 系统避坑指南：SaaS 化与轻量化的选择 | 泊冉软件',
    description: 'B2B 制造业数字化转型痛点解析：如何用低成本、快部署的轻量化 MES 解决生产透明化难题，拒绝“僵尸系统”。',
  },
  atomicFAQs: [
    { "question": "什么是 MES（制造执行系统）？", "answer": "Manufacturing Execution System。它夹在 ERP（计划层）和 PLC（控制层）中间。ERP 告诉工厂“生产什么”，PLC 控制机器“怎么动”，而 MES 负责记录“生产得怎么样”（如多少个次品、谁做的、花了多久）。" },
    { "question": "为什么很多工厂的 MES 成了摆设？", "answer": "两个原因：1. 数据录入太繁琐。为了系统而系统，增加了工人负担；2. 流程太僵化。工厂的实际生产千变万化（插单、改制），但系统改起来要半个月。" },
    { "question": "中小企业适合上什么样的 MES？", "answer": "轻量化、模块化的 SaaS MES。不需要买服务器，按年付费，即开即用。只抓核心痛点（如报工、追溯），不要追求大而全。" },
    { "question": "MES 和 ERP 的边界在哪里？", "answer": "ERP 管“钱”和“宏观资源”（订单、库存）；MES 管“物”和“微观执行”（工序、机台）。ERP 精确到“天”，MES 精确到“秒”。" },
    { "question": "怎么解决“工人不愿意扫码录入”的问题？", "answer": "把录入变成“顺手”的事。比如：把扫码枪固定在工位上，做完一个产品顺手晃一下；或者直接从机器取数，尽量减少人工操作。" },
    { "question": "MES 能带来什么直接收益？", "answer": "1. 追溯防呆（防止发错货）；2. 实时进度（老板在手机上能看到做没做完）；3. 绩效公平（计件工资自动算出来，工人不吵架）。" },
    { "question": "实施 MES 的第一步是什么？", "answer": "理顺工艺流程。如果线下的流程是乱的，上系统只能把混乱“固化”和“加速”。先做到标准化，再做数字化。" },
    { "question": "SaaS 版 MES 数据安全吗？", "answer": "对于 99% 的中小企业来说，阿里云/腾讯云的安全级别比你自己的机房高 100 倍。数据存在云端反而更不容易丢。" },
    { "question": "定制开发好还是标准版好？", "answer": "能用标准版绝对不用定制。定制意味着高昂的维护成本和无法升级。如果流程和软件不匹配，先改流程适应软件。" },
    { "question": "泊冉的 MES 方案有什么特色？", "answer": "“乐高式”部署。我们将报工、质检、设备、看板拆分成独立 APP。企业可以先花几千块买个“电子看板”，觉得好用再买“质量追溯”。" }
  ],
  decisionFramework: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          tag: 'h3',
          children: [{ type: 'text', text: 'MES 选型决策树', version: 1 }],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "情况 A：你有 500 台设备，且需要控制毫秒级参数。", "format": 1, "version": 1 },
            { "type": "text", "text": " -> 传统重型 MES（西门子 Opcenter / 罗克韦尔 FTPC）。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "情况 B：你是组装厂，主要管人、管物料追溯。", "format": 1, "version": 1 },
            { "type": "text", "text": " -> 轻量化 SaaS MES（黑湖 / 泊冉）。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "情况 C：你只有 3 台注塑机。", "format": 1, "version": 1 },
            { "type": "text", "text": " -> 别上 MES，用钉钉低代码搭个表单就够了。", "version": 1 }
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
    { "condition": "客户（如苹果、特斯拉）强制要求全流程追溯的代工厂", "type": "suitable" },
    { "condition": "多品种、小批量、频繁换线的离散制造", "type": "suitable" },
    { "condition": "黑箱式连续生产（如炼油），中间没有人工干预", "type": "unsuitable" },
    { "condition": "管理混乱，连BOM表都没有的作坊", "type": "unsuitable" }
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
              text: '在制造业 IT 圈流传一句话：“上 MES 是找死，不上 MES 是等死。”这句话虽然夸张，但道出了 MES 实施的艰难。ERP 解决的是“办公室”的问题，而 MES 解决的是“车间”的问题。车间环境之复杂、人员素质之参差、突发状况之多，是办公室无法比拟的。',
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
          children: [{ "type": "text", "text": "传统 MES 为什么“重”？", "version": 1 }],
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
              text: '传统的 MES 系统往往是从大型车企衍生出来的。它们功能强大，但也极其笨重。',
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
                { "type": "text", "text": "实施周期长：", "format": 1, "version": 1 },
                { "type": "text", "text": " 动辄半年一年。还要铺设复杂的服务器、工业网络。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "对人员要求高：", "format": 1, "version": 1 },
                { "type": "text", "text": " 需要配备专门的 IT 运维团队。一个参数配错，全线停摆。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "造价昂贵：", "format": 1, "version": 1 },
                { "type": "text", "text": " 软件许可费 + 实施费 + 硬件费，百万起步。", "version": 1 }
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
          children: [{ "type": "text", "text": "新一代选择：轻量化 MES", "version": 1 }],
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
              text: '随着云计算和移动互联网的普及，“轻量化 MES”应运而生。它的逻辑完全变了：',
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
                { "type": "text", "text": "手机就是终端：", "format": 1, "version": 1 },
                { "type": "text", "text": " 不需要装昂贵的工业平板工控机。班组长用自己的手机装个 APP 就能报工、查单。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1,
              value: 1
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "云端部署：", "format": 1, "version": 1 },
                { "type": "text", "text": " 没有服务器维护成本。账号一开就能用。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1,
              value: 2
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "敏捷迭代：", "format": 1, "version": 1 },
                { "type": "text", "text": " 像搭积木一样。今天想管库存，拖个库存模块；明天想管设备，加个设备模块。", "version": 1 }
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
          "children": [{ "type": "text", "text": "案例：一家注塑厂的逆袭", "version": 1 }],
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
              "text": "困境：老板每天都要去车间数箱子，才能知道做完了多少。到了月底算工资，工人和财务经常因为计件数吵架。",
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
              "text": "变革：泊冉为其部署了轻量化 MES。在每台机器旁放一个二维码。工人做完一箱，扫一下码，填个数量（或者连接电子秤自动获取）。",
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
              "text": "成效：老板打开手机小程序，实时看到每台机器在做什么、做了多少、OEE 是多少。工资日报自动推送给工人，再也没吵过架。",
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
          "children": [{ "type": "text", "text": "MES 实施 Checklist", "version": 1 }],
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "version": 1
        },
        {
          "type": "list",
          "listType": "bullet",
          "children": [
            { "type": "listitem", "children": [{ "type": "text", "text": "是否整理好了准确的物料清单（BOM）和工艺路线？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 1 },
            { "type": "listitem", "children": [{ "type": "text", "text": "车间 Wi-Fi 信号是否覆盖良好？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 2 },
            { "type": "listitem", "children": [{ "type": "text", "text": "是否有一位懂业务、有威望的项目经理（PM）牵头？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 3 },
            { "type": "listitem", "children": [{ "type": "text", "text": "是否准备好了标签打印机和条码枪？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 4 },
            { "type": "listitem", "children": [{ "type": "text", "text": "是否与工人做好了沟通，消除了他们的抵触情绪？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 5 }
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
