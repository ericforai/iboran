import { getPayload } from 'payload'
import configPromise from '../../src/payload.config'

const POSTS = [
  {
    title: 'ERP 二次开发到底是解法还是陷阱？',
    slug: 'erp-customization-solution-or-trap',
    categorySlugs: ['digital-transformation', 'industry-insights'],
    tldr: '50% 是解法，50% 是陷阱。适度的开发能让系统贴合核心竞争力，过度的开发会把系统变成无法升级、Bug 丛生的“烂尾楼”。关键在于区分“必要”和“想要”。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '“既然花了这么多钱买软件，为什么不能按我的要求改？”这是很多也是一把手最常说的一句话。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、陷阱在哪里', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '陷阱在于“固化落后”。很多二开需求本质上是在系统里复制手工时代的落后流程。比如“我要在这里加一个审批按钮”，其实可能是为了满足某个领导的权力欲，而不是为了效率。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、解法是什么', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '真正的解法是“PaaS 化开发”。不要去改 ERP 的内核（源码），而是在外挂的低代码平台上开发微应用。系统升级时，核心不受影响，外挂应用也能平滑迁移。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '需求评审阶段。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 需求是为了解决合规性或核心差异化 → THEN 开发', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 需求是为了“好看”或“习惯” → THEN 坚决不做', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '有 CIO 级别的技术把关人', type: 'suitable' },
       { condition: '愿意额外支付 20% 年维护费的企业', type: 'suitable' },
       { condition: '没有源代码管理能力的团队', type: 'unsuitable' },
       { condition: '甚至不愿意为此买测试服务器的公司', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '标准版实在难用怎么办？', answer: '先用 3 个月。很多时候是因为不熟悉。3 个月后如果真的影响效率，再改也不迟。不要在还没用之前就臆测它难用。' },
      { question: '二开的通常周期是多久？', answer: '简单的表单开发 3-5 天。涉及复杂业务逻辑的代码开发，起步就是 1-2 个月，且伴随着大量的 Bug 修复期。' }
    ]
  },
  {
    title: '哪些需求不应该通过二次开发解决？',
    slug: 'requirements-to-avoid-customization',
    categorySlugs: ['products-tech', 'industry-insights'],
    tldr: '1. UI 调整（颜色、字体、布局）；2. 违反会计准则的“骚操作”（如自动做两套账）；3. 极其低频的偶发业务（如一年一次的特殊退货）。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、UI 洁癖', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '“这个输入框能不能往左挪 5 像素？”这种需求纯属浪费生命。SaaS 的 UI 是经过专业交互设计的，随意改动不仅丑，还会在浏览器升级时错位。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、管理漏洞', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '“能不能系统不控库存，允许负库存出库？”这种需求是在通过技术手段合法化管理上的失职。系统应该堵住漏洞，而不是为漏洞开后门。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '需求过滤漏斗。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 需求可以通过“管理制度”解决 → THEN 不改系统', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 需求是物理世界无法绕过的硬约束 → THEN 改系统', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '追求投入产出比（ROI）的务实企业', type: 'suitable' },
       { condition: '流程标准化的连锁/零售业', type: 'suitable' },
       { condition: '把 ERP 当作面子工程来做的企业', type: 'unsuitable' },
       { condition: '不仅要功能还要改底层架构的小白客户', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '报表格式能改吗？', answer: '可以。报表开发属于“轻二开”，通常使用 BI 工具或报表工具配置即可，不涉及核心代码修改，风险较低。' },
      { question: '为什么顾问总劝我不要改？', answer: '因为顾问见过太多因为乱改系统而导致升级失败、数据错乱的惨剧。那是对你的保护，不是推卸责任。' }
    ]
  },
  {
    title: 'ERP 项目最容易被低估的工作是什么？',
    slug: 'underestimated-erp-tasks',
    categorySlugs: ['digital-transformation', 'industry-insights'],
    tldr: '数据清洗（Data Cleansing）。所有人都会低估这部分工作量。通常认为导导 Excel 就行了，结果发现物料重码、客户名称不统一、科目余额不平。这通常占项目 40% 的时间。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '软件可以买，数据买不来。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、物料的灾难', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '同一个螺丝，采购叫“M8螺丝”，生产叫“8mm 螺栓”，库存里有两条记录。如果不合并，系统永远跑不通 MRP（需求计划）。这是脏活累活，没人爱干。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、期初的噩梦', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '切换上线前一晚，库存必须实盘，财务必须结账。如果平时管理不善，这几天就是地狱。很多项目就死在上线前这一哆嗦，因为账实不符，系统无法初始化。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '项目计划排期。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 历史数据很脏 → THEN 预留至少 1 个月清洗期', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 没有主数据专员 → THEN 项目延期风险 80%', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '有专门的主数据管理部门（MDM）', type: 'suitable' },
       { condition: '愿意花钱请外包做数据清洗的企业', type: 'suitable' },
       { condition: '指望实施顾问帮忙录数据的企业', type: 'unsuitable' },
       { condition: '连 Excel 函数都不会用的业务团队', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '能不能边上线边改数？', answer: '绝对不行。上线那一刻数据必须是静态准确的。否则就像在飞行中修引擎，必坠机。' },
      { question: '历史单据要不要导？', answer: '不要。只导“余额”和“未结单据”（如发了货没开票的）。关闭的订单就让它留在老系统或归档吧，别折腾。' }
    ]
  },
  {
    title: '系统集成失败通常发生在哪一步？',
    slug: 'system-integration-failure-points',
    categorySlugs: ['products-tech', 'digital-transformation'],
    tldr: '通常不是技术连不通（API 都是现成的），而是业务逻辑对不上（Mapping）。比如 CRM 里的“客户”在 ERP 里对应的是“渠道商”，字段含义不同导致数据传输错误。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、鸡同鸭讲', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '商城系统里的“订单完成”是指支付成功，ERP 里的“订单完成”是指发货且开票。状态值的映射如果没有定义好，财务就会在没发货的时候确认收入，引发合规风险。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、异常处理缺失', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '正常流程都能跑通。但如果网络断了一下？如果数据格式非法？如果没有“重试机制”和“错误日志”，集成就会变成黑盒，丢了单子都不知道去哪找。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '集成方案设计。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 两个系统主数据编码未统一 → THEN 集成免谈', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 仅需要单向传递 → THEN 难度由低', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '使用成熟中间件（如 ESB/iPaaS）的企业', type: 'suitable' },
       { condition: '有清晰的接口定义文档（Swagger）', type: 'suitable' },
       { condition: '甚至不知道什么是 API 的小白客户', type: 'unsuitable' },
       { condition: '异构系统太多且无统一标准的蜘蛛网架构', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '点对点集成好还是用中台好？', answer: '系统少于 3 个，点对点（省钱）；系统多于 5 个，必须用中台（解耦）。否则后期维护复杂度呈指数级上升。' },
      { question: '实时集成还是定时同步？', answer: '尽量定时（异步）。实时强一致性对系统稳定性挑战极大。除非是“库存扣减”这种必须实时的场景，否则建议 T+1 或 15分钟一次。' }
    ]
  },
  {
    title: '为什么“能做”和“该不该做”是两回事？',
    slug: 'capability-vs-feasibility',
    categorySlugs: ['manage-change', 'industry-insights'],
    tldr: '技术上万能，商业上无能。技术上可以通过复杂的代码实现“按老板心情自动审批”，但商业上这是灾难。顾问的价值就是告诉你“别做傻事”，尽管技术上能做到。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '客户问：“系统能不能实现？”顾问答：“能。”然后客户就以为“没问题”。这是最大的沟通误解。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、维护成本的黑洞', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '能做，意味着要几百万开发费；意味着每次升级都要重写；意味着每天要花 2 小时检查数据。从全生命周期成本（TCO）看，这件事就是亏本的。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、系统性能的杀手', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '你非要实时计算每一个 SKU 的日平均毛利。技术上能写 SQL 算出来，但系统会卡死 5 分钟。为了一个非核心指标通过牺牲全员体验，值得吗？', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '需求取舍决策。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 实现成本 > 业务带来的收益 → THEN 不做', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 会导致系统严重变慢 → THEN 不做', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '有理性 ROI 意识的决策层', type: 'suitable' },
       { condition: '信任专业顾问建议的团队', type: 'suitable' },
       { condition: '认为“我出钱你就得听我的”土豪客户', type: 'unsuitable' },
       { condition: '不考虑后果的强执行力团队', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '顾问说做不了是不是在推脱？', answer: '大部分时候不是。顾问是按天收费的，多做功能对他有利。如果他拦着你，说明这事儿真的坑太大，他在救你。' },
      { question: '怎么判断一个需求该不该做？', answer: '三个标准：1. 合规必须；2. 效率显著提升；3. 客户体验质的飞跃。如果都不占，只是为了“方便一点”，那就别做。' }
    ]
  },
  {
    title: 'ERP 实施中，哪些问题一定要当场拒绝？',
    slug: 'points-to-reject-during-implementation',
    categorySlugs: ['manage-change', 'project-management'],
    tldr: '1. “能不能把必填项去掉？”（不行，数据会脏）；2. “能不能帮我把以前的烂账平了？”（不行，这是造假）；3. “能不能不要培训直接上线？”（不行，这是自杀）。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '作为项目经理，学会说“No”比学会说“Yes”更重要。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、破坏数据完整性的需求', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '业务员嫌烦，不想填“客户所属行业”。如果同意了，以后市场部分析客户画像时数据就是空的。前端的偷懒就是对后端的犯罪。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、越过内控红线的需求', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '“能不能我申请完了自动帮我批准？”如果这样，还要审批流干什么？这是严重的内控缺陷（SOD 冲突）。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '关键用户现场调研。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 需求违反审计风控原则 → THEN 当场拒绝', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 需求导致后续数据链断裂 → THEN 当场拒绝', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '有底线、有原则的项目经理', type: 'suitable' },
       { condition: '制度化管理严谨的企业', type: 'suitable' },
       { condition: '习惯“人治”大过“法治”的老板', type: 'unsuitable' },
       { condition: '只想快点结项草草了事的乙方', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '拒绝了客户不高兴怎么办？', answer: '要把厉害关系讲清楚。你是专家，客户花钱是买你的专业建议，不是买你的顺从。如果因为顺从导致项目失败，客户更不高兴。' },
      { question: '必填项太多确实影响效率？', answer: '考虑技术手段。如下拉菜单、默认值、OCR 识别等，用技术提升体验，而不是砍掉数据校验。' }
    ]
  },
  {
    title: '为什么 ERP 项目越到后期越难推进？',
    slug: 'why-erp-projects-stall-late-stage',
    categorySlugs: ['manage-change', 'project-management'],
    tldr: '因为前期都在“画饼”（蓝图设计），后期开始“吃饼”（UAT 测试）。这时候细节暴露，利益冲突显现。业务部门发现系统上线后工作量变大了（以前如果不填，现在必填），开始消极抵制。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、透明度的恐惧', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '上线前，库存满库乱放没人管。上线后，哪个库位有什么一清二楚。管理灰度的消失，让很多既得利益者恐慌，他们会通过“挑刺系统不好用”来阻碍上线。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、疲劳期', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '项目持续超过 6 个月，全员进入疲劳期。热情消退，加上还要兼顾日常工作，大家只想赶紧结束或者干脆拖黄。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '项目冲刺/上线前夕。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 进度停滞不前 → THEN 开高层动员会，杀鸡儆猴', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 问题积压太多 → THEN 降低上线标准，先跑通主流程', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '有一把手强力站台的项目', type: 'suitable' },
       { condition: '设定了明确奖惩机制的项目', type: 'suitable' },
       { condition: '项目经理没有实权的弱势项目', type: 'unsuitable' },
       { condition: '业务部门频繁更换负责人的项目', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '如何克服上线恐惧症？', answer: '并行（并行运行新老系统）。虽然辛苦，但心里有底。通常并行 1 个月，确认数据一致后，彻底切断老系统。' },
      { question: '关键用户抵制怎么办？', answer: '搞定他的老板。或者把系统掌握程度作为他的绩效考核指标。不要试图用道理说服装睡的人。' }
    ]
  },
  {
    title: '什么时候应该停下 ERP 项目重新评估？',
    slug: 'when-to-pause-erp-project',
    categorySlugs: ['manage-change', 'project-management'],
    tldr: '1. 核心业务流程发生重大变更（如突然要裁撤整个事业部）；2. 关键用户大量离职；3. 定制化开发量超过 30% 且还在持续增加。此时停下来比硬着头皮做完止损更小。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '方向错了，停下来就是进步。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、地基塌了', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '项目做到一半，公司战略变了。比如原来是做直销的（B2C），突然决定转做分销（B2B）。原来的蓝图全废。这时候必须停工重设。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、失控的开发', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '当你发现标准功能已经被改得面目全非，且 Bug 多到修不过来时，说明已经掉进坑里了。如果不叫停重构，上线之日就是崩溃之时。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '项目中期体检。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 重大客观条件变更 → THEN 暂停', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 继续投入 ROI 为负 → THEN 终止', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '具备战略定力的决策层', type: 'suitable' },
       { condition: '敢于承认沉没成本的企业', type: 'suitable' },
       { condition: '为了面子死撑到底的领导', type: 'unsuitable' },
       { condition: '已经支付了全款且无法退款的情况（比较难办）', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '暂停会影响士气吗？', answer: '肯定会。但“长痛不如短痛”。暂停期间要做好复盘，说明原因，让大家看到重启后的希望，而不是单纯的失败。' },
      { question: '怎么和软件商谈？', answer: '回归合同。通常合同里有变更条款或暂停条款。实在不行，协商把剩余人天挂起，等以后再用。' }
    ]
  },
  {
    title: '钉钉 / 协同系统和 ERP 打通，最难的是什么？',
    slug: 'dingtalk-erp-integration-challenges',
    categorySlugs: ['digital-transformation', 'products-tech'],
    tldr: '难在“映射”。钉钉里你是“张总”，ERP 里你是“001号员工”。钉钉的审批流是自由的，ERP 的审批流是严谨的。把灵活的互联网基因和严谨的管理软件基因强行缝合，排异反应很强。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、组织架构同步', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '钉钉上的组织往往是为了沟通方便（如虚拟项目组），ERP 上的组织是为了核算（行政部门）。这两棵树往往不一样。同步时是覆盖还是共存？是个大问题。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、待办消息不准', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: 'ERP 推送一条审批到钉钉，领导在钉钉批了，但因为网络延迟，ERP 没收到回调。结果领导以为批了，ERP 还在等。这种“状态不一致”最搞人心态。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '移动办公集成。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 使用官方标准集成器 → THEN 风险可控', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 自己写代码硬连 → THEN 维护成本极高', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: 'YonSuite/YonBIP 原生支持钉钉集成的环境', type: 'suitable' },
       { condition: '组织架构相对规范统一的企业', type: 'suitable' },
       { condition: '钉钉随意拉群、随意改名的混乱管理环境', type: 'unsuitable' },
       { condition: '老旧 ERP 版本不支持 API 接口', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '还要不要在 ERP 里审批？', answer: '建议移动端优先。大老板基本不用电脑。把所有审批（请假、报销、订单）都推到手机端，能极大提升效率。' },
      { question: '单点登录（SSO）怎么做？', answer: '这是基础。必须实现“钉钉扫码”或“免密登录”ERP。千万别让用户记两套密码。' }
    ]
  },
  {
    title: 'ERP 运维阶段最容易被忽视的风险是什么？',
    slug: 'erp-maintenance-risks',
    categorySlugs: ['manage-change', 'industry-insights'],
    tldr: '关键人员离职。系统不是“上完就完了”，它是活的。如果没有懂系统配置的管理员（Admin），半年后流程调整没人会配，系统就会逐渐僵化，最后被弃用。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '上线是生孩子，运维是养孩子。很多企业生完就不管了。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、知识流失', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '当时配置系统的人走了，没留下文档。现在要加个新产品类别，没人知道去哪加，也不敢乱点，怕系统崩了。于是大家开始记手工账。系统名存实亡。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、版本脱节', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: 'SaaS 每月更新，但企业没有跟进新功能。好用的新特性没用上，还守着旧流程抱怨系统不好用。运维不是“修电脑”，是“运营系统”。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '全生命周期管理。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 设立专职 IT 运维岗位 → THEN 系统寿命长', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 兼职人员顺便管管 → THEN 没戏', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '建立了 IT 服务管理体系（ITSM）的企业', type: 'suitable' },
       { condition: '购买了厂商原厂运维服务的客户', type: 'suitable' },
       { condition: '认为软件是一次性消费品的企业', type: 'unsuitable' },
       { condition: '离职交接流程形同虚设的组织', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '运维费该不该交？', answer: '必须交。这是保险。不仅是修 Bug，更是买未来的升级权和专家咨询时间。' },
      { question: '自己运维难吗？', answer: 'SaaS 运维相对简单（不用管服务器），重点是业务配置。建议培养 1-2 名“关键用户”转型为“业务系统管理员”。' }
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
                    keywords: 'ERP二开, 系统集成, 项目风险管理'
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
