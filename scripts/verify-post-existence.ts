import { getPayload } from 'payload'
import configPromise from './src/payload.config'

async function verify() {
  const payload = await getPayload({ config: configPromise })
  const res = await payload.find({
    collection: 'posts',
    where: {
      slug: {
        equals: 'energy-industry-digital-transformation'
      }
    }
  })
  
  if (res.totalDocs > 0) {
    console.log('Post found successfully!')
    console.log('Title:', res.docs[0].title)
    console.log('Slug:', res.docs[0].slug)
    console.log('Status:', res.docs[0]._status)
    process.exit(0)
  } else {
    console.log('Post not found.')
    process.exit(1)
  }
}

verify()
