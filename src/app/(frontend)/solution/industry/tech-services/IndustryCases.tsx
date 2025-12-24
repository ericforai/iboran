import { Quote } from 'lucide-react'

const cases = [
  {
    company: '艾克瑞特 (ICRATE)',
    industry: '科技教育 / 机器人研发',
    scale: '年营收数亿',
    challenge: '多校区管理混乱，财务核算严重滞后，薪资计算复杂耗时，数据孤岛严重阻碍决策。',
    solution: 'YonSuite 数智化全家桶（财务+供应链+人力+协同），实现全业务上云。',
    result: '财务凭证 100% 自动生成，财务重复工作减少 60%，算薪效率提升 70%，流程审批提效 8 倍。',
    quote: 'YonSuite 真正实现了让业务产生数据，让数据驱动决策。我们的人才招聘、薪资核算、财务对账效率都有了质的飞跃。'
  },
  {
    company: '某知名 IT 服务商',
    industry: 'IT 咨询与外包',
    scale: '千人规模',
    challenge: '项目工时填报不准，项目成本核算困难，外包人员流动性大，管理成本高昂。',
    solution: 'YonSuite 项目管理 + 人力服务，实现精细化项目工时与成本管控。',
    result: '项目成本核算准确率提升至 99%，回款周期缩短 15 天，外包人员入职效率提升 50%。'
  }
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
            行业标杆客户案例
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full" />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {cases.map((caseItem, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full"
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#1F2329]">
                  {caseItem.company}
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  {caseItem.industry} · {caseItem.scale}
                </p>
              </div>
              
              <div className="space-y-4 flex-grow">
                <div className="flex gap-3">
                  <span className="shrink-0 w-12 text-sm font-semibold text-red-600 bg-red-50 px-2 py-0.5 rounded text-center h-fit">挑战</span>
                  <p className="text-sm text-slate-600">{caseItem.challenge}</p>
                </div>
                <div className="flex gap-3">
                  <span className="shrink-0 w-12 text-sm font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded text-center h-fit">方案</span>
                  <p className="text-sm text-slate-600">{caseItem.solution}</p>
                </div>
                <div className="flex gap-3">
                  <span className="shrink-0 w-12 text-sm font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded text-center h-fit">成果</span>
                  <p className="text-sm text-slate-600">{caseItem.result}</p>
                </div>
              </div>
              
              {caseItem.quote && (
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <div className="flex gap-3">
                    <Quote className="w-5 h-5 text-slate-300 shrink-0" />
                    <p className="text-sm text-slate-500 italic">
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
