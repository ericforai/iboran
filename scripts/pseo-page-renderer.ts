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
    const dimension = row.dimension || '（维度）'
    const traditional = row.traditional || defaultTarget
    const recommended = row.recommended || '（推荐做法）'
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
      const stepsField = module.required_fields.find(f => f.includes('howto_steps'))
      if (stepsField) {
        const value = getFieldValue(rawData, stepsField)
        lines.push(renderHowtoSteps(value))
      }
      break

    case 'h2+list':
      const listField = module.required_fields.find(f => 
        f.includes('deliverables') || f.includes('checklist')
      )
      if (listField) {
        const value = getFieldValue(rawData, listField)
        if (listField.includes('deliverables')) {
          lines.push(renderDeliverables(value))
        } else {
          lines.push(renderPitfalls(value))
        }
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
            lines.push(value.map((item: any) => `- ${item}`).join('\n'))
          } else {
            lines.push(JSON.stringify(value, null, 2))
          }
        }
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

    // 验证字段
    const missingFields = validateFields(schema, rawData)
    if (missingFields.length > 0) {
      console.error(`ERROR: missing_fields=[${missingFields.join(', ')}]`)
      process.exit(1)
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

