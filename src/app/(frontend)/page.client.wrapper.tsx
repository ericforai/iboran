'use client'

import React, { useState } from 'react'
import { Navbar } from '@/components/Navbar'
import { DemoRequestModal } from '@/components/DemoRequestModal'
import type { Contact } from '@/payload-types'

interface Props {
  children: React.ReactNode
  contactData: Contact
}

export const PageClientWrapper: React.FC<Props> = ({ children, contactData }) => {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <>
      <Navbar contactData={contactData} onOpenDemo={() => setIsDemoOpen(true)} />
      {children}
      <DemoRequestModal 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)} 
      />
    </>
  )
}
