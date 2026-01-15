'use client'

import { useState } from 'react'
import { ArrowRight, Phone, CheckCircle } from 'lucide-react'
import { DemoRequestModal } from '@/components/DemoRequestModal'

export default function CTASection() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <>
      <section className="py-24 bg-gradient-to-br from-slate-900 via-amber-900 to-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              开启能源行业<span className="text-amber-400">数智化转型</span>之旅
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              预约能源行业专家咨询，获取定制化解决方案，助力企业智能生产、精细管控、高质量发展
            </p>
            
            {/* Trust Points */}
            <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <CheckCircle size={16} className="text-amber-400" />
                用友BIP超级版
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle size={16} className="text-amber-400" />
                IOT+AI智能运维
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle size={16} className="text-amber-400" />
                行业标杆案例验证
              </span>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <button
                onClick={() => setIsDemoOpen(true)}
                className="px-10 py-4 bg-[#E60012] text-white font-bold rounded-md hover:bg-red-700 transition shadow-lg shadow-red-900/30 flex items-center gap-2 group"
              >
                预约能源行业专家咨询
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-10 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-md font-semibold hover:bg-white/20 transition">
                下载能源白皮书
              </button>
            </div>
            
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-slate-400">
              <a href="tel:400-9955-161" className="flex items-center gap-2 hover:text-white transition">
                <Phone size={18} />
                <span>400-9955-161</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <DemoRequestModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </>
  )
}
