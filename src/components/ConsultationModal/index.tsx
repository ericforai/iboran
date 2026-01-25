'use client'

import React from 'react'
import { X, MessageSquare, Phone, Copy, Check } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import type { Contact } from '@/payload-types'

interface ConsultationModalProps {
    isOpen: boolean
    onClose: () => void
    data?: Contact
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose, data }) => {
    const [copied, setCopied] = React.useState(false)
    
    // Use dynamic data with hardcoded fallbacks just in case
    const wechatId = data?.wechatId || 'boran_software'
    const phone = data?.phone || '400-9955-161'
    const qrUrl = typeof data?.wechatQR === 'object' ? data.wechatQR?.url : null

    const handleCopy = () => {
        navigator.clipboard.writeText(wechatId)
            .then(() => {
                setCopied(true)
                setTimeout(() => setCopied(false), 2000)
                // Attempt to open WeChat
                window.location.href = 'weixin://'
            })
            .catch(() => {
                // Fallback for older browsers or if permission denied
                setCopied(true)
                setTimeout(() => setCopied(false), 2000)
            })
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed left-4 right-4 top-1/2 -translate-y-1/2 md:left-1/2 md:right-auto md:w-[400px] md:-translate-x-1/2 bg-white rounded-3xl shadow-2xl z-[101] overflow-hidden"
                    >
                        <div className="relative p-8">
                            <button
                                onClick={onClose}
                                className="absolute right-4 top-4 p-2 hover:bg-slate-100 rounded-full transition-colors"
                            >
                                <X className="w-5 h-5 text-slate-400" />
                            </button>

                            <div className="text-center mb-8">
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <MessageSquare className="w-8 h-8 text-[#0052D9]" />
                                </div>
                                <h3 className="text-2xl font-bold text-[#1F2329] mb-2">在线专家咨询</h3>
                                <p className="text-slate-500 text-sm">扫码或添加微信，获取 1 对 1 专业服务</p>
                            </div>

                            {/* QR Code Container */}
                            <div className="relative aspect-square w-48 mx-auto mb-8 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center p-2 overflow-hidden">
                                <Image 
                                    src={qrUrl || '/assets/wechat-consultant-v2.jpg'} 
                                    alt="WeChat QR" 
                                    fill 
                                    className="object-contain p-2"
                                    priority
                                />
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
                                            <span className="text-xs font-bold text-green-500">微信</span>
                                        </div>
                                        <span className="font-bold text-[#1F2329] font-mono">{wechatId}</span>
                                    </div>
                                    <button
                                        onClick={handleCopy}
                                        className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:border-[#0052D9] hover:text-[#0052D9] transition-all"
                                    >
                                        {copied ? (
                                            <>
                                                <Check className="w-3 h-3" />
                                                <span>已复制</span>
                                            </>
                                        ) : (
                                            <>
                                                <Copy className="w-3 h-3" />
                                                <span className="">复制微信号</span>
                                            </>
                                        )}
                                    </button>
                                </div>

                                <a
                                    href={`tel:${phone.replace(/\s+/g, '')}`}
                                    className="flex items-center justify-center gap-2 w-full py-4 bg-[#0052D9] text-white rounded-2xl font-bold shadow-lg shadow-blue-200 active:scale-[0.98] transition-all"
                                >
                                    <Phone className="w-5 h-5" />
                                    <span>拨打咨询热线</span>
                                </a>
                            </div>

                            <p className="text-center mt-6 text-[11px] text-slate-400 uppercase tracking-widest font-medium">
                                Boran Software Service Team
                            </p>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

export default ConsultationModal
