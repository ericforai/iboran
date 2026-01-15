#!/usr/bin/env node
/**
 * PSEO Skill 03 — Page Renderer
 * 
 * 根据 schema.yaml + raw_data.json + config 渲染 Markdown 页面
 * 
 * Usage:
 *   tsx scripts/pseo-page-renderer.ts [options]
 * 
 * Options:
 *   --schema <path>        schema.yaml 文件路径
 *   --raw-data <path>      raw_data.json 或 mock_data.json 文件路径
 *   --config <path>        Skill 00 配置 JSON 文件路径
 *   --output <path>        输出文件路径（默认：page.md）
 * 
 * Example:
 *   tsx scripts/pseo-page-renderer.ts \
 *     --schema output/schema.yaml \
 *     --raw-data output/mock_data.json \
 *     --config config.json \
 *     --output output/page.md
 */

import * as fs from 'fs'
import * as path from 'path'
import yaml from 'js-yaml'

interface Schema {
  schema_version: number
  page: {
    keyword: string
  }
  modules: Array<{
    id: string
    h2: string
    required_fields: string[]
    format: string
  }>
}

interface RawData {
  kb?: Record<string, any>
  ugc_reviews?: any[] | null
  rpa_image_captions?: any[] | null
  brand?: {
    identity_anchor_text?: string
  }
}

interface Config {
  config: {
    brand: {
      identity_anchor_text: string
    }
    audience: {
      target_audience: 'B2B' | 'B2C'
      tone_of_voice: string
    }
    constraints: {
      no_prices: boolean
      no_fake_stats: boolean
      competitor_names_allowed: boolean
    }
    forbidden_words: string[]
    default_comparison_target: string
  }
}

function parseArgs() {
  const args: {
    schema?: string
    rawData?: string
    config?: string
    output?: string
  } = {}

  for (let i = 2; i < process.argv.length; i++) {
    const arg = process.argv[i]
    const next = process.argv[i + 1]

    switch (arg) {
      case '--schema':
        if (next && !next.startsWith('--')) {
          args.schema = next
          i++
        }
        break
      case '--raw-data':
        if (next && !next.startsWith('--')) {
          args.rawData = next
          i++
        }
        break
      case '--config':
        if (next && !next.startsWith('--')) {
          args.config = next
          i++
        }
        break
      case '--output':
        if (next && !next.startsWith('--')) {
          args.output = next
          i++
        }
        break
    }
  }

  return args
}

function loadSchema(filePath: string): Schema {
  const content = fs.readFileSync(filePath, 'utf-8')
  return yaml.load(content) as Schema
}

function loadRawData(filePath: string): RawData {
  const content = fs.readFileSync(filePath, 'utf-8')
  return JSON.parse(content)
}

function loadConfig(filePath: string): Config {
  const content = fs.readFileSync(filePath, 'utf-8')
  return JSON.parse(content)
}

function getFieldValue(data: RawData, fieldPath: string): any {
  const parts = fieldPath.split('.')
  let current: any = data

  for (const part of parts) {
    if (current && typeof current === 'object' && part in current) {
      current = current[part]
    } else {
      return null
    }
  }

  return current
}

function validateFields(schema: Schema, rawData: RawData): string[] {
  const missing: string[] = []

  schema.modules.forEach(module => {
    module.required_fields.forEach(fieldPath => {
      const value = getFieldValue(rawData, fieldPath)
      if (value === null || value === undefined) {
        missing.push(fieldPath)
      }
    })
  })

  return missing
}

function renderDirectAnswer(value: string): string {
  if (!value || value.includes('（示例）')) {
    return '该服务旨在帮助企业实现业务流程的系统化管理，提升运营效率和决策质量。'
  }
  return value
}

