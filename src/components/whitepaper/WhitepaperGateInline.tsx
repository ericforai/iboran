'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Lock, ChevronRight, Loader2, CheckCircle2 } from 'lucide-react'
import type { GateFormData } from './WhitepaperGate'

export interface WhitepaperGateInlineProps {
  title: string
  onUnlock: (data: GateFormData) => Promise<void>
  isUnlocking?: boolean
}

export const WhitepaperGateInline: React.FC<WhitepaperGateInlineProps> = ({
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
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-3" />
        <h3 className="text-lg font-bold text-green-800 mb-2">解锁成功！</h3>
        <p className="text-green-700 text-sm">正在为您加载完整内容...</p>
      </div>
    )
  }

  return (
    <div className="my-12">
      {/* 分隔线 */}
      <div className="flex items-center gap-4 mb-8">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="flex items-center gap-2 text-slate-400">
          <Lock className="w-4 h-4" />
          <span className="text-sm font-medium">以下内容需要解锁</span>
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      {/* 模糊预览 */}
      <div className="relative mb-8">
        <div className="bg-slate-50 rounded-xl p-8 border border-slate-100">
          <div className="space-y-3">
            <div className="h-4 bg-slate-200 rounded animate-pulse" />
            <div className="h-4 bg-slate-200 rounded w-3/4 animate-pulse" />
            <div className="h-4 bg-slate-200 rounded w-1/2 animate-pulse" />
          </div>
          <div className="absolute inset-0 backdrop-blur-sm rounded-xl flex items-center justify-center bg-white/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white rounded-xl shadow-xl p-6 border border-slate-200">
              <Lock className="w-8 h-8 text-[#E60012] mx-auto mb-2" />
              <p className="text-sm font-medium text-slate-700">完整内容需解锁查看</p>
            </div>
          </div>
        </div>
      </div>

      {/* 表单 */}
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#E60012]">
          <h3 className="text-lg font-bold text-[#1F2329] mb-1 text-center">
            免费解锁完整白皮书
          </h3>
          <p className="text-xs text-slate-500 text-center mb-4">
            《{title}》全文共 5 个章节，约 8000 字
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <div>
              <input
                {...register('name', { required: '请输入姓名' })}
                type="text"
                placeholder="姓名 *"
                className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#E60012]/20 ${
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
                className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#E60012]/20 ${
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
                className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#E60012]/20 ${
                  errors.phone ? 'border-red-300' : 'border-slate-200'
                }`}
              />
              {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
            </div>

            {error && <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg">{error}</div>}

            <button
              type="submit"
              disabled={isUnlocking}
              className="w-full py-3 bg-[#E60012] hover:bg-red-700 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isUnlocking ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  提交中...
                </>
              ) : (
                <>
                  立即解锁全文
                  <ChevronRight className="w-4 h-4" />
                </>
              )}
            </button>

            <p className="text-xs text-slate-400 text-center">
              提交即表示您同意我们的服务条款和隐私政策
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
