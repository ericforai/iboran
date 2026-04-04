#!/usr/bin/env node
/**
 * PSEO 页面导入到 Blog v3.0
 * 
 * 支持额外字段：decisionFramework, boundaries
 */

import { getPayload } from 'payload'
import configPromise from '../src/payload.config'
import dotenv from 'dotenv'
import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'
import yaml from 'js-yaml'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

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

function parseArgs() {
  const args: {
    page?: string
    category?: string
    status?: 'draft' | 'published'
    slug?: string
    image?: string
  } = {}

  for (let i = 2; i < process.argv.length; i++) {
    const arg = process.argv[i]
    const next = process.argv[i + 1]

    switch (arg) {
      case '--page':
        if (next && !next.startsWith('--')) {
          args.page = next
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
      case '--slug':
        if (next && !next.startsWith('--')) {
          args.slug = next
          i++
        }
        break
      case '--image':
        if (next && !next.startsWith('--')) {
          args.image = next
          i++
        }
        break
    }
  }

  return args
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

    if (line.startsWith('- ') || line.startsWith('* ')) {
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
      const listItemText = line.substring(2)
      currentList.children.push({
        type: 'listitem',
        format: 0,
        indent: 0,
        version: 1,
        direction: 'ltr',
        children: [{
            type: 'paragraph',
            format: 0,
            indent: 0,
            version: 1,
            direction: 'ltr',
            children: [{ type: 'text', text: listItemText, version: 1 }]
        }]
      })
      continue
    }

    flushList()

    if (line.startsWith('# ')) {
      flushParagraph()
      children.push({
        type: 'heading',
        tag: 'h1',
        format: 0,
        indent: 0,
        version: 1,
        direction: 'ltr',
        children: [{ type: 'text', text: line.substring(2), version: 1 }],
      })
      continue
    }

    if (line.startsWith('## ')) {
      flushParagraph()
      children.push({
        type: 'heading',
        tag: 'h2',
        format: 0,
        indent: 0,
        version: 1,
        direction: 'ltr',
        children: [{ type: 'text', text: line.substring(3), version: 1 }],
      })
      continue
    }

    currentParagraph.push({ type: 'text', text: line, version: 1 })
  }
  flushAll()
  return { root: { type: 'root', format: 0, indent: 0, version: 1, direction: 'ltr', children } }
}

function extractSection(markdown: string, sectionTitle: string): string {
  const regex = new RegExp(`## ${sectionTitle}\\s*\\n\\s*\\n([\\s\\S]*?)(?=\\n## |$)`)
  const match = markdown.match(regex)
  return match ? match[1].trim() : ''
}

function extractBoundaries(markdown: string): Array<{ condition: string; type: 'suitable' | 'unsuitable' }> {
  const section = extractSection(markdown, '适用场景')
  const boundaries: Array<{ condition: string; type: 'suitable' | 'unsuitable' }> = []
  
  const lines = section.split('\n')
  let currentType: 'suitable' | 'unsuitable' = 'suitable'
  
  for (const line of lines) {
    if (line.includes('适合') || line.includes('推荐')) {
      currentType = 'suitable'
    } else if (line.includes('不适合') || line.includes('局限')) {
      currentType = 'unsuitable'
    }
    
    if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
      boundaries.push({
        condition: line.trim().substring(2).trim(),
        type: currentType,
      })
    }
  }
  
  return boundaries
}

async function main() {
  try {
    const args = parseArgs()
    if (!args.page) throw new Error('--page is required')
    const pageContent = fs.readFileSync(args.page, 'utf-8')

    const titleMatch = pageContent.match(/^# (.+)$/m)
    if (!titleMatch) throw new Error('Page must have an H1 title')
    const title = titleMatch[1]

    const tldr = extractSection(pageContent, '一句话结论')
    const decisionFrameworkMarkdown = extractSection(pageContent, '决策框架')
    const boundaries = extractBoundaries(pageContent)
    
    const lexicalContent = markdownToLexical(pageContent)
    const lexicalDecision = markdownToLexical(decisionFrameworkMarkdown)

    const payload = await getPayload({ config: configPromise })

    let categoryIds: string[] = []
    if (args.category) {
      const categoryRes = await payload.find({
        collection: 'categories',
        where: { slug: { equals: args.category } },
        depth: 0,
      })
      if (categoryRes.docs.length > 0) categoryIds = [categoryRes.docs[0].id]
    }

    let heroImageId: string | undefined
    if (args.image && fs.existsSync(args.image)) {
      const fileBuffer = fs.readFileSync(args.image)
      const fileName = path.basename(args.image)
      const mediaRes = await payload.create({
        collection: 'media',
        data: { alt: title },
        file: { data: fileBuffer, mimetype: 'image/png', name: fileName, size: fileBuffer.length },
      })
      heroImageId = mediaRes.id
    }

    const postData: any = {
      title,
      slug: args.slug || title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-'),
      content: lexicalContent,
      tldr,
      decisionFramework: lexicalDecision,
      boundaries: boundaries.length > 0 ? boundaries : undefined,
      heroImage: heroImageId,
      meta: {
        title: `${title} | 泊冉软件`,
        description: tldr.substring(0, 160),
        image: heroImageId,
      },
      categories: categoryIds,
      _status: args.status || 'draft',
    }

    const existing = await payload.find({ collection: 'posts', where: { title: { equals: title } } })
    let result
    if (existing.docs.length > 0) {
      result = await payload.update({ collection: 'posts', id: existing.docs[0].id, data: postData })
      console.log(`✓ Updated Post: ${result.slug}`)
    } else {
      result = await payload.create({ collection: 'posts', data: postData })
      console.log(`✓ Created Post: ${result.slug}`)
    }
    process.exit(0)
  } catch (error) {
    console.error(`ERROR: ${error}`)
    process.exit(1)
  }
}

main()
