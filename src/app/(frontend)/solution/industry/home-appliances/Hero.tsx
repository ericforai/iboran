'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle, Smartphone, Speaker, Tv, Cpu, ShoppingBag, BarChart3, Package, Users } from 'lucide-react'
import { DemoRequestModal } from '@/components/DemoRequestModal'

export default function Hero() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br from-[#0A192F] via-[#0D2543] to-[#11325D]">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-red-500/10 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Left: Text Content (60%) */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6">
                <Speaker size={16} className="text-blue-400" />
                家用电器及消费电子行业解决方案
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                激发<span className="text-[#E60012]">全渠道</span>价值<br/>
                实现<span className="text-blue-400">一盘货</span>管理
              </h2>
              
              <p className="text-lg md:text-xl text-slate-300 mb-4 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                用友YonSuite为3C家电企业打通「工厂-终端-消费者」全链路，实现序列号全生命周期追溯与多仓库存协同管理。
              </p>
              
              <p className="text-sm text-slate-400 mb-8 italic">
                &ldquo;实时感知市场变化，驱动家电行业全渠道高增长&rdquo;
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
                  下载行业白皮书
                </button>
              </div>

              <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-400">
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-400"/> 序列号追溯</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-400"/> 一盘货管理</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-400"/> 全渠道集成</span>
              </div>
            </div>

            {/* Right: Visual Element (40%) */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none">
              <div className="relative">
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg shadow-blue-500/30 mb-4">
                      <Smartphone size={40} className="text-white" />
                    </div>
                    <h3 className="text-white font-bold text-lg">家电数智化经营平台</h3>
                    <p className="text-slate-400 text-sm mt-1">全链路贯通 & 价值激发</p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { icon: ShoppingBag, name: '电商', desc: '多平台集成' },
                      { icon: Package, name: '库存', desc: '多仓一盘货' },
                      { icon: Cpu, name: 'SN码', desc: '全周期追溯' },
                      { icon: BarChart3, name: '业财', desc: '一体化核算' },
                      { icon: Users, name: '营销', desc: '终端掌控' },
                      { icon: Tv, name: '售后', desc: '服务闭环' },
                    ].map((module, idx) => (
                      <div key={idx} className="bg-white/5 rounded-lg p-3 text-center border border-white/10 hover:bg-white/10 transition group">
                        <module.icon size={20} className="mx-auto text-blue-400 mb-1 group-hover:scale-110 transition-transform" />
                        <div className="text-white font-bold text-sm">{module.name}</div>
                        <div className="text-slate-500 text-xs mt-0.5">{module.desc}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-[#E60012]">100%</div>
                      <div className="text-xs text-slate-400">SN 追溯</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-400">25%+</div>
                      <div className="text-xs text-slate-400">库存周转</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-400">40%+</div>
                      <div className="text-xs text-slate-400">效率提升</div>
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
        source="industry-home-appliances"
      />
    </>
  )
}
