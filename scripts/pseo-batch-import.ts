#!/usr/bin/env node
/**
 * PSEO 批量导入到 Blog
 * 
 * 批量导入所有生成的 Markdown 页面到 Payload CMS Posts collection
 * 
 * Usage:
 *   tsx scripts/pseo-batch-import.ts [options]
 * 
 * Options:
 *   --csv <path>            pages_index.csv 文件路径（默认：docs/pseo/raw_data/docs/pseo/raw_data/pages_index.csv）
 *   --output-base <dir>     输出基础目录（默认：output/batch）
 *   --category <slug>       分类 slug（默认：industry-insights）
 *   --status <draft|published> 发布状态（默认：published）
 *   --limit <number>        限制导入数量（用于测试）
 * 
 * Example:
 *   tsx scripts/pseo-batch-import.ts --status published
 */

import * as fs from 'fs'
import * as path from 'path'
import { execSync } from 'child_process'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Load .env file
const envPath = path.resolve(__dirname, '../.env')
if (fs.existsSync(envPath)) {
  dotenv.config({ path: envPath })
}

if (!process.env.PAYLOAD_SECRET) {
  process.env.PAYLOAD_SECRET = 'd587beaf9532cb1c89f3945e'
}
if (!process.env.DATABASE_URI) {
  process.env.DATABASE_URI = 'mongodb://localhost:27017/iboran'
}

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
        if (next && !next.startsWith('--')) {
          args.status = next as 'draft' | 'published'
          i++
        }
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

function loadCSV(csvPath: string): PageIndex[] {
  const content = fs.readFileSync(csvPath, 'utf-8')
  const lines = content.trim().split('\n')
  const headers = lines[0].split(',').map(h => h.trim())
  
  const pages: PageIndex[] = []
  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',').map(v => v.trim())
    if (values.length >= 4) {
      pages.push({
        keyword: values[0],
        file: values[1],
        intent: values[2],
        page_type: values[3] as 'money_page' | 'guide_page',
        industry_hint: values[4] || undefined,
      })
    }
  }
  
  return pages
}

