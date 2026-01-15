import type { Metadata } from 'next/types'
import { Suspense } from 'react'

import { CollectionArchive } from '@/components/CollectionArchive'
import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import PageClient from './page.client'
import { getCachedGlobal } from '@/utilities/getGlobals'
import { Phone } from 'lucide-react'
import type { Contact } from '@/payload-types'

export const dynamic = 'force-dynamic'


import { CategoryFilter } from '@/components/CategoryFilter'

type Args = {
  searchParams: Promise<{
    category?: string
    page?: string
  }>
}

export default async function Page({ searchParams: searchParamsPromise }: Args) {
  const searchParams = await searchParamsPromise
  const payload = await getPayload({ config: configPromise })
  const contactData = await getCachedGlobal('contact', 1)() as Contact

  const categories = await payload.find({
    collection: 'categories',
    limit: 100,
  })

  const page = searchParams.page ? parseInt(searchParams.page) : 1
  const categorySlug = searchParams.category

  const where: any = {}
  if (categorySlug) {
    const activeCategory = categories.docs.find((cat) => cat.slug === categorySlug)

    if (activeCategory) {
      where.categories = {
        equals: activeCategory.id,
      }
    }
  }

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 12,
    page,
    where,
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
            {posts.totalPages > 1 && posts.page && (
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

export function generateMetadata(): Metadata {
  return {
    title: `泊冉观察 - 行业深度解析与实战洞察 | 泊冉软件`,
  }
}
