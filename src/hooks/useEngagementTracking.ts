'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

interface EngagementMetrics {
  hasScrolled60Percent: boolean
  hasSpent90Seconds: boolean
  scrollDepth: number
  timeOnPage: number
  pageViews: number
}

interface UseEngagementTrackingOptions {
  onTrigger?: (metrics: EngagementMetrics) => void
  triggerThreshold?: {
    scrollDepth?: number
    timeOnPage?: number
  }
}

const STORAGE_KEY = 'boran_engagement'

export const useEngagementTracking = (options: UseEngagementTrackingOptions = {}) => {
  const { onTrigger, triggerThreshold = {} } = options
  const { scrollDepth: scrollThreshold = 60, timeOnPage: timeThreshold = 90 } = triggerThreshold

  // Use refs for tracking to avoid re-renders
  const metricsRef = useRef<EngagementMetrics>({
    hasScrolled60Percent: false,
    hasSpent90Seconds: false,
    scrollDepth: 0,
    timeOnPage: 0,
    pageViews: 1,
  })

  // We only enable this state if we need to force a re-render (e.g. for debugging or if the UI displayed these live values)
  // In the current usage, only the trigger matters.
  const [, forceUpdate] = useState({})

  const hasTriggeredRef = useRef(false)
  const startTimeRef = useRef(Date.now())
  const timerRef = useRef<NodeJS.Timeout | undefined>(undefined)

  const checkAndTrigger = useCallback(() => {
    if (hasTriggeredRef.current) return

    const current = metricsRef.current
    const shouldTrigger =
      current.hasScrolled60Percent ||
      current.hasSpent90Seconds ||
      current.pageViews >= 2

    if (shouldTrigger && onTrigger) {
      hasTriggeredRef.current = true
      onTrigger({ ...current })
      // Force update to reflect "has..." state changes if needed by UI
      forceUpdate({})
    }
  }, [onTrigger])

  // Restore previous session data
  useEffect(() => {
    try {
      const stored = sessionStorage.getItem(STORAGE_KEY)
      if (stored) {
        const data = JSON.parse(stored)
        metricsRef.current.pageViews = (data.pageViews || 0) + 1
      }
    } catch {
      // ignore storage errors
    }
  }, [])

  // Scroll depth tracking
  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
          const scrolled = (window.scrollY / scrollHeight) * 100
          const depth = Math.min(100, Math.max(0, scrolled))

          metricsRef.current.scrollDepth = depth

          if (depth >= scrollThreshold && !metricsRef.current.hasScrolled60Percent) {
            metricsRef.current.hasScrolled60Percent = true
            checkAndTrigger()
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrollThreshold, checkAndTrigger])

  // Time on page tracking
  useEffect(() => {
    timerRef.current = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTimeRef.current) / 1000)
      metricsRef.current.timeOnPage = elapsed

      if (elapsed >= timeThreshold && !metricsRef.current.hasSpent90Seconds) {
        metricsRef.current.hasSpent90Seconds = true
        checkAndTrigger()
      }
    }, 1000)

    return () => clearInterval(timerRef.current)
  }, [timeThreshold, checkAndTrigger])

  // Save metrics on page unload
  useEffect(() => {
    const saveMetrics = () => {
      try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ pageViews: metricsRef.current.pageViews }))
      } catch {
        // ignore
      }
    }

    window.addEventListener('beforeunload', saveMetrics)
    return () => window.removeEventListener('beforeunload', saveMetrics)
  }, [])

  return metricsRef.current
}
