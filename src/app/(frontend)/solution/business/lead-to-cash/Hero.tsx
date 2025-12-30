'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle, TrendingUp, Users, Zap, BarChart2 } from 'lucide-react'
import { DemoRequestModal } from '@/components/DemoRequestModal'
import { motion } from 'framer-motion'

export default function Hero() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-slate-50 to-[#F7F8FA]">
        {/* Background Graphic Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/30 skew-x-12 translate-x-1/4 z-0"></div>
        <div className="absolute top-40 left-20 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-20 z-0"></div>
        <div className="absolute bottom-20 right-1/3 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-20 z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            <div className="flex-1 text-center lg:text-left max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-100 shadow-sm text-[#0052D9] text-sm font-semibold mb-8">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0052D9] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0052D9]"></span>
                  </span>
                  用友 BIP 核心领域解决方案
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1F2329] leading-tight mb-8 tracking-tight">
                  <span className="text-[#0052D9]">线索</span>驱动增长<br/>
                  <span className="text-[#E60012]">回款</span>保障经营
                </h1>
                
                <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                  连接营销、销售、商务与财务，打通 L2C (Lead to Cash) 全流程，构建“营-销-服”一体化增长引擎。
                </p>
                
                <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start mb-12">
                  <button 
                    onClick={() => setIsDemoOpen(true)}
                    className="px-10 py-4 bg-[#E60012] text-white rounded-lg font-bold hover:bg-red-700 transition-all shadow-xl shadow-red-100 hover:shadow-red-200 flex items-center gap-2 group text-lg"
                  >
                    预约专家演示
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
                  </button>
                  <button className="px-10 py-4 bg-white text-[#1F2329] border border-slate-200 rounded-lg font-bold hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center gap-2 text-lg">
                    下载白皮书
                  </button>
                </div>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 text-sm font-medium text-slate-500">
                  <span className="flex items-center gap-2"><CheckCircle size={18} className="text-green-500"/> 销售效率 +20%</span>
                  <span className="flex items-center gap-2"><CheckCircle size={18} className="text-green-500"/> 合同周期 -30%</span>
                  <span className="flex items-center gap-2"><CheckCircle size={18} className="text-green-500"/> 坏账率降低 50%</span>
                </div>
              </motion.div>
            </div>

            <div className="flex-1 w-full relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative z-10"
              >
                {/* Main Dashboard Card */}
                <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden relative">
                  {/* Glassmorphism Header */}
                  <div className="bg-white/80 backdrop-blur-sm border-b border-slate-100 p-4 flex items-center justify-between sticky top-0 z-20">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="text-xs font-mono text-slate-400">L2C Dashboard v3.0</div>
                  </div>

                  <div className="p-6 md:p-8">
                    {/* Top Metrics Row */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                        <div className="text-slate-500 text-xs font-medium mb-1">本季营收预测</div>
                        <div className="text-2xl font-bold text-[#1F2329]">¥ 12,580,000</div>
                        <div className="text-xs text-green-600 font-medium flex items-center gap-1 mt-1">
                          <TrendingUp size={12} /> +15.8% vs 目标
                        </div>
                      </div>
                      <div className="bg-purple-50/50 p-4 rounded-xl border border-purple-100">
                        <div className="text-slate-500 text-xs font-medium mb-1">销售漏斗总值</div>
                        <div className="text-2xl font-bold text-[#1F2329]">¥ 45,200,000</div>
                        <div className="text-xs text-blue-600 font-medium flex items-center gap-1 mt-1">
                          <Users size={12} /> 128 个活跃商机
                        </div>
                      </div>
                    </div>

                    {/* Funnel Chart Visualization (Simulated with CSS) */}
                    <div className="space-y-3 relative">
                      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-100 -z-10 border-l border-dashed border-slate-300"></div>
                      
                      {[
                        { label: "线索池", value: "2,540", width: "100%", color: "bg-slate-200", text: "text-slate-600" },
                        { label: "商机", value: "856", width: "80%", color: "bg-blue-200", text: "text-blue-700" },
                        { label: "报价", value: "423", width: "60%", color: "bg-blue-400", text: "text-white" },
                        { label: "合同", value: "198", width: "40%", color: "bg-blue-600", text: "text-white" },
                        { label: "回款", value: "¥8.5M", width: "30%", color: "bg-[#E60012]", text: "text-white" }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4 group cursor-default">
                          <div className="w-16 text-right text-xs font-medium text-slate-500">{item.label}</div>
                          <div className="flex-1">
                            <div 
                              className={`h-10 rounded-lg flex items-center justify-end px-4 text-sm font-bold ${item.color} ${item.text} shadow-sm group-hover:shadow-md transition-all duration-300`}
                              style={{ width: item.width }}
                            >
                              {item.value}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Cards */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute -right-8 top-20 bg-white p-4 rounded-xl shadow-xl border border-slate-100 hidden md:block"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                      <Zap size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">平均转化周期</div>
                      <div className="text-lg font-bold text-[#1F2329]">18 天 <span className="text-green-500 text-xs">-12%</span></div>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                  className="absolute -left-8 bottom-20 bg-white p-4 rounded-xl shadow-xl border border-slate-100 hidden md:block"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-[#0052D9]">
                      <BarChart2 size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">商机赢单率</div>
                      <div className="text-lg font-bold text-[#1F2329]">42.5% <span className="text-green-500 text-xs">+5.2%</span></div>
                    </div>
                  </div>
                </motion.div>

              </motion.div>
              
              {/* Back Decor */}
              <div className="absolute top-10 -right-10 w-full h-full bg-slate-200 rounded-3xl -z-10 rotate-3"></div>
            </div>
          </div>
        </div>
      </section>

      <DemoRequestModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </>
  )
}
