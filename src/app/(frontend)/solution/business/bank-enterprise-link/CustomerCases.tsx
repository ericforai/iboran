import { Quote, User } from 'lucide-react'

const cases = [
  {
    name: '贵州茅台',
    industry: '白酒行业',
    description: '通过银企联打通资金管理与营销管理，实现全量收支实时在线。赋能业务及财务，实现真正的业财融合。',
    result: '日均处理数万笔交易，自动对账率 99%+',
  },
  {
    name: '海信集团',
    industry: '消费电子',
    description: '借助 U9 Cloud 与银企联，实现了企业支出、收款、银企对账的全在线管理。提升了资金结算效率，加强了收款对账的及时性。',
    result: '全球账户可视，资金周转效率极大提升',
  },
  {
    name: '国投集团',
    industry: '国资央企',
    description: '作为“境内外贯通”的基础通道底座，助力国投集团快速建设标杆司库体系，达成“6个贯通”目标。',
    result: '建立了覆盖全球的司库管理体系',
  },
]

export default function CustomerCases() {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">
            1000+ 行业领军企业的共同选择
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((c, idx) => (
            <div
              key={idx}
              className="bg-slate-50 p-8 rounded-2xl relative group hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              <Quote className="w-10 h-10 text-slate-200 mb-6 group-hover:text-[#E60012]/20 transition-colors" />
              <p className="text-slate-600 mb-8 leading-relaxed min-h-[80px]">
                {c.description}
              </p>
              
              <div className="pt-6 border-t border-slate-200">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
                    <User className="w-5 h-5 text-slate-400" />
                  </div>
                  <div>
                    <div className="font-bold text-[#1F2329]">{c.name}</div>
                    <div className="text-xs text-slate-500">{c.industry}</div>
                  </div>
                </div>
                <div className="mt-4 px-3 py-2 bg-[#E60012]/5 text-[#E60012] text-xs font-bold rounded">
                  成果：{c.result}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
