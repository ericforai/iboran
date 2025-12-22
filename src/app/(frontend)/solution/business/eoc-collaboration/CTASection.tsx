'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { DemoRequestModal } from '@/components/DemoRequestModal'
import { MessageSquare, ArrowRight } from 'lucide-react'

export default function CTASection() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <>
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0052D9] rounded-[2.5rem] p-12 lg:p-20 text-white text-center relative overflow-hidden"
          >
            {/* Background pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white rounded-full blur-[100px]" />
              <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-red-500 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-8 backdrop-blur-sm border border-white/20">
                <MessageSquare size={18} />
                <span className="text-sm font-semibold">让办公更有温度，协作更有厚度</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                立即预约 EOC 专家演示<br/>开启企业协作新篇章
              </h2>
              
              <p className="text-xl text-blue-100 mb-12 leading-relaxed">
                已有超过 5,000 家企业通过泊冉 EOC 实现了办公效率飞跃。现在加入，让您的团队工作更高效、沟通更顺畅。
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6 justify-center">
                <button 
                  onClick={() => setIsDemoOpen(true)}
                  className="px-10 py-4 bg-[#E60012] text-white rounded-md font-bold text-lg hover:bg-red-700 transition shadow-xl shadow-black/20 flex items-center gap-2 group"
                >
                  免费预约专家演示
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-10 py-4 bg-transparent text-white border-2 border-white rounded-md font-semibold text-lg hover:bg-white/10 transition">
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
