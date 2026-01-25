import { Database, Network, LineChart, ShieldCheck, Cpu, Users } from 'lucide-react'

const solutions = [
  {
    icon: Database,
    title: "品牌运营中台",
    desc: "构建统一的品牌资产管理中心，实现对品牌、店铺、商品、授权等核心数据的标准化管理。"
  },
  {
    icon: Network,
    title: "各渠道数据整合",
    desc: "自动抓取并清洗主流电商平台数据，打破数据孤岛，实现全网交易数据的T+1甚至实时可视。"
  },
  {
    icon: LineChart,
    title: "业财一体化平台",
    desc: "打通业务流与资金流，实现自动分账、自动对账，显著提升财务结算效率与准确性。"
  },
  {
    icon: Users,
    title: "生态协同网络",
    desc: "连接品牌方、工厂、经销商三方，实现订单、库存、物流等信息的实时共享与协同。"
  },
  {
    icon: Cpu,
    title: "智能风控体系",
    desc: "基于大数据的品牌授权风控模型，实时监控异常交易与违规行为，保护品牌资产。"
  },
  {
    icon: ShieldCheck,
    title: "PaaS化架构",
    desc: "采用泊冉PaaS底层，支持业务的灵活配置与快速扩展，适应南极电商多变的业务形态。"
  }
]

export default function Solution() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">解决方案</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              基于泊冉数智化底座的<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">一体化架构</span>
            </h2>
            <p className="text-slate-600 text-lg">
              针对南极电商的业务特性，我们构建了“1+N”的数字化架构体系，以数据中台为核心，赋能 N 个业务场景。
            </p>
          </div>
          <div className="flex-shrink-0">
             <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
               查看架构图
               <Network className="w-5 h-5 text-blue-400" />
             </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((item, index) => (
            <div key={index} className="group p-8 rounded-2xl bg-white border border-slate-100 hover:border-blue-100 hover:shadow-[0_10px_40px_-10px_rgba(37,99,235,0.1)] transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-blue-50 group-hover:bg-blue-600 flex items-center justify-center mb-6 transition-colors duration-300">
                <item.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
