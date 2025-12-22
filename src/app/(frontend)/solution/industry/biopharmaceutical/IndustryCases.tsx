import { Quote } from 'lucide-react'

const cases = [
  {
    company: '某生物医药CDMO企业',
    industry: '生物制药',
    scale: '年营收20亿+，员工500+',
    challenge: '多个研发项目并行，跨三地工厂协同生产，项目进度不透明，成本核算跨组织困难，项目延期率高达40%',
    solution: '部署YonSuite项目管理+生产制造+成本核算一体化方案，建立统一项目管控平台，实现跨组织成本归集和实时分析',
    result: '项目交付周期缩短35%，跨组织成本核算准确率达96%，项目延期率降至10%以下',
    quote: 'YonSuite帮助我们实现了多项目的统一管控，项目进度一目了然，成本分析也变得精准高效。',
  },
  {
    company: '某大型CDMO集团',
    industry: 'CMO/CDMO',
    scale: '集团化运营，4个生产基地',
    challenge: '集团采购模式复杂，供应商资质管理分散，生产物料配套不及时，质量追溯依赖手工记录',
    solution: '实施集团化采购管控+供应商管理+质量追溯全链路方案，建立GMP合规的数字化质量管理体系',
    result: '采购效率提升45%，供应商合规率100%，批次追溯时间从2天缩短至10分钟',
    quote: '从采购到质量追溯的全流程数字化，让我们的GMP审计变得更加从容。',
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
            生物医药行业标杆案例
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full" />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {cases.map((caseItem, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
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
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🧬</span>
                </div>
              </div>
              
              {/* Challenge - Solution - Result */}
              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="shrink-0 w-14 text-sm font-semibold text-red-600">挑战</span>
                  <p className="text-sm text-slate-600 leading-relaxed">{caseItem.challenge}</p>
                </div>
                <div className="flex gap-3">
                  <span className="shrink-0 w-14 text-sm font-semibold text-blue-600">方案</span>
                  <p className="text-sm text-slate-600 leading-relaxed">{caseItem.solution}</p>
                </div>
                <div className="flex gap-3">
                  <span className="shrink-0 w-14 text-sm font-semibold text-green-600">成果</span>
                  <p className="text-sm text-slate-600 leading-relaxed">{caseItem.result}</p>
                </div>
              </div>
              
              {/* Quote */}
              <div className="mt-6 pt-6 border-t border-slate-100">
                <div className="flex gap-3">
                  <Quote className="w-5 h-5 text-slate-300 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-500 italic leading-relaxed">
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
