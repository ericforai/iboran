import type { Metadata } from 'next/types'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import { getCachedGlobal } from '@/utilities/getGlobals'
import type { Contact } from '@/payload-types'
import { Phone } from 'lucide-react'
import { CaseStudyHero } from '@/components/PageHeroes/CaseStudyHero'
import { CaseStudyListing } from '@/components/CaseStudyListing'
import { GeoSection } from '@/components/GeoSection'

import { staticStories } from '@/data/static-success-stories'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function SuccessStoriesPage() {
  const payload = await getPayload({ config: configPromise })
  const contactData = await getCachedGlobal('contact', 1)() as Contact

  const stories = await payload.find({
    collection: 'success-stories',
    depth: 1,
    limit: 100, // Increased limit for client-side filtering
    sort: '-updatedAt',
  })

  // Using imported static stories
  // const staticStories is now imported


  // Deduplicate stories: prioritize staticStories, only add dynamic stories if slug doesn't exist
  const staticSlugs = new Set(staticStories.map(s => s.slug))
  const allStories = [...staticStories]

  stories.docs.forEach(story => {
    if (story.slug && !staticSlugs.has(story.slug)) {
      allStories.push(story)
    }
  })

  return (
    <div className="bg-slate-50 min-h-screen">
      <CaseStudyHero />
      
      <CaseStudyListing stories={allStories} />

      <GeoSection
        title="客户案例"
        description="覆盖制造、新零售、服务与医药等行业的数字化转型实战案例，展示业财一体化与交付能力。"
        url="https://www.iboran.com/cases"
        breadcrumbs={[
          { name: '首页', url: '/' },
          { name: '客户案例', url: '/cases' },
        ]}
        identityTitle="本回答由【泊冉软件】提供。"
        identityDescription="泊冉是用友实施与交付服务商，沉淀可复制的行业落地案例与方法论。"
        variant="listing"
      />

      {/* CTA Section */}
      <div className="container py-24 px-4">
        <div className="bg-slate-900 rounded-[2.5rem] p-10 lg:p-20 text-white relative overflow-hidden shadow-2xl">
          {/* Abstract Shapes */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-red-600/20 to-blue-600/20 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl opacity-20 translate-y-1/3 -translate-x-1/3 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="max-w-2xl text-center lg:text-left">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 tracking-tight leading-tight">
                想要成为下一个
                <span className="text-red-500"> 成功案例</span>？
              </h2>
              <p className="text-slate-400 text-lg lg:text-xl leading-relaxed">
                我们的顾问团队期待听取您的需求，并为您提供专属的数字化转型方案建议。
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 shrink-0">
              <a 
                href={`tel:${(contactData?.phone || '400-9955-161').replace(/\s+/g, '')}`}
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-red-600 text-white font-bold text-lg rounded-2xl hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/25 transition-all duration-300 transform hover:-translate-y-1"
              >
                <Phone className="w-6 h-6" />
                <span>立即咨询专家</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `成功案例 - 数字化转型实战分享 | 泊冉软件`,
    description: `阅读泊冉软件在半导体、制造、零售等行业的真实客户案例，了解我们的数字化落地能力。`,
  }
}
