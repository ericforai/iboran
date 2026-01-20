import { getPayload } from 'payload'
import configPromise from '../src/payload.config'

async function autoLinkPosts() {
  const payload = await getPayload({ config: configPromise })
  console.log('Starting auto-linking process...')

  // 1. Fetch all posts
  const posts = await payload.find({
    collection: 'posts',
    limit: 1000,
    depth: 1, 
  })

  // 2. Build Category Map
  // Map<CategoryId, PostId[]>
  const categoryMap = new Map<string, string[]>()
  
  posts.docs.forEach(post => {
    if (post.categories && Array.isArray(post.categories)) {
      post.categories.forEach(cat => {
        const catId = typeof cat === 'object' ? cat.id : cat
        if (!categoryMap.has(catId)) {
          categoryMap.set(catId, [])
        }
        categoryMap.get(catId)?.push(post.id)
      })
    }
  })

  // 3. Update Posts
  let updateCount = 0

  for (const post of posts.docs) {
    // If it already has related posts, skip (don't overwrite manual curation)
    if (post.relatedPosts && post.relatedPosts.length >= 2) {
      continue
    }

    const currentRelated = new Set<string>()
    if (post.relatedPosts) {
      post.relatedPosts.forEach(r => currentRelated.add(typeof r === 'object' ? r.id : r))
    }

    // Find candidates from same categories
    const candidates = new Set<string>()
    if (post.categories && Array.isArray(post.categories)) {
      post.categories.forEach(cat => {
        const catId = typeof cat === 'object' ? cat.id : cat
        const peers = categoryMap.get(catId) || []
        peers.forEach(peerId => {
          if (peerId !== post.id) {
            candidates.add(peerId)
          }
        })
      })
    }

    // Select up to 4 random candidates
    const potential = Array.from(candidates)
    // Shuffle
    for (let i = potential.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [potential[i], potential[j]] = [potential[j], potential[i]];
    }

    const toAdd = potential.slice(0, 4)
    
    if (toAdd.length > 0) {
      console.log(`Linking [${post.title}] -> ${toAdd.length} related posts`)
      await payload.update({
        collection: 'posts',
        id: post.id,
        data: {
          relatedPosts: toAdd
        }
      })
      updateCount++
    }
  }

  console.log(`
Auto-linking complete. Updated ${updateCount} posts.`) 
  process.exit(0)
}

autoLinkPosts().catch(console.error)
