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

  // 2. Find Posts
  let postIds: (string | number)[] = []
  
  // Try finding by slug
  const postsBySlug = await payload.find({
    collection: 'posts',
    where: {
      slug: {
        equals: slugOrId,
      },
    },
    limit: 100,
  })

  if (postsBySlug.docs.length > 0) {
    postIds = postsBySlug.docs.map(doc => doc.id)
    console.log(`Found ${postIds.length} post(s) by slug: ${slugOrId}`)
  } else {
    // Try finding by ID
    try {
      const postById = await payload.findByID({
        collection: 'posts',
        id: slugOrId,
      })
      if (postById) {
        postIds = [postById.id]
        console.log(`Found post by ID: ${slugOrId}`)
      }
    } catch (e) {
      // Try finding by ID using find and where
      const postsById = await payload.find({
        collection: 'posts',
        where: {
          id: {
            equals: slugOrId
          }
        }
      })
      if (postsById.docs.length > 0) {
        postIds = postsById.docs.map(doc => doc.id)
        console.log(`Found post by ID using query: ${slugOrId}`)
      }
    }
  }

  if (postIds.length === 0) {
    console.error(`Could not find post with slug or ID: ${slugOrId}`)
    process.exit(1)
  }

  // 3. Update Posts
  for (const id of postIds) {
    try {
      await payload.update({
        collection: 'posts',
        id: id,
        data: {
          heroImage: media.id,
        },
        context: {
          disableRevalidate: true,
        },
      })
      console.log(`Successfully updated post ${id} with hero image ${media.id}`)
    } catch (e: any) {
      console.error(`Update failed for ${id}: ${e.message}`)
    }
  }
  process.exit(0)
}

processHero().catch(console.error)