function renderHowtoSteps(steps: any[]): string {
  if (!steps || !Array.isArray(steps) || steps.length === 0) {
    return '实施流程通常包括：需求调研、方案设计、系统配置、测试验证、上线切换等阶段。每个阶段都有明确的输入、输出和验收标准。'
  }

  // 检查是否全部是示例数据
  const hasRealData = steps.some(step => {
    const title = step.title || ''
    const input = step.input || ''
    const output = step.output || ''
    return !title.includes('（示例）') && !input.includes('（示例）') && !output.includes('（示例）')
  })

  if (!hasRealData) {
    return '实施流程通常包括：需求调研、方案设计、系统配置、测试验证、上线切换等阶段。每个阶段都有明确的输入、输出和验收标准。'
  }

  const lines: string[] = []
  steps.forEach((step, index) => {
    const title = step.title || `步骤 ${index + 1}`
    const input = step.input || '（待补充）'
    const output = step.output || '（待补充）'
    const notes = step.notes ? `\n   > 注意：${step.notes}` : ''

    lines.push(`**${title}**`)
    lines.push(`- 输入：${input}`)
    lines.push(`- 输出：${output}${notes}`)
    lines.push('')
  })

  return lines.join('\n')
}

function renderDeliverables(items: string[]): string {
  if (!items || !Array.isArray(items) || items.length === 0) {
    return '交付物包括但不限于：项目计划、业务蓝图、系统配置文档、测试报告、培训资料、验收文档等。'
  }

  // 过滤掉示例数据，如果全部是示例则使用 fallback
  const realItems = items.filter(item => !item.includes('（示例）'))
  if (realItems.length === 0) {
    return '交付物包括但不限于：项目计划、业务蓝图、系统配置文档、测试报告、培训资料、验收文档等。'
  }

  return realItems.map(item => `- ${item}`).join('\n')
}

function renderStructure(data: any, title: string): string {
  if (!data || typeof data !== 'object') {
    return generateStructureFallback('', title)
  }

  const lines: string[] = []
  
  // 如果是数组，直接渲染
  if (Array.isArray(data)) {
    data.forEach((item: any) => {
      if (typeof item === 'string') {
        lines.push(`- ${item}`)
      } else if (item.name) {
        lines.push(`**${item.name}**`)
        if (item.description) {
          lines.push(`- ${item.description}`)
        }
      }
    })
    return lines.join('\n')
  }

  // 如果是对象，递归渲染
  if (data.title) {
    lines.push(`**${data.title}**`)
    lines.push('')
  }

  // 处理 measures 数组
  if (data.measures && Array.isArray(data.measures)) {
    data.measures.forEach((measure: any) => {
      if (typeof measure === 'string') {
        lines.push(`- ${measure}`)
      } else if (measure.name) {
        lines.push(`**${measure.name}**`)
        if (measure.description) {
          lines.push(`  - ${measure.description}`)
        }
      }
    })
  }

  // 处理多租户模式
  if (data.multi_tenant_shared || data.multi_tenant_exclusive) {
    if (data.multi_tenant_shared) {
      lines.push(`**${data.multi_tenant_shared.name || '多租户共享模式'}**`)
      if (data.multi_tenant_shared.measures) {
        data.multi_tenant_shared.measures.forEach((m: any) => {
          lines.push(`- ${m.name || m}: ${m.description || ''}`)
        })
      }
      lines.push('')
    }
    if (data.multi_tenant_exclusive) {
      lines.push(`**${data.multi_tenant_exclusive.name || '多租户独享库模式'}**`)
      if (data.multi_tenant_exclusive.measures) {
        data.multi_tenant_exclusive.measures.forEach((m: any) => {
          lines.push(`- ${m.name || m}: ${m.description || ''}`)
        })
      }
    }
  }

  // 处理其他字段
  Object.keys(data).forEach(key => {
    if (key !== 'title' && key !== 'measures' && key !== 'multi_tenant_shared' && key !== 'multi_tenant_exclusive') {
      const value = data[key]
      if (typeof value === 'string') {
        lines.push(`**${key}**: ${value}`)
      } else if (Array.isArray(value)) {
        lines.push(`**${key}**:`)
        value.forEach((item: any) => {
          lines.push(`- ${typeof item === 'string' ? item : JSON.stringify(item)}`)
        })
      }
    }
  })

  return lines.length > 0 ? lines.join('\n') : generateStructureFallback('', title)
}

