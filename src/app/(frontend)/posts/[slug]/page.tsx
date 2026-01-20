import type { Metadata } from 'next'

import { RelatedPosts } from '@/blocks/RelatedPosts/Component'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'

import RichText from '@/components/RichText'

import type { Post, Contact } from '@/payload-types'

import { PostHero } from '@/heros/PostHero'
import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import { GEORenderer } from '@/components/GEORenderer'
import { GEOJsonLd } from '@/components/GEOJsonLd'
import { getServerSideURL } from '@/utilities/getURL'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const posts = await payload.find({
    collection: 'posts',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = posts.docs.map(({ slug }) => {
    return { slug }
  })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}


import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd'

export default async function Post({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '' } = await paramsPromise
  const contactData = await getCachedGlobal('contact', 1)() as Contact
  const phone = contactData?.phone || '400-9955-161'
  // Decode to support slugs with special characters
  const decodedSlug = decodeURIComponent(slug)
  const url = '/posts/' + decodedSlug
  const post = await queryPostBySlug({ slug: decodedSlug })

  if (!post) return <PayloadRedirects url={url} />

  const serverUrl = getServerSideURL()
  const heroImageUrl = post.heroImage && typeof post.heroImage !== 'string' && post.heroImage.url 
    ? `${serverUrl}${post.heroImage.url}` 
    : undefined
  
  const breadcrumbItems = [
      { name: '首页', url: '/' },
      { name: '文章', url: '/posts' },
      { name: post.title, url: `/posts/${slug}` }
  ]

  return (
    <article className="pb-16">
      <PageClient />
      <BreadcrumbJsonLd items={breadcrumbItems} />

      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      <PostHero post={post} />

      <GEOJsonLd 
            title={post.title} 
            description={post.meta?.description || undefined} 
            faqs={post.atomicFAQs} 
            url={`https://www.iboran.com/posts/${slug}`}
            image={heroImageUrl}
          />

          <div className="flex flex-col items-center gap-4 pt-8">
            <div className="container">
              {/* GEO Content Section */}
              {(post.tldr || post.atomicFAQs || post.decisionFramework || post.boundaries) && (
                <div className="max-w-[48rem] mx-auto mb-16">
                  <GEORenderer 
                    tldr={post.tldr}
                    atomicFAQs={post.atomicFAQs}
                    decisionFramework={post.decisionFramework}
                    boundaries={post.boundaries}
                  />
                </div>
              )}

              <RichText className="max-w-[48rem] mx-auto" data={post.content} enableGutter={false} />
              
              {/* Enhanced CTA Block */}
              <div className="max-w-[48rem] mx-auto mt-20 p-8 lg:p-12 bg-gradient-to-br from-[#1F2329] to-[#374151] rounded-3xl text-white relative overflow-hidden shadow-2xl">
                <div className="relative z-10">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4">准备好开启数字化转型了吗？</h3>
                  <p className="text-slate-300 text-lg mb-8 max-w-xl">
                    泊冉软件专家团队深耕行业 12 年，已助力 500+ 企业实现精密管理。点击下方按钮，获取专属行业深度建议。
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/demo"
                      className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-[#E60012] hover:bg-red-700 rounded-md shadow-lg transition-all text-center"
                    >
                      预约专家演示
                    </Link>
                    <a
                      href={`tel:${phone.replace(/\s+/g, '')}`}
                      className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 hover:bg-white/10 rounded-md transition-all sm:w-auto"
                    >
                      拨打咨询热线
                    </a>
                  </div>
                </div>
                {/* Subtle background decoration */}
                <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-red-600/10 rounded-full blur-3xl"></div>
              </div>

              {post.relatedPosts && post.relatedPosts.length > 0 && (
                <RelatedPosts
                  className="mt-20 max-w-[52rem] lg:grid lg:grid-cols-subgrid col-start-1 col-span-3 grid-rows-[2fr]"
                  docs={post.relatedPosts.filter((post) => typeof post === 'object')}
                />
              )}
            </div>
          </div>
        </article>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const post = await queryPostBySlug({ slug })

  return generateMeta({ doc: post, collection: 'posts' })
}

const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'posts',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    depth: 2,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
