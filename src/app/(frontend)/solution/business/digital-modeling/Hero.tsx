'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { DemoRequestModal } from '@/components/DemoRequestModal'
import DigitalModelingDashboardMockup from './DigitalModelingDashboardMockup'

export default function Hero() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <>
      <section className="bg-white pt-20 pb-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-1/2"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2329] mb-6 leading-tight">
                打造敏捷高效的<br />
                <span className="text-[#0052D9]">企业数智化底座</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl">
                YonBIP 数字化建模通过多维组织模型、可视化流程设计与主数据治理，
                帮助企业在复杂业务环境下实现快速敏捷的系统配置与合规管控。
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setIsDemoOpen(true)}
                  className="px-8 py-4 bg-[#E60012] text-white font-bold rounded-md hover:bg-red-700 transition-all shadow-lg hover:shadow-red-200"
                >
                  预约专家演示
                </button>
                <button className="px-8 py-4 border-2 border-[#0052D9] text-[#0052D9] font-bold rounded-md hover:bg-blue-50 transition-all">
                  查看技术架构
                </button>
              </div>

              {/* Trust Badge */}
              <div className="mt-12 flex items-center gap-6 text-slate-400">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-slate-800">10,000+</span>
                  <span className="text-xs uppercase tracking-wider">支撑企业数</span>
                </div>
                <div className="w-px h-10 bg-slate-200" />
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-slate-800">100%</span>
                  <span className="text-xs uppercase tracking-wider">信创适配率</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="lg:w-1/2 w-full relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/10 to-red-500/10 rounded-2xl blur-2xl -z-10" />
              <DigitalModelingDashboardMockup activeView="overview" />
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
