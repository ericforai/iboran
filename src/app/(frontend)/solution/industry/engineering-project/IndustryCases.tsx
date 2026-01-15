import { Quote } from 'lucide-react'

const cases = [
  {
    company: '山东信发集团',
    industry: '多产业跨国集团',
    scale: '大型现代化集团',
    challenge: '产业链长、经营地域分散。项目管理与财务管理割裂，数据量巨大导致人工归集困难，结算纠纷频发。',
    solution: '全集团通过用友BIP超级版实现基础数据统一、财务共享、业财一体化。项目管理与财务、业务管理深度融合。',
    result: '业务流程标准化、自动化。实现从工程业务到财务的一体化流程及全过程追溯，大幅减少了结算纠纷。',
    quote: '通过财务共享中心的管理模式，支撑了集团的快速发展，项目管理与财物、业务的深度融合让数据真实透明。',
  },
  {
    company: '龙成钢铁',
    industry: '特殊钢铁/工程建设',
    scale: '中国民营500强',
    challenge: '一项目多编码、名称混乱。缺乏动态预算管控，项目进度不透明，单据间无法关联。',
    solution: '建立统一项目库。构建以预算为源头的成本管控体系。通过移动化办公提升审批效率，实现下游单据监督上游。',
    result: '除预付款外，进度款、结算款实时进账，解决了发票积压风险。形成业务财务一体化报表，时刻监控投资进度。',
    quote: '数字化不仅让项目进度一览无余，更让无效成本从我们的账面上消失了。',
  },
  {
    company: '南京水务',
    industry: '水务投资/环保',
    scale: '市属重点国企',
    challenge: '原有财务系统与工程管理系统孤立，业财协同能力弱。急需精细化管控以提升核心竞争力。',
    solution: '借助用友打造一体化集团数字化平台。覆盖财务、供应链、工程项目、资产设备、招投标五大领域。',
    result: '增强了集团管控能力，提升了业务运营效率。实现了电子招投标全流程在线化，提升了国资透明度。',
    quote: '一体化平台为南京水务打造了稳固的数字底座，让我们在复杂项目的精细化管理上更进了一步。',
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
            业主方标杆客户案例
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
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-blue-600 font-bold text-lg">
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
