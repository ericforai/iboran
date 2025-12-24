'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Building2 } from 'lucide-react'
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
              <Building2 className="w-5 h-5 text-[#0052D9]" />
              <span className="text-sm font-medium text-slate-600">
                国资国企解决方案
              </span>
            </div>
            
            <h1 className="text-5xl font-bold text-[#1F2329] mb-4">
              激活数智新动能 打造新质生产力
            </h1>
            <p className="text-2xl text-[#0052D9] font-semibold mb-4">
              以数智化推动国资国企高质量发展，构建&quot;国资监管-平台运营-产业生态&quot;一体化新格局
            </p>
            
            <p className="text-base text-slate-500 mb-4 italic">
              &quot;推动国有资本布局优化和结构调整，加快发展新质生产力&quot;
            </p>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              泊冉软件助力国资国企构建智慧监管体系、优化资本布局、提升资产运营效率，实现从&quot;管企业&quot;向&quot;管资本&quot;的深刻转变，驱动国资国企数智化转型。
            </p>
            
            <div className="flex gap-4">
              <button
                onClick={() => setIsDemoOpen(true)}
                className="px-8 py-4 bg-[#E60012] text-white font-bold rounded-md hover:bg-red-700 transition-all shadow-lg shadow-red-200"
              >
                预约国资专家咨询
              </button>
              <button className="px-8 py-4 border-2 border-[#0052D9] text-[#0052D9] font-semibold rounded-md hover:bg-blue-50 transition-all">
                下载国资白皮书
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <DemoRequestModal 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)} 
        source="industry-state-owned"
      />
    </>
  )
}
