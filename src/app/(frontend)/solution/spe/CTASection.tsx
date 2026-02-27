'use client'

import { useState } from 'react'
import { DemoRequestModal } from '@/components/DemoRequestModal'

export default function CTASection() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  const handleOpenConsult = () => {
    window.dispatchEvent(new CustomEvent('open-consult-modal'))
  }

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-slate-900 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
          {/* Decorative gradients */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E60012]/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0052D9]/10 rounded-full blur-[100px]" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              开启企业数智化经营分析新旅程
            </h2>
            <p className="text-slate-400 text-lg mb-10">
              预约专家演示，获取为您量身定制的 SPE 纵向 PDCA 解决方案，助力您的企业实现战略精准落地。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsDemoOpen(true)}
                className="px-12 py-5 bg-[#E60012] text-white font-bold rounded-lg hover:bg-red-700 transition-all"
              >
                预约专家演示
              </button>
              <button onClick={handleOpenConsult} className="px-12 py-5 border border-slate-700 text-white font-semibold rounded-lg hover:bg-slate-800 transition-all">
                在线咨询产品详情
              </button>
            </div>
          </div>
        </div>
      </div>

      <DemoRequestModal 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)} 
      />
    </section>
  )
}
