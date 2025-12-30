#!/usr/bin/env node
/**
 * 删除重复的 Posts
 * 
 * 保留最新的，删除旧的重复项
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

async function removeDuplicates() {
  try {
    const payload = await getPayload({ config: configPromise })
    
    const posts = await payload.find({
      collection: 'posts',
      limit: 1000,
      sort: '-createdAt',
    })
    
    // 按标题分组（精确匹配）
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
    
    // 找出重复的标题
    const duplicates: Array<{ title: string; posts: typeof posts.docs }> = []
    titleMap.forEach((postsList, title) => {
      if (postsList.length > 1) {
        // 按创建时间排序，最新的在前
        postsList.sort((a, b) => {
          const aTime = a.createdAt ? new Date(a.createdAt).getTime() : 0
          const bTime = b.createdAt ? new Date(b.createdAt).getTime() : 0
          return bTime - aTime
        })
        duplicates.push({ title, posts: postsList })
      }
    })
    
    if (duplicates.length === 0) {
      console.error('✓ 没有发现重复的 Posts')
      process.exit(0)
    }
    
    console.error(`\n发现 ${duplicates.length} 个重复标题：\n`)
    
    let totalDeleted = 0
    
    for (const dup of duplicates) {
      console.error(`标题: ${dup.title}`)
      console.error(`  数量: ${dup.posts.length} 个`)
      
      // 保留第一个（最新的），删除其他的
      const toKeep = dup.posts[0]
      const toDelete = dup.posts.slice(1)
      
      console.error(`  保留: ID ${toKeep.id}, Slug: ${toKeep.slug}`)
      
      for (const post of toDelete) {
        try {
          await payload.delete({
            collection: 'posts',
            id: post.id,
          })
          console.error(`  ✓ 删除: ID ${post.id}, Slug: ${post.slug}`)
          totalDeleted++
        } catch (error: any) {
          // revalidate 错误不影响删除成功
          if (error.message && error.message.includes('revalidatePath')) {
            console.error(`  ✓ 删除（有 revalidate 警告）: ID ${post.id}, Slug: ${post.slug}`)
            totalDeleted++
          } else {
            console.error(`  ❌ 删除失败: ID ${post.id}, 错误: ${error.message}`)
          }
        }
      }
      console.error('')
    }
    
    console.error(`\n✓ 完成！共删除 ${totalDeleted} 个重复的 Posts`)
    
  } catch (error) {
    console.error(`ERROR: ${error instanceof Error ? error.message : String(error)}`)
    process.exit(1)
  }
  
  process.exit(0)
}

removeDuplicates()

