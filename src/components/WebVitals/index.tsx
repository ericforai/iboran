'use client'

import { useEffect } from 'react'

export function WebVitals() {
  useEffect(() => {
    // 动态导入 web-vitals 库
    // @ts-expect-error - next/dist/compiled/web-vitals is an internal module
    import('next/dist/compiled/web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB, onINP }) => {
      const reportMetric = (metric: any) => {
        const rating = metric.rating || 'unknown'
        const emoji = rating === 'good' ? '✅' : rating === 'needs-improvement' ? '⚠️' : '❌'
        const color = rating === 'good' ? '#0CCE6B' : rating === 'needs-improvement' ? '#FFA400' : '#FF4E42'

        console.log(
          `${emoji} %c[Web Vitals] ${metric.name}: ${metric.value.toFixed(2)} (${rating})`,
          `color: ${color}; font-weight: bold; font-size: 14px;`
        )
      }

      onCLS(reportMetric)
      onFCP(reportMetric)
      onLCP(reportMetric)
      onTTFB(reportMetric)
      onINP(reportMetric)
    }).catch((err) => {
      console.warn('[WebVitals] Failed to load web-vitals:', err)
    })
  }, [])

  return null
}
