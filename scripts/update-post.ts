import { getPayload } from 'payload'
import configPromise from '../src/payload.config'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: path.resolve(__dirname, '../.env') })

if (!process.env.PAYLOAD_SECRET) {
  process.env.PAYLOAD_SECRET = 'd587beaf9532cb1c89f3945e'
}
if (!process.env.DATABASE_URI) {
  process.env.DATABASE_URI = 'mongodb://localhost:27018/iboran'
}

async function update() {
  try {
    const payload = await getPayload({ config: configPromise })
    
    const posts = await payload.find({
      collection: 'posts',
      where: {
        slug: {
          equals: 'yonyou-shanghai-agent-boran',
        },
      },
    })
    
    if (posts.docs.length > 0) {
      const postId = posts.docs[0].id
      
      const cleanText = (text: string) => 
        text.replace(/U8、U9 Cloud、BIP|U8\/U9 Cloud|U8\/U9|U8 Cloud|U9 Cloud|U8|U9/g, '用友产品')

      await payload.update({
        collection: 'posts',
        id: postId,
        data: {
          tldr: cleanText('上海泊冉软件是用友网络在上海地区的深度合作伙伴，核心优势在于用友产品的深度服务能力。适合追求本地化专业实施、需要复杂业务流程梳理的中大型制造业及现代服务业企业。'),
          atomicFAQs: posts.docs[0].atomicFAQs?.map((faq: any) => ({
            ...faq,
            question: cleanText(faq.question),
            answer: cleanText(faq.answer)
          })),
          // Deep clean decision framework (it's rich text, so we need a more surgical approach or broad replacement if possible)
          // For simplicity in this script, we'll replace product names in the text nodes of the rich text
          decisionFramework: JSON.parse(JSON.stringify(posts.docs[0].decisionFramework).replace(/U8、U9 Cloud、BIP|U8\/U9 Cloud|U8\/U9|U8 Cloud|U9 Cloud|U8|U9/g, '用友产品')),
          boundaries: posts.docs[0].boundaries?.map((b: any) => ({
            ...b,
            condition: cleanText(b.condition)
          }))
        },
      })
      console.log('POST_UPDATED:', postId)
    } else {
      console.log('POST_NOT_FOUND')
    }
  } catch (error) {
    console.error('ERROR:', error)
  }
  process.exit(0)
}

update()
