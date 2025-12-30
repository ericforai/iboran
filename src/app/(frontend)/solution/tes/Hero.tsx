'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { DemoRequestModal } from '@/components/DemoRequestModal'
import { ArrowRight, Download } from 'lucide-react'
import DashboardMockup from './DashboardMockup'

interface HeroProps {
  title: string
  tagline: string
  description: string
}

export default function Hero({ title, tagline, description }: HeroProps) {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <>
      <section className="bg-white pt-20 pb-24 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-red-50 rounded-full blur-3xl opacity-50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-wrap items-center -mx-4">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-[#1F2329] mb-6 leading-tight">
                {title}
              </h1>
              <p className="text-2xl md:text-3xl text-[#0052D9] font-semibold mb-6">
                {tagline}
              </p>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl">
                {description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setIsDemoOpen(true)}
                  className="px-10 py-4 bg-[#E60012] text-white font-bold rounded-md hover:bg-red-700 transition-all shadow-lg hover:shadow-red-200 flex items-center gap-2"
                >
                  预约专家演示
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-10 py-4 border-2 border-[#0052D9] text-[#0052D9] font-semibold rounded-md hover:bg-blue-50 transition-all flex items-center gap-2">
                  下载解决方案白皮书
                  <Download className="w-5 h-5" />
                </button>
              </div>
            </motion.div>


            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-1/2 px-4"
            >
              <div className="relative">
                {/* Image shadow and frame */}
                <div className="absolute -inset-4 bg-[#E60012]/5 rounded-3xl transform rotate-1 blur-xl"></div>
                
                {/* 动态代码生成的 Dashboard，保证中文清晰度与视觉质量 */}
                <div className="relative z-10 transform hover:scale-[1.02] transition-transform duration-500">
                   <DashboardMockup />
                </div>
                
                {/* Decorative Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 w-20 h-20 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl flex items-center justify-center z-20 hidden md:flex border border-slate-100"
                >
                  <div className="text-center">
                    <div className="text-[#E60012] font-bold text-lg">AI</div>
                    <div className="text-slate-400 text-[10px]">Audit</div>
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
