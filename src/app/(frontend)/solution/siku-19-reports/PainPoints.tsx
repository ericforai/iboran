import { Clock, AlertTriangle, FileSpreadsheet, ShieldOff } from 'lucide-react'

const painPoints = [
  {
    icon: Clock,
    title: '建设周期过长，短期难见效',
    desc: '若一次性同步建设所有业务模块专业系统，实施范围极大、协同跨度长，容易导致项目拖期，难以快速交付监管。'
  },
  {
    icon: FileSpreadsheet,
    title: '全口径数据基础薄弱',
    desc: '难以在短时间内形成“报得上来、口径一致、来源清晰”的高质量底层报送台账。'
  },
  {
    icon: AlertTriangle,
    title: '手工维护遇效率瓶颈',
    desc: '业务量持续增长后，纯手工台账更新慢、极易出错，维护效率大幅下降，导致报表报送不及时。'
  },
  {
    icon: ShieldOff,
    title: '过程风险预警能力缺失',
    desc: '台账管理无法实现跨系统的自动联动，对到期日、余额告警及状态流转等事前、事中阶段缺乏干预能力。'
  }
]

export default function PainPoints() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-slate-900 md:text-4xl mb-6">
            19张表体系化建设面临的挑战
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((point: any, idx: number) => (
            <div
              key={idx}
              className="group bg-white p-8 rounded-2xl border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-300 cursor-pointer"
            >
              <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-500 transition-colors">
                <point.icon className="w-7 h-7 text-[#E60012] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 break-keep tracking-tight">
                {point.title}
              </h3>
              <p className="text-slate-600 font-medium leading-relaxed">
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
