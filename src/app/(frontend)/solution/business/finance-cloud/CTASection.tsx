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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,82,217,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(230,0,18,0.15),transparent_50%)]" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
            开启集团财务数智化转型之旅
          </h2>
          <p className="text-slate-300 text-lg mb-12 max-w-2xl mx-auto">
            立即预约专家演示，了解如何通过 FINANCE 财务云构建世界一流的财务管理体系。
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button
              onClick={() => setIsDemoOpen(true)}
              className="px-8 py-4 bg-[#E60012] text-white font-bold rounded-lg hover:bg-red-700 transition-all shadow-lg hover:shadow-red-900/30 flex items-center justify-center gap-2"
            >
              预约专家演示
              <ArrowRight size={20} />
            </button>
            <button onClick={handleOpenConsult} className="px-8 py-4 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-all backdrop-blur-sm border border-white/20">
              联系售前顾问
            </button>
          </div>
        </div>
      </section>

      <DemoRequestModal 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)} 
      />
    </>
  )
}
