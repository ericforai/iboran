import { ArrowRight, Database, Network, Cpu } from 'lucide-react'

export default function Solution() {
    const solutions = [
        {
            icon: Database,
            title: "一站式业财一体化平台",
            desc: "构建统一的数据中台，集成 ERP、MES、SRM 及财务模块，实现业务单据自动转化为财务凭证，确保账实相符。"
        },
        {
            icon: Network,
            title: "透明化供应链协同",
            desc: "建立供应商门户与交期监控看板，实现订单、发货、对账的全流程在线化，提升外部响应效率与计划准确率。"
        },
        {
            icon: Cpu,
            title: "智能化车间管理",
            desc: "通过条码化与物联网手段，实时采集生产实绩与工艺数据，实现精细化成本核算与质量追溯闭环。"
        }
    ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
                 <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase mb-3 block">SOLUTION</span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                    基于泊冉数智化底座的<br/>一体化架构
                </h2>
                <p className="text-lg text-slate-600">
                    针对企业痛点，我们提供了从底层数据治理到上层应用协同的全栈式解决方案，重塑企业数字神经系统。
                </p>
            </div>
             <div className="hidden lg:block bg-slate-50 rounded-2xl p-8 border border-slate-100">
                <div className="flex items-center justify-between text-sm font-medium text-slate-500">
                    <span>数据采集</span>
                    <ArrowRight className="w-4 h-4" />
                    <span>平台处理</span>
                    <ArrowRight className="w-4 h-4" />
                    <span>业务赋能</span>
                </div>
            </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((item, index) => (
                <div key={index} className="relative group">
                    <div className="absolute inset-0 bg-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
                    <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 h-full group-hover:border-blue-500/0 group-hover:bg-white transition-colors duration-300">
                        <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                            <item.icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                         <p className="text-slate-600 leading-relaxed text-sm">
                            {item.desc}
                        </p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  )
}
