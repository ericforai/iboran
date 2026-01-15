#!/usr/bin/env node
/**
 * PSEO Skill 02 — Schema & Mock Data Generator
 * 
 * 生成 CMS 可用的模块契约 YAML 和 mock_data.json
 * 
 * Usage:
 *   tsx scripts/pseo-schema-generator.ts [options]
 * 
 * Options:
 *   --keyword <text>          目标长尾词
 *   --config <path|json>      Skill 00 配置 JSON（文件路径或 JSON 字符串）
 *   --page-type <type>        页面类型：money_page 或 guide_page
 *   --output-dir <dir>        输出目录（默认：当前目录）
 *   --module-overrides <json> 模块覆盖（JSON 字符串，可选）
 * 
 * Example:
 *   tsx scripts/pseo-schema-generator.ts \
 *     --keyword "YonSuite ERP实施服务" \
 *     --config config.json \
 *     --page-type money_page \
 *     --output-dir ./output
 */

import * as fs from 'fs'
import * as path from 'path'

type PageType = 'money_page' | 'guide_page'

interface Config {
  config: {
    brand: { identity_anchor_text: string }
    audience: { target_audience: 'B2B' | 'B2C'; tone_of_voice: string }
    constraints: { no_prices: boolean; no_fake_stats: boolean; competitor_names_allowed: boolean }
    forbidden_words: string[]
    default_comparison_target: string
    product_scope?: string[]
    service_scope?: string[]
  }
}

interface SchemaModule {
  id: string
  h2: string
  required_fields: string[]
  format: string
}

interface Schema {
  schema_version: number
  page: {
    keyword: string
  }
  modules: SchemaModule[]
}

interface MockData {
  kb: Record<string, any>
  ugc_reviews: any[] | null
  rpa_image_captions: any[] | null
}

// 关键词类型识别
type KeywordType = 'ERP' | 'MES' | 'WMS' | '集成开发' | '协同' | '数据安全' | '通用'

function detectKeywordType(keyword: string): KeywordType {
  const lower = keyword.toLowerCase()
  // 优先检查特殊主题（数据安全、加密等）
  if (lower.includes('数据安全') || lower.includes('数据加密') || lower.includes('安全') || lower.includes('加密') || lower.includes('防护') || lower.includes('隐私')) return '数据安全'
  if (lower.includes('mes') || lower.includes('制造执行')) return 'MES'
  if (lower.includes('wms') || lower.includes('仓储') || lower.includes('仓库')) return 'WMS'
  if (lower.includes('集成') || lower.includes('对接') || lower.includes('钉钉') || lower.includes('api')) return '集成开发'
  if (lower.includes('协同') || lower.includes('致远')) return '协同'
  if (lower.includes('erp') || lower.includes('yonsuite') || lower.includes('yonbip') || lower.includes('u8c') || lower.includes('nc')) return 'ERP'
  return '通用'
}

