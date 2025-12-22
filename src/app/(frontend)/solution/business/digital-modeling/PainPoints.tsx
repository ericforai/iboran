import { AlertTriangle, Database, LayoutGrid, Zap } from 'lucide-react'

const painPoints = [
  {
    icon: LayoutGrid,
    title: '管理复杂度高',
    description: '多级组织、多元业务形态并存，传统架构难以支持复杂架构的灵活映射与弹性扩展。',
  },
  {
    icon: Database,
    title: '数据孤岛严重',
    description: '各业务系统数据标准不一，核心主数据分散，缺乏统一治理，导致跨部门协同效率低下。',
  },
  {
    icon: Zap,
    title: '交付周期漫长',
    description: '平台推广部署涉及大量个性化配置，缺乏标准化建模工具，导致上线周期长、实施成本高。',
  },
  {
    icon: AlertTriangle,
    title: '创新支撑不足',
    description: '业务逻辑刚性，难以快速响应市场变化，业务驱动的个性化配置（低代码/无代码）能力薄弱。',
  },
]

export default function PainPoints() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">
            行业痛点与挑战
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((point, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-xl border border-slate-100 bg-white hover:shadow-xl hover:border-red-100 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#E60012] transition-colors duration-300">
                <point.icon className="w-6 h-6 text-[#E60012] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#1F2329] mb-4">
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
