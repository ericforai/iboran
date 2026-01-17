'use client'

import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import { X, ArrowRight, CheckCircle2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useEngagementTracking } from '@/hooks/useEngagementTracking'

interface ScrollTriggerDrawerProps {
  isEnabled?: boolean
  onOpenLeadForm?: () => void
}

// Pages where the drawer should NOT auto-trigger
const DISABLED_PAGES = ['/solution', '/pricing', '/contact']

export const ScrollTriggerDrawer: React.FC<ScrollTriggerDrawerProps> = ({
  isEnabled = true,
  onOpenLeadForm,
}) => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  // Check if current page should disable the drawer
  const isDisabledPage = DISABLED_PAGES.some(page => pathname?.startsWith(page))

  const handleTrigger = React.useCallback(
    (metrics: any) => {
      if (isEnabled && !isDisabledPage && !hasShown && !isOpen) {
        setTimeout(() => {
          setIsOpen(true)
          setHasShown(true)
        }, 1000)
      }
    },
    [isEnabled, isDisabledPage, hasShown, isOpen],
  )

  // Use engagement tracking hook
  useEngagementTracking({
    triggerThreshold: {
      scrollDepth: 60,
      timeOnPage: 90,
    },
    onTrigger: handleTrigger,
  })

  const handleClose = () => setIsOpen(false)

  const handlePrimaryAction = () => {
    if (onOpenLeadForm) {
      onOpenLeadForm()
    } else {
      window.dispatchEvent(new CustomEvent('open-demo-modal'))
    }
    handleClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 z-[9990]"
            onClick={handleClose}
          />
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 lg:left-auto lg:right-0 lg:top-0 lg:bottom-0 lg:w-full lg:max-w-md bg-white shadow-2xl z-[9991] flex flex-col max-h-[85vh] lg:max-h-full rounded-t-3xl lg:rounded-none"
          >
            {/* Mobile drag indicator */}
            <div className="lg:hidden flex justify-center pt-3 pb-1">
              <div className="w-12 h-1.5 bg-slate-200 rounded-full" />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-100">
              <div>
                <h3 className="text-lg font-bold text-[#1F2329]">正在评估方案？</h3>
                <p className="text-sm text-slate-500">让我们帮您快速判断</p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  handleClose()
                }}
                className="w-12 h-12 -mr-3 flex items-center justify-center rounded-full hover:bg-slate-100 active:bg-slate-200 transition-colors touch-manipulation cursor-pointer"
                aria-label="关闭"
              >
                <X className="w-6 h-6 text-slate-400" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 p-6 overflow-y-auto">
              <p className="text-sm text-slate-600 mb-6">
                我们发现您正在详细了解我们的解决方案。您可能在评估：
              </p>

              <div className="space-y-4 mb-8">
                {[
                  '是否适合你们行业',
                  '上线周期与风险',
                  '项目是否可控',
                  '投入产出比如何',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 rounded-xl p-4 mb-6">
                <p className="text-sm text-blue-900 font-medium mb-2">
                  针对您企业的具体情况，我们可以提供：
                </p>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• 同行业案例参考</li>
                  <li>• 预估实施周期</li>
                  <li>• 分阶段投入建议</li>
                </ul>
              </div>
            </div>

            {/* Footer actions */}
            <div className="p-6 border-t border-slate-100 space-y-3">
              <button
                onClick={handlePrimaryAction}
                className="w-full py-4 bg-[#E60012] text-white font-bold rounded-xl hover:bg-red-700 transition-all flex items-center justify-center gap-2"
              >
                获取针对您企业的判断
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={handleClose}
                className="w-full py-3 text-slate-500 hover:text-slate-700 font-medium transition-colors"
              >
                暂不需要，继续阅读
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
