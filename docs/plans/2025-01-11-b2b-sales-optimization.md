# B2B 网站销售力优化实施计划

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**目标:** 最大化官网留资率 + 有效在线咨询率，实现分层触发机制和表单转化优化。

**架构:**
- 两步式表单：核心信息（姓名/公司/手机）→ 可选补充（角色/系统/备注）
- 三层触发器：强触发（CTA按钮）、中触发（滚动/停留）、弱触发（离开意图）
- 行为追踪：EngagementTracking Hook 监听用户行为数据

**技术栈:**
- React 19, Next.js 15 App Router
- Framer Motion（动画）
- react-hook-form（表单）
- Intersection Observer API（滚动追踪）

---

## Sprint 1: 核心转化优化（表单 + 成功态 + CTA 文案）

### Task 1: 两步式表单组件

**文件:**
- Create: `src/components/TwoStepLeadForm/index.tsx`
- Modify: `src/components/DemoRequestModal/index.tsx`

**Step 1: 创建两步式表单核心组件**

```tsx
// src/components/TwoStepLeadForm/index.tsx
'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
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
    return <SuccessState onAddMore={() => setStep(2)} />
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
            coreData={coreData}
          />
        )}
      </AnimatePresence>
    </form>
  )
}

// Step 1: 核心信息（必填）
const Step1: React.FC<any> = ({ register, errors, isLoading }) => (
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
          className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0052D9]/20 ${
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
          className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0052D9]/20 ${
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
        className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0052D9]/20 ${
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
const Step2: React.FC<any> = ({ register, errors, isLoading, error, onBack, coreData }) => (
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
          className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm"
        />
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
const SuccessState: React.FC<{ onAddMore: () => void }> = ({ onAddMore }) => (
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
          <a href="/cases" className="hover:text-[#0052D9]">查看同行业成功案例</a>
        </li>
        <li className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-green-500" />
          <a href="/solution" className="hover:text-[#0052D9]">了解详细的解决方案</a>
        </li>
      </ul>
    </div>

    <button
      onClick={onAddMore}
      className="text-sm text-[#0052D9] hover:underline mb-6"
    >
      补充更多信息可提高响应效率
    </button>

    <button className="w-full py-3 bg-[#0052D9] text-white rounded-lg font-medium hover:bg-blue-700">
      关闭
    </button>
  </div>
)
```

**Step 2: 运行类型检查**

Run: `pnpm build`
Expected: 类型检查通过（或报告 TypeScript 错误）

**Step 3: 提交**

```bash
git add src/components/TwoStepLeadForm/
git commit -m "feat: add two-step lead form component"
```

---

### Task 2: 更新 DemoRequestModal 使用新表单

**文件:**
- Modify: `src/components/DemoRequestModal/index.tsx`

**Step 1: 替换表单逻辑**

编辑 `src/components/DemoRequestModal/index.tsx`，找到现有的表单部分（约第 176-307 行），替换为：

```tsx
// 在文件顶部导入新组件
import { TwoStepLeadForm } from '@/components/TwoStepLeadForm'

// 在 DemoRequestModal 组件内，替换整个表单部分
const onSubmit = useCallback(async (data: any) => {
  setIsLoading(true)
  setError(null)

  try {
    // 1. Get Form ID by title
    const idRes = await fetch('/api/identify-form?title=Expert Demo')
    if (!idRes.ok) {
      throw new Error('未找到对应表单配置，请联系管理员')
    }
    const { id: formID } = await idRes.json()

    // 2. Format data for Payload form submission
    const submissionData = Object.entries(data)
      .filter(([, value]) => value !== undefined && value !== '')
      .map(([field, value]) => ({ field, value }))

    if (source) {
      submissionData.push({ field: 'source', value: source })
    }

    // Add Attribution Data
    if (attribution) {
      if (attribution.utm_source) submissionData.push({ field: 'utm_source', value: attribution.utm_source })
      if (attribution.utm_medium) submissionData.push({ field: 'utm_medium', value: attribution.utm_medium })
      if (attribution.utm_campaign) submissionData.push({ field: 'utm_campaign', value: attribution.utm_campaign })
      if (attribution.referrer) submissionData.push({ field: 'referrer', value: attribution.referrer })
      if (attribution.landing_page) submissionData.push({ field: 'landing_page', value: attribution.landing_page })
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
      throw new Error(resJson.errors?.[0]?.message || '提交失败，请稍后重试')
    }

    return { success: true }
  } catch (err) {
    throw err
  }
}, [source, attribution])

// 在 return 的 JSX 中，找到 form 元素，替换为：
<div className="p-6">
  <TwoStepLeadForm onSubmit={onSubmit} source={source} />
</div>
```