// 根据关键词类型和页面类型生成模块
function getModulesByType(keywordType: KeywordType, pageType: PageType): SchemaModule[] {
  const baseModules = {
    direct_answer: {
      id: 'direct_answer',
      h2: pageType === 'money_page' ? '一句话结论' : '核心定义',
      required_fields: ['kb.direct_answer_text'],
      format: 'h2+p'
    },
    faq: {
      id: 'faq',
      h2: '常见问题',
      required_fields: ['kb.faq_items'],
      format: 'h2+qa'
    }
  }

  // ERP 实施服务模块
  if (keywordType === 'ERP' && pageType === 'money_page') {
    return [
      baseModules.direct_answer,
      {
        id: 'business_process',
        h2: '业务流程梳理',
        required_fields: ['kb.business_process_steps'],
        format: 'h2+steps'
      },
      {
        id: 'system_configuration',
        h2: '系统配置方案',
        required_fields: ['kb.configuration_items'],
        format: 'h2+list'
      },
      {
        id: 'data_migration',
        h2: '数据迁移策略',
        required_fields: ['kb.migration_steps'],
        format: 'h2+steps'
      },
      {
        id: 'comparison',
        h2: '对比分析',
        required_fields: ['kb.comparison_rows'],
        format: 'h2+table'
      },
      baseModules.faq
    ]
  }

  // MES 实施服务模块
  if (keywordType === 'MES' && pageType === 'money_page') {
    return [
      baseModules.direct_answer,
      {
        id: 'production_planning',
        h2: '生产计划流程',
        required_fields: ['kb.production_planning_steps'],
        format: 'h2+steps'
      },
      {
        id: 'process_data_collection',
        h2: '工序数据采集',
        required_fields: ['kb.data_collection_methods'],
        format: 'h2+list'
      },
      {
        id: 'quality_traceability',
        h2: '质量追溯体系',
        required_fields: ['kb.traceability_components'],
        format: 'h2+list'
      },
      {
        id: 'erp_integration',
        h2: 'ERP 集成方案',
        required_fields: ['kb.integration_points'],
        format: 'h2+list'
      },
      baseModules.faq
    ]
  }

  // WMS 实施服务模块
  if (keywordType === 'WMS' && pageType === 'money_page') {
    return [
      baseModules.direct_answer,
      {
        id: 'warehouse_layout',
        h2: '仓储布局设计',
        required_fields: ['kb.layout_design_steps'],
        format: 'h2+steps'
      },
      {
        id: 'inventory_management',
        h2: '库存管理策略',
        required_fields: ['kb.inventory_strategies'],
        format: 'h2+list'
      },
      {
        id: 'inbound_outbound',
        h2: '出入库流程',
        required_fields: ['kb.inbound_outbound_steps'],
        format: 'h2+steps'
      },
      {
        id: 'comparison',
        h2: '对比分析',
        required_fields: ['kb.comparison_rows'],
        format: 'h2+table'
      },
      baseModules.faq
    ]
  }

  // 集成开发服务模块
  if (keywordType === '集成开发' && pageType === 'money_page') {
    return [
      baseModules.direct_answer,
      {
        id: 'api_integration',
        h2: 'API 对接方案',
        required_fields: ['kb.api_integration_steps'],
        format: 'h2+steps'
      },
      {
        id: 'message_push',
        h2: '消息推送机制',
        required_fields: ['kb.message_push_methods'],
        format: 'h2+list'
      },
      {
        id: 'approval_workflow',
        h2: '审批流程设计',
        required_fields: ['kb.workflow_design_steps'],
        format: 'h2+steps'
      },
      {
        id: 'data_sync',
        h2: '数据同步策略',
        required_fields: ['kb.sync_strategies'],
        format: 'h2+list'
      },
      baseModules.faq
    ]
  }

  // 协同实施服务模块
  if (keywordType === '协同' && pageType === 'money_page') {
    return [
      baseModules.direct_answer,
      {
        id: 'collaboration_setup',
        h2: '协同平台搭建',
        required_fields: ['kb.setup_steps'],
        format: 'h2+steps'
      },
      {
        id: 'workflow_design',
        h2: '工作流设计',
        required_fields: ['kb.workflow_components'],
        format: 'h2+list'
      },
      {
        id: 'integration_points',
        h2: '集成对接点',
        required_fields: ['kb.integration_points'],
        format: 'h2+list'
      },
      {
        id: 'comparison',
        h2: '对比分析',
        required_fields: ['kb.comparison_rows'],
        format: 'h2+table'
      },
      baseModules.faq
    ]
  }

  // 数据安全类型
  if (keywordType === '数据安全' && pageType === 'money_page') {
    return [
      baseModules.direct_answer,
      {
        id: 'security_architecture',
        h2: '安全架构',
        required_fields: ['kb.security_architecture'],
        format: 'h2+structure'
      },
      {
        id: 'encryption_solutions',
        h2: '加密方案',
        required_fields: ['kb.encryption_solutions'],
        format: 'h2+structure'
      },
      {
        id: 'byox_solution',
        h2: 'BYOX 解决方案',
        required_fields: ['kb.byox_solution'],
        format: 'h2+structure'
      },
      {
        id: 'howto_steps',
        h2: '实施步骤',
        required_fields: ['kb.howto_steps'],
        format: 'h2+steps'
      },
      {
        id: 'comparison',
        h2: '对比分析',
        required_fields: ['kb.comparison_rows'],
        format: 'h2+table'
      },
      baseModules.faq
    ]
  }

  // 默认模块（通用或未识别类型）
  return DEFAULT_MODULES[pageType]
}

