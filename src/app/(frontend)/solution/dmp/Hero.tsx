'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { DemoRequestModal } from '@/components/DemoRequestModal'

export default function Hero() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <>
      <section className="bg-white pt-24 pb-20 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -skew-x-12 translate-x-1/2 z-0" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <div className="inline-block px-4 py-1.5 mb-6 bg-blue-50 border border-blue-100 rounded-full">
                <span className="text-sm font-bold text-[#0052D9] tracking-wider uppercase">
                  YonBIP & YonSuite 数据平台
                </span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-extrabold text-[#1F2329] mb-6 leading-[1.15]">
                DMP 数据开发 <br />
                <span className="text-[#E60012]">与应用</span> 平台
              </h1>
              <p className="text-xl text-[#0052D9] font-medium mb-6">
                数据驱动决策：构建企业数据中台
              </p>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl">
                DMP 数据平台提供从数据采集、治理、分析到应用的端到端能力，帮助企业构建统一的数据中台。让数据成为核心资产，赋能业务决策与创新。
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setIsDemoOpen(true)}
                  className="px-10 py-4 bg-[#E60012] text-white font-bold rounded-lg hover:bg-red-700 transition-all shadow-lg shadow-red-200"
                >
                  预约专家演示
                </button>
                <button className="px-10 py-4 border-2 border-[#0052D9] text-[#0052D9] font-bold rounded-lg hover:bg-blue-50 transition-all">
                  下载数据中台白皮书
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative z-10 bg-white p-4 rounded-2xl shadow-2xl border border-slate-100">
                <div className="aspect-[4/3] bg-slate-100 rounded-xl overflow-hidden flex items-center justify-center">
                   <div className="text-center p-8">
                     <div className="w-16 h-1 bg-[#E60012] mx-auto mb-4" />
                     <p className="text-slate-400 font-medium">数据中台架构图</p>
                   </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[radial-gradient(#0052D9_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
            </motion.div>
          </div>
        </div>
      </section>

      <DemoRequestModal 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)} 
      />
    </>
  )
}
