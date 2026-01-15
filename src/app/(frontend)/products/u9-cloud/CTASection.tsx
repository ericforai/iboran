import React from 'react'
import { Button } from '@/components/ui/button'
import { Rocket, Download, PhoneCall } from 'lucide-react'

export const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 to-indigo-800 text-white overflow-hidden relative">
      <div className="container px-4 mx-auto relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex p-4 rounded-3xl bg-white/10 mb-8 animate-bounce">
            <Rocket className="w-8 h-8 text-blue-200" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
            开启离散制造的 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">数智化进化之门</span>
          </h2>
          <p className="text-xl text-blue-100 mb-12">
            预约资深数智化专家，为您提供 1对1 的场景化解决方案及产品演示。
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <Button size="lg" className="bg-brand-red hover:bg-red-700 text-white px-10 h-16 rounded-full text-xl shadow-xl transition-all hover:scale-105">
              立即预约专家演示
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 bg-white/10 text-white hover:bg-white hover:text-blue-600 px-10 h-16 rounded-full text-xl transition-all">
              <Download className="mr-2 w-5 h-5" /> 交付清单下载
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-3 text-blue-200">
             <PhoneCall className="w-5 h-5" /> 
             <span className="font-bold">咨询专线：400-XXX-XXXX</span>
          </div>
        </div>
      </div>
      
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
    </section>
  )
}
