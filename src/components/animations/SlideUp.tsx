'use client'

import React from 'react'

export interface SlideUpProps extends Omit<React.HTMLAttributes<HTMLElement>, 'as'> {
  children: React.ReactNode
  delay?: number
  duration?: number
  distance?: number
  className?: string
  as?: React.ElementType
  staggerIndex?: number // For staggered animations with CSS variable
}

/**
 * CSS-based slide up animation - lightweight alternative to Framer Motion
 * Slides up from below with fade in
 */
export const SlideUp = React.forwardRef<HTMLElement, SlideUpProps>(({
  children,
  delay = 0,
  duration = 600,
  distance = 30,
  className = '',
  as: Component = 'div',
  staggerIndex,
  ...props
}, ref) => {
  return (
    <Component
      ref={ref as any}
      className={`animate-slide-up opacity-0 ${className}`}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`,
        animationFillMode: 'forwards',
        ...(staggerIndex !== undefined && { '--stagger-delay': `${staggerIndex * 100}ms` } as React.CSSProperties),
      }}
      {...(props as any)}
    >
      {children}
    </Component>
  )
})

SlideUp.displayName = 'SlideUp'
