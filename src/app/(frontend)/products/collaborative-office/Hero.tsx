'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, ArrowRight, Zap, Puzzle, ShieldCheck, Cpu } from 'lucide-react'
import { DemoRequestModal } from '@/components/DemoRequestModal'

export default function Hero() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  const handleOpenConsult = () => {
    window.dispatchEvent(new CustomEvent('open-consult-modal'))
  }

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
                <span>数智化协同运营平台 COP</span>
              </div>
              
              <h2 className="text-4xl lg:text-6xl font-bold text-[#1F2329] leading-tight mb-6">
                A8 协同办公 <br/>
                <span className="text-2xl lg:text-4xl text-slate-600 font-semibold mt-2 block leading-snug">
                  AI+协同深度融合，成就高绩效组织
                </span>
              </h2>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                面向中大型及集团化组织，打造“智能、集成、信创”的协同运营底座。
                通过低代码 CAP 平台与全栈信创适配，助力组织打破信息孤岛，实现数字化转型升级。
              </p>

              <div className="flex flex-wrap gap-6 mb-10">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-[#0052D9]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#1F2329]">效率提升</div>
                    <div className="text-xs text-slate-500">协同效率提升 [30]%+</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                    <Puzzle className="w-5 h-5 text-[#0052D9]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#1F2329]">随需定制</div>
                    <div className="text-xs text-slate-500">CAP [低代码] 快速交付</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-[#0052D9]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#1F2329]">全栈信创</div>
                    <div className="text-xs text-slate-500">国产软硬件 [100]% 适配</div>
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
                <button onClick={handleOpenConsult} className="px-8 py-4 border-2 border-[#0052D9] text-[#0052D9] font-bold rounded-md hover:bg-blue-50 transition-all">
                  获取交付报价
                </button>
              </div>
            </motion.div>

            {/* Right Visual - COP Architecture */}
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
                    <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">数字化协同 COP 架构</div>
                    <div className="flex gap-1">
                      <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                      <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                    </div>
                  </div>

                  {/* COP Layers */}
                  <div className="space-y-4">
                    <div className="bg-red-50 rounded-lg p-4 border border-red-100">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded bg-[#E60012] flex items-center justify-center text-white">
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <div className="font-bold text-[#1F2329]">智能协同应用</div>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {['公文管理', '流程审批', '会议协同', '知识社区', '综合办公', '移动门户'].map(item => (
                          <div key={item} className="bg-white px-2 py-1.5 rounded text-[10px] text-slate-600 font-medium text-center border border-slate-100">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-50/50 rounded-lg p-4 border border-blue-100">
                        <div className="flex items-center gap-2 mb-2">
                          <Cpu className="w-4 h-4 text-[#0052D9]" />
                          <div className="font-bold text-[#0052D9] text-sm">CAP 低代码平台</div>
                        </div>
                        <div className="space-y-1.5">
                          {['业务建模', '流程驱动', '报表引擎', '随需定制'].map(item => (
                            <div key={item} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#0052D9]"></div>
                              <span className="text-xs text-slate-600">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-slate-50/50 rounded-lg p-4 border border-slate-100">
                        <div className="flex items-center gap-2 mb-2">
                          <Puzzle className="w-4 h-4 text-slate-700" />
                          <div className="font-bold text-slate-700 text-sm">连接集成 CIP</div>
                        </div>
                        <div className="space-y-1.5">
                          {['ERP 集成', 'HR 对接', 'CRM 联动', '第三方应用'].map(item => (
                            <div key={item} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                              <span className="text-xs text-slate-600">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-900 rounded-lg p-4 text-center border border-slate-800 shadow-inner">
                      <div className="text-white font-bold text-sm mb-1">全栈信创安全底座</div>
                      <div className="text-slate-400 text-[10px] flex justify-center gap-3">
                        <span>国产 OS</span> • <span>国产数据库</span> • <span>国产中间件</span> • <span>国产芯片</span>
                      </div>
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
        source="Product_Collaborative_Office"
      />
    </>
  )
}
