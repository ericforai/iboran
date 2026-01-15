import 'dotenv/config'
import { getPayload } from 'payload'
import config from '@payload-config'
import fs from 'fs'
import path from 'path'

async function run() {
  const payload = await getPayload({ config })
  const contentPath = '/Users/user/.gemini/antigravity/brain/13ab24ca-f029-487a-97a9-e23509690e4a/disaster-recovery-article.json'
  const postData = JSON.parse(fs.readFileSync(contentPath, 'utf-8'))

  console.log(`Publishing post: ${postData.title}`)

  const existing = await payload.find({
    collection: 'posts',
    where: { slug: { equals: postData.slug } },
  })

  if (existing.docs.length > 0) {
    const result = await payload.update({
      collection: 'posts',
      id: existing.docs[0].id,
      data: postData,
    })
    console.log(`Updated post ID: ${result.id}`)
  } else {
    const result = await payload.create({
      collection: 'posts',
      data: postData,
    })
    console.log(`Created post ID: ${result.id}`)
  }

  process.exit(0)
}

run().catch(err => {
  console.error(err)
  process.exit(1)
})
