import { getPayload } from 'payload'
import configPromise from '../src/payload.config'

async function inspectContent() {
  const payload = await getPayload({ config: configPromise })

  // 1. Fetch "good" post (assuming the user has one, or I can try to find a seeded one like 'hello-world' if it exists, otherwise the yonyou one I tagged)
  // Let's try to find ANY post that is NOT the two I created.
  // The two I created are: 'why-erp-projects-fail-not-system-issue' and 'organizational-management-issues-system-useless'
  
  const allPosts = await payload.find({
    collection: 'posts',
    limit: 10,
  })

  const targetSlugs = ['why-erp-projects-fail-not-system-issue', 'organizational-management-issues-system-useless']
  
  const newPost = allPosts.docs.find(p => targetSlugs.includes(p.slug))
  const oldPost = allPosts.docs.find(p => !targetSlugs.includes(p.slug))

  if (newPost) {
    console.log(`=== POST: ${newPost.slug} ===`)
    console.log('Boundaries is Array?', Array.isArray(newPost.boundaries))
    console.log('Boundaries length:', Array.isArray(newPost.boundaries) ? newPost.boundaries.length : 'N/A')
    
    console.log('DecisionFramework Root Type:', (newPost.decisionFramework as any)?.root?.type)
    
    // Check one list node in content
    const listNode = (newPost.content as any)?.root?.children?.find((n:any) => n.type === 'list')
    if (listNode) {
       console.log('Content List Tag:', listNode.tag)
    } else {
       console.log('No list node found in content root level')
    }
  }

  process.exit(0)
}

inspectContent().catch(console.error)
