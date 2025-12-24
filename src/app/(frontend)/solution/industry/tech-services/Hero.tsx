'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Code2 } from 'lucide-react'
import { DemoRequestModal } from '@/components/DemoRequestModal'

export default function Hero() {
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
              <Code2 className="w-5 h-5 text-[#0052D9]" />
              <span className="text-sm font-medium text-slate-600">
                科技服务业解决方案
              </span>
            </div>
            
            {/* 主标题 */}
            <h1 className="text-5xl font-bold text-[#1F2329] mb-4">
              科技服务业数智化解决方案
            </h1>
            <p className="text-2xl text-[#0052D9] font-semibold mb-4">
              数智驱动项目与人才双轮飞轮，重塑服务效能
            </p>
            
            {/* 行业趋势背景 */}
            <p className="text-base text-slate-500 mb-4 italic">
              &quot;聚焦项目化运营与人才服务，打造科技服务企业的高质量发展引擎&quot;
            </p>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              针对科技服务、IT 服务、知识服务等行业特性，提供 &quot;项目+人才+财务&quot; 一体化的数智解决方案。
              打通 L2C 项目全生命周期，实现从商机到交付、回款的端到端闭环，大幅提升项目利润与人效。
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
                下载行业白皮书
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <DemoRequestModal 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)} 
        source="industry-tech-services"
      />
    </>
  )
}
