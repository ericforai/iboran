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
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            准备好重塑您的科技服务业务了吗？
          </h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            立即预约行业专家演示，体验 YonSuite 如何不仅帮您管好项目，更助您激活人才，实现持续高增长。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsDemoOpen(true)}
              className="px-8 py-4 bg-[#E60012] text-white font-bold rounded-lg hover:bg-red-700 transition-all shadow-lg shadow-red-900/30 flex items-center justify-center gap-2"
            >
              预约专家咨询
              <ArrowRight className="w-5 h-5" />
            </button>
            <button onClick={handleOpenConsult} className="px-8 py-4 border border-slate-600 text-white font-semibold rounded-lg hover:bg-white/5 transition-all">
              查看更多客户案例
            </button>
          </div>
          
          <p className="mt-8 text-sm text-slate-500">
            已有 2,000+ 科技服务企业选择 YonSuite
          </p>
        </div>
      </section>

      <DemoRequestModal 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)} 
        source="industry-tech-services"
      />
    </>
  )
}
