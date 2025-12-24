'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Cpu } from 'lucide-react'
import { DemoRequestModal } from '@/components/DemoRequestModal'

interface HeroProps {
  industryName: string
  tagline: string
  description: string
}

export default function Hero({ 
  industryName, 
  tagline, 
  description 
}: HeroProps) {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <>
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 pt-24 pb-28">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            {/* 行业标签 */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-6">
              <Cpu className="w-5 h-5 text-[#0052D9]" />
              <span className="text-sm font-medium text-slate-600">
                {industryName}解决方案
              </span>
            </div>
            
            {/* 主标题 - SEO 友好 */}
            <h1 className="text-5xl font-bold text-[#1F2329] mb-4">
              {industryName}数字化转型解决方案
            </h1>
            <p className="text-2xl text-[#0052D9] font-semibold mb-4">
              {tagline}
            </p>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {description}
            </p>
            
            {/* CTA 按钮 */}
            <div className="flex gap-4">
              <button
                onClick={() => setIsDemoOpen(true)}
                className="px-8 py-4 bg-[#E60012] text-white font-bold rounded-md hover:bg-red-700 transition-all shadow-lg shadow-red-200"
              >
                预约行业专家咨询
              </button>
              <button className="px-8 py-4 border-2 border-[#0052D9] text-[#0052D9] font-semibold rounded-md hover:bg-blue-50 transition-all">
                下载{industryName}白皮书
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <DemoRequestModal 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)}
        source="industry-electronic-ic"
      />
    </>
  )
}
