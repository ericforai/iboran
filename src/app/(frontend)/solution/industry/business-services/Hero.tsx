'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
// import { Briefcase } from 'lucide-react'
import { DemoRequestModal } from '@/components/DemoRequestModal'

interface HeroProps {
  industryName: string
  icon: React.ReactNode
  tagline: string
  description: string
}

export default function Hero({ 
  industryName, 
  icon,
  tagline, 
  description
}: HeroProps) {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <>
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 pt-32 pb-20 overflow-hidden relative">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-100/30 blur-3xl rounded-bl-full translate-x-1/2 -translate-y-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-red-50/50 blur-3xl rounded-tr-full -translate-x-1/4 translate-y-1/4 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Industry Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-8 border border-slate-100">
              {icon}
              <span className="text-sm font-medium text-slate-600">
                {industryName}解决方案
              </span>
            </div>
            
            {/* Main Title */}
            <h1 className="text-5xl md:text-6xl font-bold text-[#1F2329] mb-6 tracking-tight leading-tight">
              {industryName}数字化转型
              <span className="block text-[#E60012] mt-2">解决方案</span>
            </h1>
            
            <p className="text-2xl text-[#0052D9] font-medium mb-6">
              {tagline}
            </p>
            
            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsDemoOpen(true)}
                className="px-8 py-4 bg-[#E60012] text-white font-bold rounded-lg hover:bg-red-700 transition-all shadow-xl shadow-red-200 hover:shadow-2xl hover:-translate-y-1"
              >
                预约行业专家咨询
              </button>
              <button className="px-8 py-4 border-2 border-[#0052D9] text-[#0052D9] font-semibold rounded-lg hover:bg-blue-50 transition-all hover:shadow-lg">
                下载{industryName}白皮书
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <DemoRequestModal 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)} 
        source="industry-business-services"
      />
    </>
  )
}
