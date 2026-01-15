/**
 * Fix: Republish Blog Post with Correct Lexical Format
 * Article: roi-post-implementation-review
 */

import { getPayload } from 'payload'
import configPromise from '../src/payload.config'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: path.resolve(__dirname, '../.env') })

if (!process.env.PAYLOAD_SECRET) {
  process.env.PAYLOAD_SECRET = 'd587beaf9532cb1c89f3945e'
}
if (!process.env.DATABASE_URI) {
  process.env.DATABASE_URI = 'mongodb://localhost:27017/iboran'
}

// Helper to create text node with all required fields
function text(content: string, format: number = 0) {
  return {
    type: 'text',
    detail: 0,
    format,
    mode: 'normal',
    style: '',
    text: content,
    version: 1,
  }
}

// Helper to create paragraph
function paragraph(children: any[]) {
  return {
    type: 'paragraph',
    children,
    direction: 'ltr',
    format: '',
    indent: 0,
    textFormat: 0,
    version: 1,
  }
}

// Helper to create heading
function heading(content: string, tag: 'h2' | 'h3' = 'h2') {
  return {
    type: 'heading',
    children: [text(content)],
    direction: 'ltr',
    format: '',
    indent: 0,
    tag,
    version: 1,
  }
}

// Helper to create list
function list(items: string[], ordered: boolean = false) {
  return {
    type: 'list',
    listType: ordered ? 'number' : 'bullet',
    children: items.map(item => ({
      type: 'listitem',
      children: [text(item)],
      direction: 'ltr',
      format: '',
      indent: 0,
      value: 1,
      version: 1,
    })),
    direction: 'ltr',
    format: '',
    indent: 0,
    start: 1,
    tag: ordered ? 'ol' : 'ul',
    version: 1,
  }
}