// 默认模块定义（用于通用或未识别类型）
const DEFAULT_MODULES: Record<PageType, SchemaModule[]> = {
  money_page: [
    {
      id: 'direct_answer',
      h2: '一句话结论',
      required_fields: ['kb.direct_answer_text'],
      format: 'h2+p'
    },
    {
      id: 'howto',
      h2: '实施步骤',
      required_fields: ['kb.howto_steps'],
      format: 'h2+steps'
    },
    {
      id: 'deliverables',
      h2: '交付物清单',
      required_fields: ['kb.deliverables'],
      format: 'h2+list'
    },
    {
      id: 'comparison',
      h2: '对比分析',
      required_fields: ['kb.comparison_rows'],
      format: 'h2+table'
    },
    {
      id: 'faq',
      h2: '常见问题',
      required_fields: ['kb.faq_items'],
      format: 'h2+qa'
    }
  ],
  guide_page: [
    {
      id: 'direct_answer',
      h2: '核心定义',
      required_fields: ['kb.direct_answer_text'],
      format: 'h2+p'
    },
    {
      id: 'howto',
      h2: '操作指南',
      required_fields: ['kb.howto_steps'],
      format: 'h2+steps'
    },
    {
      id: 'pitfalls',
      h2: '常见误区',
      required_fields: ['kb.pitfalls_checklist'],
      format: 'h2+checklist'
    },
    {
      id: 'faq',
      h2: '常见问题',
      required_fields: ['kb.faq_items'],
      format: 'h2+qa'
    }
  ]
}

function parseArgs() {
  const args: {
    keyword?: string
    config?: string
    pageType?: PageType
    outputDir?: string
    moduleOverrides?: any
  } = {}

  for (let i = 2; i < process.argv.length; i++) {
    const arg = process.argv[i]
    const next = process.argv[i + 1]

    switch (arg) {
      case '--keyword':
        if (next && !next.startsWith('--')) {
          args.keyword = next
          i++
        }
        break
      case '--config':
        if (next && !next.startsWith('--')) {
          args.config = next
          i++
        }
        break
      case '--page-type':
        if (next && (next === 'money_page' || next === 'guide_page')) {
          args.pageType = next
          i++
        }
        break
      case '--output-dir':
        if (next && !next.startsWith('--')) {
          args.outputDir = next
          i++
        }
        break
      case '--module-overrides':
        if (next && !next.startsWith('--')) {
          try {
            args.moduleOverrides = JSON.parse(next)
          } catch (e) {
            console.error(`Invalid JSON in --module-overrides: ${e}`)
            process.exit(1)
          }
          i++
        }
        break
    }
  }

  return args
}

function loadConfig(configInput: string): Config {
  // 尝试作为文件路径
  if (fs.existsSync(configInput)) {
    const content = fs.readFileSync(configInput, 'utf-8')
    return JSON.parse(content)
  }

  // 尝试作为 JSON 字符串
  try {
    return JSON.parse(configInput)
  } catch (e) {
    throw new Error(`Invalid config: ${configInput}`)
  }
}

function generateSchema(
  keyword: string,
  pageType: PageType,
  moduleOverrides?: any
): Schema {
  // 根据关键词类型生成差异化模块
  const keywordType = detectKeywordType(keyword)
  let modules = getModulesByType(keywordType, pageType)

  // 应用模块覆盖
  if (moduleOverrides) {
    if (Array.isArray(moduleOverrides)) {
      modules = moduleOverrides
    } else if (moduleOverrides.modules) {
      modules = moduleOverrides.modules
    }
  }

  return {
    schema_version: 1,
    page: {
      keyword
    },
    modules
  }
}

function generateOutline(schema: Schema): string[] {
  const outline: string[] = []
  outline.push(`# - H1: ${schema.page.keyword}`)
  schema.modules.forEach(module => {
    outline.push(`# - H2: ${module.h2}`)
  })
  return outline
}