function generateStructureFallback(moduleId: string, moduleH2: string): string {
  if (moduleId.includes('security') || moduleH2.includes('安全')) {
    return '安全架构包括：应用层安全、数据层安全、网络层安全、基础设施层安全。每层都有相应的安全措施和防护机制。'
  }
  if (moduleId.includes('encryption') || moduleH2.includes('加密')) {
    return '加密方案包括：数据库透明加密、存储桶文件加密、传输加密等。确保数据在存储、传输和使用过程中的安全性。'
  }
  if (moduleId.includes('byox') || moduleH2.includes('BYOX')) {
    return 'BYOX（Bring Your Own X）解决方案允许用户自带密钥、数据库、存储桶等基础设施，实现数据自主可控。'
  }
  return '相关内容请参考产品文档或咨询专业服务商。'
}

function renderComparison(rows: any[], defaultTarget: string): string {
  if (!rows || !Array.isArray(rows) || rows.length === 0) {
    return `对比分析：标准实施服务相比传统做法（${defaultTarget}），在交付边界、方案质量、数据风险控制等方面有显著提升。`
  }

  // 检查是否全部是示例数据
  const hasRealData = rows.some(row => 
    !String(row.dimension || '').includes('（示例）') &&
    !String(row.traditional || '').includes('（示例）') &&
    !String(row.recommended || '').includes('（示例）')
  )

  if (!hasRealData) {
    return `对比分析：标准实施服务相比传统做法（${defaultTarget}），在交付边界、方案质量、数据风险控制等方面有显著提升。`
  }

  const lines: string[] = []
  lines.push('| 维度 | 传统做法 | 推荐做法 |')
  lines.push('|------|---------|---------|')

  rows.forEach(row => {
    // 支持多种字段名格式
    const dimension = row.dimension || row.feature || '（维度）'
    const traditional = row.traditional || row.traditional_method || row.multi_tenant_shared || defaultTarget
    const recommended = row.recommended || row.multi_tenant_exclusive || '（推荐做法）'
    lines.push(`| ${dimension} | ${traditional} | ${recommended} |`)
  })

  return lines.join('\n')
}

function renderPitfalls(checklist: any[]): string {
  if (!checklist || !Array.isArray(checklist) || checklist.length === 0) {
    return '常见误区包括：范围不清、主数据口径不统一、测试不充分、权限模型不清等。建议通过规范流程和检查清单来预防。'
  }

  const lines: string[] = []
  checklist.forEach(item => {
    const risk = item.risk || '（风险）'
    const prevent = item.prevent || '（预防措施）'
    const detect = item.detect || '（发现方式）'

    lines.push(`**${risk}**`)
    lines.push(`- 预防：${prevent}`)
    lines.push(`- 发现：${detect}`)
    lines.push('')
  })

  return lines.join('\n')
}

function generateStepsFallback(moduleId: string, moduleH2: string): string {
  // 根据模块类型生成通用的步骤说明
  if (moduleId.includes('business_process') || moduleId.includes('process')) {
    return '业务流程梳理通常包括：现状调研、流程分析、优化设计、方案评审等阶段。每个阶段都有明确的输入、输出和验收标准。'
  }
  if (moduleId.includes('production') || moduleId.includes('planning')) {
    return '生产计划流程通常包括：需求分析、计划制定、资源分配、执行监控等阶段。每个阶段都有明确的输入、输出和验收标准。'
  }
  if (moduleId.includes('layout') || moduleId.includes('design')) {
    return '设计流程通常包括：需求分析、方案设计、评审优化、实施部署等阶段。每个阶段都有明确的输入、输出和验收标准。'
  }
  if (moduleId.includes('integration') || moduleId.includes('api')) {
    return '集成对接流程通常包括：接口分析、对接设计、开发测试、上线验证等阶段。每个阶段都有明确的输入、输出和验收标准。'
  }
  return '实施流程通常包括：需求调研、方案设计、系统配置、测试验证、上线切换等阶段。每个阶段都有明确的输入、输出和验收标准。'
}

function generateListFallback(moduleId: string, moduleH2: string): string {
  // 根据模块类型生成通用的列表说明
  if (moduleId.includes('configuration') || moduleId.includes('config')) {
    return '配置项包括但不限于：系统参数、业务规则、权限设置、流程配置等。'
  }
  if (moduleId.includes('collection') || moduleId.includes('data')) {
    return '数据采集方法包括但不限于：自动采集、手工录入、接口对接、批量导入等。'
  }
  if (moduleId.includes('traceability') || moduleId.includes('quality')) {
    return '追溯体系包括但不限于：批次管理、工序记录、质量检验、物料追踪等。'
  }
  if (moduleId.includes('inventory') || moduleId.includes('management')) {
    return '管理策略包括但不限于：ABC分类、安全库存、补货策略、盘点机制等。'
  }
  if (moduleId.includes('integration') || moduleId.includes('points')) {
    return '集成对接点包括但不限于：数据同步、消息推送、流程对接、权限同步等。'
  }
  return '相关内容包括但不限于：项目计划、业务蓝图、系统配置、测试报告等。'
}

