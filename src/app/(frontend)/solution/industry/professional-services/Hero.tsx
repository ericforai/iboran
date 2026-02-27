'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle, Briefcase, Users, Award, TrendingUp, Globe, Shield } from 'lucide-react'
import { DemoRequestModal } from '@/components/DemoRequestModal'

export default function Hero() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  const handleOpenConsult = () => {
    window.dispatchEvent(new CustomEvent('open-consult-modal'))
  }

  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br from-slate-50 via-indigo-50 to-blue-50">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Left: Text Content (60%) */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-indigo-100 text-slate-700 text-sm font-medium mb-6">
                <Briefcase size={16} className="text-indigo-600" />
                专业服务行业解决方案
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2329] leading-tight mb-6">
                <span className="text-indigo-600">合伙人</span>机制<br/>
                <span className="text-[#E60012]">精细化</span>运营
              </h2>
              
              <p className="text-lg md:text-xl text-slate-600 mb-4 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                用友BIP赋能会计师、律师、咨询等专业服务机构，实现以合伙人为核心的项目全生命周期管理与精细化核算
              </p>
              
              <p className="text-sm text-slate-500 mb-8 italic">
                &ldquo;释放专业价值，驱动合伙人利润增长&rdquo;
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => setIsDemoOpen(true)}
                  className="px-8 py-3.5 bg-[#E60012] text-white rounded-md font-bold hover:bg-red-700 transition shadow-lg shadow-red-200/50 flex items-center gap-2 group"
                >
                  预约行业专家咨询
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                </button>
                <button onClick={handleOpenConsult} className="px-8 py-3.5 bg-white text-[#0052D9] border-2 border-[#0052D9] rounded-md font-semibold hover:bg-blue-50 transition">
                  下载白皮书
                </button>
              </div>

              <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-500">
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-500"/> 项目工时</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-500"/> 费用分摊</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-500"/> 利润核算</span>
              </div>
            </div>

            {/* Right: Visual Element (40%) */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none">
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-indigo-100">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl shadow-lg shadow-indigo-500/30 mb-4">
                      <Briefcase size={40} className="text-white" />
                    </div>
                    <h3 className="text-[#1F2329] font-bold text-lg">专业服务数智平台</h3>
                    <p className="text-slate-400 text-sm mt-1">合伙人全周期管理</p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { icon: Users, name: '合伙人', desc: '权益管理' },
                      { icon: Briefcase, name: '项目', desc: '全案管理' },
                      { icon: TrendingUp, name: '工时', desc: '效能分析' },
                      { icon: Award, name: '资质', desc: '信用管理' },
                      { icon: Globe, name: '知识', desc: '智库共享' },
                      { icon: Shield, name: '风控', desc: '利冲合规' },
                    ].map((module, idx) => (
                      <div key={idx} className="bg-indigo-50 rounded-lg p-3 text-center border border-indigo-100 hover:bg-indigo-100 transition">
                        <module.icon size={20} className="mx-auto text-indigo-600 mb-1" />
                        <div className="text-[#1F2329] font-bold text-sm">{module.name}</div>
                        <div className="text-slate-500 text-xs mt-0.5">{module.desc}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-indigo-100 grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-[#E60012]">99%</div>
                      <div className="text-xs text-slate-400">工时准确</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-indigo-600">30%+</div>
                      <div className="text-xs text-slate-400">人效提升</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-500">Auto</div>
                      <div className="text-xs text-slate-400">自动分摊</div>
                    </div>
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
        source="industry-professional-services"
      />
    </>
  )
}
