'use client'

import { useState } from 'react'
import { DemoRequestModal } from '@/components/DemoRequestModal'

export default function CTASection() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  const handleOpenConsult = () => {
    window.dispatchEvent(new CustomEvent('open-consult-modal'))
  }

  return (
    <>
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Decorative Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0052D9 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#0052D9] to-[#003B99] rounded-[2rem] p-12 md:p-16 text-center text-white shadow-2xl shadow-blue-200">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              开启数智化研发管理新篇章
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              立即预约资深专家演示，获取为您定做的 YonBIP PLM 研发云解决方案，驱动企业产品创新，构建核心竞争壁垒。
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={() => setIsDemoOpen(true)}
                className="w-full sm:w-auto px-10 py-4 bg-[#E60012] text-white font-bold rounded-lg hover:bg-red-700 transition shadow-xl shadow-red-900/20"
              >
                预约专家演示
              </button>
              <button onClick={handleOpenConsult} className="w-full sm:w-auto px-10 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-lg hover:bg-white/10 transition">
                致电咨询 400-9955-161
              </button>
            </div>

            <div className="mt-12 pt-12 border-t border-white/10 flex flex-wrap justify-center gap-x-12 gap-y-6 text-sm text-blue-200/80">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                1对1 资深顾问服务
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                深度行业洞察
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                快速实施交付
              </div>
            </div>
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
