'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { DemoRequestModal } from '@/components/DemoRequestModal'
import TRMDashboardMockup from './TRMDashboardMockup'

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
                  YonBIP & YonSuite 资金管理
                </span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-extrabold text-[#1F2329] mb-6 leading-[1.15]">
                TRM 资金 <br />
                <span className="text-[#E60012]">流动性到投融资</span>
              </h1>
              <p className="text-xl text-[#0052D9] font-medium mb-6">
                司库管理：资金全流程数智化
              </p>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl">
                TRM 资金管理解决方案覆盖资金计划、结算支付、银企直联、资金池、投融资决策全流程。实现集团资金可视化、集中化、智能化管理，提升资金使用效率，降低财务风险。
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setIsDemoOpen(true)}
                  className="px-10 py-4 bg-[#E60012] text-white font-bold rounded-lg hover:bg-red-700 transition-all shadow-lg shadow-red-200"
                >
                  预约专家演示
                </button>
                <button className="px-10 py-4 border-2 border-[#0052D9] text-[#0052D9] font-bold rounded-lg hover:bg-blue-50 transition-all">
                  下载资金管理白皮书
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative z-10 w-full max-w-[640px] mx-auto lg:ml-auto">
                {/* Dashboard Container */}
                <div className="relative rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-200/50 bg-white overflow-hidden aspect-[16/10]">
                  <TRMDashboardMockup />
                </div>
                
                {/* Floating Decorative Elements */}
                <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-red-100/50 rounded-full blur-3xl opacity-60 animate-pulse" />
                <div className="absolute -z-10 -top-10 -left-10 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl opacity-60" />
              </div>

              {/* Dot Grid Background */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[radial-gradient(#0052D9_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
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
