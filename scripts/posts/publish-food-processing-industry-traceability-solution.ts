import 'dotenv/config'
import { getPayload } from 'payload'
import configPromise from '../../src/payload.config'

const POST_DATA = {
  title: '食品工厂的“透明化”革命：基于 YonBIP 的 HACCP 与全链路追溯',
  slug: 'food-processing-industry-traceability-solution',
  tldr: '食品安全大于天。对于食品加工企业来说，如何通过数字化手段落实 HACCP 体系？如何应对商超越来越严苛的审厂要求？本文解析用友 BIP 食品行业版如何打通“田间到餐桌”的数据链。',
  publishedAt: new Date().toISOString(),
  authors: ['674f14167098410292723c6f'],
  meta: {
    title: '食品加工行业快速实施方法论_HACCP_批次追溯_泊冉软件',
    description: '面包用哪批面粉做的？过敏原标注了吗？保质期还有几天？泊冉软件为您详解食品行业 ERP 的关键场景：配方保密、投料防错与整箱追溯。',
  },
  atomicFAQs: [
    { "question": "食品行业 ERP 最重要的是什么？", "answer": "两个词：效期（Shelf Life）和 追溯（Traceability）。不仅要追溯成品，还要追溯到包材（内袋、外箱）。一旦发现包材油墨超标，要能立刻召回所有相关批次产品。" },
    { "question": "HACCP（危害分析关键控制点）怎么在系统里管？", "answer": "我们将 CCP 点（关键控制点）植入生产工单。例如：杀菌工序。系统要求工人必须录入“杀菌温度”和“杀菌时间”。如果数据不达标（如温度 < 121℃），系统禁止流转到下一道包装工序。" },
    { "question": "配方经常变，怎么管？", "answer": "食品行业的配方受成本影响很大（比如糖涨价了，改用代糖）。YonBIP 支持“研发配方”转“生产配方”。支持配方版本管理（V1.0, V1.1）。生产时严格按生效版本的 BOM 领料。" },
    { "question": "能对接电子秤吗？", "answer": "能。配料间是防错的核心。系统连接高精度电子秤。工人配料时，屏幕显示“需称重 5.0kg”；实际称重差超过 ±0.05kg，系统报警并锁定，防止工人手抖多加或少加添加剂。" },
    { "question": "如何管理边角料和回用料？", "answer": "切下来的面包边、饼干碎，系统支持定义为“回用料”。下次投料时，按一定比例（如 5%）掺入新料中。系统会自动计算成本抵扣。" },
    { "question": "保质期管理能做到多细？", "answer": "支持“发货效期控制”。比如给沃尔玛供货，合同规定必须是生产日期 1/3 以内的货；给拼多多供货，可以是 1/2 以内的货。系统发货时自动匹配，防止因效期已过被商超拒收罚款。" },
    { "question": "实施要多久？", "answer": "我们有“食品行业预配置包”。预置了烘焙、肉制品、饮料行业的标准流程。最快 45 天可上线。" },
    { "question": "支持全产业链吗？从养殖开始？", "answer": "支持。用友有专门的“农业大脑”，可以管理种植和养殖基地。实现真正的从种子到罐头的全生命周期管理。" }
  ],
  decisionFramework: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          tag: 'h3',
          children: [{ type: 'text', text: '食品企业合规性自测', version: 1 }],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "合规点 1：过敏原管理", "format": 1, "version": 1 },
            { "type": "text", "text": " 生产过花生制品的产线，清洗记录是否在案？ -> 解决：清场记录电子化。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "合规点 2：批次一码到底", "format": 1, "version": 1 },
            { "type": "text", "text": " 成品外箱的条码，能否反查出面粉的供应商？ -> 解决：全链路赋码。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "合规点 3：添加剂实名领用", "format": 1, "version": 1 },
            { "type": "text", "text": " 硝酸盐等敏感添加剂，是否双人双锁？ -> 解决：智能柜对接。", "version": 1 }
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
    { "condition": "给肯德基、麦当劳、盒马做代工的食品工厂（必上）", "type": "suitable" },
    { "condition": "烘焙连锁的中央工厂", "type": "suitable" },
    { "condition": "农贸市场的现做现卖摊位（不适用）", "type": "unsuitable" },
    { "condition": "完全手工制作的传统作坊（非标化，很难上系统）", "type": "unsuitable" }
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
              text: '食品工业的利润薄如刀片。如何在保证绝对安全的前提下降低成本？数字化是唯一的出路。',
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
          children: [{ "type": "text", "text": "以“效期”为灵魂的库存管理", "version": 1 }],
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
              text: '在食品仓库，先进先出（FIFO）是铁律。YonBIP 通过 PDA 扫码强制执行 FIFO。',
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
              text: '更高级的是“FEFO”（First Expired First Out，先到期先出）。系统会自动计算每个批次剩余的保质期天数。即使是后入库的货，如果效期更短（比如退货回来的），系统也会指示叉车先把它发出去。',
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
          children: [{ "type": "text", "text": "HACCP 数字化落地方案", "version": 1 }],
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
              text: '很多企业的 HACCP 手册是锁在柜子里的。YonBIP 把它变成了工单里的必填项。',
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
              children: [{ "type": "text", "text": " 关键控制点（CCP）：如金属检测。系统对接金检机。检测记录自动上传。如果发现金属异物，系统自动标记该箱产品为“不合格”，并在系统内锁定。", "version": 1 }],
              direction: 'ltr',
              indent: 0,
              version: 1
            },
            {
              type: 'listitem',
              children: [{ "type": "text", "text": " 卫生标准操作程序（SSOP）：开工前，质检员拿着 iPad 对照 SSOP 列表检查设备清洁度，拍照上传。", "version": 1 }],
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
          "type": "heading",
          "tag": "h2",
          "children": [{ "type": "text", "text": "泊冉的食安承诺", "version": 1 }],
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
              "text": "我们深知，食品 ERP 实施不只是软件安装，更是管理流程的再造。",
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
              "text": "我们协助客户通过了 BRC、ISO22000 等多项国际认证。选择泊冉，就是选择了一位懂食品安全的数字化伙伴。",
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
