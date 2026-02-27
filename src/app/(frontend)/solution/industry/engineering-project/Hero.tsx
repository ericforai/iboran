'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle, Building2 } from 'lucide-react'
import { DemoRequestModal } from '@/components/DemoRequestModal'

export default function Hero() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  const handleOpenConsult = () => {
    window.dispatchEvent(new CustomEvent('open-consult-modal'))
  }

  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-red-500/10 rounded-full blur-3xl"></div>
          {/* Engineering pattern overlay */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M30 10L35 25H25L30 10zM30 50L25 35H35L30 50zM10 30L25 25V35L10 30zM50 30L35 35V25L50 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            <div className="flex-1 text-center lg:text-left">
              {/* Industry Tag */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6">
                <Building2 size={16} className="text-blue-400" />
                业主方工程项目管理解决方案
              </div>
              
              {/* Main Title */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                <span className="text-blue-400">数智引领</span> 驱动工程<br/>
                <span className="text-[#E60012]">全生命周期</span> 管控
              </h2>
              
              <p className="text-lg md:text-xl text-slate-300 mb-4 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                用友BIP超级版为投资业主方提供从规划立项、招标、合同、进度到验收转固的业财一体化深度解决方案
              </p>
              
              <p className="text-sm text-slate-400 mb-8 italic">
                &ldquo;从制度驱动到数据驱动，让工程质量、成本、进度风险无处遁形&rdquo;
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => setIsDemoOpen(true)}
                  className="px-8 py-3.5 bg-[#E60012] text-white rounded-md font-bold hover:bg-red-700 transition shadow-lg shadow-red-900/30 flex items-center gap-2 group"
                >
                  预约项目管理专家咨询
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                </button>
                <button onClick={handleOpenConsult} className="px-8 py-3.5 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-md font-semibold hover:bg-white/20 transition flex items-center gap-2">
                  下载工程白皮书
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-400">
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-400"/> 用友BIP超级版</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-400"/> 业财一体深度融合</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-400"/> 工程全生命周期管控</span>
              </div>
            </div>

            {/* Right side: Visual Element */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none">
              <div className="relative">
                {/* Project Visualization */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl shadow-lg shadow-blue-500/30 mb-4">
                      <Building2 size={40} className="text-white" />
                    </div>
                    <h3 className="text-white font-bold text-lg">工程项目全过程平台</h3>
                    <p className="text-slate-400 text-sm mt-1">用友BIP超级版 业主方专属</p>
                  </div>
                  
                  {/* Module Grid */}
                  <div className="grid grid-cols-3 gap-3">
                    {['立项规划', '招标管理', '合同管理', '物资管理', '成本控制', '验收转固'].map((module, idx) => (
                      <div key={idx} className="bg-white/5 rounded-lg p-3 text-center border border-white/10 hover:bg-white/10 transition">
                        <div className="text-blue-400 font-bold text-sm">{module}</div>
                        <div className="text-slate-500 text-xs mt-1">
                          {['规划驱动', '规范透明', '精细协同', '按需供应', '实时预警', '价值闭环'][idx]}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Stats */}
                  <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-[#E60012]">50%</div>
                      <div className="text-xs text-slate-400">结算效率提升</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-400">99%以上</div>
                      <div className="text-xs text-slate-400">过程追溯能力</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-400">Real-time</div>
                      <div className="text-xs text-slate-400">成本实时预警</div>
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
