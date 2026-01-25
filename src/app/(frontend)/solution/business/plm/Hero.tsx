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
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2329] leading-tight mb-6">
                从<span className="text-[#0052D9]">需求规划</span>到<br/>
                <span className="text-[#E60012]">产品创新</span>
              </h2>
              
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
                <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-500"/> IPD 先进实践</span>
              </div>
            </div>

            <div className="flex-1 w-full max-w-2xl lg:max-w-none">
{/* Visual Representation of PLM/R&D Cloud - Dashboard Mockup */}
                <div className="relative">
                   {/* Main Dashboard Panel */}
                   <div className="bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden relative z-10 w-full">
                      {/* Window Controls */}
                      <div className="h-8 bg-slate-50 border-b border-slate-100 flex items-center px-4 gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>

                      {/* Mockup Content */}
                      <div className="grid grid-cols-12 h-[350px]">
                        {/* Sidebar: BOM/Project Tree */}
                        <div className="col-span-4 border-r border-slate-100 p-4 bg-slate-50/50">
                          <div className="flex items-center gap-2 mb-4 text-xs font-bold text-slate-500 uppercase">
                            <span className="w-1.5 h-1.5 bg-[#0052D9] rounded-full"></span> 
                            Project Explorer
                          </div>
                          <div className="space-y-3">
                             <div className="flex items-center gap-2 text-sm font-semibold text-[#0052D9] bg-blue-50 p-2 rounded">
                               <Database size={14} /> EV_Platform_V2.0
                             </div>
                             <div className="pl-4 space-y-2 text-xs text-slate-600">
                                <div className="flex items-center gap-2 hover:bg-slate-100 p-1 rounded cursor-pointer">
                                  <Layout size={12} /> 01_Chassis_System
                                </div>
                                <div className="flex items-center gap-2 hover:bg-slate-100 p-1 rounded cursor-pointer">
                                  <Layout size={12} /> 02_Power_Battery
                                </div>
                                <div className="flex items-center gap-2 hover:bg-slate-100 p-1 rounded cursor-pointer">
                                  <Zap size={12} /> 03_Electrical_Control
                                </div>
                             </div>
                          </div>
                          
                          <div className="mt-8 border-t border-slate-100 pt-4">
                             <div className="flex items-center gap-2 mb-2 text-xs font-bold text-slate-500 uppercase">
                               <span className="w-1.5 h-1.5 bg-[#E60012] rounded-full"></span>
                               Alerts
                             </div>
                             <div className="bg-red-50 text-[#E60012] p-2 rounded text-[10px] flex items-center gap-2 mb-2">
                               <span className="font-bold">!!</span> 
                               <span>Change Request #2908 Pending</span>
                             </div>
                          </div>
                        </div>

                        {/* Main Viewing Area: 3D Model / Gantt */}
                        <div className="col-span-8 p-6 bg-white relative">
                           {/* Header of View */}
                           <div className="flex justify-between items-center mb-6">
                             <div>
                               <h3 className="text-sm font-bold text-slate-800">Chassis Assembly - Rev A.2</h3>
                               <p className="text-[10px] text-slate-400">Last Modified: 2 mins ago by Admin</p>
                             </div>
                             <div className="flex gap-2">
                                <span className="px-2 py-1 bg-green-50 text-green-600 text-[10px] font-bold rounded">Released</span>
                             </div>
                           </div>

                           {/* Analysis Chart Mockup */}
                           <div className="space-y-4">
                              <div className="flex gap-4 mb-2">
                                 <div className="flex-1 bg-blue-50 rounded h-20 relative overflow-hidden">
                                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#0052D9] opacity-20"></div>
                                    <div className="absolute inset-0 flex items-center justify-center text-[#0052D9] font-bold text-xs flex-col gap-1">
                                      <Zap size={16} />
                                      <span>Simulation: Pass</span>
                                    </div>
                                 </div>
                                 <div className="flex-1 bg-slate-50 rounded h-20 flex items-center justify-center flex-col gap-1 text-slate-400">
                                    <div className="w-8 h-8 rounded-full border-2 border-slate-200 flex items-center justify-center">85%</div>
                                    <span className="text-[10px]">Cost Target</span>
                                 </div>
                              </div>

                              <div className="relative h-24 bg-slate-50 rounded border border-slate-100 flex items-center justify-center">
                                 {/* Fake Gantt Lines */}
                                 <div className="absolute top-4 left-4 w-1/3 h-2 bg-blue-200 rounded-full"></div>
                                 <div className="absolute top-8 left-1/4 w-1/2 h-2 bg-blue-300 rounded-full"></div>
                                 <div className="absolute top-12 left-1/3 w-1/4 h-2 bg-blue-400 rounded-full"></div>
                                 <div className="z-10 bg-white px-3 py-1 rounded shadow-sm text-[10px] font-bold text-slate-500 border border-slate-100">
                                   IPD Stage Gate 3: Verified
                                 </div>
                              </div>
                           </div>
                        </div>
                      </div>
                   </div>

                   {/* Decorative elements behind */}
                   <div className="absolute -z-10 -top-4 -right-4 w-full h-full bg-[#E60012] opacity-[0.03] rounded-2xl"></div>
                   <div className="absolute -z-20 -bottom-4 -left-4 w-full h-full bg-[#0052D9] opacity-[0.03] rounded-2xl"></div>
                </div>
            </div>

          </div>
        </div>
      </section>

      <DemoRequestModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </>
  )
}
