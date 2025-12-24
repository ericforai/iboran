import { Microscope, TrendingUp, Layers, FileWarning } from 'lucide-react'

const challenges = [
  {
    icon: TrendingUp,
    title: "集采压力与竞争力重塑",
    description: "在集采常态化背景下，创新药与仿制药面临严峻调价压力。需通过精益管控提升中标产品供应链效能，并针对落标产品探索营销模式创新。",
  },
  {
    icon: FileWarning,
    title: "多维质量合规与监管",
    description: "深处监管核心，必须严守GMP/GSP规范。CSV（计算机化系统验证）已成刚需，需在GMP框架下实现全过程自动化防错与质量追溯。",
  },
  {
    icon: Microscope,
    title: "研产协同与转产卡点",
    description: "从分子发现到商业化生产（CDMO模式）跨度大，工艺转移复杂。研发项目进度、物料状态与生产执行常脱节，影响新药上市进程。",
  },
  {
    icon: Layers,
    title: "业财断层与IPO合规",
    description: "融资上市过程中，监管对财税合规、数据完整性、审计追踪要求极高。需打破SAP、Veeva等异构系统孤岛，实现穿透式经营洞察。",
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
