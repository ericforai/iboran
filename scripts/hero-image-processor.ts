import { getPayload } from 'payload'
import configPromise from '../src/payload.config'
import fs from 'fs'

async function processHero() {
  const args = process.argv.slice(2)
  if (args.length < 2) {
    console.error('Usage: npx tsx scripts/hero-image-processor.ts <slug_or_id> <imagePath>')
    process.exit(1)
  }

  const slugOrId = args[0]
  const imagePath = args[1]

  if (!fs.existsSync(imagePath)) {
    console.error(`Image not found: ${imagePath}`)
    process.exit(1)
  }

  const payload = await getPayload({ config: configPromise })

  // 1. Upload to media
  const media = await payload.create({
    collection: 'media',
    data: {
      alt: `Blog Hero Image for ${slugOrId}`,
    },
    file: {
      data: fs.readFileSync(imagePath),
      name: `blog-hero-${slugOrId}.png`,
      mimetype: 'image/png',
      size: fs.statSync(imagePath).size,
    },
  })

  console.log(`Uploaded media ID: ${media.id}`)

  // 2. Find Post
  let postId: string | number | undefined
  
  // Try finding by slug
  const postsBySlug = await payload.find({
    collection: 'posts',
    where: {
      slug: {
        equals: slugOrId,
      },
    },
  })

  if (postsBySlug.docs.length > 0) {
    postId = postsBySlug.docs[0].id
    console.log(`Found post by slug: ${slugOrId} -> ID: ${postId}`)
  } else {
    // Try finding by ID
    try {
      const postById = await payload.findByID({
        collection: 'posts',
        id: slugOrId,
      })
      if (postById) {
        postId = postById.id
        console.log(`Found post by ID: ${slugOrId}`)
      }
    } catch (e) {
      // Ignore error
    }
  }

  if (!postId) {
    console.error(`Could not find post with slug or ID: ${slugOrId}`)
    process.exit(1)
  }

  // 3. Update Post
  try {
    await payload.update({
      collection: 'posts',
      id: postId,
      data: {
        heroImage: media.id,
      },
      context: {
        disableRevalidate: true,
      },
    })
    console.log(`Successfully updated post ${postId} with hero image ${media.id}`)
    process.exit(0)
  } catch (e: any) {
    console.error(`Update failed for ${postId}: ${e.message}`)
    process.exit(1)
  }
}

processHero().catch(console.error)
