#!/usr/bin/env node
/**
 * PSEO 页面导入到 Blog
 * 
 * 将生成的 Markdown 页面导入到 Payload CMS Posts collection
 * 
 * Usage:
 *   tsx scripts/pseo-import-to-blog.ts [options]
 * 
 * Options:
 *   --page <path>          page.md 文件路径
 *   --schema <path>        schema.yaml 文件路径（可选，用于提取元数据）
 *   --category <slug>      分类 slug（可选，默认：industry-insights）
 *   --status <draft|published> 发布状态（默认：draft）
 *   --slug <text>          自定义 slug（可选，自动生成）
 *   --image <path>         图片路径（可选）
 * 
 * Example:
 *   tsx scripts/pseo-import-to-blog.ts \
 *     --page output/demo/page.md \
 *     --category industry-insights \
 *     --status published \
 *     --image output/demo/hero-image.png
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

// Load .env file
const envPath = path.resolve(__dirname, '../.env')
if (fs.existsSync(envPath)) {
  dotenv.config({ path: envPath })
}

// Manual override if dotenv fails for npx tsx environment
if (!process.env.PAYLOAD_SECRET) {
  process.env.PAYLOAD_SECRET = 'd587beaf9532cb1c89f3945e'
  console.error('⚠️  使用默认 PAYLOAD_SECRET（建议在 .env 中设置）')
}
if (!process.env.DATABASE_URI) {
  process.env.DATABASE_URI = 'mongodb://localhost:27017/iboran'
  console.error('⚠️  使用默认 DATABASE_URI（建议在 .env 中设置）')
}

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

function parseArgs() {
  const args: {
    page?: string
    schema?: string
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
      case '--schema':
        if (next && !next.startsWith('--')) {
          args.schema = next
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

function loadPage(filePath: string): string {
  return fs.readFileSync(filePath, 'utf-8')
}

function loadSchema(filePath: string): Schema | null {
  if (!fs.existsSync(filePath)) return null
  const content = fs.readFileSync(filePath, 'utf-8')
  return yaml.load(content) as Schema
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
        children: [...currentParagraph], // Clone to avoid ref issues
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

    // 跳过空行
    if (!line) {
      flushAll()
      continue
    }

    // 列表项处理 (- 或 *)
    if (line.startsWith('- ') || line.startsWith('* ')) {
      flushParagraph() // 列表打断段落
      
      // 如果没有正在构建的列表，创建一个新的
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
      // 处理粗体
      const parts = listItemText.split(/\*\*(.+?)\*\*/g)
      const listItemChildren: any[] = []
      
      for (let j = 0; j < parts.length; j++) {
        if (!parts[j]) continue
        
        if (j % 2 === 0) {
          // 普通文本
          listItemChildren.push({
            type: 'text',
            text: parts[j],
            detail: 0,
            format: 0,
            mode: 'normal',
            style: '',
            version: 1,
          })
        } else {
          // 粗体文本
          listItemChildren.push({
            type: 'text',
            text: parts[j],
            detail: 0,
            format: 1, // Bold
            mode: 'normal',
            style: '',
            version: 1,
          })
        }
      }

      // 将列表项添加到当前列表
      currentList.children.push({
        type: 'listitem',
        format: 0,
        indent: 0,
        version: 1,
        direction: 'ltr',
        children: [{
            // List item content wrapped in paragraph is standard for Payload Lexical
            type: 'paragraph', // Or just direct text nodes depending on strictness, but paragraph is safer for rich text
            format: 0,
            indent: 0,
            version: 1,
            direction: 'ltr',
            children: listItemChildren.length > 0 ? listItemChildren : [{
                type: 'text',
                text: '',
                version: 1
            }] 
        }]
      })
      continue
    }

    // 非列表行，先 flush 列表
    flushList()

    // H1 标题
    if (line.startsWith('# ')) {
      flushParagraph()
      children.push({
        type: 'heading',
        tag: 'h1',
        format: 0,
        indent: 0,
        version: 1,
        direction: 'ltr',
        children: [{
          type: 'text',
          text: line.substring(2),
          detail: 0,
          format: 0,
          mode: 'normal',
          style: '',
          version: 1,
        }],
      })
      continue
    }

    // H2 标题
    if (line.startsWith('## ')) {
      flushParagraph()
      children.push({
        type: 'heading',
        tag: 'h2',
        format: 0,
        indent: 0,
        version: 1,
        direction: 'ltr',
        children: [{
          type: 'text',
          text: line.substring(3),
          detail: 0,
          format: 0,
          mode: 'normal',
          style: '',
          version: 1,
        }],
      })
      continue
    }

    // H3 标题
    if (line.startsWith('### ')) {
      flushParagraph()
      children.push({
        type: 'heading',
        tag: 'h3',
        format: 0,
        indent: 0,
        version: 1,
        direction: 'ltr',
        children: [{
          type: 'text',
          text: line.substring(4),
          detail: 0,
          format: 0,
          mode: 'normal',
          style: '',
          version: 1,
        }],
      })
      continue
    }

    // Q/A 提问 (H3)
    if (line.startsWith('**Q: ')) {
      flushParagraph()
      const question = line.replace('**Q: ', '').replace('**', '')
      children.push({
        type: 'heading',
        tag: 'h3',
        format: 0,
        indent: 0,
        version: 1,
        direction: 'ltr',
        children: [{
          type: 'text',
          text: `Q: ${question}`,
          detail: 0,
          format: 1, // Bold
          mode: 'normal',
          style: '',
          version: 1,
        }],
      })
      continue
    }

    // Q/A 回答 (Paragraph starts with A:)
    if (line.startsWith('A: ')) {
        // Just treat as paragraph text, but maybe verify previous was Q
        // For now, standard paragraph handling deals with this, 
        // but we might want to start a new paragraph explicitly for A:
        flushParagraph() 
        // Allow it to fall through to normal text processing or handle explicitly
        // Original code handled strictly:
        const answer = line.substring(3)
        children.push({
            type: 'paragraph',
            format: 0,
            indent: 0,
            version: 1,
            direction: 'ltr',
            children: [{
            type: 'text',
            text: `A: ${answer}`,
            detail: 0,
            format: 0,
            mode: 'normal',
            style: '',
            version: 1,
            }],
        })
        continue
    }

    // 表格（简单处理）
    if (line.startsWith('|') && line.endsWith('|')) {
      // 跳过表头分隔线
      if (line.includes('---')) continue
      flushParagraph()
      
      // 表格作为代码块处理（简化）
      const cells = line.split('|').filter(c => c.trim())
      children.push({
        type: 'paragraph',
        format: 0,
        indent: 0,
        version: 1,
        direction: 'ltr',
        children: [{
          type: 'text',
          text: cells.join(' | '),
          detail: 0,
          format: 0,
          mode: 'normal',
          style: '',
          version: 1,
        }],
      })
      continue
    }

    // 水平线
    if (line.startsWith('---')) {
      flushParagraph()
      children.push({
        type: 'horizontalrule',
        format: 0,
        indent: 0,
        version: 1,
        direction: 'ltr',
      })
      continue
    }

    // 普通文本（添加到当前段落）
    // 处理粗体
    const parts = line.split(/\*\*(.+?)\*\*/g)
    for (let j = 0; j < parts.length; j++) {
      if (!parts[j]) continue

      if (j % 2 === 0) {
        currentParagraph.push({
          type: 'text',
          text: parts[j],
          detail: 0,
          format: 0,
          mode: 'normal',
          style: '',
          version: 1,
        })
      } else {
        currentParagraph.push({
          type: 'text',
          text: parts[j],
          detail: 0,
          format: 1, // Bold
          mode: 'normal',
          style: '',
          version: 1,
        })
      }
    }
    // Add a space if concatenating lines? Markdown implies newline -> space usually
    // But original logic didn't. Let's stick to original behavior: lines accumulate in paragraph
    // Actually original logic accumulated text nodes.
  }

  // 循环结束，清理剩余
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