function generateMockData(schema: Schema, config: Config, keywordType?: KeywordType): MockData {
  const mockData: MockData = {
    kb: {},
    ugc_reviews: null,
    rpa_image_captions: null
  }

  // 根据 schema 的 required_fields 生成对应的 mock 数据
  schema.modules.forEach(module => {
    module.required_fields.forEach(fieldPath => {
      const parts = fieldPath.split('.')
      if (parts[0] === 'kb') {
        const fieldName = parts.slice(1).join('.')
        mockData.kb[fieldName] = generateMockValue(fieldName, module.id, keywordType)
      }
    })
  })

  // 始终注入 Brand 信息
  mockData.kb['brand'] = config.config?.brand || {}

  return mockData
}

// --- Knowledge Base Definitions ---

const KNOWLEDGE_BASE: Record<string, any> = {
  'ERP': {
    direct_answer_text: 'ERP (企业资源计划) 不仅仅是一套软件，更是企业管理思想的数字化落地。成功的 ERP 实施能打通企业内部的“数据孤岛”，实现从销售线索到财务报表的端到端业务闭环，从而提升运营效率，降低库存成本。',
    business_process_steps: [
      { title: '蓝图规划', input: '企业战略、现状调研', output: '业务蓝图设计书', notes: '这是最关键的一步，决定了系统长什么样。' },
      { title: '系统构建', input: '业务蓝图', output: '系统配置文档', notes: '将管理语言翻译成系统参数。' },
      { title: '上线切换', input: '静态数据、动态数据', output: '上线试运行报告', notes: '新旧系统并行的阵痛期。' }
    ],
    configuration_items: [
      '组织架构定义（公司/部门/工厂）',
      '基础档案设置（客商/物料/科目）',
      '单据类型与业务规则',
      '审批流与权限控制',
      '财务核算体系'
    ],
    migration_steps: [
      { title: '数据清洗', input: '旧系统导出数据', output: '清洗后的标准数据', notes: '垃圾进，垃圾出 (GIGO)，清洗必须彻底。' },
      { title: '期初导入', input: '清洗后的库存、余额', output: '系统期初余额表', notes: '确保财务业务账实相符。' },
      { title: '动态验证', input: '模拟业务单据', output: '验证报告', notes: '跑通几个核心流程验证数据准确性。' }
    ],
    comparison_rows: [
      { dimension: '建设目标', traditional: '部门级应用，解决局部问题', recommended: '企业级协同，解决全局效率' },
      { dimension: '数据治理', traditional: '口径不一，手工报表', recommended: '统一主数据，实时BI' },
      { dimension: '实施方法', traditional: '照搬软件标准流程', recommended: '管理咨询+软件落地' }
    ],
    faq_items: [
      { question: 'ERP 实施周期一般多长？', answer: '通常为 3-6 个月，具体取决于企业规模和业务复杂度。' },
      { question: '为什么 ERP 实施容易失败？', answer: '常见原因包括：高层重视不足、需求蔓延、数据质量差、变革管理不到位。' }
    ]
  },
  'MES': {
    direct_answer_text: 'MES (制造执行系统) 是连接车间现场与 ERP 的桥梁。它专注于“如何生产”，通过对人、机、料、法、环的实时监控与调度，实现生产过程的透明化、精细化管理，是智能制造的核心底座。',
    production_planning_steps: [
      { title: '计划排产', input: '销售订单、BOM、库存', output: '工序级生产计划', notes: '考虑设备产能和物料齐套性的有限产能排程 (APS)。' },
      { title: '派工执行', input: '生产任务单', output: '工位作业指令', notes: '将任务精准推送到机台或班组。' },
      { title: '完工汇报', input: '生产实绩', output: '报工记录', notes: '实时采集投入产出数据。' }
    ],
    data_collection_methods: [
      'PLC/SCADA 设备联网采集',
      'PDA 扫码采集',
      'RFID 自动感应',
      '工控机/平板触控录入',
      '安灯 (Andon) 系统集成'
    ],
    traceability_components: [
      '正向追溯（从原料到成品）',
      '反向追溯（从成品到原料）',
      '过程参数追溯（温度、压力、扭矩）',
      '人员/设备绑定记录'
    ],
    integration_points: [
      'ERP: 获取生产订单/BOM，回传完工/消耗',
      'PLM: 获取工艺路线/图纸',
      'WMS: 获取物料批次/库位信息'
    ],
    faq_items: [
      { question: 'MES 和 ERP 的区别是什么？', answer: 'ERP 关注“钱”和“宏观计划”（如月计划），MES 关注“物”和“微观执行”（如分秒级的工序控制）。' },
      { question: '老旧设备能上 MES 吗？', answer: '可以。通过加装传感器、网关或使用非侵入式的电流互感器等方式进行低成本改造改造。' }
    ]
  },
  'WMS': {
    direct_answer_text: 'WMS (仓储管理系统) 不仅仅是记录“货在哪”，而是控制“货怎么动”。通过精细化的库位管理、策略指引和移动化作业，实现仓储作业的路径最优、空间利用率最大化和库存准确率 99.9% 以上。',
    layout_design_steps: [
      { title: '功能区规划', input: '吞吐量分析、SKU特性', output: '库区布局图', notes: '合理划分收货、存储、拣选、复核、发货区。' },
      { title: '动线设计', input: '作业流程', output: '人车动线规划', notes: '避免人流物流交叉，减少无效搬运。' },
      { title: '货位编码', input: '库区规划', output: '可视化货位标识', notes: '建立全库唯一的“三维地址”（库-排-层-位）。' }
    ],
    inventory_strategies: [
      '上架策略（空位优先/定置管理）',
      '拣货策略（先进先出/路径最优）',
      '盘点策略（循环盘点/动碰盘点）',
      '补货策略（触发式/定时式）',
      '波次策略（合并订单/拆分订单）'
    ],
    inbound_outbound_steps: [
      { title: '收货上架', input: 'ASN (预到货通知)', output: '上架任务', notes: '系统指引推荐库位，扫码确认。' },
      { title: '波次拣选', input: '发货订单', output: '拣货任务', notes: '将多个小订单合并拣选，提高效率。' },
      { title: '复核打包', input: '拣货框', output: '快递面单', notes: '称重、拍照、封箱。' }
    ],
    comparison_rows: [
      { dimension: '作业方式', traditional: '纸单作业，依赖记忆', recommended: 'RF手持/PDA指引，傻瓜式操作' },
      { dimension: '库存准确性', traditional: '账实不符，经常盘亏', recommended: '实时更新，准确率 > 99%' },
      { dimension: '绩效管理', traditional: '吃大锅饭，无法量化', recommended: '计件统计，多劳多得' }
    ],
    faq_items: [
      { question: 'WMS 能提高发货速度吗？', answer: '能。通过路径优化和波次拣选，可以大幅减少行走距离，提升 30%-50% 的拣货效率。' },
      { question: '电商仓和制造业仓 WMS 有什么区别？', answer: '电商仓强调海量小订单的快速分拣（拆零多）；制造业仓关注批次管理、线边配送和与产线的拉动协同（整托/整箱多）。' }
    ]
  },
  '数据安全': {
    direct_answer_text: '在数字化转型的深水区，数据安全已不再是“防火墙”那么简单。企业需要建立以数据为中心的安全体系，从“边界防护”转向“零信任”，确保数据在采集、传输、存储、使用、共享和销毁全生命周期的安全性与合规性。',
    security_architecture: {
        layer1: "终端安全：EDR、防泄密 (DLP)、桌面管理",
        layer2: "网络安全：下一代防火墙、VPN/SD-WAN、入侵检测",
        layer3: "应用安全：WAF、漏洞扫描、代码审计",
        layer4: "数据安全：加密存储、数据库审计、脱敏系统"
    },
    encryption_solutions: {
        disk: "全盘加密 (BitLocker/FileVault) - 防止硬盘丢失导致泄密",
        file: "文档加密 (透明加解密) - 防止文件外发泄密",
        db: "TDE/列级加密 - 防止拖库导致核心数据裸奔",
        transport: "SSL/TLS 1.3 - 防止链路劫持"
    },
    byox_solution: {
        mdm: "移动设备管理 (MDM) - 远程擦除企业数据",
        mam: "移动应用管理 (MAM) - 企业应用沙箱化",
        access: "基于上下文的访问控制 - 只允许合规设备可以访问"
    },
    howto_steps: [
      { title: '资产梳理', input: '网络扫描、人工调研', output: '数据资产清单与分类分级表', notes: '如果你不知道数据在哪，就无法保护它。' },
      { title: '风险评估', input: '资产清单、渗透测试', output: '风险评估报告 (RA)', notes: '识别短板，通过技术+管理手段补齐。' },
      { title: '体系建设', input: '整改方案', output: 'ISO27001/等保认证', notes: '建立PDCA持续改进的安全运营机制。' }
    ],
    comparison_rows: [
      { dimension: '防护理念', traditional: '御敌于国门之外（边界防护）', recommended: '假设已经失陷（零信任）' },
      { dimension: '侧重点', traditional: '保护硬件和网络', recommended: '保护数据资产' },
      { dimension: '响应方式', traditional: '事后救火，亡羊补牢', recommended: '态势感知，主动防御' }
    ],
    faq_items: [
      { question: '上了加密软件就算安全了吗？', answer: '不算。技术只是工具，管理才是核心。如果没有配套的保密协议、安全培训和审计机制，加密软件也能被绕过。' },
      { question: '中小企业有必要做等保三级吗？', answer: '有必要。特别是涉及大量个人信息（隐私）或关键基础设施的企业，等保是法律合规的底线，也是企业投标的加分项。' }
    ]
  },
  '通用': {
    direct_answer_text: '在当前竞争激烈的市场环境下，企业数字化转型已不是选择题，而是必答题。通过引入成熟的行业解决方案，企业可以快速复制最佳实践，规范业务流程，用数据驱动决策，从而实现降本增效，构建持久的核心竞争力。',
    howto_steps: [
      { title: '需求分析与规划', input: '企业痛点、战略目标', output: '项目立项书', notes: '明确“为什么做”比“怎么做”更重要。' },
      { title: '选型与供应商评估', input: '需求列表、预算', output: '供应商评分表', notes: '只选对的，不选贵的；适合自己的才是最好的。' },
      { title: '实施与落地', input: '解决方案', output: '上线验收单', notes: '一把手工程，全员参与。' }
    ],
    deliverables: [
      '项目调研诊断报告',
      '详细解决方案设计书',
      '系统配置与开发文档',
      '用户操作手册 (SOP)',
      '项目验收总结报告'
    ],
    comparison_rows: [
      { dimension: '决策依据', traditional: '拍脑袋，凭经验', recommended: '看数据，凭事实' },
      { dimension: '工作方式', traditional: '线下沟通，信息传递慢', recommended: '在线协同，信息透明化' },
      { dimension: '管理颗粒度', traditional: '粗放式，结果导向', recommended: '精细化，过程管控' }
    ],
    faq_items: [
      { question: '数字化转型需要投入多少？', answer: '这取决于企业规模和目标。建议按营收的 1%-3% 进行持续投入，也可以采用 SaaS 模式降低初期成本。' },
      { question: '如何评估项目是否成功？', answer: '看指标。如库存周转率提升了多少、人员效率增加了多少、订单交付周期缩短了多少。' }
    ]
  }
}

