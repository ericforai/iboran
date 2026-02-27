'use client'

import { useState } from 'react'
import { DemoRequestModal } from '@/components/DemoRequestModal'

export default function CTASection() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  const handleOpenConsult = () => {
    window.dispatchEvent(new CustomEvent('open-consult-modal'))
  }

  return (
    <section className="py-20 bg-[#1F2329]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          开启美妆数智化成长新路径
        </h2>
        <p className="text-slate-400 mb-10 max-w-2xl mx-auto">
          立刻预约资深行业顾问，量身打造您的化妆品行业数智化解决方案，提升全渠道运营效率与品牌溢价空间。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => setIsDemoOpen(true)}
            className="px-8 py-4 bg-[#E60012] text-white font-bold rounded-md hover:bg-red-700 transition-all"
          >
            申请专属演示
          </button>
          <button onClick={handleOpenConsult} className="px-8 py-4 border-2 border-slate-700 text-white font-semibold rounded-md hover:bg-slate-800 transition-all">
            获取解决方案全文
          </button>
        </div>
      </div>

      <DemoRequestModal 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)} 
        source="industry-cosmetics-cta"
      />
    </section>
  )
}
