'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle, TrendingUp, BarChart3 } from 'lucide-react'
import { DemoRequestModal } from '@/components/DemoRequestModal'

export default function Hero() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-white">
        {/* Background Graphic Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 -skew-x-12 translate-x-20 z-0"></div>
        <div className="absolute top-40 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[#E60012] text-sm font-semibold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E60012] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E60012]"></span>
                </span>
                P2C: Project to Cost 解决方案
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2329] leading-tight mb-6">
                实现<span className="text-[#0052D9]">项目</span>到<br/>
                <span className="text-[#E60012]">成本</span>的精细化管控
              </h2>
              
              <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                全生命周期数字化管理闭环。打通立项、计划、预算、采购、合同、劳务、分包到最终成本结转，让每一分钱都花在明处。
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => setIsDemoOpen(true)}
                  className="px-8 py-3.5 bg-[#E60012] text-white rounded-md font-bold hover:bg-red-700 transition shadow-lg shadow-red-200 flex items-center gap-2 group"
                >
                  预约专家演示
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                </button>
                <button className="px-8 py-3.5 bg-white text-[#0052D9] border-2 border-[#0052D9] rounded-md font-semibold hover:bg-blue-50 transition flex items-center gap-2">
                  下载解决方案白皮书
                </button>
              </div>

              <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-500">
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-500"/> 核算效率 +50%</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-500"/> 成本偏差率 &lt; 5%</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-500"/> 99%以上业财自动对账</span>
              </div>
            </div>

            <div className="flex-1 w-full max-w-lg lg:max-w-none">
              <div className="relative">
                {/* P2C Visualization Dashboard Mockup */}
                <div className="bg-white rounded-2xl shadow-2xl p-6 border border-slate-100 relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center">
                        <BarChart3 size={18} className="text-[#E60012]"/>
                      </div>
                      <h3 className="font-bold text-[#1F2329]">项目成本实时看板</h3>
                    </div>
                    <span className="text-xs font-mono bg-blue-100 text-[#0052D9] px-2 py-1 rounded">YonSuite 数智化引擎</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                      <p className="text-xs text-slate-500 mb-1">项目总预算</p>
                      <p className="text-xl font-bold text-[#1F2329]">¥ 12,450,000</p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 shadow-inner">
                      <p className="text-xs text-slate-500 mb-1">已发生成本</p>
                      <p className="text-xl font-bold text-[#0052D9]">¥ 8,124,500</p>
                      <div className="mt-2 w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-[#0052D9] h-full w-[65%]"></div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <span className="text-slate-600">采购成本</span>
                      </div>
                      <span className="font-semibold text-[#1F2329]">¥ 4,200,000</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        <span className="text-slate-600">人工成本</span>
                      </div>
                      <span className="font-semibold text-[#1F2329]">¥ 2,800,000</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                        <span className="text-slate-600">其他制造费用</span>
                      </div>
                      <span className="font-semibold text-[#1F2329]">¥ 1,124,500</span>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-sm font-bold text-[#1F2329]">成本趋势预警</h4>
                      <TrendingUp size={16} className="text-green-500"/>
                    </div>
                    <div className="h-24 flex items-end justify-between gap-2 px-2">
                      {[40, 60, 45, 70, 85, 90, 65, 55, 75, 80].map((h, i) => (
                        <div 
                          key={i} 
                          className={`w-full rounded-t-sm transition-all duration-500 ${h > 80 ? 'bg-red-400' : 'bg-[#0052D9]'}`}
                          style={{ height: `${h}%` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Decorative floating elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-red-50 rounded-2xl -z-10 rotate-12 blur-sm"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-50 rounded-full -z-10 opacity-60"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <DemoRequestModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </>
  )
}
