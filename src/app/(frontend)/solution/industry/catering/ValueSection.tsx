import { TrendingUp, Users, Target, Clock } from 'lucide-react'

const metrics = [
  {
    icon: Clock,
    value: '70%+',
    label: '财务结算效率提升',
    description: '通过业财一体自动化对账，极大减少人工干预。'
  },
  {
    icon: Target,
    value: '99.9%',
    label: '资金对账准确率',
    description: '多渠道流水智能核对，防范漏单与账务风险。'
  },
  {
    icon: TrendingUp,
    value: '5-8%',
    label: '食材损耗率降低',
    description: '精细化日成本管控，及时发现并纠正异常损耗。'
  },
  {
    icon: Users,
    value: '25%',
    label: '招商转化率提升',
    description: '线索全生命周期跟进，提升加盟商满意度。'
  }
]

export default function ValueSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-[#0052D9] font-semibold tracking-wider uppercase">
            Value & ROI
          </span>
          <h2 className="text-3xl font-bold text-[#1F2329] mt-2 mb-4">
            为餐饮企业创造实质性的增长价值
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full" />
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="text-center p-8 border border-slate-100 rounded-2xl hover:border-blue-200 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-blue-50 text-[#0052D9] rounded-full flex items-center justify-center mx-auto mb-6">
                <metric.icon className="w-6 h-6" />
              </div>
              <div className="text-4xl font-bold text-[#1F2329] mb-2">{metric.value}</div>
              <div className="text-lg font-bold text-[#0052D9] mb-3">{metric.label}</div>
              <p className="text-sm text-slate-500 leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 p-8 bg-slate-900 rounded-3xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white max-w-xl text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4">准备好开启餐饮企业的数智化转型了吗？</h3>
              <p className="text-slate-400">
                用友BIP超级版餐饮行业专家团队，为您提供1对1的架构诊断与建设路径规划咨询。
              </p>
            </div>
            <button className="px-8 py-4 bg-[#E60012] text-white font-bold rounded-md hover:bg-red-700 transition-all shrink-0">
               获取定制化解决方案
            </button>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px]" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-red-600/10 rounded-full blur-[100px]" />
        </div>
      </div>
    </section>
  )
}
