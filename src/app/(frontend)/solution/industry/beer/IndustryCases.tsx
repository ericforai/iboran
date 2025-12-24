import { Quote } from 'lucide-react'

const cases = [
  {
    company: '燕京啤酒',
    industry: '头部啤酒集团 · 综合型',
    scale: '年产量500万吨+',
    challenge: '激烈市场竞争中需持续突破，传统管控和组织变革无法满足高质量发展需求。',
    solution: '部署数字化管控平台，以全面预算支撑战略落地，产供销一体化协同，人财物集约化管理。',
    result: '实现战略与预算协同闭环，产销协调效率提升30%，组织资源统一调度与优化配置。',
    quote: '数字化驱动战略转型及组织变革，助力燕京啤酒复兴，实现高质量发展。'
  },
  {
    company: '麒麟啤酒(珠海)',
    industry: '外资啤酒 · 日系品牌',
    scale: '麒麟集团东亚生产据点',
    challenge: '各部门独立运作，会计核算无统一体系，业务与财务协同规范缺失。',
    solution: '构建业财一体化平台，建立主数据体系、财务科目体系、业务流程体系和产品BOM体系。',
    result: '体系标准全面建立，财报管报协同完善，初步实现产销协同与信息化综合效益提升。',
    quote: '业财融合驱动管理能力持续提升，规范业务增效益。'
  },
  {
    company: '青岛啤酒',
    industry: '头部品牌 · 电商物流',
    scale: '国民级啤酒品牌',
    challenge: '电商物流全流程自动化程度低，经销商被物流牵制，交付体验与库存周转待优化。',
    solution: '以物流打通产销协同全渠道，商物分离让经销商专注业务，仓干配专业化运作。',
    result: '将经销商从物流中解放，库存共享提高资金利用率，信息流集约化降低沟通成本。',
    quote: '智能管家实现电商物流全流程自动化新突破。'
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
            啤酒行业标杆客户案例
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full" />
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {cases.map((caseItem, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-amber-100 transition-colors"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-[#1F2329]">
                    {caseItem.company}
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">
                    {caseItem.industry} · {caseItem.scale}
                  </p>
                </div>
              </div>
              
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
              
              {caseItem.quote && (
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <div className="flex gap-3">
                    <Quote className="w-5 h-5 text-slate-200 shrink-0" />
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
