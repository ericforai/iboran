import { TrendingUp, PackageSearch, Zap } from 'lucide-react'

export default function Results() {
  const results = [
    {
      icon: TrendingUp,
      metric: '200%',
      label: '效率提升',
      description: '合规风险显著降低：审计资料准备效率提升 200%，人为错误导致的批号管理事故降至零。',
    },
    {
      icon: PackageSearch,
      metric: '50%',
      label: '效率提升',
      description: '物流周转优化：仓储拣货效率提升 50%，平均库龄降低 25%，显著减少了效期损耗费用。',
    },
    {
      icon: Zap,
      metric: '99.5%',
      label: '准确率',
      description: '营销决策加速：销售数据采集由月度提至天级，渠道费用核算准确率达到 99.5%。',
    },
  ]

  return (
    <section className="py-16 sm:py-20 bg-[#0A0F1C] text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <header className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-white">项目价值</h2>
          <p className="text-base sm:text-lg text-slate-300">数字化转型带来的可量化收益</p>
        </header>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {results.map((result, index) => {
            const Icon = result.icon
            return (
              <div
                key={index}
                className="text-center p-6 sm:p-8 border border-slate-700 rounded-xl bg-white hover:shadow-xl transition-shadow duration-200"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-blue-600" aria-hidden="true" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-1">{result.metric}</div>
                <div className="text-sm font-medium text-slate-500 mb-3">{result.label}</div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{result.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
