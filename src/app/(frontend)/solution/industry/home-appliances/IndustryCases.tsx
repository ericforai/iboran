import { Quote, Briefcase, Smartphone } from 'lucide-react'

interface Case {
  company: string
  industry: string
  scale: string
  challenge: string
  solution: string
  result: string
  quote?: string
}

const cases: Case[] = [
  {
    company: 'Libratone 小鸟听听',
    industry: '3C 消费电子 / 智能音响',
    scale: '知名跨国音频品牌',
    challenge: '库存分布多点且依赖三方外仓，原系统无法支撑与多方 WMS 集成。电商平台订单量激增，财务对账繁琐，且 SN 序列号缺失全程管控。',
    solution: '部署 YonSuite 一体化平台，深度集成天猫、京东及科捷/顺丰/菜鸟等外仓，实现「一盘货」战略。建立 3C 产品 SN 码从工厂下线到退货返修的全生命周期跟踪。',
    result: '打通了多场景发货模式，实现自有仓、云仓库存实时共享。显著提升了电商业务处理效率与 SN 码追溯准确性。',
    quote: 'YonSuite 助力我们打通了从订单到仓储的完整链路，不仅实现了库存的一盘货管理，更让 SN 码的追踪变得轻而易举。'
  },
  {
    company: '某知名家电制造集团',
    industry: '大家电制造与销售',
    scale: '年营收 50 亿+ 集团企业',
    challenge: '传统制造业转型服务商，多级经销商渠道控制力弱，营销费用投效不透明，售后服务体验零散。',
    solution: '通过 YonSuite 营销云构建 DRP 渠道管控体系，实现终端销量实时监控。引入营销费用中心，实现策划、执行到结算的费用池在线闭环。',
    result: '渠道掌控力提升 40%，营销费用浪费减少 15%。通过服务闭环提升了消费者二次购买率。',
    quote: '业务在线是数据驱动的前提，YonSuite 让我们真正实现了营销端的数智化进阶。'
  }
]

export default function IndustryCases() {
  return (
    <section className="py-24 bg-[#F7F8FA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-blue-600 font-semibold tracking-wider uppercase">
            Success Stories
          </span>
          <h2 className="text-3xl font-bold text-[#1F2329] mt-2 mb-4">
            行业标杆案例，见证数智转型
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full" />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {cases.map((caseItem, idx) => (
            <div
              key={idx}
              className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group"
            >
              <div className="flex items-start justify-between mb-8 border-b border-slate-50 pb-6">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                    <Smartphone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1F2329] group-hover:text-blue-600 transition-colors">
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
