import { Quote } from 'lucide-react'

const cases = [
  {
    company: '广东东岛新能源股份有限公司',
    industry: '锂电池负极材料',
    scale: '国家级专精特新企业',
    challenge: '作为专注于锂离子动力电池负极材料的国家高新技术企业，东岛拥有80余项专利，产品供货宁德时代、比克电池、天津力神、亿纬锂能等众多客户，急需规范内控流程、推进IPO进程',
    solution: 'U9 cloud助力东岛建立规范的财务管理、供应链管理、生产制造与成本核算体系，形成符合审计要求的内控流程与制度文档',
    result: '成功助力东岛上市进程，建立起行业可复用的成本核算方案，成为新材料领域的标杆案例',
    quote: '用友对负极材料行业领域有深入的理解，U9 cloud在IPO合规、多组织运营方面提供了强有力的支撑',
  },
  {
    company: '洛阳月星新能源科技有限公司',
    industry: '锂电池负极材料',
    scale: '拥有多元化产品结构的高新技术企业',
    challenge: '月星拥有天然石墨、人造石墨、复合石墨等多元化产品，正在四川建设新工厂，急需规范内控流程、建立多组织管控体系支撑IPO计划',
    solution: '借助行业经验，2个月完成项目上线，基于月星内控要求，协助企业七大核心部门建立78份业务流程SOP，创建43条系统管控预警机制',
    result: '3个月顺利月结验收，辅助企业规范流程、建立制度，为下一步的IPO计划奠定坚实基础',
    quote: '借助用友的行业经验，我们仅用2个月就完成了项目上线，建立了规范的流程制度，为IPO做好了充分准备',
  },
]

export default function IndustryCases() {
  return (
    <section className="py-24 bg-[#F7F8FA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-[#0052D9] font-semibold tracking-wider uppercase">
            Success Stories
          </span>
          <h2 className="text-3xl font-bold text-[#1F2329] mt-2 mb-4">
            新材料行业标杆客户案例
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full" />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {cases.map((caseItem, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition"
            >
              {/* Company Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-[#1F2329]">
                    {caseItem.company}
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">
                    {caseItem.industry} · {caseItem.scale}
                  </p>
                </div>
                <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-emerald-600 font-bold text-lg">
                    {caseItem.company.charAt(0)}
                  </span>
                </div>
              </div>
              
              {/* Challenge-Solution-Result */}
              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="shrink-0 w-16 text-sm font-semibold text-red-600">挑战</span>
                  <p className="text-sm text-slate-600">{caseItem.challenge}</p>
                </div>
                <div className="flex gap-3">
                  <span className="shrink-0 w-16 text-sm font-semibold text-blue-600">方案</span>
                  <p className="text-sm text-slate-600">{caseItem.solution}</p>
                </div>
                <div className="flex gap-3">
                  <span className="shrink-0 w-16 text-sm font-semibold text-green-600">成果</span>
                  <p className="text-sm text-slate-600">{caseItem.result}</p>
                </div>
              </div>
              
              {/* Customer Quote */}
              <div className="mt-6 pt-6 border-t border-slate-100">
                <div className="flex gap-3">
                  <Quote className="w-5 h-5 text-slate-300 shrink-0" />
                  <p className="text-sm text-slate-500 italic">
                    &ldquo;{caseItem.quote}&rdquo;
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
