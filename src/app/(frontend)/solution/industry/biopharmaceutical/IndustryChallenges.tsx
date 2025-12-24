import { AlertTriangle, TrendingUp, Layers, FileWarning } from 'lucide-react'

const challenges = [
  {
    icon: Layers,
    title: "信息孤岛与系统断层",
    description: "企业内部存在大量异构系统（SAP、Veeva、CRM等），数据无法互通，形成业务断点，导致管理效率低下，决策缺乏数据支撑。",
  },
  {
    icon: FileWarning,
    title: "合规风险与审计压力",
    description: "IPO上市及全球化拓展面临严苛的GMP、GSP、CSV验证要求，缺乏系统化的合规管理工具，人工应对审计风险高、成本大。",
  },
  {
    icon: AlertTriangle,
    title: "研发转产协同困难",
    description: "CDMO模式下，研发到生产的工艺转移复杂，项目管理与生产执行脱节，难以保证批次质量的一致性和可追溯性。",
  },
  {
    icon: TrendingUp,
    title: "成本管控与利润黑洞",
    description: "营销费用高企、研发投入不可视、生产损耗难量化，缺乏业财一体化的精细化核算能力，难以有效降本增效。",
  }
]

export function IndustryChallenges() {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
            生物医药企业面临的<span className="text-blue-600">核心挑战</span>
          </h2>
          <p className="text-lg text-slate-600">
            在创新药研发周期长、合规监管严、市场竞争激烈的背景下，药企亟需突破管理瓶颈
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {challenges.map((challenge, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <challenge.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {challenge.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
