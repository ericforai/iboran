'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle, Building2, Shield, TrendingUp, FileText, Users, BarChart3 } from 'lucide-react'
import { DemoRequestModal } from '@/components/DemoRequestModal'

export default function Hero() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Left: Text Content (60%) */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6">
                <Building2 size={16} className="text-red-400" />
                国资国企解决方案
              </div>
              
                用友BIP构建&ldquo;智慧监管+智能运营&rdquo;体系，激活数智新动能，打造新质生产力
              
              <p className="text-sm text-slate-400 mb-8 italic">
                &ldquo;数智赋能国企改革，提升核心竞争力&rdquo;
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
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-400"/> 智慧监管</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-400"/> 风控合规</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-400"/> 国企改革</span>
              </div>
            </div>

            {/* Right: Visual Element (40%) */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none">
              <div className="relative">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-500 to-yellow-500 rounded-xl shadow-lg shadow-red-500/30 mb-4">
                      <Building2 size={40} className="text-white" />
                    </div>
                    <h3 className="text-white font-bold text-lg">国资国企数智平台</h3>
                    <p className="text-slate-400 text-sm mt-1">智慧监管与智能运营</p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { icon: Building2, name: '监管', desc: '智慧管控' },
                      { icon: Shield, name: '风控', desc: '合规管理' },
                      { icon: FileText, name: '资产', desc: '国有资产' },
                      { icon: Users, name: '人才', desc: '干部管理' },
                      { icon: TrendingUp, name: '经营', desc: '业绩考核' },
                      { icon: BarChart3, name: '决策', desc: '数据驾驶舱' },
                    ].map((module, idx) => (
                      <div key={idx} className="bg-white/5 rounded-lg p-3 text-center border border-white/10 hover:bg-white/10 transition">
                        <module.icon size={20} className="mx-auto text-red-400 mb-1" />
                        <div className="text-white font-bold text-sm">{module.name}</div>
                        <div className="text-slate-500 text-xs mt-0.5">{module.desc}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-[#E60012]">100+</div>
                      <div className="text-xs text-slate-400">央企服务</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-yellow-400">实时</div>
                      <div className="text-xs text-slate-400">穿透监管</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-400">40%+</div>
                      <div className="text-xs text-slate-400">效能提升</div>
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
        source="industry-state-owned"
      />
    </>
  )
}
