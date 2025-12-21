import type { Metadata } from 'next/types'
import { StoryCard } from '@/components/StoryCard'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import { getCachedGlobal } from '@/utilities/getGlobals'
import type { Contact } from '@/payload-types'
import { Phone } from 'lucide-react'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function SuccessStoriesPage() {
  const payload = await getPayload({ config: configPromise })
  const contactData = await getCachedGlobal('contact', 1)() as Contact

  const stories = await payload.find({
    collection: 'success-stories',
    depth: 1,
    limit: 12,
    sort: '-updatedAt',
  })

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mb-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight text-red-600">
            成功案例
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            见证我们如何助力各行各业实现业务增长与效率提升
          </p>
          <div className="w-24 h-1.5 bg-red-600 mx-auto mt-8 rounded-full"></div>
        </div>
      </div>

      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {stories.docs.map((story) => (
            <StoryCard key={story.id} doc={story} />
          ))}
        </div>

        {stories.docs.length === 0 && (
          <div className="text-center py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
            <p className="text-gray-400">暂无案例发布，请稍后再来。</p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="container mt-24 px-4">
        <div className="bg-gray-900 rounded-[2rem] p-10 lg:p-16 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
             <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 100 L100 0 L100 100 Z" fill="red" />
            </svg>
          </div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl text-center lg:text-left">
              <h2 className="text-3xl lg:text-4xl font-extrabold mb-6">
                想要成为下一个成功转型案例？
              </h2>
              <p className="text-gray-400 text-lg">
                我们的顾问团队期待听取您的需求，并为您提供专属的数字化转型方案建议。
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href={`tel:${(contactData?.phone || '400-9955-161').replace(/\s+/g, '')}`}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                <span>致电获取专业建议</span>
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
