// Input: useConversionTracking hook, DemoRequestModal, ConsultationModal, Contact global data
// Output: 移动端底部栏组件，跟踪微信打开和电话点击转化
// Pos: components/MobileStickyBar - 移动端底部栏组件
// 一旦我被更新，务必更新我的开头注释，以及所属的文件夹的 md。
'use client'

import React, { useState } from 'react'
import { Phone, MessageSquare, Presentation, Sparkles } from 'lucide-react'
import type { Contact } from '@/payload-types'
import { DemoRequestModal } from '@/components/DemoRequestModal'
import { ConsultationModal } from '@/components/ConsultationModal'
import { useConversionTracking } from '@/hooks/useConversionTracking'

export const MobileStickyBar: React.FC<{ contactData?: Contact }> = React.memo(({ contactData }) => {
    const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)
    const [isConsultModalOpen, setIsConsultModalOpen] = useState(false)
    const { trackWeChatOpen, trackPhoneCall } = useConversionTracking()

    const handleOpenDemo = React.useCallback(() => setIsDemoModalOpen(true), [])
    const handleCloseDemo = React.useCallback(() => setIsDemoModalOpen(false), [])
    const handleOpenConsult = React.useCallback(() => {
        window.dispatchEvent(new CustomEvent('open-ai-consultant'))
    }, [])
    const handleCloseConsult = React.useCallback(() => setIsConsultModalOpen(false), [])
    const handlePhoneClick = React.useCallback(() => {
        trackPhoneCall('mobile-sticky')
    }, [trackPhoneCall])

    const phone = contactData?.phone || '400-9955-161'

    return (
        <>
            <div className="lg:hidden fixed bottom-0 inset-x-0 z-[110] bg-white/95 backdrop-blur-md border-t border-slate-100 shadow-[0_-4px_20px_0_rgba(0,0,0,0.08)] px-4 pt-3 pb-safe-offset-2 overflow-hidden touch-pan-y select-none">
                <div className="grid grid-cols-4 items-center gap-2 w-full max-w-full">
                    <a
                        href={`tel:${phone.replace(/\s+/g, '')}`}
                        onClick={handlePhoneClick}
                        className="col-span-1 flex flex-col items-center justify-center gap-1 py-1.5 text-[#4B5563] active:bg-slate-50 transition-colors rounded-lg min-w-0"
                    >
                        <Phone className="w-5 h-5 flex-shrink-0" />
                        <span className="text-[10px] font-bold truncate w-full text-center">拨打电话</span>
                    </a>
                    
                    <button
                        onClick={handleOpenDemo}
                        className="col-span-2 flex flex-col items-center justify-center gap-1 py-2.5 bg-[#E60012] text-white rounded-xl shadow-[0_4px_12px_0_rgba(230,0,18,0.3)] active:scale-[0.98] transition-all min-w-0"
                    >
                        <Presentation className="w-5 h-5 flex-shrink-0" />
                        <span className="text-[10px] font-bold tracking-wide truncate w-full text-center px-1">预约专家评估</span>
                    </button>
                    
                    <button
                        className="col-span-1 flex flex-col items-center justify-center gap-1 py-1.5 text-[#4B5563] active:bg-slate-50 transition-colors rounded-lg min-w-0"
                        onClick={handleOpenConsult}
                    >
                        <Sparkles className="w-5 h-5 flex-shrink-0" />
                        <span className="text-[10px] font-bold truncate w-full text-center">AI 客服</span>
                    </button>
                </div>
            </div>
            
            <DemoRequestModal
                isOpen={isDemoModalOpen}
                onClose={handleCloseDemo}
            />

            <ConsultationModal 
                isOpen={isConsultModalOpen}
                onClose={handleCloseConsult}
                data={contactData}
            />
        </>
    )
})

MobileStickyBar.displayName = 'MobileStickyBar'
