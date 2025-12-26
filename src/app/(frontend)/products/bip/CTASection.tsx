'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { DemoRequestModal } from '@/components/DemoRequestModal'

export default function CTASection() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <>
      <section className="py-24 bg-[#E60012]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            把“复杂管理”做成“简单系统”
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            从一次可验收的交付开始，构建企业数智化底座。
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => setIsDemoOpen(true)}
              className="px-8 py-4 bg-white text-[#E60012] font-bold rounded-md hover:bg-red-50 transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              预约专家咨询
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-md hover:bg-white/10 transition-all">
              下载交付清单
            </button>
          </div>
        </div>
      </section>

      <DemoRequestModal 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)} 
        source="Product_BIP_Bottom"
      />
    </>
  )
}
