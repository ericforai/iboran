'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle, Briefcase, Users, Calculator, TrendingUp, FileText, BarChart3 } from 'lucide-react'
import { DemoRequestModal } from '@/components/DemoRequestModal'

export default function Hero() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-300/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Left: Text Content (60%) */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-blue-100 text-slate-700 text-sm font-medium mb-6">
                <Briefcase size={16} className="text-blue-600" />
                商务服务行业解决方案
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2329] leading-tight mb-6">
                商务服务行业<span className="text-blue-600">数字化解决方案</span><br/>
                项目化经营 · <span className="text-[#E60012]">人才化</span>运营
              </h2>
              
              <p className="text-lg md:text-xl text-slate-600 mb-4 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                用友BIP助力商务服务企业实现项目全生命周期管理、精细化成本核算与人才高效运营
              </p>
              
              <p className="text-sm text-slate-500 mb-8 italic">
                &ldquo;以项目为核心，以人才为驱动的数智化管理&rdquo;
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => setIsDemoOpen(true)}
                  className="px-8 py-3.5 bg-[#E60012] text-white rounded-md font-bold hover:bg-red-700 transition shadow-lg shadow-red-200/50 flex items-center gap-2 group"
                >
                  预约行业专家咨询
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                </button>
                <button className="px-8 py-3.5 bg-white text-[#0052D9] border-2 border-[#0052D9] rounded-md font-semibold hover:bg-blue-50 transition">
                  下载白皮书
                </button>
              </div>

              <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-500">
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-500"/> 项目管理</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-500"/> 精细核算</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-500"/> 人才运营</span>
              </div>
            </div>

            {/* Right: Visual Element (40%) */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none">
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg shadow-blue-500/30 mb-4">
                      <Briefcase size={40} className="text-white" />
                    </div>
                    <h3 className="text-[#1F2329] font-bold text-lg">商务服务数智平台</h3>
                    <p className="text-slate-400 text-sm mt-1">项目+人才双轮驱动</p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { icon: FileText, name: 'L2C', desc: '线索转化' },
                      { icon: Briefcase, name: '项目', desc: '全周期管理' },
                      { icon: Users, name: 'HRM', desc: '人才管理' },
                      { icon: Calculator, name: '核算', desc: '精细成本' },
                      { icon: TrendingUp, name: 'BI', desc: '经营分析' },
                      { icon: BarChart3, name: '绩效', desc: '目标管理' },
                    ].map((module, idx) => (
                      <div key={idx} className="bg-blue-50 rounded-lg p-3 text-center border border-blue-100 hover:bg-blue-100 transition">
                        <module.icon size={20} className="mx-auto text-blue-600 mb-1" />
                        <div className="text-[#1F2329] font-bold text-sm">{module.name}</div>
                        <div className="text-slate-500 text-xs mt-0.5">{module.desc}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-blue-100 grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-[#E60012]">40%+</div>
                      <div className="text-xs text-slate-400">项目效率</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">30%+</div>
                      <div className="text-xs text-slate-400">人效提升</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-500">95%</div>
                      <div className="text-xs text-slate-400">核算准确</div>
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
        source="industry-business-services"
      />
    </>
  )
}
