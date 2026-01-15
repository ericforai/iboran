import { AlertTriangle, Clock, GitMerge, FileCheck } from 'lucide-react'

const painPoints = [
  {
    icon: Clock,
    title: '合并周期长，时效性差',
    description: '子公司众多，数据上报进度不一，人工催报效率低，导致集团合并周期动辄数周，无法及时支撑经营决策。'
  },
  {
    icon: AlertTriangle,
    title: '对账不平，数据质量堪忧',
    description: '关联交易关联方核对困难，往来账款对不上，导致合并抵销困难，数据真实性难以验证。'
  },
  {
    icon: GitMerge,
    title: '抵销调整逻辑复杂',
    description: '复杂的交叉持股、非标抵销、外币折算审计底稿编制全靠手工，容易出现计算错误，且审阅极其困难。'
  },
  {
    icon: FileCheck,
    title: '多头报送压力大',
    description: '除了企业法定报表，还需应对管理报表、国资监管报送、多种准则下的财务披露，重复劳动严重。'
  }
]

export default function PainPoints() {
  return (
    <section className="py-24 bg-[#F7F8FA]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2329] mb-4">
            为什么大型集团合并总是挑战重重？
          </h2>
          <div className="w-16 h-1.5 bg-[#E60012] mx-auto rounded-full mb-6" />
          <p className="text-slate-600">
            随着企业全球化扩张，传统的 Excel 或简单报表系统已无法满足日益复杂的监管与管控要求。
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((point, idx) => (
            <div
              key={idx}
              className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#E60012] transition-colors">
                <point.icon className="w-7 h-7 text-[#E60012] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-[#1F2329] mb-4 group-hover:text-[#0052D9] transition-colors">
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
