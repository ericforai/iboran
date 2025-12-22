import { Quote } from 'lucide-react'

const cases = [
  {
    company: '某大型电气装备集团',
    industry: '高低压电气设备',
    scale: '年营收50亿+',
    challenge: '集团多工厂运营，MTO/MTS混合生产模式复杂，生产计划频繁变更，跨组织内部交易结算周期长',
    solution: '部署用友BIP超级版，实现MPS/MRP/APS分层计划管理，建立内部交易结算平台，打通供应链与财务核算',
    result: '计划准确率提升35%，内部结算周期从15天缩短至3天，库存周转率提升28%',
    quote: '用友BIP帮助我们实现了生产计划的精准管控，真正做到了按单生产与按库存生产的灵活切换',
  },
  {
    company: '某电力设备制造企业',
    industry: '变压器/开关设备',
    scale: '年营收20亿+',
    challenge: '项目型生产占比高，项目BOM管理混乱，子件发运与项目成本归集脱节，交付与回款难以匹配',
    solution: '实施用友BIP项目型生产管控方案，建立项目维度的BOM、领料、发运、成本全流程管理',
    result: '项目成本核算准确率从70%提升至95%，发运齐套率提升30%，项目回款周期缩短25%',
    quote: '项目型生产管控让我们对每个项目的成本和交付进度都心中有数，大幅提升了项目盈利能力',
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
            行业标杆客户案例
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full" />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {cases.map((caseItem, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
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
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                  {idx + 1}
                </div>
              </div>
              
              {/* Challenge - Solution - Result */}
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
              
              {/* Quote */}
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
