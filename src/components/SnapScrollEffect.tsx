'use client'

import { useEffect } from 'react'

export const SnapScrollEffect = () => {
  useEffect(() => {
    // Add snap-scroll classes to the html element
    document.documentElement.classList.add('snap-y', 'snap-mandatory', 'scroll-smooth')
    
    return () => {
      // Clean up when unmounting (leaving the page)
      document.documentElement.classList.remove('snap-y', 'snap-mandatory', 'scroll-smooth')
    }
  }, [])

  return null
}
