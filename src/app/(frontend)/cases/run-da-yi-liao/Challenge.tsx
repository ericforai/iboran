import { AlertTriangle, FileText, Truck, Users } from 'lucide-react'

const challenges = [
  {
    icon: FileText,
    title: '强合规压力',
    description: '需满足 GSP/GMP 等严苛的行业规范，人工管理批次与有效期极易出错，合规审计风险较高。'
  },
  {
    icon: Truck,
    title: '供应链全程追溯难',
    description: '医药产品涉及复杂的批次合并、效期预警与温度追溯，现有系统难以实现从原料端到患者端的端到端追溯。'
  },
  {
    icon: Users,
    title: '多渠道营销管控难',
    description: '销售网络覆盖广、层级多，返利核算、渠道库存与销售实绩难以实时对齐，影响市场策略的快速调整。'
  }
]

export default function Challenge() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-[#E60012] rounded-full text-sm font-medium mb-4">
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
                className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-violet-500 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-50 to-purple-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-violet-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{challenge.title}</h3>
                <p className="text-slate-600 leading-relaxed">{challenge.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
