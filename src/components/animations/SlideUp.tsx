'use client'

import React from 'react'

export type SlideUpProps<T extends React.ElementType = 'div'> = {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
  as?: T
  staggerIndex?: number // For staggered animations with CSS variable
} & Omit<React.ComponentPropsWithoutRef<T>, 'as'>

/**
 * CSS-based slide up animation - lightweight alternative to Framer Motion
 * Slides up from below with fade in
 */
export function SlideUp<T extends React.ElementType = 'div'>({
  children,
  delay = 0,
  duration = 600,
  className = '',
  as: Component = 'div' as T,
  staggerIndex,
  ...props
}: SlideUpProps<T>) {
  return (
    <Component
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
}
