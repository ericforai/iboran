'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { DemoRequestModal } from '@/components/DemoRequestModal'
import EAMDashboardMockup from './EAMDashboardMockup'

export default function Hero() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <>
      <section className="bg-white pt-24 pb-20 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -skew-x-12 translate-x-1/2 z-0" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <div className="inline-block px-4 py-1.5 mb-8 bg-blue-50 border border-blue-100 rounded-full">
                <span className="text-sm font-bold text-[#0052D9] tracking-wider uppercase">
                  YonBIP & YonSuite 资产管理
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-[#1F2329] mb-8 leading-[1.25]">
                EAM 资产 <br />
                <span className="text-[#E60012]">全生命周期</span> 数智化平台
              </h1>
              <p className="text-xl text-[#0052D9] font-medium mb-8">
                从获取到退役：实现资产全生命周期端到端管理
              </p>
              <p className="text-lg text-slate-600 mb-12 leading-relaxed max-w-lg">
                YonBIP EAM 覆盖资产规划、采购、维护、巡检、处置全流程。通过“全员、全栈、全域”的数字化手段，结合 IoT 与 AI 技术实现预测性维护，显著提升资产可靠性与利用效率。
              </p>

              
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setIsDemoOpen(true)}
                  className="px-8 py-4 bg-[#E60012] text-white font-bold rounded-lg hover:bg-red-700 transition-all shadow-lg shadow-red-200"
                >
                  预约专家演示
                </button>
                <Link
                  href="/solution"
                  className="px-8 py-4 border-2 border-[#0052D9] text-[#0052D9] font-bold rounded-lg hover:bg-blue-50 transition-all inline-block text-center"
                >
                  查看行业解决方案
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:w-1/2 relative"
            >
              <div className="relative z-10">
                <EAMDashboardMockup activeTab="overview" />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#0052D9]/5 rounded-full blur-3xl" />
              <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#E60012]/5 rounded-full blur-3xl" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[radial-gradient(#0052D9_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
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

