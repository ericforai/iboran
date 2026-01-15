import { PenTool, Calculator, Wrench } from 'lucide-react'

const challenges = [
  {
    icon: PenTool,
    title: '非标设计变更频繁',
    description: '客户需求多变导致 BOM 频繁调整，设计变更无法及时传递至采购与生产环节，造成呆滞料与错产返工。'
  },
  {
    icon: Calculator,
    title: '项目成本核算黑箱',
    description: '项目周期长、费用构成复杂，传统核算方式无法实时归集人工、材料及制造费用，导致项目盈亏结算滞后。'
  },
  {
    icon: Wrench,
    title: '售后运维被动响应',
    description: '设备交付后缺乏运行状态监控，售后服务依赖客户报修，缺乏预防性维护机制，备件管理混乱。'
  }
]

export default function Challenge() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase">Challenges</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-slate-900">转型前的核心痛点</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
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