import { Share2, BarChart2, Zap, ArrowRight } from 'lucide-react'

const challenges = [
  {
    icon: Share2,
    title: "多渠道数据割裂",
    description: "天猫、京东、拼多多等各平台数据分散，缺乏统一视角，导致品牌运营决策难以实时精准。",
    color: "blue"
  },
  {
    icon: BarChart2,
    title: "业财核算复杂",
    description: "品牌授权模式下的结算逻辑复杂，人工对账效率低、易出错，财务数据滞后影响经营分析。",
    color: "indigo"
  },
  {
    icon: Zap,
    title: "生态协同效率低",
    description: "数千家供应商与经销商之间的信息流转依赖线下或传统方式，响应速度慢，难以支撑爆品快速返单。",
    color: "sky"
  }
]

export default function Challenge() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">面临挑战</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">痛点与难点</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-100 hover:-translate-y-1">
              <div className={`w-14 h-14 rounded-xl bg-${item.color}-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className={`w-7 h-7 text-${item.color}-600`} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {item.description}
              </p>
              <div className="flex items-center text-sm font-semibold text-slate-400 group-hover:text-blue-600 transition-colors">
                <span>深入分析</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
