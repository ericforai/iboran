import { Quote } from 'lucide-react'

const cases = [
  {
    name: "博福-益普生 (Mayoly)",
    industry: "制药企业",
    description: "作为蒙脱石散的原研厂家，面对全球业务重组，成功用YonSuite替换原有SAP等20多个异构系统，实现业财一体化与全球化管控。",
    tags: ["全球化运营", "SAP替换", "业财一体"],
    logo: "/logos/mayoly.png", // Use placeholder or text if no logo
    stats: [
      { label: "系统及接口", value: "20+ -> 1" },
      { label: "实施周期", value: "3个月" },
    ],
    quote: "我们用成功来复制成功，是最先进的数智化转型方式。YonSuite帮助我们快速完成了独立IT系统的构建与切换。"
  },
  {
    name: "行诚生物 (CoJourney)",
    industry: "基因治疗CDMO",
    description: "一站式基因治疗CDMO平台，借助YonSuite实现研发到生产的全流程管理，顺利完成CSV验证，为Pre-IPO打下坚实合规基础。",
    tags: ["CDMO", "CSV验证", "IPO合规"],
    stats: [
      { label: "合规通过率", value: "近100%" },
      { label: "项目效率", value: "+40%" },
    ],
    quote: "YonSuite不仅满足了我们在GMP/GSP方面的合规要求，更为我们研发到生产的一体化管理提供了强有力的支撑。"
  },
  {
    name: "同仁堂 (河南)",
    industry: "中药配方颗粒",
    description: "通过数智化平台实现中药配方颗粒的全流程质量追溯与精细化成本管控，打造中药现代化标杆。",
    tags: ["中药制造", "质量追溯", "成本管控"],
    stats: [
      { label: "追溯精度", value: "单瓶级" },
      { label: "成本核算", value: "实时" },
    ],
    quote: "实现了从药材种植到成品销售的全链条质量追溯，让老字号焕发了数智化的新活力。"
  }
]

export function IndustryCases() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
            行业标杆案例
          </h2>
          <p className="text-lg text-slate-600">
            见证众多生物医药企业的数智化转型成功之路
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col"
            >
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                   <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700 font-bold">
                     {item.name.charAt(0)}
                   </div>
                   <div>
                     <h3 className="font-bold text-slate-900">{item.name}</h3>
                     <span className="text-xs text-slate-500">{item.industry}</span>
                   </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                  {item.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 py-6 border-t border-slate-100 mb-6">
                {item.stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-xl font-bold text-slate-900">{stat.value}</div>
                    <div className="text-xs text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-auto bg-slate-50 p-4 rounded-xl relative">
                <Quote className="absolute top-2 left-2 w-4 h-4 text-blue-200" />
                <p className="text-xs text-slate-600 italic pl-4 relative z-10">
                  &ldquo;我们始终认为，实现信息化项目成功的更优路径就是用成功去复制成功。YonSuite帮助我们打破了20多个异构系统的孤岛，实现了研产一体化的高度融合。&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
