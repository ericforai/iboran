'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Utensils } from 'lucide-react'
import { DemoRequestModal } from '@/components/DemoRequestModal'

export default function Hero() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <>
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 pt-24 pb-28 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-100/20 skew-x-12 transform origin-right -z-10" />
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-6 border border-slate-100">
              <Utensils className="w-5 h-5 text-[#0052D9]" />
              <span className="text-sm font-medium text-slate-600">
                餐饮行业一体化解决方案
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-[#1F2329] mb-6 leading-tight">
              数智驱动 <span className="text-[#0052D9]">餐饮连锁</span> <br />
              开启高质量发展新篇章
            </h1>
            
            <p className="text-2xl text-[#0052D9] font-medium mb-6">
              全栈云打造一体化全域经营平台，让经营更简单、更盈利
            </p>
            
            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl">
              面对极致性价比与情绪价值的行业趋势，用友BIP超级版为餐饮企业提供从一线线索、招商管理到后端供应链、业财一体的闭环方案，助力企业实现营运精细化与规模收益。
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setIsDemoOpen(true)}
                className="px-8 py-4 bg-[#E60012] text-white font-bold rounded-md hover:bg-red-700 transition-all shadow-lg shadow-red-200 active:scale-95"
              >
                预约行业专家咨询
              </button>
              <button className="px-8 py-4 border-2 border-[#0052D9] text-[#0052D9] font-semibold rounded-md hover:bg-blue-50 transition-all active:scale-95">
                下载餐饮行业白皮书
              </button>
            </div>

            <div className="mt-12 flex items-center gap-8 text-slate-400">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-700">5万亿+</span>
                <span className="text-xs uppercase tracking-wider">2023市场规模</span>
              </div>
              <div className="w-px h-8 bg-slate-200" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-700">20.4%</span>
                <span className="text-xs uppercase tracking-wider">年度增长率</span>
              </div>
              <div className="w-px h-8 bg-slate-200" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-700">21%</span>
                <span className="text-xs uppercase tracking-wider">连锁化率</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <DemoRequestModal 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)}
        source="industry-catering-hero"
      />
    </>
  )
}
