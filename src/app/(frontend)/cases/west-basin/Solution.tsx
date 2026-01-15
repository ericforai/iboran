import { Network, Landmark, PieChart, Repeat, ShieldCheck, ArrowRightLeft } from 'lucide-react'

export default function Solution() {
  const solutions = [
    {
      icon: Network,
      title: "多系统深度集成",
      desc: "基于Odoo底座，打通业务中台与外部系统，实现全链路数据互通。"
    },
    {
      icon: Landmark,
      title: "银企直联对接",
      desc: "深度对接上海银行与招商银行，实现资金流与业务流的实时同步。"
    },
    {
      icon: ArrowRightLeft, // Replaced RefreshCw (which might be what Repeat was for, or ArrowRightLeft for transaction flow)
      title: "付款自动化", // Actually using ArrowRightLeft for flow/transaction
      desc: "构建自动化付款流程，大幅减少人工干预，提升资金结算效率。"
    },
    {
      icon: PieChart,
      title: "集团合并报表",
      desc: "建立统一的财务数据标准，实现多组织架构下的快速合并报表。"
    },
    {
      icon: ShieldCheck,
      title: "供应链金融",
      desc: "落地融易联供应链金融应用，为上下游提供便捷的融资支持。"
    },
    {
      icon: Repeat, 
      title: "三流合一管控",
      desc: "最终实现资金流、物流、信息流的统一管控与闭环管理。"
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">解决方案</h2>
          <p className="text-slate-600 text-lg">基于泊冉数智化底座的一体化架构，重塑供应链管理体系</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((item, index) => (
            <div key={index} className="p-8 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 group">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <item.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
