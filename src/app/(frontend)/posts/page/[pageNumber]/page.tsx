import type { Metadata } from 'next/types'

import { CollectionArchive } from '@/components/CollectionArchive'
import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React, { Suspense } from 'react'
import PageClient from './page.client'
import { notFound } from 'next/navigation'
import { getCachedGlobal } from '@/utilities/getGlobals'
import { Phone } from 'lucide-react'
import type { Contact } from '@/payload-types'
import { CategoryFilter } from '@/components/CategoryFilter'

export const revalidate = 600

type Args = {
  params: Promise<{
    pageNumber: string
  }>
}

export default async function Page({ params: paramsPromise }: Args) {
  const { pageNumber } = await paramsPromise
  const payload = await getPayload({ config: configPromise })
  const contactData = await getCachedGlobal('contact', 1)() as Contact

  const sanitizedPageNumber = Number(pageNumber)

  if (!Number.isInteger(sanitizedPageNumber)) notFound()

  // Fetch categories for the filter
  const categories = await payload.find({
    collection: 'categories',
    limit: 100,
  })

  // We are on a specific page number, so no category filter is applied in the URL usually (unless combined, but this route is /page/X)
  // The global posts feed, page X.
  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 12,
    page: sanitizedPageNumber,
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
      heroImage: true,
      publishedAt: true,
    },
  })

  return (
    <div className="min-h-screen flex flex-col">
        <div className="flex-grow pt-24 pb-24">
          <PageClient />
          <div className="container mb-16">
            <div className="prose dark:prose-invert max-w-none text-center">
              <h1 className="text-4xl font-extrabold text-[#1F2329] mb-4">泊冉观察</h1>
              <p className="text-slate-500 max-w-2xl mx-auto">深度解析半导体、装备制造及企业数字化转型的实战洞察与行业发现</p>
            </div>
          </div>

          <div className="container mb-8">
            <Suspense fallback={<div className="h-10" />}>
              <CategoryFilter categories={categories.docs} />
            </Suspense>
            <PageRange
              collection="posts"
              currentPage={posts.page}
              limit={12}
              totalDocs={posts.totalDocs}
            />
          </div>

          <CollectionArchive posts={posts.docs} />

          <div className="container mt-16">
            {posts?.page && posts?.totalPages > 1 && (
              <div className="mb-16">
                <Pagination page={posts.page} totalPages={posts.totalPages} />
              </div>
            )}

            {/* Lead Gen CTA Section */}
            <div className="bg-[#F7F8FA] rounded-3xl p-8 lg:p-12 border border-slate-100 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-[#1F2329] mb-4">想要深入探讨您的数字化转型？</h2>
                <p className="text-slate-600 max-w-xl">我们的业务专家随时准备为您提供专业的行业洞察和落地建议，帮助您化繁为简。</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                <a 
                  href={`tel:${(contactData?.phone || '400-9955-161').replace(/\s+/g, '')}`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-[#0052D9] text-[#0052D9] font-bold rounded-xl hover:bg-blue-50 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  <span>立即致电专家</span>
                </a>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { pageNumber } = await paramsPromise
  return {
    title: `泊冉观察 - 第 ${pageNumber || '1'} 页 | 泊冉软件`,
  }
}

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const { totalDocs } = await payload.count({
    collection: 'posts',
    overrideAccess: false,
  })

  const totalPages = Math.ceil(totalDocs / 12)

  const pages: { pageNumber: string }[] = []

  for (let i = 1; i <= totalPages; i++) {
    pages.push({ pageNumber: String(i) })
  }

  return pages
}
