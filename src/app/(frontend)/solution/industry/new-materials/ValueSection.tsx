import { Clock, FileText, AlertTriangle, Wallet } from 'lucide-react'

const metrics = [
  {
    icon: Clock,
    value: '2个月',
    label: '快速上线',
    description: '借助行业经验模板，快速完成项目实施',
    color: 'text-[#E60012]',
    bgColor: 'bg-red-50',
  },
  {
    icon: FileText,
    value: '78份',
    label: 'SOP建立',
    description: '协助企业核心部门建立规范业务流程',
    color: 'text-[#0052D9]',
    bgColor: 'bg-blue-50',
  },
  {
    icon: AlertTriangle,
    value: '43条',
    label: '预警机制',
    description: '系统管控预警，提升风险防控能力',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
  },
  {
    icon: Wallet,
    value: '~百万',
    label: '节省费用',
    description: '省去IPO机构辅导费用，降低上市成本',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
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
            新材料行业方案价值
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6" />
          <p className="text-slate-600 max-w-2xl mx-auto">
            基于东岛新能源、月星新材料等标杆客户实践验证的可量化业务价值
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
        <div className="mt-16 bg-gradient-to-r from-emerald-600 to-emerald-800 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              用友U9 cloud：新材料行业数字化转型理想选择
            </h3>
            <p className="text-emerald-100 leading-relaxed">
              依托用友在制造业20余年深耕积累，U9 cloud已成功服务东岛新能源、月星新材料等新材料领域标杆企业，
              提供从IPO合规到精益制造的全流程数字化解决方案，助力新材料企业加速上市进程。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
