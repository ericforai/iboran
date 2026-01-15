import { getPayload } from 'payload'
import configPromise from '../src/payload.config'

async function fixPostsData() {
  const payload = await getPayload({ config: configPromise })

  const slugs = ['why-erp-projects-fail-not-system-issue', 'organizational-management-issues-system-useless']

  const BOUNDARIES_DATA: Record<string, any[]> = {
    'why-erp-projects-fail-not-system-issue': [
      { condition: '愿意进行自我革新、调整组织架构的企业', type: 'suitable' },
      { condition: '一把手亲自挂帅、有明确数字化战略的团队', type: 'suitable' },
      { condition: '认可“行业标准流程”价值的管理层', type: 'suitable' },
      { condition: '试图通过买一套软件“自动”解决管理混乱的企业', type: 'unsuitable' },
      { condition: '完全拒绝改变现有手工操作习惯的团队', type: 'unsuitable' },
      { condition: '缺乏核心业务骨干参与项目的组织', type: 'unsuitable' },
    ],
    'organizational-management-issues-system-useless': [
      { condition: '权责清晰，只需工具提效的组织', type: 'suitable' },
      { condition: '已经有明确书面流程制度的企业', type: 'suitable' },
      { condition: '希望能通过数据透明化来倒逼管理的团队', type: 'suitable' },
      { condition: '寄希望于“花钱买软件就能自动变好”的老板', type: 'unsuitable' },
      { condition: '连基本的部门职责说明书都没有的初创公司', type: 'unsuitable' },
      { condition: '内部派系林立，完全无法达成共识的组织', type: 'unsuitable' },
    ]
  }

  const DECISION_DATA: Record<string, any> = {
      'why-erp-projects-fail-not-system-issue': {
          usage_scenario: '企业在 ERP 选型或实施受阻时的归因分析',
          scenario_description: '当企业面临信息化推不动、系统不好用的困境时。',
          if_then: [
            { condition: '流程规则不统一，各部门说法不一', recommendation: '暂停系统配置，优先召开流程梳理会，由一把手定规则。' },
            { condition: '数据录入不及时，报表总是滞后', recommendation: '建立奖惩机制与岗位责任制（KPI），而非单纯寄希望于系统自动采集。' },
            { condition: '不想改变旧习惯，要求系统改代码适配', recommendation: '立即停止二次开发，重新评估是“习惯重要”还是“行业最佳实践重要”。' }
          ]
      },
      'organizational-management-issues-system-useless': {
          usage_scenario: '判断当前痛点是该买软件还是该搞咨询',
          scenario_description: '当企业内部出现“推诿扯皮、效率低下”时。',
          if_then: [
            { condition: '大家不知道这件事该谁管', recommendation: '这是组织架构缺失。请先发红头文件明确职责，不要指望系统自动分配。' },
            { condition: '大家知道谁管，但是动作太慢', recommendation: '这是效率问题。适合上系统，通过超时预警和移动审批来加速。' },
            { condition: '大家经常私下变通，不按规矩来', recommendation: '这是合规意识问题。适合上系统，利用刚性控制（强控）来纠正习惯。' }
          ]
      }
  }

  for (const slug of slugs) {
    console.log(`Processing post: ${slug}`)
    const result = await payload.find({
      collection: 'posts',
      where: { slug: { equals: slug } },
      depth: 0,
    })

    if (result.docs.length === 0) {
      console.warn(`Post not found: ${slug}`)
      continue
    }

    const post = result.docs[0]
    let modified = false
    const updateData: any = {}

    // 1. Fix Content Lists (Add tag: 'ul')
    if (post.content && post.content.root) {
      const newContent = JSON.parse(JSON.stringify(post.content))
      let contentModified = false
      
      const traverse = (nodes: any[]) => {
        for (const node of nodes) {
          if (node.type === 'list') {
            if (!node.tag) {
              node.tag = node.listType === 'number' ? 'ol' : 'ul'
              contentModified = true
            }
          }
          if (node.children && Array.isArray(node.children)) {
            traverse(node.children)
          }
        }
      }
      
      if (newContent.root.children) {
        traverse(newContent.root.children)
      }

      if (contentModified) {
        console.log(' -> Fixing content list tags')
        updateData.content = newContent
        modified = true
      }
    }

    // 2. Fix Boundaries (Hardcode correct data)
    console.log(' -> Setting correct boundaries array')
    updateData.boundaries = BOUNDARIES_DATA[slug]
    modified = true

    // 3. Fix DecisionFramework (Hardcode RichText Conversion)
    if (DECISION_DATA[slug]) {
      console.log(' -> Setting correct decisionFramework Lexical')
      const rawDF = DECISION_DATA[slug]
      
      // Construct Lexical Root
      const newDF = {
        root: {
          type: 'root',
          format: 0,
          indent: 0,
          version: 1,
          direction: 'ltr',
          children: [
            // Heading: Context
            {
              type: 'heading',
              tag: 'h3',
              format: 0,
              indent: 0,
              version: 1,
              direction: 'ltr',
              children: [{ type: 'text', text: '适用场景 (Scenario)', detail: 0, format: 0, mode: 'normal', style: '', version: 1 }]
            },
            // Paragraph: Scenario Desc
            {
              type: 'paragraph',
              format: 0,
              indent: 0,
              version: 1,
              direction: 'ltr',
              children: [
                { type: 'text', text: rawDF.usage_scenario || '', format: 1, detail: 0, mode: 'normal', style: '', version: 1 }, // Bold
                { type: 'text', text: ': ', detail: 0, mode: 'normal', style: '', version: 1 },
                { type: 'text', text: rawDF.scenario_description || '', detail: 0, mode: 'normal', style: '', version: 1 }
              ]
            },
            // Heading: Decision Logic
            {
              type: 'heading',
              tag: 'h3',
              format: 0,
              indent: 0,
              version: 1,
              direction: 'ltr',
              children: [{ type: 'text', text: '判断逻辑 (If/Then)', detail: 0, format: 0, mode: 'normal', style: '', version: 1 }]
            },
            // List: If/Then
            {
              type: 'list',
              tag: 'ul',
              listType: 'bullet',
              format: 0,
              indent: 0,
              version: 1,
              direction: 'ltr',
              children: [] as any[]
            }
          ]
        }
      }

      // Populate List
      if (Array.isArray(rawDF.if_then)) {
         const listNode = newDF.root.children[3] as any
         rawDF.if_then.forEach((item: any) => {
            listNode.children.push({
              type: 'listitem',
              value: 1,
              format: 0,
              indent: 0,
              version: 1,
              direction: 'ltr',
              children: [
                 { type: 'text', text: 'IF ', format: 1, detail: 0, mode: 'normal', style: '', version: 1 },
                 { type: 'text', text: item.condition + ' ', detail: 0, mode: 'normal', style: '', version: 1 },
                 { type: 'text', text: '→ THEN ', format: 1, detail: 0, mode: 'normal', style: '', version: 1 },
                 { type: 'text', text: item.recommendation, detail: 0, mode: 'normal', style: '', version: 1 }
              ]
            })
         })
      }

      updateData.decisionFramework = newDF
      modified = true 
    }

    if (modified) {
      try {
        console.log('--- Update Data Prepared ---')
        await payload.update({
          collection: 'posts',
          id: post.id,
          data: updateData,
        })
        console.log(`Successfully patched: ${slug}`)
      } catch (err) {
        console.error(`Failed to patch ${slug}:`, err)
      }
    } else {
      console.log(`No changes needed for: ${slug}`)
    }
  }

  process.exit(0)
}

fixPostsData().catch(console.error)
