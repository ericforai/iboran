'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Download, PhoneCall } from 'lucide-react'

export const CTASection = () => {
  const handleOpenDemoModal = () => {
    window.dispatchEvent(new CustomEvent('open-demo-modal'))
  }

  const handleOpenConsultModal = () => {
    window.dispatchEvent(new CustomEvent('open-consult-modal'))
  }

  return (
    <section className="py-24 bg-blue-600 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-500 -skew-x-12 translate-x-1/2"></div>
      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              立即开启您的<br />
              数字化采购转型之旅
            </h2>
            <p className="text-blue-100 text-lg mb-10">
              我们的资深顾问将为您提供 1对1 免费业务诊断，助力企业打造透明、高效、合规的采购体系。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={handleOpenDemoModal} size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 h-14 text-lg">
                预约专家演示
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button onClick={handleOpenConsultModal} size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 h-14 text-lg backdrop-blur-sm">
                下载数字化采购白皮书
                <Download className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
            <h3 className="text-xl font-bold mb-6">咨询专业服务</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-blue-200 uppercase tracking-wider">咨询热线</div>
                  <div className="text-xl font-bold">400-9955-161</div>
                </div>
              </div>
              <div className="pt-6 border-t border-white/10 text-sm text-blue-100 italic">
                “数字化采购管理平台，不仅是管理工具，更是业务增值的助推器。”
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
