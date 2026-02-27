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
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="relative rounded-[2rem] overflow-hidden bg-[#0052D9]">
          {/* Background Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-[60%] h-full bg-[#E60012] skew-x-12 translate-x-[40%] opacity-20 transition-transform duration-700 hover:translate-x-[35%]"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-400 rounded-full blur-[100px] opacity-30"></div>
          </div>
          
          <div className="relative z-10 p-12 lg:p-24 flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight max-w-4xl">
              现在就开始构建您的<br className="hidden md:block"/>企业级集成底座
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-12 max-w-2xl font-medium">
              立即预约专家演示，了解 LINK 如何帮助您的企业实现业务无缝连接与高效治理。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <button
                onClick={() => setIsDemoOpen(true)}
                className="px-10 py-4 bg-white text-[#0052D9] rounded-xl font-bold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl active:scale-95"
              >
                预约专家演示
              </button>
              <button onClick={handleOpenConsult} className="px-10 py-4 bg-white/10 border-2 border-white/30 text-white rounded-xl font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
                获取白皮书 <ArrowRight size={18} />
              </button>
            </div>
            
            <div className="mt-16 flex flex-wrap justify-center gap-8 text-white/80 text-sm font-medium">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#E60012] rounded-full shadow-[0_0_8px_#E60012]"></span>
                免费深度咨询
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#E60012] rounded-full shadow-[0_0_8px_#E60012]"></span>
                定制化集成方案
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#E60012] rounded-full shadow-[0_0_8px_#E60012]"></span>
                快速响应支持
              </span>
            </div>
          </div>
        </div>
      </div>

      <DemoRequestModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </section>
  )
}
