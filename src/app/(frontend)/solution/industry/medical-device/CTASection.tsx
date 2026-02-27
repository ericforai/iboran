'use client'

import { useState } from 'react'
import { DemoRequestModal } from '@/components/DemoRequestModal'

export default function CTASection() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  const handleOpenConsult = () => {
    window.dispatchEvent(new CustomEvent('open-consult-modal'))
  }

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 skew-x-12 translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#0052D9] to-blue-700 rounded-3xl p-10 lg:p-16 text-center shadow-2xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            开启医疗器械企业数智化转型之旅
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            立即预约行业专家，获取为您量身定制的行业数字化解决方案。
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <button
              onClick={() => setIsDemoOpen(true)}
              className="px-10 py-4 bg-white text-[#0052D9] font-bold rounded-lg hover:bg-blue-50 transition-all shadow-lg"
            >
              预约行业专家咨询
            </button>
            <button onClick={handleOpenConsult} className="px-10 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all">
              下载行业白皮书
            </button>
          </div>
        </div>
      </div>

      <DemoRequestModal 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)} 
        source="industry-medical-device-cta"
      />
    </section>
  )
}
