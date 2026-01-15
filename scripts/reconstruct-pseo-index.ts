import fs from 'fs'
import path from 'path'

const DUMP_FILE = 'all_posts_dump.txt'
const OUTPUT_CSV = 'docs/pseo/raw_data/docs/pseo/raw_data/pages_index_reconstructed.csv'

// Heuristic mapping from keywords/content to JSON templates
const TEMPLATE_MAP: Record<string, string> = {
  'erp': 'erp_.json',
  'yonbip': '_yonbip_.json',
  'yonsuite': '_yonsuite_.json',
  'u8c': 'u8c_.json',
  'nc': 'nc_.json',
  'mes': 'mes_.json',
  'wms': 'wms_.json',
  'supply chain': 'erp_.json',
  'inventory': 'wms_.json',
  'manufacturing': 'mes_.json',
  'implementation': 'erp_.json',
  'finance': 'erp_.json',
  'audit': 'erp_.json',
  'tax': 'erp_.json',
}

const DEFAULT_TEMPLATE = '_.json'

function getTemplateForTitle(title: string): string {
  const lowerTitle = title.toLowerCase()
  for (const [key, template] of Object.entries(TEMPLATE_MAP)) {
    if (lowerTitle.includes(key)) {
      return template
    }
  }
  return DEFAULT_TEMPLATE
}

function main() {
  if (!fs.existsSync(DUMP_FILE)) {
    console.error(`Dump file not found: ${DUMP_FILE}`)
    process.exit(1)
  }

  const content = fs.readFileSync(DUMP_FILE, 'utf-8')
  const lines = content.split('\n').filter(line => line.trim())
  
  const csvLines = ['keyword,file,intent,page_type,industry_hint,slug']
  
  console.log(`Processing ${lines.length} lines from dump...`)

  lines.forEach(line => {
    // Expected format: [ID] slug | Title
    if (line.startsWith('[')) {
      const parts = line.split('|')
      if (parts.length >= 2) {
        // Extract title (everything after the pipe, trimmed)
        const title = parts.slice(1).join('|').trim()
        
        // Use Title as Keyword
        // Sanitize: Remove quotes, replace commas, remove braces if necessary
        // We do NOT wrap in quotes for CSV because simple split matches better
        const keyword = title
          .replace(/"/g, '')
          .replace(/'/g, '')
          .replace(/,/g, '，')
          .trim()
        
        // Determine template
        const file = getTemplateForTitle(title)
        
        // Default values for other columns
        const intent = 'commercial' 
        const industryHint = ''

        // Check if title sounds like a question (Guide)
        const finalPageType = (title.includes('?') || title.includes('为什么') || title.includes('如何')) 
          ? 'guide_page' 
          : 'money_page'

        // Extract slug from left part [ID] slug
        const idSlug = parts[0].trim()
        const slugMatch = idSlug.match(/^\[.+?\]\s*(.+)$/)
        const slug = slugMatch ? slugMatch[1].trim() : ''

        csvLines.push(`${keyword},${file},${intent},${finalPageType},${industryHint},${slug}`)
      }
    }
  })
  
  fs.writeFileSync(OUTPUT_CSV, csvLines.join('\n'))
  console.log(`Generated ${OUTPUT_CSV} with ${csvLines.length - 1} entries.`)
}

main()
