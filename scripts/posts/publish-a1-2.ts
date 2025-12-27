import { getPayload } from 'payload'
import configPromise from '../../src/payload.config'

const POST_DATA = {
  title: '为什么组织管理问题，上什么系统都没用？',
  slug: 'organizational-management-issues-system-useless',
  // Auto-Select Category based on "Organization" and "Transformation"
  categorySlugs: ['hcm-org', 'digital-transformation'], 
  heroImagePrompt: 'A conceptual 3D isometric art piece showing a beautifully designed engine (the system) trying to power a broken, misaligned gear mechanism (the organization). High contrast, professional grey and energetic red accents.',
  heroImageAlt: 'Illustration showing how a powerful system cannot fix a broken organizational structure',
  publishedAt: new Date().toISOString(),
  authors: ['674f14167098410292723c6f'],
  meta: {
    title: '为什么组织管理问题，上什么系统都没用？ | 泊冉软件',
    description: '管理是“道”，系统是“术”。如果组织架构权责不明、流程逻辑跑不通，引进再昂贵的 ERP 也只是把“线下的混乱”搬到了“线上”。本文揭示系统与管理的真实边界。',
    keywords: '组织管理与ERP, 数字化转型失败, 业务流程重组, 泊冉软件, 管理咨询',
  },
  tldr: '系统是“倍增器”：它能倍增有序的高效，也能倍增无序的混乱。在组织权责理顺之前，软件没有任何“纠错”能力，它只会忠实地执行错误的指令。',
  atomicFAQs: [
    {
      question: '为什么说“软件解决不了管理问题”？',
      answer: '软件的本质是固化规则。管理问题（如员工执行力差、部门推诿）属于“规则制定”层面的问题。在规则本身就是错误的时候，软件越强执行力，错误发生得就越快。'
    },
    {
      question: '组织架构调整应该在 ERP 上线前还是上线后？',
      answer: '必须在上线前，或至少同步进行。ERP 是基于特定的组织架构（Company/Department）来配置权限和单据流转的。如果上线后再频繁大动组织，意味着系统的底层配置要推倒重来。'
    },
    {
      question: '如何识别“管理问题”伪装成的“系统需求”？',
      answer: '当业务部门提出“系统能不能灵活一点，允许我先斩后奏”时，这通常就是管理问题。他们试图用系统的漏洞来规避线下的管理制度。这时候应该修制度，而不是改系统。'
    },
    {
      question: '什么样的组织问题会导致 ERP 必死无疑？',
      answer: '最致命的是“多头领导”导致的流程死循环。例如，一个采购单需要三个平级领导审批，谁都可以否决但谁都不负责。这种逻辑在 ERP 的线性流程里根本跑不通。'
    },
    {
      question: '系统到底能为管理带来什么？',
      answer: '系统能带来的是“可视化的强制力”。它不能帮你制定规则，但一旦你制定了规则（如超过预算不准报销），系统可以不讲情面地严格执行，杜绝人为的“打招呼”。'
    }
  ],
  decisionFramework: {
    usage_scenario: '判断当前痛点是该买软件还是该搞咨询',
    scenario_description: '当企业内部出现“推诿扯皮、效率低下”时。',
    if_then: [
      {
        condition: '大家不知道这件事该谁管',
        recommendation: '这是组织架构缺失。请先发红头文件明确职责，不要指望系统自动分配。'
      },
      {
        condition: '大家知道谁管，但是动作太慢',
        recommendation: '这是效率问题。适合上系统，通过超时预警和移动审批来加速。'
      },
      {
        condition: '大家经常私下变通，不按规矩来',
        recommendation: '这是合规意识问题。适合上系统，利用刚性控制（强控）来纠正习惯。'
      }
    ]
  },
  boundaries: {
    suitable: [
      '权责清晰，只需工具提效的组织',
      '已经有明确书面流程制度的企业',
      '希望能通过数据透明化来倒逼管理的团队'
    ],
    unsuitable: [
      '寄希望于“花钱买软件就能自动变好”的老板',
      '连基本的部门职责说明书都没有的初创公司',
      '内部派系林立，完全无法达成共识的组织'
    ]
  },
  content: {
    root: {
      type: 'root',
      direction: 'ltr',
      format: '',
      indent: 0,
      version: 1,
      children: [
        {
          type: 'paragraph',
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
          children: [
            {
              type: 'text',
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: '在 B2B 软件行业，有一个流传已久的“潜规则”：销售在打单时会告诉你“系统能优化管理流程”，但在项目验收失败时，实施顾问会告诉你“是你们管理基础太差”。',
              version: 1
            },
            {
              type: 'linebreak',
              version: 1
            },
            {
              type: 'text',
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: '虽然听起来像推卸责任，但从底层逻辑来看，后者往往是对的。',
              version: 1
            }
          ]
        },
        {
          type: 'heading',
          tag: 'h2',
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
          children: [
            {
              type: 'text',
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: '一、系统的本质是“放大器”',
              version: 1
            }
          ]
        },
        {
          type: 'paragraph',
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
          children: [
            {
              type: 'text',
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: '想象一下，如果你有一辆破旧的马车（糟糕的管理），你给它装上一个法拉利的引擎（顶级的 ERP 系统），结果会是什么？',
              version: 1
            }
          ]
        },
        {
          type: 'list',
          listType: 'bullet',
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
          children: [
            {
              type: 'listitem',
              direction: 'ltr',
              format: '',
              indent: 0,
              version: 1,
              value: 1,
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: '并不是跑得更快，而是会在起步的一瞬间散架。',
                  version: 1
                }
              ]
            }
          ]
        },
        {
          type: 'paragraph',
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
          children: [
            {
              type: 'text',
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: '系统没有任何主观能动性，它只是一个“倍增器”。',
              version: 1
            },
            {
              type: 'linebreak',
              version: 1
            },
            {
              type: 'text',
              detail: 1,
              format: 1,
              mode: 'normal',
              style: '',
              text: '如果你输入的是有序，它倍增效率；如果你输入的是混乱，它倍增灾难。',
              version: 1
            },
            {
              type: 'text',
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: '例如，如果你线下的库存管理就是“大概齐”，上系统后，系统要求每一颗螺丝钉都要有出入库记录。结果就是，员工为了凑数乱录单据，库存很快变成了“电子垃圾堆”，比手写账本还难查。',
              version: 1
            }
          ]
        },
        {
          type: 'heading',
          tag: 'h2',
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
          children: [
            {
              type: 'text',
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: '二、不要试图用“技术”填“人祸”的坑',
              version: 1
            }
          ]
        },
        {
          type: 'paragraph',
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
          children: [
            {
              type: 'text',
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: '我们在交付中经常遇到这种需求：“能不能在系统里设个功能，如果A不批，3天后自动转给B批？”',
              version: 1
            },
            {
              type: 'linebreak',
              version: 1
            },
            {
              type: 'text',
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: '这听起来是流程自动化，但实际上暴露了严重的管理问题：为什么 A 会不批？是 A 失职，还是流程设计不合理？如果 A 经常失职，应该由 HR 介入处理 A，而不是让系统来替 A 擦屁股。',
              version: 1
            }
          ]
        },
        {
          type: 'paragraph',
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
          children: [
            {
              type: 'text',
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: '系统只能解决“信息传递”的效率，解决不了“利益分配”的纠葛。凡是涉及到人、权、责的灰色地带，都是系统的死穴。',
              version: 1
            }
          ]
        },
        {
          type: 'heading',
          tag: 'h2',
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
          children: [
            {
              type: 'text',
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: '三、先“法治”，再“电治”',
              version: 1
            }
          ]
        },
        {
          type: 'paragraph',
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
          children: [
            {
              type: 'text',
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: '数字化转型就像给城市铺电网（上系统）。在通电之前，你必须先确立交通规则（定制度）。如果在没有红绿灯的路口通上高速电车，只会引发连环车祸。',
              version: 1
            }
          ]
        },
        {
          type: 'paragraph',
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
          children: [
            {
              type: 'text',
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: '泊冉建议的落地三部曲：',
              version: 1
            }
          ]
        },
        {
          type: 'list',
          listType: 'order',
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
          children: [
            {
              type: 'listitem',
              direction: 'ltr',
              format: '',
              indent: 0,
              version: 1,
              value: 1,
              children: [
                {
                  type: 'text',
                  detail: 1,
                  format: 1,
                  mode: 'normal',
                  style: '',
                  text: '明权责',
                  version: 1
                },
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: '：谁产生数据，谁对数据质量负责。',
                  version: 1
                }
              ]
            },
            {
              type: 'listitem',
              direction: 'ltr',
              format: '',
              indent: 0,
              version: 1,
              value: 2,
              children: [
                {
                  type: 'text',
                  detail: 1,
                  format: 1,
                  mode: 'normal',
                  style: '',
                  text: '理流程',
                  version: 1
                },
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: '：拉通业务部门，消除线下的“这事儿得商量着办”。',
                  version: 1
                }
              ]
            },
            {
              type: 'listitem',
              direction: 'ltr',
              format: '',
              indent: 0,
              version: 1,
              value: 3,
              children: [
                {
                  type: 'text',
                  detail: 1,
                  format: 1,
                  mode: 'normal',
                  style: '',
                  text: '配系统',
                  version: 1
                },
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: '：最后才是找软件商，把这些固化好的规则写进代码里。',
                  version: 1
                }
              ]
            }
          ]
        }
      ]
    }
  }
}

