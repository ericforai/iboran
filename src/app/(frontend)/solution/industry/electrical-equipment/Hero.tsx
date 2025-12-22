'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle, Zap } from 'lucide-react'
import { DemoRequestModal } from '@/components/DemoRequestModal'

export default function Hero() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
          {/* Electric pattern overlay */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M30 10L35 25H25L30 10zM30 50L25 35H35L30 50zM10 30L25 25V35L10 30zM50 30L35 35V25L50 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            <div className="flex-1 text-center lg:text-left">
              {/* Industry Tag */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6">
                <Zap size={16} className="text-cyan-400" />
                电气装备行业解决方案
              </div>
              
              {/* Main Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                <span className="text-cyan-400">智造</span>电气未来<br/>
                <span className="text-[#E60012]">数智驱动</span>产业升级
              </h1>
              
              <p className="text-lg md:text-xl text-slate-300 mb-4 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                用友BIP超级版为电气装备行业提供智能制造、项目型生产、供应链协同的一站式数字化解决方案
              </p>
              
              <p className="text-sm text-slate-400 mb-8 italic">
                &ldquo;技术创新与智能化驱动电气装备行业高质量发展&rdquo;
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => setIsDemoOpen(true)}
                  className="px-8 py-3.5 bg-[#E60012] text-white rounded-md font-bold hover:bg-red-700 transition shadow-lg shadow-red-900/30 flex items-center gap-2 group"
                >
                  预约电气装备行业专家咨询
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                </button>
                <button className="px-8 py-3.5 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-md font-semibold hover:bg-white/20 transition flex items-center gap-2">
                  下载行业白皮书
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-400">
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-400"/> 用友BIP超级版</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-400"/> APS智能排程</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-400"/> 项目型制造</span>
              </div>
            </div>

            {/* Right side: Visual Element */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none">
              <div className="relative">
                {/* Electric Equipment Visualization */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl shadow-lg shadow-cyan-500/30 mb-4">
                      <Zap size={40} className="text-white" />
                    </div>
                    <h3 className="text-white font-bold text-lg">电气装备数智平台</h3>
                    <p className="text-slate-400 text-sm mt-1">用友BIP超级版 行业解决方案</p>
                  </div>
                  
                  {/* Module Grid */}
                  <div className="grid grid-cols-3 gap-3">
                    {['生产计划', '仓储管理', '运输物流', '项目管控', '财务云', '供应链'].map((module, idx) => (
                      <div key={idx} className="bg-white/5 rounded-lg p-3 text-center border border-white/10 hover:bg-white/10 transition">
                        <div className="text-cyan-400 font-bold text-sm">{module}</div>
                        <div className="text-slate-500 text-xs mt-1">
                          {['MTO/MTS', 'WMS条码', 'TMS追踪', 'BOM成本', '业财融合', '多组织协同'][idx]}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Stats */}
                  <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-[#E60012]">25%+</div>
                      <div className="text-xs text-slate-400">生产效率提升</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-cyan-400">30%+</div>
                      <div className="text-xs text-slate-400">库存周转提升</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-400">95%+</div>
                      <div className="text-xs text-slate-400">交付准时率</div>
                    </div>
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
