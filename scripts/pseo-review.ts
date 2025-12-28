#!/usr/bin/env node
/**
 * PSEO Skill 04 — Review + Auto-Fix (Quality Rater)
 * 
 * 质量审查工具：检查页面内容并自动修复
 * 
 * Usage:
 *   tsx scripts/pseo-review.ts [options]
 * 
 * Options:
 *   --schema <path>        schema.yaml 文件路径
 *   --page <path>          page.md 文件路径
 *   --config <path>        Skill 00 配置 JSON 文件路径
 *   --output <path>        输出文件路径（默认：review.json）
 *   --revised-output <path> 修订内容输出路径（可选）
 * 
 * Example:
 *   tsx scripts/pseo-review.ts \
 *     --schema output/schema.yaml \
 *     --page output/page.md \
 *     --config config.json \
 *     --output review.json
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

interface FailReason {
  type: 'keyword_stuffing' | 'format_drift' | 'hallucination' | 'low_info_gain' | 'logic_error'
  location: string
  fix: string
}

interface FormatCheck {
  matches_schema: boolean
  diffs: string[]
}

interface ReviewOutput {
  review: {
    score: number
    fail_reasons: FailReason[]
  }
  format_check: FormatCheck
  result: 'PASS' | 'REVISE' | 'FAIL'
  revised_content?: string
}

// 空话套话关键词
const FLUFF_PATTERNS = [
  '在当今数字化时代',
  '随着科技的不断发展',
  '在这个信息爆炸的时代',
  '众所周知',
  '毋庸置疑',
  '毫无疑问',
  '不言而喻',
  '众所周知的是',
  '在这个日新月异的时代'
]

// 常见客户名模式（需要数据支撑）
const CUSTOMER_NAME_PATTERNS = [
  /[A-Z][a-z]+(?:集团|公司|企业|股份)/g,
  /[\u4e00-\u9fa5]{2,6}(?:集团|公司|企业|股份)/g
]

// 数字模式（需要验证）
const NUMBER_PATTERNS = [
  /\d+[万千百]?[家个]?/g,
  /\d+%[的]?/g,
  /超过\d+/g,
  /达到\d+/g
]

function parseArgs() {
  const args: {
    schema?: string
    page?: string
    config?: string
    output?: string
    revisedOutput?: string
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
      case '--page':
        if (next && !next.startsWith('--')) {
          args.page = next
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
      case '--revised-output':
        if (next && !next.startsWith('--')) {
          args.revisedOutput = next
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

function loadPage(filePath: string): string {
  return fs.readFileSync(filePath, 'utf-8')
}

function loadConfig(filePath: string): Config {
  const content = fs.readFileSync(filePath, 'utf-8')
  return JSON.parse(content)
}

function checkFormat(pageContent: string, schema: Schema): FormatCheck {
  const diffs: string[] = []
  const lines = pageContent.split('\n')
  
  // 检查 H1 标题
  const h1Match = pageContent.match(/^# (.+)$/m)
  if (!h1Match || h1Match[1] !== schema.page.keyword) {
    diffs.push(`H1 标题不匹配：期望 "${schema.page.keyword}"，实际 "${h1Match?.[1] || '未找到'}"`)
  }

  // 检查模块顺序和 H2 标题
  const h2Matches = [...pageContent.matchAll(/^## (.+)$/gm)]
  const expectedH2s = schema.modules.map(m => m.h2)
  const actualH2s = h2Matches.map(m => m[1])

  if (actualH2s.length !== expectedH2s.length) {
    diffs.push(`H2 数量不匹配：期望 ${expectedH2s.length} 个，实际 ${actualH2s.length} 个`)
  }

  for (let i = 0; i < Math.min(actualH2s.length, expectedH2s.length); i++) {
    if (actualH2s[i] !== expectedH2s[i]) {
      diffs.push(`H2 顺序不匹配：位置 ${i + 1}，期望 "${expectedH2s[i]}"，实际 "${actualH2s[i]}"`)
    }
  }

  // 检查表格列数（对比分析模块）
  const comparisonModule = schema.modules.find(m => m.id === 'comparison')
  if (comparisonModule) {
    const comparisonSection = pageContent.match(/## 对比分析\n([\s\S]*?)(?=\n## |$)/)
    if (comparisonSection) {
      const tableMatch = comparisonSection[1].match(/\|(.+)\|/)
      if (tableMatch) {
        const columns = tableMatch[1].split('|').filter(c => c.trim()).length
        if (columns !== 3) {
          diffs.push(`对比表格列数不匹配：期望 3 列，实际 ${columns} 列`)
        }
      }
    }
  }

  return {
    matches_schema: diffs.length === 0,
    diffs
  }
}

function checkHallucination(pageContent: string, config: Config): FailReason[] {
  const reasons: FailReason[] = []

  // 检查客户名（更严格的模式：必须是独立的公司名，不是句子的一部分）
  // 匹配：XXX集团、XXX公司、XXX企业、XXX股份（前后有标点或换行）
  const customerPattern = /(?:^|[。，、\n])([A-Z][a-z]{2,}|[\u4e00-\u9fa5]{2,6})(?:集团|公司|企业|股份)(?=[。，、\n]|$)/gm
  const customerMatches = [...pageContent.matchAll(customerPattern)]
  
  if (customerMatches.length > 0) {
    // 提取公司名
    const companies = customerMatches.map(m => m[1] + m[0].substring(m[1].length))
      .filter(c => {
        // 过滤掉常见词汇和已知品牌
        const lower = c.toLowerCase()
        return !lower.includes('实施') &&
               !lower.includes('服务') &&
               !lower.includes('用友') &&
               !lower.includes('泊冉') &&
               !lower.includes('企业') &&
               !lower.includes('公司') &&
               c.length >= 4 // 至少4个字符
      })
    
    if (companies.length > 0) {
      // 检查是否在品牌锚点中（允许）
      const brandText = config.config.brand.identity_anchor_text
      const isInBrandText = companies.some(c => brandText.includes(c))
      
      if (!isInBrandText) {
        reasons.push({
          type: 'hallucination',
          location: '全文',
          fix: `发现可能的客户名：${companies.join(', ')}。请确认是否有数据支撑，否则应删除或脱敏。`
        })
      }
    }
  }

  // 检查数字（如果禁止虚假统计）- 更严格的模式
  if (config.config.constraints.no_fake_stats) {
    // 只检查明显的统计数据模式：超过/达到/约有 + 数字 + 单位
    const statsPattern = /(?:超过|达到|约有|约|累计|共|总计)\s*(\d+[万千百]?[家个]?)/g
    const statsMatches = [...pageContent.matchAll(statsPattern)]
    
    if (statsMatches.length > 0) {
      const stats = statsMatches.map(m => m[0])
      // 检查是否在品牌锚点中（允许）
      const brandText = config.config.brand.identity_anchor_text
      const isInBrandText = stats.some(s => brandText.includes(s))
      
      if (!isInBrandText) {
        reasons.push({
          type: 'hallucination',
          location: '全文',
          fix: `发现可能的统计数据：${stats.join(', ')}。请确认是否有数据支撑，否则应删除。`
        })
      }
    }
  }

  return reasons
}

function checkFluff(pageContent: string): FailReason[] {
  const reasons: FailReason[] = []
  const lines = pageContent.split('\n')

  lines.forEach((line, index) => {
    FLUFF_PATTERNS.forEach(pattern => {
      if (line.includes(pattern)) {
        reasons.push({
          type: 'low_info_gain',
          location: `line ${index + 1}`,
          fix: `删除空话套话："${pattern}"`
        })
      }
    })
  })

  return reasons
}

function checkConsistency(pageContent: string, config: Config): FailReason[] {
  const reasons: FailReason[] = []
  const brandText = config.config.brand.identity_anchor_text.trim()

  // 检查是否包含品牌锚点文本
  if (!pageContent.includes(brandText)) {
    reasons.push({
      type: 'format_drift',
      location: '页面底部',
      fix: `缺少品牌身份锚点文本。应在页面底部添加：\n${brandText}`
    })
  } else {
    // 检查是否逐字一致
    const pageBrandMatch = pageContent.match(new RegExp(brandText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')))
    if (!pageBrandMatch) {
      reasons.push({
        type: 'format_drift',
        location: '页面底部',
        fix: `品牌身份锚点文本不一致。期望：\n${brandText}`
      })
    }
  }

  return reasons
}

function checkForbiddenWords(pageContent: string, config: Config): FailReason[] {
  const reasons: FailReason[] = []
  const forbiddenWords = config.config.forbidden_words || []

  forbiddenWords.forEach(word => {
    if (pageContent.includes(word)) {
      reasons.push({
        type: 'keyword_stuffing',
        location: '全文',
        fix: `发现禁止词："${word}"。应删除或替换。`
      })
    }
  })

  return reasons
}

function calculateScore(
  formatCheck: FormatCheck,
  failReasons: FailReason[]
): number {
  let score = 10

  // Format Check: -2 分
  if (!formatCheck.matches_schema) {
    score -= 2
  }

  // 每个 fail_reason: -1 分
  score -= failReasons.length

  // 确保分数在 0-10 范围内
  return Math.max(0, Math.min(10, score))
}

function generateRevisedContent(
  pageContent: string,
  schema: Schema,
  config: Config,
  failReasons: FailReason[]
): string {
  let revised = pageContent

  // 修复格式问题
  const formatReasons = failReasons.filter(r => r.type === 'format_drift')
  formatReasons.forEach(reason => {
    if (reason.location.includes('品牌身份锚点')) {
      // 确保品牌锚点存在
      const brandText = config.config.brand.identity_anchor_text
      if (!revised.includes(brandText)) {
        revised = revised.replace(/---\s*$/, `---\n\n${brandText}`)
        if (!revised.includes('---')) {
          revised += `\n\n---\n\n${brandText}`
        }
      }
    }
  })

  // 删除空话套话
  const fluffReasons = failReasons.filter(r => r.type === 'low_info_gain')
  fluffReasons.forEach(reason => {
    const match = reason.fix.match(/删除空话套话："(.+)"/)
    if (match) {
      const pattern = match[1]
      // 删除模式及其后的逗号/句号，保留换行
      revised = revised.replace(new RegExp(pattern + '[，。、]?\\s*', 'g'), '')
      // 清理多余的空格，但保留换行
      revised = revised.replace(/[ \t]+/g, ' ')
      revised = revised.replace(/\n{3,}/g, '\n\n')
    }
  })

  // 删除禁止词
  const forbiddenReasons = failReasons.filter(r => r.type === 'keyword_stuffing')
  forbiddenReasons.forEach(reason => {
    const match = reason.fix.match(/发现禁止词："(.+)"/)
    if (match) {
      const word = match[1]
      // 简单替换为空格（实际可能需要更智能的替换）
      revised = revised.replace(new RegExp(word, 'g'), '')
    }
  })

  return revised
}

function main() {
  try {
    const args = parseArgs()

    if (!args.schema) {
      throw new Error('--schema is required')
    }

    if (!args.page) {
      throw new Error('--page is required')
    }

    if (!args.config) {
      throw new Error('--config is required')
    }

    // 加载文件
    const schema = loadSchema(args.schema)
    const pageContent = loadPage(args.page)
    const config = loadConfig(args.config)

    // 执行检查
    const formatCheck = checkFormat(pageContent, schema)
    const hallucinationReasons = checkHallucination(pageContent, config)
    const fluffReasons = checkFluff(pageContent)
    const consistencyReasons = checkConsistency(pageContent, config)
    const forbiddenReasons = checkForbiddenWords(pageContent, config)

    const allFailReasons = [
      ...hallucinationReasons,
      ...fluffReasons,
      ...consistencyReasons,
      ...forbiddenReasons
    ]

    // 计算分数
    const score = calculateScore(formatCheck, allFailReasons)

    // 确定结果
    let result: 'PASS' | 'REVISE' | 'FAIL'
    let revisedContent: string | undefined

    if (score < 6) {
      result = 'FAIL'
    } else if (score >= 6 && score <= 8) {
      result = 'REVISE'
      revisedContent = generateRevisedContent(pageContent, schema, config, allFailReasons)
    } else {
      result = 'PASS'
    }

    // 如果格式不匹配，也需要输出修订内容
    if (!formatCheck.matches_schema && result === 'PASS') {
      result = 'REVISE'
      revisedContent = generateRevisedContent(pageContent, schema, config, allFailReasons)
    }

    // 构建输出
    const output: ReviewOutput = {
      review: {
        score,
        fail_reasons: allFailReasons
      },
      format_check: formatCheck,
      result
    }

    if (revisedContent) {
      output.revised_content = revisedContent
    }

    // 写入 JSON 输出
    const outputPath = args.output || 'review.json'
    fs.writeFileSync(outputPath, JSON.stringify(output, null, 2), 'utf-8')
    console.error(`✓ Review completed: ${outputPath}`)
    console.error(`  - Score: ${score}/10`)
    console.error(`  - Result: ${result}`)
    console.error(`  - Issues found: ${allFailReasons.length}`)

    // 如果生成了修订内容，写入单独文件
    if (revisedContent && args.revisedOutput) {
      fs.writeFileSync(args.revisedOutput, revisedContent, 'utf-8')
      console.error(`✓ Revised content saved: ${args.revisedOutput}`)
    } else if (revisedContent) {
      // 如果没有指定输出路径，输出到控制台
      console.log('\n--- Revised Content ---\n')
      console.log(revisedContent)
    }
  } catch (error) {
    console.error(`ERROR: ${error instanceof Error ? error.message : String(error)}`)
    process.exit(1)
  }
}

main()

