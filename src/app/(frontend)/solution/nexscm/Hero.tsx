'use client'
import { openAifafanChat } from '@/utilities/openAifafanChat'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { DemoRequestModal } from '@/components/DemoRequestModal'
import NexSCMDashboardMockup from './NexSCMDashboardMockup'
import { ChevronRight, ShieldCheck, Sparkles } from 'lucide-react'

interface HeroProps {
  title: string
  tagline: string
  description: string
}

export default function Hero({ title, tagline, description }: HeroProps) {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  const handleOpenConsult = () => {
    openAifafanChat()
  }

  return (
    <>
      <section className="relative bg-white pt-24 pb-20 lg:pt-32 lg:pb-40 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-2/5 h-full bg-[#F5F8FF] -skew-x-12 translate-x-1/4 z-0" />
        <div className="absolute top-[-5%] left-[-5%] w-[45%] h-[45%] bg-red-50/20 rounded-full blur-[120px] z-0" />
        <div className="absolute bottom-[-10%] right-[10%] w-[30%] h-[30%] bg-blue-50/40 rounded-full blur-[100px] z-0" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 xl:gap-24">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-1 max-w-2xl text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 text-[#E60012] text-sm font-bold mb-8">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#E60012]"></span>
                </span>
                NexSCM · 全链路智能周边供应链
                <div className="h-4 w-px bg-red-200 mx-1"></div>
                新一代 IP 企划 2.0
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1F2329] mb-6 leading-[1.1] tracking-tight">
                {title}
              </h1>
              
              <p className="text-xl md:text-2xl text-[#0052D9] font-bold mb-8 flex items-center justify-center lg:justify-start gap-2">
                <Sparkles className="w-6 h-6 animate-pulse" />
                {tagline}
              </p>
              
              <p className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                {description}
              </p>
              
              {/* CTA Group */}
              <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start">
                <button
                  onClick={() => setIsDemoOpen(true)}
                  className="group px-10 py-5 bg-[#E60012] text-white font-black rounded-xl hover:bg-red-700 transition-all shadow-[0_10px_20px_-10px_rgba(230,0,18,0.4)] hover:shadow-[0_15px_30px_-10px_rgba(230,0,18,0.6)] flex items-center gap-3 active:scale-95"
                >
                  预约专家演示
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={handleOpenConsult} 
                  className="px-10 py-5 border-2 border-[#0052D9] text-[#0052D9] font-bold rounded-xl hover:bg-blue-50 transition-all flex items-center gap-2 active:scale-95"
                >
                  下载白皮书文档
                </button>
              </div>
            </motion.div>

            {/* Right Mockup Visualization */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.2 }}
              className="flex-1 w-full max-w-4xl relative z-20 origin-top lg:origin-center scale-90 lg:scale-[0.8] xl:scale-95 2xl:scale-100"
            >
              <div className="relative group">
                {/* Visual Glows */}
                <div className="absolute inset-x-0 -top-20 -bottom-20 bg-blue-400/10 blur-[120px] -z-10 rounded-full animate-pulse" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/50 backdrop-blur-3xl -z-20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                
                {/* Main Mockup */}
                <div className="relative z-10 transition-transform duration-700 group-hover:scale-[1.02] group-hover:-rotate-1">
                  <NexSCMDashboardMockup />
                </div>
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
