'use client'

import { DemoRequestModal } from '@/components/DemoRequestModal'
import { useState } from 'react'

export default function CTASection() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <>
      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            开启您的财务数智化转型之旅
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            立即预约专家演示，获取为您量身定制的财务共享服务建设方案。
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button 
               onClick={() => setIsDemoOpen(true)}
               className="px-8 py-4 bg-[#E60012] text-white font-bold rounded-lg hover:bg-red-700 transition-shadow shadow-lg shadow-red-900/20"
            >
              预约专家方案演示
            </button>
            <button className="px-8 py-4 bg-white text-blue-700 font-bold rounded-lg hover:bg-blue-50 transition-colors">
              下载完整解决方案
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