function sanitizeSlug(keyword: string): string {
  // 生成目录名（用于查找 page.md）
  return keyword
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

async function main() {
  try {
    const args = parseArgs()
    
    const csvPath = args.csv || path.resolve(__dirname, '../docs/pseo/raw_data/docs/pseo/raw_data/pages_index.csv')
    const outputBase = args.outputBase || 'output/batch'
    const category = args.category || 'industry-insights'
    const status = args.status || 'published'
    
    if (!fs.existsSync(csvPath)) {
      throw new Error(`CSV file not found: ${csvPath}`)
    }
    
    const pages = loadCSV(csvPath)
    const pagesToImport = args.limit ? pages.slice(0, args.limit) : pages
    
    console.error(`\n🚀 开始批量导入文档...`)
    console.error(`   总数量: ${pages.length}`)
    console.error(`   本次处理: ${pagesToImport.length}`)
    console.error(`   输出目录: ${outputBase}`)
    console.error(`   分类: ${category}`)
    console.error(`   状态: ${status}\n`)
    
    const results: Array<{
      keyword: string
      status: 'success' | 'failed' | 'skipped'
      path?: string
      error?: string
    }> = []
    
    for (let i = 0; i < pagesToImport.length; i++) {
      const page = pagesToImport[i]
      const pageDir = sanitizeSlug(page.keyword)
      
      // 尝试多个可能的路径
      const possiblePaths = [
        path.join(outputBase, pageDir, 'page.md'),
        path.join(outputBase, `${pageDir}-`, 'page.md'),
        path.join(outputBase, `-${pageDir}-`, 'page.md'),
        path.join(outputBase, pageDir, 'page.md'),
      ]
      
      let pagePath: string | null = null
      let schemaPath: string | null = null
      
      for (const possiblePath of possiblePaths) {
        if (fs.existsSync(possiblePath)) {
          pagePath = possiblePath
          const dir = path.dirname(possiblePath)
          const possibleSchemaPath = path.join(dir, 'schema.yaml')
          if (fs.existsSync(possibleSchemaPath)) {
            schemaPath = possibleSchemaPath
          }
          break
        }
      }
      
      console.error(`[${i + 1}/${pagesToImport.length}] 处理: ${page.keyword}`)
      
      if (!pagePath) {
        console.error(`   ⏭️  跳过: 页面文件不存在（已尝试: ${possiblePaths.join(', ')}）`)
        results.push({
          keyword: page.keyword,
          status: 'skipped',
          error: 'Page file not found',
        })
        continue
      }
      
      try {
        // 构建导入命令
        const schemaArg = schemaPath ? `--schema ${schemaPath}` : ''
        const cmd = `npx tsx scripts/pseo-import-to-blog.ts --page ${pagePath} ${schemaArg} --category ${category} --status ${status}`
        
        try {
          execSync(cmd, {
            stdio: 'pipe',
            env: {
              ...process.env,
              PAYLOAD_SECRET: process.env.PAYLOAD_SECRET || 'd587beaf9532cb1c89f3945e',
              DATABASE_URI: process.env.DATABASE_URI || 'mongodb://localhost:27017/iboran',
            },
          })
          
          console.error(`   ✓ 成功导入: ${pagePath}`)
          results.push({
            keyword: page.keyword,
            status: 'success',
            path: pagePath,
          })
        } catch (execError: any) {
          const errorOutput = execError.stdout?.toString() || execError.stderr?.toString() || ''
          const errorMessage = execError.message || String(execError)
          
          // 检查是否是 revalidate 警告（这是正常的，不影响导入）
          // revalidate 错误通常出现在导入成功之后，所以可以忽略
          if (errorMessage.includes('revalidatePath') || 
              errorOutput.includes('revalidatePath') ||
              errorMessage.includes('static generation store missing')) {
            // revalidate 警告不影响导入成功
            console.error(`   ✓ 成功导入（有 revalidate 警告，可忽略）: ${pagePath}`)
            results.push({
              keyword: page.keyword,
              status: 'success',
              path: pagePath,
            })
          } else if (errorMessage.includes('slug') || errorOutput.includes('slug')) {
            // slug 错误，尝试使用自定义 slug
            console.error(`   ⚠️  Slug 错误，尝试使用自定义 slug...`)
            const customSlug = sanitizeSlug(page.keyword) + '-' + Date.now().toString().slice(-6)
            const cmdWithSlug = `${cmd} --slug ${customSlug}`
            
            try {
              execSync(cmdWithSlug, {
                stdio: 'pipe',
                env: {
                  ...process.env,
                  PAYLOAD_SECRET: process.env.PAYLOAD_SECRET || 'd587beaf9532cb1c89f3945e',
                  DATABASE_URI: process.env.DATABASE_URI || 'mongodb://localhost:27017/iboran',
                },
              })
              console.error(`   ✓ 成功导入（使用自定义 slug）: ${pagePath}`)
              results.push({
                keyword: page.keyword,
                status: 'success',
                path: pagePath,
              })
            } catch (retryError: any) {
              console.error(`   ❌ 导入失败: ${retryError.message || retryError}`)
              results.push({
                keyword: page.keyword,
                status: 'failed',
                path: pagePath,
                error: retryError.message || String(retryError),
              })
            }
          } else {
            console.error(`   ❌ 导入失败: ${errorMessage}`)
            results.push({
              keyword: page.keyword,
              status: 'failed',
              path: pagePath,
              error: errorMessage,
            })
          }
        }
      } catch (error: any) {
        console.error(`   ❌ 导入失败: ${error.message || error}`)
        results.push({
          keyword: page.keyword,
          status: 'failed',
          path: pagePath || undefined,
          error: error.message || String(error),
        })
      }
    }
    
    // 生成报告
    const successCount = results.filter(r => r.status === 'success').length
    const failedCount = results.filter(r => r.status === 'failed').length
    const skippedCount = results.filter(r => r.status === 'skipped').length
    
    console.error(`\n📊 批量导入总结:`)
    console.error(`   ✅ 成功: ${successCount}`)
    console.error(`   ❌ 失败: ${failedCount}`)
    console.error(`   ⏭️  跳过: ${skippedCount}`)
    console.error(`   📁 输出目录: ${outputBase}`)
    
    // 保存报告
    const reportPath = path.join(outputBase, 'import-report.json')
    fs.writeFileSync(reportPath, JSON.stringify({
      success: successCount,
      failed: failedCount,
      skipped: skippedCount,
      details: results,
    }, null, 2))
    console.error(`   📄 报告已保存: ${reportPath}`)
    
    console.error(`\n📄 导入的页面列表:`)
    results.filter(r => r.status === 'success').forEach(r => {
      console.error(`   - ${r.keyword}`)
      if (r.path) {
        console.error(`     文件: ${r.path}`)
      }
    })
    
  } catch (error: any) {
    console.error(`\n❌ 错误: ${error.message || error}`)
    process.exit(1)
  }
}

main()

