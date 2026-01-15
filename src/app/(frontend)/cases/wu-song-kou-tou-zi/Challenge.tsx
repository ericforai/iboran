import { AlertTriangle, Link2, FileText, TrendingDown } from 'lucide-react'

const challenges = [
  {
    icon: Link2,
    title: '数据孤岛严重',
    description: '现有系统分散、多系统集成难度大，导致数据孤岛严重，影响数据分析能力与管理决策效率，制约了国资监管要求的落地。'
  },
  {
    icon: FileText,
    title: '业财融合不足',
    description: '缺乏统一的业财融合平台，合同管理、费用管理与集团财务管理脱节，合并报表编制周期长、准确性低，难以满足监管要求。'
  },
  {
    icon: TrendingDown,
    title: '投资管理效能待提升',
    description: '在科技创新与新兴产业投资中，尚未建立覆盖投前、投中、投后的全生命周期管理体系，亟需数字化手段实现国有资产精细化管控。'
  }
]

export default function Challenge() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">
            <AlertTriangle className="w-4 h-4" />
            <span>核心痛点</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">面临挑战</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">转型前的核心痛点与业务瓶颈</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon
            return (
              <div
                key={index}
                className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-blue-600 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-amber-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{challenge.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{challenge.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
