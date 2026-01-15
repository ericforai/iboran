'use client'

import { useState } from 'react'
import { DemoRequestModal } from '@/components/DemoRequestModal'

export default function CTASection() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <section className="py-24 bg-gradient-to-r from-[#0052D9] to-[#003CB3] text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-500/20 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          准备好开启数智化转型之旅了吗？
        </h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          预约行业专家，获取为您量身定制的商务服务行业解决方案与数字化转型建议。
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button
            onClick={() => setIsDemoOpen(true)}
            className="px-10 py-5 bg-white text-[#0052D9] font-bold rounded-lg text-lg hover:bg-blue-50 transition-colors shadow-xl"
          >
            免费预约专家演示
          </button>
        </div>
      </div>

      <DemoRequestModal 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)} 
        source="industry-business-services-bottom"
      />
    </section>
  )
}
