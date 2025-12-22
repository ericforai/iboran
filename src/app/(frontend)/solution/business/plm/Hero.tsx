'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle, Database, Zap, Layout } from 'lucide-react'
import { DemoRequestModal } from '@/components/DemoRequestModal'

export default function Hero() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-white">
        {/* Background Graphic Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 skew-x-12 translate-x-32 z-0"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0052D9] text-sm font-semibold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0052D9] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0052D9]"></span>
                </span>
                YonBIP PLM 研发云
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2329] leading-tight mb-6">
                从<span className="text-[#0052D9]">需求规划</span>到<br/>
                <span className="text-[#E60012]">产品创新</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                打破设计与制造壁垒。用友BIP PLM通过数据驱动的全生命周期管理，助力企业实现高效率、高质量、低成本的产品创新。
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

              <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-slate-500">
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-500"/> 研发效率提升 30%</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-500"/> 设计制造一体化</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-500"/> IPD 最佳实践</span>
              </div>
            </div>

            <div className="flex-1 w-full max-w-2xl lg:max-w-none">
              <div className="relative">
                {/* Visual Representation of PLM/R&D Cloud */}
                <div className="bg-white rounded-2xl shadow-2xl p-8 border border-slate-100 relative z-10 overflow-hidden">
                  <div className="absolute top-0 right-0 p-4">
                    <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center -mr-10 -mt-10 blur-xl"></div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-3">
                        <Database size={20} />
                      </div>
                      <div className="text-xs text-slate-500 mb-1">单一数据源</div>
                      <div className="text-sm font-bold text-[#1F2329]">物料 & BOM 库</div>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-right">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-[#E60012] mb-3 ml-auto">
                        <Zap size={20} />
                      </div>
                      <div className="text-xs text-slate-500 mb-1">流程驱动</div>
                      <div className="text-sm font-bold text-[#1F2329]">工程变更 ECM</div>
                    </div>
                    <div className="col-span-2 p-4 bg-blue-600 rounded-xl text-white">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2 text-sm font-bold">
                          <Layout size={18} />
                          IPD 数字化看板
                        </div>
                        <span className="text-[10px] bg-blue-500 px-2 py-0.5 rounded">实时更新</span>
                      </div>
                      <div className="flex gap-1 h-2 bg-blue-700/50 rounded-full overflow-hidden mb-3">
                        <div className="bg-white w-1/4"></div>
                        <div className="bg-white w-1/3 opacity-70"></div>
                        <div className="bg-white w-1/6 opacity-40"></div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-[10px] opacity-90">
                        <div>
                          <div className="mb-0.5">需求分析</div>
                          <div className="font-bold">85%</div>
                        </div>
                        <div>
                          <div className="mb-0.5">产品设计</div>
                          <div className="font-bold">62%</div>
                        </div>
                        <div>
                          <div className="mb-0.5">样品试制</div>
                          <div className="font-bold">20%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative behind elements */}
                <div className="absolute -z-10 top-6 -right-6 w-full h-full bg-[#0052D9]/5 rounded-2xl"></div>
                <div className="absolute -z-20 top-12 -right-12 w-full h-full bg-slate-50 rounded-2xl border border-slate-100"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <DemoRequestModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </>
  )
}
