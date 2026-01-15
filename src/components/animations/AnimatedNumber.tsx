'use client'

import React, { useEffect, useRef, useState } from 'react'

export interface AnimatedNumberProps {
  value: string
  duration?: number
  className?: string
}

/**
 * CSS/JS-based number counting animation
 * A lightweight alternative to Framer Motion's useSpring/useTransform
 */
export function AnimatedNumber({ value, duration = 1500, className = '' }: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [displayValue, setDisplayValue] = useState('0')

  const numericValue = parseFloat(value.replace(/,/g, ''))
  const isNumeric = !isNaN(numericValue)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1, rootMargin: '-50px' }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isNumeric || !isVisible) return

    let startTime: number | null = null
    const startValue = 0

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function (ease out cubic)
      const easedProgress = 1 - Math.pow(1 - progress, 3)

      const currentValue = startValue + (numericValue - startValue) * easedProgress
      setDisplayValue(Math.floor(currentValue).toLocaleString())

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setDisplayValue(numericValue.toLocaleString())
      }
    }

    requestAnimationFrame(animate)
  }, [isNumeric, isVisible, numericValue, duration])

  if (!isNumeric) return <span className={className}>{value}</span>

  return <span ref={ref} className={className}>{displayValue}</span>
}
