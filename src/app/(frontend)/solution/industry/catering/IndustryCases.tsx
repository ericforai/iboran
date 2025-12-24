import { Quote } from 'lucide-react'

const cases = [
  {
    company: '曼玲集团',
    industry: '粥速食连锁',
    scale: '全国数千家门店',
    challenge: '门店众多且品牌多样，合同流转慢，往来账务混杂，亟需精细化财务核算。',
    solution: '应用用友BIP事项会计中台与合同管理平台，打通供应链与财务系统。',
    result: '实现全集团合同业财一体履约管理，存货成本核算自动化，决策报表日出。',
    quote: '通过规范核算数据及流程，我们实现了集团级的精细化财务管控，为品牌持续扩张夯实了底座。'
  },
  {
    company: '快乐蜂 (Jollibee)',
    industry: '跨国西式快餐',
    scale: '全球连锁巨头',
    challenge: '外部销售渠道与支付机构复杂，每日海量交易数据的清正、对账与分账压力极大。',
    solution: '部署用友RAS收入中台，对接多渠道POS流水，建立全自动清分与对账体系。',
    result: '成功解决对账痛点，实现清分业务处理流程化，对账核算效率提升数倍。',
    quote: 'RAS中台的上线让繁杂的账务变得清晰透明，极大释放了基础财务的人力，提升了总部管控力。'
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
        
        <div className="grid lg:grid-cols-2 gap-8">
          {cases.map((caseItem, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <h3 className="text-xl font-bold text-[#1F2329]">
                      {caseItem.company}
                    </h3>
                    <p className="text-sm text-slate-500 mt-1">
                      {caseItem.industry} · {caseItem.scale}
                    </p>
                  </div>
                  <div className="bg-blue-50 text-[#0052D9] px-3 py-1 rounded text-xs font-bold">
                    已交付
                  </div>
                </div>
                
                <div className="space-y-5">
                  <div className="flex gap-4">
                    <span className="shrink-0 w-8 h-8 rounded-full bg-red-50 text-red-600 flex items-center justify-center text-xs font-bold">
                      痛点
                    </span>
                    <p className="text-sm text-slate-600 leading-relaxed italic">
                      &quot;{caseItem.challenge}&quot;
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <span className="shrink-0 w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold">
                      方案
                    </span>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {caseItem.solution}
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <span className="shrink-0 w-8 h-8 rounded-full bg-green-50 text-green-600 flex items-center justify-center text-xs font-bold">
                      成果
                    </span>
                    <p className="text-sm text-[#1F2329] font-medium leading-relaxed">
                      {caseItem.result}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-slate-100 flex gap-4">
                <Quote className="w-8 h-8 text-slate-200 shrink-0" />
                <p className="text-sm text-slate-500 italic leading-relaxed">
                  {caseItem.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
