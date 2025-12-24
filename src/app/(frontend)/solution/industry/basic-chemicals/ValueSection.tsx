import { Users, Briefcase, TrendingUp, Shield } from 'lucide-react'

const valueMetrics = [
  {
    icon: TrendingUp,
    value: '5%',
    label: '非计划停机降低',
    description: '通过PHM预测性维护与设备剩余寿命预测，有效减少意外停机，显著提升设备OEE',
  },
  {
    icon: Briefcase,
    value: '4%',
    label: '维保费用降低',
    description: '从事后维修转向状态维保，通过AIoT实时监控设备健康度，大幅节省过度维保支出',
  },
  {
    icon: Shield,
    value: '端到端',
    label: '全流程安全闭环',
    description: '安环风险“一图感知”，作业票智能审核。实现从风险识别到整改销项的HSE全场景管控',
  },
  {
    icon: Users,
    value: '24h',
    label: '客户服务能力',
    description: '自助式下单与全生命周期结算协同。提升客户粘性，实现业务流程自动化与业财一体化',
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
            行业价值
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            从客户、业务、供应链、管理四个维度全面提升企业价值
          </p>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valueMetrics.map((metric, idx) => (
            <div 
              key={idx}
              className="text-center p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <metric.icon className="w-8 h-8 text-[#0052D9]" />
              </div>
              <div className="text-3xl font-bold text-[#E60012] mb-2">
                {metric.value}
              </div>
              <div className="text-lg font-semibold text-[#1F2329] mb-3">
                {metric.label}
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
