import { getPayload } from 'payload'
import configPromise from '../src/payload.config'

async function check() {
  const payload = await getPayload({ config: configPromise })
  
  // Checking a few posts specifically
  const slugs = ['roi-post-implementation-review', 'change-management-failure', 'organize-before-digitize']
  
  for (const slug of slugs) {
    const res = await payload.find({
      collection: 'posts',
      where: { slug: { equals: slug } },
      depth: 2,
    })
    
    if (res.docs.length > 0) {
      const post = res.docs[0]
      console.log(`\nPost: ${slug}`)
      console.log(`Categories Type: ${typeof post.categories}`)
      console.log(`Categories Length: ${post.categories?.length}`)
      console.log(`Categories Data: ${JSON.stringify(post.categories, null, 2)}`)
    } else {
      console.log(`Post not found: ${slug}`)
    }
  }
  process.exit(0)
}

check().catch(console.error)
