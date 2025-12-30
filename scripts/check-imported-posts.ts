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

async function checkPosts() {
  const payload = await getPayload({ config: configPromise })
  
  const posts = await payload.find({
    collection: 'posts',
    limit: 200,
    sort: '-createdAt',
  })
  
  console.error(`总共导入: ${posts.docs.length} 个 Posts`)
  console.error('')
  
  // 检查重复
  const titleMap = new Map<string, typeof posts.docs>()
  posts.docs.forEach(post => {
    const title = post.title?.trim() || ''
    if (title) {
      if (!titleMap.has(title)) {
        titleMap.set(title, [])
      }
      titleMap.get(title)!.push(post)
    }
  })
  
  const duplicates: Array<{ title: string; posts: typeof posts.docs }> = []
  titleMap.forEach((postsList, title) => {
    if (postsList.length > 1) {
      duplicates.push({ title, posts: postsList })
    }
  })
  
  if (duplicates.length > 0) {
    console.error(`⚠️  发现 ${duplicates.length} 个重复标题:\n`)
    duplicates.forEach(dup => {
      console.error(`  ${dup.title}: ${dup.posts.length} 个`)
      dup.posts.forEach((p, i) => {
        console.error(`    [${i + 1}] ID: ${p.id}, Slug: ${p.slug}`)
      })
      console.error('')
    })
    console.error('运行以下命令删除重复:')
    console.error('  npx tsx scripts/remove-duplicate-posts.ts')
    console.error('')
  } else {
    console.error('✅ 没有发现重复的 Posts')
    console.error('')
  }
  
  console.error('最近导入的 Posts（前20个）:')
  posts.docs.slice(0, 20).forEach((post, i) => {
    console.error(`${i + 1}. ${post.title}`)
    console.error(`   Slug: ${post.slug}`)
    console.error(`   Status: ${post._status}`)
    console.error(`   URL: http://localhost:3000/posts/${post.slug}`)
    console.error('')
  })
  
  process.exit(0)
}

checkPosts()

