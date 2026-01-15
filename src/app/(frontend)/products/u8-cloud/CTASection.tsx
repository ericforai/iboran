'use client'

import { useState } from 'react'
import { ArrowRight, Download, FileCheck } from 'lucide-react'
import { DemoRequestModal } from '@/components/DemoRequestModal'

export default function CTASection() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <section className="py-20 lg:py-28 bg-[#1F2329] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E60012] rounded-full blur-[120px] opacity-[0.05] -mr-64 -mt-64"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-[0.05] -ml-32 -mb-32"></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8">
          开启成长型集团的<br/>
          <span className="text-[#E60012]">数智化跃迁</span>
        </h2>
        
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          已有超过 6000 家先锋企业通过 U8 cloud 实现了更敏捷、更高效的集团管控。现在预约，专家将为您进行 1 对 1 交付方案评估。
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button
            onClick={() => setIsDemoOpen(true)}
            className="w-full sm:w-auto px-10 py-5 bg-[#E60012] text-white font-bold rounded-xl hover:bg-red-700 transition-all shadow-lg hover:shadow-red-500/20 flex items-center justify-center gap-2 text-lg"
          >
            免费预约专家演示
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <button className="w-full sm:w-auto px-10 py-5 border-2 border-slate-700 text-white font-bold rounded-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2 text-lg group">
            下载交付清单 (PDF)
            <Download className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
          </button>
        </div>

        <div className="mt-16 pt-12 border-t border-slate-800/50 flex flex-wrap justify-center gap-12 text-slate-500">
          <div className="flex items-center gap-3">
            <FileCheck className="w-5 h-5 text-[#E60012]" />
            <span>信创互认证 [68]+</span>
          </div>
          <div className="flex items-center gap-3">
            <FileCheck className="w-5 h-5 text-[#E60012]" />
            <span>交付满意度 [98]%</span>
          </div>
          <div className="flex items-center gap-3">
            <FileCheck className="w-5 h-5 text-[#E60012]" />
            <span>专家 1对1 评估</span>
          </div>
        </div>
      </div>

      <DemoRequestModal 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)} 
        source="CTA_U8Cloud"
      />
    </section>
  )
}
