'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, ArrowRight, Zap, Globe, LayoutGrid } from 'lucide-react'
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
                <span>成长型企业商业创新平台</span>
              </div>
              
              <h2 className="text-4xl lg:text-6xl font-bold text-[#1F2329] leading-tight mb-6">
                用友 YonSuite <br/>
                <span className="text-2xl lg:text-4xl text-slate-600 font-semibold mt-2 block leading-snug">
                  数智飞轮驱动，全场景 SaaS 商业创新
                </span>
              </h2>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                作为成长型企业数智化 2.0 时代的领先选择，YonSuite 通过“数智飞轮”模型，
                深度覆盖 12 大业务场景，为创新企业提供云原生、微服务、低代码的一体化 SaaS 服务。
              </p>


              <div className="flex flex-wrap gap-6 mb-10">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-[#0052D9]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#1F2329]">极速交付</div>
                    <div className="text-xs text-slate-500">最快 [1] 个月上线</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                    <LayoutGrid className="w-5 h-5 text-[#0052D9]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#1F2329]">全场景盖</div>
                    <div className="text-xs text-slate-500">[400]+ 场景化应用</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-[#0052D9]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#1F2329]">全球化支撑</div>
                    <div className="text-xs text-slate-500">多语言/多币种/多准则</div>
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

            {/* Right Visual - Abstract SaaS Architecture */}
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
                    <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">YonSuite SaaS 架构</div>
                    <div className="flex gap-1">
                      <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                      <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                    </div>
                  </div>

                  {/* SaaS Service Layers */}
                  <div className="space-y-4">
                    <div className="bg-red-50 rounded-lg p-4 border border-red-100">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded bg-[#E60012] flex items-center justify-center text-white">
                          <Globe className="w-4 h-4" />
                        </div>
                        <div className="font-bold text-[#1F2329]">全场景 SaaS 服务</div>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {['业财一体', '供应链', '智能制造', '数字营销', '数智人力', '财税合规'].map(item => (
                          <div key={item} className="bg-white px-2 py-1.5 rounded text-[10px] text-slate-600 font-medium text-center border border-slate-100">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-50/50 rounded-lg p-4 border border-blue-100">
                        <div className="font-bold text-[#0052D9] text-sm mb-2">低代码开发</div>
                        <div className="space-y-1.5">
                          {['YonBuilder', '快速定制', '流程看板', '报表引擎'].map(item => (
                            <div key={item} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#0052D9]"></div>
                              <span className="text-xs text-slate-600">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-slate-50/50 rounded-lg p-4 border border-slate-100">
                        <div className="font-bold text-slate-700 text-sm mb-2">连接集成</div>
                        <div className="space-y-1.5">
                          {['API 枢纽', '电商对接', '银行集成', '第三方系统'].map(item => (
                            <div key={item} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                              <span className="text-xs text-slate-600">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-900 rounded-lg p-4 text-center">
                      <div className="text-white font-bold text-sm mb-1">公有云原生底座</div>
                      <div className="text-slate-400 text-xs">微服务架构 · 容器部署 · 弹性伸缩 · 全球合规</div>
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
        source="Product_YonSuite"
      />
    </>
  )
}
