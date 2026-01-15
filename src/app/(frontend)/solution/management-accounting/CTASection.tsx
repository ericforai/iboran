'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { DemoRequestModal } from '@/components/DemoRequestModal'
import { MessageSquare, ArrowRight } from 'lucide-react'

export default function CTASection() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <>
      <section className="py-24 bg-gradient-to-r from-[#0052D9] to-blue-700 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-500/20 blur-3xl rounded-full -ml-32 -mb-32" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-8 backdrop-blur-sm">
              <MessageSquare size={18} />
              立即开启数智管理新篇章
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
              现在就开始转型管理会计，<br />驱动企业价值重塑
            </h2>
            <p className="text-xl text-blue-100 mb-12">
              预约专家演示，为您量身定制专属的管理会计解决方案。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsDemoOpen(true)}
                className="px-10 py-5 bg-[#E60012] text-white font-bold rounded-xl hover:bg-red-700 transition-all shadow-xl shadow-black/20 flex items-center justify-center gap-2 group"
              >
                立即预约演示
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-10 py-5 bg-white text-[#0052D9] font-bold rounded-xl hover:bg-blue-50 transition-all shadow-xl shadow-black/10">
                联络我们的专家
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <DemoRequestModal 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)} 
      />
    </>
  )
}
