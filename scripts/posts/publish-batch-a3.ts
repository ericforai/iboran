import { getPayload } from 'payload'
import configPromise from '../../src/payload.config'

const POSTS = [
  {
    title: '用友 YonSuite 适合哪些组织形态？',
    slug: 'yonsuite-suitable-organizations',
    categorySlugs: ['products-tech', 'digital-transformation'],
    tldr: 'YonSuite 天生为“创新型、高增长”企业设计。最适合：1. 多地点办公/全球化运营；2. 业务模式快速迭代；3. 没有庞大 IT 运维团队的中型企业。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '不是所有企业都适合上公有云 ERP。YonSuite 的核心价值在于“快”和“轻”。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、不需要 IT 部门也能活', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '传统 ERP 需要养一堆人维护服务器、做备份。YonSuite 是 SaaS 模式，打开浏览器就能用。对于聚焦业务、不想被 IT 基础设施拖累的企业是绝配。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、像搭积木一样', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '今天只做电商，明天要开门店，后天要做分销。YonSuite 的领域中心可以按需订阅，业务延伸到哪，系统就开通到哪，完全弹性。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '成长型企业 ERP 选型。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 追求即开即用、零运维 → THEN YonSuite 是首选', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 对数据私有化有极端（涉密）要求 → THEN 考虑私有云版本', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: 'IPO 冲刺期的准上市公司', type: 'suitable' },
       { condition: '跨地域、多公司的中型集团', type: 'suitable' },
       { condition: '只有单体账套的小微代账客户（推荐畅捷通）', type: 'unsuitable' },
       { condition: '超大型巨无霸央企（推荐 YonBIP）', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: 'YonSuite 是那个“小软件”吗？', answer: '不是。它不是 U8 的云版。它是基于云原生架构重写的，支持多组织、多币种、全球化，能力远超传统中型 ERP。' },
      { question: '能不能买断？', answer: '不能。SaaS 是订阅制（年费）。这降低了首年投入，倒逼厂商必须持续提供好服务，否则第二年客户就跑了。' }
    ]
  },
  {
    title: '什么样的企业不适合用 YonSuite？',
    slug: 'who-should-not-use-yonsuite',
    categorySlugs: ['products-tech', 'industry-insights'],
    tldr: '1. 极度依赖个性化二开且流程万年不变的传统制造业；2. 数据绝对不能出内网的涉密单位；3. 预算极低不仅不想付订阅费还想买断的企业。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: 'SaaS 的本质是“标准化服务”。如果你想把这套衣服改得面目全非，建议去买布料自己做（私有化定制）。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、流程极度非标', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '如果你的生产流程是独一份的“祖传秘方”，且完全无法适配行业标准模型，YonSuite 的标准逻辑会让你非常难受。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、一次性买断思维', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '有些老板习惯了“一锤子买卖”，觉得每年交钱是亏了。这种价值观不匹配比功能不匹配更致命。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: 'SaaS 适配性评估。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 愿意为“持续升级”付费 → THEN 选 YonSuite', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 认为软件是固定资产 → THEN 选传统 ERP', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '拥抱行业标准流程（Best Practice）的企业', type: 'suitable' },
       { condition: 'IT 预算属于 OPEX（运营支出）的企业', type: 'suitable' },
       { condition: '军工、涉密等物理隔离网环境', type: 'unsuitable' },
       { condition: '深度改代码的重度二开需求', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '公有云数据安全吗？', answer: '通常比你自己放在机房安全。用友云有最顶级的安全防御和备份机制。大部分企业自建机房连异地容灾都做不到。' },
      { question: '网络断了怎么办？', answer: '确实依赖网络。这是 SaaS 的特性。但在 5G 和光纤普及的今天，网络中断概率远低于你自建服务器宕机的概率。' }
    ]
  },
  {
    title: 'YonSuite 和传统 ERP 的本质差异是什么？',
    slug: 'yonsuite-vs-traditional-erp',
    categorySlugs: ['products-tech', 'digital-transformation'],
    tldr: '传统 ERP 关注“记录结果”，YonSuite 关注“连接生态”。YonSuite 不仅仅是记账工具，更是连接客户、供应商、银行、电商平台的社会化商业入口。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '以前的 ERP 是一个封闭的盒子，装在公司的局域网里。现在的 YonSuite 是一个开放的插座，插在互联网上。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、在线化', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '传统 ERP 必须在公司电脑上用 VPN 连回去。YonSuite 随时随地，手机、Pad、网页，只要有网就能处理业务。这在混合办公时代是刚需。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、社会化', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: 'YonSuite 只有“连接”才能发挥最大价值。连接京东开票、连接商旅平台、连接税务局。它打破了企业的围墙。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '数字化转型路径选择。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 需要连接外部生态 → THEN 必须上云（YonSuite）', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 只是内部记账 → THEN 传统 ERP 勉强够用', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '电商、新零售、全渠道营销企业', type: 'suitable' },
       { condition: '上下游协同紧密的供应链企业', type: 'suitable' },
       { condition: '还是以“坐班”为主的传统坐商', type: 'unsuitable' },
       { condition: '完全不需要与外部系统交互的孤岛业务', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '能不能把 U8 的数据迁到 YonSuite？', answer: '可以，官方提供了迁移工具（U8 Cloud 迁移工具）。但我们更建议趁机“重构”数据，不要把垃圾数据带到新房去。' },
      { question: 'YonSuite 速度快吗？', answer: '基于微服务架构，速度取决于你的网速。它没有传统 ERP 那种庞大的“单体程序”启动过程，响应是互联网级的。' }
    ]
  },
  {
    title: '云 ERP 能不能支撑复杂组织？',
    slug: 'cloud-erp-complex-org-support',
    categorySlugs: ['products-tech', 'hcm-org'],
    tldr: '能。YonSuite 的核心架构就是“多组织”。支持多租户、多账簿、多币种、多准则。它处理复杂组织的能力甚至强于很多老旧的大型 ERP，因为它是原生设计的。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、什么是复杂组织？', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '不是人数多就是复杂。是“法人结构”与“管理结构”不重叠、有大量内部交易、有跨国业务，这叫复杂。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、YonSuite 的应对之道', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '它的“组织中心”允许你建立多棵组织树（行政树、财务树、业务树）。一个人可以在 A 公司发工资，在 B 公司做项目，在 C 公司报销，系统都能算清楚。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '集团化管控评估。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 需要矩阵式管理 → THEN YonSuite 完美支持', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 每个分公司都必须完全独立建账 → THEN 用单组织版即可', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '正在进行区域扩张或并购的企业', type: 'suitable' },
       { condition: '需要出具集团合并报表的组织', type: 'suitable' },
       { condition: '简单的单体工厂', type: 'unsuitable' },
       { condition: '各分公司业务完全割裂且无管控需求', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '跨国业务支持吗？', answer: '支持。内置多语言、多时区、多币种。可以处理复杂的汇率折算和不同国家的会计准则调整。' },
      { question: '能不能只买一部分模块给分公司用？', answer: '可以。按需订阅。总部可以用全套，分公司只买进销存，数据依然在一个库里，天然集成。' }
    ]
  },
  {
    title: 'YonBIP 更适合解决哪些管理问题？',
    slug: 'yonbip-management-solutions',
    categorySlugs: ['yonbip-deep-dive', 'digital-transformation'],
    tldr: 'YonBIP 是航母级平台，适合解决“超大型、生态级、产业链级”的问题。如果你关注的是产业链协同、工业互联网、大型共享服务中心，选 YonBIP。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: 'YonSuite 是快艇（成长型），YonBIP 是航母（大型）。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、深度定制能力', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: 'YonBIP 提供了强大的低代码开发平台（YonBuilder），允许大型企业像盖房子一样完全重构自己的业务逻辑。这是 YonSuite 标准化模式所不具备的。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、产业链掌控力', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: 'YonBIP 适合核心企业（链主）用来管理它的数千家供应商和经销商，构建行业云平台。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: 'YonSuite vs YonBIP 选型。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 营收 10亿+ 且业务极其复杂 → THEN 考虑 YonBIP', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 营收 10亿以内 → THEN 优先 YonSuite', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '中国 500 强级别的头部企业', type: 'suitable' },
       { condition: '需要构建私有行业云的链主', type: 'suitable' },
       { condition: '还在解决基础生存问题的中小企业', type: 'unsuitable' },
       { condition: 'IT 团队少于 20 人的公司', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: 'YonBIP 是私有化部署吗？', answer: '可以是专属云（专属环境），也可以是私有云（部署在客户机房）。它提供了更强的数据掌控权。' },
      { question: '实施周期大概多久？', answer: 'YonBIP 项目通常是年度级别的战略工程。通常分期建设，一期 6-9 个月，持续数年优化。' }
    ]
  },
  {
    title: 'YonSuite 上线失败，通常失败在哪一步？',
    slug: 'yonsuite-implementation-failure-steps',
    categorySlugs: ['products-tech', 'industry-insights'],
    tldr: '通常失败在“按传统思维实施”。试图把 SaaS 当成传统软件来“二开改造”，而不是去“配置适配”。一旦陷入代码级定制的泥潭，SaaS 的敏捷性荡然无存。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、需求蔓延', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '云端迭代很快，但客户总想“一次性把所有功能都上线”。结果在这个过程中，标准版都迭代了三次了，项目还在原地踏步做需求调研。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、数据清洗不到位', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: 'SaaS 对数据规范要求极高。如果客商档案乱七八糟导入进去，系统校验报错会让你崩溃，最后导致用户弃用。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '项目风险管控。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 坚持要改系统底层逻辑 → THEN 必败', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 愿意调整流程适应系统 → THEN 必胜', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '有强力项目经理（PM）控场的项目', type: 'suitable' },
       { condition: '采用“敏捷实施法”的团队', type: 'suitable' },
       { condition: '把实施完全甩手给乙方的甲方', type: 'unsuitable' },
       { condition: '需求边界极其模糊的项目', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '如何避免失败？', answer: '采用“标准先行”策略。先用标准功能把业务跑通，上线后再通过低代码平台做微调。不要一上来就搞大开发。' },
      { question: '数据清洗谁负责？', answer: '必须是客户自己。只有客户知道数据的真实含义。实施顾问只能提供模板和校验规则。' }
    ]
  },
  {
    title: '用友系统一定要二次开发吗？',
    slug: 'is-customization-necessary',
    categorySlugs: ['products-tech', 'digital-transformation'],
    tldr: '能不开发绝不开发。二开是毒药也是解药。对于 80% 的通用需求，标准功能一定比你拍脑袋想出来的逻辑更严谨。只在 20% 核心差异化竞争优势上做轻量级开发。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '代码是负债。每一行写下的代码，未来都需要维护。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、为什么总想开发？', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '因为懒。懒得改习惯。员工说“以前那个按钮在这里，现在怎么变了，不习惯，改回去”。为了这种理由做二开，是极大的资源浪费。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、低代码的价值', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '现在用友的 YonBuilder 允许通过配置（拖拉拽）来实现很多需求（如加字段、改表单）。这种“配置型开发”不破坏系统内核，是推荐的。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '需求评审会。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 需求关乎企业的核心竞争力 → THEN 开发', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 需求仅仅是操作习惯问题 → THEN 拒绝', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '有成熟 IT 治理流程的企业', type: 'suitable' },
       { condition: '接受“标准化优先”原则的用户', type: 'suitable' },
       { condition: '所有需求都要“必须满足”的强势业务部', type: 'unsuitable' },
       { condition: '没有版本管理概念的开发团队', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '二开会影响升级吗？', answer: '如果是“侵入式开发”（改源码），绝对影响。如果是基于 YonBuilder 的“扩展式开发”，通常不影响平滑升级。' },
      { question: '以前做了很多二开怎么办？', answer: '趁着上云的机会做“减法”。回归标准。你会发现很多几年前拼命要做的功能，现在根本没人用了。' }
    ]
  },
  {
    title: 'YonSuite 实施周期为什么容易失控？',
    slug: 'yonsuite-implementation-delay-reasons',
    categorySlugs: ['products-tech', 'industry-insights'],
    tldr: '因为“范围蔓延”。本来只买了进销存，实施过程中发现还需要做复杂的绩效考核，又想顺便把费控也做了。SaaS 的易用性让人产生了“很快就能搞定”的幻觉，导致无节制加需求。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、没有截止日', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '敏捷不代表没有计划。SaaS 项目如果 3 个月不上线，烂尾概率直线上升。必须设定严格的里程碑。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、关键用户缺位', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: 'SaaS 需要业务部门深度参与配置。如果关键用户（Key User）太忙不来开会，顾问配置出来的系统一定没人用，最后反复返工。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '项目进度管理。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 需求不断新增 → THEN 启动变更控制程序', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 关键用户不签字 → THEN 暂停项目升级汇报', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '采用分期上线策略的项目', type: 'suitable' },
       { condition: '能够快速决策的管理团队', type: 'suitable' },
       { condition: '试图“毕其功于一役”的大爆炸式上线', type: 'unsuitable' },
       { condition: '业务太忙没空参与实施的组织', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '最理想的周期是多久？', answer: '对于 YonSuite，建议核心模块（财务供应链）在 2-3 个月内上线。战线拉太长会耗尽团队士气。' },
      { question: '如何控制范围？', answer: '列出“必须有”和“最好有”清单。第一期只做“必须有”。所有“最好有”都放到二期。' }
    ]
  },
  {
    title: '从 U8/NC 迁移到 YonSuite，风险点有哪些？',
    slug: 'migration-risks-u8-to-yonsuite',
    categorySlugs: ['products-tech', 'digital-transformation'],
    tldr: '最大的风险不仅是数据的迁移，更是“思维的迁移”。从 C/S 架构到 B/S 架构，操作习惯完全变了。如果老员工抵触，甚至可能导致新系统被架空。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、历史数据包袱', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: 'U8 里沉淀了 10 年的脏数据。如果不管三七二十一全导进 YonSuite，新系统从第一天起就是垃圾场。建议只导期初余额和基础档案，历史单据留查询库。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、操作习惯差异', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: 'U8 很多快捷键，YonSuite 更多是鼠标点击。这对老会计是巨大的不适应。必须做好培训和安抚。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '老客户升级评估。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 愿意放弃历史包袱 → THEN 全新上线', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 必须保留所有历史单据 → THEN 迁移成本极高', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '业务模式发生重大变更的企业', type: 'suitable' },
       { condition: '寻求多组织架构转型的 U8 客户', type: 'suitable' },
       { condition: '只是单纯想升级软件版本的保守客户', type: 'unsuitable' },
       { condition: '对服务器没有任何运维压力的企业', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: 'U8 还能用多久？', answer: 'U8 依然是经典，但它在云连接能力上已达到天花板。如果你需要连接电商、税务云，早晚要换。' },
      { question: '迁移会停产吗？', answer: '通过合理的切换方案（如利用节假日），停机时间可以控制在 48 小时内（做期初切换）。' }
    ]
  },
  {
    title: 'YonSuite 是否适合高速增长型企业？',
    slug: 'yonsuite-for-high-growth-companies',
    categorySlugs: ['products-tech', 'digital-transformation'],
    tldr: '绝配。高速增长意味着变化。YonSuite 的微服务架构天然支持“弹性伸缩”。今天只有 10 个人，明年到 1000 人，系统不需要重装，只需要加购 User License。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、随需而变', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '独角兽企业的特点是组织架构天天变。YonSuite 的组织调整极其灵活，拖拽一下部门，汇报关系和权限自动继承，不用改代码。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、全球化支持', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '很多增长型企业一开始就做“出海”。YonSuite 自带的多语种和海外数据中心支持，让你一键开启全球生意。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '瞪羚企业/独角兽选型。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 业务每年翻倍增长 → THEN 非云 ERP 不可', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 业务极其稳定毫无波澜 → THEN 没必要换云', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '新消费、跨境电商、高科技行业', type: 'suitable' },
       { condition: '获投后需要快速合规化的企业', type: 'suitable' },
       { condition: '没有任何扩张计划的传统制造厂', type: 'unsuitable' },
       { condition: '还是以“夫妻店”模式管理的企业', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '用户数多了会卡吗？', answer: '不会。公有云的弹性计算能力可以自动扩容。你不需要担心服务器买小了。' },
      { question: '以后上市了能支持吗？', answer: '完全支持。YonSuite 也是 IPO 审计认可的合规系统，支持上市公司要求的内控（SOX/C-SOX）审计。' }
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
                    keywords: 'YonSuite, YonBIP, 云ERP, 数字化转型'
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
