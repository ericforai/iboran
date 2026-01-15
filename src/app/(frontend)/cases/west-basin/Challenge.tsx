import { AlertCircle, ZapOff, FileWarning, Wallet } from 'lucide-react'

export default function Challenge() {
  const challenges = [
    {
      icon: ZapOff,
      title: "系统孤岛与协同难题",
      description: "随着业务规模扩张，供应链管理、物流配送与进出口贸易等多业务板块间缺乏有效集成，导致数据孤岛严重，业务协同受阻。"
    },
    {
      icon: FileWarning,
      title: "财务管理效率瓶颈",
      description: "原有付款流程自动化程度低，资金结算依赖人工，不仅效率低下且易出错。同时，集团合并报表编制复杂耗时，难以支撑快速决策。"
    },
    {
      icon: Wallet,
      title: "供应链金融缺失",
      description: "面对庞大的资金周转需求，缺乏有效的数字化金融工具支持，融易联等供应链金融应用尚未落地，企业融资效率亟待提升。"
    }
  ]

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">面临挑战</h2>
          <p className="text-slate-600 text-lg">
            转型前的核心痛点与业务瓶颈，制约了集团化运营的效率与质量
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
              <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-500 transition-colors duration-300">
                <item.icon className="w-7 h-7 text-red-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
