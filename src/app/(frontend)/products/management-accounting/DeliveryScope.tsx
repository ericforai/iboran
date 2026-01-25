'use client'

import { Check, X, Info } from 'lucide-react'

const scopeItems = [
  { category: '基础实施', included: true, label: '事项会计中台初始化' },
  { category: '基础实施', included: true, label: '成本中心费用管理' },
  { category: '基础实施', included: true, label: '产品成本核算体系' },
  { category: '系统集成', included: true, label: '营销/采购/制造云标准集成' },
  { category: '系统集成', included: true, label: '第三方系统 API 适配' },
  { category: '高级特性', included: true, label: '标准成本 PDCA 循环' },
  { category: '高级特性', included: true, label: '智能月结工作台' },
  { category: '高级特性', included: false, label: 'AI 财务大模型辅助决策 (可选)' },
  { category: '增值服务', included: false, label: '全球税务合规咨询 (咨询型)' }
]

export default function DeliveryScope() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
           <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                 清晰的交付界定，<br />确保项目高确定性落地。
              </h2>
              <p className="text-slate-500 mb-8 leading-relaxed">
                 泊冉秉持“所见即所得”的服务理念。通过颗粒度极细的交付范围表，消除双方在实施过程中的模糊地带，确保项目工期与质量完全受控。
              </p>
              <div className="bg-blue-50 border border-blue-100 p-6 rounded-2xl flex items-start space-x-4">
                 <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                 <div>
                    <h4 className="font-bold text-blue-900 mb-1">实施专家建议</h4>
                    <p className="text-sm text-blue-700">对于集团型企业，建议分两阶段交付：第一阶段聚焦核心成本核算，第二阶段扩展至全球协同与多维获利分析。</p>
                 </div>
              </div>
           </div>

           <div className="w-full lg:w-1/2">
              <div className="bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
                 <div className="bg-slate-900 p-6 text-white flex justify-between items-center">
                    <span className="font-bold">交付项清单 (Delivery Checklist)</span>
                    <span className="text-xs text-slate-400">v2.0 标准版</span>
                 </div>
                 <div className="p-2">
                    <table className="w-full text-left">
                       <thead>
                          <tr className="text-[10px] text-slate-400 uppercase tracking-widest border-b border-slate-200">
                             <th className="px-6 py-4 font-bold">分类</th>
                             <th className="px-6 py-4 font-bold">交付内容</th>
                             <th className="px-6 py-4 font-bold text-center">状态</th>
                          </tr>
                       </thead>
                       <tbody>
                          {scopeItems.map((item, i) => (
                            <tr key={i} className="border-b border-slate-200/50 hover:bg-white transition-colors">
                               <td className="px-6 py-4 text-xs font-medium text-slate-500">{item.category}</td>
                               <td className="px-6 py-4 text-sm font-semibold text-slate-800">{item.label}</td>
                               <td className="px-6 py-4 flex justify-center">
                                  {item.included ? (
                                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                       <Check className="w-4 h-4" />
                                    </div>
                                  ) : (
                                    <div className="w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center text-slate-400">
                                       <X className="w-4 h-4" />
                                    </div>
                                  )}
                               </td>
                            </tr>
                          ))}
                       </tbody>
                    </table>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  )
}
