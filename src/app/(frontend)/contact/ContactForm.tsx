'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

export function ContactForm() {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setLoading(false)
    alert('感谢您的留言，我们会尽快联系您！')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-3">
        <div className="space-y-1.5">
          <Label htmlFor="name" className="text-xs">姓名 <span className="text-red-500">*</span></Label>
          <Input id="name" required placeholder="请输入您的姓名" className="bg-white/50 h-9" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="company" className="text-xs">公司 <span className="text-red-500">*</span></Label>
          <Input id="company" required placeholder="请输入公司名称" className="bg-white/50 h-9" />
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-3">
        <div className="space-y-1.5">
          <Label htmlFor="phone" className="text-xs">电话 <span className="text-red-500">*</span></Label>
          <Input id="phone" type="tel" required placeholder="请输入手机号码" className="bg-white/50 h-9" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email" className="text-xs">邮箱</Label>
          <Input id="email" type="email" placeholder="example@company.com" className="bg-white/50 h-9" />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message" className="text-xs">需求描述</Label>
        <Textarea 
          id="message" 
          placeholder="请简要描述您的业务需求..." 
          className="min-h-[80px] bg-white/50 text-sm resize-none"
        />
      </div>

      <div className="flex items-center justify-between pt-2">
        <p className="text-[10px] text-muted-foreground">
          提交即同意隐私政策
        </p>
        <Button 
          type="submit" 
          className="px-6 bg-[#E60012] hover:bg-[#c4000f] text-white h-9 text-xs" 
          isLoading={loading}
        >
          发送留言
        </Button>
      </div>
    </form>
  )
}
