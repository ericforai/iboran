'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { DemoRequestModal } from '@/components/DemoRequestModal'
import BusinessFinanceDashboardMockup from './BusinessFinanceDashboardMockup'
import Image from 'next/image'

export default function Hero() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  const handleOpenConsult = () => {
    window.dispatchEvent(new CustomEvent('open-consult-modal'))
  }

  return (
    <section className="relative bg-[#FAFBFF] pt-24 pb-32 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-40">
        <Image 
          src="/images/solutions/hero-abstract.png" 
          alt="泊冉软件业财一体化数字化转型背景图"
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />
      </div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/50 to-transparent z-0" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-50 z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-[#0052D9] text-sm font-bold mb-6">
                <span className="w-2 h-2 bg-[#0052D9] rounded-full mr-2 animate-pulse" />
                事项中台：财管同源分流・智能月结
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2329] leading-[1.2] mb-6">
                业财融合<br />
                <span className="text-[#0052D9]">实时·精细·智能</span>的<br />
                业财数据底座
              </h2>
              
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
                基于全新“事项法”会计架构，重塑企业财务底座。从事务到会计，从核算到分析，打造具备全球视野、实时洞察、高效协同的新一代智慧财税体系。
              </p>
              
              <div className="flex flex-wrap gap-5">
                <button
                  onClick={() => setIsDemoOpen(true)}
                  className="px-10 py-4 bg-[#E60012] text-white font-bold rounded-lg hover:bg-red-700 transition-all shadow-xl hover:shadow-red-200/50 transform hover:-translate-y-1"
                >
                  预约专家演示
                </button>
                <button onClick={handleOpenConsult} className="px-10 py-4 border-2 border-[#0052D9] text-[#0052D9] font-bold rounded-lg hover:bg-blue-50 transition-all transform hover:-translate-y-1">
                  下载解决方案
                </button>
              </div>

              <div className="mt-12 flex items-center gap-8 grayscale opacity-60">
                <div className="text-sm font-semibold text-slate-400">战略合作伙伴</div>
                <div className="flex gap-6 items-center">
                  <div className="text-xl font-black italic tracking-tighter">YONYOU</div>
                  <div className="text-xl font-black italic tracking-tighter text-[#0052D9]">BIP</div>
                  <div className="text-xl font-bold tracking-tight">YonSuite</div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Decorative elements behind mockup */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#0052D9] to-[#E60012] opacity-10 blur-2xl rounded-[2rem]" />
              
              <BusinessFinanceDashboardMockup />
              
              {/* Float badge */}
              <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-blue-50 max-w-[180px]"
              >
                <div className="flex items-center gap-2 mb-2">
                   <div className="w-2 h-2 bg-green-500 rounded-full" />
                   <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">实时核算引擎</div>
                </div>
                <div className="text-2xl font-bold text-slate-800">1.2s</div>
                <div className="text-[10px] text-slate-500">平均事项处理延迟</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <DemoRequestModal 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)} 
      />
    </section>
  )
}
