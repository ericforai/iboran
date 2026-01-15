'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, ArrowRight, ShieldCheck, Zap, Globe } from 'lucide-react'
import { DemoRequestModal } from '@/components/DemoRequestModal'

export default function Hero() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <>
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex-1 max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-[#E60012] text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>企业数智化底座</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-[#1F2329] leading-tight mb-6">
                用友 BIP <br/>
                <span className="text-3xl lg:text-5xl text-slate-600 font-semibold mt-2 block">
                  AI X 数据 X 流程 <br/>
                  <span className="text-2xl lg:text-4xl">原生一体，让 AI 真正落地</span>
                </span>
              </h1>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                全球领先的企业软件与智能服务平台（Business Innovation Platform）。
                深度融合企业“研供产销服”与“人财物客项”核心场景，以数智使能企业商业创新，成就数智企业。
              </p>

              <div className="flex flex-wrap gap-6 mb-10">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-[#0052D9]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#1F2329]">业务敏捷</div>
                    <div className="text-xs text-slate-500">响应速度提升 [50]%</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-[#0052D9]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#1F2329]">全球运营</div>
                    <div className="text-xs text-slate-500">支撑 [100]+ 国家业务</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-[#0052D9]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#1F2329]">安全可控</div>
                    <div className="text-xs text-slate-500">100% 国产化适配</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setIsDemoOpen(true)}
                  className="px-8 py-4 bg-[#E60012] text-white font-bold rounded-md hover:bg-red-700 transition-all flex items-center gap-2 shadow-sm hover:shadow-md"
                >
                  预约专家演示
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="px-8 py-4 border-2 border-[#0052D9] text-[#0052D9] font-bold rounded-md hover:bg-blue-50 transition-all">
                  获取交付报价
                </button>
              </div>
            </motion.div>

            {/* Right Visual - Abstract Architecture */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex-1 w-full"
            >
              <div className="relative bg-white rounded-2xl shadow-xl border border-slate-100 p-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-50 to-transparent opacity-50 rounded-full blur-3xl -mr-16 -mt-16"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">YonBIP 架构预览</div>
                    <div className="flex gap-1">
                      <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                      <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                    </div>
                  </div>

                  {/* Core Content */}
                  <div className="space-y-4">
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded bg-[#E60012] flex items-center justify-center text-white">
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <div className="font-bold text-[#1F2329]">企业 AI 智能体</div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {['智友助手', '数智员工', '经营分析', '智能预测'].map(item => (
                          <div key={item} className="bg-white px-3 py-2 rounded text-xs text-slate-600 font-medium text-center border border-slate-100">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-50/50 rounded-lg p-4 border border-blue-100">
                        <div className="font-bold text-[#0052D9] text-sm mb-2">业务中台</div>
                        <div className="space-y-1.5">
                          {['财务云', '供应链云', '人力云', '营销云'].map(item => (
                            <div key={item} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#0052D9]"></div>
                              <span className="text-xs text-slate-600">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-slate-50/50 rounded-lg p-4 border border-slate-100">
                        <div className="font-bold text-slate-700 text-sm mb-2">数据中台</div>
                        <div className="space-y-1.5">
                          {['主数据', '数据湖', 'BI分析', '数据治理'].map(item => (
                            <div key={item} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                              <span className="text-xs text-slate-600">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-900 rounded-lg p-4 text-center">
                      <div className="text-white font-bold text-sm mb-1">iuap 统一底座</div>
                      <div className="text-slate-400 text-xs">云原生 · 微服务 · 低代码 · 连接集成</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <DemoRequestModal 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)} 
        source="Product_BIP"
      />
    </>
  )
}
