import { AlertTriangle, Clock, Settings, BrainCircuit } from 'lucide-react'

const metrics = [
  {
    icon: AlertTriangle,
    value: '37次',
    label: '减少非计划停产',
    description: 'IOT+智能运维大幅降低设备故障导致的生产中断',
    color: 'text-[#E60012]',
    bgColor: 'bg-red-50',
  },
  {
    icon: Clock,
    value: '465小时',
    label: '减少故障影响时长',
    description: '预测性维护减少设备故障对生产的影响',
    color: 'text-[#0052D9]',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Settings,
    value: '5码合一',
    label: '设备编码标准化',
    description: '物资、设备、功能位置、分类、资产编码统一',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
  },
  {
    icon: BrainCircuit,
    value: 'IOT+AI',
    label: '智能运维平台',
    description: '预测性维护、AI故障诊断、智能工单触发',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
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
            能源行业方案价值
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6" />
          <p className="text-slate-600 max-w-2xl mx-auto">
            基于平煤、榆林能源、乌海能源等标杆客户实践验证的可量化业务价值
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
        <div className="mt-16 bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              用友BIP超级版：能源企业数智化转型理想选择
            </h3>
            <p className="text-amber-100 leading-relaxed">
              依托用友在能源行业的深厚积累，BIP超级版已成功服务平煤、榆林能源、乌海能源、潞宝焦化等能源领域标杆企业，
              提供从智能生产到精细管控的全流程数字化解决方案，助力能源企业实现高质量发展。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
