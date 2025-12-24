'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Globe } from 'lucide-react'
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
              <Globe className="w-5 h-5 text-[#0052D9]" />
              <span className="text-sm font-medium text-slate-600">
                互联网行业解决方案
              </span>
            </div>
            
            {/* 主标题 */}
            <h1 className="text-5xl font-bold text-[#1F2329] mb-4">
              互联网行业数字化转型解决方案
            </h1>
            <p className="text-2xl text-[#0052D9] font-semibold mb-4">
              数智驱动，重塑商业新增长
            </p>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              泊冉软件为互联网企业提供从集团管控、精细化运营到全球化布局的一站式数字化解决方案，助力企业实现业财融合、降本增效，加速全球化步伐。应对多主体、高并发、快迭代的行业特性，构建敏捷、合规、智能的数智底座。
            </p>
            
            {/* CTA 按钮 */}
            <div className="flex gap-4">
              <button
                onClick={() => setIsDemoOpen(true)}
                className="px-8 py-4 bg-[#E60012] text-white font-bold rounded-md hover:bg-red-700 transition-all shadow-lg shadow-red-200"
              >
                预约互联网行业专家
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
        source="industry-internet"
      />
    </>
  )
}
