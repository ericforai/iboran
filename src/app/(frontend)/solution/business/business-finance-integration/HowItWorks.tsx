import { ArrowRight, Database, FastForward, GitBranch, Terminal } from 'lucide-react'

const steps = [
  {
    icon: Terminal,
    title: '业务事项全量采集',
    desc: '从前端销售、采购、仓储、人力等各类业务系统中，实时通过 API 或消息总线采集原始业务事项数据。',
  },
  {
    icon: GitBranch,
    title: '事项核算中台处理',
    desc: '基于行业预设核算规则，将会计事务自动匹配并分发至相应的核算账簿（财务准则/管理口径）。',
  },
  {
    icon: Database,
    title: '业财数据统一中台',
    desc: '形成精细化、多维度的业财大数据底座，支持实时分录查询与全链条追溯联查。',
  },
  {
    icon: FastForward,
    title: '智能驱动价值展现',
    desc: '通过智能月结实现快速关账，通过管理会计引擎实现实时经营监控与决策分析。',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 bg-[#001529] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          解耦、连接、驱动：<span className="text-blue-400">事项法</span>工作原理
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-20">
          通过将会计数据与业务行为解耦，实现实时捕获、精准计算、动态反馈的闭环管理体系。
        </p>

        <div className="relative">
          {/* Connector line (Desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-0 right-0 h-0.5 bg-slate-800 z-0" />
          
          <div className="grid lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-slate-900 border-2 border-slate-800 flex items-center justify-center mb-6 relative group">
                  <div className="absolute inset-0 rounded-full border border-blue-500/30 scale-110 group-hover:scale-125 group-hover:border-blue-500 transition-all" />
                  <step.icon className="text-blue-400 w-10 h-10" />
                  
                  {/* Step number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#E60012] flex items-center justify-center text-sm font-bold shadow-lg shadow-red-900/40">
                    {idx + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-[240px]">
                  {step.desc}
                </p>
                {idx < steps.length - 1 && (
                   <div className="lg:hidden mt-8 text-blue-500/50">
                      <ArrowRight />
                   </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
