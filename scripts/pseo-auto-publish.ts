#!/usr/bin/env node
/**
 * PSEO 自动发布工作流
 * 
 * 一键完成：生成配置 → 生成 Schema → 渲染页面 → 质量审查 → 导入到 Blog
 * 
 * Usage:
 *   tsx scripts/pseo-auto-publish.ts [options]
 * 
 * Options:
 *   --keyword <text>          目标关键词
 *   --raw-data <path>         真实数据文件路径（可选，使用 mock_data 如果未提供）
 *   --page-type <type>        页面类型：money_page / guide_page（默认：money_page）
 *   --category <slug>         分类 slug（默认：industry-insights）
 *   --status <draft|published> 发布状态（默认：draft）
 *   --output-dir <dir>        输出目录（默认：output/auto）
 *   --skip-review             跳过质量审查
 *   --skip-import             跳过导入到 blog
 * 
 * Example:
 *   tsx scripts/pseo-auto-publish.ts \
 *     --keyword "用友ERP实施服务" \
 *     --raw-data docs/pseo/raw_data/docs/pseo/raw_data/pages/erp_.json \
 *     --category industry-insights \
 *     --status published
 */

import * as fs from 'fs'
import * as path from 'path'
import { execSync } from 'child_process'

function parseArgs() {
  const args: {
    keyword?: string
    rawData?: string
    pageType?: 'money_page' | 'guide_page'
    category?: string
    status?: 'draft' | 'published'
    outputDir?: string
    skipReview?: boolean
    skipImport?: boolean
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
      case '--raw-data':
        if (next && !next.startsWith('--')) {
          args.rawData = next
          i++
        }
        break
      case '--page-type':
        if (next && (next === 'money_page' || next === 'guide_page')) {
          args.pageType = next
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
      case '--output-dir':
        if (next && !next.startsWith('--')) {
          args.outputDir = next
          i++
        }
        break
      case '--skip-review':
        args.skipReview = true
        break
      case '--skip-import':
        args.skipImport = true
        break
    }
  }

  return args
}

function runCommand(command: string, description: string): void {
  console.error(`\n📌 ${description}...`)
  try {
    execSync(command, { stdio: 'inherit', cwd: process.cwd() })
    console.error(`✓ ${description} 完成`)
  } catch (error) {
    console.error(`✗ ${description} 失败: ${error}`)
    throw error
  }
}

async function main() {
  try {
    const args = parseArgs()

    if (!args.keyword) {
      throw new Error('--keyword is required')
    }

    const outputDir = args.outputDir || 'output/auto'
    const pageType = args.pageType || 'money_page'
    const category = args.category || 'industry-insights'
    const status = args.status || 'draft'

    // 确保输出目录存在
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true })
    }

    console.error('🚀 开始自动发布工作流...')
    console.error(`   关键词: ${args.keyword}`)
    console.error(`   页面类型: ${pageType}`)
    console.error(`   输出目录: ${outputDir}`)

    // 步骤 1: 生成配置
    const configPath = path.join(outputDir, 'config.json')
    runCommand(
      `npx tsx scripts/pseo-config-generator.ts > ${configPath}`,
      '生成配置'
    )

    // 步骤 2: 生成 Schema 和 Mock 数据
    runCommand(
      `npx tsx scripts/pseo-schema-generator.ts --keyword "${args.keyword}" --config ${configPath} --page-type ${pageType} --output-dir ${outputDir}`,
      '生成页面结构'
    )

    // 步骤 3: 渲染页面
    const schemaPath = path.join(outputDir, 'schema.yaml')
    const pagePath = path.join(outputDir, 'page.md')
    const rawDataPath = args.rawData || path.join(outputDir, 'mock_data.json')

    if (!fs.existsSync(rawDataPath) && !args.rawData) {
      console.error(`⚠️  警告: ${rawDataPath} 不存在，使用 mock_data.json`)
    }

    runCommand(
      `npx tsx scripts/pseo-page-renderer.ts --schema ${schemaPath} --raw-data ${rawDataPath} --config ${configPath} --output ${pagePath}`,
      '渲染页面'
    )

    // 步骤 4: 质量审查（可选）
    if (!args.skipReview) {
      const reviewPath = path.join(outputDir, 'review.json')
      runCommand(
        `npx tsx scripts/pseo-review.ts --schema ${schemaPath} --page ${pagePath} --config ${configPath} --output ${reviewPath}`,
        '质量审查'
      )

      // 检查审查结果
      const reviewContent = JSON.parse(fs.readFileSync(reviewPath, 'utf-8'))
      if (reviewContent.result === 'FAIL') {
        console.error('\n⚠️  警告: 页面质量审查未通过，建议修复后再导入')
        console.error(`   评分: ${reviewContent.review.score}/10`)
        console.error(`   问题数: ${reviewContent.review.fail_reasons.length}`)
        
        if (!args.skipImport) {
          const shouldContinue = process.env.FORCE_IMPORT === 'true'
          if (!shouldContinue) {
            console.error('\n❌ 导入已取消。如需强制导入，请设置 FORCE_IMPORT=true')
            process.exit(1)
          }
        }
      } else if (reviewContent.result === 'REVISE') {
        console.error('\n⚠️  警告: 页面需要修订，已生成修订版本')
        if (reviewContent.revised_content) {
          const revisedPath = path.join(outputDir, 'page-revised.md')
          fs.writeFileSync(revisedPath, reviewContent.revised_content, 'utf-8')
          console.error(`   修订版本: ${revisedPath}`)
          // 使用修订版本
          if (fs.existsSync(revisedPath)) {
            fs.copyFileSync(revisedPath, pagePath)
            console.error('   已使用修订版本')
          }
        }
      } else {
        console.error(`\n✓ 质量审查通过 (${reviewContent.review.score}/10)`)
      }
    }

    // 步骤 5: 导入到 Blog（可选）
    if (!args.skipImport) {
      runCommand(
        `npx tsx scripts/pseo-import-to-blog.ts --page ${pagePath} --schema ${schemaPath} --category ${category} --status ${status}`,
        '导入到 Blog'
      )
      console.error(`\n🎉 页面已成功导入到 Blog！`)
      console.error(`   分类: ${category}`)
      console.error(`   状态: ${status}`)
    } else {
      console.error(`\n✓ 页面已生成，但未导入到 Blog（已跳过）`)
    }

    console.error(`\n📁 所有文件已保存到: ${outputDir}`)
    console.error(`   - config.json`)
    console.error(`   - schema.yaml`)
    console.error(`   - mock_data.json`)
    console.error(`   - page.md ⭐`)
    if (!args.skipReview) {
      console.error(`   - review.json`)
    }

    process.exit(0)
  } catch (error) {
    console.error(`\n❌ 错误: ${error instanceof Error ? error.message : String(error)}`)
    process.exit(1)
  }
}

main()