**Step 2: 删除旧的 formState 和 useForm**

删除以下不再需要的代码：
- `const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>()`
- `const [isSuccess, setIsSuccess] = useState(false)`（现在由内部组件管理）
- `industries` 常量（已移到 TwoStepLeadForm）

**Step 3: 更新 handleClose**

```tsx
const handleClose = useCallback(() => {
  onClose()
}, [onClose])
```

**Step 4: 测试构建**

Run: `pnpm build`
Expected: 构建成功

**Step 5: 提交**

```bash
git add src/components/DemoRequestModal/index.tsx
git commit -m "refactor: use two-step lead form in DemoRequestModal"
```

---

### Task 3: 首页 Hero CTA 文案优化

**文件:**
- Modify: `src/app/(frontend)/_sections/Hero.tsx`

**Step 1: 修改 CTA 按钮文案**

找到第 80-87 行的 CTA 按钮：

```tsx
// 修改前：
<Link href="/contact" className="group relative">
  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
  <div className="relative px-8 py-4 bg-white text-slate-950 font-bold text-sm rounded-lg flex items-center gap-2 shadow-xl hover:shadow-cyan-500/20 transition-all active:scale-[0.98]">
    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
    <span>咨询专家顾问</span>  {/* 修改这里 */}
    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-950 group-hover:translate-x-1 transition-all" />
  </div>
</Link>

// 修改后：
<Link href="/contact" className="group relative">
  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
  <div className="relative px-8 py-4 bg-white text-slate-950 font-bold text-sm rounded-lg flex items-center gap-2 shadow-xl hover:shadow-cyan-500/20 transition-all active:scale-[0.98]">
    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
    <span>获取行业方案</span>
    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-950 group-hover:translate-x-1 transition-all" />
  </div>
</Link>
```

**Step 2: 提交**

```bash
git add src/app/(frontend)/_sections/Hero.tsx
git commit -m "copy: update homepage Hero CTA text"
```

---

### Task 4: Navbar CTA 文案统一

**文件:**
- Modify: `src/components/Navbar/NavbarClient.tsx`

**Step 1: 更新 PC 端 CTA 按钮文案**

找到第 282-287 行：

```tsx
// 修改前：
<button
  onClick={handleOpenDemo}
  className="hidden lg:inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white bg-[#E60012] hover:bg-red-700 rounded-md shadow-sm transition-all hover:shadow-md active:scale-95"
>
  预约专家演示
</button>

// 修改后（根据页面类型显示不同文案，先用通用文案）：
<button
  onClick={handleOpenDemo}
  className="hidden lg:inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white bg-[#E60012] hover:bg-red-700 rounded-md shadow-sm transition-all hover:shadow-md active:scale-95"
>
  预约专家评估
</button>
```

**Step 2: 更新移动端菜单 CTA**

找到第 849-854 行：

```tsx
// 修改前：
<button
  onClick={handleOpenDemo}
  className="w-full py-3 text-sm font-bold text-white bg-[#E60012] hover:bg-red-700 rounded-md shadow-sm transition-all"
>
  预约专家演示
</button>

// 修改后：
<button
  onClick={handleOpenDemo}
  className="w-full py-3 text-sm font-bold text-white bg-[#E60012] hover:bg-red-700 rounded-md shadow-sm transition-all"
>
  预约专家评估
</button>
```

**Step 3: 提交**

```bash
git add src/components/Navbar/NavbarClient.tsx
git commit -m "copy: update Navbar CTA button text"
```

---

### Task 5: MobileStickyBar CTA 文案优化

**文件:**
- Modify: `src/components/MobileStickyBar/index.tsx`

**Step 1: 更新主按钮文案**

找到第 44-49 行：

