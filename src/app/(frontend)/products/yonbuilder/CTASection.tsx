'use client'

import { ArrowRight, MessageSquare } from 'lucide-react'

export default function CTASection() {
  const handleOpenDemo = () => {
    window.dispatchEvent(new CustomEvent('open-demo-modal'))
  }

  const handleOpenConsult = () => {
    window.dispatchEvent(new CustomEvent('open-consult-modal'))
  }

  return (
    <section className="py-24 bg-[#0052D9] relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white rounded-full blur-3xl -mr-[200px] -mt-[200px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-black rounded-full blur-3xl -ml-[100px] -mb-[100px] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
          准备好开启高效开发之旅了吗？
        </h2>
        <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
          立即体验 YonBuilder，以 1/10 的成本构建企业级应用，加速您的数智化创新。
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleOpenDemo}
            className="px-8 py-4 bg-white text-[#0052D9] font-bold rounded-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 min-w-[200px] justify-center"
          >
            免费预约演示
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={handleOpenConsult}
            className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-lg hover:bg-white/10 transition-all flex items-center gap-2 min-w-[200px] justify-center"
          >
            <MessageSquare className="w-5 h-5" />
            咨询解决方案顾问
          </button>
        </div>
        
        <p className="mt-8 text-sm text-blue-200">
          已有 10,000+ 家企业使用 YonBuilder 构建应用
        </p>
      </div>
    </section>
  )
}