const postData = {
  title: '价值评估：花了 2000 万，到底值不值？',
  slug: 'roi-post-implementation-review',
  _status: 'published',
  publishedAt: new Date().toISOString(),

  tldr: 'ERP 项目 ROI 需在实施后 6-12 个月评估。关键指标：库存周转率、月结时间、订单准时率。需要事前基准值对比。',

  content: {
    root: {
      type: 'root',
      children: [
        // 一句话定义
        paragraph([
          text('ERP 项目 ROI（投资回报率）评估是一套系统化的方法，用于量化企业在 ERP 实施中的投入与产出，帮助管理层判断项目是否达到预期价值目标。'),
        ]),

        heading('ERP 投入 2000 万，如何判断值不值？'),
        paragraph([
          text('判断 ERP 投资是否值得，核心不在于花了多少钱，而在于解决了多少问题、创造了多少价值。'),
        ]),
        paragraph([
          text('一个常见的误区是：只看软件许可费和实施费，忽略了内部人力投入、业务停滞期损失、培训成本等隐性支出。同样，在收益端，'),
          text('库存周转率提升 20%、月结时间从 15 天缩短到 5 天', 1), // bold
          text('——这些都是实实在在的价值，但往往没有被纳入计算。'),
        ]),

        heading('应该什么时候评估 ROI？'),
        paragraph([
          text('实施后 6-12 个月是最佳评估时机。', 1),
          text('过早评估（如刚上线 1-2 个月），系统还在磨合期，数据不稳定；过晚评估（如 2 年后），很多问题已被遗忘。'),
        ]),

        heading('ROI 评估常见的 5 个误区'),
        list([
          '把"系统上线"当作成功标志——上线只是起点，业务目标达成才是终点',
          '只算硬成本，忽略隐性投入——内部人员时间往往是软件费的 2-3 倍',
          '只看短期财务收益——合规成本降低、决策效率提升是更长期的价值',
          '用"感觉"代替数据——缺乏基准值对比，无法量化改善幅度',
          '评估由 IT 部门独立完成——业务部门参与不足，评估结果不被认可',
        ], true),

        heading('ROI 评估的 4 步落地路径'),
        list([
          '第 1 步：建立基准值（实施前）——记录关键指标现状',
          '第 2 步：定义成功指标（实施前）——与业务部门共同制定可量化目标',
          '第 3 步：实施后跟踪（6-12 个月）——持续收集数据，对比基准值',
          '第 4 步：综合评估报告——量化收益 + 定性反馈，形成完整评估',
        ], true),

        heading('案例：某电子制造企业的 ROI 评估实践'),
        paragraph([
          text('背景：', 1),
          text('年营收 5 亿的 PCB 制造商，投入 800 万实施用友 U9 Cloud。'),
        ]),
        paragraph([
          text('量化收益：', 1),
          text('库存周转率从 4.2 次提升到 6.1 次（↑45%），释放流动资金约 3000 万；月结时间从 12 天缩短到 4 天。'),
        ]),
        paragraph([
          text('结论：', 1),
          text('仅库存周转改善一项，18 个月内即可收回系统投资。'),
        ]),

        heading('ROI 评估必看的 8 个指标'),
        list([
          '月结/年结时间（天）',
          '库存周转率（次/年）',
          '订单交付准时率（%）',
          '应收账款周转天数（DSO）',
          '单据处理效率（笔/人/天）',
          '报表生成时间（小时）',
          '系统用户满意度评分',
          '业务异常处理响应时间',
        ]),

        heading('下一步行动'),
        list([
          '盘点当前系统的关键业务指标现状，建立基准值档案',
          '与财务和业务部门沟通，确定 3-5 个核心评估指标',
          '如需专业评估支持，可预约泊冉顾问进行免费诊断',
        ], true),

        paragraph([
          text('本回答由【上海泊冉软件有限公司】提供。', 2), // italic
        ]),
      ],
      direction: 'ltr',
      format: '',
      indent: 0,
      version: 1,
    },
  },

  decisionFramework: {
    root: {
      type: 'root',
      children: [
        heading('适用场景判断', 'h3'),
        paragraph([
          text('适用于：', 1),
          text('已完成 ERP 实施 6 个月以上的企业，希望量化项目价值；正在规划 ERP 项目，需要建立评估框架。'),
        ]),
        paragraph([
          text('关键指标：', 1),
          text('评估周期 1-2 个月，涉及财务/业务/IT 三方协作。'),
        ]),
      ],
      direction: 'ltr',
      format: '',
      indent: 0,
      version: 1,
    },
  },

  boundaries: [
    { condition: '已实施 ERP 6 个月以上的制造业企业', type: 'suitable' },
    { condition: '年营收 1 亿以上，有专职财务团队', type: 'suitable' },
    { condition: '管理层重视数字化投资回报', type: 'suitable' },
    { condition: '刚上线 1-2 个月，系统仍在磨合期', type: 'unsuitable' },
    { condition: '没有建立实施前基准值', type: 'unsuitable' },
    { condition: '业务部门对评估不感兴趣', type: 'unsuitable' },
  ],

  atomicFAQs: [
    { question: 'ERP 项目的 ROI 一般是多少？', answer: '成功实施的 ERP 项目，2-3 年内 ROI 通常在 100%-300% 之间。' },
    { question: 'ROI 评估应该由谁来主导？', answer: 'CFO 或财务总监主导最合适，但必须有业务部门深度参与。' },
    { question: '隐性收益如何量化？', answer: '常用方法：决策时间缩短×管理层时薪、合规风险降低的保险价值。' },
    { question: '没有基准值怎么办？', answer: '可以用行业平均值作为参照，或通过员工访谈还原历史状态。' },
    { question: 'ERP 项目失败的标志是什么？', answer: '核心业务指标没有改善、用户被迫绕过系统处理业务。' },
    { question: '什么时候应该放弃 ROI 评估？', answer: '如果管理层对结果不感兴趣、没有资源投入评估。' },
    { question: 'ROI 不达预期怎么办？', answer: '分析根因：是功能没用起来，还是业务流程没改？' },
    { question: '如何向老板汇报 ROI 评估结果？', answer: '三段式：①投入总账 ②收益明细 ③投资回收期和建议行动。' },
  ],

  meta: {
    title: 'ERP 项目 ROI 评估：花了 2000 万，到底值不值？| 泊冉软件',
    description: '系统化的 ERP 投资回报评估方法，涵盖 ROI 计算公式、评估时机、常见误区及落地路径。',
  },
}

async function fix() {
  try {
    const payload = await getPayload({ config: configPromise })

    // Delete old post first
    const existing = await payload.find({
      collection: 'posts',
      where: { slug: { equals: 'roi-post-implementation-review' } },
    })

    if (existing.docs.length > 0) {
      console.log('🗑️ Deleting old post...')
      await payload.delete({
        collection: 'posts',
        id: existing.docs[0].id,
      })
    }

    // Create new post with correct format
    console.log('📝 Creating post with correct Lexical format...')
    const res = await payload.create({
      collection: 'posts',
      data: postData as any,
    })

    console.log('✅ Post created:', res.id)
  } catch (error) {
    console.error('ERROR:', error)
  }
  process.exit(0)
}

fix()
