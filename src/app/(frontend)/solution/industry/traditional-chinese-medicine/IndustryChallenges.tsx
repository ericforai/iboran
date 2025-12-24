import { AlertTriangle, TrendingUp, Scale, FileSearch } from 'lucide-react'

const challenges = [
  {
    icon: Scale,
    title: 'GMP/GSP 合规严苛',
    description: '新GAP“六统一”及药品追溯法规持续升级，人工管理难以满足从种植基地、饮片加工到制剂生产的全链条合规要求。',
  },
  {
    icon: FileSearch,
    title: '质量追溯断层',
    description: '中药材来源复杂，产地、批次、检验及“趁鲜切制”过程数据分散，难以实现从种子种苗到成品药的全生命周期双向追溯。',
  },
  {
    icon: TrendingUp,
    title: '成本波动管控难',
    description: '中药材价格受季节、产地影响波动大，得率/收率不稳定，导致实际成本核算困难，难以精准支撑定价与利润分析。',
  },
  {
    icon: AlertTriangle,
    title: '产销协同效率低',
    description: '市场需求变化快，但传统生产计划模式响应滞后，库存积压与缺货并存，缺乏基于数据的敏捷供应链协同能力。',
  },
]

export function IndustryChallenges() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            中药企业由于行业特殊性<br />
            <span className="text-red-600">数字化转型面临四大挑战</span>
          </h2>
          <p className="text-lg text-slate-600">
            面对严格的监管政策与激烈的市场竞争，传统中药企业亟需解决合规、追溯、成本与协同难题。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {challenges.map((item, index) => (
            <div key={index} className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
