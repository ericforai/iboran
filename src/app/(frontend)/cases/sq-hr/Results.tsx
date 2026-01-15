import { TrendingUp, Award, Users } from 'lucide-react'

const results = [
  {
    icon: TrendingUp,
    value: '85%',
    label: '流程标准化率',
    description: '核心业务流程实现数字化管理'
  },
  {
    icon: Award,
    value: '40%',
    label: '服务质量提升',
    description: '客户满意度显著改善'
  },
  {
    icon: Users,
    value: '60%',
    label: '人才管理效率',
    description: 'HR工作效率大幅提升'
  }
]

export default function Results() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0052D9]/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#E60012]/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
            <span className="text-green-400">●</span>
            <span>项目成果</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">项目价值</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">数字化转型带来的可量化收益</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {results.map((result, index) => {
            const Icon = result.icon
            return (
              <div
                key={index}
                className="group text-center p-10 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#0052D9]/50 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0052D9]/20 to-blue-500/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-[#0052D9]" />
                </div>
                <div className="text-5xl font-bold text-white mb-3 group-hover:text-[#0052D9] transition-colors duration-300">
                  {result.value}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{result.label}</h3>
                <p className="text-slate-400 text-sm">{result.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
