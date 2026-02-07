import { Shield, TrendingUp, Zap, Search } from 'lucide-react'

const values = [
  {
    icon: Shield,
    title: '合规低风险',
    description: '全面满足新GAP、GMP、GSP监管要求，内置合规控制点与预警机制。',
  },
  {
    icon: TrendingUp,
    title: '降本增效',
    description: '通过精细化成本管控与产销协同，降低库存资金占用，提升生产效率。',
  },
  {
    icon: Search,
    title: '全程可追溯',
    description: '建立从种子种苗到成品药的全生命周期质量追溯体系，保障用药安全。',
  },
  {
    icon: Zap,
    title: '创新加速',
    description: '数字化研发管理加速新药上市进程，数据驱动助力营销模式创新。',
  },
]

export function ValueSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            数智化创造可量化的核心价值
          </h2>
          <p className="text-lg text-slate-600">
            不仅是系统的升级，更是管理模式与经营效益的全面提升
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((item, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 mx-auto bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
