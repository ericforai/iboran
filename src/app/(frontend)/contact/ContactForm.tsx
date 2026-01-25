'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { useAttribution } from '@/providers/Attribution'

const FORM_TITLES = ['Expert Demo', 'Demo Request Form', 'Contact Form']

export function ContactForm() {
  const attribution = useAttribution()
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const getFormMeta = async () => {
    for (const title of FORM_TITLES) {
      const res = await fetch(`/api/identify-form?title=${encodeURIComponent(title)}`)
      if (res.ok) {
        const { id } = await res.json()
        return { id, title }
      }
    }
    throw new Error('未找到对应表单配置，请联系管理员')
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (loading) return
    setLoading(true)
    setError(null)

    try {
      const formMeta = await getFormMeta()
      const formData = new FormData(e.currentTarget)
      const payload = {
        name: String(formData.get('name') || '').trim(),
        company: String(formData.get('company') || '').trim(),
        phone: String(formData.get('phone') || '').trim(),
        email: String(formData.get('email') || '').trim(),
        message: String(formData.get('message') || '').trim(),
        source: 'contact-page',
      }

      const messageWithCompany =
        formMeta.title === 'Contact Form' && payload.company
          ? `公司：${payload.company}\n${payload.message || ''}`.trim()
          : payload.message

      const submissionData = Object.entries({
        ...payload,
        message: messageWithCompany,
      })
        .filter(([, value]) => value !== undefined && value !== '')
        .map(([field, value]) => ({ field, value }))

      if (formMeta.title === 'Contact Form') {
        submissionData.push({ field: 'full-name', value: payload.name })
      }

      if (attribution) {
        if (attribution.utm_source) submissionData.push({ field: 'utm_source', value: attribution.utm_source })
        if (attribution.utm_medium) submissionData.push({ field: 'utm_medium', value: attribution.utm_medium })
        if (attribution.utm_campaign) submissionData.push({ field: 'utm_campaign', value: attribution.utm_campaign })
        if (attribution.utm_term) submissionData.push({ field: 'utm_term', value: attribution.utm_term })
        if (attribution.utm_content) submissionData.push({ field: 'utm_content', value: attribution.utm_content })
        if (attribution.referrer) submissionData.push({ field: 'referrer', value: attribution.referrer })
        if (attribution.landing_page) submissionData.push({ field: 'landing_page', value: attribution.landing_page })
        if (attribution.history && attribution.history.length > 0) {
          submissionData.push({ field: 'viewed_pages', value: attribution.history.join(' -> ') })
        }
      }

      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL || ''}/api/form-submissions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form: formMeta.id,
          submissionData,
        }),
      })

      if (!response.ok) {
        const resJson = await response.json().catch(() => null)
        throw new Error(resJson?.errors?.[0]?.message || '提交失败，请稍后重试')
      }

      e.currentTarget.reset()
      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : '提交失败，请稍后重试')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="py-10 text-center space-y-4">
        <div className="text-lg font-semibold text-[#1F2329]">感谢您的留言</div>
        <p className="text-sm text-slate-500">我们的专家将在 1 个工作日内与您联系。</p>
        <Button
          type="button"
          className="px-6 bg-[#E60012] hover:bg-[#c4000f] text-white h-9 text-xs"
          onClick={() => setSubmitted(false)}
        >
          继续提交
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-3">
        <div className="space-y-1.5">
          <Label htmlFor="name" className="text-xs">姓名 <span className="text-red-500">*</span></Label>
          <Input id="name" name="name" autoComplete="name" required placeholder="请输入您的姓名" className="bg-white/50 h-9" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="company" className="text-xs">公司 <span className="text-red-500">*</span></Label>
          <Input id="company" name="company" autoComplete="organization" required placeholder="请输入公司名称" className="bg-white/50 h-9" />
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-3">
        <div className="space-y-1.5">
          <Label htmlFor="phone" className="text-xs">电话 <span className="text-red-500">*</span></Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            placeholder="请输入手机号码"
            pattern="^1[3-9]\\d{9}$"
            inputMode="tel"
            className="bg-white/50 h-9"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email" className="text-xs">邮箱</Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="example@company.com"
            className="bg-white/50 h-9"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message" className="text-xs">需求描述</Label>
        <Textarea 
          id="message" 
          name="message"
          placeholder="请简要描述您的业务需求..." 
          className="min-h-[80px] bg-white/50 text-sm resize-none"
        />
      </div>

      <div className="flex items-center justify-between pt-2">
        <p className="text-[10px] text-muted-foreground">
          提交即同意 <Link href="/privacy" className="underline hover:text-[#0052D9]">隐私政策</Link>
        </p>
        <Button 
          type="submit" 
          className="px-6 bg-[#E60012] hover:bg-[#c4000f] text-white h-9 text-xs" 
          isLoading={loading}
          disabled={loading}
        >
          发送留言
        </Button>
      </div>

      {error && (
        <div className="rounded-md bg-red-50 text-red-600 text-xs px-3 py-2" role="alert">
          {error}
        </div>
      )}
    </form>
  )
}
