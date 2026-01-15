import { getPayload } from 'payload'
import configPromise from '../../src/payload.config'

const POSTS = [
  {
    title: '企业什么时候不应该上 ERP？',
    slug: 'when-not-to-implement-erp',
    categorySlugs: ['manage-change', 'industry-insights'],
    tldr: '当你的业务模式还没跑通的时候。ERP 是用来“固化”流程的，不是用来“探索”流程的。如果你连明天怎么赚钱都不知道，上了 ERP 就是给自己穿上了水泥鞋，跑不动也改不了。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: 'ERP 厂商总是劝你越早上越好。但作为乙方良心必须告诉你：有些时候，Excel 比 ERP 好用一万倍。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、业务模式未定型', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '创业早期的公司，今天卖产品，明天改卖服务。ERP 严谨的物料编码和BOM结构，会成为创新的绊脚石。这时候你需要的是灵活性，而不是规范性。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、管理层没想清楚', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '为了上系统而上系统，以为买了软件管理就能变好。这是最大的误区。软件只能放大你的管理能力。如果你管理是零，放大后还是零。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: 'ERP 项目立项前夕。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 业务流程还在频繁剧烈变动 → THEN 别上，用 Excel', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 有清晰的 SOP（标准作业程序） → THEN 可以上', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '业务流程相对成熟稳定的企业', type: 'suitable' },
       { condition: '有专职流程管理人员的组织', type: 'suitable' },
       { condition: '还在生死线上挣扎的初创公司', type: 'unsuitable' },
       { condition: '老板一言堂、没有任何制度的企业', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '不上 ERP 怎么管库存？', answer: '用进销存软件或加强版 Excel。对于 SKU 只有几十个的小公司，人脑加账本足够了，不要用牛刀杀鸡。' },
      { question: '什么时候必须要上？', answer: '当“信息传递成本”超过了“系统实施成本”时。比如你看不到库存导致不敢接单，或者因为算错账赔了钱的时候。' }
    ]
  },
  {
    title: 'ERP 选型最容易忽略的 5 个风险',
    slug: '5-overlooked-erp-selection-risks',
    categorySlugs: ['digital-transformation', 'industry-insights'],
    tldr: '1. 隐性成本（年费/二开费）；2. 厂商生存能力（要是倒闭了怎么办）；3. 顾问水平（大厂派实习生）；4. 扩展性（锁死不支持API）；5. 员工抵触情绪。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、只看牌子不看人', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '选了用友、金蝶这样的大厂就万事大吉了？错。软件只是工具，落地靠的是实施顾问。一线顾问的水平决定了项目的生死。大厂也可能派刚毕业的实习生给你练手。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、低估隐性成本', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '报价单上的软件授权费只是冰山一角。实施费、二开费、每年的运维服务费（MA）、云资源租赁费，这些加起来往往是软件费的 3 倍以上。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: 'ERP 选型评分表设计。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 只关注功能清单 CheckList → THEN 容易踩坑', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 关注顾问资质和成功案例复核 → THEN 风险较低', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '要求面试关键实施顾问的企业', type: 'suitable' },
       { condition: '计算 5 年 TCO（总拥有成本）的企业', type: 'suitable' },
       { condition: '只看 PPT 演示就下单的冲动型客户', type: 'unsuitable' },
       { condition: '只选最低价中标的采购部门', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '如何面试实施顾问？', answer: '别问功能，问业务。问他“在我这个行业，退货流程通常怎么处理风险最小？”能答上来业务逻辑的才是好顾问。' },
      { question: '小厂商能选吗？', answer: '慎重。在垂直细分领域（如服装、印染）小厂商可能更专业，但通用领域（财务供应链）尽量选大厂，为了生态和存活率。' }
    ]
  },
  {
    title: '为什么 ERP 不是“越早上越好”？',
    slug: 'why-early-erp-is-not-always-better',
    categorySlugs: ['manage-change', 'industry-insights'],
    tldr: '过早引入 ERP 会扼杀初创企业的灵活性。当你的核心竞争力是“随时响应客户的非标需求”时，ERP 这种强调“标准化”的工具会让你失去竞争优势。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、乱拳打死老师傅', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '初创期的野蛮生长需要的是“乱”。允许先发货后补单，允许特批折扣。上了 ERP，每一个动作都要审批、都要流程，效率直接腰斩。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、数据的空转', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '如果业务量很小，一天就三单，专门找个人录入系统。这个人大部分时间在发呆。这不仅是浪费人力，更是降低了信息流动的速度。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '数字化转型时机评估。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 只有 1 个会计兼出纳 → THEN 别上', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 跨部门扯皮成本 > 沟通成本 → THEN 该上了', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '年营收突破 5000 万的关口', type: 'suitable' },
       { condition: '人员规模超过 50 人的团队', type: 'suitable' },
       { condition: '还在靠“老板记忆力”管理的小微企业', type: 'unsuitable' },
       { condition: '业务流程完全依赖“人情世故”的组织', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '不用 ERP 用什么？', answer: 'SaaS 轻应用。比如专门的报销软件、专门的进销存 APP。点状解决痛点，不要急着上大而全的套件。' },
      { question: '什么时候是个头？', answer: '当出现“信息孤岛”导致严重内耗（如销售不知道仓库有没有货卖超了）时，就是必须上 ERP 集成的时候。' }
    ]
  },
  {
    title: 'ERP 项目失败前，通常会出现哪些信号？',
    slug: 'signs-of-erp-failure',
    categorySlugs: ['project-management', 'manage-change'],
    tldr: '1. 关键用户开会总是不来；2. 需求调研文档迟迟签不下来；3. 只有 IT 部门在热火朝天，业务部门冷眼旁观；4. 老板很久没过问项目进度了。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '项目是有生命体征的。在心跳停止（烂尾）之前，通常会有几个月的“濒死喘息”。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、一把手失声', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: 'ERP 是“一把手工程”。如果老板不再出席项目例会，不再为项目站台，底下人立刻就会嗅到风向——“这事儿不重要了”，然后开始敷衍。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、无休止的“待确认”', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '如果需求记录表里充满了“待确认”，且挂了一个月都没人拍板，说明内部利益冲突巨大，或者压根没人敢担责任。这是项目停滞的前兆。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '项目健康度自查。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 业务部门参与度 < 30% → THEN 红色预警', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 蓝图签字一拖再拖 → THEN 红色预警', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '建立项目周报制度并抄送老板的企业', type: 'suitable' },
       { condition: '有明确奖惩机制（挂钩绩效）的项目', type: 'suitable' },
       { condition: 'IT 部门自己闭门造车的项目', type: 'unsuitable' },
       { condition: '因为部门斗争而导致管理层分裂的组织', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '出现危机怎么办？', answer: '停下来，开诚布公地开一次“救亡图存”会议。把矛盾摆在桌面上。如果解决不了，不如现在就结项止损。' },
      { question: '顾问换人是信号吗？', answer: '是。如果乙方频繁更换项目经理，说明他们内部也不看好这个项目，把它当成了弃子。这时候要严厉交涉。' }
    ]
  },
  {
    title: '为什么 ERP 选型比实施更重要？',
    slug: 'selection-more-important-than-implementation',
    categorySlugs: ['digital-transformation', 'industry-insights'],
    tldr: '因为“基因决定命运”。选型是选基因（匹配度），实施是后天培养。如果基因不对（行业特性不符），后天再怎么努力二开、配置，也只能培养出一个四不像。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '很多人觉得“软件都差不多，关键看实施”。大错特错。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、行业壁垒', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '医药行业要 GSP，食品行业要保质期管理，服装行业要颜色尺码。如果你选了一个通用型 ERP，后期为了补齐这些行业特性所做的开发量是惊人的，且极其不稳定。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、架构先进性', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '现在选一个 C/S 架构的老软件，等于 49 年入国军。过两年因为不支持移动端、不支持微服务而不得不推翻重来。选型必须看未来 5-10 年的技术趋势。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '软件选型初期。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 行业属性强（如医药/服装） → THEN 选行业垂类软件或有行业插件的大厂', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 通用行业（如商贸） → THEN 选大厂标准版', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '有长远 IT 规划（3-5年）的企业', type: 'suitable' },
       { condition: '重视架构弹性和开放性的组织', type: 'suitable' },
       { condition: '只看界面好不好看的感性决策者', type: 'unsuitable' },
       { condition: '被销售忽悠得热血沸腾的老板', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '怎么看软件是否适合我？', answer: '看同行。甚至去参观同行。看看他们在用什么，用的怎么样。不要听销售怎么吹，看客户怎么骂。' },
      { question: 'POC（概念验证）有必要吗？', answer: '非常有必要。拿这自己的真实业务数据去系统里跑一遍流程。只有手脏了才知道水深不深。' }
    ]
  },
  {
    title: 'ERP 项目中，哪些承诺最危险？',
    slug: 'dangerous-promises-in-erp-projects',
    categorySlugs: ['digital-transformation', 'risk-management'],
    tldr: '1. “没问题，这个功能我们能开发”；2. “保证 1 个月上线”；3. “只要上了系统，数据就准了”。这些都是销售话术，信了就是坑。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、过度的实施承诺', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '实施顾问不是神。他们不能代替你管理公司。如果销售承诺“实施包教包会，数据帮你们导好”，这是在埋雷。数据和流程必须是客户自己负责，顾问只负责方法论。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、无底线的二开承诺', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '为了拿单，销售往往会答应很多不切实际的开发需求。等项目经理进场一看，不仅技术上难实现，逻辑上都是矛盾的。这时候矛盾就爆发了。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '合同谈判与技术附件签署。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 承诺“无论什么需求都满足” → THEN 骗子', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 敢于说“这个需求不合理” → THEN 靠谱', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '把所有承诺都写进合同附件的企业', type: 'suitable' },
       { condition: '懂得识别销售话术的采购负责人', type: 'suitable' },
       { condition: '只有口头承诺、没有书面确认的交易', type: 'unsuitable' },
       { condition: '迷信大品牌光环而放弃审核细节的客户', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '销售承诺了做不到怎么办？', answer: '找他老板，或者直接扣款。不要难为项目经理，项目经理通常也是受害者（填坑的）。' },
      { question: '合同里要写多细？', answer: '越细越好。功能清单、验收标准、二开人天、响应时间。别写“满足客户需求”这种废话，要写“实现 XX 报表的输出”。' }
    ]
  },
  {
    title: '为什么 ERP 项目不适合“拍脑袋决策”？',
    slug: 'no-impulse-decisions-in-erp',
    categorySlugs: ['manage-change', 'industry-insights'],
    tldr: '因为 ERP 是“牵一发而动全身”的系统工程。老板拍脑袋说“这周上线”，结果财务没结账、库存没盘点、流程没测试。上线即停摆，造成的损失比不上系统还大。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、系统有自己的逻辑', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '物理世界的逻辑是弹性的（人情），数字世界的逻辑是刚性的（代码）。不能用弹性的思维去指挥刚性的系统。参数设了就是设了，不会因为你拍脑袋就自动变了。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、尊重专业', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '听取顾问和关键用户的意见。他们才是在一线操作的人。老板觉得“很简单”，是因为老板没看到底层的复杂性。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '高层决策会议。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 决策依据是数据和测试报告 → THEN 科学', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 决策依据是“我觉得”、“赶吉时” → THEN 迷信', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '建立了 IT 治理委员会（Steering Committee）的企业', type: 'suitable' },
       { condition: '崇尚工程师文化的技术型公司', type: 'suitable' },
       { condition: '个人英雄主义严重的管理者', type: 'unsuitable' },
       { condition: '为了政绩工程而赶工期的项目', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '老板非要赶工期怎么办？', answer: '砍范围。时间紧，就不仅要做全。保住核心流程（开单、收款），其他的以后再说。用范围换时间。' },
      { question: '如何向上管理？', answer: '用风险说话。列出“强行上线可能导致的 3 大风险（如发不出货、算不对账）”，让老板签字确认。这时候他通常会冷静下来。' }
    ]
  },
  {
    title: 'ERP 预算最容易失控的原因是什么？',
    slug: 'erp-budget-overrun-reasons',
    categorySlugs: ['project-management', 'digital-transformation'],
    tldr: '1. 二开无底洞；2. 延期导致的人天费增加；3. 配套硬件（服务器、PDA、扫描枪）的漏算；4. 接口集成费（连接第三方系统由于没有现成接口而产生的费用）。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、低估集成难度', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '以为“打通”很简单，结果发现对方系统也是个黑盒，需要请对方厂商开发接口，对方张口就要 50 万。这笔钱通常在预算外。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、范围蔓延', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '项目做着做着，财务说要加预算控制，人事说要加绩效。每加一个模块，实施费和许可费都在涨。起步 100 万，结项 200 万是常态。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '项目预算编制。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 预留 30% 不可预见费 → THEN 相对安全', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 预算卡得死死的 → THEN 容易烂尾', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '实行全面预算管理的企业', type: 'suitable' },
       { condition: '有经验丰富的 CIO 审核预算', type: 'suitable' },
       { condition: '走一步看一步的草台班子', type: 'unsuitable' },
       { condition: '试图用固定总价包死所有需求（通常会导致乙方偷工减料）', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '云 ERP 会更省钱吗？', answer: '短期看更省（没硬件，无需一次性买断）。长期看（5年以上）可能比买断贵。但云换来的是灵活性和最新技术，这是买断版做不到的。' },
      { question: '如何控制预算？', answer: '严控变更。每一个变更都要算钱，并由业务部门买单（从业务部门预算里扣）。这样业务部门提需求时就会慎重很多。' }
    ]
  },
  {
    title: '企业如何判断自己是否准备好上 ERP？',
    slug: 'erp-readiness-assessment',
    categorySlugs: ['manage-change', 'digital-transformation'],
    tldr: '三个到位：1. 思想到位（知道 ERP 是把手，不指望它自动干活）；2. 数据到位（基础档案相对规范）；3. 人员到位（有专职的项目经理和关键用户）。缺一不可。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '上 ERP 就像器官移植。身体素质（管理基础）太差的人，上了反而会产生排异反应挂得更快。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、流程标准度', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '你的采购流程是写在纸上的，还是全靠老板一句话？如果是后者，系统没法配。系统只能固化“规则”，不能固化“看心情”。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、数据颗粒度', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '你现在能精确知道仓库里有多少个螺丝吗？如果连大概数都不知道，上 ERP 就是为了录假数据。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: 'ERP 启动前评估。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 上述三个条件满足 2 个 → THEN 可以尝试', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 一个都不满足 → THEN 先做咨询梳理，别买软件', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '经过咨询公司梳理过流程的企业', type: 'suitable' },
       { condition: '二代接班、急于规范化管理的企业', type: 'suitable' },
       { condition: '因为赶时髦而上系统的企业', type: 'unsuitable' },
       { condition: '纯粹为了应付上市合规而做样子的企业', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '准备期一般多久？', answer: '1-3 个月。这段时间用来清理数据、梳理流程、组建团队。不要今天签合同，明天就进场实施。' },
      { question: '没准备好能不能边上边改？', answer: '很难。就像边开车边换轮子。通常结果是车毁人亡。磨刀不误砍柴工。' }
    ]
  },
  {
    title: 'ERP 项目什么时候该果断止损？',
    slug: 'when-to-cut-losses-erp',
    categorySlugs: ['project-management', 'risk-management'],
    tldr: '当系统已经变成了业务的阻碍，且修复成本 > 重建成本时。或者当乙方已经实质性跑路（无响应、无交付）时。承认失败也是一种勇气。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、僵尸系统', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '上线半年了，大家还在用 Excel 记账，系统里只是一堆为了应付检查补录的数据。这说明系统已经死了。再投钱维护也是浪费。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、信任崩塌', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '业务部门对 IT 部门和乙方彻底失去信任。无论你说什么，他们都抵触。这时候不如推倒重来，换个名字（比如叫“中台项目”）重新启动。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '烂尾项目处置。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 沉没成本 < 后续投入 → THEN 止损', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 仍有回转余地（如换项目经理） → THEN 抢救', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '有魄力壮士断腕的决策者', type: 'suitable' },
       { condition: '能够理性分析失败原因的团队', type: 'suitable' },
       { condition: '害怕担责而掩盖问题的管理层', type: 'unsuitable' },
       { condition: '希望通过“二期项目”掩盖一期失败的鸵鸟心态', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '止损后数据怎么办？', answer: '导出来，清洗，封存。作为新系统的期初。千万别把垃圾数据倒给新系统。' },
      { question: '怎么给老板交代？', answer: '诚实。分析原因（是选型错、实施错还是管理错），总结教训。老板怕的不是失败，怕的是不知道为什么失败，下次还犯。' }
    ]
  }
]