// 补充映射：解决集成开发、协同等 key 映射到通用或专用
const TYPE_MAPPING: Record<string, string> = {
  '集成开发': '通用', // 暂时映射到通用，或定义专用部分
  '协同': '通用'
}

// 针对“集成开发”补充特定内容
KNOWLEDGE_BASE['集成开发'] = {
   direct_answer_text: '企业信息化建设到一定阶段，必然面临“烟囱林立”的困境。系统集成服务通过 API、ESB、ETL 等技术手段，打通 ERP、CRM、OA 等异构系统，实现主数据统一、业务流程串联和数据互通，消除信息孤岛。',
   api_integration_steps: [
     { title: '接口定义', input: '业务需求', output: 'Swagger/OpenAPI 文档', notes: '统一契约，先行定义。' },
     { title: '开发与转换', input: '接口文档', output: '中间件/适配器代码', notes: '处理协议转换（如 SOAP 转 REST）和数据清洗。' },
     { title: '联调测试', input: '测试用例', output: '联调报告', notes: '覆盖异常场景（如超时、重试）。' }
   ],
   message_push_methods: ['WebSocket 实时推送', 'App 极光/个推集成', '企业微信/钉钉 Webhook', '短信/邮件网关'],
   workflow_design_steps: [
     { title: '流程梳理', input: '线下审批制度', output: '流程图 (BPMN)', notes: '优化不合理的审批节点。' },
     { title: '表单建模', input: '业务单据', output: '电子表单', notes: '所见即所得。' },
     { title: '引擎配置', input: '流转规则', output: '发布流程', notes: '支持会签、加签、退回等复杂逻辑。' }
     ],
   sync_strategies: ['基于时间戳的增量同步', '基于 Binlog/CDC 的实时同步', '全量覆盖（适合基础档案）'],
   comparison_rows: KNOWLEDGE_BASE['通用'].comparison_rows,
   faq_items: [
     { question: '点对点集成好还是上 ESB 好？', answer: '系统少于 3 个建议点对点，简单快捷；系统多于 5 个强烈建议上 ESB/iPaaS，降低耦合度，方便维护。' },
     { question: '如何保证数据一致性？', answer: '采用分布式事务（TCC/Saga）或最终一致性方案（消息队列+重试机制）。' }
   ]
}

