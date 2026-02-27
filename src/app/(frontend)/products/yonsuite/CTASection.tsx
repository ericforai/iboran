'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Rocket, Download, MessageCircle } from 'lucide-react'
import { DemoRequestModal } from '@/components/DemoRequestModal'

export default function CTASection() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  const handleOpenConsult = () => {
    window.dispatchEvent(new CustomEvent('open-consult-modal'))
  }

  return (
    <section className="py-20 bg-white overflow-hidden relative">
      {/* Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50/30 rounded-[100%] blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto p-12 lg:p-16 rounded-[2rem] bg-gradient-to-br from-[#1F2329] to-slate-800 text-white relative shadow-2xl overflow-hidden"
        >
          {/* Decorative accents */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E60012] opacity-10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0052D9] opacity-10 rounded-full blur-3xl -ml-32 -mb-32"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6">
                <Rocket className="w-4 h-4 text-[#0052D9]" />
                <span>立即开启成长型企业数智之旅</span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
                立即获取 YonSuite <br/>
                交付清单与专属报价
              </h2>
              <p className="text-slate-400 text-lg mb-0 leading-relaxed max-w-xl">
                加入全球数万家成功企业行列，以最快速度完成数智化 2.0 升级，驱动业务创新增长。
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <button
                onClick={() => setIsDemoOpen(true)}
                className="px-10 py-5 bg-[#E60012] text-white font-bold rounded-xl hover:bg-red-700 transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-red-500/20"
              >
                获取报价与交付周期
                <MessageCircle className="w-5 h-5" />
              </button>
              <button onClick={handleOpenConsult} className="px-10 py-5 bg-white text-[#1F2329] font-bold rounded-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-3 border border-white">
                下载交付清单
                <Download className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap justify-center lg:justify-start gap-8 opacity-50">
            <div className="flex items-center gap-2">
              <span className="text-sm">最快 1 个月核心上线</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm">99.95% 服务可用性</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm">专业交付顾问 1v1 指导</span>
            </div>
          </div>
        </motion.div>
      </div>

      <DemoRequestModal 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)} 
        source="Product_YonSuite_Bottom"
      />
    </section>
  )
}
