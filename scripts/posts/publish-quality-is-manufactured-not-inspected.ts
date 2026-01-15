import 'dotenv/config'
import { getPayload } from 'payload'
import configPromise from '../../src/payload.config'

const POST_DATA = {
  title: '质量管理：质量是检测出来的，还是生产出来的？',
  slug: 'quality-is-manufactured-not-inspected',
  tldr: '传统的质量管理依赖“事后检测”（QC），即把次品挑出来。而现代质量管理强调“过程控制”（QA），即不让次品产生。利用 SPC（统计过程控制）和防错系统（Poka-Yoke），将质量管控关口前移到每一道工序。',
  publishedAt: new Date().toISOString(),
  authors: ['674f14167098410292723c6f'],
  meta: {
    title: 'QA vs QC：制造业质量管理的核心变革 | 泊冉软件',
    description: '良率提升不能靠多招质检员。本文深度解析如何从“结果导向”转向“过程导向”，利用数字化手段实现全员质量管理（TQM）。',
  },
  atomicFAQs: [
    { "question": "QC（质量控制）和 QA（质量保证）有什么区别？", "answer": "QC 是“警察”，负责抓坏人（挑出次品）；QA 是“老师”，负责教人怎么不学坏（制定标准防止出错）。好的工厂应该少一点 QC，多一点 QA。" },
    { "question": "即使我有 100% 的全检，为什么客户还是投诉？", "answer": "因为检测也有漏网之鱼。且检测是被动的，它不能消除产生次品的“根本原因”。只有控制了过程（如温度、压力），才能保证结果。" },
    { "question": "什么是 SPC（统计过程控制）？", "answer": "Statistical Process Control。它不看产品好坏，而是看“过程稳不稳定”。比如：尺寸虽然都在合格范围内，但一直在变大，SPC 就会报警，提示刀具磨损，让你在出次品前就换刀。" },
    { "question": "数字化系统怎么做防错（Poka-Yoke）？", "answer": "比如：扭力扳手连上网。如果工人少拧了一圈，系统不仅报警，还锁死流水线，不让他进行下一步操作。这就是“不制造不良”。" },
    { "question": "质量追溯（Traceability）能带来什么价值？", "answer": "定责和减损。当市场出现一只召回件时，你能瞬间查出它是哪天生产的、哪批原料、谁操作的。从而只召回这 100 个，而不是召回 1 万个。" },
    { "question": "IQC（来料检验）还需要吗？", "answer": "需要，但策略变了。对优质供应商实行“免检”或“抽检”，对新供应商实行“全检”。系统根据供应商的历史评分自动调整检验策略（Skip-lot）。" },
    { "question": "质量成本（COQ）包括哪些？", "answer": "不仅包括废品损失，还包括预防成本（培训）、鉴定成本（检测设备）和外部故障成本（客户索赔）。通常“预防成本”每增加 1 元，能减少 10 元的“外部故障成本”。" },
    { "question": "如何建立全员质量文化？", "answer": "打破“质量是质检部的事”这种观念。将次品率直接挂钩生产线班组长的绩效。让生产的人对质量负责。" },
    { "question": "AI 视觉检测（AOI）能完全替代人工质检吗？", "answer": "在标准化程度高的领域（如芯片、屏幕）可以。但在非标领域（如复杂的焊缝外观），AI 目前只能做初筛，最终判定仍需人工辅助。" },
    { "question": "泊冉的质量管理方案特点是什么？", "answer": "过程化。我们将质量标准嵌入到 MES 工艺路线中。工人不按标准做，机器就动不了。把“事后诸葛亮”变成“事前防护”。" }
  ],
  decisionFramework: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          tag: 'h3',
          children: [{ type: 'text', text: '质量成熟度阶梯', version: 1 }],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "Level 1（靠运气）：", "format": 1, "version": 1 },
            { "type": "text", "text": "客户投诉了才知道出问题了。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "Level 2（靠检验）：", "format": 1, "version": 1 },
            { "type": "text", "text": "在出厂前把次品拦下来（成本极高）。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "Level 3（靠过程）：", "format": 1, "version": 1 },
            { "type": "text", "text": "监控工艺参数，预防次品产生。", "version": 1 }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1
        },
        {
          type: 'paragraph',
          children: [
            { "type": "text", "text": "Level 4（靠设计）：", "format": 1, "version": 1 },
            { "type": "text", "text": "产品设计时就消除了可能出错的结构。", "version": 1 }
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
    { "condition": "汽车零部件、医疗器械等对安全性要求极高的行业", "type": "suitable" },
    { "condition": "良率波动大、难以查找根本原因的精密加工企业", "type": "suitable" },
    { "condition": "卖得极便宜、坏了就扔的一次性消费品", "type": "unsuitable" },
    { "condition": "完全依赖老师傅手感、无法量化标准的传统手工艺", "type": "unsuitable" }
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
              text: '质量大师戴明说过：“质量是生产出来的，不是检验出来的。”这句话挂在很多工厂的墙上，但实际情况是：车间里站满了拿着卡尺和红笔的质检员（QC），依然挡不住客户的退货单。',
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
          children: [{ "type": "text", "text": "为什么“人海战术”管不好质量？", "version": 1 }],
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
              text: '依赖人工检验有三个死穴：',
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
                { "type": "text", "text": "滞后性", "format": 1, "version": 1 },
                { "type": "text", "text": " — 等到在终检环节发现次品，材料费、人工费、电费已经浪费了。这叫“把钱扔进水里”。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1,
              value: 1
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "不可靠性", "format": 1, "version": 1 },
                { "type": "text", "text": " — 人会疲劳，会走神。科学研究表明，人工全检的漏检率平均在 15% 左右。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1,
              value: 2
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "对立性", "format": 1, "version": 1 },
                { "type": "text", "text": " — 生产部觉得质检部在找茬，质检部觉得生产部在放水。内耗严重。", "version": 1 }
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
          type: 'heading',
          tag: 'h2',
          children: [{ "type": "text", "text": "数字化质量管理的“三道防线”", "version": 1 }],
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
                { "type": "text", "text": "第一道：上料防错（IQC 延伸）。", "format": 1, "version": 1 },
                { "type": "text", "text": " PDA 扫描条码。如果原料批次不对，或者原料过期了，系统直接锁定注塑机，无法启动。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "第二道：过程预警（SPC）。", "format": 1, "version": 1 },
                { "type": "text", "text": " 采集炉温曲线。如果温度连续 3 个点呈现下降趋势（虽然还在合格范围内），系统判定“制程失控”，自动报警通知微调。", "version": 1 }
              ],
              direction: 'ltr',
              indent: 0,
              version: 1
            },
            {
              type: 'listitem',
              children: [
                { "type": "text", "text": "第三道：出货阻断（OQC）。", "format": 1, "version": 1 },
                { "type": "text", "text": " 包装时再次扫描。如果该产品所有的工序记录里有一项是“不合格”或“未检测”，打印机拒绝打印出货标签。", "version": 1 }
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
          "type": "heading",
          "tag": "h2",
          "children": [{ "type": "text", "text": "案例：某车桥厂的“零缺陷”变革", "version": 1 }],
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
              "text": "背景：由于螺栓扭矩不达标，导致主机厂罚款 200 万并面临退网风险。依靠工人手感拧螺丝，质量参差不齐。",
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
              "text": "对策：泊冉为其部署了“智能拧紧系统”。所有电动扳手联网。工艺要求 80N·m，扳手打到 80 就自动停，多一点少一点都不行。数据实时上传云端。",
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
              "text": "结果：螺栓终检工位被取消了。因为系统保证了“每一颗螺丝都是合格的”。连续 18 个月主机厂 0 投诉。",
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
          "children": [{ "type": "text", "text": "质量管理数字化 Checklist", "version": 1 }],
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "version": 1
        },
        {
          "type": "list",
          "listType": "bullet",
          "children": [
            { "type": "listitem", "children": [{ "type": "text", "text": "是否建立了覆盖人、机、料、法、环（4M1E）的追溯档案？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 1 },
            { "type": "listitem", "children": [{ "type": "text", "text": "关键检验设备（如三坐标、拉力机）是否实现了数据自动采集？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 2 },
            { "type": "listitem", "children": [{ "type": "text", "text": "是否在关键工位部署了防呆（Poka-Yoke）装置或逻辑？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 3 },
            { "type": "listitem", "children": [{ "type": "text", "text": "不合格品（NG）的处理流程是否必须经过系统审批？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 4 },
            { "type": "listitem", "children": [{ "type": "text", "text": "是否定期分析 TOP 10 不良原因并形成改进闭环？" }], "direction": "ltr", "indent": 0, "version": 1, "value": 5 }
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
