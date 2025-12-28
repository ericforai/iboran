import { getPayload } from 'payload'
import configPromise from '@payload-config'

const checkSlug = async () => {
  const payload = await getPayload({ config: configPromise })

  const slug = process.argv[2]
  if (!slug) {
    console.error('Please provide a slug')
    process.exit(1)
  }

  console.log(`Checking post with slug: ${slug}`)

  try {
    const posts = await payload.find({
      collection: 'posts',
      where: {
        slug: {
          equals: slug,
        },
      },
    })

    if (posts.docs.length === 0) {
      console.log('Post not found')
    } else {
      const post = posts.docs[0]
      console.log(`Post found: ${post.title}`)
      console.log(`ID: ${post.id}`)
      console.log(`Status: ${post._status}`)
      console.log(`Hero Image: ${post.heroImage ? 'Present' : 'Missing'}`)
      if (post.heroImage) {
        console.log(`Hero Image ID/Data:`, post.heroImage)
      }
    }
  } catch (error) {
    console.error('Error finding post:', error)
  }

  process.exit(0)
}

checkSlug()
