'use client'

import React, { useCallback } from 'react'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAttribution } from '@/providers/Attribution'
import { TwoStepLeadForm } from '@/components/TwoStepLeadForm'

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

export const DemoRequestModal: React.FC<DemoRequestModalProps> = ({ isOpen, onClose, source }) => {
    const attribution = useAttribution()

    const onSubmit = useCallback(async (data: LeadFormData) => {
        // 1. Get Form ID by title
        const idRes = await fetch('/api/identify-form?title=Expert Demo')
        if (!idRes.ok) {
            console.error('Form ID fetch failed:', await idRes.text())
            throw new Error('未找到对应表单配置，请联系管理员')
        }
        const { id: formID } = await idRes.json()

        // 2. Format data for Payload form submission
        const submissionData = Object.entries(data)
            .filter(([, value]) => value !== undefined && value !== '')
            .map(([field, value]) => ({ field, value }))

        // Add Attribution Data
        if (attribution) {
            if (attribution.utm_source) submissionData.push({ field: 'utm_source', value: attribution.utm_source })
            if (attribution.utm_medium) submissionData.push({ field: 'utm_medium', value: attribution.utm_medium })
            if (attribution.utm_campaign) submissionData.push({ field: 'utm_campaign', value: attribution.utm_campaign })
            if (attribution.utm_term) submissionData.push({ field: 'utm_term', value: attribution.utm_term })
            if (attribution.referrer) submissionData.push({ field: 'referrer', value: attribution.referrer })
            if (attribution.landing_page) submissionData.push({ field: 'landing_page', value: attribution.landing_page })
            if (attribution.history && attribution.history.length > 0) {
                submissionData.push({ field: 'viewed_pages', value: attribution.history.join(' -> ') })
            }
        }

        // 3. Submit to Payload Form Builder API
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL || ''}/api/form-submissions`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                form: formID,
                submissionData,
            }),
        })

        const resJson = await response.json()

        if (!response.ok) {
            console.error('Submission failed:', resJson)
            throw new Error(resJson.errors?.[0]?.message || '提交失败，请稍后重试')
        }
    }, [attribution])

    const handleClose = useCallback(() => {
        onClose()
    }, [onClose])

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4"
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
                            <TwoStepLeadForm onSubmit={onSubmit} source={source} />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default DemoRequestModal
