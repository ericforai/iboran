import { ShieldX, Network, TrendingDown } from 'lucide-react'

export default function Challenge() {
  const challenges = [
    {
      icon: ShieldX,
      title: '强合规压力',
      description: '需满足 GSP/GMP 等严苛的行业规范，人工管理批次与有效期极易出错，合规审计风险较高。',
    },
    {
      icon: Network,
      title: '供应链全程追溯难',
      description: '医药产品涉及复杂的批次合并、效期预警与温度追溯，现有系统难以实现从原料端到患者端的端到端追溯。',
    },
    {
      icon: TrendingDown,
      title: '多渠道营销管控难',
      description: '销售网络覆盖广、层级多，返利核算、渠道库存与销售实绩难以实时对齐，影响市场策略的快速调整。',
    },
  ]

  return (
    <section className="py-16 sm:py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <header className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-slate-900">面临挑战</h2>
          <p className="text-base sm:text-lg text-slate-600">转型前的核心痛点与业务瓶颈</p>
        </header>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon
            return (
              <div
                key={index}
                className="p-6 sm:p-8 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-red-600" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-lg mb-3 text-slate-900">{challenge.title}</h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{challenge.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
