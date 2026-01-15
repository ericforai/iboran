/**
 * Create a minimal test post with known-working Lexical format
 */

import { getPayload } from 'payload'
import configPromise from '../src/payload.config'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: path.resolve(__dirname, '../.env') })

const postData = {
  title: '测试文章 - 简单格式',
  slug: 'test-simple-format',
  _status: 'published',
  publishedAt: new Date().toISOString(),
  content: {
    root: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: '这是一个简单的测试文章，用于验证 Lexical 渲染是否正常工作。',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          textFormat: 0,
          version: 1,
        },
        {
          type: 'heading',
          children: [
            {
              type: 'text',
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: '第一节：测试标题',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          tag: 'h2',
          version: 1,
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: '如果你能看到这段文字，说明 RichText 渲染器正常工作。',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          textFormat: 0,
          version: 1,
        },
      ],
      direction: 'ltr',
      format: '',
      indent: 0,
      version: 1,
    },
  },
  tldr: '这是一个简单的测试文章。',
  atomicFAQs: [
    { question: '这是测试吗？', answer: '是的，这是一个测试文章。' },
  ],
  meta: {
    title: '测试文章 | 泊冉软件',
    description: '简单的测试文章用于验证渲染。',
  },
}

async function create() {
  try {
    const payload = await getPayload({ config: configPromise })

    // Delete if exists
    const existing = await payload.find({
      collection: 'posts',
      where: { slug: { equals: 'test-simple-format' } },
    })

    if (existing.docs.length > 0) {
      console.log('🗑️ Deleting existing test post...')
      await payload.delete({ collection: 'posts', id: existing.docs[0].id })
    }

    const res = await payload.create({
      collection: 'posts',
      data: postData as any,
    })

    console.log('✅ Test post created:', res.id)
  } catch (error) {
    console.error('ERROR:', error)
  }
  process.exit(0)
}

create()
