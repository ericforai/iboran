'use client'

import React from 'react'

export type ScaleInProps<T extends React.ElementType = 'div'> = {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
  as?: T
} & Omit<React.ComponentPropsWithoutRef<T>, 'as'>

/**
 * CSS-based scale animation - lightweight alternative to Framer Motion
 * Scales up from a smaller size with fade in
 */
export function ScaleIn<T extends React.ElementType = 'div'>({
  children,
  delay = 0,
  duration = 500,
  className = '',
  as: Component = 'div' as T,
  ...props
}: ScaleInProps<T>) {
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
export type StaggerContainerProps<T extends React.ElementType = 'div'> = {
  children: React.ReactNode
  staggerDelay?: number // Delay between each child in ms
  className?: string
  as?: T
} & Omit<React.ComponentPropsWithoutRef<T>, 'as'>

export function StaggerContainer<T extends React.ElementType = 'div'>({
  children,
  staggerDelay = 100,
  className = '',
  as: Component = 'div' as T,
  ...props
}: StaggerContainerProps<T>) {
  // Clone children and add stagger delay
  const childrenWithDelay = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      const childProps = child.props as { style?: React.CSSProperties }
      return React.cloneElement(child, {
        style: {
          ...(childProps.style || {}),
          animationDelay: `${index * staggerDelay}ms`,
        },
      } as any)
    }
    return child
  })

  return (
    <Component className={className} {...(props as any)}>
      {childrenWithDelay}
    </Component>
  )
}
