import type { Metadata } from 'next/types'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { getCachedGlobal } from '@/utilities/getGlobals'
import type { Contact } from '@/payload-types'

import { Footer as SiteFooter } from '@/components/Footer'
import ResourcesClient from './page.client'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function ResourcesPage() {
  const payload = await getPayload({ config: configPromise })
  const contactData = await getCachedGlobal('contact', 1)() as Contact

  const resources = await payload.find({
    collection: 'resources',
    depth: 1,
    limit: 100,
    sort: '-updatedAt',
  })

  return (
    <>
      <div className="bg-gray-50 min-h-screen">
        <header className="bg-blue-600 pt-40 pb-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 0 L100 0 L100 100 Z" fill="white" />
            </svg>
          </div>
          <div className="container px-4 relative z-10 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">知识资源中心</h1>
            <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">
              获取泊冉软件在数字化转型领域的深度洞察、实施指南与行业白皮书。
            </p>
          </div>
        </header>

        <ResourcesClient initialResources={resources.docs as any} />
      </div>
      <SiteFooter />
    </>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `知识资源中心 - 数字化转型深度报告与白皮书下载 | 泊冉软件`,
    description: `下载泊冉软件提供的行业深度解析、ERP实施指南及成功案例白皮书，助力企业数智化。`,
  }
}
