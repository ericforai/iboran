'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Lock, ChevronRight, Loader2, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'

export interface WhitepaperGateProps {
  title: string
  onUnlock: (data: GateFormData) => Promise<void>
  isUnlocking?: boolean
}

export interface GateFormData {
  name: string
  company: string
  phone: string
}

export const WhitepaperGate: React.FC<WhitepaperGateProps> = ({
  title,
  onUnlock,
  isUnlocking = false,
}) => {
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GateFormData>()

  const onSubmit = async (data: GateFormData) => {
    setError(null)
    try {
      await onUnlock(data)
      setIsSuccess(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : '提交失败，请稍后重试')
    }
  }

  if (isSuccess) {
    return (
      <div className="text-center py-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </motion.div>
        <h3 className="text-xl font-bold text-[#1F2329] mb-2">解锁成功！</h3>
        <p className="text-slate-600 text-sm">正在为您加载完整内容...</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#E60012] h-full">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
          <Lock className="w-5 h-5 text-[#E60012]" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-[#1F2329]">解锁完整内容</h3>
          <p className="text-xs text-slate-500">填写信息即可免费阅读全文</p>
          <p className="text-[11px] text-slate-400 mt-1">《{title}》</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <div>
          <input
            {...register('name', { required: '请输入姓名' })}
            type="text"
            placeholder="姓名 *"
            className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#E60012]/20 transition-all ${
              errors.name ? 'border-red-300' : 'border-slate-200'
            }`}
          />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
        </div>

        <div>
          <input
            {...register('company', { required: '请输入公司名称' })}
            type="text"
            placeholder="公司名称 *"
            className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#E60012]/20 transition-all ${
              errors.company ? 'border-red-300' : 'border-slate-200'
            }`}
          />
          {errors.company && <p className="mt-1 text-xs text-red-500">{errors.company.message}</p>}
        </div>

        <div>
          <input
            {...register('phone', {
              required: '请输入手机号',
              pattern: { value: /^1[3-9]\d{9}$/, message: '请输入有效手机号' },
            })}
            type="tel"
            placeholder="联系电话 *"
            className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#E60012]/20 transition-all ${
              errors.phone ? 'border-red-300' : 'border-slate-200'
            }`}
          />
          {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
        </div>

        {error && <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg">{error}</div>}

        <button
          type="submit"
          disabled={isUnlocking}
          className="w-full py-3 bg-[#E60012] hover:bg-red-700 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isUnlocking ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              提交中...
            </>
          ) : (
            <>
              立即解锁阅读
              <ChevronRight className="w-4 h-4" />
            </>
          )}
        </button>

                  <p className="text-sm text-slate-500">
                    已有 438 人解锁阅读
                  </p>
      </form>
    </div>
  )
}
