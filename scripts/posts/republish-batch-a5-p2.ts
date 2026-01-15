import { getPayload } from 'payload'
import configPromise from '../../src/payload.config'

const POSTS = [
  {
    title: '运维体系：系统上线了，顾问撤了，谁来管？',
    slug: 'it-maintenance-support-strategy',
    categorySlugs: ['digital-transformation', 'industry-insights'],
    tldr: '很多企业以为系统上线就是终点，其实是“运维噩梦”的起点。顾问撤场后，甲方 IT 如果接不住，系统会在 6 个月内迅速“腐烂”（功能没人用、数据没人管）。必须建立 L1/L2/L3 分级运维体系。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、决策者最关心的 3 个问题', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '为什么 IT 部门总是说“忙不过来”？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '能不能不买原厂的高级服务（MA）？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '业务部门为什么总是骂 IT？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、运维不等于修电脑', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '企业级系统的运维，核心不是“修 Bug”（那个归原厂管），而是“业务支持”。比如：月底关账关不上了、新加了个客户类别怎么配、流程卡住了怎么通过。这些都是业务问题，不是技术问题。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '三、落地路径：三级支持', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'L1（关键用户）：解决 80% 的“不会用”问题。就在业务部门内部消化。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'L2（内部 IT）：解决 15% 的“配参数”和“数据修正”问题。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'L3（原厂/顾问）：解决 5% 的“代码 Bug”和“新需求开发”问题。', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '四、关键清单 (Checklist)', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 是否建立了“工单系统”？（口头喊 IT 是无效的）', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 顾问撤场前，是否移交了《系统配置文档》？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '五、真实案例：断层的代价', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '某公司上线后，关键用户离职了，IT 也不懂业务。新来的销售员不知道怎么开单，就随便乱录。三个月后，系统里的数据全乱了，报表根本没法看。最后不得不花大钱请顾问回来“二次实施”。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '系统上线后。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF IT 团队 < 3 人 → THEN 必须买原厂运维服务', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '日常支持、小修小补', type: 'suitable' },
       { condition: '重大流程变更（那是新项目）', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: 'IT 运维人员的 KPI 怎么定？', answer: 'SLA（服务等级协议）。比如：一级故障（全厂停工）必须在 30 分钟内响应，4 小时内解决。' }
    ]
  },
  {
    title: '版本升级：升还是不升？这是个问题',
    slug: 'software-upgrade-dilemma',
    categorySlugs: ['digital-transformation', 'products-tech'],
    tldr: '软件升级就像给房子装修。不装修（不升级），住着不舒服，安全有隐患。装修（升级），要花钱，还要搬出去住几天（停机）。核心原则是：没事别瞎折腾。除非有不得不升的理由。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、决策者最关心的 3 个问题', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '现有的版本用的好好的，为什么要升？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '升级会不会把以前开发的已习惯的功能搞没了？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '不升级原厂还管不管？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、技术债', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '软件是有寿命的。如果你一直停留在 10 年前的版本（比如 Windows XP），虽然也能用，但安全补丁没人发了，新的硬件（打印机、扫描枪）不支持了，新的接口（银行、税局）连不上了。这就是“技术债”。欠的债迟早要还。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '三、落地路径：沙箱验证', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 1: 评估“二开”兼容性。这是最大的雷区。原厂标准功能升级没问题，但你以前找人定制的代码可能会报错。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 2: 沙箱测试。在测试环境先升，让关键用户跑一轮全流程。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 3: 找个长假升。比如国庆、春节，工厂停工的时候搞。', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '四、关键清单 (Checklist)', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 升级前是否做了全量备份？（这是救命药）', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 是否通知了所有用户暂停操作？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '五、真实案例：被迫升级', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '某企业一直用着 8 年前的 ERP 版本。结果金税四期上线了，税局要求发票接口必须升级。但旧版 ERP 根本不支持新的接口协议。最后为了这张发票，被迫花了 200 万把整个 ERP 升级了。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '系统生命周期管理。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 涉及合规（税务、安全）问题 → THEN 必须升，立刻升', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 只是为了 UI 好看一点 → THEN 别升', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '大版本升级（V1 到 V2）', type: 'suitable' },
       { condition: '日常补丁（Patch）', type: 'suitable' }
    ],
    atomicFAQs: [
      { question: 'Cloud（云）版本还需要升级吗？', answer: '不需要。SaaS 的好处就是自动升级，你都不用操心。但坏处是，厂商升了之后，你的定制功能可能会挂（如果厂商不讲武德的话）。' }
    ]
  },
  {
    title: 'IT 审计：为什么上市前必须过这一关？',
    slug: 'it-audit-compliance-segregation-of-duties',
    categorySlugs: ['digital-transformation', 'industry-insights', 'financial-management'],
    tldr: 'IT 审计审的不是代码，而是“规矩”。核心是 SoD（职责分离）。制单的人不能审核，管钱的人不能管账。如果你还在用 Admin 账号全公司通吃，或者张三把密码告诉李四，那 IPO 就悬了。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、决策者最关心的 3 个问题', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '审计进场要查什么？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '我们现在全是管理员账号，怎么办？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '日志没开怎么办？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、权力关进笼子', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: 'IT 系统最大的风险是“超级管理员”作恶。IT 审计就是要确保：任何敏感操作（改价格、付款、删数据）都有痕迹，且受到牵制。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '三、落地路径：整改', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 1: 账号清理。一人一号，实名制。坚决取缔 "admin", "finance", "manager" 这种公用账号。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 2: 权限互斥 (SoD)。检查有没有人既能“申请采购”又能“批准采购”。如果有，拆分。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 3: 日志审计。开启系统系统日志，保留至少 3 年。', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '四、关键清单 (Checklist)', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ IT 部门是否有权限直接修改业务数据库？（这是大忌）', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 离职员工的账号是否在 24 小时内冻结？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '五、真实案例：删库跑路', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '某拟上市公司，IT 经理觉得工资低，离职前用 Admin 账号把生产数据库删了。虽然有备份，但恢复数据停产了 2 天。审计发现该公司没有做数据库权限隔离，直接给予了“重大内控缺陷”评价，IPO 被暂停。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '合规经营。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 计划上市或融资 → THEN 提前 1 年搞 IT 审计', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '权限管理、变更管理', type: 'suitable' },
       { condition: '业务业绩审计（那是财务的事）', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '小公司需要搞这一套吗？', answer: '不用太复杂。但“一人一号”和“不管钱的人不管账”是底线，是为了防止贪污。' }
    ]
  },
  {
    title: '灾备演练：如果机房着火了，数据还在吗？',
    slug: 'disaster-recovery-plan-drill',
    categorySlugs: ['digital-transformation', 'products-tech'],
    tldr: '所有人都知道要备份，但很少有人做恢复演练。备份不等于安全。只有能恢复的备份才是有效的。灾备不仅是技术问题，更是业务连续性（BCP）的底线。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、决策者最关心的 3 个问题', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '如果勒索病毒来了，我们能活下来吗？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '系统恢复要多久？（RTO）', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '最多会丢多少数据？（RPO）', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、不要有侥幸心理', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '机房漏水、硬盘损坏、黑客攻击、甚至清洁工误拔电源。这些小概率事件一旦发生，对数字化企业就是灭顶之灾。数据是企业的血液，备份是唯一的解药。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '三、落地路径：备份 3-2-1 原则', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '3 份备份：一份原件，两份拷贝。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '2 种介质：存在硬盘里，也要刻在光盘/磁带里（防止病毒把硬盘也加密了）。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '1 个异地：一份必须放在办公楼以外的地方（防止火灾一锅端）。云备份是最好的异地。', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '四、关键清单 (Checklist)', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 上一次做“全量数据恢复演练”是什么时候？（如果超过一年，等于没做）', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 关键岗位（财务、销售）是否有纸笔办公的应急预案？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '五、真实案例：微盟删库事件', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '国内某知名 SaaS 服务商，被运维人员恶意删库。导致数百万商家无法做生意，市值蒸发 30 亿。最后花了 7 天 7 夜才恢复数据。如果他们有异地实时灾备（热备），可能 1 小时就能切过去了。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '业务连续性管理。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 停机 1 小时损失 > 10 万 → THEN 必须上“双机热备”', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 停机一天也没事 → THEN 每天晚上做个冷备份就行', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '核心交易系统', type: 'suitable' },
       { condition: '个人电脑文件', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '放公有云安全还是私有化部署安全？', answer: '对于 99% 的中小企业来说，公有云比你自建机房安全 100 倍。因为云厂商有顶级的安全专家和容灾设施。你那破机房连 UPS 电源可能都没有。' }
    ]
  },
  {
    title: '价值评估：花了 2000 万，到底值不值？',
    slug: 'roi-post-implementation-review',
    categorySlugs: ['digital-transformation', 'financial-management'],
    tldr: 'IT 项目最怕这里是“无底洞”。老板投了钱，最后只听到“降本增效”这种虚词。价值评估必须量化，必须讲人话。不要说系统有多先进，要说“库存周转天数减少了 10 天”。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、决策者最关心的 3 个问题', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '这 2000 万什么时候能挣回来？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '除了省人头，还有什么收益？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '下期项目还要投吗？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、显性价值 vs 隐性价值', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '显性价值是“省出来的”钱：裁员、库存降低、废品减少。这些容易算。隐性价值是“赚回来的”钱：交货变快了客户满意了、决策更准了、合规风险小了。这些难算，但往往价值更大。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '三、落地路径：基线对比', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 1: 拍快照。项目开始前，把现在的关键指标（KPI）记下来。比如现在核算只要 10 天。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 2: 设目标。承诺项目上线后，核算缩短到 3 天。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 3: 算总账。上线半年后，真的缩短到 3 天了吗？如果做到了，这就是价值。', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '四、关键清单 (Checklist)', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 是否有独立的第三方（如财务部）来核算收益？（IT 自己算没人信）', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '五、真实案例：不是为了省人', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '某企业花了 500 万上 CRM。销售人员一个没少。老板一度觉得亏了。但复盘发现，因为客户资料沉淀在了公司，哪怕金牌销售离职，客户也没被带走。这个“资产保全”的价值，远超 500 万。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '项目后评估。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 收益无法量化 → THEN 讲故事（风险规避、能力提升）', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '大额 IT 投资', type: 'suitable' },
       { condition: '买个鼠标键盘', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: 'ROI 多少算合格？', answer: '通常 IT 项目的 ROI 周期是 3-5 年。如果 1-2 年就能回本，那是极其优秀的项目。' }
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
            keywords: '运维体系, 版本升级, IT 审计, 灾备演练, 价值评估'
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
