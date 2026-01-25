'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle, Cpu, Factory, Package, Calculator, TrendingUp, Layers } from 'lucide-react'
import { DemoRequestModal } from '@/components/DemoRequestModal'

export default function Hero() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Left: Text Content (60%) */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6">
                <Cpu size={16} className="text-cyan-400" />
                电子IC行业解决方案
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                <span className="text-cyan-400">精细化</span>委外协同<br/>
                <span className="text-[#E60012]">全局</span>追溯
              </h2>
              
              <p className="text-lg md:text-xl text-slate-300 mb-4 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                用友BIP为电子IC企业提供批号/刻号全局追溯、实时成本/效益模拟与精细化委外协同管理
              </p>
              
              <p className="text-sm text-slate-400 mb-8 italic">
                &ldquo;从设计到封测，电子IC全链路数智化管理&rdquo;
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => setIsDemoOpen(true)}
                  className="px-8 py-3.5 bg-[#E60012] text-white rounded-md font-bold hover:bg-red-700 transition shadow-lg shadow-red-900/30 flex items-center gap-2 group"
                >
                  预约行业专家咨询
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                </button>
                <button className="px-8 py-3.5 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-md font-semibold hover:bg-white/20 transition">
                  下载白皮书
                </button>
              </div>

              <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-400">
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-400"/> 委外协同</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-400"/> 批号追溯</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-400"/> 成本模拟</span>
              </div>
            </div>

            {/* Right: Visual Element (40%) */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none">
              <div className="relative">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl shadow-lg shadow-cyan-500/30 mb-4">
                      <Cpu size={40} className="text-white" />
                    </div>
                    <h3 className="text-white font-bold text-lg">电子IC数智平台</h3>
                    <p className="text-slate-400 text-sm mt-1">精细化生产与追溯管理</p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { icon: Factory, name: 'MES', desc: '生产执行' },
                      { icon: Layers, name: '委外', desc: '协同管理' },
                      { icon: Package, name: '追溯', desc: '批号/刻号' },
                      { icon: Calculator, name: '成本', desc: '效益模拟' },
                      { icon: TrendingUp, name: 'YMS', desc: '良率管理' },
                      { icon: Cpu, name: 'WIP', desc: '在制管理' },
                    ].map((module, idx) => (
                      <div key={idx} className="bg-white/5 rounded-lg p-3 text-center border border-white/10 hover:bg-white/10 transition">
                        <module.icon size={20} className="mx-auto text-cyan-400 mb-1" />
                        <div className="text-white font-bold text-sm">{module.name}</div>
                        <div className="text-slate-500 text-xs mt-0.5">{module.desc}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-[#E60012]">100%</div>
                      <div className="text-xs text-slate-400">追溯覆盖</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-cyan-400">35%+</div>
                      <div className="text-xs text-slate-400">效率提升</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-400">20%+</div>
                      <div className="text-xs text-slate-400">成本优化</div>
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
        source="industry-electronic-ic"
      />
    </>
  )
}
