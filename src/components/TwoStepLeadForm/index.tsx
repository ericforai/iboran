'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useForm, type UseFormRegister, type FieldErrors } from 'react-hook-form'
import { ChevronRight, CheckCircle2, Loader2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface TwoStepLeadFormProps {
  onSubmit: (data: LeadFormData) => Promise<void>
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

interface Step1Props {
  register: UseFormRegister<LeadFormData>
  errors: FieldErrors<LeadFormData>
  isLoading: boolean
}

interface Step2Props {
  register: UseFormRegister<LeadFormData>
  errors: FieldErrors<LeadFormData>
  isLoading: boolean
  error: string | null
  onBack: () => void
}

const ROLE_OPTIONS = [
  { label: '企业决策者', value: 'executive' },
  { label: 'IT/技术负责人', value: 'it' },
  { label: '财务负责人', value: 'finance' },
  { label: '业务负责人', value: 'business' },
  { label: '其他', value: 'other' },
]

const SYSTEM_OPTIONS = [
  { label: '用友', value: 'yonyou' },
  { label: '金蝶', value: 'kingdee' },
  { label: 'SAP', value: 'sap' },
  { label: 'Oracle', value: 'oracle' },
  { label: '暂无系统', value: 'none' },
  { label: '其他', value: 'other' },
]

export const TwoStepLeadForm: React.FC<TwoStepLeadFormProps> = ({ onSubmit, source }) => {
  const [step, setStep] = useState<1 | 2>(1)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [coreData, setCoreData] = useState<Partial<LeadFormData>>({})

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LeadFormData>()

  const handleStep1Submit = async (data: Pick<LeadFormData, 'name' | 'company' | 'phone'>) => {
    setCoreData(data)
    setStep(2)
  }

  const handleFinalSubmit = async (data: LeadFormData) => {
    setIsLoading(true)
    setError(null)
    try {
      await onSubmit({ ...coreData, ...data, source })
      setIsSuccess(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : '提交失败，请稍后重试')
    } finally {
      setIsLoading(false)
    }
  }

  if (isSuccess) {
    return <SuccessState onAddMore={() => { setIsSuccess(false); setStep(2) }} onClose={() => setIsSuccess(false)} />
  }

  return (
    <form onSubmit={step === 1 ? handleSubmit(handleStep1Submit) : handleSubmit(handleFinalSubmit)}>
      <AnimatePresence mode="wait">
        {step === 1 && (
          <Step1 key="step1" register={register} errors={errors} isLoading={isLoading} />
        )}
        {step === 2 && (
          <Step2
            key="step2"
            register={register}
            errors={errors}
            isLoading={isLoading}
            error={error}
            onBack={() => setStep(1)}
          />
        )}
      </AnimatePresence>
    </form>
  )
}

// Step 1: 核心信息（必填）
const Step1: React.FC<Step1Props> = ({ register, errors, isLoading }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    className="space-y-4"
  >
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-[#1F2329] mb-1.5">
          姓名 <span className="text-[#E60012]">*</span>
        </label>
        <input
          {...register('name', { required: '请输入姓名' })}
          type="text"
          placeholder="您的姓名"
          className={`w-full px-4 py-2.5 border rounded-lg text-base md:text-sm focus:outline-none focus:ring-2 focus:ring-[#0052D9]/20 ${
            errors.name ? 'border-red-300' : 'border-slate-200'
          }`}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-[#1F2329] mb-1.5">
          公司名称 <span className="text-[#E60012]">*</span>
        </label>
        <input
          {...register('company', { required: '请输入公司名称' })}
          type="text"
          placeholder="您的公司"
          className={`w-full px-4 py-2.5 border rounded-lg text-base md:text-sm focus:outline-none focus:ring-2 focus:ring-[#0052D9]/20 ${
            errors.company ? 'border-red-300' : 'border-slate-200'
          }`}
        />
      </div>
    </div>
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
        className={`w-full px-4 py-2.5 border rounded-lg text-base md:text-sm focus:outline-none focus:ring-2 focus:ring-[#0052D9]/20 ${
          errors.phone ? 'border-red-300' : 'border-slate-200'
        }`}
      />
    </div>
    <button
      type="submit"
      disabled={isLoading}
      className="w-full py-3 bg-[#E60012] hover:bg-red-700 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
    >
      {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : '下一步'}
      <ChevronRight className="w-4 h-4" />
    </button>
  </motion.div>
)

// Step 2: 补充信息（可选）
const Step2: React.FC<Step2Props> = ({ register, errors, isLoading, error, onBack }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    className="space-y-4"
  >
    <p className="text-sm text-slate-500 bg-slate-50 p-3 rounded-lg">
      补充以下信息可帮助我们更好地了解您的需求（选填）
    </p>

    <div className="grid grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-[#1F2329] mb-1.5">邮箱</label>
        <input
          {...register('email', {
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: '请输入有效邮箱' },
          })}
          type="email"
          placeholder="您的邮箱"
          className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0052D9]/20 ${
            errors.email ? 'border-red-300' : 'border-slate-200'
          }`}
        />
        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-[#1F2329] mb-1.5">您的角色</label>
        <select {...register('role')} className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm bg-white">
          <option value="">请选择</option>
          {ROLE_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>

    <div>
      <label className="block text-sm font-medium text-[#1F2329] mb-1.5">当前使用的系统</label>
      <select {...register('currentSystem')} className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm bg-white">
        <option value="">请选择</option>
        {SYSTEM_OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>

    <div>
      <label className="block text-sm font-medium text-[#1F2329] mb-1.5">备注</label>
      <textarea
        {...register('message')}
        rows={2}
        placeholder="请简要描述您的需求"
        className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm resize-none"
      />
    </div>

    {error && <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg">{error}</div>}

    <div className="flex gap-3">
      <button
        type="button"
        onClick={onBack}
        className="px-6 py-3 border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-50"
      >
        返回
      </button>
      <button
        type="submit"
        disabled={isLoading}
        className="flex-1 py-3 bg-[#E60012] hover:bg-red-700 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
      >
        {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : '提交预约'}
      </button>
    </div>
  </motion.div>
)

// 成功态 - 销售接管设计
const SuccessState: React.FC<{ onAddMore: () => void; onClose: () => void }> = ({ onAddMore, onClose }) => (
  <div className="text-center py-8">
    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
      <CheckCircle2 className="w-8 h-8 text-green-600" />
    </div>
    <h3 className="text-xl font-bold text-[#1F2329] mb-3">预约提交成功！</h3>
    <p className="text-slate-600 mb-6">
      我们的项目顾问将在 <strong className="text-[#E60012]">1 个工作日内</strong>与您联系
    </p>

    <div className="bg-slate-50 rounded-xl p-4 mb-6 text-left">
      <p className="text-sm font-medium text-[#1F2329] mb-3">接下来您可以：</p>
      <ul className="space-y-2 text-sm text-slate-600">
        <li className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-green-500" />
          <Link href="/cases" className="hover:text-[#0052D9]">查看同行业成功案例</Link>
        </li>
        <li className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-green-500" />
          <Link href="/solution" className="hover:text-[#0052D9]">了解详细的解决方案</Link>
        </li>
      </ul>
    </div>

    <button
      onClick={onAddMore}
      className="text-sm text-[#0052D9] hover:underline mb-6"
    >
      补充更多信息可提高响应效率
    </button>

    <button onClick={onClose} className="w-full py-3 bg-[#0052D9] text-white rounded-lg font-medium hover:bg-blue-700">
      关闭
    </button>
  </div>
)
