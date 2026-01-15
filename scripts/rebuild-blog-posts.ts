#!/usr/bin/env node
/**
 * Rebuild Blog Posts
 * 
 * Iterates through pages_index.csv and forces fresh content generation for each keyword.
 * Uses the improved SYSTEM_PROMPT to ensure high-quality, non-formulaic content.
 */

import * as fs from 'fs'
import * as path from 'path'
import { execSync } from 'child_process'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Configuration
const CSV_PATH = path.resolve(__dirname, '../docs/pseo/raw_data/docs/pseo/raw_data/pages_index.csv')
const OUTPUT_BASE = path.resolve(__dirname, '../output/rebuild')
const LOG_FILE = path.resolve(OUTPUT_BASE, 'rebuild.log')

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_BASE)) {
  fs.mkdirSync(OUTPUT_BASE, { recursive: true })
}

function log(message: string) {
  const timestamp = new Date().toISOString()
  const logMessage = `[${timestamp}] ${message}`
  console.log(logMessage)
  fs.appendFileSync(LOG_FILE, logMessage + '\n')
}

interface PageIndex {
  keyword: string
  file: string
  intent: string
  page_type: 'money_page' | 'guide_page'
  industry_hint?: string
  slug?: string // Optional custom slug from CSV
}

function parseCSV(filePath: string): PageIndex[] {
  if (!fs.existsSync(filePath)) {
    throw new Error(`CSV file not found: ${filePath}`)
  }
  const content = fs.readFileSync(filePath, 'utf-8')
  const lines = content.trim().split('\n')
  const pages: PageIndex[] = []

  // Skip header
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim()
    if (!line) continue

    // Handle CSV parsing (simple split for now, assuming no commas in fields)
    const parts = line.split(',')
    const keyword = parts[0]?.trim()
    const file = parts[1]?.trim()
    const intent = parts[2]?.trim() || 'commercial'
    const page_type = (parts[3]?.trim() || 'money_page') as 'money_page' | 'guide_page'
    const industry_hint = parts[4]?.trim()
    // Check if there is a 6th column for slug (unlikely in current CSV but good for future)
    const slug = parts[5]?.trim()

    if (keyword) {
      pages.push({ keyword, file, intent, page_type, industry_hint, slug })
    }
  }
  return pages
}

function generateSlug(keyword: string): string {
  // Simple pinyin-like or english slug generation
  return keyword
    .toLowerCase()
    .replace(/[^\w\s\u4e00-\u9fa5-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

function runCommand(cmd: string) {
  try {
    execSync(cmd, { stdio: 'inherit', cwd: path.resolve(__dirname, '../') })
  } catch (error) {
    log(`ERROR executing: ${cmd}`)
    throw error
  }
}

// Parse arguments manually for simplicity
const args = process.argv.slice(2)
let limit = Infinity
let csvPath = CSV_PATH

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--limit' && args[i + 1]) {
    limit = parseInt(args[i + 1], 10)
    i++
  } else if (args[i] === '--csv' && args[i + 1]) {
    csvPath = path.resolve(process.cwd(), args[i + 1])
    i++
  }
}

async function main() {
  log('🚀 Starting Blog Post Rebuild Process...')
  log(`Using CSV: ${csvPath}`)
  
  const pages = parseCSV(csvPath)
  const pagesToProcess = pages.slice(0, limit)
  
  log(`Found ${pages.length} pages. Processing first ${pagesToProcess.length}...`)

  for (let i = 0; i < pagesToProcess.length; i++) {
    const page = pagesToProcess[i]
    log(`\n---------------------------------------------------`)
    log(`[${i + 1}/${pagesToProcess.length}] Processing: "${page.keyword}"`)

    const slug = page.slug || generateSlug(page.keyword)
    const pageOutputDir = path.join(OUTPUT_BASE, slug)
    
    // Ensure page output directory exists
    if (!fs.existsSync(pageOutputDir)) {
      fs.mkdirSync(pageOutputDir, { recursive: true })
    }

    try {
      // 1. Generate Config
      const configPath = path.join(pageOutputDir, 'config.json')
      runCommand(`npx tsx scripts/pseo-config-generator.ts > ${configPath}`)

      // 2. Generate Schema
      // We pass --keyword to tailor the schema
      runCommand(`npx tsx scripts/pseo-schema-generator.ts --keyword "${page.keyword}" --config ${configPath} --page-type ${page.page_type} --output-dir ${pageOutputDir}`)
      
      const schemaPath = path.join(pageOutputDir, 'schema.yaml')

      const rawDataPath = path.join(pageOutputDir, 'raw_data.json')
      
      // 3. AI Content Generation
      if (fs.existsSync(rawDataPath)) {
        log(`✓ Found existing raw_data.json for "${page.keyword}", skipping AI generation.`)
      } else {
        log(`Generating fresh AI content for "${page.keyword}"...`)
        // Force AI generation (will fail if no key, but that's expected if Agent didn't provide data)
        runCommand(`npx tsx scripts/pseo-ai-generator.ts --schema ${schemaPath} --keyword "${page.keyword}" --output-dir ${pageOutputDir}`)
      }

      if (!fs.existsSync(rawDataPath)) {
        throw new Error(`Failed to generate raw_data.json for ${page.keyword}`)
      }

      // 4. Render Markdown Page
      const pagePath = path.join(pageOutputDir, 'page.md')
      runCommand(`npx tsx scripts/pseo-page-renderer.ts --schema ${schemaPath} --raw-data ${rawDataPath} --config ${configPath} --output ${pagePath}`)

      // 5. Import to Payload CMS (Overwrite existing)
      // category defaults to 'industry-insights' if not specified, or mapped
      const category = 'industry-insights' // Simplified for now, could be smarter
      
      log(`Importing to Payload CMS...`)
      // Pass --slug to ensure we match/overwrite correctly
      runCommand(`npx tsx scripts/pseo-import-to-blog.ts --page ${pagePath} --schema ${schemaPath} --category ${category} --status published --slug "${slug}" --image ${path.join(pageOutputDir, 'hero-image.png')}`)

      log(`✓ Successfully rebuilt post: ${slug}`)

    } catch (error) {
      log(`❌ Failed to process "${page.keyword}": ${error}`)
      // Continue to next item? Yes.
    }
  }

  log('✅ Rebuild All Complete.')
}

main()
