'use client'

import React from 'react'
import { Server, Shield, Share2, Network } from 'lucide-react'

export const TechSpecs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <h2 className="text-3xl font-bold mb-8">开放、安全的集成架构</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                  <Share2 size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">广泛的生态连接</h4>
                  <p className="text-gray-600 text-sm">
                    通过移动端/微协同无缝衔接，集成 1400+ 银行支付接口，支持携程、滴滴、同程等第三方商旅平台数据拉取。
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                  <Network size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">主流 ERP 标准对接</h4>
                  <p className="text-gray-600 text-sm">
                    沉淀多年的 ERP（用友 NC/YonBIP/U8、SAP、Oracle）对接模板，支持凭证、基础资料、供应商等财务数据的实时同步。
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                  <Shield size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">军工级安全合规</h4>
                  <p className="text-gray-600 text-sm">
                    支持国密加密算法，符合电子会计档案管理规范。提供颗粒化权限管理，确保财务数据全程可审计、防篡改。
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="bg-slate-900 rounded-3xl p-10 text-white relative overflow-hidden">
               <div className="relative z-10">
                  <Server className="text-blue-500 mb-6" size={40} />
                  <h3 className="text-2xl font-bold mb-6 text-white leading-tight">部署方式灵活选择</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border border-white/10 p-6 rounded-2xl bg-white/5">
                      <h5 className="font-bold mb-2 text-blue-400">公有云模式</h5>
                      <p className="text-xs text-gray-400">快速迭代，弹性扩容，免运维成本，适合快速发展的创新企业。</p>
                    </div>
                    <div className="border border-white/10 p-6 rounded-2xl bg-white/5">
                      <h5 className="font-bold mb-2 text-red-400">私有化部署</h5>
                      <p className="text-xs text-gray-400">数据完全掌控，内网访问，高安全性需求组织首选。</p>
                    </div>
                  </div>
                  <div className="mt-10 pt-10 border-t border-white/10 text-sm text-gray-400">
                    * 支持信创国产化适配（龙芯、飞腾、华为麒麟、达梦数据库等）
                  </div>
               </div>
               {/* 装饰圆 */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
