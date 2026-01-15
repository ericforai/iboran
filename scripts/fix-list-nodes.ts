import { getPayload } from 'payload'
import configPromise from '../src/payload.config'

async function fixListNodes() {
  const payload = await getPayload({ config: configPromise })

  const slugs = ['why-erp-projects-fail-not-system-issue', 'organizational-management-issues-system-useless']

  for (const slug of slugs) {
    console.log(`Checking post: ${slug}`)
    const result = await payload.find({
      collection: 'posts',
      where: { slug: { equals: slug } },
      depth: 0,
    })

    if (result.docs.length === 0) {
      console.warn(`Post not found: ${slug}`)
      continue
    }

    const post = result.docs[0]
    let modified = false

    const newContent = { ...post.content }
    
    // Recursive function to traverse and fix nodes
    const traverse = (nodes: any[]) => {
      for (const node of nodes) {
        if (node.type === 'list') {
          if (!node.tag) {
            console.log(`Fixing list node in ${slug} - adding tag: 'ul'`)
            // Default to 'ul' for now as our content was bullet
            // If listType is number, use ol
            node.tag = node.listType === 'number' ? 'ol' : 'ul'
            modified = true
          }
        }
        
        // Traverse children if they exist
        if (node.children && Array.isArray(node.children)) {
          traverse(node.children)
        }
      }
    }

    if (newContent.root && newContent.root.children) {
      traverse(newContent.root.children)
    }

    if (modified) {
      await payload.update({
        collection: 'posts',
        id: post.id,
        data: {
          content: newContent,
        },
      })
      console.log(`Updated post: ${slug}`)
    } else {
      console.log(`No fixes needed for: ${slug}`)
    }
  }

  process.exit(0)
}

fixListNodes().catch(console.error)
