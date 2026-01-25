'use client'

import { useState } from 'react'
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react'
import { DemoRequestModal } from '@/components/DemoRequestModal'

export default function CTASection() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <>
      <section className="py-24 bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-800 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-60 h-60 bg-teal-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              开启<span className="text-emerald-400">基础化工</span>数智化转型之旅
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              17+化工行业标杆客户的共同选择，用友BIP超级版助力您的企业实现绿色、高端、智能化转型升级
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <button
                onClick={() => setIsDemoOpen(true)}
                className="px-8 py-4 bg-[#E60012] text-white rounded-md font-bold hover:bg-red-700 transition shadow-lg shadow-red-900/30 flex items-center gap-2 group"
              >
                预约化工行业专家咨询
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-md font-semibold hover:bg-white/20 transition">
                下载行业白皮书
              </button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-slate-300">
              <a href="tel:400-9955-161" className="flex items-center gap-2 hover:text-white transition">
                <Phone size={18} />
                <span>400-9955-161</span>
              </a>
              <a href="mailto:wyz@iboran.com" className="flex items-center gap-2 hover:text-white transition">
                <Mail size={18} />
                <span>wyz@iboran.com</span>
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={18} />
                <span>深圳市南山区</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <DemoRequestModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </>
  )
}
