'use client'

import React from 'react'

export interface ScaleInProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  from?: number // Starting scale (default 0.9)
  className?: string
  as?: React.ElementType
}

/**
 * CSS-based scale animation - lightweight alternative to Framer Motion
 * Scales up from a smaller size with fade in
 */
export function ScaleIn({
  children,
  delay = 0,
  duration = 500,
  from = 0.95,
  className = '',
  as: Component = 'div',
  ...props
}: ScaleInProps) {
  return (
    <Component
      className={`animate-scale-in opacity-0 ${className}`}
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
 * StaggerContainer - wraps children for staggered animations
 * Uses CSS custom properties to delay child animations
 */
export interface StaggerContainerProps {
  children: React.ReactNode
  staggerDelay?: number // Delay between each child in ms
  className?: string
  as?: React.ElementType
}

export function StaggerContainer({
  children,
  staggerDelay = 100,
  className = '',
  as: Component = 'div',
  ...props
}: StaggerContainerProps) {
  // Clone children and add stagger delay
  const childrenWithDelay = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      const childProps: any = child.props
      return React.cloneElement(child, {
        ...childProps,
        style: {
          ...(childProps.style || {}),
          animationDelay: `${index * staggerDelay}ms`,
        },
      })
    }
    return child
  })

  return (
    <Component className={className} {...(props as any)}>
      {childrenWithDelay}
    </Component>
  )
}
