'use client'

import React, { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { CaseFilter, caseCategories } from '@/components/CaseFilter'
import { StoryCard } from '@/components/StoryCard'
import type { SuccessStory } from '@/payload-types'
import { FadeIn } from '@/components/animations'

export const CaseStudyListing: React.FC<{
  stories: SuccessStory[]
}> = ({ stories }) => {
  return (
    <Suspense fallback={<div className="container px-4 py-24 text-center">加载中...</div>}>
      <CaseStudyListingContent stories={stories} />
    </Suspense>
  )
}

const categoryMatchers: Record<string, (industry: string) => boolean> = {
  manufacturing: (ind) => ind.includes('制造') || ind.includes('新能源'),
  retail: (ind) =>
    ind.includes('零售') ||
    ind.includes('电商') ||
    ind.includes('消费品') ||
    ind.includes('餐饮') ||
    ind.includes('IP') ||
    ind.includes('宠物') ||
    ind.includes('化妆品'),
  pharma: (ind) => ind.includes('医药') || ind.includes('医疗'),
  services: (ind) => ind.includes('现代服务业') && !ind.includes('物流'),
  logistics: (ind) => ind.includes('物流') || ind.includes('货代') || ind.includes('运输') || ind.includes('交通'),
  internet: (ind) => ind.includes('互联网') || ind.includes('高科技') || ind.includes('IT'),
  semiconductor: (ind) =>
    ind.includes('芯片') || ind.includes('半导体') || ind.includes('电子'),
  'state-owned': (ind) => ind.includes('国资') || ind.includes('央企'),
  finance: (ind) => ind.includes('金融'),
}

const matchesCategory = (industry: string, categoryId: string) => {
  if (categoryId === 'all') return true
  const matcher = categoryMatchers[categoryId]
  return matcher ? matcher(industry) : false
}

const CaseStudyListingContent: React.FC<{
  stories: SuccessStory[]
}> = React.memo(({ stories }) => {
  const searchParams = useSearchParams()
  const [activeCategory, setActiveCategory] = useState('all')

  useEffect(() => {
    const category = searchParams.get('category')
    if (category && caseCategories.some((c) => c.id === category)) {
      setActiveCategory(category)

      // Scroll to filter section if category is provided
      const timer = setTimeout(() => {
        const element = document.getElementById('case-library')
        element?.scrollIntoView({ behavior: 'smooth' })
      }, 0)

      return () => clearTimeout(timer)
    }
  }, [searchParams])

  const filteredStories = React.useMemo(() => {
    return stories.filter((story) => {
      const industry = story.industry as string | undefined
      if (!industry) return activeCategory === 'all'
      return matchesCategory(industry, activeCategory)
    })
  }, [stories, activeCategory])

  const counts = React.useMemo(() => {
    const countsMap = caseCategories.reduce<Record<string, number>>((acc, category) => {
      acc[category.id] = 0
      return acc
    }, {})

    countsMap.all = stories.length

    stories.forEach((story) => {
      const industry = story.industry as string | undefined
      if (!industry) return
      Object.keys(categoryMatchers).forEach((categoryId) => {
        if (matchesCategory(industry, categoryId)) {
          countsMap[categoryId] = (countsMap[categoryId] || 0) + 1
        }
      })
    })
    return countsMap
  }, [stories])

  const activeCount = counts[activeCategory] ?? filteredStories.length

  return (
    <section id="case-library" className="container px-4 -mt-16 md:-mt-20 relative z-20">
      <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-slate-200/50 border border-slate-100">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold text-red-600 mb-3">案例库</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                沉淀方法论与行业共识
              </h2>
              <p className="text-slate-500 mt-3 max-w-2xl leading-relaxed">
                甄选关键行业的数字化实践路径，关注可复用的业务架构、合规方法与增长指标。
              </p>
            </div>
            <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-600">
              <span className="font-semibold text-slate-900">{activeCount}</span>
              <span>个案例</span>
              <span className="text-slate-400">/ 共 {counts.all}</span>
            </div>
          </div>

          <CaseFilter
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            counts={counts}
            className="justify-start"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {filteredStories.map((story, index) => (
            <StoryCard key={story.id} doc={story} index={index} />
          ))}
        </div>

        {filteredStories.length === 0 && (
          <FadeIn className="text-center py-24 bg-slate-50 rounded-3xl border border-dashed border-slate-200 mt-10">
            <p className="text-slate-400 text-lg">该领域案例正在补充中</p>
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className="mt-4 text-red-600 font-medium hover:underline"
            >
              返回全部案例
            </button>
          </FadeIn>
        )}
      </div>
    </section>
  )
})

CaseStudyListingContent.displayName = 'CaseStudyListingContent'
