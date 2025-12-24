'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Wine } from 'lucide-react'
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-6">
              <Wine className="w-5 h-5 text-[#0052D9]" />
              <span className="text-sm font-medium text-slate-600">
                白酒行业解决方案
              </span>
            </div>
            
            <h1 className="text-5xl font-bold text-[#1F2329] mb-4">
              白酒行业数智化转型解决方案
            </h1>
            <p className="text-2xl text-[#0052D9] font-semibold mb-4">
              数智酿造，品质传承
            </p>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              用友BIP赋能白酒行业高质量发展，涵盖智能制造柔性精益、数智化供应链管理、酒体数字化稳品质、以及全链路数智化营销，助力酒企构建全方位的核心竞争优势。
            </p>
            
            <div className="flex gap-4">
              <button
                onClick={() => setIsDemoOpen(true)}
                className="px-8 py-4 bg-[#E60012] text-white font-bold rounded-md hover:bg-red-700 transition-all shadow-lg shadow-red-200"
              >
                预约行业专家咨询
              </button>
              <button className="px-8 py-4 border-2 border-[#0052D9] text-[#0052D9] font-semibold rounded-md hover:bg-blue-50 transition-all">
                下载白皮书
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <DemoRequestModal 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)} 
        source="industry-baijiu"
      />
    </>
  )
}
