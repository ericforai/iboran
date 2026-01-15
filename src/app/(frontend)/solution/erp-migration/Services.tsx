'use client'

import { Shield, ArrowUpCircle, CheckCircle2 } from 'lucide-react'

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">双轨驱动，灵活选择</h2>
          <p className="text-lg text-slate-600">
            无论是维持现状还是寻求突破，我们都为您提供专业的解决方案
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Maintenance Service */}
          <div className="relative group rounded-3xl border border-slate-200 p-8 hover:shadow-xl transition-all hover:border-blue-200 bg-slate-50/50">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Shield className="w-32 h-32 text-blue-600" />
            </div>
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6 font-bold text-2xl">
                01
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">原厂级专属运维</h3>
              <p className="text-slate-600 mb-8 h-12">
                针对暂无升级计划的企业，提供延展服务周期，保障系统持续稳定运行。
              </p>
              
              <ul className="space-y-4">
                {[
                  "关键补丁更新与安全加固",
                  "法律法规与税务政策同步更新",
                  "原厂工程师 7x24h 应急响应",
                  "系统性能调优与数据库维护"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Upgrade Service */}
          <div id="upgrade" className="relative group rounded-3xl border border-slate-200 p-8 hover:shadow-xl transition-all hover:border-indigo-200 bg-gradient-to-br from-white to-indigo-50/30">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <ArrowUpCircle className="w-32 h-32 text-indigo-600" />
            </div>
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 mb-6 font-bold text-2xl">
                02
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">平滑升迁 BIP</h3>
              <p className="text-slate-600 mb-8 h-12">
                打破传统升级的复杂与高风险，实现数据、流程、习惯的平滑迁移。
              </p>
              
              <ul className="space-y-4">
                {[
                  "自动化迁移工具，数据无损结转",
                  "保留历史凭证与业务单据",
                  "用户操作习惯无缝衔接",
                  "云原生架构，支持弹性扩展"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500 mr-3 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
