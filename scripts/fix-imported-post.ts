#!/usr/bin/env node
/**
 * 修复已导入的 Post：更新 slug 和状态
 */

import { getPayload } from 'payload'
import configPromise from '../src/payload.config'
import dotenv from 'dotenv'
import * as path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: path.resolve(__dirname, '../.env') })

if (!process.env.PAYLOAD_SECRET) {
  process.env.PAYLOAD_SECRET = 'd587beaf9532cb1c89f3945e'
}
if (!process.env.DATABASE_URI) {
  process.env.DATABASE_URI = 'mongodb://localhost:27017/iboran'
}

async function fixPost() {
  try {
    const payload = await getPayload({ config: configPromise })
    
    // 查找 slug 为 'erp-' 的 post
    const posts = await payload.find({
      collection: 'posts',
      where: { slug: { equals: 'erp-' } },
      limit: 1,
    })
    
    if (posts.docs.length > 0) {
      const post = posts.docs[0]
      
      // 更新 slug 和状态
      const updated = await payload.update({
        collection: 'posts',
        id: post.id,
        data: {
          slug: 'erp-shishi-fuwu',
          _status: 'published',
          publishedAt: new Date().toISOString(),
        },
      })
      
      console.error('✓ Post updated successfully!')
      console.error(`  - ID: ${updated.id}`)
      console.error(`  - Title: ${updated.title}`)
      console.error(`  - New slug: ${updated.slug}`)
      console.error(`  - Status: ${updated._status}`)
      console.error(`  - URL: /posts/${updated.slug}`)
    } else {
      console.error('❌ Post not found with slug: erp-')
    }
  } catch (error) {
    console.error('ERROR:', error)
    process.exit(1)
  }
  
  process.exit(0)
}

fixPost()



