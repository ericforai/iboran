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

  const [metrics, setMetrics] = useState<EngagementMetrics>({
    hasScrolled60Percent: false,
    hasSpent90Seconds: false,
    scrollDepth: 0,
    timeOnPage: 0,
    pageViews: 1,
  })

  const hasTriggeredRef = useRef(false)
  const startTimeRef = useRef(Date.now())
  const timerRef = useRef<NodeJS.Timeout | undefined>(undefined)

  // Check if trigger conditions are met
  const checkAndTrigger = useCallback(
    (currentMetrics: EngagementMetrics) => {
      if (hasTriggeredRef.current) return

      const shouldTrigger =
        currentMetrics.hasScrolled60Percent ||
        currentMetrics.hasSpent90Seconds ||
        currentMetrics.pageViews >= 2

      if (shouldTrigger && onTrigger) {
        hasTriggeredRef.current = true
        onTrigger(currentMetrics)
      }
    },
    [onTrigger],
  )

  // Restore previous session data
  useEffect(() => {
    try {
      const stored = sessionStorage.getItem(STORAGE_KEY)
      if (stored) {
        const data = JSON.parse(stored)
        setMetrics(prev => ({
          ...prev,
          pageViews: (data.pageViews || 0) + 1,
        }))
      }
    } catch {
      // ignore storage errors
    }
  }, [])

  // Scroll depth tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = (window.scrollY / scrollHeight) * 100
      const depth = Math.min(100, Math.max(0, scrolled))

      setMetrics(prev => {
        const newMetrics = { ...prev, scrollDepth: depth }
        const hasReached60 = depth >= scrollThreshold

        if (hasReached60 && !prev.hasScrolled60Percent) {
          newMetrics.hasScrolled60Percent = true
          checkAndTrigger({ ...newMetrics, hasScrolled60Percent: true })
        }

        return newMetrics
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrollThreshold, checkAndTrigger])

  // Time on page tracking
  useEffect(() => {
    timerRef.current = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTimeRef.current) / 1000)

      setMetrics(prev => {
        const newMetrics = { ...prev, timeOnPage: elapsed }
        const hasSpent90Seconds = elapsed >= timeThreshold

        if (hasSpent90Seconds && !prev.hasSpent90Seconds) {
          newMetrics.hasSpent90Seconds = true
          checkAndTrigger({ ...newMetrics, hasSpent90Seconds: true })
        }

        return newMetrics
      })
    }, 1000)

    return () => clearInterval(timerRef.current)
  }, [timeThreshold, checkAndTrigger])

  // Save metrics on page unload
  useEffect(() => {
    const saveMetrics = () => {
      try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ pageViews: metrics.pageViews }))
      } catch {
        // ignore
      }
    }

    window.addEventListener('beforeunload', saveMetrics)
    return () => window.removeEventListener('beforeunload', saveMetrics)
  }, [metrics.pageViews])

  return metrics
}
