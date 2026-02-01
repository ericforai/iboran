'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAttribution } from '@/providers/Attribution'
import { getClientSideURL } from '@/utilities/getURL'

interface LeadFormData {
  name: string
  company: string
  phone: string
  email?: string
  role?: string
  currentSystem?: string
  message?: string
  source?: string
}

const STORAGE_KEY = 'exit-intent-shown'
const COOLDOWN_DAYS = 7

// Check if exit intent was shown recently
function shouldShowModal(): boolean {
  if (typeof window === 'undefined') return false
  const lastShown = localStorage.getItem(STORAGE_KEY)
  if (!lastShown) return true

  const daysSinceShown = (Date.now() - parseInt(lastShown)) / (1000 * 60 * 60 * 24)
  return daysSinceShown >= COOLDOWN_DAYS
}

// Mark exit intent as shown
function markAsShown() {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, Date.now().toString())
  }
}

export const ExitIntentModal: React.FC = React.memo(() => {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState<Partial<LeadFormData>>({})
  const attribution = useAttribution()

  // Detect exit intent
  useEffect(() => {
    // Don't show on mobile (no mouse) or if shown recently
    if (typeof window === 'undefined' || 'ontouchstart' in window || !shouldShowModal()) {
      return
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Double check if it should be shown (in case it was shown in another tab or state changed)
      if (!shouldShowModal()) {
        document.removeEventListener('mouseleave', handleMouseLeave)
        return
      }

      // Only trigger when mouse leaves from the top of the viewport
      if (e.clientY <= 0) {
        setIsOpen(true)
        markAsShown()
        // Remove listener to prevent repeated triggering in the same session
        document.removeEventListener('mouseleave', handleMouseLeave)
      }
    }

    // Add a small delay before enabling detection (avoid false positives on page load)
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave)
    }, 2000)

    return () => {
      clearTimeout(timer)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      // Submit directly to /api/leads (no form ID needed)
      const response = await fetch(`${getClientSideURL()}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          phone: formData.phone,
          source: 'exit-intent-modal',
          utmData: attribution ? {
            utm_source: attribution.utm_source || '',
            utm_medium: attribution.utm_medium || '',
            utm_campaign: attribution.utm_campaign || '',
            utm_content: attribution.utm_content || '',
            utm_term: attribution.utm_term || '',
            referrer: attribution.referrer || '',
            landingPage: attribution.landing_page || window.location.href,
            pageHistory: attribution.history || [],
          } : undefined,
        }),
      })

      const resJson = await response.json()

      if (!response.ok) {
        const errorMsg = resJson.error || resJson.message || '提交失败，请稍后重试'
        throw new Error(errorMsg)
      }

      setIsSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : '提交失败，请稍后重试')
    } finally {
      setIsSubmitting(false)
    }
  }, [formData, attribution])

  const handleClose = useCallback(() => {
    setIsOpen(false)
  }, [])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors z-10"
              style={{ color: '#1F2329' }}
            >
              <X className="w-5 h-5" />
            </button>

            {!isSubmitted ? (
              <>
                {/* Header */}
                <div className="bg-gradient-to-r from-[#E60012] to-red-600 px-6 py-8 text-white">
                  <h2 className="text-2xl font-bold mb-2">别急着走！</h2>
                  <p className="text-white/90">
                    获取《用友ERP选型指南》和专属咨询服务
                  </p>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-[#E60012] text-sm font-bold">1</span>
                      </div>
                      <p className="text-sm text-slate-600">免费获取同行业数字化转型案例集</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-[#E60012] text-sm font-bold">2</span>
                      </div>
                      <p className="text-sm text-slate-600">专家1对1咨询，分析您的业务痛点</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-[#E60012] text-sm font-bold">3</span>
                      </div>
                      <p className="text-sm text-slate-600">获取用友产品演示与报价方案</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                      type="text"
                      placeholder="姓名 *"
                      required
                      value={formData.name || ''}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0052D9]/20"
                    />
                    <input
                      type="text"
                      placeholder="公司名称 *"
                      required
                      value={formData.company || ''}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0052D9]/20"
                    />
                    <input
                      type="tel"
                      placeholder="手机号 *"
                      required
                      pattern="^1[3-9]\d{9}$"
                      value={formData.phone || ''}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0052D9]/20"
                    />

                    {error && (
                      <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg">
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 bg-[#E60012] hover:bg-red-700 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? '提交中...' : '立即获取'}
                    </button>

                    <p className="text-xs text-slate-400 text-center">
                      提交即表示您同意我们的隐私政策
                    </p>
                  </form>
                </div>
              </>
            ) : (
              // Success state
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1F2329] mb-3">提交成功！</h3>
                <p className="text-slate-600 mb-6">
                  我们的项目顾问将在 <strong className="text-[#E60012]">1 个工作日内</strong>与您联系
                </p>
                <button
                  onClick={handleClose}
                  className="w-full py-3 bg-[#0052D9] text-white rounded-lg font-medium hover:bg-blue-700"
                >
                  知道了
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
})

ExitIntentModal.displayName = 'ExitIntentModal'
