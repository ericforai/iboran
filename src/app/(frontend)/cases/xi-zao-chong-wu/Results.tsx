import { TrendingUp, Target, ShieldCheck } from 'lucide-react'

const results = [
  {
    icon: TrendingUp,
    value: '业财融合',
    label: '运营效率提升',
    description: '通过ERP与OMS深度融合，实现订单、库存、财务一体化管理，推动精细化运营与敏捷供应链响应。'
  },
  {
    icon: Target,
    value: '全渠道协同',
    label: '客户体验升级',
    description: '打通零售、批发、宠物服务、摄影扩印等多元业务场景，实现全渠道订单统一管控与跨渠道协同。'
  },
  {
    icon: ShieldCheck,
    value: '合规管控',
    label: '风险有效降低',
    description: '强化饲料添加剂及预包装食品销售的系统化管控，降低合规风险，支撑高监管要求业务规范化运营。'
  }
]

export default function Results() {
  return (
    <section className="py-24 bg-gradient-to-br from-orange-600 via-orange-700 to-amber-700 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-400/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
            <span className="text-amber-200">●</span>
            <span>项目成果</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">项目价值</h2>
          <p className="text-orange-100 text-lg max-w-2xl mx-auto">数字化转型带来的可量化收益</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {results.map((result, index) => {
            const Icon = result.icon
            return (
              <div
                key={index}
                className="group text-center p-10 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/20 to-amber-200/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-amber-200" />
                </div>
                <div className="text-4xl font-bold text-white mb-3 group-hover:text-amber-200 transition-colors duration-300">
                  {result.value}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{result.label}</h3>
                <p className="text-orange-100 text-sm">{result.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
