#!/usr/bin/env node
/**
 * PSEO 批量生成文档
 * 
 * 基于 pages_index.csv 批量生成多个页面
 * 
 * Usage:
 *   tsx scripts/pseo-batch-generate.ts [options]
 * 
 * Options:
 *   --csv <path>            pages_index.csv 文件路径（默认：docs/pseo/raw_data/docs/pseo/raw_data/pages_index.csv）
 *   --output-base <dir>     输出基础目录（默认：output/batch）
 *   --category <slug>       分类 slug（默认：industry-insights）
 *   --status <draft|published> 发布状态（默认：draft）
 *   --skip-import           跳过导入到 blog
 *   --limit <number>        限制生成数量（用于测试）
 * 
 * Example:
 *   tsx scripts/pseo-batch-generate.ts --limit 3
 */

import * as fs from 'fs'
import * as path from 'path'
import { execSync } from 'child_process'

interface PageIndex {
  keyword: string
  file: string
  intent: string
  page_type: 'money_page' | 'guide_page'
  industry_hint?: string
}

function parseArgs() {
  const args: {
    csv?: string
    outputBase?: string
    category?: string
    status?: 'draft' | 'published'
    skipImport?: boolean
    limit?: number
  } = {}

  for (let i = 2; i < process.argv.length; i++) {
    const arg = process.argv[i]
    const next = process.argv[i + 1]

    switch (arg) {
      case '--csv':
        if (next && !next.startsWith('--')) {
          args.csv = next
          i++
        }
        break
      case '--output-base':
        if (next && !next.startsWith('--')) {
          args.outputBase = next
          i++
        }
        break
      case '--category':
        if (next && !next.startsWith('--')) {
          args.category = next
          i++
        }
        break
      case '--status':
        if (next && (next === 'draft' || next === 'published')) {
          args.status = next
          i++
        }
        break
      case '--skip-import':
        args.skipImport = true
        break
      case '--limit':
        if (next && !next.startsWith('--')) {
          args.limit = parseInt(next, 10)
          i++
        }
        break
    }
  }

  return args
}

function parseCSV(filePath: string): PageIndex[] {
  const content = fs.readFileSync(filePath, 'utf-8')
  const lines = content.trim().split('\n')
  const pages: PageIndex[] = []

  // 跳过标题行
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim()
    if (!line) continue

    const [keyword, file, intent, page_type, industry_hint] = line.split(',').map(s => s.trim())
    
    if (keyword && file && page_type) {
      pages.push({
        keyword,
        file,
        intent,
        page_type: page_type as 'money_page' | 'guide_page',
        industry_hint: industry_hint || undefined,
      })
    }
  }

  return pages
}

function generateSlug(keyword: string): string {
  // 简单的中文转拼音 slug
  return keyword
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .substring(0, 100)
}

async function main() {
  try {
    const args = parseArgs()
    
    const csvPath = args.csv || 'docs/pseo/raw_data/docs/pseo/raw_data/pages_index.csv'
    const outputBase = args.outputBase || 'output/batch'
    const category = args.category || 'industry-insights'
    const status = args.status || 'draft'

    if (!fs.existsSync(csvPath)) {
      throw new Error(`CSV 文件不存在: ${csvPath}`)
    }

    // 解析 CSV
    const pages = parseCSV(csvPath)
    const limit = args.limit || pages.length
    const pagesToProcess = pages.slice(0, limit)

    console.error(`\n🚀 开始批量生成文档...`)
    console.error(`   总数量: ${pages.length}`)
    console.error(`   本次处理: ${pagesToProcess.length}`)
    console.error(`   输出目录: ${outputBase}`)

    // 确保输出目录存在
    if (!fs.existsSync(outputBase)) {
      fs.mkdirSync(outputBase, { recursive: true })
    }

    // 生成全局配置（所有页面共享）
    const configPath = path.join(outputBase, 'config.json')
    if (!fs.existsSync(configPath)) {
      console.error(`\n📝 生成全局配置...`)
      execSync(`npx tsx scripts/pseo-config-generator.ts > ${configPath}`, { stdio: 'inherit' })
    }

    const results = {
      success: 0,
      failed: 0,
      skipped: 0,
      details: [] as Array<{ keyword: string; status: string; path?: string }>,
    }

    // 批量处理
    for (let i = 0; i < pagesToProcess.length; i++) {
      const page = pagesToProcess[i]
      const slug = generateSlug(page.keyword)
      const outputDir = path.join(outputBase, slug)

      console.error(`\n[${i + 1}/${pagesToProcess.length}] 处理: ${page.keyword}`)

      try {
        // 检查 raw_data 文件是否存在
        const rawDataPath = path.join('docs/pseo/raw_data/docs/pseo/raw_data/pages', page.file)
        const hasRawData = fs.existsSync(rawDataPath)

        if (!hasRawData) {
          console.error(`   ⚠️  跳过：raw_data 文件不存在 (${page.file})`)
          results.skipped++
          results.details.push({ keyword: page.keyword, status: 'skipped' })
          continue
        }

        // 使用自动发布脚本
        const importFlag = args.skipImport ? '--skip-import' : ''
        const command = `npx tsx scripts/pseo-auto-publish.ts --keyword "${page.keyword}" --raw-data "${rawDataPath}" --page-type ${page.page_type} --category ${category} --status ${status} --output-dir "${outputDir}" ${importFlag}`

        execSync(command, { stdio: 'pipe' })

        results.success++
        results.details.push({
          keyword: page.keyword,
          status: 'success',
          path: path.join(outputDir, 'page.md'),
        })

        console.error(`   ✓ 成功生成: ${outputDir}/page.md`)
      } catch (error) {
        results.failed++
        results.details.push({ keyword: page.keyword, status: 'failed' })
        console.error(`   ✗ 失败: ${error instanceof Error ? error.message : String(error)}`)
      }
    }

    // 输出总结
    console.error(`\n📊 批量生成总结:`)
    console.error(`   ✅ 成功: ${results.success}`)
    console.error(`   ❌ 失败: ${results.failed}`)
    console.error(`   ⏭️  跳过: ${results.skipped}`)
    console.error(`   📁 输出目录: ${outputBase}`)

    // 保存结果报告
    const reportPath = path.join(outputBase, 'batch-report.json')
    fs.writeFileSync(reportPath, JSON.stringify(results, null, 2), 'utf-8')
    console.error(`   📄 报告已保存: ${reportPath}`)

    // 列出所有生成的页面
    if (results.success > 0) {
      console.error(`\n📄 生成的页面列表:`)
      results.details
        .filter(d => d.status === 'success' && d.path)
        .forEach(d => {
          console.error(`   - ${d.keyword}`)
          console.error(`     文件: ${d.path}`)
        })
    }

    process.exit(0)
  } catch (error) {
    console.error(`\n❌ 错误: ${error instanceof Error ? error.message : String(error)}`)
    process.exit(1)
  }
}

main()