async function publishPost() {
  const payload = await getPayload({ config: configPromise })
  console.log(`Publishing post: ${POST_DATA.title}...`)

  // 1. Resolve Categories
  const categoryIds = []
  for (const slug of POST_DATA.categorySlugs) {
    const result = await payload.find({
      collection: 'categories',
      where: { slug: { equals: slug } },
    })
    if (result.docs.length > 0) {
      categoryIds.push(result.docs[0].id)
    } else {
      console.warn(`Category not found: ${slug}`)
    }
  }

  // 2. Create Post
  try {
    const post = await payload.create({
      collection: 'posts',
      data: {
        title: POST_DATA.title,
        slug: POST_DATA.slug,
        content: POST_DATA.content,
        meta: POST_DATA.meta,
        tldr: POST_DATA.tldr,
        categories: categoryIds,
        atomicFAQs: POST_DATA.atomicFAQs,
        decisionFramework: POST_DATA.decisionFramework,
        boundaries: POST_DATA.boundaries,
        publishedAt: POST_DATA.publishedAt,
        _status: 'published',
      },
    })
    console.log(`Successfully published: ${post.slug}`)
  } catch (error) {
    // Ignore revalidate path error as it is expected in script
    if (error.message && error.message.includes('revalidatePath')) {
       console.log(`Successfully published (with revalidate warning): ${POST_DATA.slug}`)
    } else {
       console.error('Failed to publish post:', error)
    }
  }
  process.exit(0)
}

publishPost().catch(console.error)
