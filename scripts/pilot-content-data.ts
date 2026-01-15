export const PILOT_CONTENT = [
  {
    slug: 'roi-post-implementation-review',
    title: '价值评估：花了 2000 万，到底值不值？',
    heroImageId: '695c53f28b42d527f353fe41',
    tldr: 'ERP项目上线不代表成功，真正的价值在于后续的价值评估。本文提供一套基于财务收益、流程效率和决策质量的评估框架，帮助CIO向董事会证明2000万投资的实际业务回报。',
    atomicFAQs: [
      { question: '什么时候进行价值评估最合适？', answer: '建议在系统上线运行 6-12 个月后进行，此时数据已趋于稳定，业务习惯已初步养成。' },
      { question: '如何衡量不可量化的“决策质量”提升？', answer: '通过评估关键报表出的时间缩短百分比、数据关联后的异常识别率以及跨部门沟通会议次数的减少来间接衡量。' },
      { question: '如果评估结果不理想怎么办？', answer: '不应视为失败，而应作为“二次优化”的输入，识别哪些业务流程仍处于“旧瓶装新酒”状态并进行整改。' }
    ],
    boundaries: [
      { condition: '年营收 > 1 亿人民币且已上线 ERP 超过 1 年', type: 'suitable' },
      { condition: '仍处于手工账处理、流程极度不规范的初创企业', type: 'unsuitable' }
    ],
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h3', children: [{ type: 'text', text: 'ROI 评估判断链条' }], version: 1 },
          { type: 'list', tag: 'ul', children: [
            { type: 'listitem', children: [{ type: 'text', text: 'IF 财务部门结账时间从 10 天缩短至 3 天 -> THEN 基础效率达标' }], version: 1 },
            { type: 'listitem', children: [{ type: 'text', text: 'IF 呆滞料库存下降 > 15% -> THEN 业务集成效果显著' }], version: 1 }
          ], version: 1 }
        ]
      }
    },
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', children: [{ type: 'text', text: '决策者最关心的 3 个问题' }], version: 1 },
          { type: 'paragraph', children: [{ type: 'text', text: '1. 这 2000 万到底买到了什么？（不仅是软件，还有管理透明度）\n2. 为什么业务部门觉得更累了？（流程转机的摩擦期评估）\n3. 下一阶段的投资重点在哪？' }], version: 1 },
          { type: 'heading', tag: 'h2', children: [{ type: 'text', text: '核心评估清单' }], version: 1 },
          { type: 'list', tag: 'ul', children: [
            { type: 'listitem', children: [{ type: 'text', text: '数据一致性：财务与业务对账是否实现“零差异”' }], version: 1 },
            { type: 'listitem', children: [{ type: 'text', text: '流程覆盖率：核心业务是否全部在系统内闭环' }], version: 1 }
          ], version: 1 }
        ]
      }
    }
  },
  {
    slug: 'disaster-recovery-plan-drill',
    title: '灾备演练：如果机房着火了，数据还在吗？',
    heroImageId: '695c53f28b42d527f353fe44',
    tldr: '备份不等于恢复，演练才是王道。本文揭秘 B2B 企业灾备演练的“三级跳”策略，从单一数据库恢复到异地接管，确保在最极端的情况下业务连续性不中断。',
    atomicFAQs: [
      { question: '灾备演练会影响线上业务吗？', answer: '标准做法是使用影子系统或备份链条进行脱机演练，或在低峰期进行部分组件的切换测试，严禁直接冲击生产环境。' },
      { question: 'RTO 和 RPO 到底怎么定？', answer: '由业务部门定义。财务系统通常要求 RPO < 1小时，而一般协同软件可放宽至 4-8 小时。' }
    ],
    boundaries: [
      { condition: '业务高度依赖 IT 系统、且存在跨地域协同的企业', type: 'suitable' },
      { condition: '纯线下生产、对实时数据依赖极低的小作坊', type: 'unsuitable' }
    ],
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h3', children: [{ type: 'text', text: '演练级别评估' }], version: 1 },
          { type: 'list', tag: 'ul', children: [
            { type: 'listitem', children: [{ type: 'text', text: '检查点：是否有 30 天以上的异地备份历史？' }], version: 1 },
            { type: 'listitem', children: [{ type: 'text', text: '判断逻辑：IF 关键业务 RTO > 24h -> THEN 灾备策略必须重构' }], version: 1 }
          ], version: 1 }
        ]
      }
    },
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', children: [{ type: 'text', text: '灾备演练的 5 个关键步骤' }], version: 1 },
          { type: 'list', tag: 'ol', children: [
            { type: 'listitem', children: [{ type: 'text', text: '模拟断电/机房故障场景' }], version: 1 },
            { type: 'listitem', children: [{ type: 'text', text: '触发告警与人工决策流程' }], version: 1 },
            { type: 'listitem', children: [{ type: 'text', text: '从异地或云备份恢复数据镜像' }], version: 1 },
            { type: 'listitem', children: [{ type: 'text', text: '关键业务功能验证（如发货、对账）' }], version: 1 },
            { type: 'listitem', children: [{ type: 'text', text: '回滚至主环境并提交分析报告' }], version: 1 }
          ], version: 1 }
        ]
      }
    }
  },
  {
    slug: 'it-audit-compliance-segregation-of-duties',
    title: 'IT 审计：为什么上市前必须过这一关？',
    heroImageId: '695c53f28b42d527f353fe47',
    tldr: 'IPO 前的 IT 审计不只是合规要求，更是企业内控的“照妖镜”。本文解析权限分离 (SoD)、变更日志管理及数据完整性审计的核心逻辑。',
    atomicFAQs: [
      { question: '审计最怕什么？', answer: '最怕“超级管理员”账号权限过大且无审计日志。所有由于权限重叠导致的舞弊风险都是红线。' },
      { question: '系统自动生成的日志能作为审计证据吗？', answer: '可以，但必须保证其不可篡改性，通常需要定期导出并进行离线封存。' }
    ],
    boundaries: [
      { condition: '准备 IPO、接受外部投资或所属受监管行业的企业', type: 'suitable' },
      { condition: '老板一个人说了算的家族制初创企业', type: 'unsuitable' }
    ],
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h3', children: [{ type: 'text', text: '内控风险自测' }], version: 1 },
          { type: 'list', tag: 'ul', children: [
            { type: 'listitem', children: [{ type: 'text', text: '规则 1：开发人员是否能在生产环境直接修改数据？' }], version: 1 },
            { type: 'listitem', children: [{ type: 'text', text: '规则 2：财务审批是否有证据链支持？' }], version: 1 }
          ], version: 1 }
        ]
      }
    },
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', children: [{ type: 'text', text: '审计必过的三个核心领域' }], version: 1 },
          { type: 'paragraph', children: [{ type: 'text', text: 'B2B 企业的数字化系统承载了核心资产数据，审计的核心逻辑在于：谁做的？为什么能做？有没有证据？' }], version: 1 }
        ]
      }
    }
  },
  {
    slug: 'software-upgrade-dilemma',
    title: '版本升级：升还是不升？这是个问题',
    heroImageId: '695c53f28b42d527f353fe4a',
    tldr: '软件升级不是买新衣服，而是换个心脏。本文帮助 CIO 从兼容性风险、二开迁移成本和业务收益平衡三个维度，决定是否启动重大的版本更迭。',
    atomicFAQs: [
      { question: '补丁升级 (Patch) 与版本升级 (Version) 的区别？', answer: '补丁是修复 Bug，建议由于安全原因尽快升级；版本升级是功能架构变化，需作为项目正式立项。' }
    ],
    boundaries: [
      { condition: '现有系统已过维保期或无法支撑新业务场景', type: 'suitable' },
      { condition: '系统处于高度定制化、且二开文档解释已遗失的环境', type: 'unsuitable' }
    ],
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h3', children: [{ type: 'text', text: '升级决策模型' }], version: 1 },
          { type: 'list', tag: 'ul', children: [
            { type: 'listitem', children: [{ type: 'text', text: 'IF 原厂已停止技术支持 -> THEN 必须升级' }], version: 1 }
          ], version: 1 }
        ]
      }
    },
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', children: [{ type: 'text', text: '升级前的风险评估清单' }], version: 1 }
        ]
      }
    }
  },
  {
    slug: 'it-maintenance-support-strategy',
    title: '运维体系：系统上线了，顾问撤了，谁来管？',
    heroImageId: '695c53f28b42d527f353fe4d',
    tldr: '三分建，七分管。ERP 上线后的前 3 个月是事故高发期。本文构建了一套从“救火式”运维向“主动式”管理转型的策略框架。',
    atomicFAQs: [
      { question: '企业必须自建运维团队吗？', answer: '取决于规模。建议保留 1-2 名核心业务关键用户为内部支持，底层技术可外包给专业服务商。' }
    ],
    boundaries: [
      { condition: '多组织、多事业部、且业务流程持续变动的企业', type: 'suitable' }
    ],
    decisionFramework: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h3', children: [{ type: 'text', text: '运维能力象限' }], version: 1 }
        ]
      }
    },
    content: {
      root: {
        type: 'root', format: '', indent: 0, version: 1, direction: 'ltr',
        children: [
          { type: 'heading', tag: 'h2', children: [{ type: 'text', text: '从被动救火到价值创造' }], version: 1 }
        ]
      }
    }
  }
]
