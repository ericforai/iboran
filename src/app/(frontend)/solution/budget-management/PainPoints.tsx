import { AlertTriangle, Clock, Link2Off, BarChart2 } from 'lucide-react'

const painPoints = [
  {
    icon: Clock,
    title: '编制效率降低',
    description: '依赖 Excel 线下汇总，多版本难以协同，数据收集与合并耗费数周时间，错漏频发。'
  },
  {
    icon: Link2Off,
    title: '业财数据脱节',
    description: '预算设定与业务执行割裂，缺乏实时关联，导致预算成为“纸上谈兵”，难以形成有效管控。'
  },
  {
    icon: AlertTriangle,
    title: '管控力度薄弱',
    description: '单靠财务人工审核，超支风险难以及时预警，事后核算发现问题时通常已造成资源浪费。'
  },
  {
    icon: BarChart2,
    title: '决策分析滞后',
    description: '无法快速进行多维度预测与模拟，面对市场波动反应迟缓，缺乏支撑战略调整的数据依据。'
  }
]

export default function PainPoints() {
  return (
    <section className="py-24 bg-[#F7F8FA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">
            传统预算管理的四大痛点
          </h2>
          <p className="text-slate-500">
            数字化转型背景下，企业需要从“被动记账”转向“主动规划”
          </p>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mt-6" />
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
