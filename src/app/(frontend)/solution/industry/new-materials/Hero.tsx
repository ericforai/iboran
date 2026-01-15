'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle, Atom } from 'lucide-react'
import { DemoRequestModal } from '@/components/DemoRequestModal'

export default function Hero() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-800">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-red-500/10 rounded-full blur-3xl"></div>
          {/* Molecular pattern overlay */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3Ccircle cx='10' cy='10' r='3'/%3E%3Ccircle cx='50' cy='50' r='3'/%3E%3Cpath d='M30 30L10 10M30 30L50 50' stroke='%23ffffff' stroke-width='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            <div className="flex-1 text-center lg:text-left">
              {/* Industry Tag */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6">
                <Atom size={16} className="text-emerald-400" />
                新材料行业解决方案
              </div>
              
              {/* Main Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                <span className="text-emerald-400">数智驱动</span>负极材料<br/>
                企业<span className="text-[#E60012]">IPO</span>进程
              </h1>
              
              <p className="text-lg md:text-xl text-slate-300 mb-4 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                U9 cloud为新材料企业提供IPO合规、成本精细化核算、多组织协同的一站式数字化解决方案
              </p>
              
              <p className="text-sm text-slate-400 mb-8 italic">
                &ldquo;新能源高速扩张，负极材料企业IPO加速，内控合规成为核心竞争力&rdquo;
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => setIsDemoOpen(true)}
                  className="px-8 py-3.5 bg-[#E60012] text-white rounded-md font-bold hover:bg-red-700 transition shadow-lg shadow-red-900/30 flex items-center gap-2 group"
                >
                  预约新材料专家咨询
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                </button>
                <button className="px-8 py-3.5 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-md font-semibold hover:bg-white/20 transition flex items-center gap-2">
                  下载行业白皮书
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-400">
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-400"/> U9 cloud验证</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-400"/> IPO合规支撑</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-400"/> 行业标杆案例</span>
              </div>
            </div>

            {/* Right side: Visual Element */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none">
              <div className="relative">
                {/* Material Visualization */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl shadow-lg shadow-emerald-500/30 mb-4">
                      <Atom size={40} className="text-white" />
                    </div>
                    <h3 className="text-white font-bold text-lg">新材料数智化平台</h3>
                    <p className="text-slate-400 text-sm mt-1">U9 cloud 行业解决方案</p>
                  </div>
                  
                  {/* Module Grid */}
                  <div className="grid grid-cols-3 gap-3">
                    {['财务管理', '供应链', '生产制造', '成本核算', '委外管理', '工程数据'].map((module, idx) => (
                      <div key={idx} className="bg-white/5 rounded-lg p-3 text-center border border-white/10 hover:bg-white/10 transition">
                        <div className="text-emerald-400 font-bold text-sm">{module}</div>
                        <div className="text-slate-500 text-xs mt-1">
                          {['总账/应收/应付', '采购/销售/库存', '生产/委外', '精细化核算', '外协加工', 'BOM/工艺'][idx]}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Stats */}
                  <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-[#E60012]">2个月</div>
                      <div className="text-xs text-slate-400">快速上线</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-emerald-400">78份</div>
                      <div className="text-xs text-slate-400">SOP建立</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-400">IPO</div>
                      <div className="text-xs text-slate-400">合规支撑</div>
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
