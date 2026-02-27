'use client'

import { useState } from 'react'
import { ArrowRight, Download, Phone, CalendarCheck } from 'lucide-react'
import { DemoRequestModal } from '@/components/DemoRequestModal'

export default function CTASection() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  const handleOpenConsult = () => {
    window.dispatchEvent(new CustomEvent('open-consult-modal'))
  }

  return (
    <>
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl relative">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '32px 32px'
            }}></div>
            
            <div className="flex flex-col lg:flex-row items-stretch">
              <div className="flex-1 p-8 lg:p-14">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600 text-white text-[10px] font-bold rounded uppercase mb-6">
                  Ready to optimize?
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                  开启企业治理新范式<br/>
                  让流程真正服务于您的业务增长
                </h2>
                <p className="text-slate-400 mb-10 text-lg">
                  不论您是处于流程梳理的初创阶段，还是正面临复杂的系统集成挑战，泊冉 BPM 专家团队都将为您提供落地、专业的交付方案。
                </p>
                
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <button
                    onClick={() => setIsDemoOpen(true)}
                    className="w-full sm:w-auto px-10 py-4 bg-[#E60012] text-white font-bold rounded-lg hover:bg-red-700 transition shadow-lg shadow-red-900/40 flex items-center justify-center gap-2 group"
                  >
                    免费预约专家演示
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button onClick={handleOpenConsult} className="w-full sm:w-auto px-10 py-4 bg-white/5 border border-white/20 text-white font-bold rounded-lg hover:bg-white/10 transition flex items-center justify-center gap-2 group">
                    <Download size={18} className="text-blue-400" />
                    获取交付价值清单 (PDF)
                  </button>
                </div>
              </div>

              <div className="w-full lg:w-80 bg-slate-800/50 p-8 lg:p-14 border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col justify-center">
                 <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center text-blue-400 flex-shrink-0">
                        <CalendarCheck size={20} />
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm">快速响应</p>
                        <p className="text-slate-400 text-xs mt-1">预约后 2 工作小时内确认时间</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center text-green-400 flex-shrink-0">
                        <Phone size={20} />
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm">直拨热线</p>
                        <p className="text-slate-400 text-xs mt-1">400-9955-161</p>
                      </div>
                    </div>
                    <div className="pt-8 border-t border-white/10">
                        <div className="flex -space-x-3 mb-4">
                          {[1,2,3,4].map(i => (
                            <div key={i} className={`w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-700 flex items-center justify-center text-[10px] text-white font-bold`}>
                              User_{i}
                            </div>
                          ))}
                        </div>
                        <p className="text-white text-xs font-medium">已有 500+ 企业咨询相关方案</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DemoRequestModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </>
  )
}
