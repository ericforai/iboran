import { getPayload } from 'payload'
import configPromise from '../src/payload.config'
import path from 'path'
import fs from 'fs'

async function uploadAndUpdate() {
  const payload = await getPayload({ config: configPromise })
  
  const slug = 'disaster-recovery-plan-drill'
  const imagePath = '/Users/user/.gemini/antigravity/brain/ec7f232a-b678-408a-83b7-6cf0ed6e3160/blog_hero_disaster_recovery_1766849772537.png'

  if (!fs.existsSync(imagePath)) {
    console.error(`Image not found: ${imagePath}`)
    process.exit(1)
  }

  // Upload to media
  const media = await payload.create({
    collection: 'media',
    data: {
      alt: 'Disaster Recovery Drill - Professional B2B Illustration',
    },
    file: {
        data: fs.readFileSync(imagePath),
        name: `blog-hero-${slug}.png`,
        mimetype: 'image/png',
        size: fs.statSync(imagePath).size,
    }
  })

  console.log(`Uploaded media ID: ${media.id}`)

  // Update post
  const result = await payload.update({
    collection: 'posts',
    where: { slug: { equals: slug } },
    data: {
      heroImage: media.id,
    },
  })

  if (result.docs.length > 0) {
    console.log(`Updated post: ${slug}`)
  } else {
    console.log(`Post not found for update: ${slug}`)
  }

  process.exit(0)
}

uploadAndUpdate().catch(console.error)
