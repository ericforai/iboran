import { TrendingUp, Cpu, Clock, ShieldCheck } from 'lucide-react'

const metrics = [
  {
    icon: TrendingUp,
    value: '3万+片/月',
    label: '产能支持',
    description: 'Auto3级别12寸FAB线稳定量产',
    color: 'text-[#E60012]',
    bgColor: 'bg-red-50',
  },
  {
    icon: Cpu,
    value: '95%+',
    label: 'AI分类准确率',
    description: 'ADC自动缺陷分类精准识别',
    color: 'text-[#0052D9]',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Clock,
    value: '40%',
    label: '交付周期缩短',
    description: '模块化架构快速部署上线',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    icon: ShieldCheck,
    value: '99%以上',
    label: '国产自主可控',
    description: '核心代码自研，支持信创环境',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
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
            半导体CIM方案价值
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6" />
          <p className="text-slate-600 max-w-2xl mx-auto">
            国产12寸量产FAB线CIM专业供应商，为半导体企业提供可量化的业务价值
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
        <div className="mt-16 bg-gradient-to-r from-[#0052D9] to-blue-700 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              率先实现可同时对三个类型工厂进行智能化管理的国产工业软件项目
            </h3>
            <p className="text-blue-100 leading-relaxed">
              泊冉软件作为国产CIM解决方案的代表企业，已成功在多个头部半导体企业实现落地，
              助力中国芯片制造迈向自主可控的智能化新时代。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
