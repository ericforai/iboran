'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { useAttribution } from '@/providers/Attribution'
import { getClientSideURL } from '@/utilities/getURL'

export function ContactForm() {
  const attribution = useAttribution()
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (loading) return
    setLoading(true)
    setError(null)

    // Capture form reference BEFORE async operation
    // React synthetic events are pooled and nullified after async operations
    const form = e.currentTarget

    try {
      const formData = new FormData(form)
      const payload = {
        name: String(formData.get('name') || '').trim(),
        company: String(formData.get('company') || '').trim(),
        phone: String(formData.get('phone') || '').trim(),
        email: String(formData.get('email') || '').trim(),
        message: String(formData.get('message') || '').trim(),
        source: 'contact-page',
      }

      const response = await fetch(`${getClientSideURL()}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...payload,
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
        // Handle both 'error' and 'message' fields from API response
        const errorMsg = resJson.error || resJson.message || '提交失败，请稍后重试'
        throw new Error(errorMsg)
      }

      form.reset()
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
            pattern="1[3-9][0-9]{9}"
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
