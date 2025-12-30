'use client'

import React from 'react'
import { Server, Shield, Share2, Network } from 'lucide-react'

export const TechSpecs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <h2 className="text-3xl font-bold mb-8">云端协同、安全可靠的技术架构</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                  <Share2 size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">协同全生态无缝同步</h4>
                  <p className="text-gray-600 text-sm">
                    通过协同云（COP）与薪事力深度融合，实现组织架构、权限体系、流程审批的实时联动，真正做到“一个入口，全业务闭环”。
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                  <Network size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">广泛的 OpenAPI 能力</h4>
                  <p className="text-gray-600 text-sm">
                    提供标准 RESTful API，支持与主流 ERP、招聘平台（智联、前程无忧）、银行直联及第三方考勤硬件的快速对接。
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                  <Shield size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">高等级数据安全保障</h4>
                  <p className="text-gray-600 text-sm">
                    采用端到端数据加密、等保三级安全防护。针对薪资、档案等敏感数据提供颗粒化权限管控与详细的审计留痕。
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="bg-slate-900 rounded-3xl p-10 text-white relative overflow-hidden">
               <div className="relative z-10">
                  <Server className="text-blue-500 mb-6" size={40} />
                  <h3 className="text-2xl font-bold mb-6 text-white leading-tight">灵活的部署与接入方式</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border border-white/10 p-6 rounded-2xl bg-white/5">
                      <h5 className="font-bold mb-2 text-blue-400">公有云 SaaS 模式</h5>
                      <p className="text-xs text-gray-400">开通即用，政策实时自动同步，无需投入硬件及运维成本。</p>
                    </div>
                    <div className="border border-white/10 p-6 rounded-2xl bg-white/5">
                      <h5 className="font-bold mb-2 text-red-400">混合云集成</h5>
                      <p className="text-xs text-gray-400">支持内网 OA 与云端 HR 系统的混合组网，兼顾便利性与数据私密性。</p>
                    </div>
                  </div>
                  <div className="mt-10 pt-10 border-t border-white/10 text-sm text-gray-400">
                    * 支持移动端多端覆盖（微信小程序、移动 M3、钉钉、企业微信）
                  </div>
               </div>
               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
