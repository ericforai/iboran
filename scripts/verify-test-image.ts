import { getPayload } from 'payload'
import configPromise from '../src/payload.config'

async function checkPost() {
  const payload = await getPayload({ config: configPromise })
  
  const id = '694fe188694f357894794378'
  const post = await payload.findByID({
    collection: 'posts',
    id,
    depth: 1,
  })
  
  console.log(`Post: ${post.title}`)
  console.log(`Hero Image Info: ${JSON.stringify(post.heroImage, null, 2)}`)

  process.exit(0)
}

checkPost().catch(console.error)
