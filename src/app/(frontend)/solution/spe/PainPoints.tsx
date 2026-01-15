import { Target, LayoutGrid, ShieldAlert, RotateCw, BarChart3 } from 'lucide-react'

const painPoints = [
  {
    icon: Target,
    title: '定不准',
    description: '战略目标与业务计划脱节，指标分解缺乏科学依据，难以层层穿透落地。'
  },
  {
    icon: LayoutGrid,
    title: '编不顺',
    description: '多部门协同困难，数据采集周期长，手工编制效率低，版本版本管理混乱。'
  },
  {
    icon: ShieldAlert,
    title: '控不住',
    description: '预算控制滞后，缺乏事中动态预警与在线自动刚性控制，财务管控流于形式。'
  },
  {
    icon: RotateCw,
    title: '滚不动',
    description: '无法快速响应市场变化，滚动预测模型单一，业务计划与财务结果难以合一。'
  },
  {
    icon: BarChart3,
    title: '看不远',
    description: '经营分析工作流转效率低，难以透过财务数据预见业务风险，决策缺乏时效。'
  }
]

export default function PainPoints() {
  return (
    <section className="py-24 bg-[#F7F8FA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2329] mb-4">
            行业痛点与管理困境
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {painPoints.map((point, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="w-14 h-14 bg-red-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#E60012] transition-colors">
                <point.icon className="w-7 h-7 text-[#E60012] group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1F2329] mb-3">
                {point.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
