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

  return mockData
}

function generateMockValue(fieldName: string, moduleId: string, keywordType?: KeywordType): any {
  // 根据字段名、模块类型和关键词类型生成差异化示例数据
  
  // ERP 相关字段
  if (keywordType === 'ERP') {
    if (fieldName === 'business_process_steps') {
      return [
        { title: '业务流程梳理', input: '现状流程文档、业务需求', output: '业务流程蓝图', notes: '重点关注采购、销售、库存、财务四大核心流程' },
        { title: '系统配置', input: '业务流程蓝图、主数据规范', output: '系统配置文档', notes: '配置科目体系、核算规则、权限模型' },
        { title: '数据迁移', input: '历史数据、主数据规范', output: '数据迁移方案', notes: '清洗历史数据，对齐主数据口径' }
      ]
    }
    if (fieldName === 'configuration_items') {
      return ['科目体系配置', '核算规则配置', '权限模型配置', '业务流程配置', '报表口径配置']
    }
    if (fieldName === 'migration_steps') {
      return [
        { title: '主数据清洗', input: '历史主数据', output: '清洗后的主数据', notes: '统一编码、规范格式' },
        { title: '业务数据迁移', input: '历史业务数据', output: '迁移后的业务数据', notes: '按新系统口径转换' },
        { title: '数据验证', input: '迁移后的数据', output: '验证报告', notes: '核对数据完整性和准确性' }
      ]
    }
  }

  // MES 相关字段
  if (keywordType === 'MES') {
    if (fieldName === 'production_planning_steps') {
      return [
        { title: '生产计划制定', input: '销售订单、BOM、产能', output: '生产计划', notes: '考虑设备产能和物料齐套' },
        { title: '工单下发', input: '生产计划', output: '工单', notes: '按工序分解工单' },
        { title: '生产执行', input: '工单', output: '生产数据', notes: '实时采集工序数据' }
      ]
    }
    if (fieldName === 'data_collection_methods') {
      return ['工单数据采集', '工序报工采集', '设备数据采集', '质量数据采集', '物料消耗采集']
    }
    if (fieldName === 'traceability_components') {
      return ['批次追溯体系', '工序追溯记录', '质量追溯链条', '物料追溯路径']
    }
    if (fieldName === 'integration_points') {
      return ['与ERP的BOM对齐', '与PLM的工艺对齐', '与WMS的库存对齐']
    }
  }

  // WMS 相关字段
  if (keywordType === 'WMS') {
    if (fieldName === 'layout_design_steps') {
      return [
        { title: '仓储布局规划', input: '仓储需求、货物流向', output: '布局方案', notes: '优化拣货路径' },
        { title: '货位编码', input: '布局方案', output: '货位编码体系', notes: '支持快速定位' },
        { title: '设备配置', input: '仓储规模', output: '设备配置方案', notes: '考虑自动化程度' }
      ]
    }
    if (fieldName === 'inventory_strategies') {
      return ['ABC分类管理', '安全库存策略', '补货策略', '盘点策略', '库存预警机制']
    }
    if (fieldName === 'inbound_outbound_steps') {
      return [
        { title: '入库流程', input: '到货单', output: '入库单', notes: '验收、上架、更新库存' },
        { title: '出库流程', input: '出库单', output: '发货单', notes: '拣货、复核、出库' },
        { title: '库存调整', input: '盘点差异', output: '调整单', notes: '处理盘盈盘亏' }
      ]
    }
  }

  // 集成开发相关字段
  if (keywordType === '集成开发') {
    if (fieldName === 'api_integration_steps') {
      return [
        { title: 'API对接设计', input: '业务需求、系统接口文档', output: '对接方案', notes: '定义接口规范和数据格式' },
        { title: '接口开发', input: '对接方案', output: '接口代码', notes: '实现数据转换和异常处理' },
        { title: '联调测试', input: '接口代码', output: '测试报告', notes: '验证数据准确性和稳定性' }
      ]
    }
    if (fieldName === 'message_push_methods') {
      return ['实时消息推送', '定时消息推送', '事件触发推送', '批量消息推送']
    }
    if (fieldName === 'workflow_design_steps') {
      return [
        { title: '审批流程设计', input: '业务规则', output: '流程定义', notes: '定义审批节点和流转规则' },
        { title: '流程配置', input: '流程定义', output: '流程实例', notes: '在系统中配置流程' },
        { title: '流程测试', input: '流程实例', output: '测试结果', notes: '验证流程正确性' }
      ]
    }
    if (fieldName === 'sync_strategies') {
      return ['实时同步', '定时同步', '增量同步', '全量同步', '双向同步']
    }
  }

  // 通用字段
  if (fieldName === 'direct_answer_text') {
    return '（示例）这是一个关于该主题的核心结论，简洁明了地回答用户的问题。'
  }

  if (fieldName === 'howto_steps') {
    return [
      {
        title: '步骤一：准备阶段',
        input: '（示例）输入条件或前置要求',
        output: '（示例）输出结果或交付物',
        notes: '（示例）注意事项'
      },
      {
        title: '步骤二：执行阶段',
        input: '（示例）输入条件或前置要求',
        output: '（示例）输出结果或交付物',
        notes: '（示例）注意事项'
      },
      {
        title: '步骤三：验收阶段',
        input: '（示例）输入条件或前置要求',
        output: '（示例）输出结果或交付物',
        notes: '（示例）注意事项'
      }
    ]
  }

  if (fieldName === 'deliverables') {
    return [
      '（示例）交付物 1',
      '（示例）交付物 2',
      '（示例）交付物 3'
    ]
  }

  if (fieldName === 'comparison_rows') {
    return [
      {
        dimension: '（示例）维度 1',
        traditional: '（示例）传统做法描述',
        recommended: '（示例）推荐做法描述'
      },
      {
        dimension: '（示例）维度 2',
        traditional: '（示例）传统做法描述',
        recommended: '（示例）推荐做法描述'
      }
    ]
  }

  if (fieldName === 'pitfalls_checklist') {
    return [
      {
        risk: '（示例）常见风险',
        prevent: '（示例）预防措施',
        detect: '（示例）发现方式'
      }
    ]
  }

  if (fieldName === 'faq_items') {
    return [
      {
        question: '（示例）常见问题 1？',
        answer: '（示例）详细回答内容'
      },
      {
        question: '（示例）常见问题 2？',
        answer: '（示例）详细回答内容'
      }
    ]
  }

  // 默认值
  return `（示例）${fieldName} 的示例数据`
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
    const mockData = generateMockData(schema, config, keywordType)

    // 验证字段一致性
    if (!validateFieldConsistency(schema, mockData)) {
      process.exit(1)
    }

    // 写入文件
    writeSchema(schema, outline, outputDir)
    writeMockData(mockData, outputDir)

    console.error('\n✓ Schema and mock_data generated successfully')
  } catch (error) {
    console.error(`ERROR: ${error instanceof Error ? error.message : String(error)}`)
    process.exit(1)
  }
}

main()




