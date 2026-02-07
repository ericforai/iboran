// import { Quote } from 'lucide-react'

const cases = [
  {
    company: '某省国资委',
    industry: '政府/国资监管',
    scale: '监管企业30+',
    challenge: '国资监管数据分散，缺乏实时在线监管手段，"三重一大"决策执行情况难以追踪。',
    solution: '建设国资国企在线监管平台，实现国资委与所监管企业的数据联网与实时监测。',
    result: '构建了横向到边、纵向到底的实时动态监管体系，监管效能大幅提升。',
  },
  {
    company: '某大型城投集团',
    industry: '城市建设/投资',
    scale: '资产千亿级',
    challenge: '集团层级多，财务管理分散，资金使用效率低，融资成本高。',
    solution: '搭建财务共享中心与司库管理系统，统一核算标准，集中管理资金。',
    result: '凭证自动化率达到 95%，资金归集率 99%以上，有效降低了融资成本与财务风险。',
  },
  {
    company: '某国有资本投资公司',
    industry: '投资运营',
    scale: '大型央企',
    challenge: '投资项目众多，投后管理难，投资回报分析滞后，缺乏数据支撑。',
    solution: '实施投资项目全生命周期管理系统，打通投前、投中、投后全流程数据。',
    result: '实现了投资业务的全过程数字化管控，投资风险识别率提升 40%。',
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
            国资国企标杆案例
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full" />
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {cases.map((caseItem, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
            >
              {/* 企业信息头 */}
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
              
              {/* 挑战-方案-成果 */}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
