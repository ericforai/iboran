'use client'

import React, { useState } from 'react'
import { Phone, MessageSquare, Presentation } from 'lucide-react'
import type { Contact } from '@/payload-types'
import { DemoRequestModal } from '@/components/DemoRequestModal'
import { ConsultationModal } from '@/components/ConsultationModal'

export const MobileStickyBar = ({ contactData }: { contactData?: Contact }) => {
    const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)
    const [isConsultModalOpen, setIsConsultModalOpen] = useState(false)

    const phone = contactData?.phone || '400-9955-161'

    return (
        <>
            <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[60] bg-white/95 backdrop-blur-md border-t border-slate-100 shadow-[0_-4px_20px_0_rgba(0,0,0,0.08)] px-4 py-3 pb-safe-offset-2">
                <div className="flex items-center gap-3">
                    <a
                        href={`tel:${phone.replace(/\s+/g, '')}`}
                        className="flex-1 flex flex-col items-center justify-center gap-1 py-2 text-[#4B5563] active:bg-slate-50 transition-colors rounded-lg"
                    >
                        <Phone className="w-5 h-5" />
                        <span className="text-[10px] font-bold">拨打电话</span>
                    </a>
                    
                    <button
                        onClick={() => setIsDemoModalOpen(true)}
                        className="flex-[2] flex items-center justify-center gap-2 py-3.5 bg-[#E60012] text-white rounded-xl shadow-[0_4px_12px_0_rgba(230,0,18,0.3)] active:scale-[0.98] transition-all"
                    >
                        <Presentation className="w-5 h-5" />
                        <span className="text-sm font-bold tracking-wide">预约专家评估</span>
                    </button>
                    
                    <button
                        className="flex-1 flex flex-col items-center justify-center gap-1 py-2 text-[#4B5563] active:bg-slate-50 transition-colors rounded-lg"
                        onClick={() => setIsConsultModalOpen(true)}
                    >
                        <MessageSquare className="w-5 h-5" />
                        <span className="text-[10px] font-bold">在线咨询</span>
                    </button>
                </div>
            </div>
            
            <DemoRequestModal
                isOpen={isDemoModalOpen}
                onClose={() => setIsDemoModalOpen(false)}
            />

            <ConsultationModal 
                isOpen={isConsultModalOpen}
                onClose={() => setIsConsultModalOpen(false)}
                data={contactData}
            />
        </>
    )
}