```tsx
// 修改前：
<button
  onClick={() => setIsDemoModalOpen(true)}
  className="flex-[2] flex items-center justify-center gap-2 py-3.5 bg-[#E60012] text-white rounded-xl shadow-[0_4px_12px_0_rgba(230,0,18,0.3)] active:scale-[0.98] transition-all"
>
  <Presentation className="w-5 h-5" />
  <span className="text-sm font-bold tracking-wide">预约专家演示</span>
</button>

// 修改后：
<button
  onClick={() => setIsDemoModalOpen(true)}
  className="flex-[2] flex items-center justify-center gap-2 py-3.5 bg-[#E60012] text-white rounded-xl shadow-[0_4px_12px_0_rgba(230,0,18,0.3)] active:scale-[0.98] transition-all"
>
  <Presentation className="w-5 h-5" />
  <span className="text-sm font-bold tracking-wide">预约专家评估</span>
</button>
```

**Step 2: 提交**

```bash
git add src/components/MobileStickyBar/index.tsx
git commit -m "copy: update MobileStickyBar CTA text"
```

---

### Task 6: 产品页 CTA 文案优化

**文件:**
- Modify: `src/app/(frontend)/products/yonsuite/CTASection.tsx`
- Modify: `src/app/(frontend)/solution/business/r2r/CTASection.tsx`

**Step 1: 更新产品页 CTA**

编辑 `src/app/(frontend)/products/yonsuite/CTASection.tsx`，找到第 43-49 行：

```tsx
// 修改前：
<button
  onClick={() => setIsDemoOpen(true)}
  className="px-10 py-5 bg-[#E60012] text-white font-bold rounded-xl hover:bg-red-700 transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-red-500/20"
>
  预约专家演示
  <MessageCircle className="w-5 h-5" />
</button>

// 修改后：
<button
  onClick={() => setIsDemoOpen(true)}
  className="px-10 py-5 bg-[#E60012] text-white font-bold rounded-xl hover:bg-red-700 transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-red-500/20"
>
  获取报价与交付周期
  <MessageCircle className="w-5 h-5" />
</button>
```

**Step 2: 更新解决方案页 CTA**

编辑 `src/app/(frontend)/solution/business/r2r/CTASection.tsx`，找到第 21-27 行：

```tsx
// 修改前：
<button
  onClick={() => setIsDemoOpen(true)}
  className="px-12 py-5 bg-[#E60012] text-white font-bold rounded-lg hover:bg-red-700 transition-all shadow-xl shadow-red-900/40 flex items-center gap-2 group text-lg"
>
  联系专家预约演示
  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
</button>

// 修改后：
<button
  onClick={() => setIsDemoOpen(true)}
  className="px-12 py-5 bg-[#E60012] text-white font-bold rounded-lg hover:bg-red-700 transition-all shadow-xl shadow-red-900/40 flex items-center gap-2 group text-lg"
>
  获取实施方案
  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
</button>
```

**Step 3: 提交**

```bash
git add src/app/(frontend)/products/yonsuite/CTASection.tsx src/app/(frontend)/solution/business/r2r/CTASection.tsx
git commit -m "copy: update product and solution CTA texts"
```

---

### Task 7: 案例页结果段后留资

**文件:**
- Modify: `src/app/(frontend)/cases/[slug]/page.tsx`

**Step 1: 在 Key Results Section 后添加留资 CTA**

找到第 233 行的 `</section>`（关键成果 section 结束），在其后添加：

```tsx
{/* SECTION 3.5: Result CTA - 新增 */}
{story.keyResults && (
  <section className="py-12">
    <div className="bg-gradient-to-r from-[#E60012] to-red-600 rounded-2xl p-8 md:p-12 text-white text-center">
      <h3 className="text-2xl md:text-3xl font-bold mb-4">
        想了解类似成果如何在您的企业实现？
      </h3>
      <p className="text-red-100 mb-8 max-w-2xl mx-auto">
        每个企业的数字化路径都不同。让我们根据您的具体情况，评估可行性与实施路径。
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          onClick={() => {
            // 触发 DemoRequestModal
            const event = new CustomEvent('open-demo-modal', {
              detail: { source: `Case_${story.slug}` }
            })
            window.dispatchEvent(event)
          }}
          className="px-8 py-4 bg-white text-[#E60012] font-bold rounded-xl hover:bg-red-50 transition-all flex items-center gap-2"
        >
          获取同类实施方案
          <ArrowRight className="w-5 h-5" />
        </button>
        <Link
          href="/cases"
          className="px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all"
        >
          查看更多案例
        </Link>
      </div>
    </div>
  </section>
)}
```

