import { Quote } from 'lucide-react'

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
          <span className="text-sm text-[#0052D9] font-bold tracking-widest uppercase mb-3 block">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2329] mb-6">
            行业标杆客户见证
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            众多卓越的商务服务企业选择用友 YonSuite，实现数智化转型与商业创新。
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {cases.map((caseItem, idx) => (
            <div
              key={idx}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
                <div>
                  <h3 className="text-2xl font-bold text-[#1F2329] mb-1">
                    {caseItem.company}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <span className="px-2 py-1 bg-slate-100 rounded text-slate-600">{caseItem.industry}</span>
                    <span>·</span>
                    <span>{caseItem.scale}</span>
                  </div>
                </div>
                {/* Placeholder for Logo if needed */}
                <div className="h-10 w-24 bg-slate-100 rounded flex items-center justify-center text-xs text-slate-400">
                  LOGO
                </div>
              </div>
              
              {/* Content */}
              <div className="space-y-5">
                <div className="flex gap-4">
                  <span className="w-12 shrink-0 text-sm font-bold text-red-600 bg-red-50 rounded px-2 py-1 h-fit text-center">挑战</span>
                  <p className="text-slate-600 text-sm leading-relaxed">{caseItem.challenge}</p>
                </div>
                <div className="flex gap-4">
                  <span className="w-12 shrink-0 text-sm font-bold text-blue-600 bg-blue-50 rounded px-2 py-1 h-fit text-center">方案</span>
                  <p className="text-slate-600 text-sm leading-relaxed">{caseItem.solution}</p>
                </div>
                <div className="flex gap-4">
                  <span className="w-12 shrink-0 text-sm font-bold text-green-600 bg-green-50 rounded px-2 py-1 h-fit text-center">成果</span>
                  <p className="text-slate-600 text-sm leading-relaxed">{caseItem.result}</p>
                </div>
              </div>
              
              {/* Quote */}
              {caseItem.quote && (
                <div className="mt-8 pt-6 border-t border-slate-100 bg-slate-50/50 -mx-10 -mb-10 p-10 rounded-b-3xl">
                  <div className="flex gap-4">
                    <Quote className="w-8 h-8 text-slate-300 shrink-0" />
                    <p className="text-slate-600 italic font-medium">
                      &quot;{caseItem.quote}&quot;
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
