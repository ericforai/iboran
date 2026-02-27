'use client'

import { useState } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import { DemoRequestModal } from '@/components/DemoRequestModal'
import { motion } from 'framer-motion'

export default function CTASection() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  const handleOpenConsultModal = () => {
    window.dispatchEvent(new CustomEvent('open-consult-modal'))
  }

  return (
    <>
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative background blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-blue-50/50 rounded-full blur-3xl -z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto bg-[#0052D9] rounded-[2.5rem] p-12 lg:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-900/20"
          >
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 -skew-x-12 translate-x-32 -translate-y-32 rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 skew-x-12 -translate-x-24 translate-y-24 rounded-full"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-medium mb-8 border border-white/20">
                <Sparkles size={16} />
                <span>让办公更有温度，协作更有厚度</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                立即预约 AIP 专家演示<br/>
                开启企业数智化新篇章
              </h2>
              
              <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
                泊冉软件作为用友合作伙伴，提供深度的 AIP 智能化应用咨询与实施服务。加入我们，与数千家企业共同见证 AI 如何重塑业务流程。
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button
                  onClick={() => setIsDemoOpen(true)}
                  className="px-10 py-5 bg-[#E60012] text-white font-bold rounded-xl hover:bg-red-700 transition-all shadow-xl shadow-red-900/30 flex items-center gap-2 group text-lg"
                >
                  免费预约专家演示
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={handleOpenConsultModal}
                  className="px-10 py-5 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all text-lg"
                >
                  获取完整产品手册
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <DemoRequestModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </>
  )
}
