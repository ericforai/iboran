'use client'

import { Layers, MousePointer2, Smartphone, Share2, BarChart3, Bot, Globe } from 'lucide-react'

const mainCapabilities = [
  {
    title: '可视化建模引擎',
    desc: '采用 BPMN 2.0 国际标准，拖拽式流程设计，支持串行、并行、动态会签、子流程等复杂业务规则。',
    icon: <MousePointer2 className="text-blue-500" />
  },
  {
    title: '智能任务中心',
    desc: '统一的待办/已办门户，支持任务催办、转办、委托，集成 AI 技术实现文档自动识别与智能审批建议。',
    icon: <Bot className="text-blue-500" />
  },
  {
    title: '低代码表单引擎',
    desc: '所见即所得的表单构建器，支持 40+ 种业务组件，具备强大的动态控制与脚本扩展能力。',
    icon: <Layers className="text-blue-500" />
  },
  {
    title: '全方位移动办公',
    desc: '原生支持移动端审批，与企业微信、钉钉、飞书无缝对接，让业务在指尖流转不间断。',
    icon: <Smartphone className="text-blue-500" />
  },
  {
    title: '连接器（Connector）',
    desc: '预置 SAP、用友、金蝶、Salesforce 等主流 ERP/CRM 适配器，支持 RESTFUL、WebService 多种协议集成。',
    icon: <Share2 className="text-blue-500" />
  },
  {
    title: '流程效能分析 (BPI)',
    desc: '基于大数据的流程运行深度扫描，自动识别审批瓶颈、耗时节点，为管理优化提供客观数据支撑。',
    icon: <BarChart3 className="text-blue-500" />
  }
]

export default function Capabilities() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 leading-tight">
              不仅是工具，更是<br/>流程持续优化的数字化底座
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              泊冉 BPM 平台通过强大的核心组件，帮助企业攻克“流程标准不一、执行无迹可寻、跨系统断层”三大难题。
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {mainCapabilities.map((item, idx) => (
                <div key={idx} className="group">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <div className="group-hover:text-white">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full lg:max-w-md relative">
            <div className="bg-slate-900 rounded-3xl p-1 shadow-2xl relative z-10 overflow-hidden">
              {/* Fake UI Header */}
              <div className="bg-slate-800 p-4 border-b border-white/10 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                </div>
                <div className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">System Dashboard</div>
              </div>

              {/* Fake UI Content */}
              <div className="p-6 space-y-6">
                <div className="space-y-2">
                  <div className="text-xs text-blue-400 font-bold">ACTIVE PROCESSES</div>
                  <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full w-2/3 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800/50 p-4 rounded-xl border border-white/5">
                    <div className="text-[10px] text-slate-500 mb-1">DONE</div>
                    <div className="text-xl font-bold text-white">8,429</div>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-xl border border-white/5">
                    <div className="text-[10px] text-slate-500 mb-1">IDLE</div>
                    <div className="text-xl font-bold text-white">1.2%</div>
                  </div>
                </div>

                {/* Connection Nodes Animation */}
                <div className="relative py-10 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center animate-pulse">
                    <Globe className="text-blue-400" size={32} />
                  </div>
                  <div className="absolute top-0 left-0 w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[10px] text-slate-500">SAP</div>
                  <div className="absolute top-0 right-0 w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[10px] text-slate-500">NC</div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[10px] text-slate-500">WX</div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[10px] text-slate-500">Lark</div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[10px] text-slate-500 border-b border-white/5 pb-2">
                    <span>Performance Health</span>
                    <span className="text-green-400">OPTIMAL</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-slate-500 border-b border-white/5 pb-2">
                    <span>Avg. Response Time</span>
                    <span className="text-white">124ms</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decorative Rings */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#E60012]/5 rounded-full blur-3xl"></div>
          </div>

        </div>
      </div>
    </section>
  )
}
