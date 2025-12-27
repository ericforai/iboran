import { getPayload } from 'payload'
import configPromise from '../../src/payload.config'

const POSTS = [
  {
    title: '为什么 70% 的数字化转型死在“变革管理”？',
    slug: 'change-management-failure',
    categorySlugs: ['digital-transformation', 'industry-insights'],
    tldr: '系统上线不是结束，而是痛苦的开始。员工由于习惯被打破，会经历“否认、愤怒、讨价还价、抑郁、接受”五个阶段。变革管理就是管理这个“痛苦曲线”，让它尽可能短，尽可能浅。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、决策者最关心的 3 个问题', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '为什么大家都在抱怨新系统难用？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '有些人甚至想回到 Excel，怎么办？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '如何处理抵触情绪最强烈的“刺头”？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、权力再分配', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '数字化转型的本质是“权力的再分配”。以前采购员想给谁下单就给谁下单，现在系统根据比价规则自动分配。以前仓库想怎么发货就怎么发，现在系统锁定了批次。这些人失去了“自由裁量权”，自然会拼命找系统的茬。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '三、落地路径：ADKAR 模型', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Awareness (认知)：为什么要变？（因为公司快死了，或者为了上市）', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Desire (意愿)：变了对我有什么好处？（不用加班做表了）', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Knowledge (知识)：怎么变？（培训）', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Ability (能力)：能不能变？（实操）', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Reinforcement (巩固)：变回去会有惩罚吗？（考核）', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '四、关键清单 (Checklist)', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 是否识别了这一波变革的“利益受损者”？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ CEO 是否在大会上明确表态“只有系统一条路”？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '五、真实案例：断后路', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '某集团上财务共享中心。子公司财务总监联合抵制，说新系统慢、不得不准。董事长直接下令：下个月起，不用新系统提报的费用，一律不予报销。所有抵触瞬间消失。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '所有数字化项目。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 项目涉及跨部门流程重组 → THEN 变革管理预算应占总预算的 10%-15%', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '任何项目', type: 'suitable' },
       { condition: '无', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '变革管理是 HR 的事吗？', answer: '不是。是一把手的事。HR 只能做辅助支持。只有业务老大才能决定这一仗怎么打。' }
    ]
  },
  {
    title: '数据迁移：搬家最怕扔东西',
    slug: 'data-migration-strategy',
    categorySlugs: ['digital-transformation', 'products-tech'],
    tldr: 'Garbage In, Garbage Out (垃圾进，垃圾出)。如果把旧系统里的一堆烂账、僵尸数据直接导进新系统，那新系统上线第一天就死了。数据迁移是最好的（也是最后一次）“大扫除”机会。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、决策者最关心的 3 个问题', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '历史数据都要导吗？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '数据清洗谁来做？IT 还是业务？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '怎么保证在这个过程中不出错？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、断舍离', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '不要想着保留所有历史数据。那些 3 年前就不合作的供应商、5 年前就淘汰的物料、从来没平过的烂账，统统不要进新系统。让它们留在旧系统里查阅（或者导出的数仓里）。新系统要“清清白白”地开始。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '三、落地路径：三轮演练', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 1: 静态数据清洗（物料、客户、供应商）。去重、补全、标准化。这是最累的活。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 2: 动态数据结转（库存、应收应付）。一定要“先盘点，后迁移”。确实不符的，走盈亏处理掉。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 3: 模拟切换。在一个周末，全真模拟一遍数据导入，掐表算时间，看能不能在周一上班前搞定。', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '四、关键清单 (Checklist)', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 每一张导入的 Excel 表是否都有业务负责人签字？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 静态数据是否提前一个月冻结？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '五、真实案例：一物多码', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '某厂因为没做数据清洗，同一个螺丝在系统里有 5 个编码（因为不同采购员随便建的）。上线后，MRP 根本跑不准（系统以为缺货，其实另一个编码有库存）。最后不得不停机一周，发动全厂人肉对数。教训惨痛。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '系统切换。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 历史数据极其脏乱 → THEN 只导期初余额，不导业务单据', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '期初数据（库存数量、账户余额）', type: 'suitable' },
       { condition: '过程数据（以前的审批流记录）', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: 'IT 部门能帮业务清洗数据吗？', answer: '绝对不能。IT 不认识那些数据。IT 只能提供工具（比如查重），数据的对错只能由业务负责。' }
    ]
  },
  {
    title: '用户培训：讲了一遍就会了吗？',
    slug: 'user-training-best-practices',
    categorySlugs: ['digital-transformation', 'industry-insights'],
    tldr: '培训不是“老师讲，学生听”。成年人的学习方式是“做中学”。最无效的培训就是把几百人关在会议室里看 PPT。最好的培训是“沙盘演练”和“关键用户（Key User）制度”。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、决策者最关心的 3 个问题', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '为什么培训了那么多次，上线后还是不会？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '操作手册太厚了，没人看，怎么办？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '怎么考核他们学会了没？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、关键用户 (Key User)', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '顾问不可能教会几千个最终用户。顾问只教 30 个关键用户（通常是业务骨干）。然后由关键用户去教他们部门的人。这叫“种子教官”。如果关键用户没学会，整个部门就完了。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '三、落地路径：上机考试', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 1: 场景化培训。别讲功能按钮（“点这里，点哪里”），要讲业务场景（“当你要退货时，第一步...第二步...”）。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 2: 沙盘演练。在测试环境里，大家拿着真实的单子，从头跑到尾。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 3: 上岗证。考试不通过的，不给开通正式系统账号。这招最管用。', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '四、关键清单 (Checklist)', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 是否制作了“因材施教”的教材？（给老板看大屏，给仓库看手持机）', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 关键用户是否全程参与了测试？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '五、真实案例：录屏教程', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '某公司放弃了厚厚的操作手册。把每一个操作场景（如：新增销售订单）录成了 3 分钟的短视频，放在内部知识库里。遇到问题直接搜视频看，效率极高。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '系统推广期。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 用户年龄偏大 → THEN 视频教程 + 手把手指导', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '业务操作培训', type: 'suitable' },
       { condition: '纯理论宣讲', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '关键用户总是说没时间怎么办？', answer: '这说明领导不重视。必须把“配合项目上线”作为关键用户当季度的唯一 KPI，把原本的工作分给别人。' }
    ]
  },
  {
    title: 'PMO：是管人的还是管事的？',
    slug: 'pmo-project-management-office-role',
    categorySlugs: ['digital-transformation', 'industry-insights'],
    tldr: 'PMO (项目管理办公室) 不是秘书处，也不是只会画 Gantt 图的。PMO 的核心职责只有两个：1. 控制范围（防止需求蔓延）；2. 暴露风险（报喜也报忧）。PMO 要做“恶人”。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、决策者最关心的 3 个问题', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '项目为什么总是延期？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '预算为什么总是不够？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '到底谁在拖后腿？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、Scope Creep (范围蔓延)', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '这是项目失败的第一杀手。做到一半，销售总监说要加个审批流；财务总监说要加个报表。加着加着，项目就失控了。PMO 必须守住边界：要想加需求？行，走变更流程，加钱、加时间。否则免谈。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '三、落地路径：红绿灯周报', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 1: 识别关键路径。哪些任务拖了一天，整个项目就得拖一天？盯着这些任务。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 2: 风险预警。别等雷爆了再说。看到苗头（比如关键用户不来开会），立刻在周报里标红。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'Phase 3: 资源协调。当资源冲突时，依据项目优先级进行调配。', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '四、关键清单 (Checklist)', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 每周的周会 CEO 是否参加？（CEO 不来，PMO 说话就不响）', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 需求变更是否有书面签字？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '五、真实案例：被叫停的项目', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '某项目进行到蓝图阶段，PMO 发现业务部门对核心流程无法达成一致，且 CEO 迟迟不拍板。PMO 果断建议项目“暂停”，而不是硬着头皮往下做。暂停了两个月，理顺了管理职责后再启动。虽然延期了，但避免了烂尾。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '中大型复杂项目。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 项目涉及 > 3 个部门且周期 > 3 个月 → THEN 必须设专职 PMO', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '流程控制、进度监控', type: 'suitable' },
       { condition: '替业务部门干活', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '乙方有项目经理，甲方还需要吗？', answer: '必须有。乙方的项目经理是对他的合同负责（尽早验收拿钱）。甲方的项目经理是对公司的利益负责（真正用起来）。立场不同。' }
    ]
  },
  {
    title: '上线策略：一次性切换还是并行运行？',
    slug: 'go-live-strategy-big-bang-vs-phased',
    categorySlugs: ['digital-transformation', 'industry-insights'],
    tldr: '三种上线策略：大爆炸（Big Bang）、并行（Parallel）、分步（Phased）。没有绝对的好坏，只有“风险承受能力”和“资源投入”的权衡。大部分企业由于害怕，选择了并行，结果被“双倍工作量”累死。',
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '一、决策者最关心的 3 个问题', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '万一新系统崩了怎么办？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '工人要录两遍数据，情绪很大，怎么办？', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '什么时候可以切断旧系统？', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '二、三种策略对比', version: 1 }] },
          { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '大爆炸（Big Bang）：周五下班关旧系统，周一上班用新系统。没有任何退路。风险最大，但痛苦期最短（长痛不如短痛）。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '并行（Parallel）：新旧系统同时运行 1-3 个月。两边对账。最稳妥，但累死人。往往因为太累，新系统数据录入不及时，导致并行失败。', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '分步（Phased）：按模块切（先切财务，再切供应链），或按公司切（先切 A 工厂，再切 B 工厂）。稳扎稳打，周期最长。', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '三、落地路径：有条件的并行', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '推荐策略：并行，但期限严格控制在 1 个月内。第一周，以旧系统为准，新系统补录。第二周，以新系统为准，旧系统补录。第三周，完全丢掉旧系统。', version: 1 }] },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '四、关键清单 (Checklist)', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 应急预案（Plan B）是否演练过？（比如系统挂了，手工单怎么开）', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: '□ 上线期的加班费/夜宵准备好了吗？（士气很重要）', version: 1 }] }
            ]
          },
          { type: 'heading', tag: 'h2', version: 1, children: [{ type: 'text', text: '五、真实案例：破釜沉舟', version: 1 }] },
          { type: 'paragraph', version: 1, children: [{ type: 'text', text: '某企业选择大爆炸上线。老板下令：上线当天，封存所有纸质单据，拔掉旧服务器网线。谁想开单，必须进新系统。虽然第一周乱成一锅粥，发货延迟了 3 天，但第二周就顺了。如果当时留了退路，可能半年都切不过来。', version: 1 }] }
        ]
      }
    },
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '适用场景', version: 1 }] },
           { type: 'paragraph', version: 1, children: [{ type: 'text', text: '系统替换。', version: 1 }] },
           { type: 'heading', tag: 'h3', version: 1, children: [{ type: 'text', text: '判断逻辑', version: 1 }] },
           { type: 'list', tag: 'ul', listType: 'bullet', version: 1, children: [
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 业务复杂度极高且不能停工（如银行） → THEN 必须严格并行', version: 1 }] },
              { type: 'listitem', version: 1, children: [{ type: 'text', text: 'IF 业务相对简单 → THEN 鼓励大爆炸', version: 1 }] }
           ]}
        ]
      }
    },
    boundaries: [
       { condition: '新老系统切换', type: 'suitable' },
       { condition: '无', type: 'unsuitable' }
    ],
    atomicFAQs: [
      { question: '上线支持需要多久？', answer: '通常需要顾问在现场驻场支持 1-2 周（Hypercare 期），处理突发问题。直到月结成功，才算真正站稳了。' }
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
            keywords: '变革管理, 数据迁移, 用户培训, PMO, 上线策略'
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