**Step 2: 在文件顶部添加 ArrowRight 导入**

找到第 6 行的 imports，添加：

```tsx
import { ArrowRight } from 'lucide-react'
```

**Step 3: 测试构建**

Run: `pnpm build`
Expected: 构建成功

**Step 4: 提交**

```bash
git add src/app/(frontend)/cases/[slug]/page.tsx
git commit -m "feat: add lead capture CTA after case results"
```

---

## Sprint 2: 触点扩容（中触发器 + 浮动按钮）

### Task 8: 创建行为追踪 Hook

**文件:**
- Create: `src/hooks/useEngagementTracking.ts`

**Step 1: 创建 Engagement Tracking Hook**

```tsx
// src/hooks/useEngagementTracking.ts
'use client'

import { useEffect, useRef, useState } from 'react'

interface EngagementMetrics {
  hasScrolled60Percent: boolean
  hasSpent90Seconds: boolean
  scrollDepth: number
  timeOnPage: number
  pageViews: number
}

interface UseEngagementTrackingOptions {
  onTrigger?: (metrics: EngagementMetrics) => void
  triggerThreshold?: {
    scrollDepth?: number // default 60
    timeOnPage?: number // default 90 seconds
  }
}

const STORAGE_KEY = 'boran_engagement'

export const useEngagementTracking = (options: UseEngagementTrackingOptions = {}) => {
  const { onTrigger, triggerThreshold = {} } = options
  const { scrollDepth: scrollThreshold = 60, timeOnPage: timeThreshold = 90 } = triggerThreshold

  const [metrics, setMetrics] = useState<EngagementMetrics>({
    hasScrolled60Percent: false,
    hasSpent90Seconds: false,
    scrollDepth: 0,
    timeOnPage: 0,
    pageViews: 1,
  })

  const hasTriggeredRef = useRef(false)
  const startTimeRef = useRef(Date.now())
  const timerRef = useRef<NodeJS.Timeout>()

  // 恢复之前的浏览数据
  useEffect(() => {
    try {
      const stored = sessionStorage.getItem(STORAGE_KEY)
      if (stored) {
        const data = JSON.parse(stored)
        setMetrics(prev => ({
          ...prev,
          pageViews: (data.pageViews || 0) + 1,
        }))
      }
    } catch (e) {
      // ignore storage errors
    }
  }, [])

  // 滚动深度追踪
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = (window.scrollY / scrollHeight) * 100
      const depth = Math.min(100, Math.max(0, scrolled))

      setMetrics(prev => {
        const newMetrics = { ...prev, scrollDepth: depth }
        const hasReached60 = depth >= scrollThreshold

        if (hasReached60 && !prev.hasScrolled60Percent) {
          newMetrics.hasScrolled60Percent = true
          checkAndTrigger({ ...newMetrics, hasScrolled60Percent: true })
        }

        return newMetrics
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrollThreshold])

  // 停留时长追踪
  useEffect(() => {
    timerRef.current = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTimeRef.current) / 1000)

      setMetrics(prev => {
        const newMetrics = { ...prev, timeOnPage: elapsed }
        const hasSpent90Seconds = elapsed >= timeThreshold

        if (hasSpent90Seconds && !prev.hasSpent90Seconds) {
          newMetrics.hasSpent90Seconds = true
          checkAndTrigger({ ...newMetrics, hasSpent90Seconds: true })
        }

        return newMetrics
      })
    }, 1000)

    return () => clearInterval(timerRef.current)
  }, [timeThreshold])

  // 保存浏览数据
  useEffect(() => {
    const saveMetrics = () => {
      try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ pageViews: metrics.pageViews }))
      } catch (e) {
        // ignore
      }
    }

    window.addEventListener('beforeunload', saveMetrics)
    return () => window.removeEventListener('beforeunload', saveMetrics)
  }, [metrics.pageViews])

  // 检查是否应该触发中触发器
  const checkAndTrigger = (currentMetrics: EngagementMetrics) => {
    if (hasTriggeredRef.current) return

    const shouldTrigger =
      currentMetrics.hasScrolled60Percent ||
      currentMetrics.hasSpent90Seconds ||
      currentMetrics.pageViews >= 2

    if (shouldTrigger && onTrigger) {
      hasTriggeredRef.current = true
      onTrigger(currentMetrics)
    }
  }

  return metrics
}
```

