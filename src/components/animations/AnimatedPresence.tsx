'use client'

import React from 'react'

export interface AnimatedPresenceProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
}

/**
 * Simple wrapper for animated children
 * This is a lightweight alternative to Framer Motion's AnimatedPresence
 * For proper exit animations, children should handle their own state
 */
export function AnimatedPresence({
  children,
  className = '',
  as: Component = 'div',
  ...props
}: AnimatedPresenceProps) {
  return (
    <Component className={className} {...(props as React.HTMLAttributes<HTMLDivElement>)}>
      {children}
    </Component>
  )
}
