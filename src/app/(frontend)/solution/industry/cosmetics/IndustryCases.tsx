import { Quote } from 'lucide-react'

const cases = [
  {
    company: '瑷蒂诗国际化妆品(海南)有限公司',
    industry: '高端护肤 · 国际品牌',
    scale: '全渠道零售',
    challenge: '多渠道订单分散、库存与销售数据难以实时同步，业务与财务结算存在时间差。',
    solution: '部署用友BIP全渠道营销与供应链协同模块，实现电商、门店、经销商三位一体管理。',
    result: '订单处理效率提升50%，库存准确率达99.5%，财务结算周期由7天缩短至1天。',
    quote: '数智化转型让我们实现了从分渠道经营到全渠道一体化运营的飞跃。'
  },
  {
    company: '某知名国货美妆品牌',
    industry: '国货彩妆 · 新消费品牌',
    scale: '年GMV 50亿+',
    challenge: '直播电商快速增长带来的订单洪峰处理压力，多仓库存分配与发货协同困难。',
    solution: '构建电商订单中台与智能仓储系统，实现自动分仓、智能排程、WMS深度集成。',
    result: '订单发货时效提升40%，大促期间系统零宕机，客户满意度显著提升。',
    quote: '通过供应链数智化，我们应对大促的能力有了质的飞跃。'
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
            化妆品行业标杆客户案例
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full" />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {cases.map((caseItem, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-pink-100 transition-colors"
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
