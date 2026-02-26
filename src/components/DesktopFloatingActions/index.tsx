'use client'

import React from 'react'
import { BadgeDollarSign, Headset, Phone } from 'lucide-react'
import type { Contact } from '@/payload-types'
import { useConversionTracking } from '@/hooks/useConversionTracking'

interface DesktopFloatingActionsProps {
  contactData?: Contact
}

export const DesktopFloatingActions: React.FC<DesktopFloatingActionsProps> = React.memo(({ contactData }) => {
  const { trackPhoneCall } = useConversionTracking()
  const phone = contactData?.phone || '400-9955-161'
  const [copied, setCopied] = React.useState(false)
  const [showPhoneCard, setShowPhoneCard] = React.useState(false)
  const phoneCardRef = React.useRef<HTMLDivElement>(null)

  const handleOpenConsult = React.useCallback(() => {
    window.dispatchEvent(new CustomEvent('open-consult-modal'))
  }, [])

  const handleOpenQuote = React.useCallback(() => {
    window.dispatchEvent(new CustomEvent('open-demo-modal', { detail: { source: 'desktop-floating-quote' } }))
  }, [])

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!phoneCardRef.current) return
      if (!phoneCardRef.current.contains(event.target as Node)) {
        setShowPhoneCard(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleCopyPhone = React.useCallback(() => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(phone).then(() => {
        setCopied(true)
        window.setTimeout(() => {
          setCopied(false)
          setShowPhoneCard(false)
        }, 1200)
      }).catch(() => {
        // no-op fallback
      })
    }
  }, [phone])

  const handlePhoneClick = React.useCallback(() => {
    trackPhoneCall('desktop-floating')
    setShowPhoneCard((prev) => !prev)
  }, [trackPhoneCall])

  return (
    <div className="hidden lg:flex fixed right-4 top-1/2 -translate-y-1/2 z-[95]">
      <div className="relative w-[76px]">
      <div className="w-[76px] bg-[#E60012] text-white rounded-sm shadow-xl border border-red-700/30">
        <button
          onClick={handleOpenConsult}
          className="w-full h-[92px] flex flex-col items-center justify-center gap-1.5 hover:bg-red-700 transition-colors"
          aria-label="在线咨询"
        >
          <Headset className="w-6 h-6" />
          <span className="text-[14px] font-semibold leading-none">在线咨询</span>
        </button>

        <div className="h-px bg-white/30 mx-2" />

        <div className="relative" ref={phoneCardRef}>
          {showPhoneCard && (
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 w-[190px] bg-white text-[#1F2329] rounded-lg shadow-2xl border border-slate-200 p-3 z-[130]">
              <div className="text-xs text-slate-500 mb-1">服务热线</div>
              <div className="text-lg font-bold tracking-wide">{phone}</div>
              <button
                type="button"
                onClick={handleCopyPhone}
                className="mt-2 w-full h-8 rounded-md bg-[#E60012] text-white text-sm font-semibold hover:bg-red-700 transition-colors"
              >
                {copied ? '已复制' : '复制号码'}
              </button>
            </div>
          )}
          <button
            type="button"
            onClick={handlePhoneClick}
            className="w-full h-[92px] flex flex-col items-center justify-center gap-1.5 hover:bg-red-700 transition-colors"
            aria-label="电话咨询"
          >
            <Phone className="w-6 h-6" />
            <span className="text-[14px] font-semibold leading-none">电话咨询</span>
          </button>
        </div>

        <div className="h-px bg-white/30 mx-2" />

        <button
          onClick={handleOpenQuote}
          className="w-full h-[92px] flex flex-col items-center justify-center gap-1.5 hover:bg-red-700 transition-colors"
          aria-label="获取报价"
        >
          <BadgeDollarSign className="w-6 h-6" />
          <span className="text-[14px] font-semibold leading-none">获取报价</span>
        </button>
      </div>
      </div>
    </div>
  )
})

DesktopFloatingActions.displayName = 'DesktopFloatingActions'
