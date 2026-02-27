'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { DemoRequestModal } from '@/components/DemoRequestModal'

export default function CTASection() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  const handleOpenConsult = () => {
    window.dispatchEvent(new CustomEvent('open-consult-modal'))
  }

  return (
    <>
      <section className="py-24 bg-slate-900 overflow-hidden relative">
        {/* 背景装饰 */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-red-900/20 to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            准备好加速您的业务增长了吗？
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            预约我们的互联网行业专家，获取为您量身定制的数智化转型方案。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsDemoOpen(true)}
              className="px-8 py-4 bg-[#E60012] text-white font-bold rounded-full hover:bg-red-700 transition-all shadow-lg hover:shadow-red-900/50 flex items-center justify-center gap-2"
            >
              预约专家咨询
              <ArrowRight className="w-5 h-5" />
            </button>
            <button onClick={handleOpenConsult} className="px-8 py-4 border border-slate-600 text-white font-semibold rounded-full hover:bg-white/10 transition-all">
              下载解决方案白皮书
            </button>
          </div>
        </div>
      </section>

      <DemoRequestModal 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)} 
        source="industry-internet-cta"
      />
    </>
  )
}