// 针对“协同”补充特定内容
KNOWLEDGE_BASE['协同'] = {
    direct_answer_text: '协同办公 (OA/COP) 是全员应用的入口，旨在构建以“人”为中心的高效协作平台。它不仅仅是发公文、批请假，更是企业文化的载体和业务协同的中枢，连接员工、客户与生态伙伴。',
    setup_steps: [
        { title: '门户规划', input: '企业VI、信息架构', output: '门户设计图', notes: '千人千面，按角色定制工作台。' },
        { title: '流程落地', input: '管理制度', output: '电子化流程清单', notes: '制度落地，流程管事。' },
        { title: '移动互联', input: 'App/企微/钉钉', output: '移动办公环境', notes: '随时随地，高效协作。' }
    ],
    workflow_components: ['可视化表单设计器', '图形化流程引擎', '规则引擎（脚本/表达式）', '报表与效能分析'],
    integration_points: ['HR 系统（同步组织人员）', 'ERP 系统（审批业务单据）', '财务系统（报销凭证对接）'],
    comparison_rows: [
      { dimension: '覆盖范围', traditional: '仅限行政办公', recommended: '全员、全业务、全生态' },
      { dimension: '移动端', traditional: 'PC页面的简单适配', recommended: '原生体验，集成IM' },
      { dimension: '扩展性', traditional: '封闭系统，二开难', recommended: '低代码平台，随需而变' }
    ],
    faq_items: [
        { question: 'OA 能替代 ERP 吗？', answer: '不能。OA 擅长流程审批和非结构化数据管理，ERP 擅长资源计算和结构化业务处理。两者应互补互联。' },
        { question: '低代码平台就是协同吗？', answer: '新一代的协同平台（如致远 COP、泛微 e-cology）通常内置了低代码能力，允许业务人员自行搭建轻量级应用。' }
    ]
}

