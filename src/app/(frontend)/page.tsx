import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { ArrowRight, ChevronRight, ShieldCheck, Activity, Terminal } from 'lucide-react'

// Components
import { SuccessStoriesSection } from './_sections/SuccessStoriesSection'
import { RecentPostsSection } from './_sections/RecentPostsSection'
import { ProductShowcase } from './_sections/ProductShowcase'
import { AdvantageSection } from './_sections/AdvantageSection'
import { CaseLogosSection } from './_sections/CaseLogosSection'
import { SEOKeywords } from './_sections/SEOKeywords'
import { WhitepaperCTA } from './_sections/WhitepaperCTA'
import { DashboardPreview } from './_sections/DashboardPreview'
import { Hero } from './_sections/Hero'
import { LogoWall } from '@/components/LogoWall'
import { MediaCoverageSection } from './_sections/MediaCoverageSection'
import { staticStories } from '@/data/static-success-stories'

export const metadata: Metadata = {
  title: '泊冉软件 - 专业的用友软件实施服务商 | 业财一体化与数智化转型专家',
  description: '泊冉软件是用友全球首批铂金级合作伙伴，深耕智能制造、新零售及生物医药行业12年。提供 YonBIP、YonSuite、BPM、MDM 等产品的咨询、实施与定制开发服务，已助力500+企业实现业财一体化与数智化转型。',
  keywords: '泊冉软件, 用友实施商, YonBIP, YonSuite, 业财一体化, 数智化转型, ERP实施, 用友铂金级合作伙伴, BPM系统, MDM主数据, 用友上海, 企业数字化转型',
  openGraph: {
    title: '泊冉软件 - 专业的用友软件实施服务商',
    description: '深耕行业12年，用友铂金级合作伙伴。提供 YonBIP、YonSuite 全生命周期数智化转型服务。',
    type: 'website',
  },
}

export default async function Page() {
    const payload = await getPayload({ config: configPromise })

    const [successStories, latestPosts] = await Promise.all([
      payload.find({
        collection: 'success-stories',
        limit: 10,
        sort: '-updatedAt',
      }),
      payload.find({
        collection: 'posts',
        limit: 3,
        sort: '-publishedAt',
      }),
    ])

    // Merge static stories and database stories
    const staticSlugs = new Set(staticStories.map(s => s.slug))
    const mergedStories = [...staticStories]
    
    successStories.docs.forEach(story => {
      if (story.slug && !staticSlugs.has(story.slug)) {
        mergedStories.push(story as any)
      }
    })

    // Explicitly select the requested stories for the homepage
    const targetSlugs = ['anneng-logistics', 'nanji-ecommerce', 'west-basin', 'jiao-yun-ji-tuan']
    const displayStories = targetSlugs
      .map(slug => mergedStories.find(s => s.slug === slug))
      .filter(Boolean) as any[]

    // Fallback if specific stories aren't found (fill up to 4)
    if (displayStories.length < 4) {
      const existingSlugs = new Set(displayStories.map(s => s.slug))
      for (const story of mergedStories) {
        if (displayStories.length >= 4) break
        if (!existingSlugs.has(story.slug)) {
          displayStories.push(story)
          existingSlugs.add(story.slug!)
        }
      }
    }

    return (
        <div className="font-sans text-slate-600 bg-white flex flex-col">

              <main className="flex-grow">
                  <Hero />
                  <ProductShowcase />
                  <AdvantageSection />
                  <CaseLogosSection />
                  <LogoWall />
                  <MediaCoverageSection />
                  <RecentPostsSection posts={latestPosts.docs} />
                  <WhitepaperCTA />
                  <SEOKeywords />
              </main>
        </div>
    )
}
