import { getPayload } from 'payload'
import configPromise from '../src/payload.config'
import type { Post } from '../src/payload-types'

async function auditLinks() {
  const payload = await getPayload({ config: configPromise })
  
  // 1. Fetch all posts with content
  const posts = await payload.find({
    collection: 'posts',
    limit: 1000,
    depth: 1, // Need content to regex links
  })

  console.log(`Analyzing ${posts.docs.length} posts for internal linking structure...\n`)

  const urlMap = new Map<string, string>() // slug -> id
  const incomingLinks = new Map<string, number>() // slug -> count
  const outgoingLinks = new Map<string, number>() // slug -> count

  // Initialize maps
  posts.docs.forEach(post => {
    if (post.slug) {
      urlMap.set(post.slug, post.id)
      incomingLinks.set(post.slug, 0)
      outgoingLinks.set(post.slug, 0)
    }
  })

  // 2. Analyze Links
  posts.docs.forEach(sourcePost => {
    if (!sourcePost.slug) return

    let outCount = 0

    // A. Check Body Content (RichText)
    const contentStr = JSON.stringify(sourcePost.content)
    // Regex for internal links: /posts/slug or just /slug
    // Note: This is a rough check on the serialized JSON string. 
    // Lexical serializes links as type: "link", fields: { doc: { value: { slug: "..." } } }
    
    // We can just regex for the slug existence in the whole string if it's unique enough, 
    // but better to look for specific patterns if possible. 
    // For simplicity in this audit, we'll check if other slugs appear in this post's content string.
    
    posts.docs.forEach(targetPost => {
      if (sourcePost.id === targetPost.id || !targetPost.slug) return

      // Check if target slug is referenced in source content
      // Searching for the slug explicitly in the JSON string is a heuristic. 
      // A precise check would traverse the Lexical JSON tree.
      // But checking for `value":"target-slug"` is a strong signal of a relationship link.
      const linkPattern = new RegExp(`value":"${targetPost.slug}"`, 'i')
      
      if (linkPattern.test(contentStr)) {
        // Found a link!
        outCount++
        incomingLinks.set(targetPost.slug, (incomingLinks.get(targetPost.slug) || 0) + 1)
      }
    })

    // B. Check Related Posts field
    if (sourcePost.relatedPosts && Array.isArray(sourcePost.relatedPosts)) {
      sourcePost.relatedPosts.forEach(rel => {
        const relPost = rel as Post 
        if (relPost.slug) {
           outCount++
           incomingLinks.set(relPost.slug, (incomingLinks.get(relPost.slug) || 0) + 1)
        }
      })
    }

    outgoingLinks.set(sourcePost.slug, outCount)
  })

  // 3. Report
  console.log('--- Orphan Posts (0 Incoming Links) ---')
  let orphanCount = 0
  for (const [slug, count] of incomingLinks.entries()) {
    if (count < 2) { // User requirement: "at least 2 pages"
       console.log(`[${count} links] ${slug}`)
       orphanCount++
    }
  }

  console.log('\n--- Link Statistics ---')
  console.log(`Total Posts: ${posts.docs.length}`)
  console.log(`Posts with < 2 incoming links: ${orphanCount}`)
  
  if (orphanCount > 0) {
      console.log('\n❌ FAILED: Some posts are not sufficiently linked (need >= 2 incoming links).')
  } else {
      console.log('\n✅ PASS: All posts have at least 2 incoming links.')
  }

  process.exit(0)
}

auditLinks().catch(console.error)
