// Input: useConversionTracking hook, Contact global data
// Output: 咨询模态框 UI 组件，跟踪微信复制和电话点击转化
// Pos: components/ConsultationModal - 模态框组件
// 一旦我被更新，务必更新我的开头注释，以及所属的文件夹的 md。
'use client'

import React from 'react'
import { X, MessageSquare, Phone, Copy, Check } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import type { Contact } from '@/payload-types'
import { useConversionTracking } from '@/hooks/useConversionTracking'

interface ConsultationModalProps {
    isOpen: boolean
    onClose: () => void
    data?: Contact
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose, data }) => {
    const [isMounted, setIsMounted] = React.useState(false)
    const [copied, setCopied] = React.useState(false)
    const { trackWeChatCopy, trackPhoneCall } = useConversionTracking()

    // Store timer ID for cleanup to prevent memory leak
    const copiedTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null)

    React.useEffect(() => {
        setIsMounted(true)
        // Cleanup: clear any pending timeout when component unmounts
        return () => {
            if (copiedTimerRef.current) {
                clearTimeout(copiedTimerRef.current)
            }
        }
    }, [])

    // Use dynamic data with hardcoded fallbacks just in case
    const wechatId = data?.wechatId || 'boran_software'
    const phone = data?.phone || '400-9955-161'
    const qrUrl = typeof data?.wechatQR === 'object' ? data.wechatQR?.url : null

    const handleCopy = () => {
        const copyToClipboard = (text: string): Promise<boolean> => {
            // Check if clipboard API is available
            if (navigator.clipboard && window.isSecureContext) {
                return navigator.clipboard.writeText(text)
                    .then(() => true)
                    .catch(() => false)
            }
            // Fallback for non-secure contexts or older browsers
            return Promise.resolve().then(() => {
                const textArea = document.createElement('textarea')
                textArea.value = text
                textArea.style.position = 'fixed'
                textArea.style.left = '-9999px'
                textArea.style.top = '0'
                textArea.setAttribute('readonly', '')
                document.body.appendChild(textArea)
                textArea.focus()
                textArea.select()
                try {
                    const successful = document.execCommand('copy')
                    document.body.removeChild(textArea)
                    return successful
                } catch {
                    document.body.removeChild(textArea)
                    return false
                }
            })
        }

        copyToClipboard(wechatId).then((success) => {
            if (success) {
                setCopied(true)
                trackWeChatCopy('modal')
                // Clear previous timer if exists to prevent duplicate timers
                if (copiedTimerRef.current) {
                    clearTimeout(copiedTimerRef.current)
                }
                // Store timer ID for cleanup
                copiedTimerRef.current = setTimeout(() => setCopied(false), 2000)
            }
        })
    }

    const handlePhoneClick = () => {
        trackPhoneCall('modal')
    }

    if (!isMounted) return null

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200]"
                    />

                    {/* Modal Wrapper - Ensures absolute centering and handles click-outside */}
                    <div 
                        className="fixed inset-0 z-[201] flex items-center justify-center p-4"
                        onClick={onClose}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                            className="relative w-full max-w-[380px] bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[calc(100vh-2rem)] overflow-y-auto"
                        >
                            <div className="p-6">
                                <button
                                    onClick={onClose}
                                    className="absolute right-4 top-4 p-2 hover:bg-slate-100 rounded-full transition-colors z-20 bg-white/80 backdrop-blur-sm"
                                >
                                    <X className="w-5 h-5 text-slate-400" />
                                </button>

                                <div className="text-center mb-4">
                                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-3">
                                        <MessageSquare className="w-6 h-6 text-[#0052D9]" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#1F2329] mb-1">在线专家咨询</h3>
                                    <p className="text-slate-500 text-xs">扫码或添加微信，获取 1 对 1 专业服务</p>
                                </div>

                                {/* QR Code Container */}
                                <div className="relative aspect-square w-full max-w-[280px] mx-auto mb-6 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center p-2 overflow-hidden shadow-inner">
                                    <Image 
                                        src={qrUrl || '/assets/wechat-consultant-v2.jpg'} 
                                        alt="WeChat QR" 
                                        fill 
                                        className="object-contain p-2"
                                        priority
                                    />
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                                        <div className="flex items-center gap-3">
                                            <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center shadow-sm">
                                                <span className="text-[10px] font-bold text-green-500">微信</span>
                                            </div>
                                            <span className="font-bold text-[#1F2329] font-mono text-sm">{wechatId}</span>
                                        </div>
                                        <button
                                            onClick={handleCopy}
                                            className="flex items-center gap-1 px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-[10px] font-bold text-slate-600 hover:border-[#0052D9] hover:text-[#0052D9] transition-all"
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
                                        onClick={handlePhoneClick}
                                        className="flex items-center justify-center gap-2 w-full py-4 bg-[#0052D9] text-white rounded-2xl font-bold text-lg shadow-lg shadow-blue-200 active:scale-[0.98] transition-all"
                                    >
                                        <Phone className="w-5 h-5 fill-current" />
                                        <span>{phone}</span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>,
        document.body
    )
}

export default ConsultationModal
