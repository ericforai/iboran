'use client'

import { CheckCircle2, MinusCircle, AlertTriangle } from 'lucide-react'

const scopes = [
  {
    title: '包含项',
    icon: <CheckCircle2 className="w-6 h-6 text-emerald-500" />,
    items: [
      'A8 平台标准模块安装与基础配置',
      '核心公文流程（发文、收文、签报）搭建',
      '标准组织主数据同步与门户门户构建',
      '低代码 CAP 平台 1-3 个基础业务模板搭建',
      '移动端 M3 / 微协同（微信/钉钉等）基础集成'
    ],
    className: 'border-emerald-100 bg-emerald-50/30'
  },
  {
    title: '可选服务',
    icon: <MinusCircle className="w-6 h-6 text-[#0052D9]" />,
    items: [
      '深度异构系统集成（ERP/HR/CRM 双向接口）',
      '大规模业务流程定制与 CAP 复杂应用搭建',
      '信创环境性能调优与专项安全加固',
      '长期驻场技术支持与业务代运营服务',
      '定制化移动工作台 UI/UX 设计'
    ],
    className: 'border-blue-100 bg-blue-50/30'
  },
  {
    title: '不包含',
    icon: <AlertTriangle className="w-6 h-6 text-slate-400" />,
    items: [
      '服务器、存储、网络等基础硬件设施采购',
      '国产操作系统、数据库等第三方软件 License',
      '业务数据大规模历史迁移与清洗服务',
      '非原厂组件的深度二次开发'
    ],
    className: 'border-slate-200 bg-slate-50/50'
  }
]

export default function DeliveryScope() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2329] mb-12 text-center">交付边界与范围</h2>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {scopes.map((scope, idx) => (
            <div key={idx} className={`p-8 rounded-2xl border ${scope.className}`}>
              <div className="flex items-center gap-3 mb-6">
                {scope.icon}
                <h3 className="text-xl font-bold text-[#1F2329]">{scope.title}</h3>
              </div>
              <ul className="space-y-4">
                {scope.items.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-slate-600 leading-relaxed">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
