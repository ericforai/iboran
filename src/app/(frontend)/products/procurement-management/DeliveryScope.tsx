import React from 'react'
import { Check, Info, X } from 'lucide-react'

export const DeliveryScope = () => {
  const inclusions = [
    '数字化采购管理标准套件部署',
    '供应商门户（Portal）及移动端（M3/WeChat）配置',
    '三套标准业务蓝图（物资/服务/零星）流程配置',
    '标准 ERP (用友/SAP) 基础数据与对账单集成调优',
    '上线后 1 个月的远程/驻场专家保障服务'
  ]

  const optionals = [
    '定制化的供应商信用评价算法建模',
    '第三方电商平台（京东/震坤行等）打通集成',
    '深度 OCR 票据自动识别与智能入库校验',
    '复杂的定制化采购月度/季度分析大屏设计'
  ]

  const exclusions = [
    '非采购相关的仓储 WMS 深度定制逻辑',
    '企业历史陈旧数据的清洗与修复工作',
    '第三方系统的许可证（License）采购费用'
  ]

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">交付范围与边界</h2>
          <p className="text-slate-600">明确界定服务内容，确保项目高效落地，减少实施争议。</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900 mb-6">
              <Check className="w-6 h-6 text-green-500" />
              包含内容
            </h3>
            <ul className="space-y-4">
              {inclusions.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900 mb-6">
              <Info className="w-6 h-6 text-blue-500" />
              可选服务
            </h3>
            <ul className="space-y-4">
              {optionals.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 opacity-75">
            <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900 mb-6">
              <X className="w-6 h-6 text-red-500" />
              不包含内容
            </h3>
            <ul className="space-y-4">
              {exclusions.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