**Step 2: 提交**

```bash
git add src/hooks/useEngagementTracking.ts
git commit -m "feat: add engagement tracking hook"
```

---

### Task 9: 创建中触发器抽屉组件

**文件:**
- Create: `src/components/ScrollTriggerDrawer/index.tsx`

**Step 1: 创建 ScrollTriggerDrawer 组件**

```tsx
// src/components/ScrollTriggerDrawer/index.tsx
'use client'

import React, { useEffect, useState } from 'react'
import { X, ArrowRight, CheckCircle2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useEngagementTracking } from '@/hooks/useEngagementTracking'

interface ScrollTriggerDrawerProps {
  isEnabled?: boolean
  onOpenLeadForm?: () => void
}

export const ScrollTriggerDrawer: React.FC<ScrollTriggerDrawerProps> = ({
  isEnabled = true,
  onOpenLeadForm,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  // 使用行为追踪 hook
  useEngagementTracking({
    triggerThreshold: {
      scrollDepth: 60,
      timeOnPage: 90,
    },
    onTrigger: (metrics) => {
      if (isEnabled && !hasShown && !isOpen) {
        // 延迟 1 秒显示，避免突兀
        setTimeout(() => {
          setIsOpen(true)
          setHasShown(true)
        }, 1000)
      }
    },
  })

  const handleClose = () => setIsOpen(false)

  const handlePrimaryAction = () => {
    if (onOpenLeadForm) {
      onOpenLeadForm()
    } else {
      // 默认触发自定义事件
      window.dispatchEvent(new CustomEvent('open-demo-modal'))
    }
    handleClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 背景遮罩 - 可选 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 z-[90]"
            onClick={handleClose}
          />

 {/* 抽屉 - 响应式定位 */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 lg:left-auto lg:right-0 lg:top-0 lg:bottom-0 lg:w-full lg:max-w-md bg-white shadow-2xl z-[91] flex flex-col max-h-[85vh] lg:max-h-full rounded-t-3xl lg:rounded-none"
          >
            {/* 移动端拖拽指示器 */}
            <div className="lg:hidden flex justify-center pt-3 pb-1">
              <div className="w-12 h-1.5 bg-slate-200 rounded-full" />
            </div>

            {/* 头部 */}
            <div className="flex items-center justify-between p-6 border-b border-slate-100">
              <div>
                <h3 className="text-lg font-bold text-[#1F2329]">正在评估方案？</h3>
                <p className="text-sm text-slate-500">让我们帮您快速判断</p>
              </div>
              <button
                onClick={handleClose}
                className="w-10 h-10 rounded-full hover:bg-slate-100 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-slate-400" />
              </button>
            </div>

            {/* 内容 */}
            <div className="flex-1 p-6 overflow-y-auto">
              <p className="text-sm text-slate-600 mb-6">
                我们发现您正在详细了解我们的解决方案。您可能在评估：
              </p>

              <div className="space-y-4 mb-8">
                {[
                  '是否适合你们行业',
                  '上线周期与风险',
                  '项目是否可控',
                  '投入产出比如何',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 rounded-xl p-4 mb-6">
                <p className="text-sm text-blue-900 font-medium mb-2">
                  针对您企业的具体情况，我们可以提供：
                </p>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• 同行业案例参考</li>
                  <li>• 预估实施周期</li>
                  <li>• 分阶段投入建议</li>
                </ul>
              </div>
            </div>

            {/* 底部操作 */}
            <div className="p-6 border-t border-slate-100 space-y-3">
              <button
                onClick={handlePrimaryAction}
                className="w-full py-4 bg-[#E60012] text-white font-bold rounded-xl hover:bg-red-700 transition-all flex items-center justify-center gap-2"
              >
                获取针对您企业的判断
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={handleClose}
                className="w-full py-3 text-slate-500 hover:text-slate-700 font-medium transition-colors"
              >
                暂不需要，继续阅读
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
```

**Step 2: 提交**