// 升级 generateMockValue 函数以使用 KNOWLEDGE_BASE
function generateMockValue(fieldName: string, moduleId: string, keywordType?: KeywordType): any {
    // 1. 尝试从 Knowledge Base 获取精确匹配的字段
    const typeKey = keywordType || '通用'
    // 处理映射
    const kbKey = TYPE_MAPPING[typeKey] || typeKey
    // 优先取特定类型的，如果没有则取 '通用'
    const specificKB = KNOWLEDGE_BASE[typeKey] || KNOWLEDGE_BASE[kbKey] || KNOWLEDGE_BASE['通用']
    const generalKB = KNOWLEDGE_BASE['通用']

    // 检查 specificKB 是否有该字段
    if (specificKB && specificKB[fieldName]) {
        return specificKB[fieldName]
    }
    
    // 如果没有，检查 '通用' 是否有该字段
    if (generalKB && generalKB[fieldName]) {
        return generalKB[fieldName]
    }

    // 2. 对于 faq_items, comparison_rows, deliverables 等通用结构，如果 KnowledgeBase 没定义具体的，可以返回通用的
    // 但上面的逻辑已经涵盖了 generalKB 的回退。
    // 如果还是没有，说明字段名可能不匹配或者 KB 中确实没定义。
    
    // 3. 特殊的回退逻辑或动态生成（保留之前的结构作为最后的兜底）
    if (fieldName === 'direct_answer_text') {
        return `（自动生成）关于 ${keywordType} 的核心定义：${generalKB.direct_answer_text}`
    }

    // 默认兜底
    return `（待补充）${fieldName} 数据`
}

