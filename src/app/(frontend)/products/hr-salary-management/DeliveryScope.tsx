'use client'

import React from 'react'
import { Check, Info, Minus } from 'lucide-react'

export const DeliveryScope = () => {
  const scope = [
    { title: '组织人事/合同管理模块配置', status: 'include' },
    { title: '标准算薪规则与公式设定', status: 'include' },
    { title: '全国 438+ 城市社保标准同步', status: 'include' },
    { title: '微信小程序工资单集成', status: 'include' },
    { title: '协同 OA 组织架构同步联调', status: 'include' },
    { title: '异构招聘平台 API 定制对接', status: 'optional' },
    { title: '历史历史人事数据大批量清洗', status: 'optional' },
    { title: '非 HR 业务流程改造咨询', status: 'exclude' },
    { title: '第三方非标准支付网关开发', status: 'exclude' },
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">交付范围与边界</h2>
            <p className="text-gray-600">明确交付项，确保项目高标准、按时上线</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
              <div className="p-8">
                <h3 className="flex items-center gap-2 font-bold text-green-600 mb-6">
                  <Check size={20} />
                  标准交付项
                </h3>
                <ul className="space-y-4">
                  {scope.filter(s => s.status === 'include').map((s, i) => (
                    <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                      <span className="mt-1 text-green-500">•</span>
                      {s.title}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 bg-blue-50/20">
                <h3 className="flex items-center gap-2 font-bold text-blue-600 mb-6">
                  <Info size={20} />
                  可选服务
                </h3>
                <ul className="space-y-4">
                  {scope.filter(s => s.status === 'optional').map((s, i) => (
                    <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                       <span className="mt-1 text-blue-500">•</span>
                      {s.title}
                    </li>
                  ))}
                </ul>
                <p className="mt-8 text-xs text-slate-400 italic">注：可选服务可能涉及额外开发周期</p>
              </div>

              <div className="p-8">
                <h3 className="flex items-center gap-2 font-bold text-slate-400 mb-6">
                  <Minus size={20} />
                  不包含范围
                </h3>
                <ul className="space-y-4">
                  {scope.filter(s => s.status === 'exclude').map((s, i) => (
                    <li key={i} className="text-sm text-slate-400 flex items-start gap-2">
                      <span className="mt-1 text-slate-300">•</span>
                      {s.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