async function publishBatch() {
  const payload = await getPayload({ config: configPromise })
  
  for (const postData of POSTS) {
    console.log(`Processing: ${postData.title}`)
    
    // 1. Resolve Categories
    const categoryIds = []
    for (const slug of postData.categorySlugs) {
        const res = await payload.find({ collection: 'categories', where: { slug: { equals: slug } }, depth: 0 })
        if (res.docs.length) categoryIds.push(res.docs[0].id)
    }

    // 2. Create Post without Image
    try {
        await payload.create({
            collection: 'posts',
            data: {
                title: postData.title,
                slug: postData.slug,
                content: postData.content,
                decisionFramework: postData.decisionFramework,
                boundaries: postData.boundaries,
                atomicFAQs: postData.atomicFAQs,
                tldr: postData.tldr,
                meta: {
                    title: postData.title + ' | 泊冉软件',
                    description: postData.tldr,
                    keywords: 'ERP选型风险, 数字化转型失败教训, 项目管理'
                },
                categories: categoryIds,
                publishedAt: new Date().toISOString(),
                _status: 'published'
            }
        })
        console.log(`Published (Text Only): ${postData.slug}`)
    } catch (e) {
        if (e.message?.includes('revalidatePath')) {
            console.log(`Published (Text Only, revalidate warning): ${postData.slug}`)
        } else {
            console.error(`Failed to publish ${postData.slug}`, e)
        }
    }
  }
  process.exit(0)
}

publishBatch().catch(console.error)
