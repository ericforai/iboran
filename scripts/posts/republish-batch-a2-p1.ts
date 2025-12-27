import { getPayload } from 'payload'
import configPromise from '../../src/payload.config'

const POSTS = [
  {
    title: '为什么说“业财一体化”是 CEO 的一把手工程？',
    slug: 'financial-business-integration-ceo-project',
    categorySlugs: ['financial-management', 'digital-transformation'],
    tldr: '业财一体化不是把财务软件接上业务系统那么简单，它是一场权力的再分配。业务部门失去了“小金库”，财务部门获得了“事前否决权”。如果 CEO 不站台，这就是一场注定失败的内耗。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、决策者最关心的 3 个问题', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '为什么这个项目必须我亲自抓？交给 CFO 不行吗？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '业财一体化到底能给我省多少钱？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '阻力最大的人是谁？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、权力结构重组', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '业财一体化的本质，是把财务的触角延伸到业务的前端。以前业务报销是“秋后算账”，现在是“事前控制”。如果你试图绕过预算去请客吃饭，系统直接报错。这意味着业务部门“灵活处理”的空间被压缩了。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '三、落地路径：三步走', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 1: 统一口径（主数据）。客户、物料、部门，财务和业务必须用同一套编码。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 2: 单据驱动（流程）。业务单据自动生成财务凭证，消灭手工凭证。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 3: 预算控制（管理）。在业务发生时（如下订单）实时检查预算。', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '四、关键清单 (Checklist)', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ CEO 是否在启动会上明确宣布“财务有一票否决权”？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 业务部门是否已经接受了“无预算不支出”的规则？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '五、真实案例：被系统卡住的报销单', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '某销售总监请大客户吃饭，超了预算 500 块。以前这种事，CFO 签个字就过了。上线后，系统直接死锁，无法提交。总监找 CEO 告状。CEO 说：系统我也改不了，你自己想办法。最后销售总监自己掏了这 500 块。从此以后，全公司没人敢超预算。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '企业规模扩大，财务管控失效时。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 财务还在根据发票做账（而不是根据业务） → THEN 急需业财一体化', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 业务数据滞后财务数据一个月以上 → THEN 急需', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '年营收超过 1 亿的企业', type: 'suitable' },
       { condition: '多组织、多地点的集团', type: 'suitable' },
       { condition: '小规模纳税人', type: 'unsuitable' },
       { condition: '业务高度灵活、非标的创意工作室', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '业财一体化是不是就是财务软件？', answer: '不是。财务软件是后视镜（记账），业财一体化是仪表盘（控制）。' },
      { question: '先搞财务还是先搞业务？', answer: '同步搞。但以财务合规为底线，以业务效率为目标。' }
    ]
  },
  {
    title: '财务数据和业务数据为什么永远对不上？',
    slug: 'financial-vs-business-data-mismatch',
    categorySlugs: ['financial-management', 'industry-insights'],
    tldr: '因为口径不同。业务看的是“发货金额”，财务看的是“开票金额”。如果不统一口径，两套数据永远是平行线。本文教你如何建立“数据转换桥梁”。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、决策者最关心的 3 个问题', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '到底是业务在造假，还是财务在乱算？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '怎样才能让我看到唯一的真相？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '对账对死人，能不能自动对？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、根因：时空错位', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '发货在今天，确认收入在下个月（在这个月发票没开）。业务报表显示这单成了，财务报表显示还没成。这是时间差。业务算含税价，财务算不含税价。这是空间差。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '三、落地路径：消除差异', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 1: 定义口径。全公司统一：所有报表以“财务确认收入”为准（或者以发货为准，但必须统一）。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 2: 暂估入账。发货了发票没到？先做暂估。保证业务和财务在同一个月体现。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 3: 自动对账。系统自动匹配发货单和发票。', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '四、关键清单 (Checklist)', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 月底是否强制要求业务停止录入，进行结账？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 是否有专门的岗位负责处理“未达账项”？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '五、真实案例：虚增的业绩', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '销售说今年做了 1 个亿，财务说只有 8000 万。老板发奖金按哪个发？按 1 亿发，公司亏了；按 8000 万发，销售走了。最后查出来，有 2000 万是“压货”，货发给经销商了但没卖出去，合同规定可以退。这种“发货”在财务上根本不能认。上系统后，这种单子被自动标记为“借出”，不算业绩。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '数据治理阶段。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 手工表满天飞 → THEN 必须上系统自动出表', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 财务月底加班超过 3 天只为对账 → THEN 必须上', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '业务量大的分销企业', type: 'suitable' },
       { condition: '项目制的工程公司', type: 'suitable' },
       { condition: '现款现货的零售小店', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '能做到 100% 准确吗？', answer: '很难。但能做到“差异可解释”。只要每一分钱的差异都知道原因，就是准确。' },
      { question: '业务不懂财务怎么办？', answer: '培训。不要求业务会做分录，但至少要知道什么是“权责发生制”（发货不等于收入）。' }
    ]
  },
  {
    title: '业财一体化项目，CIO 和 CFO 谁来主导？',
    slug: 'cio-vs-cfo-lead-integration',
    categorySlugs: ['manage-change', 'project-management', 'finance-management'],
    tldr: '最佳配置是“CFO 挂帅，CIO 操盘”。CFO 懂规则（Why），CIO 懂工具（How）。如果让 CIO 独自挂帅，项目会变成“技术自嗨”；如果让 CFO 独自挂帅，项目会变成“电子账本”。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、决策者最关心的 3 个问题', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '如果两人意见不合听谁的？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'CFO 不懂技术，怎么管项目？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'CIO 会不会被财务边缘化？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、角色定位', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: 'CFO 是“立法者”，规定什么能做、什么不能做。CIO 是“修路人”，把法律编进代码里。立法者不需要会修路，但修路人必须懂法。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '三、关键清单 (Checklist)', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 项目指导委员会里是否有 CFO 和 CIO 的名字？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 蓝图确认书是否由 CFO 最终签字？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '四、真实案例：两个和尚没水喝', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '某公司，CIO 和 CFO 平级。CIO 想推云端架构，CFO 说云端不安全。CFO 想推全面预算，CIO 说太复杂做不了。项目拖了一年。最后老板把两人都骂了一顿，任命 CFO 为项目经理，CIO 汇报给 CFO。项目三个月上线。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 1, version: 1, direction: 'ltr', 
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '项目组织架构搭建。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF CFO 是传统的记账型会计 → THEN 必须换掉或请外脑', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF CIO 只懂修电脑 → THEN 别让他碰 ERP', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '有战略型 CFO 的企业', type: 'suitable' },
       { condition: '财务话语权较弱的销售型公司', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '老板要不要挂帅？', answer: '要。但老板挂的是“名誉帅”。具体的“执行帅”必须是 CFO。' }
    ]
  },
  {
    title: '从“事后核算”到“事前控制”，企业要经历哪几步？',
    slug: 'post-accounting-to-pre-control',
    categorySlugs: ['financial-management', 'digital-transformation'],
    tldr: '这是财务转型的惊险一跃。大多数企业死在半路上，原因是对“控制”的误解。控制不是卡人，而是指路。本文揭示如何平滑过渡这一阵痛期。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、决策者最关心的 3 个问题', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '事前控制会不会把业务管死？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '我们需要多长时间才能做到？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、落地路径', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 1: 预算编报。先学会“算命”，明年要花多少钱。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 2: 柔性控制。超预算只预警，不阻断。让大家习惯“被盯着”。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 3: 刚性控制。超预算直接冻结。', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '三、关键清单 (Checklist)', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 预算是否已经下达分解到每个部门？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 是否有“预算调整流程”？（不能是死胡同）', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '四、真实案例：消失的差旅费', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '实施事前控制后，某公司差旅费下降了 30%。因为以前大家出差是“先斩后奏”，回来再报。现在必须先在系统申请“出差单”，预估费用，批了才能走。很多人嫌麻烦，可去可不去的就不去了。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '全面预算管理导入期。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 利润率极低，经不起浪费 → THEN 刚性控制', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 业务在高速增长，需要抢市场 → THEN 柔性控制', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '成本敏感型企业', type: 'suitable' },
       { condition: '不差钱的土豪公司', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '预算不够了怎么办？', answer: '走追加流程。追加要说明理由，要老板审批。增加了“花钱的难度”，自然大家就会省着花。' }
    ]
  },
  {
    title: '业财一体化的投入产出比 (ROI) 到底怎么算？',
    slug: 'roi-of-financial-integration',
    categorySlugs: ['financial-management', 'industry-insights'],
    tldr: '不要试图用“省了几个会计”来算 ROI。那是芝麻。真正的西瓜是“库存周转率提升”和“应收账款坏账率降低”。本文给你一套真实的 ROI 计算公式。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、决策者最关心的 3 个问题', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '投了几百万，什么时候能回本？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '怎么量化“管理透明度”的价值？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、计算公式', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '收益 = (库存占用资金减少额 × 资金成本) + (坏账减少额) + (合规风险避免额)。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '三、关键清单 (Checklist)', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 是否定义了基准线（Base Line）？上线前的库存是多少？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '四、真实案例：赚回来的 2000 万', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '某制造企业库存资金占用 1 个亿。上线一年后，通过精细化管理（按单生产、呆滞料预警），库存降到 8000 万。释放了 2000 万现金流。按 5% 利息算，每年省 100 万利息。更别说这 2000 万现金拿去再投资的收益。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '立项审批阶段。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 只看“省人” → THEN ROI 很难算平', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 看资金效率提升 → THEN ROI 很高', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '资产重、库存高的企业', type: 'suitable' },
       { condition: '轻资产服务业', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '隐性收益怎么算？', answer: '比如“决策速度提升”，很难直接算钱。但可以算“因为决策慢导致的损失机会”。' }
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

    // 2. Find existing post
    const existing = await payload.find({
        collection: 'posts',
        where: { title: { equals: postData.title } },
        limit: 1
    })

    const data = {
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
            keywords: '业财一体化, 财务共享, 数字化ROI'
        },
        categories: categoryIds,
        _status: 'published'
    }

    try {
        if (existing.docs.length > 0) {
            await payload.update({
                collection: 'posts',
                id: existing.docs[0].id,
                data: data
            })
            console.log(`Updated (V3.0): ${postData.slug}`)
        } else {
             await payload.create({
                collection: 'posts',
                data: { ...data, publishedAt: new Date().toISOString() }
            })
            console.log(`Created (V3.0): ${postData.slug}`)
        }
    } catch (e) {
        if (e.message?.includes('revalidatePath')) {
             console.log(`Published (revalidate warning): ${postData.slug}`)
        } else {
             console.error(`Failed to publish ${postData.slug}`, e)
        }
    }
  }
  process.exit(0)
}

publishBatch().catch(console.error)
