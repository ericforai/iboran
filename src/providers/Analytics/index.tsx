'use client'

import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation'

interface ConversionEvent {
  category: string
  action: string
  label?: string
}

interface AnalyticsContextValue {
  trackEvent: (event: ConversionEvent) => void
  trackConversion: (type: string, details?: Record<string, any>) => void
}

const AnalyticsContext = React.createContext<AnalyticsContextValue>({
  trackEvent: () => {},
  trackConversion: () => {},
})

export const useAnalytics = () => React.useContext(AnalyticsContext)

// GA4 事件发送
const sendGA4Event = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    ;(window as any).gtag('event', eventName, params)
  }
}

// 百度统计事件发送
const sendBaiduEvent = (category: string, action: string, label?: string) => {
  if (typeof window !== 'undefined' && (window as any)._hmt) {
    // 百度统计 HMT 事件跟踪
    ;(window as any)._hmt.push(['_trackEvent', category, action, label])
  }
}

export const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname()

  // 初始化 GA4 和百度统计脚本
  useEffect(() => {
    // GA4 初始化
    const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
    if (gaMeasurementId && !(window as any).gtagInitialized) {
      const script1 = document.createElement('script')
      script1.async = true
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`
      document.head.appendChild(script1)

      const script2 = document.createElement('script')
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || []
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date())
        gtag('config', '${gaMeasurementId}')
      `
      document.head.appendChild(script2)
      ;(window as any).gtagInitialized = true
    }

    // 百度统计初始化
    const baiduSiteId = process.env.NEXT_PUBLIC_BAIDU_SITE_ID
    if (baiduSiteId && !(window as any).baiduInitialized) {
      const script = document.createElement('script')
      script.async = true
      script.src = `https://hm.baidu.com/hm.js?${baiduSiteId}`
      document.head.appendChild(script)
      ;(window as any).baiduInitialized = true
    }
  }, [])

  // 页面浏览跟踪
  useEffect(() => {
    if (!pathname) return

    // GA4 pageview
    sendGA4Event('page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: pathname,
    })

    // 百度统计 pageview (自动处理，无需手动)
  }, [pathname])

  const trackEvent = React.useCallback((event: ConversionEvent) => {
    // 发送到 GA4
    const gaEventName = `${event.category}_${event.action}`
    sendGA4Event(gaEventName, {
      event_category: event.category,
      event_label: event.label,
    })

    // 发送到百度统计
    sendBaiduEvent(event.category, event.action, event.label)

    // 控制台日志（开发环境）
    if (process.env.NODE_ENV === 'development') {
      console.log('[Analytics] Event tracked:', event)
    }
  }, [])

  const trackConversion = React.useCallback((type: string, details?: Record<string, any>) => {
    trackEvent({
      category: 'conversion',
      action: type,
      label: details?.label,
    })
  }, [trackEvent])

  return (
    <AnalyticsContext.Provider value={{ trackEvent, trackConversion }}>
      {children}
    </AnalyticsContext.Provider>
  )
}
