'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { DemoRequestModal } from '@/components/DemoRequestModal'
import { ArrowRight, Download, ShieldCheck, Target } from 'lucide-react'
import SPEDashboardMockup from './SPEDashboardMockup'

interface HeroProps {
  title: string
  tagline: string
  description: string
}

export default function Hero({ title, tagline, description }: HeroProps) {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <>
      <section className="bg-white pt-20 pb-32 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-red-50/30 rounded-full blur-3xl opacity-40" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-wrap items-center -mx-4">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full lg:w-5/12 px-4 mb-16 lg:mb-0"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0052D9] text-sm font-bold mb-6 border border-blue-100">
                <ShieldCheck size={16} />
                纵向 PDCA 全闭环管理
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-[#1F2329] mb-8 leading-[1.1] tracking-tight">
                {title}
              </h1>
              <p className="text-2xl md:text-3xl text-[#0052D9] font-bold mb-8 flex items-center gap-3">
                <span className="w-12 h-1 bg-[#E60012] rounded-full hidden md:block" />
                {tagline}
              </p>
              <p className="text-lg text-slate-600 mb-12 leading-relaxed max-w-xl">
                {description}
              </p>
              
              <div className="flex flex-wrap gap-5">
                <button
                  onClick={() => setIsDemoOpen(true)}
                  className="px-12 py-5 bg-[#E60012] text-white font-bold rounded-lg hover:bg-red-700 transition-all shadow-xl hover:shadow-red-200 flex items-center gap-3 text-lg group"
                >
                  预约专家演示
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-12 py-5 border-2 border-[#0052D9] text-[#0052D9] font-bold rounded-lg hover:bg-blue-50 transition-all flex items-center gap-3 text-lg">
                  下载白皮书
                  <Download className="w-5 h-5" />
                </button>
              </div>
              
              {/* Trust Badge */}
              <div className="mt-12 flex items-center gap-6 pt-12 border-t border-slate-100">
                <div>
                  <div className="text-2xl font-bold text-slate-800">1,000+</div>
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">头部企业选择</div>
                </div>
                <div className="w-px h-10 bg-slate-200" />
                <div>
                  <div className="text-2xl font-bold text-slate-800">MDS</div>
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">自研多维引擎</div>
                </div>
              </div>
            </motion.div>

            {/* Right Visual - Coded Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full lg:w-7/12 px-4"
            >
              <div className="relative group">
                {/* Decorative Glows */}
                <div className="absolute -inset-10 bg-blue-500/10 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full aspect-video bg-gradient-to-tr from-blue-600/20 to-[#E60012]/10 blur-[80px] -z-10" />
                
                {/* Mockup Container */}
                <div className="relative z-10 transform lg:perspective-1000 lg:rotate-y-[-5deg] lg:rotate-x-[2deg] hover:rotate-0 transition-transform duration-700">
                  <SPEDashboardMockup type="default" />
                  
                  {/* Floating Tags */}
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-6 -right-6 md:top-12 md:-right-8 bg-white p-4 rounded-xl shadow-2xl border border-slate-100 z-20 flex items-center gap-3"
                  >
                    <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                       <ShieldCheck className="text-green-600" size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-tighter">System Health</div>
                      <div className="text-slate-800 font-bold">实时预算对账</div>
                    </div>
                  </motion.div>

                  <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute -bottom-6 -left-6 md:bottom-24 md:-left-12 bg-[#001529] p-4 rounded-xl shadow-2xl border border-slate-800 z-20 flex items-center gap-3 text-white"
                  >
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                       <Target className="text-blue-400" size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Strategic KPI</div>
                      <div className="font-bold">经营达成率 98.2%</div>
                    </div>
                  </motion.div>
                </div>

                {/* Glass reflections */}
                <div className="absolute inset-0 pointer-events-none z-20 bg-gradient-to-tr from-white/10 via-transparent to-white/5 opacity-50 rounded-xl" />
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