```bash
git add src/components/ScrollTriggerDrawer/
git commit -m "feat: add scroll trigger drawer component"
```

---

### Task 10: PC 端浮动咨询按钮

**文件:**
- Create: `src/components/FloatingChatButton/index.tsx`

**Step 1: 创建 FloatingChatButton 组件**

```tsx
// src/components/FloatingChatButton/index.tsx
'use client'

import React from 'react'
import { MessageCircle, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { ConsultationModal } from '@/components/ConsultationModal'
import type { Contact } from '@/payload-types'

interface FloatingChatButtonProps {
  contactData?: Contact
  showOnMobile?: boolean // 移动端已有 MobileStickyBar，默认不显示
}

export const FloatingChatButton: React.FC<FloatingChatButtonProps> = ({
  contactData,
  showOnMobile = false,
}) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  return (
    <>
      {/* 浮动按钮 - 仅在桌面端显示 */}
      {!showOnMobile && (
        <div className="hidden lg:block fixed bottom-8 right-8 z-[60]">
          <AnimatePresence>
            {!isOpen && (
              <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                onClick={() => setIsModalOpen(true)}
                className="group relative flex items-center gap-3 px-5 py-3 bg-[#0052D9] text-white rounded-full shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="font-medium text-sm">企业项目顾问</span>
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* 咨询模态框 */}
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} data={contactData} />
    </>
  )
}
```

**Step 2: 提交**

```bash
git add src/components/FloatingChatButton/
git commit -m "feat: add floating chat button for desktop"
```

---

### Task 11: 集成新组件到 Layout

**文件:**
- Modify: `src/app/(frontend)/layout.tsx`

**Step 1: 添加新组件到根布局**

编辑 `src/app/(frontend)/layout.tsx`，在第 7-14 行的导入区域添加：

```tsx
import { ScrollTriggerDrawer } from '@/components/ScrollTriggerDrawer'
import { FloatingChatButton } from '@/components/FloatingChatButton'
```

在第 40-44 行的 body 内容中添加：

```tsx
// 修改前：
<body suppressHydrationWarning className="antialiased font-sans">
  <ReactScan />
  <WebVitals />
  <AttributionProvider>
    <Navbar contactData={contactData} />
    {children}
    <Footer />
    <MobileStickyBar contactData={contactData} />
  </AttributionProvider>
</body>

// 修改后：
<body suppressHydrationWarning className="antialiased font-sans">
  <ReactScan />
  <WebVitals />
  <AttributionProvider>
    <Navbar contactData={contactData} />
    {children}
    <Footer />
    <MobileStickyBar contactData={contactData} />
    <ScrollTriggerDrawer />
    <FloatingChatButton contactData={contactData} />
  </AttributionProvider>
</body>
```

**Step 2: 测试构建**

Run: `pnpm build`
Expected: 构建成功

**Step 3: 提交**

```bash
git add src/app/(frontend)/layout.tsx
git commit -m "feat: integrate ScrollTriggerDrawer and FloatingChatButton"
```

---

## Sprint 3: 防流失兜底（弱触发器 + 追踪完善）

### Task 12: 创建离开意图检测 Hook

**文件:**
- Create: `src/hooks/useExitIntent.ts`

**Step 1: 创建 ExitIntent Hook**

