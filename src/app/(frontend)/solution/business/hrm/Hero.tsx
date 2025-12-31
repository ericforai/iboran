'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { DemoRequestModal } from '@/components/DemoRequestModal'
import { HRMDashboardMockup } from './HRMDashboardMockup'

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
                  YonBIP & YonSuite 人力资源
                </span>
              </div>
              <h1 className="text-4xl lg:text-7xl font-extrabold text-[#1F2329] mb-6 leading-[1.1]">
                赋能员工 <br />
                <span className="text-[#E60012]">激活组织</span>
              </h1>
              <p className="text-xl text-[#0052D9] font-medium mb-6">
                数字化人力资源：构建高绩效的敏捷组织
              </p>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl">
                用友BIP HRM 覆盖从人才招聘、组织人事、时间管理、薪酬绩效到人才发展的全生命周期。通过数智化手段重构组织能力，服务企业高质量发展。
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setIsDemoOpen(true)}
                  className="px-10 py-4 bg-[#E60012] text-white font-bold rounded-lg hover:bg-red-700 transition-all shadow-lg shadow-red-200"
                >
                  预约专家演示
                </button>
                <button className="px-10 py-4 border-2 border-[#0052D9] text-[#0052D9] font-bold rounded-lg hover:bg-blue-50 transition-all">
                  下载 HRM 白皮书
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative z-10 bg-white p-2 rounded-2xl shadow-2xl border border-slate-100 group">
                <div className="aspect-[16/10] rounded-xl overflow-hidden relative">
                   <HRMDashboardMockup />
                   <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-[radial-gradient(#0052D9_1px,transparent_1px)] [background-size:20px_20px] opacity-20" />
              <div className="absolute -top-12 -left-12 w-32 h-32 bg-red-50 rounded-full blur-3xl opacity-50 -z-10" />
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
