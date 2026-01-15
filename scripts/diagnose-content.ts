import { getPayload } from 'payload'
import configPromise from '../src/payload.config'

async function diagnose() {
  const payload = await getPayload({ config: configPromise })
  const posts = await payload.find({
    collection: 'posts',
    limit: 1000,
  })

  console.log(`Checking ${posts.docs.length} posts...`)

  const textMap = new Map<string, string[]>()

  function extractText(node: any): string {
    if (!node) return ''
    if (typeof node.text === 'string') return node.text
    if (Array.isArray(node.children)) {
      return node.children.map(extractText).join(' ')
    }
    return ''
  }

  for (const post of posts.docs) {
    const textContent = extractText((post.content as any)?.root)
    if (!textMap.has(textContent)) {
      textMap.set(textContent, [])
    }
    textMap.get(textContent)!.push(post.slug)
  }

  console.log(`Found ${textMap.size} unique text content bodies.`)

  for (const [text, slugs] of textMap.entries()) {
    if (slugs.length > 1) {
      console.log(`\n--- Duplicate Text Group (${slugs.length} posts) ---`)
      console.log(`Example Slugs: ${slugs.slice(0, 5).join(', ')}${slugs.length > 5 ? '...' : ''}`)
      console.log(`Snippet: ${text.substring(0, 100).replace(/\s+/g, ' ')}...`)
    }
  }

  process.exit(0)
}

diagnose().catch(console.error)
