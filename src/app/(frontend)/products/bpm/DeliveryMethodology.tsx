'use client'

import { ClipboardCheck, Layout, Rocket, LineChart, MoveRight } from 'lucide-react'

const phases = [
  {
    title: '流程业务现状诊断',
    desc: '梳理现有业务拓扑，识别跨部门协作瓶颈。',
    outputs: ['《业务流程成熟度评估报告》', '《流程优化建议书》'],
    icon: <ClipboardCheck className="text-white" />
  },
  {
    title: '模型设计与模拟',
    desc: '基于标准流程库进行可视化建模，配置审批规则。',
    outputs: ['《流程架构设计说明书》', '《数据集成接口规范》'],
    icon: <Layout className="text-white" />
  },
  {
    title: '敏捷实施与集成',
    desc: '系统环境搭建、低代码配置、ERP 系统深度集成。',
    outputs: ['《系统配置说明书》', '《用户验收测试报告》'],
    icon: <Rocket className="text-white" />
  },
  {
    title: '上线运营与效能治理',
    desc: '全员培训、流程切入生产、基于运行数据持续调优。',
    outputs: ['《运营治理月度报告》', '《流程优化模型》'],
    icon: <LineChart className="text-white" />
  }
]

export default function DeliveryMethodology() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">交付不仅仅是安装，更是管理的“转基因”</h2>
          <p className="text-slate-600">
            我们坚持“管理先行，技术落地”的交付原则，通过 4 阶段标准化路径以保障 BPM 真正服务于业务增长。
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2"></div>
          
          <div className="grid lg:grid-cols-4 gap-8">
            {phases.map((phase, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center">
                {/* Icon Circle */}
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg mb-6 ring-8 ring-white">
                  {phase.icon}
                </div>
                
                {/* Content Card */}
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm w-full text-center hover:border-blue-400 font-medium transition group">
                  <div className="text-blue-600 text-xs font-bold mb-2">PHASE 0{idx + 1}</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{phase.title}</h3>
                  <p className="text-slate-500 text-sm mb-6 leading-relaxed">{phase.desc}</p>
                  
                  <div className="pt-4 border-t border-slate-100">
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-3">核心交付物</div>
                    <ul className="space-y-2">
                      {phase.outputs.map((output, oIdx) => (
                        <li key={oIdx} className="text-xs text-slate-700 bg-slate-50 py-1.5 px-3 rounded flex items-center justify-center gap-1.5 grayscale group-hover:grayscale-0 transition">
                          <MoveRight size={10} className="text-blue-500" />
                          {output}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 p-6 bg-white border border-blue-100 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
              <ClipboardCheck size={24} />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">数字化工作坊即刻开启</p>
              <p className="text-xs text-slate-500">我们的专家团队将通过 1 天的深度访谈，为您免费出具初版流程架构建议。</p>
            </div>
          </div>
          <button className="px-6 py-2.5 bg-blue-600 text-white rounded-md text-sm font-bold hover:bg-blue-700 transition flex-shrink-0">
            申请免费流程诊断
          </button>
        </div>
      </div>
    </section>
  )
}
