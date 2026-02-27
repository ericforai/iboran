'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { DemoRequestModal } from '@/components/DemoRequestModal'
import { ArrowRight, Download } from 'lucide-react'

export default function CTASection() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  const handleOpenConsult = () => {
    window.dispatchEvent(new CustomEvent('open-consult-modal'))
  }

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#1F2329] rounded-[48px] p-12 lg:p-20 text-center relative overflow-hidden"
        >
          {/* Decorative Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              准备好开启数智档案管理新篇章了吗？
            </h2>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed">
              联系我们的行业专家，获取为您量身定制的电子会计档案解决方案，助力企业合规化、轻量化运行。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => setIsDemoOpen(true)}
                className="group px-10 py-5 bg-[#E60012] text-white font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-red-700 transition-all text-lg shadow-xl shadow-red-900/40"
              >
                免费预约产品演示
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={handleOpenConsult} className="px-10 py-5 bg-white/10 text-white font-bold rounded-2xl border border-white/20 flex items-center justify-center gap-2 hover:bg-white/20 transition-all text-lg backdrop-blur-sm">
                下载管理白皮书
                <Download size={20} />
              </button>
            </div>
            
            <p className="mt-10 text-slate-500 text-sm">
              已有 500+ 多家企业通过泊冉软件实现档案数智化转型
            </p>
          </div>
        </motion.div>
      </div>

      <DemoRequestModal 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)} 
      />
    </section>
  )
}
