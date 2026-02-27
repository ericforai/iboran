'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle2, BarChart3, Clock, ShieldCheck } from 'lucide-react'

export const Hero = () => {
  const handleOpenDemoModal = () => {
    window.dispatchEvent(new CustomEvent('open-demo-modal'))
  }

  const handleOpenConsultModal = () => {
    window.dispatchEvent(new CustomEvent('open-consult-modal'))
  }

  return (
    <section className="relative pt-24 pb-16 overflow-hidden bg-gray-50">
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-medium text-sm mb-6">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              离散制造数智制造全场景平台
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              数智制造选 <span className="text-blue-600 text-brand-red">U9 cloud</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              深度融合移动互联网、大数据、物联网、人工智能，为离散制造企业提供项目化制造、个性化定制、智能工厂等全场景闭环应用，护航企业高速成长。
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              {[
                { label: '订单交付周期', value: '缩短 50%', icon: Clock },
                { label: '库存周转率', value: '提升 40%', icon: BarChart3 },
                { label: 'IT 投入成本', value: '降低 62%', icon: ShieldCheck },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <item.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs">{item.label}</div>
                    <div className="text-gray-900 font-bold">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button onClick={handleOpenDemoModal} size="lg" className="bg-brand-red hover:bg-red-700 text-white px-8 h-14 rounded-full text-lg shadow-lg shadow-red-200 transition-all hover:scale-105">
                预约专家演示 <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button onClick={handleOpenConsultModal} size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 h-14 rounded-full text-lg transition-all">
                获取产品报价
              </Button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="flex-1 relative">
            <div className="relative z-10 bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
               {/* Simplified Dashboard Mockup */}
               <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                  <div className="font-bold text-gray-900">U9 cloud 数智化引擎</div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
               </div>
               <div className="grid grid-cols-2 gap-4">
                 <div className="p-4 bg-blue-50 rounded-2xl">
                    <div className="text-blue-600 mb-2 font-medium">智能排产计划</div>
                    <div className="h-2 w-full bg-blue-200 rounded-full overflow-hidden">
                       <div className="h-full bg-blue-600 w-3/4 animate-pulse"></div>
                    </div>
                 </div>
                 <div className="p-4 bg-red-50 rounded-2xl">
                    <div className="text-brand-red mb-2 font-medium">项目进度跟踪</div>
                    <div className="h-2 w-full bg-red-200 rounded-full overflow-hidden">
                       <div className="h-full bg-brand-red w-1/2"></div>
                    </div>
                 </div>
                 <div className="col-span-2 p-6 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-medium text-gray-700">全价值链协同</span>
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                    </div>
                    <div className="flex gap-4">
                        {['PLM', 'SRM', 'MES', 'CRM'].map(sys => (
                            <div key={sys} className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-xs font-bold text-gray-600">
                                {sys}
                            </div>
                        ))}
                    </div>
                 </div>
               </div>
            </div>
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-200/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
