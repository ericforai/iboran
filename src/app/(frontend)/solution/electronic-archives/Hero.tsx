'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { DemoRequestModal } from '@/components/DemoRequestModal'
import ElectronicArchivesDashboard from './ElectronicArchivesDashboard'

interface HeroProps {
  title: string
  tagline: string
  description: string
}

export default function Hero({ title, tagline, description }: HeroProps) {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <>
      <section className="relative bg-white pt-24 pb-32 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-1/2 pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0052D9] text-sm font-bold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
                符合国家标准 GB/T 18894
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-bold text-[#1F2329] mb-6 leading-[1.1]">
                {title}
              </h2>
              
              <p className="text-2xl text-[#0052D9] font-bold mb-6">
                {tagline}
              </p>
              
              <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl">
                {description}
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsDemoOpen(true)}
                  className="px-10 py-5 bg-[#E60012] text-white font-bold rounded-xl shadow-xl shadow-red-200 hover:bg-red-700 transition-all text-lg"
                >
                  免费预约专家演示
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 border-2 border-[#0052D9] text-[#0052D9] font-bold rounded-xl hover:bg-blue-50 transition-all text-lg"
                >
                  下载解决方案白皮书
                </motion.button>
              </div>

              {/* Trust Features */}
              <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8 text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                  <span className="text-xs font-medium uppercase tracking-wider">业财档深度融合</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                  <span className="text-xs font-medium uppercase tracking-wider">自动化校验整理</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                  <span className="text-xs font-medium uppercase tracking-wider">全生命周期管控</span>
                </div>
              </div>
            </motion.div>

            {/* Right Visual (Mockup) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex-1 w-full lg:w-auto"
            >
              <ElectronicArchivesDashboard />
            </motion.div>
          </div>
        </div>

        {/* Floating Decorative Icons */}
        <div className="absolute top-1/4 left-10 opacity-10 blur-sm pointer-events-none rotate-12">
           <div className="w-24 h-24 border-4 border-[#0052D9] rounded-2xl" />
        </div>
        <div className="absolute bottom-1/4 right-20 opacity-10 blur-sm pointer-events-none -rotate-12">
           <div className="w-32 h-32 bg-[#E60012] rounded-full" />
        </div>
      </section>

      <DemoRequestModal 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)} 
      />
    </>
  )
}
