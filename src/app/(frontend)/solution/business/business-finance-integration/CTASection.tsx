'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { DemoRequestModal } from '@/components/DemoRequestModal'
import { ArrowRight, MessageSquare, Download } from 'lucide-react'

export default function CTASection() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with brand colors */}
      <div className="absolute inset-0 bg-[#001529] z-0" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-600/10 to-transparent z-0" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-blue-600/10 to-transparent z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 p-12 md:p-16 rounded-[2.5rem] shadow-2xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              开启您的<span className="text-[#E60012]">数智化</span>业财升级之旅
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              联系我们的行业专家，获取为您定制的“业财融合”数字化转型蓝图。
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button
                onClick={() => setIsDemoOpen(true)}
                className="w-full sm:w-auto px-10 py-5 bg-[#E60012] text-white font-bold rounded-xl hover:bg-red-700 transition-all shadow-xl hover:shadow-red-600/30 flex items-center justify-center gap-2 group"
              >
                <MessageSquare size={20} />
                预约专家演示
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="w-full sm:w-auto px-10 py-5 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                <Download size={20} />
                获取产品画册
              </button>
            </div>

            <div className="mt-12 pt-12 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8">
               <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">500强</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest">服务经验</div>
               </div>
               <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">20+</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest">行业沉淀</div>
               </div>
               <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">7*24</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest">贴心服务</div>
               </div>
               <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">云原生</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest">技术底座</div>
               </div>
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
