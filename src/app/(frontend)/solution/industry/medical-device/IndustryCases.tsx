import { Quote } from 'lucide-react'

const cases = [
  {
    company: '天津世纪康泰',
    industry: '眼科材料/三类器械',
    scale: '三类医疗器械集研发、生产、销售于一体',
    challenge: 'IPO 审计合规性要求，需打破部门壁垒，满足 GSP/GMP/UDI 监管。',
    solution: '应用 YonSuite 搭建统一管理平台，实现业财税一体化与产供销 UDI 全链路追溯。',
    result: '满足 IPO 辅导与审计合规要求，销售与供应链协同效率提升 40%。',
    quote: '搭建符合医疗器械行业特性的管理平台，是我们 IPO 进程中的关键一步。'
  },
  {
    company: '广州思德医疗',
    industry: '消化内科研发/生产',
    scale: '国家高新技术/专精特新',
    challenge: '研发流程与生产供应链割裂，GMP 质量管理方式效率低。',
    solution: '采用 YonSuite 创新 GMP 质量管理模式，统一研发文档、图纸与 BOM 数据。',
    result: '实现研发信息透明与设计制造一体化，达到效率与合规的平衡。',
    quote: '一体化平台让我们在维持高合规标准的同时，业务增速得以释放。'
  },
  {
    company: '博福-益普生',
    industry: '知名药企/制药与器械',
    scale: '全球制药巨头子公司',
    challenge: '历史系统(SAP/Oracle)选型复杂、集成难度大，需满足集团全球一体化管控。',
    solution: 'YonSuite 一体化方案全面替代原有复杂系统，覆盖成本、生产质量及协同费控。',
    result: '实现海外在地经营、财税合规处理，替代原有孤岛式 IT 架构。',
    quote: '从 SAP 到 YonSuite 的转变，实现了更轻量且功能完整的一体化落地。'
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
            行业标杆案例
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full" />
        </div>
        
        <div className="grid lg:grid-cols-2 lg:odd:last:col-span-2 gap-8">
          {cases.map((caseItem, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full"
            >
              {/* 企业信息头 */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#1F2329]">
                  {caseItem.company}
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  {caseItem.industry} · {caseItem.scale}
                </p>
              </div>
              
              {/* 挑战-方案-成果 */}
              <div className="space-y-4 flex-grow">
                <div className="flex gap-3">
                  <span className="shrink-0 w-12 text-sm font-semibold text-red-600">挑战</span>
                  <p className="text-sm text-slate-600">{caseItem.challenge}</p>
                </div>
                <div className="flex gap-3">
                  <span className="shrink-0 w-12 text-sm font-semibold text-blue-600">方案</span>
                  <p className="text-sm text-slate-600">{caseItem.solution}</p>
                </div>
                <div className="flex gap-3">
                  <span className="shrink-0 w-12 text-sm font-semibold text-green-600">成果</span>
                  <p className="text-sm text-slate-600">{caseItem.result}</p>
                </div>
              </div>
              
              {/* 客户证言 */}
              {caseItem.quote && (
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <div className="flex gap-3">
                    <Quote className="w-5 h-5 text-slate-300 shrink-0" />
                    <p className="text-sm text-slate-500 italic leading-relaxed">
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
