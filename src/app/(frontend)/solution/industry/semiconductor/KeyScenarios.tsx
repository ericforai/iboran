'use client'

import { useState } from 'react'
import { CheckCircle, Layers, Zap, BarChart3, Settings } from 'lucide-react'

const scenarios = [
  {
    id: 'traceability',
    title: '晶圆制造全流程追溯',
    icon: Layers,
    problem: '晶圆制造涉及拉晶、切割、研磨、抛光等数百道工序，传统纸质记录难以实现精细化追溯，问题批次定位困难',
    solution: 'MES系统实现Lot级、Wafer级全程追踪，每道工序的设备、参数、操作员信息自动采集并关联',
    outcome: '问题批次定位时间从数小时缩短至分钟级，支持正向追溯和逆向追溯',
  },
  {
    id: 'automation',
    title: '设备自动化控制',
    icon: Zap,
    problem: '机台设备种类繁多、接口协议各异，人工操作效率低且易出错，难以实现7×24无人值守运行',
    solution: 'EAP实现机台信息传输、配方自动下发、流程自动控制，支持SECS/GEM、OPC UA等主流协议',
    outcome: '设备自动化率提升至95%+，实现Auto3全自动化生产，人工干预降低90%',
  },
  {
    id: 'yield',
    title: '良率分析与优化',
    icon: BarChart3,
    problem: '良率受多因素影响，传统分析方法难以快速定位根因，良率提升依赖工程师经验',
    solution: 'YMS+SPC实现BIN Map/Defect Map分析、AI自动缺陷分类(ADC)、多因素关联分析',
    outcome: 'AI缺陷分类准确率95%+，良率提升周期缩短50%，每1%良率提升带来数千万收益',
  },
  {
    id: 'apc',
    title: '高级制程控制',
    icon: Settings,
    problem: '制程参数需持续优化，机台状态漂移导致工艺偏差，被动式调整无法满足纳米级精度要求',
    solution: 'APC实现R2R(Run-to-Run)控制、前馈/后馈调节，基于实时数据自动优化制程参数',
    outcome: '工艺稳定性提升30%，Wafer间差异降低40%，产品一致性显著改善',
  },
]

export default function KeyScenarios() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="py-24 bg-white">
            {/* AI Scraper Friendly Content (GEO) */}
            <div className="sr-only">
                {scenarios.map((s, i) => (
                    <div key={i}>
                        <h3>{s.title}</h3>
                        <p>{s.problem || s.description || ""}</p>
                        <p>{s.solution || ""}</p>
                        <p>{s.outcome || ""}</p>
                        {s.features && <ul>{s.features.map((f, fi) => <li key={fi}>{f}</li>)}</ul>}
                    </div>
                ))}
            </div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-[#0052D9] font-semibold tracking-wider uppercase">
            Key Scenarios
          </span>
          <h2 className="text-3xl font-bold text-[#1F2329] mt-2 mb-4">
            核心业务场景
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full" />
        </div>
        
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {scenarios.map((scenario, idx) => (
            <button
              key={scenario.id}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2 ${
                activeTab === idx
                  ? 'bg-[#0052D9] text-white shadow-lg shadow-blue-200'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <scenario.icon size={18} />
              {scenario.title}
            </button>
          ))}
        </div>
        
        {/* Scenario Content */}
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Problem-Solution-Outcome */}
            <div className="space-y-6">
              <div className="p-6 bg-red-50 rounded-xl border border-red-100">
                <h4 className="text-sm font-semibold text-red-600 mb-3 flex items-center gap-2">
                  😣 行业痛点
                </h4>
                <p className="text-slate-700 leading-relaxed">
                  {scenarios[activeTab].problem}
                </p>
              </div>
              
              <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
                <h4 className="text-sm font-semibold text-blue-600 mb-3 flex items-center gap-2">
                  💡 解决方案
                </h4>
                <p className="text-slate-700 leading-relaxed">
                  {scenarios[activeTab].solution}
                </p>
              </div>
              
              <div className="p-6 bg-green-50 rounded-xl border border-green-100">
                <h4 className="text-sm font-semibold text-green-600 mb-3 flex items-center gap-2">
                  <CheckCircle size={16} />
                  实现效果
                </h4>
                <p className="text-slate-700 leading-relaxed">
                  {scenarios[activeTab].outcome}
                </p>
              </div>
            </div>
            
            {/* Right: Visual */}
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-100">
              <div className="flex items-center justify-center mb-8">
                <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                  {(() => {
                    const IconComponent = scenarios[activeTab].icon
                    return <IconComponent size={40} className="text-[#0052D9]" />
                  })()}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-[#1F2329] text-center mb-6">
                {scenarios[activeTab].title}
              </h3>
              
              {/* Process Flow */}
              <div className="space-y-4">
                {['数据采集', '智能分析', '自动决策', '执行反馈'].map((step, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold ${
                      idx === 0 ? 'bg-[#E60012]' : 
                      idx === 1 ? 'bg-orange-500' :
                      idx === 2 ? 'bg-[#0052D9]' : 'bg-green-500'
                    }`}>
                      {idx + 1}
                    </div>
                    <div className="flex-1 h-2 bg-white rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          idx === 0 ? 'bg-[#E60012]' : 
                          idx === 1 ? 'bg-orange-500' :
                          idx === 2 ? 'bg-[#0052D9]' : 'bg-green-500'
                        }`}
                        style={{ width: `${100 - idx * 15}%` }}
                      />
                    </div>
                    <span className="text-sm text-slate-600 w-20">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
