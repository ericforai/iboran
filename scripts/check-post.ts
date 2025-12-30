#!/usr/bin/env node
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

async function checkPost() {
  const payload = await getPayload({ config: configPromise })
  
  // 检查两个可能的 slug
  for (const slug of ['erp-', 'erp-shishi-fuwu']) {
    const posts = await payload.find({
      collection: 'posts',
      where: { slug: { equals: slug } },
      limit: 1,
    })
    
    if (posts.docs.length > 0) {
      const post = posts.docs[0]
      console.error(`✓ Found post with slug: ${slug}`)
      console.error(`  - ID: ${post.id}`)
      console.error(`  - Title: ${post.title}`)
      console.error(`  - Slug: ${post.slug}`)
      console.error(`  - Status: ${post._status}`)
      console.error(`  - URL: /posts/${post.slug}`)
    }
  }
  
  process.exit(0)
}

checkPost()
