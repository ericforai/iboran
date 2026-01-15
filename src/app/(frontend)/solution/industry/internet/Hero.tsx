'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle, Globe, Cloud, Code2, Database, TrendingUp, Users } from 'lucide-react'
import { DemoRequestModal } from '@/components/DemoRequestModal'

export default function Hero() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
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
                <Globe size={16} className="text-purple-400" />
                互联网行业解决方案
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                <span className="text-purple-400">数智驱动</span><br/>
                <span className="text-[#E60012]">全球化</span>运营
              </h1>
              
              <p className="text-lg md:text-xl text-slate-300 mb-4 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                用友BIP为互联网企业提供集团管控、全球化运营、业财融合的一站式数智化解决方案
              </p>
              
              <p className="text-sm text-slate-400 mb-8 italic">
                &ldquo;技术驱动业务，数据赋能决策&rdquo;
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
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-400"/> 集团管控</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-400"/> 全球化运营</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-400"/> 业财融合</span>
              </div>
            </div>

            {/* Right: Visual Element (40%) */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none">
              <div className="relative">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl shadow-lg shadow-purple-500/30 mb-4">
                      <Globe size={40} className="text-white" />
                    </div>
                    <h3 className="text-white font-bold text-lg">互联网数智平台</h3>
                    <p className="text-slate-400 text-sm mt-1">集团管控与全球运营</p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { icon: Globe, name: '全球化', desc: '多语多币' },
                      { icon: Cloud, name: '云原生', desc: '弹性扩展' },
                      { icon: Code2, name: '技术', desc: '中台架构' },
                      { icon: Database, name: '数据', desc: '智能分析' },
                      { icon: TrendingUp, name: 'BI', desc: '经营洞察' },
                      { icon: Users, name: 'HR', desc: '人才管理' },
                    ].map((module, idx) => (
                      <div key={idx} className="bg-white/5 rounded-lg p-3 text-center border border-white/10 hover:bg-white/10 transition">
                        <module.icon size={20} className="mx-auto text-purple-400 mb-1" />
                        <div className="text-white font-bold text-sm">{module.name}</div>
                        <div className="text-slate-500 text-xs mt-0.5">{module.desc}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-[#E60012]">50%+</div>
                      <div className="text-xs text-slate-400">效率提升</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-400">30+</div>
                      <div className="text-xs text-slate-400">国家覆盖</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-400">99.9%</div>
                      <div className="text-xs text-slate-400">系统可用</div>
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
        source="industry-internet"
      />
    </>
  )
}
