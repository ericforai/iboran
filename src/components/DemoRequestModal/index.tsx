'use client'

import React, { useCallback } from 'react'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { createPortal } from 'react-dom'
import { useAttribution } from '@/providers/Attribution'
import { TwoStepLeadForm } from '@/components/TwoStepLeadForm'
import { getClientSideURL } from '@/utilities/getURL'

interface DemoRequestModalProps {
    isOpen: boolean
    onClose: () => void
    source?: string
}

interface LeadFormData {
    name: string
    company: string
    phone: string
    email?: string
    role?: string
    currentSystem?: string
    message?: string
    source?: string
}

export const DemoRequestModal: React.FC<DemoRequestModalProps> = ({ isOpen, onClose, source: sourceProp = 'demo-modal' }) => {
    const [isMounted, setIsMounted] = React.useState(false)
    const attribution = useAttribution()

    React.useEffect(() => {
        setIsMounted(true)
    }, [])

    const onSubmit = useCallback(async (data: LeadFormData) => {
        // Generate dynamic source based on current page path
        const currentPath = typeof window !== 'undefined' ? window.location.pathname : ''
        const currentUrl = typeof window !== 'undefined' ? window.location.href : ''
        let finalSource = sourceProp
        let pageSlug = ''  // Store article/product slug for title lookup

        // If source is the default demo-modal, enhance it with current path
        if (sourceProp === 'demo-modal' && currentPath) {
            if (currentPath.startsWith('/posts/')) {
                // Extract article slug: /posts/erp-budget-overrun-reasons -> erp-budget-overrun-reasons
                pageSlug = currentPath.split('/')[2] || ''
                finalSource = 'blog-post-demo'
            } else if (currentPath.startsWith('/products/')) {
                const productSlug = currentPath.split('/')[2]
                pageSlug = productSlug
                finalSource = `product-${productSlug}-demo`
            } else if (currentPath.startsWith('/solution/')) {
                pageSlug = currentPath.split('/')[2] || ''
                finalSource = 'solution-page-demo'
            } else if (currentPath.startsWith('/cases/')) {
                pageSlug = currentPath.split('/')[2] || ''
                finalSource = 'case-study-demo'
            } else if (currentPath === '/about') {
                finalSource = 'about-page-demo'
            }
        }

        // Submit directly to /api/leads (no form ID needed)
        const response = await fetch(`${getClientSideURL()}/api/leads`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: data.name,
                company: data.company,
                phone: data.phone,
                email: data.email,
                role: data.role,
                currentSystem: data.currentSystem,
                message: data.message,
                source: finalSource,
                sourcePath: currentPath || '',
                sourcePageUrl: currentUrl || '',
                pageSlug: pageSlug,  // Include slug for server-side title lookup
                utmData: attribution ? {
                    utm_source: attribution.utm_source || '',
                    utm_medium: attribution.utm_medium || '',
                    utm_campaign: attribution.utm_campaign || '',
                    utm_content: attribution.utm_content || '',
                    utm_term: attribution.utm_term || '',
                    referrer: attribution.referrer || '',
                    landingPage: attribution.landing_page || window.location.href,
                    pageHistory: attribution.history || [],
                } : undefined,
            }),
        })

        const resJson = await response.json()

        if (!response.ok) {
            console.error('Submission failed:', resJson)
            const errorMsg = resJson.error || resJson.message || '提交失败，请稍后重试'
            throw new Error(errorMsg)
        }

        return resJson
    }, [attribution, sourceProp])

    const handleClose = useCallback(() => {
        onClose()
    }, [onClose])

    if (!isMounted) return null

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[201] flex items-center justify-center p-4"
                >
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={handleClose}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-[#E60012] to-red-600 px-6 py-5 text-white">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h2 className="text-xl font-bold">预约专家演示</h2>
                                    <p className="text-sm text-white/80 mt-1">我们的顾问将在 1 个工作日内与您联系</p>
                                </div>
                                <button
                                    onClick={handleClose}
                                    className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <TwoStepLeadForm onSubmit={onSubmit} source={sourceProp} />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    )
}

export default DemoRequestModal
