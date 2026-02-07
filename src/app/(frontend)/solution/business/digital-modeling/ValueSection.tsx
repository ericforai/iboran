import { TrendingUp, Users, ShieldCheck, ChevronRight } from 'lucide-react'

const metrics = [
  {
    icon: TrendingUp,
    value: '600,000+',
    label: '单客户支持员工数 (BYD)',
    description: '支撑超大型企业全球化、多层级人力资源建模需求。',
  },
  {
    icon: Users,
    value: '14,000+',
    label: '统一底座支撑用户 (杭钢)',
    description: '构建统一数智底座，支撑集团下属 100+ 业务应用。',
  },
  {
    icon: ShieldCheck,
    value: '99%以上',
    label: '核心主数据一致性',
    description: '通过元数据驱动的主数据治理，以保障全集团数据标准统一。',
  },
]

const cases = [
  {
    company: '比亚迪 (BYD)',
    title: '全球化 HR 平台数智化建模',
    details: '覆盖全球多个地区，支持多语言、多时区合规及 60 万人规模的组织映射。',
  },
  {
    company: '杭钢集团',
    title: '统一数智化底座建设',
    details: '打破 100 多个应用间的边界，实现组织、流程与主数据的全方位建模与打通。',
  },
]

export default function ValueSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Metrics Column */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-[#1F2329] mb-8">
              数智化转型价值
            </h2>
            <div className="grid gap-8">
              {metrics.map((metric, idx) => (
                <div key={idx} className="flex gap-6 items-start p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#0052D9] flex-shrink-0">
                    <metric.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#0052D9] mb-1">{metric.value}</div>
                    <div className="text-[#1F2329] font-bold mb-2">{metric.label}</div>
                    <p className="text-slate-600 text-sm leading-relaxed">{metric.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Case Studies Column */}
          <div className="lg:w-1/2">
            <div className="bg-[#1F2329] rounded-3xl p-8 lg:p-12 text-white h-full relative overflow-hidden">
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2" />
              
              <h3 className="text-2xl font-bold mb-8 relative z-10 text-white">行业标杆案例</h3>
              
              <div className="space-y-10 relative z-10">
                {cases.map((item, idx) => (
                  <div key={idx} className="group cursor-pointer">
                    <div className="flex items-center gap-2 text-red-500 font-bold text-sm mb-3 uppercase tracking-wider">
                      <span className="w-1 h-4 bg-red-600 rounded-full" />
                      {item.company}
                    </div>
                    <h4 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{item.title}</h4>
                    <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                      {item.details}
                    </p>
                    <div className="flex items-center gap-1 text-xs font-semibold group-hover:gap-2 transition-all">
                      了解详情 <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-slate-800 flex items-center justify-between">
                <div className="text-slate-500 text-xs">
                  博览客户案例库/2025
                </div>
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#1F2329] bg-slate-700 overflow-hidden text-[10px] flex items-center justify-center">
                      Logo
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
