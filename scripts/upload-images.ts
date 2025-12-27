import { getPayload } from 'payload'
import configPromise from '../src/payload.config'
import path from 'path'
import fs from 'fs'

const IMAGES = [
  {
    postSlug: 'why-erp-projects-fail-not-system-issue',
    filePath: '/Users/user/.gemini/antigravity/brain/ec7f232a-b678-408a-83b7-6cf0ed6e3160/erp_organization_friction_abstract_1766837692443.png',
    alt: 'Abstract representation of ERP implementation failure due to organizational friction'
  },
  {
    postSlug: 'organizational-management-issues-system-useless',
    filePath: '/Users/user/.gemini/antigravity/brain/ec7f232a-b678-408a-83b7-6cf0ed6e3160/engine_vs_broken_gears_isometric_1766837712076.png',
    alt: 'Illustration showing how a powerful system cannot fix a broken organizational structure'
  }
]

async function uploadImages() {
  const payload = await getPayload({ config: configPromise })

  for (const item of IMAGES) {
    console.log(`Processing image for post: ${item.postSlug}`)

    // 1. Check if post exists
    const posts = await payload.find({
      collection: 'posts',
      where: { slug: { equals: item.postSlug } },
    })

    if (posts.docs.length === 0) {
      console.warn(`Post not found: ${item.postSlug}`)
      continue
    }
    const post = posts.docs[0]

    // 2. Upload Media
    if (!fs.existsSync(item.filePath)) {
        console.error(`File not found: ${item.filePath}`)
        continue
    }

    const fileBuffer = fs.readFileSync(item.filePath)
    const fileName = path.basename(item.filePath)
    
    // We need to guess mime type roughly
    const mimeType = 'image/png'

    try {
        console.log(`Uploading ${fileName}...`)
        const media = await payload.create({
            collection: 'media',
            data: {
                alt: item.alt,
            },
            file: {
                data: fileBuffer,
                name: fileName,
                mimetype: mimeType,
                size: fileBuffer.length,
            },
        })
        console.log(`Media uploaded: ${media.id}`)

        // 3. Update Post
        await payload.update({
            collection: 'posts',
            id: post.id,
            data: {
                heroImage: media.id,
            },
        })
        console.log(`Post updated with heroImage: ${item.postSlug}`)

    } catch (error) {
        // Ignore revalidate error
         if (error.message && error.message.includes('revalidatePath')) {
            console.log(`Post updated (with revalidate warning): ${item.postSlug}`)
         } else {
             console.error(`Failed to handle ${item.postSlug}:`, error)
         }
    }
  }
  process.exit(0)
}

uploadImages().catch(console.error)