```tsx
// src/hooks/useExitIntent.ts
'use client'

import { useEffect, useState, useRef } from 'react'

interface UseExitIntentOptions {
  enabled?: boolean
  threshold?: number // 鼠标距离顶部多少像素触发，默认 50
  delay?: number // 页面加载后多久才开始检测，默认 30000ms (30秒)
  onTrigger?: () => void
  maxTriggers?: number // 最多触发次数，默认 1
}

export const useExitIntent = (options: UseExitIntentOptions = {}) => {
  const {
    enabled = true,
    threshold = 50,
    delay = 30000,
    onTrigger,
    maxTriggers = 1,
  } = options

  const [shouldDetect, setShouldDetect] = useState(false)
  const triggerCountRef = useRef(0)

  // 延迟启用检测
  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldDetect(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  // 鼠标离开意图检测
  useEffect(() => {
    if (!enabled || !shouldDetect) return

    const handleMouseLeave = (e: MouseEvent) => {
      // 检查鼠标是否从顶部离开
      if (e.clientY <= threshold) {
        if (triggerCountRef.current < maxTriggers) {
          triggerCountRef.current++
          onTrigger?.()
        }
      }
    }

    // 移动端/小屏幕不启用
    if (window.innerWidth < 1024) {
      return
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    return () => document.removeEventListener('mouseleave', handleMouseLeave)
  }, [enabled, shouldDetect, threshold, maxTriggers, onTrigger])

  // 后台切换检测
  useEffect(() => {
    if (!enabled || !shouldDetect) return

    let visibilityTimeout: NodeJS.Timeout

    const handleVisibilityChange = () => {
      if (document.hidden) {
        // 页面隐藏，开始计时
        visibilityTimeout = setTimeout(() => {
          if (triggerCountRef.current < maxTriggers) {
            triggerCountRef.current++
            onTrigger?.()
          }
        }, 30000) // 离开 30 秒后触发
      } else {
        // 页面返回，清除计时
        clearTimeout(visibilityTimeout)
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      clearTimeout(visibilityTimeout)
    }
  }, [enabled, shouldDetect, maxTriggers, onTrigger])

  return { triggerCount: triggerCountRef.current }
}
```

**Step 2: 提交**

```bash
git add src/hooks/useExitIntent.ts
git commit -m "feat: add exit intent detection hook"
```

---

### Task 13: 创建离开意图模态框

**文件:**
- Create: `src/components/ExitIntentModal/index.tsx`

**Step 1: 创建 ExitIntentModal 组件**

```tsx
// src/components/ExitIntentModal/index.tsx
'use client'

import React, { useState } from 'react'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useExitIntent } from '@/hooks/useExitIntent'

interface ExitIntentModalProps {
  isEnabled?: boolean
  onLeavePhone?: (phone: string) => void
}

export const ExitIntentModal: React.FC<ExitIntentModalProps> = ({
  isEnabled = true,
  onLeavePhone,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  useExitIntent({
    enabled: isEnabled,
    onTrigger: () => setIsOpen(true),
  })

  const handleClose = () => setIsOpen(false)

  const handleLeavePhone = () => {
    // 记录用户愿意被联系
    onLeavePhone?.('') // 可以让用户输入电话，或直接跳转联系页
    setIsOpen(false)
    // 可以触发 DemoRequestModal 或跳转到 /contact
    window.dispatchEvent(new CustomEvent('open-demo-modal', {
      detail: { source: 'ExitIntent' }
    }))
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 背景遮罩 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
            onClick={handleClose}
          />

          {/* 模态框 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-full max-w-md p-6"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 relative">
              {/* 关闭按钮 */}
              <button
                onClick={handleClose}
                className="absolute right-4 top-4 w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-slate-400" />
              </button>

              {/* 内容 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🤔</span>
                </div>

                <h3 className="text-2xl font-bold text-[#1F2329] mb-3">
                  还在考虑？
                </h3>

                <p className="text-slate-600 mb-8 leading-relaxed">
                  我们可以整理一份针对您行业的实施案例，<br />
                  发给您参考对比。
                </p>

                <div className="space-y-3">
                  <button
                    onClick={handleLeavePhone}
                    className="w-full py-4 bg-[#E60012] text-white font-bold rounded-xl hover:bg-red-700 transition-all"
                  >
                    好的，请发给我
                  </button>
                  <button
                    onClick={handleClose}
                    className="w-full py-3 text-slate-500 hover:text-slate-700 font-medium transition-colors"
                  >
                    不需要，谢谢
                  </button>
                </div>

                <p className="text-xs text-slate-400 mt-6">
                  我们尊重您的选择，不会重复打扰
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
```

**Step 2: 提交**

```bash
git add src/components/ExitIntentModal/
git commit -m "feat: add exit intent modal component"
```

---

### Task 14: 集成 ExitIntentModal

**文件:**
- Modify: `src/app/(frontend)/layout.tsx`

**Step 1: 添加 ExitIntentModal 到布局**

编辑 `src/app/(frontend)/layout.tsx`：

