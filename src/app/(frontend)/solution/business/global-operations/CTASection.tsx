'use client'

import { useState } from 'react'
import { ArrowRight, Globe, Phone, Mail } from 'lucide-react'
import { DemoRequestModal } from '@/components/DemoRequestModal'

export default function CTASection() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <>
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-[#0052D9] text-sm font-medium mb-6">
              <Globe size={16} />
              立即开启全球化之旅
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2329] mb-6">
              让您的企业<span className="text-[#0052D9]">走向世界</span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              无论您是计划出海还是已在海外运营，泊冉软件专业团队将为您提供定制化的全球化解决方案，助力业务全球扩张
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <button
                onClick={() => setIsDemoOpen(true)}
                className="px-8 py-4 bg-[#E60012] text-white rounded-md font-bold hover:bg-red-700 transition shadow-lg shadow-red-900/20 flex items-center gap-2 group"
              >
                预约出海专家咨询
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border-2 border-[#0052D9] text-[#0052D9] rounded-md font-semibold hover:bg-blue-50 transition flex items-center gap-2">
                下载全球化白皮书
              </button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-slate-600">
              <a href="tel:400-9955-161" className="flex items-center gap-2 hover:text-[#0052D9] transition">
                <Phone size={18} />
                <span>400-9955-161</span>
              </a>
              <a href="mailto:wyz@iboran.com" className="flex items-center gap-2 hover:text-[#0052D9] transition">
                <Mail size={18} />
                <span>wyz@iboran.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <DemoRequestModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </>
  )
}
