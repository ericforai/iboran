'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { BusinessFinanceStrategicRestructuring } from '@/components/whitepaper/BusinessFinanceStrategicRestructuring'
import { BusinessFinanceStrategicRestructuringPreview } from '@/components/whitepaper/BusinessFinanceStrategicRestructuringPreview'
import { WhitepaperGate } from '@/components/whitepaper'
import type { GateFormData } from '@/components/whitepaper'
import { Eye } from 'lucide-react'

const WHITEPAPER_ID = 'business-finance-strategic-restructuring'
const WHITEPAPER_TITLE = '业财一体化·业财战略重构'

const UNLOCKED_STORAGE_KEY = 'unlocked-whitepapers'

export function BusinessFinanceStrategicRestructuringGated() {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [isUnlocking, setIsUnlocking] = useState(false)
  const [mounted, setMounted] = useState(false)

  // 检查解锁状态
  useEffect(() => {
    setMounted(true)
    try {
      const unlockedData = localStorage.getItem(UNLOCKED_STORAGE_KEY)
      if (unlockedData) {
        const unlocked: Record<string, boolean> = JSON.parse(unlockedData)
        if (unlocked[WHITEPAPER_ID]) {
          setIsUnlocked(true)
        }
      }
    } catch {
      // localStorage 不可用时忽略
    }
  }, [])

  const handleUnlock = async (data: GateFormData) => {
    setIsUnlocking(true)

    try {
      // 提交线索数据到 API
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          source: `whitepaper:${WHITEPAPER_ID}`,
          resourceTitle: WHITEPAPER_TITLE,
        }),
      })

      if (!response.ok) {
        throw new Error('提交失败，请稍后重试')
      }

      // 保存解锁状态到 localStorage
      try {
        const unlockedData = localStorage.getItem(UNLOCKED_STORAGE_KEY)
        const unlocked: Record<string, boolean> = unlockedData ? JSON.parse(unlockedData) : {}
        unlocked[WHITEPAPER_ID] = true
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

  // 服务端渲染时显示预览
  if (!mounted) {
    return (
      <div className="bg-white">
        <section className="bg-gradient-to-br from-[#1F2329] via-[#2d3440] to-[#1F2329] text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 bg-[#E60012] rounded-full text-sm font-medium mb-6">
                泊冉软件白皮书
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                业财一体化业财战略重构
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-8">
                从数据孤岛到价值创造的转型路径
              </p>
            </div>
          </div>
        </section>
      </div>
    )
  }

  // 已解锁 - 显示完整内容
  if (isUnlocked) {
    return <BusinessFinanceStrategicRestructuring />
  }

  // 未解锁 - 显示预览内容和门控表单
  return (
    <div className="bg-white min-h-screen">
      {/* 封面区域 */}
      <section className="bg-gradient-to-br from-[#1F2329] via-[#2d3440] to-[#1F2329] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-[#E60012] rounded-full text-sm font-medium mb-6">
              泊冉软件白皮书
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              业财一体化业财战略重构
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8">
              从数据孤岛到价值创造的转型路径
            </p>
          </div>
        </div>
      </section>

      {/* 预览内容 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <span className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-[#0052D9]">
                <Eye className="w-5 h-5" />
              </span>
              <h2 className="text-2xl font-bold text-[#1F2329]">内容预览</h2>
            </div>
            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
              <BusinessFinanceStrategicRestructuringPreview />
            </div>
          </div>
        </div>
      </section>

      {/* 门控区域 */}
      <section className="py-16 bg-[#F7F8FA]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 items-stretch">
              {/* 左侧提示信息 */}
              <div className="flex-1">
                <div className="bg-gradient-to-br from-[#E60012] to-[#C4000F] rounded-2xl p-8 text-white h-full">
                  <h3 className="text-2xl font-bold mb-4">解锁完整白皮书</h3>
                  <p className="text-white/90 mb-6">
                    填写信息即可免费获取完整内容，包含：
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>5个章节深度解析（约8000字）</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>业财重构三步方法论路线图</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>风险控制清单与实施保障</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>技术架构与选型建议</span>
                    </li>
                  </ul>
                  <p className="text-sm text-white/70">
                    已有 582 位企业管理者解锁阅读
                  </p>
                </div>
              </div>

              {/* 右侧表单 */}
              <div className="w-full lg:w-96 flex-shrink-0">
                <WhitepaperGate
                  title={WHITEPAPER_TITLE}
                  onUnlock={handleUnlock}
                  isUnlocking={isUnlocking}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 底部CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-[#1F2329] mb-4">
              需要业财一体化实施服务？
            </h3>
            <p className="text-slate-600 mb-6">
              泊冉软件是用友官方实施服务商，拥有12+年业财一体化落地经验
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#E60012] text-white font-bold rounded-xl hover:bg-red-700 transition-colors"
            >
              联系咨询专家
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
