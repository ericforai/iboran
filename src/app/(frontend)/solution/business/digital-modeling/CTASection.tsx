'use client'

import { useState } from 'react'
import { ArrowRight, Download } from 'lucide-react'
import { DemoRequestModal } from '@/components/DemoRequestModal'

export default function CTASection() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <section className="py-24 bg-[#F7F8FA]">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-[#0052D9] to-[#003CAB] rounded-3xl p-8 md:p-16 text-center text-white shadow-2xl shadow-blue-200 relative overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              开启企业数智化创新之旅
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              立即预约专家演示，了解泊冉软件如何助力您的企业建立先进的数智化建模底座。
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={() => setIsDemoOpen(true)}
                className="w-full sm:w-auto px-10 py-4 bg-[#E60012] text-white rounded-xl font-bold text-lg hover:bg-red-700 transition-all shadow-xl shadow-red-900/20 flex items-center justify-center gap-2 group"
              >
                预约专家演示
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="w-full sm:w-auto px-10 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                <Download size={20} />
                下载解决方案白皮书
              </button>
            </div>

            <div className="mt-12 flex items-center justify-center gap-8 text-blue-200/60 text-sm font-medium">
              <span>专业咨询</span>
              <div className="w-1 h-1 rounded-full bg-blue-200/30" />
              <span>定制方案</span>
              <div className="w-1 h-1 rounded-full bg-blue-200/30" />
              <span>快速交付</span>
            </div>
          </div>
        </div>
      </div>

      <DemoRequestModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </section>
  )
}
