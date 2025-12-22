'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle, TrendingUp, Users, Zap } from 'lucide-react'
import { DemoRequestModal } from '@/components/DemoRequestModal'

export default function Hero() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-[#F7F8FA]">
        {/* Background Graphic Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 skew-x-12 translate-x-20 z-0"></div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-red-100 rounded-full blur-3xl opacity-30 z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#0052D9] text-sm font-semibold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0052D9] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0052D9]"></span>
                </span>
                YonBIP & YonSuite
              </div>
              
              {/* 静态标题 - SEO 友好 */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2329] leading-tight mb-6">
                从<span className="text-[#0052D9]">线索</span>到<br/>
                <span className="text-[#E60012]">收款</span>的端到端闭环
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                L2C (Lead to Cash) 解决方案，覆盖从营销活动、线索管理、销售机会到合同签订、订单履约、收款核销的全流程，助力企业打造高效增长引擎。
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
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-500"/> 销售效率 +20%</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-500"/> 合同周期 -30%</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-500"/> 订单准确率 99%</span>
              </div>
            </div>

            <div className="flex-1 w-full max-w-lg lg:max-w-none">
              <div className="relative">
                {/* Sales Funnel Visualization */}
                <div className="bg-white rounded-2xl shadow-2xl p-6 border border-slate-100 relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-bold text-[#1F2329]">销售漏斗实时监控</h3>
                    <span className="text-xs font-mono bg-green-100 text-green-700 px-2 py-1 rounded">LIVE</span>
                  </div>
                  
                  <div className="space-y-3">
                    {/* Funnel stages */}
                    <div className="flex items-center gap-3">
                      <div className="w-full bg-blue-500 text-white text-sm font-medium py-2 px-4 rounded-lg text-center">
                        线索 <span className="font-bold">1,240</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 px-4">
                      <div className="w-[85%] bg-blue-400 text-white text-sm font-medium py-2 px-4 rounded-lg text-center">
                        商机 <span className="font-bold">856</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 px-8">
                      <div className="w-[70%] bg-blue-300 text-white text-sm font-medium py-2 px-4 rounded-lg text-center">
                        报价 <span className="font-bold">423</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 px-12">
                      <div className="w-[55%] bg-green-500 text-white text-sm font-medium py-2 px-4 rounded-lg text-center">
                        合同 <span className="font-bold">198</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 px-16">
                      <div className="w-[40%] bg-[#E60012] text-white text-sm font-medium py-2 px-4 rounded-lg text-center">
                        收款 <span className="font-bold">¥2.4M</span>
                      </div>
                    </div>
                  </div>

                  {/* Stats row */}
                  <div className="mt-6 pt-4 border-t border-slate-100 grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-green-600 mb-1">
                        <TrendingUp size={14}/>
                        <span className="text-sm font-bold">+18%</span>
                      </div>
                      <div className="text-xs text-slate-500">转化率</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-[#0052D9] mb-1">
                        <Users size={14}/>
                        <span className="text-sm font-bold">42</span>
                      </div>
                      <div className="text-xs text-slate-500">活跃销售</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-[#E60012] mb-1">
                        <Zap size={14}/>
                        <span className="text-sm font-bold">3.2天</span>
                      </div>
                      <div className="text-xs text-slate-500">平均周期</div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative behind elements */}
                <div className="absolute -z-10 top-6 -right-6 w-full h-full bg-slate-200 rounded-2xl"></div>
                <div className="absolute -z-20 top-12 -right-12 w-full h-full bg-slate-100 rounded-2xl"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <DemoRequestModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </>
  )
}
