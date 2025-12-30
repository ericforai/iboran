import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden bg-slate-50">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              数字化采购解决方案
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              数字化采购管理平台
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                驱动采购降本增效
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              基于 COP 平台打造，实现从请购、寻源、合同到支付的全流程闭环管理。规范采购流程，强化过程监控，提升供应链协同效率。
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              {['降本幅度 [15]%+', '协同效率提升 [30]%+', '合规闭环 [100]%'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-slate-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  {item}
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 h-14 text-lg">
                预约专家演示
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 h-14 text-lg">
                获取报价方案
              </Button>
            </div>
          </div>
          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/50 to-transparent rounded-3xl -rotate-3 mb-10 translate-x-4 translate-y-4"></div>
            <div className="relative bg-white p-4 rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
               <div className="w-full h-full min-h-[400px] bg-slate-50 flex items-center justify-center rounded-2xl overflow-hidden">
                  <img 
                    src="/procurement-management-hero.png" 
                    alt="数字化采购管理平台架构" 
                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                  />
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
