'use client'

import { Check, Plus } from 'lucide-react'

export default function DeliveryScope() {
  const handleOpenConsult = () => {
    window.dispatchEvent(new CustomEvent('open-consult-modal'))
  }

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            交付范围与版本清单
          </h2>
          <p className="text-lg text-slate-600">
            灵活的模块化组合，满足不同规模企业的构建需求
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Standard Edition */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden relative">
            <div className="h-2 w-full bg-[#0052D9]"></div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">标准版</h3>
              <p className="text-sm text-slate-500 mb-6">适用于大多数企业的敏捷业务构建</p>
              
              <ul className="space-y-4">
                {[
                  'App Studio 可视化应用构建器',
                  'Process Studio 流程编排引擎',
                  'Data Studio 数据建模中心',
                  '移动端应用运行框架',
                  'Web 端运行时环境',
                  '系统管理与权限中心',
                  '标准 Open API 接口'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center">
                      <Check className="w-3 h-3 text-[#0052D9]" />
                    </div>
                    <span className="text-slate-700 text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 bg-slate-50 border-t border-slate-100">
              <button
                onClick={handleOpenConsult}
                className="w-full py-3 bg-[#0052D9] text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
              >
                咨询标准版报价
              </button>
            </div>
          </div>

          {/* Enterprise Edition */}
          <div className="bg-white rounded-2xl shadow-lg border border-[#E60012]/30 overflow-hidden relative">
            <div className="absolute top-0 right-0 bg-[#E60012] text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
              Popular
            </div>
            <div className="h-2 w-full bg-[#E60012]"></div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">企业版</h3>
              <p className="text-sm text-slate-500 mb-6">针对大型集团的复杂业务场景与集成需求</p>
              
              <ul className="space-y-4 mb-6">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center">
                    <Check className="w-3 h-3 text-[#E60012]" />
                  </div>
                  <span className="text-slate-800 font-bold text-sm">包含标准版所有功能</span>
                </li>
                {[
                  'AI 智能编程助手 (YonGPT)',
                  'Integration Studio 融合集成平台',
                  'DevOps 持续交付流水线',
                  '私有化部署支持',
                  '高级安全审计与风控',
                  '多租户运营管理'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center">
                      <Plus className="w-3 h-3 text-[#E60012]" />
                    </div>
                    <span className="text-slate-700 text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
             <div className="p-8 bg-slate-50 border-t border-slate-100">
              <button
                onClick={handleOpenConsult}
                className="w-full py-3 bg-[#E60012] text-white font-bold rounded-lg hover:bg-red-700 transition-colors"
              >
                咨询企业版报价
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
