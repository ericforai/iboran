'use client'

import { useState } from 'react'
import { ArrowRight, Phone, Mail } from 'lucide-react'
import { DemoRequestModal } from '@/components/DemoRequestModal'

export default function CTASection() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <>
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2329] mb-6">
              开启电气装备<span className="text-[#0052D9]">数智化</span>转型之旅
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              我们的电气装备行业专家团队将为您提供专业的数字化转型咨询服务，
              帮助您的企业实现智能制造升级与高质量发展
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <button
                onClick={() => setIsDemoOpen(true)}
                className="px-8 py-4 bg-[#E60012] text-white rounded-md font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-200 flex items-center gap-2 group"
              >
                预约电气装备行业专家咨询
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border-2 border-[#0052D9] text-[#0052D9] font-semibold rounded-md hover:bg-blue-50 transition-all">
                下载电气装备行业白皮书
              </button>
            </div>
            
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-slate-600">
              <a href="tel:0571-87176121" className="flex items-center gap-2 hover:text-[#0052D9] transition-colors">
                <Phone size={18} />
                <span>0571-87176121</span>
              </a>
              <a href="mailto:biz@iboran.com" className="flex items-center gap-2 hover:text-[#0052D9] transition-colors">
                <Mail size={18} />
                <span>biz@iboran.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <DemoRequestModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </>
  )
}