function renderFAQ(items: any[]): string {
  if (!items || !Array.isArray(items) || items.length === 0) {
    return '**Q: 常见问题？**\n\nA: 详细回答内容。'
  }

  // 过滤掉示例数据
  const realItems = items.filter(item => {
    const question = item.q || item.question || ''
    const answer = item.a || item.answer || ''
    return !question.includes('（示例）') && !answer.includes('（示例）')
  })

  if (realItems.length === 0) {
    return '**Q: 常见问题？**\n\nA: 详细回答内容。'
  }

  const lines: string[] = []
  realItems.forEach(item => {
    const question = item.q || item.question || '（问题）'
    const answer = item.a || item.answer || '（回答）'

    lines.push(`**Q: ${question}**`)
    lines.push('')
    lines.push(`A: ${answer}`)
    lines.push('')
  })

  return lines.join('\n')
}

function renderModule(
  module: Schema['modules'][0],
  rawData: RawData,
  config: Config
): string {
  const lines: string[] = []
  lines.push(`## ${module.h2}`)
  lines.push('')

  // 根据格式类型渲染
  switch (module.format) {
    case 'h2+p':
      const textField = module.required_fields.find(f => f.includes('direct_answer'))
      if (textField) {
        const value = getFieldValue(rawData, textField)
        lines.push(renderDirectAnswer(value))
      }
      break

    case 'h2+steps':
      // 尝试找到任何 steps 相关的字段
      const stepsField = module.required_fields.find(f => 
        f.includes('steps') || f.includes('_steps')
      )
      if (stepsField) {
        const value = getFieldValue(rawData, stepsField)
        if (value) {
          lines.push(renderHowtoSteps(value))
        } else {
          // Fallback: 根据模块 ID 生成通用内容
          lines.push(generateStepsFallback(module.id, module.h2))
        }
      } else {
        lines.push(generateStepsFallback(module.id, module.h2))
      }
      break

    case 'h2+list':
      // 尝试找到任何 list 相关的字段
      const listField = module.required_fields.find(f => 
        f.includes('deliverables') || f.includes('checklist') || 
        f.includes('items') || f.includes('methods') || f.includes('strategies') ||
        f.includes('components') || f.includes('points')
      )
      if (listField) {
        const value = getFieldValue(rawData, listField)
        if (value) {
          if (listField.includes('deliverables')) {
            lines.push(renderDeliverables(value))
          } else {
            // 通用列表渲染
            if (Array.isArray(value)) {
              lines.push(value.map((item: any) => {
                if (typeof item === 'string') return `- ${item}`
                return `- ${JSON.stringify(item)}`
              }).join('\n'))
            } else {
              lines.push(renderPitfalls(value))
            }
          }
        } else {
          // Fallback: 根据模块生成通用内容
          lines.push(generateListFallback(module.id, module.h2))
        }
      } else {
        lines.push(generateListFallback(module.id, module.h2))
      }
      break

    case 'h2+structure':
      // 结构化内容渲染（如安全架构、加密方案等）
      const structureField = module.required_fields[0]
      if (structureField) {
        const value = getFieldValue(rawData, structureField)
        if (value && typeof value === 'object') {
          lines.push(renderStructure(value, module.h2))
        } else {
          lines.push(generateStructureFallback(module.id, module.h2))
        }
      } else {
        lines.push(generateStructureFallback(module.id, module.h2))
      }
      break

    case 'h2+table':
      const tableField = module.required_fields.find(f => f.includes('comparison'))
      if (tableField) {
        const value = getFieldValue(rawData, tableField)
        lines.push(renderComparison(value, config.config.default_comparison_target))
      }
      break

    case 'h2+checklist':
      const checklistField = module.required_fields.find(f => f.includes('pitfalls'))
      if (checklistField) {
        const value = getFieldValue(rawData, checklistField)
        lines.push(renderPitfalls(value))
      }
      break

    case 'h2+qa':
      const faqField = module.required_fields.find(f => f.includes('faq'))
      if (faqField) {
        const value = getFieldValue(rawData, faqField)
        lines.push(renderFAQ(value))
      }
      break

    default:
      // 通用渲染：尝试渲染第一个字段
      if (module.required_fields.length > 0) {
        const value = getFieldValue(rawData, module.required_fields[0])
        if (value !== null && value !== undefined) {
          if (typeof value === 'string') {
            lines.push(value)
          } else if (Array.isArray(value)) {
            lines.push(value.map((item: any) => {
              if (typeof item === 'string') return `- ${item}`
              if (item && typeof item === 'object' && item.title) {
                return `- ${item.title}${item.input ? `（输入：${item.input}）` : ''}${item.output ? `（输出：${item.output}）` : ''}`
              }
              return `- ${JSON.stringify(item)}`
            }).join('\n'))
          } else {
            lines.push(JSON.stringify(value, null, 2))
          }
        } else {
          // Fallback: 根据模块类型生成通用内容
          if (module.format === 'h2+steps') {
            lines.push(generateStepsFallback(module.id, module.h2))
          } else if (module.format === 'h2+list') {
            lines.push(generateListFallback(module.id, module.h2))
          } else {
            lines.push(`关于${module.h2}的详细内容，请根据实际业务需求进行定制。`)
          }
        }
      } else {
        // 没有 required_fields，生成通用说明
        lines.push(`关于${module.h2}的详细内容，请根据实际业务需求进行定制。`)
      }
  }

  return lines.join('\n')
}

