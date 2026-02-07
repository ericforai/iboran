import React from 'react'
import { ClipboardList, Layout, Zap, ShieldCheck } from 'lucide-react'

export const DeliveryMethodology = () => {
  const steps = [
    {
      icon: ClipboardList,
      title: '业务诊断与蓝图设计',
      desc: '深入梳理企业采购制度，识别“集中”与“分散”边界，定义供应商分级模型。',
      deliverables: ['《采购业务调研报告》', '《数字化采购规划蓝图》']
    },
    {
      icon: Layout,
      title: '流程配置与系统建模',
      desc: '基于多组织引擎，配置寻源、请购、合同、支付流程，构建供应商档案门户。',
      deliverables: ['《系统功能配置说明书》', '《业务模块原型演示》']
    },
    {
      icon: Zap,
      title: '集成联调与上线准备',
      desc: '对接 ERP（用友/SAP）、财务系统及移动端（钉钉/飞书等），进行全流程压力测试。',
      deliverables: ['《接口集成技术文档》', '《用户操作手册/视频》']
    },
    {
      icon: ShieldCheck,
      title: '运维支持与持续优化',
      desc: '提供驻场/远程上线保障，根据运行数据进行报表调优，以保障持续合规与效率。',
      deliverables: ['《上线运维保障方案》', '《二期优化路线图》']
    }
  ]

  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-4">交付方法论</h2>
          <p className="text-slate-400">不仅仅是安装一套软件，更是采购治理能力的落地过程。</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full border-t border-dashed border-slate-700 -translate-x-4 z-0"></div>
              )}
              <div className="relative z-10 bg-slate-800 p-8 rounded-2xl border border-slate-700 group-hover:border-blue-500 transition-colors h-full">
                <div className="w-16 h-16 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <step.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">0{index + 1}. {step.title}</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">{step.desc}</p>
                <div className="pt-6 border-t border-slate-700">
                  <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-3">交付产出物：</div>
                  <ul className="space-y-2">
                    {step.deliverables.map((item, i) => (
                      <li key={i} className="text-xs text-slate-300 flex items-center gap-2">
                        <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
