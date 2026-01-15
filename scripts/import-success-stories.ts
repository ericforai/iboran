#!/usr/bin/env node
import { getPayload } from 'payload'
import configPromise from '../src/payload.config'
import dotenv from 'dotenv'
import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Load .env file
const envPath = path.resolve(__dirname, '../.env')
if (fs.existsSync(envPath)) {
  dotenv.config({ path: envPath })
}

if (!process.env.PAYLOAD_SECRET) {
  process.env.PAYLOAD_SECRET = 'd587beaf9532cb1c89f3945e' // Fallback for local
}

function markdownToLexical(markdown: string): any {
  const lines = markdown.split('\n')
  const children: any[] = []
  let currentParagraph: any[] = []
  let currentList: any = null

  const flushParagraph = () => {
    if (currentParagraph.length > 0) {
      children.push({
        type: 'paragraph',
        format: 0,
        indent: 0,
        version: 1,
        direction: 'ltr',
        children: [...currentParagraph],
      })
      currentParagraph = []
    }
  }

  const flushList = () => {
    if (currentList) {
      children.push(currentList)
      currentList = null
    }
  }

  const flushAll = () => {
    flushParagraph()
    flushList()
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()

    if (!line) {
      flushAll()
      continue
    }

    // Skip H1 (handled as title) and metadata block
    if (line.startsWith('# ') || line.startsWith('> **TL;DR**')) continue
    if (line.startsWith('> "') || line.startsWith('---')) {
        flushAll()
        // Simple HR or blockquote handling can be added if needed
        continue
    }

    // List item
    if (line.startsWith('* ') || line.startsWith('- ')) {
      flushParagraph()
      if (!currentList) {
        currentList = {
          type: 'list',
          tag: 'ul',
          listType: 'bullet',
          format: 0,
          indent: 0,
          version: 1,
          direction: 'ltr',
          children: []
        }
      }

      const text = line.substring(2)
      currentList.children.push({
        type: 'listitem',
        version: 1,
        children: [{
          type: 'paragraph',
          version: 1,
          children: [{ type: 'text', text, version: 1 }]
        }]
      })
      continue
    }

    flushList()

    // Headings
    if (line.startsWith('## ')) {
      flushParagraph()
      children.push({
        type: 'heading',
        tag: 'h2',
        version: 1,
        children: [{ type: 'text', text: line.substring(3), version: 1 }]
      })
      continue
    }
    if (line.startsWith('### ')) {
      flushParagraph()
      children.push({
        type: 'heading',
        tag: 'h3',
        version: 1,
        children: [{ type: 'text', text: line.substring(4), version: 1 }]
      })
      continue
    }

    // Bold text handling (simplified)
    const parts = line.split(/\*\*(.+?)\*\*/g)
    for (let j = 0; j < parts.length; j++) {
      if (!parts[j]) continue
      currentParagraph.push({
        type: 'text',
        text: parts[j],
        format: j % 2 === 1 ? 1 : 0, // 1 is bold
        version: 1,
      })
    }
  }

  flushAll()

  return {
    root: {
      type: 'root',
      format: 0,
      indent: 0,
      version: 1,
      direction: 'ltr',
      children,
    },
  }
}

async function main() {
  try {
    const payload = await getPayload({ config: configPromise })
    
    const cases = [
      {
        file: 'docs/case-study/住矿浆料业财一体化实践.md',
        slug: 'sumitomo-metal-mining-practice',
        client: '住矿电子浆料（上海）有限公司',
        industry: '半导体材料'
      },
      {
        file: 'docs/case-study/西域供应链业财一体化实践.md',
        slug: 'west-basin-practice',
        client: '西域智慧供应链（上海）股份公司',
        industry: 'MRO电商'
      },
      {
        file: 'docs/case-study/南极电商数字化治理实践.md',
        slug: 'nanji-ecommerce-practice',
        client: '南极电商股份有限公司',
        industry: '品牌电商'
      },
      {
        file: 'docs/case-study/安能物流利润中心模型实践.md',
        slug: 'anneng-logistics-practice',
        client: '安能聚创供应链管理有限公司',
        industry: '物流快运'
      }
    ]

    for (const c of cases) {
      console.log(`Processing ${c.file}...`)
      const content = fs.readFileSync(c.file, 'utf-8')
      const titleMatch = content.match(/^# (.+)$/m)
      const title = titleMatch ? titleMatch[1] : c.slug
      
      const lexical = markdownToLexical(content)

      const existing = await payload.find({
        collection: 'success-stories',
        where: { slug: { equals: c.slug } }
      })

      const storyData = {
        title,
        slug: c.slug,
        clientName: c.client,
        industry: c.industry,
        layout: [
          {
            blockType: 'content',
            columns: [
              {
                size: 'full',
                richText: lexical
              }
            ]
          }
        ]
      }

      if (existing.docs.length > 0) {
        await payload.update({
          collection: 'success-stories',
          id: existing.docs[0].id,
          data: storyData
        })
        console.log(`✓ Updated ${c.slug}`)
      } else {
        await payload.create({
          collection: 'success-stories',
          data: storyData
        })
        console.log(`✓ Created ${c.slug}`)
      }
    }

    process.exit(0)
  } catch (error) {
    console.error('Error:', error)
    process.exit(1)
  }
}

main()
