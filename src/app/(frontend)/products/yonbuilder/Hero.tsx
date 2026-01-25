'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Code2, Zap, Smartphone, Layers } from 'lucide-react'
import { DemoRequestModal } from '@/components/DemoRequestModal'
import { DashboardMockup } from './DashboardMockup'

export default function Hero() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <>
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden bg-[#FDFEFF]">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-gradient-to-bl from-blue-50/50 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-gradient-to-tr from-red-50/30 to-transparent pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#0052D9] text-sm font-medium mb-6">
                <Code2 className="w-4 h-4" />
                <span>企业级低代码开发平台</span>
              </div>
              
              <h2 className="text-4xl lg:text-6xl font-bold text-[#1F2329] leading-tight mb-6">
                YonBuilder <br/>
                <span className="text-2xl lg:text-4xl text-slate-600 font-semibold mt-2 block leading-snug">
                  让创新触手可及，构建未来企业级应用
                </span>
              </h2>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                基于云原生模型驱动架构，提供“零代码、低代码、全代码”一体化开发能力。
                帮助企业打破技术壁垒，以 300% 的效率构建业务系统，实现数智化敏捷创新。
              </p>

              <div className="flex flex-wrap gap-6 mb-10">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-[#E60012]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#1F2329]">极速构建</div>
                    <div className="text-xs text-slate-500">拖拽式可视化开发</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                    <Smartphone className="w-5 h-5 text-[#0052D9]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#1F2329]">多端适配</div>
                    <div className="text-xs text-slate-500">一次开发，全网发布</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center">
                    <Layers className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#1F2329]">全栈能力</div>
                    <div className="text-xs text-slate-500">从数据建模到流程编排</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setIsDemoOpen(true)}
                  className="px-8 py-4 bg-[#E60012] text-white font-bold rounded-md hover:bg-red-700 transition-all flex items-center gap-2 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                >
                  免费试用
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="px-8 py-4 border-2 border-[#0052D9] text-[#0052D9] font-bold rounded-md hover:bg-blue-50 transition-all">
                  查看技术白皮书
                </button>
              </div>
            </motion.div>

            {/* Right Visual - Interactive Mockup in a "Glass" Container */}
            <motion.div 
              initial={{ opacity: 0, x: 20, rotateY: -10 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex-1 w-full relative perspective-1000"
            >
              {/* Decorative glows */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#0052D9] opacity-10 blur-[80px] rounded-full pointer-events-none"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#E60012] opacity-10 blur-[80px] rounded-full pointer-events-none"></div>

              <div className="relative transform hover:scale-[1.01] transition-transform duration-500 ease-out">
                {/* Window Frame */}
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-2 shadow-2xl border border-white/50 ring-1 ring-black/5">
                  <div className="aspect-[16/12] overflow-hidden rounded-lg bg-slate-50">
                    <DashboardMockup />
                  </div>
                </div>

                {/* Floating Badges */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute -right-6 top-20 bg-white p-3 rounded-lg shadow-xl border border-slate-100 flex items-center gap-3 animate-float-slow"
                >
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <Code2 className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800">自动生成代码</div>
                    <div className="text-[10px] text-slate-500">准确率 100%</div>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="absolute -left-6 bottom-20 bg-white p-3 rounded-lg shadow-xl border border-slate-100 flex items-center gap-3 animate-float-delayed"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <Smartphone className="w-4 h-4 text-[#0052D9]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800">100% 移动端适配</div>
                    <div className="text-[10px] text-slate-500">自动响应式布局</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <DemoRequestModal 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)} 
        source="Product_YonBuilder"
      />
    </>
  )
}
