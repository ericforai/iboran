import React from 'react'
import { ClipboardList, Palette, Rocket, ShieldCheck } from 'lucide-react'

const phases = [
  {
    title: '现状诊断',
    desc: '深度梳理现有项目流程，识别信息孤岛与管理盲区。',
    icon: <ClipboardList className="w-8 h-8 text-brand-red" />,
    deliverables: ['《业务现状评估报告》', '《改进方案大纲》']
  },
  {
    title: '蓝图设计',
    desc: '构建统一的项目管理架构，定义标准模板与审批流。',
    icon: <Palette className="w-8 h-8 text-brand-blue" />,
    deliverables: ['《业务架构设计书》', '《功能配置清单》']
  },
  {
    title: '实施上线',
    desc: '系统环境部署，数据初始化，关键岗用户培训。',
    icon: <Rocket className="w-8 h-8 text-brand-blue" />,
    deliverables: ['《系统操作手册》', '《上线验收报告》']
  },
  {
    title: '运维优化',
    desc: '运行状况巡检，根据业务变化快速调整流程配置。',
    icon: <ShieldCheck className="w-8 h-8 text-brand-red" />,
    deliverables: ['《月度运维报表》', '《流程优化建议》']
  }
]

export const DeliveryMethodology = () => {
  return (
    <section className="py-24 bg-gray-50/50">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold mb-6 italic">交付方法论</h2>
          <p className="text-gray-600 text-lg">
            不仅仅是卖软件，更是交付一套成熟的项目管理体系。
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-12" />
          
          {phases.map((phase, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-8 border border-gray-100">
                {phase.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{phase.title}</h3>
              <p className="text-gray-600 text-sm text-center mb-6 leading-relaxed px-4">
                {phase.desc}
              </p>
              <div className="w-full bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-3">核心产出物</span>
                <ul className="space-y-2">
                  {phase.deliverables.map((item, i) => (
                    <li key={i} className="text-xs text-gray-700 flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-brand-red" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
