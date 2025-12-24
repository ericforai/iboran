import { Quote, Briefcase, Cpu } from 'lucide-react'

interface Case {
  company: string
  industry: string
  scale: string
  challenge: string
  solution: string
  result: string
  quote?: string
}

interface IndustryCasesProps {
  cases: Case[]
}

export default function IndustryCases({ cases }: IndustryCasesProps) {
  return (
    <section className="py-24 bg-[#F7F8FA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-[#0052D9] font-semibold tracking-wider uppercase">
            Success Stories
          </span>
          <h2 className="text-3xl font-bold text-[#1F2329] mt-2 mb-4">
            行业标杆客户案例
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full" />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {cases.map((caseItem, idx) => (
            <div
              key={idx}
              className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group"
            >
              {/* 企业信息头 */}
              <div className="flex items-start justify-between mb-8 border-b border-slate-50 pb-6">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                    <Cpu className="w-6 h-6 text-[#0052D9]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1F2329] group-hover:text-[#0052D9] transition-colors">
                      {caseItem.company}
                    </h3>
                    <div className="flex gap-3 text-sm text-slate-500 mt-1">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-3 h-3" />
                        {caseItem.industry}
                      </span>
                      <span>|</span>
                      <span>{caseItem.scale}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 挑战-方案-成果 */}
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 text-xs font-bold text-red-600 bg-red-50 h-6 flex items-center justify-center rounded">挑战</div>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">{caseItem.challenge}</p>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 text-xs font-bold text-blue-600 bg-blue-50 h-6 flex items-center justify-center rounded">方案</div>
                  <p className="text-sm text-slate-600 leading-relaxed">{caseItem.solution}</p>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 text-xs font-bold text-green-600 bg-green-50 h-6 flex items-center justify-center rounded">成果</div>
                  <p className="text-sm text-slate-700 leading-relaxed font-bold">{caseItem.result}</p>
                </div>
              </div>
              
              {/* 客户证言 */}
              {caseItem.quote && (
                <div className="mt-8 pt-8 border-t border-slate-50 relative">
                  <Quote className="absolute top-6 left-0 w-4 h-4 text-slate-200" />
                  <p className="text-sm text-slate-500 italic pl-6 leading-relaxed">
                    &quot;{caseItem.quote}&quot;
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
