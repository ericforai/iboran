'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Download, Rocket } from 'lucide-react'

export const CTASection = () => {
  const handleOpenDemo = () => {
    window.dispatchEvent(new CustomEvent('open-demo-modal'))
  }

  const handleOpenConsult = () => {
    window.dispatchEvent(new CustomEvent('open-consult-modal'))
  }

  return (
    <section className="py-24 bg-brand-red relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-20" />
      <div className="absolute bottom-0 left-0 w-1/4 h-full bg-white/5 -skew-x-12 -translate-x-20" />
      
      <div className="container px-4 mx-auto relative z-10 text-center text-white">
        <h2 className="text-4xl font-bold mb-8">
          准备好实现项目全过程数智化监管了吗？
        </h2>
        <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12">
          立即领取《项目协同管理交付清单》或预约专家演示，开启高效协同新纪元。
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            size="lg"
            onClick={handleOpenDemo}
            className="bg-white text-brand-red hover:bg-gray-100 px-10 py-8 text-xl font-bold rounded-full shadow-2xl transition-all hover:scale-105"
          >
            <Rocket className="mr-3 h-6 w-6" />
            预约专家演示
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={handleOpenConsult}
            className="border-2 border-white text-white hover:bg-white/10 px-10 py-8 text-xl font-bold rounded-full transition-all"
          >
            <Download className="mr-3 h-6 w-6" />
            下载交付清单
          </Button>
        </div>
        
        <div className="mt-16 pt-12 border-t border-white/10 flex flex-wrap justify-center gap-12 text-sm font-medium text-white/60">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
            快速部署
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
            专业实施
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
            全天候服务
          </div>
        </div>
      </div>
    </section>
  )
}
