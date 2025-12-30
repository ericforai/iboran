'use client'

import { useState } from 'react'
import { DemoRequestModal } from '@/components/DemoRequestModal'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <>
      <section className="py-24 bg-white relative overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute top-0 right-0 w-full h-full">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto bg-slate-900 rounded-[2.5rem] p-12 lg:p-20 relative overflow-hidden shadow-2xl">
            {/* 卡片内背景装饰 */}
            <div className="absolute top-0 right-0 w-full h-full">
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]" />
              <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#E60012]/10 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="text-center lg:text-left flex-1">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  准备好释放<br />
                  您企业的<span className="text-[#0052D9]">资金潜能</span>了吗？
                </h2>
                <p className="text-xl text-slate-400 max-w-xl">
                  现在联系泊冉专家，获取为您量身定制的银企联建设方案。7天上线，即刻告别繁琐的手工对账。
                </p>
              </div>

              <div className="flex flex-col gap-4 w-full lg:w-auto min-w-[280px]">
                <button
                  onClick={() => setIsDemoOpen(true)}
                  className="w-full lg:w-auto px-10 py-5 bg-[#E60012] text-white font-bold rounded-xl hover:bg-red-700 transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3 group"
                >
                  预约专家演示
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="flex items-center justify-center gap-6 mt-2">
                  <div className="flex flex-col text-center">
                    <span className="text-white font-bold text-xl">400-9955-161</span>
                    <span className="text-slate-500 text-xs">咨询服务热线</span>
                  </div>
                </div>
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
