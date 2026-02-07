import { Link, CheckCircle, Smartphone, CreditCard, PieChart } from 'lucide-react'

const features = [
  {
    icon: Link,
    title: '端到端业财集成',
    description: '连接商旅平台（携程、同程等）与 ERP 系统，打通申请、预定、报销、核算全流程。',
    metric: '10+ 异构系统对接'
  },
  {
    icon: CheckCircle,
    title: '智能审核引擎',
    description: '利用 OCR 识别、AI 稽核规则库，实现发票查验、查重及业务规则的自动化校验。',
    metric: '稽核覆盖率 近100%'
  },
  {
    icon: CreditCard,
    title: '银企互联自动结算',
    description: '直连主流银行通道，审批通过即触发支付指令，实现资金支付的端到端无人值守。',
    metric: '支付无干预率 近100%'
  },
  {
    icon: Smartphone,
    title: '全流程移动报账',
    description: '支持钉钉、企业微信、移动端 APP 报账，员工一键摄票，系统自动填表，体验无感。',
    metric: '效率提升 400%'
  },
  {
    icon: PieChart,
    title: '多维经营决策分析',
    description: '基于费用构成、部门预算、项目利润等维度实时分析，助力企业精益成本管理。',
    metric: '实时可视 360°'
  }
]

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2329] mb-4">
              核心数智化能力
            </h2>
            <p className="text-slate-600 text-lg">
              依托 YonBIP/YonSuite，实现差旅费控与财务共享的一体化闭环管理
            </p>
          </div>
          <div className="w-24 h-1 bg-[#0052D9] hidden md:block" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl border border-slate-100 bg-white hover:border-blue-100 hover:shadow-xl hover:shadow-blue-50/50 transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-[#0052D9]" />
                </div>
                <div className="h-px flex-1 bg-slate-100" />
                <span className="text-[#0052D9] font-bold text-sm bg-blue-50 px-3 py-1 rounded-full">
                  {feature.metric}
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#1F2329] mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
