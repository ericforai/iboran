import React from 'react'
import { ClipboardList, LayoutDashboard, Rocket, LifeBuoy, FileText } from 'lucide-react'

const steps = [
  {
    icon: ClipboardList,
    title: '数智化诊断',
    desc: '现场调研业务痛点，梳理组织架构与流程资产，识别管理瓶颈。',
    output: '《企业数智化管理诊断报告》',
    color: 'bg-blue-500',
  },
  {
    icon: LayoutDashboard,
    title: '业务方案设计',
    desc: '基于U9 cloud蓝图，构建多组织协同架构及项目/制造一体化方案。',
    output: '《数智化蓝图方案及配置说明》',
    color: 'bg-indigo-500',
  },
  {
    icon: Rocket,
    title: '敏捷实施上线',
    desc: '容器化部署快速就绪，数据平滑迁移，关键节点模拟运行。',
    output: '《系统上线确认书》及运行环境',
    color: 'bg-red-500',
  },
  {
    icon: LifeBuoy,
    title: '持续运维优化',
    desc: '长期专家陪跑，根据业务迭代调优参数，保障系统高可靠运行。',
    output: '《周期性系统审计与调优报告》',
    color: 'bg-green-500',
  },
]

export const DeliveryMethodology = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-brand-red">交付方法论</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            我们不只是提供软件，更提供一套可落地的制造执行标准，以保障“上线即创造价值”。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
              <div className={`w-14 h-14 ${step.color} rounded-2xl flex items-center justify-center mb-6 text-white transform group-hover:rotate-6 transition-transform`}>
                <step.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 h-12 overflow-hidden">
                {step.desc}
              </p>
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-xs font-medium text-gray-400 mb-1">
                   <FileText className="w-3 h-3" /> 关键产出物
                </div>
                <div className="text-sm font-bold text-blue-600">{step.output}</div>
              </div>
              <div className="absolute -top-4 -right-4 w-10 h-10 bg-white border-4 border-gray-50 rounded-full flex items-center justify-center font-bold text-gray-200">
                0{idx + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