function extractTLDR(markdown: string): string {
  // 提取"一句话结论"部分
  const match = markdown.match(/## 一句话结论\s*\n\s*\n(.+?)(?=\n## |$)/s)
  if (match) {
    return match[1].trim().substring(0, 160)
  }
  return ''
}

function extractFAQs(markdown: string): Array<{ question: string; answer: string }> {
  const faqs: Array<{ question: string; answer: string }> = []
  const faqSection = markdown.match(/## 常见问题\s*\n\s*([\s\S]*?)(?=\n---|$)/)
  
  if (faqSection) {
    const qaMatches = [...faqSection[1].matchAll(/\*\*Q: (.+?)\*\*\s*\n\s*\nA: (.+?)(?=\n\*\*Q:|$)/gs)]
    qaMatches.forEach(match => {
      faqs.push({
        question: match[1].trim(),
        answer: match[2].trim(),
      })
    })
  }

  return faqs
}

function generateSlug(title: string, customSlug?: string): string {
  if (customSlug) return customSlug
  
  // 改进的 slug 生成：保留中文字符，转换为拼音风格的 slug
  // 简单映射常见中文词汇（实际应该使用拼音库如 pinyin-pro）
  const chineseMap: Record<string, string> = {
    '实施': 'shishi',
    '服务': 'fuwu',
    '用友': 'yongyou',
    'ERP': 'erp',
    'YonSuite': 'yonsuite',
    'YonBIP': 'yonbip',
  }
  
  let slug = title
  // 替换已知的中文词汇
  for (const [chinese, pinyin] of Object.entries(chineseMap)) {
    slug = slug.replace(new RegExp(chinese, 'gi'), pinyin)
  }
  
  // 处理剩余的中文：保留或转换为拼音（这里简化处理）
  // 移除所有非字母数字字符，保留空格和连字符
  // 移除所有非字母数字字符，保留空格、连字符和中文字符
  slug = slug
    .toLowerCase()
    .replace(/[^\w\s\u4e00-\u9fa5-]/g, '')  // 移除特殊字符（保留中文，hyphen fixed）
    .replace(/\s+/g, '-')      // 空格转连字符
    .replace(/-+/g, '-')       // 多个连字符合并
    .replace(/^-|-$/g, '')     // 移除首尾连字符
    .substring(0, 100)
  
  // 如果 slug 为空或太短，使用备用方案
  if (!slug || slug.length < 3) {
    slug = title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '')
      .substring(0, 100) || 'post'
  }
  
  return slug
}

async function main() {
  try {
    const args = parseArgs()

    if (!args.page) {
      throw new Error('--page is required')
    }

    const pageContent = loadPage(args.page)
    const schema = args.schema ? loadSchema(args.schema) : null

    // 提取标题（H1）
    const titleMatch = pageContent.match(/^# (.+)$/m)
    if (!titleMatch) {
      throw new Error('Page must have an H1 title')
    }
    const title = titleMatch[1]

    // 转换为 Lexical 格式
    const lexicalContent = markdownToLexical(pageContent)

    // 提取 TLDR
    const tldr = extractTLDR(pageContent)

    // 提取 FAQs
    const atomicFAQs = extractFAQs(pageContent)

    // 生成 slug
    const slug = generateSlug(title, args.slug)

    // 连接 Payload CMS
    const payload = await getPayload({ config: configPromise })

    // 检查是否已存在相同标题的 Post
    const existingPosts = await payload.find({
      collection: 'posts',
      where: {
        title: {
          equals: title,
        },
      },
      limit: 1,
    })

    // 解析分类
    let categoryIds: string[] = []
    if (args.category) {
      const categoryRes = await payload.find({
        collection: 'categories',
        where: { slug: { equals: args.category } },
        depth: 0,
      })
      if (categoryRes.docs.length > 0) {
        categoryIds = [categoryRes.docs[0].id]
      }
    }

    // 处理图片上传
    let heroImageId: string | undefined
    if (args.image && fs.existsSync(args.image)) {
      console.log(`Uploading image: ${args.image}`)
      const fileBuffer = fs.readFileSync(args.image)
      const fileName = path.basename(args.image)
      
      try {
        const mediaRes = await payload.create({
          collection: 'media',
          data: {
            alt: title,
          },
          file: {
            data: fileBuffer,
            mimetype: 'image/png',
            name: fileName,
            size: fileBuffer.length,
          },
        })
        heroImageId = mediaRes.id
        console.log(`✓ Image uploaded: ${mediaRes.id}`)
      } catch (e) {
        console.error(`⚠️  Image upload failed:`, e)
      }
    }

    // 准备 Post 数据
    const postData: any = {
      title,
      slug,
      content: lexicalContent,
      tldr: tldr || undefined,
      atomicFAQs: atomicFAQs.length > 0 ? atomicFAQs : undefined,
      hero: heroImageId, // Add hero image
      meta: {
        title: `${title} | 泊冉软件深度解析`,
        description: tldr 
          ? `${tldr} 泊冉软件专注 YonSuite / YonBIP 数字化落地与业财一体化实施服务。` 
          : `${title} - 深度解析企业数字化转型、ERP实施与业财一体化落地的实战经验。泊冉软件作为用友官方合作伙伴，提供专业的 YonSuite 实施定制服务。`,
        image: heroImageId, // Set meta image too
      },
      categories: categoryIds.length > 0 ? categoryIds : undefined,
      _status: args.status || 'draft',
    }

    if (args.status === 'published') {
      postData.publishedAt = new Date().toISOString()
    }

    let result
    if (existingPosts.docs.length > 0) {
      // 已存在，更新而非创建
      const existingPost = existingPosts.docs[0]
      console.error(`⚠️  已存在相同标题的 Post (ID: ${existingPost.id}), 将更新...`)
      
      result = await payload.update({
        collection: 'posts',
        id: existingPost.id,
        data: postData,
      })
      
      console.error(`✓ Post updated successfully!`)
    } else {
      // 不存在，创建新的
      result = await payload.create({
        collection: 'posts',
        data: postData,
      })
      
      console.error(`✓ Post created successfully!`)
    }

    console.error(`  - ID: ${result.id}`)
    console.error(`  - Title: ${result.title}`)
    console.error(`  - Slug: ${result.slug}`)
    console.error(`  - Status: ${result._status}`)
    console.error(`  - URL: /posts/${result.slug}`)

    process.exit(0)
  } catch (error) {
    console.error(`ERROR: ${error instanceof Error ? error.message : String(error)}`)
    process.exit(1)
  }
}

main()




