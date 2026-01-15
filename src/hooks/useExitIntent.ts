'use client'

import { useEffect, useState, useRef } from 'react'

interface UseExitIntentOptions {
  enabled?: boolean
  threshold?: number
  delay?: number
  onTrigger?: () => void
  maxTriggers?: number
}

export const useExitIntent = (options: UseExitIntentOptions = {}) => {
  const {
    enabled = true,
    threshold = 50,
    delay = 30000,
    onTrigger,
    maxTriggers = 1,
  } = options

  const [shouldDetect, setShouldDetect] = useState(false)
  const triggerCountRef = useRef(0)

  // Delay enablement
  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldDetect(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  // Mouse leave intent detection (desktop only, not mobile)
  useEffect(() => {
    if (!enabled || !shouldDetect) return

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= threshold) {
        if (triggerCountRef.current < maxTriggers) {
          triggerCountRef.current++
          onTrigger?.()
        }
      }
    }

    // Skip for mobile/small screens
    if (window.innerWidth < 1024) {
      return
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    return () => document.removeEventListener('mouseleave', handleMouseLeave)
  }, [enabled, shouldDetect, threshold, maxTriggers, onTrigger])

  // Background switch detection
  useEffect(() => {
    if (!enabled || !shouldDetect) return

    let visibilityTimeout: NodeJS.Timeout

    const handleVisibilityChange = () => {
      if (document.hidden) {
        visibilityTimeout = setTimeout(() => {
          if (triggerCountRef.current < maxTriggers) {
            triggerCountRef.current++
            onTrigger?.()
          }
        }, 30000)
      } else {
        clearTimeout(visibilityTimeout)
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      clearTimeout(visibilityTimeout)
    }
  }, [enabled, shouldDetect, maxTriggers, onTrigger])

  return { triggerCount: triggerCountRef.current }
}
