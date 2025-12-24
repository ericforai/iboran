import { Quote, Briefcase, Cpu } from 'lucide-react'

interface Case {
  company: string
  industry: string
  scale: string
  challenge: string
  solution: string
  result: string
  quote?: string
}

// 案例数据内置在组件中
const cases: Case[] = [
  {
    company: '长晶科技',
    industry: '半导体设计与销售',
    scale: '上市公司/知名分立器件供应商',
    challenge: '专业分包工序多，变化快，总部与分子公司协同压力大，亟需精细化成本核算。',
    solution: '通过BIP超级版实现集团化管控，打通长晶到浦联的协同流程，实现PDA扫码入库与生产现场MES链接。',
    result: '全流程打通实现"内链接、外协同"，大幅提升了委外采购效率与入库精度。',
    quote: '用友BIP帮助我们实现了从长晶到代工厂的深度业务整合。'
  },
  {
    company: '奥拉半导体',
    industry: '无晶圆厂（Fabless）',
    scale: '跨国模拟/混合信号集成电路供应商',
    challenge: '全球多研发中心，信息孤岛严重，且原系统无法支撑跨组织交易与复杂委外核销。',
    solution: '构建全球管控一体化平台，规范数据标准，打通研产供销闭环，引入订单级精细成本核算。',
    result: '业务财务一体化，加强了财务与业务一致性，实现了全球范围内的精细化管控。',
    quote: '数字化的核心不仅是流程，更是数据的标准化与实时性。'
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
              className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group"
            >
              {/* 企业信息头 */}
              <div className="flex items-start justify-between mb-8 border-b border-slate-50 pb-6">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                    <Cpu className="w-6 h-6 text-[#0052D9]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1F2329] group-hover:text-[#0052D9] transition-colors">
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
              
              {/* 挑战-方案-成果 */}
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
              
              {/* 客户证言 */}
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
