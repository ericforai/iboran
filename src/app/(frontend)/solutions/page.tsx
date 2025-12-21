import type { Metadata } from 'next/types'
import { SolutionCard } from '@/components/SolutionCard'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import { getCachedGlobal } from '@/utilities/getGlobals'
import type { Contact } from '@/payload-types'
import { Phone } from 'lucide-react'
import { PageClientWrapper } from '../page.client.wrapper'
import { SiteFooter } from '@/components/SiteFooter'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function Page() {
  const payload = await getPayload({ config: configPromise })
  const contactData = await getCachedGlobal('contact', 1)() as Contact

  const solutions = await payload.find({
    collection: 'industry-solutions',
    depth: 1,
    limit: 12,
    sort: '-updatedAt',
  })

  return (
    <PageClientWrapper contactData={contactData}>
      <div className="pt-24 pb-24 bg-gray-50 min-h-screen">
        <div className="container mb-12 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
              行业解决方案
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              深入行业场景，通过泊冉的专业实施方法论，将标准化软件转化为您的核心竞争优势
            </p>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-8 rounded-full"></div>
          </div>
        </div>

        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.docs.map((solution) => (
              <SolutionCard key={solution.id} doc={solution} />
            ))}
          </div>

          {solutions.docs.length === 0 && (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
              <p className="text-gray-400">暂无解决方案发布，请稍后再来。</p>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="container mt-24 px-4">
          <div className="bg-blue-600 rounded-[2rem] p-10 lg:p-16 text-white relative overflow-hidden shadow-2xl shadow-blue-200">
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 0 L100 0 L100 100 Z" fill="white" />
              </svg>
            </div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="max-w-2xl text-center lg:text-left">
                <h2 className="text-3xl lg:text-4xl font-extrabold mb-6">
                  想要量身定制的数字化落地规划？
                </h2>
                <p className="text-blue-100 text-lg">
                  我们的资深顾问将根据您的业务现状，为您提供专业的“产品+场景”实施建议。
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6">
                <a 
                  href={`tel:${(contactData?.phone || '400-9955-161').replace(/\s+/g, '')}`}
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-red-500 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="w-5 h-5 group-hover:animate-bounce" />
                  <span>立即预约专家咨询</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SiteFooter />
    </PageClientWrapper>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `行业解决方案 - 专业数字化落地服务 | 泊冉软件`,
    description: `探索泊冉软件为制造、财务、供应链等领域提供的专业行业解决方案，助力企业实现数智化转型。`,
  }
}
