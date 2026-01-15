import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'
import { solutionByIndustry } from '../data/solutions'

// Helper for __dirname in ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Load environment variables
dotenv.config({
  path: path.resolve(process.cwd(), '.env'),
})

// Override DATABASE_URI for local host connection if running outside docker
if (process.env.DATABASE_URI && process.env.DATABASE_URI.includes('mongo:27017')) {
    process.env.DATABASE_URI = process.env.DATABASE_URI.replace('mongo:27017', '127.0.0.1:27018')
} else {
    // Fallback
    process.env.DATABASE_URI = 'mongodb://127.0.0.1:27018/iboran'
}

console.log('Using DATABASE_URI:', process.env.DATABASE_URI)

async function updateHeader() {
  try {
    const { getPayload } = await import('payload')
    const configPromise = (await import('@payload-config')).default

    const payload = await getPayload({ config: configPromise })

    console.log('Updating Header Global...')

    await payload.updateGlobal({
      slug: 'header',
      data: {
        navItems: [
          {
            blockType: 'singleLink',
            link: {
              type: 'custom',
              label: '首页', // Home
              url: '/',
            },
          },
          {
            blockType: 'navGroup',
            label: '解决方案', // Solutions
            items: [
               {
                 blockType: 'navSubGroup', // Changed from navGroup
                 label: '按业务领域', // By Business
                 items: [
                     {
                         blockType: 'singleLink',
                         link: { type: 'custom', label: '全部业务方案', url: '/solution' }
                     },
                     {
                         blockType: 'singleLink',
                         link: { type: 'custom', label: 'L2C 销售到收款', url: '/solution/business/lead-to-cash' }
                     },
                     {
                         blockType: 'singleLink',
                         link: { type: 'custom', label: 'S2P 采购到付款', url: '/solution/business/s2p' }
                     },
                     {
                         blockType: 'singleLink',
                         link: { type: 'custom', label: 'MES 生产管理', url: '/solution/business/mes' }
                     },
                      {
                         blockType: 'singleLink',
                         link: { type: 'custom', label: '财务云', url: '/solution/business/finance-cloud' }
                     }
                 ]
               },
              {
                 blockType: 'navSubGroup',
                 label: '按行业分类', // By Industry
                 items: solutionByIndustry.map((item) => ({
                   blockType: 'singleLink' as const,
                   link: {
                     type: 'custom' as const,
                     label: item.name,
                     url: item.href,
                   },
                 })),
              },
               {
                 blockType: 'singleLink',
                 link: {
                   type: 'custom',
                   label: '成功案例', // Success Stories
                   url: '/success-stories',
                 }
               }
            ]
          },
           {
            blockType: 'singleLink',
            link: {
                type: 'custom',
                label: '关于我们', // About Us
                url: '/about',
            }
          }
        ],
      },
      context: {
        disableRevalidate: true,
      }
    })

    console.log('Header Global Updated Successfully!')
    process.exit(0)
  } catch (error) {
    console.error('Error updating header:', error)
    process.exit(1)
  }
}

updateHeader()
