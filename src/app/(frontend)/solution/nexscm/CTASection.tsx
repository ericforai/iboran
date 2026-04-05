'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download, Send } from 'lucide-react'

export default function CTASection() {
  const handleOpenDemo = () => {
    window.dispatchEvent(new (window as any).CustomEvent('open-demo-modal', { detail: { source: 'solution-nexscm-cta' } }))
  }

  const handleOpenConsult = () => {
    window.dispatchEvent(new CustomEvent('open-consult-modal'))
  }

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-[#0052D9] rounded-[3rem] px-8 py-20 md:p-24 relative overflow-hidden text-center text-white shadow-2xl">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(230,0,18,0.15),_transparent_60%)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.05),_transparent_50%)]" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10 max-w-4xl mx-auto"
          >
            <div className="text-red-400 font-black text-sm uppercase tracking-[0.3em] mb-8">
              READY TO SCALE YOUR IP?
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">
              从感性创意到理性确定性<br />
              <span className="opacity-80 text-blue-200">仅需一个 NexSCM 系统</span>
            </h2>
            
            <p className="text-xl text-blue-100/80 font-medium mb-16 max-w-2xl mx-auto leading-relaxed">
              立即预约泊冉 1 对 1 专家演示，获取价值 5000 元的项目全链路诊断服务与行业参考白皮书。
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button
                onClick={handleOpenDemo}
                className="group w-full sm:w-auto px-12 py-6 bg-[#E60012] hover:bg-red-700 text-white font-black rounded-2xl shadow-2xl shadow-red-900/40 transition-all active:scale-95 flex items-center justify-center gap-3"
              >
                立即申请专家演示
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={handleOpenConsult}
                className="group w-full sm:w-auto px-12 py-6 bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white/20 text-white font-black rounded-2xl transition-all active:scale-95 flex items-center justify-center gap-3"
              >
                下载行业白皮书
                <Download size={18} className="group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
