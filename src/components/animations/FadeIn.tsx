'use client'

import React from 'react'

export type FadeInProps<T extends React.ElementType = 'div'> = {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
  as?: T
} & Omit<React.ComponentPropsWithoutRef<T>, 'as'>

/**
 * CSS-based fade in animation - lightweight alternative to Framer Motion
 * Uses Tailwind's animate-fade-in with inline styles for delay/duration control
 */
export function FadeIn<T extends React.ElementType = 'div'>({
  children,
  delay = 0,
  duration = 600,
  className = '',
  as: Component = 'div' as T,
  ...props
}: FadeInProps<T>) {
  return (
    <Component
      className={`animate-fade-in opacity-0 ${className}`}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`,
        animationFillMode: 'forwards',
      }}
      {...(props as any)}
    >
      {children}
    </Component>
  )
}

/**
 * Alias for FadeIn - provides compatibility with Framer Motion's FadeInUp naming
 * This component uses slide-up animation instead of pure fade
 */
export { SlideUp as FadeInUp } from './SlideUp'
