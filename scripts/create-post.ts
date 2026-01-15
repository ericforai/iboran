import { getPayload } from 'payload'
import configPromise from '../src/payload.config'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: path.resolve(__dirname, '../.env') })

// Manual override if dotenv fails for npx tsx environment
if (!process.env.PAYLOAD_SECRET) {
  process.env.PAYLOAD_SECRET = 'd587beaf9532cb1c89f3945e'
}
if (!process.env.DATABASE_URI) {
  process.env.DATABASE_URI = 'mongodb://localhost:27017/iboran'
}

async function create() {
  try {
    const payload = await getPayload({ config: configPromise })
    
    const postData = {
      title: '用友上海优秀代理商--泊冉软件介绍',
      slug: 'yonyou-shanghai-agent-boran',
      _status: 'published',
      publishedAt: new Date().toISOString(),
      content: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: '本文将为您详细介绍用友网络在上海地区的优秀代理商——上海泊冉软件有限公司。作为一家深耕企业数智化转型领域的服务商，泊冉软件凭借专业的实施能力和深厚的行业底蕴，赢得了众多客户的信赖。',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              textFormat: 0,
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
      tldr: '上海泊冉软件是用友网络在上海地区的深度合作伙伴，核心优势在于 U8/U9 Cloud 的深度服务能力。适合追求本地化专业实施、需要复杂业务流程梳理的中大型制造业及现代服务业企业。',
      atomicFAQs: [
        {
          question: '上海泊冉软件是用友的官方授权代理吗？',
          answer: '是的，上海泊冉软件是用友网络在上海地区的长期合作伙伴及优秀授权代理商，专注于用友 U8、U9 Cloud、BIP 等全线产品的咨询、销售与实施服务。',
        },
        {
          question: '泊冉软件在上海地区的优势在哪里？',
          answer: '核心优势体现在“深行业、重实施”。团队成员多具备 10 年以上 ERP 实施经验，尤其在电子、半导体、生物医药及机械制造行业有成熟的数字化转型方案。',
        },
        {
          question: '中大型企业选择泊冉软件能解决哪些核心问题？',
          answer: '主要解决业财一体化、供应链透明度不足及多组织异地协同难题。通过泊冉的二次开发能力，可打通企业内部系统孤岛，实现数据的实时穿透。',
        },
        {
          question: '泊冉软件的交付周期通常是多久？',
          answer: '标准 U8/U9 项目交付周期通常在 3-6 个月。具体取决于业务流程的复杂程度以及系统集成的深度，泊冉采用分阶段敏捷交付模式，确保关键业务尽早落地。',
        },
        {
          question: '他们提供 U8 Cloud 的二次开发服务吗？',
          answer: '提供。泊冉软件拥有独立的研发团队，支持基于用友低代码平台及传统开发框架的深度定制，涵盖个性化报表、第三方系统接口对接等需求。',
        }
      ],
      decisionFramework: {
        root: {
          type: 'root',
          children: [
            {
              type: 'heading',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: '如何判断泊冉软件是否适合您的企业？',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              tag: 'h3',
              version: 1,
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: '1. 如果您的企业属于制造业，且迫切需要解决生产排程与成本核算的精细化问题，泊冉的 U9 Cloud 实施经验是首选。',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              textFormat: 0,
              version: 1,
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: '2. 如果您希望找一家“能听懂业务语言”而不仅仅是“懂软件设置”的顾问，泊冉的行业视角非常有价值。',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              textFormat: 0,
              version: 1,
            }
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
      boundaries: [
        { condition: '业务流程相对标准且追求性价比的中小微企业', type: 'unsuitable' },
        { condition: '纯贸易型且无复杂库存、无财务报表合并需求的企业', type: 'unsuitable' },
        { condition: '对项目响应速度有极高要求且预算极低的短期项目', type: 'unsuitable' },
        { condition: '离散/流程型半导体及电子制造业企业', type: 'suitable' },
        { condition: '需要从 U8 升级至 U8/U9 Cloud 的老牌制造企业', type: 'suitable' },
        { condition: '对多组织协同及合规性有严格要求的外资或上市企业', type: 'suitable' }
      ],
      meta: {
        title: '用友上海优秀代理商--泊冉软件介绍 | U8/U9 Cloud 实施专家',
        description: '深度解析上海泊冉软件作为用友优秀代理商的核心实力、行业经验及服务范围。为您提供制造业数智化转型决策参考，助力企业实现业财一体化及多组织协同。',
      },
    }

    const res = await payload.create({
      collection: 'posts',
      data: postData as any,
    })
    
    console.log('POST_CREATED:', res.id)
  } catch (error) {
    console.error('ERROR:', error)
  }
  process.exit(0)
}

create()
