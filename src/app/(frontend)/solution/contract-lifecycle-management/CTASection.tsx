'use client'

import { useState } from 'react'
import { DemoRequestModal } from '@/components/DemoRequestModal'

export default function CTASection() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-[#0052D9] to-[#003A9B] rounded-3xl p-12 lg:p-20 text-center relative overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24" />
          
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 relative z-10">
            立即开启企业合同数智化转型之旅
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto relative z-10">
            专家顾问为您提供专属解决方案演示，助您构建业财法一体化的缔约管理体系。
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <button
              onClick={() => setIsDemoOpen(true)}
              className="px-10 py-4 bg-[#E60012] text-white font-bold rounded-lg hover:bg-red-700 transition-all shadow-xl shadow-red-950/20 w-full sm:w-auto"
            >
              预约专家演示
            </button>
            <button className="px-10 py-4 border-2 border-white/30 text-white font-bold rounded-lg hover:bg-white/10 transition-all w-full sm:w-auto">
              下载产品折页
            </button>
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
