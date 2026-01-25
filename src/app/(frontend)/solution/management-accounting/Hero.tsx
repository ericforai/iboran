'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { DemoRequestModal } from '@/components/DemoRequestModal'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import ManagementAccountingDashboardMockup from './ManagementAccountingDashboardMockup'

interface HeroProps {
  title: string
  tagline: string
  description: string
}

export default function Hero({ title, tagline, description }: HeroProps) {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <>
      <section className="relative bg-gradient-to-b from-slate-50 to-white pt-32 pb-24 overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100/30 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-red-50/30 blur-[100px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-[#E60012] text-xs font-semibold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E60012]"></span>
                </span>
                YonBIP 大财税 · 管理会计
              </div>

              <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
                {title}
              </h2>
              <p className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#0052D9] to-blue-600 font-semibold mb-6">
                {tagline}
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
                {description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <button
                  onClick={() => setIsDemoOpen(true)}
                  className="px-8 py-4 bg-[#E60012] text-white font-bold rounded-lg hover:bg-red-700 transition-all shadow-lg shadow-red-500/20 flex items-center justify-center gap-2 group"
                >
                  预约专家演示
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 border border-slate-200 bg-white text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-all hover:border-slate-300 flex items-center justify-center">
                  下载解决方案白皮书
                </button>
              </div>

              <div className="flex items-center gap-6 text-sm font-medium text-slate-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#E60012]" />
                  <span>业财深度融合</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#E60012]" />
                  <span>实时计价还原</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#E60012]" />
                  <span>多核算目的</span>
                </div>
              </div>
            </motion.div>

            {/* Visual Content */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative z-10">
                 <ManagementAccountingDashboardMockup />
              </div>
              
              {/* Decorative background behind dashboard */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-slate-100 to-white rounded-2xl -z-10 border border-slate-100/50 shadow-xl" />
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
