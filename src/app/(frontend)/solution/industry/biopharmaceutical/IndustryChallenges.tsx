import { Microscope, TrendingUp, Layers, FileWarning } from 'lucide-react'

const challenges = [
  {
    icon: Layers,
    title: "业务断点与数据孤岛",
    description: "业务到财务、研发到生产存在明显断点。线上线下双轨运行，导致数据完整性与准确性不足，严重制约决策效能。",
  },
  {
    icon: FileWarning,
    title: "多维合规与监管压力",
    description: "严守GMP/GSP规范是生存红线。质量管理与业务流程脱节，CSV验证成本高昂，亟需全过程自动防错与质量追溯。",
  },
  {
    icon: TrendingUp,
    title: "集采常态化与精益成本",
    description: "创仿药调价压力剧增，管理精度较低导致成本“算不准、算不全”。需通过精细化核算支撑科学定价与供应链提效。",
  },
  {
    icon: Microscope,
    title: "研产协同与智能化瓶颈",
    description: "从分子发现到商业化生产转换复杂，智能化程度低，难以快速利用AI模型辅助研发提效、质量预警与经营风险控制。",
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
          {challenges.map((challenge: any, index: number) => (
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
