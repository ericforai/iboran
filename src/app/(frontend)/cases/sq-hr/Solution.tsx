import { Cloud, ShieldCheck, GraduationCap, ArrowRight } from 'lucide-react'

const solutions = [
  {
    icon: Cloud,
    title: 'HR SaaS 平台',
    description: '构建云原生人力资源管理系统，实现员工全生命周期数字化管理。',
    features: ['组织架构管理', '招聘流程自动化', '考勤薪酬一体化']
  },
  {
    icon: ShieldCheck,
    title: '服务质量管控',
    description: '建立标准化服务体系，通过数字化手段监控和提升服务质量。',
    features: ['服务标准制定', '质量监控体系', '客户满意度跟踪']
  },
  {
    icon: GraduationCap,
    title: '人才发展系统',
    description: '打造人才培养与发展平台，助力员工成长与组织能力提升。',
    features: ['培训课程管理', '能力评估体系', '职业发展路径']
  }
]

export default function Solution() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-[#0052D9] rounded-full text-sm font-medium mb-4">
            <span>解决方案</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">数字化解决方案</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">基于用友 YonBIP + 泊冉实施服务的一体化架构</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 hover:border-[#0052D9] hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0052D9]/10 to-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-[#0052D9]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{solution.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{solution.description}</p>

                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0052D9]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center gap-2 text-[#0052D9] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>了解更多</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
