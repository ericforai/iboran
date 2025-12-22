'use client'

import React, { useState, useCallback } from 'react'
import { Navbar } from '@/components/Navbar'
import { DemoRequestModal } from '@/components/DemoRequestModal'
import type { Contact } from '@/payload-types'

interface Props {
  children: React.ReactNode
  contactData: Contact
}

export const PageClientWrapper: React.FC<Props> = ({ children, contactData }) => {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  // 使用 useCallback 稳定化函数引用，避免 Navbar 不必要的重渲染
  const handleOpenDemo = useCallback(() => {
    setIsDemoOpen(true)
  }, [])

  const handleCloseDemo = useCallback(() => {
    setIsDemoOpen(false)
  }, [])

  return (
    <>
      <Navbar contactData={contactData} onOpenDemo={handleOpenDemo} />
      {children}
      <DemoRequestModal 
        isOpen={isDemoOpen} 
        onClose={handleCloseDemo} 
      />
    </>
  )
}
