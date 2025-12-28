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

// 默认模块定义（根据页面类型）
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
  let modules = [...DEFAULT_MODULES[pageType]]

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

function generateMockData(schema: Schema, config: Config): MockData {
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
        mockData.kb[fieldName] = generateMockValue(fieldName, module.id)
      }
    })
  })

  return mockData
}

function generateMockValue(fieldName: string, moduleId: string): any {
  // 根据字段名和模块类型生成示例数据
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

    // 生成 schema
    const schema = generateSchema(args.keyword, args.pageType, args.moduleOverrides)
    const outline = generateOutline(schema)

    // 生成 mock_data
    const mockData = generateMockData(schema, config)

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



