'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { DemoRequestModal } from '@/components/DemoRequestModal'
import BudgetDashboardMockup from './BudgetDashboardMockup'
import { ChevronRight, TrendingUp } from 'lucide-react'

interface HeroProps {
  title: string
  tagline: string
  description: string
}

export default function Hero({ title, tagline, description }: HeroProps) {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <>
      <section className="relative bg-white pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 -skew-x-12 translate-x-1/2 z-0" />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-50/30 rounded-full blur-3xl z-0" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 max-w-2xl text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[#E60012] text-sm font-bold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E60012]"></span>
                </span>
                YonBIP 全面预算管理
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2329] mb-4 leading-tight">
                {title}
              </h1>
              
              <p className="text-xl md:text-2xl text-[#0052D9] font-semibold mb-6">
                {tagline}
              </p>
              
              <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
                {description}
              </p>
              
              {/* CTA Group */}
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => setIsDemoOpen(true)}
                  className="group px-8 py-4 bg-[#E60012] text-white font-bold rounded-lg hover:bg-red-700 transition-all shadow-lg hover:shadow-red-200 flex items-center gap-2"
                >
                  预约专家演示
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 border-2 border-[#0052D9] text-[#0052D9] font-bold rounded-lg hover:bg-blue-50 transition-all flex items-center gap-2">
                  下载解决方案白皮书
                </button>
              </div>

              {/* Trust Badges */}
              <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
                <span className="text-sm font-semibold text-slate-400">已帮助 5000+ 头部企业实现精准预算</span>
                {/* Simplified logos/names for now */}
                <div className="flex gap-6 text-slate-600 font-bold">
                  <span>贵州茅台</span>
                  <span>云投集团</span>
                  <span>中铁鲁班</span>
                </div>
              </div>
            </motion.div>

            {/* Right Mockup Visualization */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex-1 w-full max-w-3xl"
            >
              <div className="relative">
                {/* Decorative glow */}
                <div className="absolute inset-0 bg-blue-400/20 blur-[100px] -z-10 rounded-full animate-pulse" />
                
                <BudgetDashboardMockup />
                
                {/* Floating Micro-mockups or Info labels */}
                <motion.div 
                   animate={{ y: [0, -10, 0] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute -top-6 -right-6 hidden md:flex items-center gap-3 bg-white p-4 rounded-xl shadow-xl border border-slate-100"
                >
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <div className="text-slate-400 text-xs text-[10px]">预测准确率</div>
                    <div className="text-xl font-bold text-slate-800">98.4%</div>
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
      />
    </>
  )
}
