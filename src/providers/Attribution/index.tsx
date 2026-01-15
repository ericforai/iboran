'use client'

import React, { createContext, useContext, useEffect, useRef } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

interface AttributionData {
  utm_source: string
  utm_medium: string
  utm_campaign: string
  utm_term: string
  utm_content: string
  referrer: string
  landing_page: string
  history: string[] // List of visited paths
}

const AttributionContext = createContext<AttributionData>({
  utm_source: '',
  utm_medium: '',
  utm_campaign: '',
  utm_term: '',
  utm_content: '',
  referrer: '',
  landing_page: '',
  history: [],
})

export const useAttribution = () => useContext(AttributionContext)

export const AttributionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  
  // Use refs to keep track of state without triggering re-renders for children
  // (We only need to read this data when a form is submitted)
  const dataRef = useRef<AttributionData>({
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_term: '',
    utm_content: '',
    referrer: '',
    landing_page: '',
    history: [],
  })

  // Initialize on mount
  useEffect(() => {
    // 1. Load existing data from sessionStorage
    try {
      const stored = sessionStorage.getItem('boran_attribution')
      if (stored) {
        dataRef.current = JSON.parse(stored)
      }
    } catch (e) {
      console.error('Failed to parse attribution data', e)
    }

    // 2. Capture Initial Attribution (only if not already set)
    if (!dataRef.current.landing_page) {
      dataRef.current.landing_page = window.location.href
      dataRef.current.referrer = document.referrer || '(direct)'
      
      // Capture UTMs
      const params = new URLSearchParams(window.location.search)
      dataRef.current.utm_source = params.get('utm_source') || ''
      dataRef.current.utm_medium = params.get('utm_medium') || ''
      dataRef.current.utm_campaign = params.get('utm_campaign') || ''
      dataRef.current.utm_term = params.get('utm_term') || ''
      dataRef.current.utm_content = params.get('utm_content') || ''
    }

    // 3. Save to sessionStorage
    sessionStorage.setItem('boran_attribution', JSON.stringify(dataRef.current))
  }, []) // Run once on mount

  // Track Page Views
  useEffect(() => {
    if (!pathname) return

    // Add current path to history if it's new (or just always push to trace flow)
    const currentPath = pathname
    const history = dataRef.current.history

    // Avoid duplicates if user clicks same link or just re-renders
    if (history[history.length - 1] !== currentPath) {
      // Keep last 10 pages
      const newHistory = [...history, currentPath].slice(-10)
      dataRef.current.history = newHistory
      sessionStorage.setItem('boran_attribution', JSON.stringify(dataRef.current))
    }
  }, [pathname, searchParams])

  return (
    <AttributionContext.Provider value={dataRef.current}>
      {children}
    </AttributionContext.Provider>
  )
}