```tsx
// 在导入区域添加：
import { ExitIntentModal } from '@/components/ExitIntentModal'

// 在 body 内添加组件：
<body suppressHydrationWarning className="antialiased font-sans">
  <ReactScan />
  <WebVitals />
  <AttributionProvider>
    <Navbar contactData={contactData} />
    {children}
    <Footer />
    <MobileStickyBar contactData={contactData} />
    <ScrollTriggerDrawer />
    <FloatingChatButton contactData={contactData} />
    <ExitIntentModal />
  </AttributionProvider>
</body>
```

**Step 2: 测试构建**

Run: `pnpm build`
Expected: 构建成功

**Step 3: 提交**

```bash
git add src/app/(frontend)/layout.tsx
git commit -m "feat: integrate ExitIntentModal"
```

---

## 测试与验证

### Task 15: 功能测试

**Step 1: 启动开发服务器**

Run: `pnpm dev`
Expected: 服务器在 `localhost:3000` 启动

**Step 2: 手动测试清单**

| 功能 | 测试步骤 | 预期结果 |
|-----|---------|---------|
| 两步式表单 | 1. 打开首页预约<br>2. 填写姓名、公司、手机<br>3. 点击下一步<br>4. 选择角色（选填）<br>5. 提交 | 成功态显示"1个工作日内联系" |
| 中触发器 | 1. 打开任意产品页<br>2. 滚动超过 60% 页面<br>3. 等待 1 秒 | 右侧滑出 ScrollTriggerDrawer |
| 停留触发 | 1. 打开任意页面<br>2. 静止停留 90 秒 | 右侧滑出 ScrollTriggerDrawer |
| 离开意图 | 1. 打开任意页面<br>2. 等待 30 秒<br>3. 鼠标移至浏览器顶部 | 显示 ExitIntentModal |
| 浮动咨询按钮 | 1. 在 PC 端浏览任意页面<br>2. 点击右下角蓝色按钮 | 打开 ConsultationModal |
| 案例结果段 CTA | 1. 打开任意案例页<br>2. 滚动到关键成果段<br>3. 查看下方 | 红色 CTA 卡片 |

**Step 3: 提交测试通过标记**

```bash
git commit --allow-empty -m "test: manual testing completed for sales optimization features"
```

---

## 数据埋点（可选）

### Task 16: 添加分析事件追踪

**文件:**
- Create: `src/lib/analytics.ts`

**Step 1: 创建分析事件辅助函数**

```tsx
// src/lib/analytics.ts
export type AnalyticsEvent =
  | 'lead_form_step1_submit'
  | 'lead_form_step2_submit'
  | 'lead_form_success'
  | 'scroll_trigger_shown'
  | 'scroll_trigger_cta_click'
  | 'exit_intent_shown'
  | 'exit_intent_cta_click'
  | 'floating_chat_click'

export const trackEvent = (event: AnalyticsEvent, properties?: Record<string, any>) => {
  // 这里可以接入 Google Analytics, 百度统计等
  if (typeof window !== 'undefined' && (window as any).gtag) {
    ;(window as any).gtag('event', event, properties)
  }

  // 开发环境打印日志
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics]', event, properties)
  }
}
```

**Step 2: 在各组件中集成 trackEvent**

示例 - 在 TwoStepLeadForm 中：
```tsx
import { trackEvent } from '@/lib/analytics'

// Step 1 提交时
trackEvent('lead_form_step1_submit', { source })

// Step 2 提交时
trackEvent('lead_form_step2_submit', { source, hasAdditionalInfo: true })

// 成功时
trackEvent('lead_form_success', { source, role, currentSystem })
```

**Step 3: 提交**

```bash
git add src/lib/analytics.ts
git commit -m "feat: add analytics event tracking utilities"
```

---

## 部署清单

1. **代码审查** - 确保所有变更符合项目规范
2. **类型检查** - `pnpm build` 无错误
3. **Linter** - `pnpm lint` 无警告
4. **E2E 测试** - `pnpm test:e2e` 通过
5. **创建 PR** - 使用 `/pr` 技能创建 Pull Request
6. **合并后监控** - 观察留资转化率变化

---

## 成功指标

| 指标 | 基线 | 目标 |
|-----|------|------|
| 表单提交转化率 | - | +30% |
| 中触发器展示率 | - | >20% 访客 |
| 中触发器 CTR | - | >15% |
| 离开意图挽回率 | - | >5% |
| 整体留资率 | - | +50% |
