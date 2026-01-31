'use client'

import { useState, useEffect } from 'react'
import type { Resource } from '@/payload-types'
import RichText from '@/components/RichText'
import { WhitepaperGate, WhitepaperGateInline } from '@/components/whitepaper'
import { useConversionTracking } from '@/hooks/useConversionTracking'

interface WhitepaperClientProps {
  resource: Resource
}

const UNLOCKED_STORAGE_KEY = 'unlocked-whitepapers'

export function WhitepaperClient({ resource }: WhitepaperClientProps) {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [isUnlocking, setIsUnlocking] = useState(false)
  const { getAttributionData, trackLeadSubmit } = useConversionTracking()

  const coverImage = resource.coverImage
  const coverUrl = (() => {
    if (!coverImage) return '/images/placeholder-cover.png'
    if (typeof coverImage === 'string') return coverImage
    return (
      coverImage.url ||
      coverImage.sizes?.medium?.url ||
      coverImage.sizes?.large?.url ||
      '/images/placeholder-cover.png'
    )
  })()

  // 检查解锁状态
  useEffect(() => {
    try {
      const unlockedData = localStorage.getItem(UNLOCKED_STORAGE_KEY)
      if (unlockedData) {
        const unlocked: Record<string, boolean> = JSON.parse(unlockedData)
        if (unlocked[resource.id] || unlocked[resource.slug]) {
          setIsUnlocked(true)
        }
      }
    } catch {
      // localStorage 不可用时忽略
    }
  }, [resource.id, resource.slug])

  // 处理解锁
  const handleUnlock = async (data: { name: string; company: string; phone: string }) => {
    setIsUnlocking(true)

    try {
      const attributionData = getAttributionData()

      // 提交线索数据到 API
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          source: `whitepaper:${resource.slug}`,
          resourceTitle: resource.title,
          utmData: attributionData,
        }),
      })

      if (!response.ok) {
        throw new Error('提交失败，请稍后重试')
      }

      // 发送转化事件
      trackLeadSubmit('whitepaper', resource.slug)

      // 保存解锁状态到 localStorage
      try {
        const unlockedData = localStorage.getItem(UNLOCKED_STORAGE_KEY)
        const unlocked: Record<string, boolean> = unlockedData ? JSON.parse(unlockedData) : {}
        unlocked[resource.id] = true
        unlocked[resource.slug] = true
        localStorage.setItem(UNLOCKED_STORAGE_KEY, JSON.stringify(unlocked))
      } catch {
        // localStorage 不可用时忽略
      }

      setIsUnlocked(true)
    } catch (err) {
      throw err
    } finally {
      setIsUnlocking(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      {/* Hero 区域 */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* 封面图 */}
            <div className="w-full md:w-1/3 flex-shrink-0">
              <div className="aspect-[3/4] rounded-xl shadow-lg overflow-hidden bg-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={coverUrl}
                  alt={resource.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* 信息区 */}
            <div className="flex-1">
              <span className="inline-block text-[#E60012] text-sm font-medium mb-3">
                白皮书
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-[#1F2329] mb-3">
                {resource.title}
              </h1>
              {resource.subtitle && (
                <p className="text-xl text-[#4B5563] mb-6">{resource.subtitle}</p>
              )}

              {resource.summary && (
                <p className="text-[#4B5563] leading-relaxed mb-6">{resource.summary}</p>
              )}

              <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                {resource.readTime && (
                  <span className="flex items-center gap-1">
                    📖 {resource.readTime}
                  </span>
                )}
                {resource.publishedDate && (
                  <span className="flex items-center gap-1">
                    📅 {new Date(resource.publishedDate).toLocaleDateString('zh-CN')}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 内容区域 */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* 主内容 */}
          <article className="flex-1 max-w-3xl">
            {/* 预览内容 */}
            {resource.previewContent && (
              <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
                <div className="flex items-center gap-2 mb-6 pb-4 border-b">
                  <span className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 text-sm font-bold">
                    1
                  </span>
                  <h2 className="text-xl font-bold text-[#1F2329]">内容预览</h2>
                </div>
                <RichText data={resource.previewContent} enableGutter={false} />
              </div>
            )}

            {/* 门控区域 */}
            {resource.gated && !isUnlocked && (
              <WhitepaperGateInline
                title={resource.title}
                onUnlock={handleUnlock}
                isUnlocking={isUnlocking}
              />
            )}

            {/* 完整内容 */}
            {isUnlocked && resource.fullContent && (
              <div className="bg-white rounded-xl p-8 shadow-sm border-2 border-green-200">
                <div className="flex items-center gap-2 mb-6 pb-4 border-b">
                  <span className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center text-green-600 text-sm font-bold">
                    ✓
                  </span>
                  <h2 className="text-xl font-bold text-[#1F2329]">完整内容</h2>
                </div>
                <RichText data={resource.fullContent} enableGutter={false} />
              </div>
            )}

            {/* 不需要门控的情况 */}
            {!resource.gated && resource.fullContent && (
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <RichText data={resource.fullContent} enableGutter={false} />
              </div>
            )}
          </article>

          {/* 侧边栏 */}
          <aside className="w-full lg:w-80 flex-shrink-0">
            {resource.gated && !isUnlocked && (
              <WhitepaperGate
                title={resource.title}
                onUnlock={handleUnlock}
                isUnlocking={isUnlocking}
              />
            )}

            {isUnlocked && resource.ctaText && (
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4">
                <h3 className="text-lg font-bold text-[#1F2329] mb-3">
                  需要落地实施？
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  泊冉是用友官方实施服务商，可为您提供专业的业财一体化实施服务
                </p>
                <a
                  href={resource.ctaLink || '/contact'}
                  className="block w-full py-3 bg-[#E60012] hover:bg-red-700 text-white text-center font-bold rounded-lg transition-colors"
                >
                  {resource.ctaText}
                </a>
              </div>
            )}
          </aside>
        </div>
      </section>
    </div>
  )
}