function writeSchema(schema: Schema, outline: string[], outputDir: string) {
  const lines: string[] = []
  
  lines.push('schema_version: 1')
  lines.push('page:')
  lines.push(`  keyword: "${schema.page.keyword}"`)
  lines.push('modules:')
  
  schema.modules.forEach(module => {
    lines.push('  - id: ' + module.id)
    lines.push(`    h2: "${module.h2}"`)
    lines.push('    required_fields:')
    module.required_fields.forEach(field => {
      lines.push(`      - "${field}"`)
    })
    lines.push(`    format: "${module.format}"`)
  })
  
  lines.push('')
  lines.push('# Outline (comment only):')
  outline.forEach(line => lines.push(line))
  
  const content = lines.join('\n')
  const filePath = path.join(outputDir, 'schema.yaml')
  fs.writeFileSync(filePath, content, 'utf-8')
  console.error(`✓ Generated: ${filePath}`)
}

function writeMockData(mockData: MockData, outputDir: string) {
  const content = JSON.stringify(mockData, null, 2)
  const filePath = path.join(outputDir, 'mock_data.json')
  fs.writeFileSync(filePath, content, 'utf-8')
  console.error(`✓ Generated: ${filePath}`)
}

function validateFieldConsistency(schema: Schema, mockData: MockData): boolean {
  const schemaFields = new Set<string>()
  schema.modules.forEach(module => {
    module.required_fields.forEach(field => {
      if (field.startsWith('kb.')) {
        schemaFields.add(field)
      }
    })
  })

  const mockFields = new Set<string>()
  Object.keys(mockData.kb).forEach(key => {
    mockFields.add(`kb.${key}`)
  })

  // 检查所有 schema 字段是否在 mock_data 中存在
  for (const field of schemaFields) {
    if (!mockFields.has(field)) {
      console.error(`ERROR: Field ${field} in schema but not in mock_data`)
      return false
    }
  }

  return true
}

function main() {
  try {
    const args = parseArgs()

    if (!args.keyword) {
      throw new Error('--keyword is required')
    }

    if (!args.config) {
      throw new Error('--config is required')
    }

    if (!args.pageType) {
      throw new Error('--page-type is required (money_page or guide_page)')
    }

    const outputDir = args.outputDir || process.cwd()
    
    // 确保输出目录存在
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true })
    }

    // 加载配置
    const config = loadConfig(args.config)

    // 生成 schema（会根据关键词类型自动选择模块）
    const keywordType = detectKeywordType(args.keyword)
    const schema = generateSchema(args.keyword, args.pageType, args.moduleOverrides)
    const outline = generateOutline(schema)

    // 生成 mock_data（传递 keywordType 以生成差异化内容）
    // 升级：这里将使用 KnowledgeBase 增强数据的丰富度
    const mockData = generateMockData(schema, config, keywordType)

    // 验证字段一致性
    if (!validateFieldConsistency(schema, mockData)) {
      process.exit(1)
    }

    // 写入文件
    writeSchema(schema, outline, outputDir)
    writeMockData(mockData, outputDir)

    console.error('\n✓ Schema and mock_data generated successfully (Powered by Rule-Based Knowledge Engine)')
  } catch (error) {
    console.error(`ERROR: ${error instanceof Error ? error.message : String(error)}`)
    process.exit(1)
  }
}

main()