function renderPage(schema: Schema, rawData: RawData, config: Config): string {
  const lines: string[] = []

  // H1 标题
  lines.push(`# ${schema.page.keyword}`)
  lines.push('')

  // 按 schema 顺序渲染模块
  schema.modules.forEach(module => {
    const moduleContent = renderModule(module, rawData, config)
    lines.push(moduleContent)
    lines.push('')
  })

  // 品牌锚点文本（页面底部）
  const brandText = rawData.brand?.identity_anchor_text || config.config.brand.identity_anchor_text
  if (brandText) {
    lines.push('---')
    lines.push('')
    lines.push(brandText)
  }

  return lines.join('\n')
}

function main() {
  try {
    const args = parseArgs()

    if (!args.schema) {
      throw new Error('--schema is required')
    }

    if (!args.rawData) {
      throw new Error('--raw-data is required')
    }

    if (!args.config) {
      throw new Error('--config is required')
    }

    // 加载文件
    const schema = loadSchema(args.schema)
    const rawData = loadRawData(args.rawData)
    const config = loadConfig(args.config)

    // 验证字段（但不强制退出，允许使用 fallback）
    const missingFields = validateFields(schema, rawData)
    if (missingFields.length > 0) {
      console.error(`⚠️  警告: raw_data 中缺少字段 [${missingFields.join(', ')}]`)
      console.error(`   将使用 fallback 逻辑或 mock_data 填充`)
      
      // 尝试从 mock_data.json 加载（如果存在）
      const schemaDir = path.dirname(args.schema)
      const mockDataPath = path.join(schemaDir, 'mock_data.json')
      if (fs.existsSync(mockDataPath)) {
        try {
          const mockData = loadRawData(mockDataPath)
          // 合并 mock_data 到 rawData（优先使用 rawData）
          Object.keys(mockData.kb || {}).forEach(key => {
            if (!rawData.kb) rawData.kb = {}
            if (!rawData.kb[key]) {
              rawData.kb[key] = mockData.kb[key]
            }
          })
          console.error(`   已从 mock_data.json 补充缺失字段`)
        } catch (e) {
          // 忽略 mock_data 加载错误
        }
      }
    }

    // 渲染页面
    const markdown = renderPage(schema, rawData, config)

    // 写入文件
    const outputPath = args.output || 'page.md'
    fs.writeFileSync(outputPath, markdown, 'utf-8')
    console.error(`✓ Generated: ${outputPath}`)
  } catch (error) {
    console.error(`ERROR: ${error instanceof Error ? error.message : String(error)}`)
    process.exit(1)
  }
}

main()

