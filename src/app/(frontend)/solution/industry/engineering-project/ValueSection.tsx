import { Zap, Clock, ShieldCheck, TrendingUp } from 'lucide-react'

const metrics = [
  {
    icon: Clock,
    value: '50%',
    label: '结算效率提升',
    description: '自动归集料工费，显著缩短竣工结算与转固周期。',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: ShieldCheck,
    value: '近100%',
    label: '过程追溯能力',
    description: '甲方、监理、施工方信息透明共享，权责利清晰明确。',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    icon: TrendingUp,
    value: 'Zero',
    label: '无效成本支出',
    description: '通过动态预算与严谨的项目前期审核，杜绝重复与无效支出。',
    color: 'text-[#E60012]',
    bgColor: 'bg-red-50',
  },
  {
    icon: Zap,
    value: 'Real-time',
    label: '成本实时管控',
    description: '从“事后管理”转向“实时监控”，风险预警即时触达。',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
  },
]

export default function ValueSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-[#0052D9] font-semibold tracking-wider uppercase">
            Business Value
          </span>
          <h2 className="text-3xl font-bold text-[#1F2329] mt-2 mb-4">
            业主方数字转型的量化价值
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6" />
          <p className="text-slate-600 max-w-2xl mx-auto">
            基于信发集团、龙成钢铁、南京水务等工程建设项目管理实践的可量化业务价值
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="bg-[#F7F8FA] rounded-2xl p-8 text-center hover:shadow-lg transition-shadow border border-slate-100"
            >
              <div className={`w-16 h-16 ${metric.bgColor} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                <metric.icon size={32} className={metric.color} />
              </div>
              <div className={`text-4xl font-bold ${metric.color} mb-2`}>
                {metric.value}
              </div>
              <div className="font-bold text-[#1F2329] mb-2">
                {metric.label}
              </div>
              <p className="text-sm text-slate-500">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Value Statement */}
        <div className="mt-16 bg-gradient-to-r from-blue-700 to-indigo-700 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              用友BIP超级版：从制度驱动向数据驱动的跨越
            </h3>
            <p className="text-blue-100 leading-relaxed">
              业主方工程项目管理的核心不在于“记账”，而在于“管控”。用友BIP超级版通过深度业财融合，让工程项目的每一分钱、每一道工序、每一项进度都处于数字化的灯光之下，实现资产价值的全闭环管理。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
