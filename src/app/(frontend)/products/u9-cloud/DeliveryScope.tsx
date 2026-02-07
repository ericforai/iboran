import React from 'react'
import { Check, X, ShieldAlert } from 'lucide-react'

const scope = [
  { item: '多组织财务/供应链(ERP)标准配置', status: 'included' },
  { item: '各行政区域税务及合规包', status: 'included' },
  { item: '容器化/云原生底座及安全加固', status: 'included' },
  { item: '基础数据清洗与迁移工具', status: 'included' },
  { item: '定制化业务流程(BPM)开发', status: 'optional' },
  { item: '第三方 MES/PLM 深度集成', status: 'optional' },
  { item: '特定非标业务参数建模', status: 'optional' },
  { item: '阿米巴深度经营核算咨询', status: 'optional' },
  { item: '私有服务器硬件及运维', status: 'excluded' },
  { item: '不相关的第三方系统采购', status: 'excluded' },
]

export const DeliveryScope = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">交付范围清单</h2>
          <p className="text-gray-600">明确边界，以保障交付质量与预期一致。</p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          {scope.map((s, idx) => (
            <div key={idx} className="flex items-center justify-between p-6 border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
              <span className={`text-lg transition-colors ${s.status === 'excluded' ? 'text-gray-400 line-through' : 'text-gray-700'}`}>
                {s.item}
              </span>
              <div className="flex items-center">
                {s.status === 'included' && (
                  <div className="flex items-center gap-2 text-green-600 font-bold text-sm px-3 py-1 bg-green-50 rounded-full">
                    <Check className="w-4 h-4" /> 包含
                  </div>
                )}
                {s.status === 'optional' && (
                  <div className="flex items-center gap-2 text-blue-600 font-bold text-sm px-3 py-1 bg-blue-50 rounded-full">
                    可选
                  </div>
                )}
                {s.status === 'excluded' && (
                  <div className="flex items-center gap-2 text-gray-400 font-bold text-sm px-3 py-1 bg-gray-100 rounded-full">
                    <X className="w-4 h-4" /> 不包含
                  </div>
                )}
              </div>
            </div>
          ))}
          <div className="p-6 bg-blue-50/50 flex items-start gap-4">
            <ShieldAlert className="w-6 h-6 text-blue-600 shrink-0" />
            <p className="text-sm text-blue-800 leading-relaxed">
              * 以上清单基于标准交付模型。具体范围将根据初次数智化诊断结果在专属实施合同中最终明确。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
