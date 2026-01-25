'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, ArrowRight, Zap, Globe, LayoutGrid, ShieldCheck } from 'lucide-react'
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
                <span>成长型集团云 ERP 整体解决方案</span>
              </div>
              
              <h2 className="text-4xl lg:text-6xl font-bold text-[#1F2329] leading-tight mb-6">
                用友 U8 cloud <br/>
                <span className="text-2xl lg:text-4xl text-slate-600 font-semibold mt-2 block leading-snug">
                  敏经营 · 轻管理 · 简 IT
                </span>
              </h2>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                为成长型集团提供集人财物客产供销于一体的云 ERP，深度覆盖业财税金档一体化、合规合并报表、全球化经营及全栈信创场景。
              </p>

              <div className="flex flex-wrap gap-6 mb-10">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-[#0052D9]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#1F2329]">敏捷经营</div>
                    <div className="text-xs text-slate-500">快速响应市场变化</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                    <LayoutGrid className="w-5 h-5 text-[#0052D9]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#1F2329]">精益管理</div>
                    <div className="text-xs text-slate-500">全业务链条闭环管控</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-[#0052D9]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#1F2329]">全栈信创</div>
                    <div className="text-xs text-slate-500">[68]+ 项互认证证书</div>
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

            {/* Right Visual - Cloud ERP Architecture */}
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
                    <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">U8 cloud 数智化架构</div>
                    <div className="flex gap-1">
                      <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                      <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                    </div>
                  </div>

                  {/* Cloud ERP Service Layers */}
                  <div className="space-y-4">
                    <div className="bg-red-50 rounded-lg p-4 border border-red-100">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded bg-[#E60012] flex items-center justify-center text-white">
                          <Globe className="w-4 h-4" />
                        </div>
                        <div className="font-bold text-[#1F2329]">集团化深度应用</div>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {['智能财务', '供应链', '生产制造', '资金管理', '合并报表', '全栈信创'].map(item => (
                          <div key={item} className="bg-white px-2 py-1.5 rounded text-[10px] text-slate-600 font-medium text-center border border-slate-100">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-50/50 rounded-lg p-4 border border-blue-100">
                        <div className="font-bold text-[#0052D9] text-sm mb-2">多组织协同</div>
                        <div className="space-y-1.5">
                          {['财务集中控制', '跨组织采购', '协同生产', '内部往来销'].map(item => (
                            <div key={item} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#0052D9]"></div>
                              <span className="text-xs text-slate-600">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-slate-50/50 rounded-lg p-4 border border-slate-100">
                        <div className="font-bold text-slate-700 text-sm mb-2">开放集成</div>
                        <div className="space-y-1.5">
                          {['[610]+ OpenAPI', 'YonBIP 连接', 'YonSuite 融合', '第三方系统'].map(item => (
                            <div key={item} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                              <span className="text-xs text-slate-600">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-900 rounded-lg p-4 text-center">
                      <div className="text-white font-bold text-sm mb-1">数智化技术底座</div>
                      <div className="text-slate-400 text-xs">全面兼容国产化 CPU、操作系统、数据库</div>
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
        source="Product_U8Cloud"
      />
    </>
  )
}
