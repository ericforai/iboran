import React from 'react'
import { Quote, Microscope } from 'lucide-react'

const cases = [
  {
    name: "行诚生物 (CoJourney)",
    industry: "基因治疗 CDMO",
    description: "基于质粒、病毒载体和 mRNA 的一站一站式服务商。成功构建符合 FDA、EU、NMPA 规范的 GMP 数字化工厂，实现全流程质量追溯与 CSV 验证。",
    tags: ["GMP 合规", "CSV 验证", "项目管线管控"],
    logo: "/logos/cojourney.png", // Use placeholder or text if no logo
    stats: [
      { label: "合规验证", value: "QMS/DMS/TMS" },
      { label: "管理深度", value: "全流程追溯" },
    ],
    quote: "我们始终坚持『行之发于至诚』。YonSuite 帮助我们从线下审批转向全流程可视化管理，确保每一步作业都有迹可循，满足严苛的监管要求。"
  }
]

export function IndustryCases() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">行业标杆案例</h2>
          <p className="text-slate-600">
            用友 BIP 助力 CDMO 企业构建新质生产力，实现高增长与高合规。
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {cases.map((item, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col md:flex-row gap-12">
              <div className="md:w-1/3">
                <div className="w-20 h-20 rounded-2xl bg-blue-600 flex items-center justify-center mb-6">
                  <Microscope className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{item.name}</h3>
                <div className="text-blue-600 font-medium mb-6">{item.industry}</div>
                
                <div className="space-y-4">
                  {item.stats.map((stat, sIdx) => (
                    <div key={sIdx}>
                      <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                      <div className="text-sm text-slate-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:w-2/3 flex flex-col">
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-10">
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="mt-auto bg-slate-50 p-6 rounded-2xl relative">
                  <Quote className="absolute top-4 left-4 w-6 h-6 text-blue-100" />
                  <p className="text-slate-700 italic pl-8 relative z-10 leading-relaxed">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
