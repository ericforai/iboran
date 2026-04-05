import { MongoClient } from 'mongodb'

async function audit() {
  const uri = process.env.DATABASE_URI || 'mongodb://localhost:27018/iboran'
  const client = new MongoClient(uri)

  try {
    await client.connect()
    const db = client.db()
    const collection = db.collection('posts')

    const posts = await collection.find({
      $or: [
        { 'content.root.children': { $elemMatch: { 'children.text': { $regex: /\*\*/ } } } },
        { 'content.root.children': { $elemMatch: { 'children.children.text': { $regex: /\*\*/ } } } },
        { 'content.root.children': { $elemMatch: { 'children.text': { $regex: /1x+/i } } } },
        { 'content.root.children': { $elemMatch: { 'children.children.text': { $regex: /1x+/i } } } }
      ]
    }, {
      projection: { title: 1, slug: 1, createdAt: 1 }
    }).sort({ createdAt: -1 }).toArray()

    console.log(`Found ${posts.length} posts with potential issues:`)
    posts.forEach(p => {
      console.log(`- [${p.createdAt}] ${p.title} (${p.slug})`)
    })

  } finally {
    await client.close()
  }
}

audit()
