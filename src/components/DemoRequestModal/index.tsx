'use client'

import React, { useState, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { X, Loader2, CheckCircle2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface DemoRequestModalProps {
    isOpen: boolean
    onClose: () => void
}

interface FormData {
    name: string
    company: string
    phone: string
    email?: string
    industry?: string
    message?: string
}

const industries = [
    { label: '制造业', value: 'manufacturing' },
    { label: '零售业', value: 'retail' },
    { label: '金融业', value: 'finance' },
    { label: '服务业', value: 'service' },
    { label: '其他', value: 'other' },
]

export const DemoRequestModal: React.FC<DemoRequestModalProps> = ({ isOpen, onClose }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>()

    const onSubmit = useCallback(async (data: FormData) => {
        setIsLoading(true)
        setError(null)

        try {
            // Format data for Payload form submission
            const submissionData = Object.entries(data)
                .filter(([, value]) => value !== undefined && value !== '')
                .map(([field, value]) => ({ field, value }))

            const response = await fetch('/api/form-submissions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    form: 'demo-request', // Will match by title or ID
                    submissionData,
                }),
            })

            if (!response.ok) {
                throw new Error('提交失败，请稍后重试')
            }

            setIsSuccess(true)
            reset()
        } catch (err) {
            setError(err instanceof Error ? err.message : '提交失败，请稍后重试')
        } finally {
            setIsLoading(false)
        }
    }, [reset])

    const handleClose = useCallback(() => {
        setIsSuccess(false)
        setError(null)
        reset()
        onClose()
    }, [onClose, reset])

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
                            {isSuccess ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-center py-8"
                                >
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <CheckCircle2 className="w-8 h-8 text-green-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#1F2329] mb-2">感谢您的预约申请！</h3>
                                    <p className="text-slate-600">我们的专家顾问将在 1 个工作日内与您联系</p>
                                    <button
                                        onClick={handleClose}
                                        className="mt-6 px-6 py-2.5 bg-[#0052D9] text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                                    >
                                        关闭
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                    {/* Row 1: Name & Company */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-[#1F2329] mb-1.5">
                                                姓名 <span className="text-[#E60012]">*</span>
                                            </label>
                                            <input
                                                {...register('name', { required: '请输入姓名' })}
                                                type="text"
                                                placeholder="您的姓名"
                                                className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0052D9]/20 focus:border-[#0052D9] transition-colors ${errors.name ? 'border-red-300 bg-red-50' : 'border-slate-200'
                                                    }`}
                                            />
                                            {errors.name && (
                                                <p className="text-xs text-[#E60012] mt-1">{errors.name.message}</p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-[#1F2329] mb-1.5">
                                                公司名称 <span className="text-[#E60012]">*</span>
                                            </label>
                                            <input
                                                {...register('company', { required: '请输入公司名称' })}
                                                type="text"
                                                placeholder="您的公司"
                                                className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0052D9]/20 focus:border-[#0052D9] transition-colors ${errors.company ? 'border-red-300 bg-red-50' : 'border-slate-200'
                                                    }`}
                                            />
                                            {errors.company && (
                                                <p className="text-xs text-[#E60012] mt-1">{errors.company.message}</p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Row 2: Phone & Email */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-[#1F2329] mb-1.5">
                                                手机号 <span className="text-[#E60012]">*</span>
                                            </label>
                                            <input
                                                {...register('phone', {
                                                    required: '请输入手机号',
                                                    pattern: { value: /^1[3-9]\d{9}$/, message: '请输入有效手机号' },
                                                })}
                                                type="tel"
                                                placeholder="您的手机号"
                                                className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0052D9]/20 focus:border-[#0052D9] transition-colors ${errors.phone ? 'border-red-300 bg-red-50' : 'border-slate-200'
                                                    }`}
                                            />
                                            {errors.phone && (
                                                <p className="text-xs text-[#E60012] mt-1">{errors.phone.message}</p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-[#1F2329] mb-1.5">
                                                邮箱
                                            </label>
                                            <input
                                                {...register('email', {
                                                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: '请输入有效邮箱' },
                                                })}
                                                type="email"
                                                placeholder="您的邮箱（选填）"
                                                className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0052D9]/20 focus:border-[#0052D9] transition-colors ${errors.email ? 'border-red-300 bg-red-50' : 'border-slate-200'
                                                    }`}
                                            />
                                            {errors.email && (
                                                <p className="text-xs text-[#E60012] mt-1">{errors.email.message}</p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Row 3: Industry */}
                                    <div>
                                        <label className="block text-sm font-medium text-[#1F2329] mb-1.5">
                                            所属行业
                                        </label>
                                        <select
                                            {...register('industry')}
                                            className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0052D9]/20 focus:border-[#0052D9] transition-colors bg-white"
                                        >
                                            <option value="">请选择行业（选填）</option>
                                            {industries.map((ind) => (
                                                <option key={ind.value} value={ind.value}>
                                                    {ind.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Row 4: Message */}
                                    <div>
                                        <label className="block text-sm font-medium text-[#1F2329] mb-1.5">
                                            备注
                                        </label>
                                        <textarea
                                            {...register('message')}
                                            rows={3}
                                            placeholder="请简要描述您的需求（选填）"
                                            className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0052D9]/20 focus:border-[#0052D9] transition-colors resize-none"
                                        />
                                    </div>

                                    {/* Error Message */}
                                    {error && (
                                        <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-[#E60012]">
                                            {error}
                                        </div>
                                    )}

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full py-3 bg-[#E60012] hover:bg-red-700 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {isLoading ? (
                                            <>
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                                提交中...
                                            </>
                                        ) : (
                                            '提交预约'
                                        )}
                                    </button>

                                    <p className="text-xs text-center text-slate-500">
                                        提交即表示您同意我们的隐私政策
                                    </p>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default DemoRequestModal
