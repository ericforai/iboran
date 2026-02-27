'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { DemoRequestModal } from '@/components/DemoRequestModal'
import { ArrowRight, MessageSquare } from 'lucide-react'

export default function CTASection() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  const handleOpenConsult = () => {
    window.dispatchEvent(new CustomEvent('open-consult-modal'))
  }

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-gradient-to-br from-[#0052D9] to-[#003A99] rounded-3xl p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          {/* Decorative background circle */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-500/10 rounded-full translate-y-1/2 -translate-x-1/4 blur-3xl" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
              立即开启<br />集团财务数智化合并之旅
            </h2>
            <p className="text-xl text-blue-100/80 mb-12 leading-relaxed">
              加入 500+ 大型及中国大型集团，体验一键合并带来的财务报告革命。
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <button
                onClick={() => setIsDemoOpen(true)}
                className="px-10 py-5 bg-[#E60012] text-white font-black rounded-xl hover:bg-red-700 transition-all flex items-center gap-2 group shadow-xl shadow-red-900/20"
              >
                免费预约专家演示
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={handleOpenConsult} className="px-10 py-5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all border border-white/20 backdrop-blur-md flex items-center gap-2">
                <MessageSquare size={20} />
                向专家咨询
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <DemoRequestModal 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)} 
      />
    </section>
  )
}
