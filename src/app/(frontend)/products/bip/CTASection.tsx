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
            获取 BIP 选型对比表 + 实施路线图
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            从一次可验收的交付开始，构建企业数智化底座。了解 YonBIP 与其他产品的差异，做出最适合您企业的选择。
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => setIsDemoOpen(true)}
              className="px-8 py-4 bg-white text-[#E60012] font-bold rounded-md hover:bg-red-50 transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              获取选型对比表
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-md hover:bg-white/10 transition-all">
              下载实施路线图
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
