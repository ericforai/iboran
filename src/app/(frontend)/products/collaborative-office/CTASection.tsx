'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download, CheckCircle2 } from 'lucide-react'
import { DemoRequestModal } from '@/components/DemoRequestModal'

export default function CTASection() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-600 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            准备好将协同办公升级为 <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">
              数智化协同运营平台了吗？
            </span>
          </h2>
          
          <p className="text-xl text-slate-400 mb-12">
            预约资深专家，为您提供 A8 协同蓝图规划与全栈信创适配方案。
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12 text-left">
            {[
              '定制化协同运营方案一套',
              '交付报价与实施周期预估',
              '全栈信创适配白皮书'
            ].map(item => (
              <div key={item} className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-slate-200 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button
              onClick={() => setIsDemoOpen(true)}
              className="px-10 py-5 bg-[#E60012] text-white font-bold rounded-lg hover:bg-red-700 transition-all flex items-center justify-center gap-2 text-lg shadow-xl shadow-red-900/20"
            >
              预约专家演示
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-10 py-5 bg-white text-[#1F2329] font-bold rounded-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2 text-lg">
              <Download className="w-5 h-5" />
              下载交付清单
            </button>
          </div>

          <p className="mt-8 text-slate-500 text-sm">
            已有超过 50,000+ 中大型组织通过 A8 实现了数智化协同落地
          </p>
        </motion.div>
      </div>

      <DemoRequestModal 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)} 
        source="Product_Collaborative_Office_Footer"
      />
    </section>
  )
}
