import { Quote } from 'lucide-react'

const cases = [
  {
    company: '某知名酱香型酒企',
    industry: '传统酿造 · 酱香白酒',
    scale: '产值100亿+',
    challenge: '传统手工评级主观性强，酒体资产数字化程度低，业财核算存在严重滞后。',
    solution: '部署用友BIP产销协同与数字酒库模块，引入事项会计中台实现勾调成本自动核算。',
    result: '基酒品质一致性提升15%，财务月度结算从7天缩短至1天，酒体库存准确率达99.9%。',
    quote: '数智转型让我们实现了从凭经验酿酒到凭数据酿酒的飞跃。'
  },
  {
    company: '某浓香型头部企业',
    industry: '大众消费 · 浓香白酒',
    scale: '年出货量5000万件+',
    challenge: '销售渠道极其分散，包材辅材库存高企，产销计划难以实时对齐。',
    solution: '构建以销售计划驱动的全局供应链平台，实现总厂、配套厂、承运商的多方在线协同。',
    result: '渠道呆滞库存降低22%，生产响应周期提速30%，营销费用透明度显著提升。',
    quote: '通过全链路数智化，我们更清晰地掌握了每一瓶酒的去向。'
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
            白酒行业标杆客户案例
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full" />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {cases.map((caseItem, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-red-100 transition-colors"
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
