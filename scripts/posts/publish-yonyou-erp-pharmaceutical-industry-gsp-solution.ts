import 'dotenv/config'
import { getPayload } from 'payload'
import configPromise from '../../src/payload.config'

const POST_DATA = {
  title: '医药行业数字化：如何通过用友 ERP 实现 GSP 合规与全流程追溯',
  slug: 'yonyou-erp-pharmaceutical-industry-gsp-solution',
  tldr: '医药行业“严监管”常态化，GSP（药品经营质量管理规范）认证是企业的生死线。普通 ERP 无法满足“首营管理”、“批次效期强控”、“冷链追溯”等特殊要求。本文解析用友 BIP 医药行业专版如何帮助药企低成本过 GSP 认证。',
  publishedAt: new Date().toISOString(),
  authors: ['674f14167098410292723c6f'],
  meta: {
    title: '医药行业用友实施方案_GSP认证管理_医药ERP_泊冉软件',
    description: '药企选 ERP 必须看这几点：首营审批流、近效期预警、双人验收。泊冉软件提供符合新版 GSP 标准的用友医药行业解决方案。',
  },
  atomicFAQs: [
    { "question": "用友 ERP 能直接过 GSP 认证吗？", "answer": "可以。用友 U8 Cloud 和 YonSuite 都有“医药流通专版”，系统内置了药监局要求的 100+ 个质量控制点（如：收货双人验收录入、温湿度记录接口、特殊药品销售限购）。我们还可以协助您出具《计算机系统验证报告》。" },
    { "question": "什么是“首营管理”？系统怎么支持？", "answer": "首营是指“首次经营的药品”或“首次合作的企业”。系统强制要求：在发生业务前，必须先在系统里上传证照（营业执照、生产许可证、GMP 证书），经质量部审批通过后，才能下订单。证照过期自动冻结交易。" },
    { "question": "批号和效期管理能做到多细？", "answer": "非常细。支持“指定批号出库”（按先进先出或近效期先出）。发货时，如果该批号药品有效期不足 6 个月（可配置），系统自动拦截禁止发货，防止客户退货。" },
    { "question": "冷链药品怎么管？", "answer": "YonBIP 支持对接冷链运输箱的温度传感器数据。运输过程中温度超标（如 > 8℃），系统自动报警，并在收货环节提示“拒收”风险。" },
    { "question": "两票制对财务有什么影响？", "answer": "“两票制”导致药企的销售费用激增（以前是底价代理，现在是高开）。YonSuite 的“营销费用管理”模块，可以把每一笔推广费精准分摊到每一个代表、每一个终端医院，确保费用的合规性。" },
    { "question": "中药饮片企业适用吗？", "answer": "适用。中药还需要管理“产地”、“炮制方法”等属性。用友系统支持多维度的物料属性定义。" },
    { "question": "实施这个系统要多久？费用呢？", "answer": "医药版比通用版实施要复杂，因为要配合 GSP 认证的时间点。通常周期 3-5 个月。费用在 50 万-100 万之间（含 GSP 咨询）。" },
    { "question": "旧数据（如 10 年前的批号记录）能迁移吗？", "answer": "法规要求药品记录至少保存 5 年（疫苗更长）。我们提供数据归档服务，把历史数据迁移到“冷存储”中，既满足合规查询，又不影响新系统速度。" }
  ],
  decisionFramework: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          tag: 'h3',
          children: [{ type: 'text', text: '医药 ERP 选型红线', version: 1 }],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "红线 1：不支持“双计量单位”", "format": 1, "version": 1 },
            { "type": "text", "text": " -> Pass。中药材经常涉及“按包入库，按克出库”，换算不准会死人。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "红线 2：没有“质量管理（QM）”独立模块", "format": 1, "version": 1 },
            { "type": "text", "text": " -> Pass。GSP 要求质量部拥有一票否决权，不能依附于仓库模块。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "红线 3：不能对接“码上放心”追溯平台", "format": 1, "version": 1 },
            { "type": "text", "text": " -> Pass。国家药监局强制要求扫码上传数据。", "version": 1 }
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
    { "condition": "药品批发、零售连锁、中药饮片生产企业", "type": "suitable" },
    { "condition": "三类医疗器械经营企业（骨科耗材、IVD 等）", "type": "suitable" },
    { "condition": "街边单体药店（用个简单的进销存 SaaS 就行，没必要上 ERP）", "type": "unsuitable" },
    { "condition": "只做也是保健食品（非蓝帽子），不需要过 GSP 的企业（用标准版即可）", "type": "unsuitable" }
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
              text: '医药行业是受监管最严的行业之一。一张 GSP 证书被吊销，企业就关门了。所以，医药企业的 ERP 不仅仅是管理工具，更是“合规护盾”。',
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
          children: [{ "type": "text", "text": "GSP 核心痛点：质量控制点前置", "version": 1 }],
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
              text: '传统手工管理模式下，经常出现“货先到了，首营审批还没下来”的情况。仓库管理员为了赶进度，先收货再补手续。这在飞检（飞行检查）中一抓一个准。',
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
            { "type": "text", "text": "用友 GSP 专版解决方案：", "format": 1, "version": 1 },
            { "type": "text", "text": " 实现了“流程硬控制”。首营资料不全 -> 无法建立供应商档案 -> 无法下采购订单 -> 无法做入库单。每一个环节都被系统锁死，想违规都难。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'heading',
          tag: 'h2',
          children: [{ "type": "text", "text": "全流程追溯：一物一码", "version": 1 }],
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
              text: '一旦发生药品不良反应召回，企业必须在 24 小时内查清：这批药卖给了谁？还有多少在库？',
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
              text: 'YonSuite 支持扫码出入库。针对特药，可以精确到“单只”管理（序列号管理）。系统一键生成《药品流向查询报表》。',
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
          children: [{ "type": "text", "text": "泊冉的实施优势：懂 GSP 的顾问", "version": 1 }],
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
              text: '我们不一样。泊冉的医药行业顾问，入职前要参加 GSP 法规培训。',
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
              children: [{ "type": "text", "text": " 我们知道“养护记录”该怎么生成。", "version": 1 }],
              direction: 'ltr',
              indent: 0,
              version: 1
            },
            {
              type: 'listitem',
              children: [{ "type": "text", "text": " 我们知道“近效期预警”该设置几个月。", "version": 1 }],
              direction: 'ltr',
              indent: 0,
              version: 1
            },
            {
              type: 'listitem',
              children: [{ "type": "text", "text": " 我们甚至可以帮您预演飞检流程。", "version": 1 }],
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
