import { Quote } from 'lucide-react'

const cases = [
  {
    company: '美团',
    industry: '生活服务互联网',
    scale: '全球知名的互联网科技企业',
    challenge: '随着业务全球化扩张，资金分散在全球各地，融资结构需优化，且缺乏统一的风险管控体系，资金使用效率有待提升。',
    solution: '基于 BIP 全球司库构建多层级授信管控体系，实现债权融资精细化管理与风险前置防控。统一管理境内外账户与资金池。',
    result: '实现了债权融资业务数智化转型，融资数据标准化、过程透明化、风险管控体系化，显著降低了资金使用成本。',
    quote: '帮大家吃得更好，生活更好'
  },
  {
    company: '58同城',
    industry: '生活服务平台',
    scale: '中国头部的生活服务平台，员工3万+',
    challenge: '薪酬制度版本迭代快，规则复杂；算薪涉及几十种数据源，手工处理效率低，且多分支机构分散核算，数据难以及时汇总。',
    solution: '构建集团统一的薪酬核算平台，实现薪酬核算全流程在线与自动化。支持SSC、HRBP、COE多角色在线协同。',
    result: '实现薪酬结果“一键核算”与报税支付数据“一键拆分”。算薪从繁琐的手工劳动转变为系统自动化处理，大幅提升效率。',
    quote: '让生活更美好'
  },
  {
    company: '众阳健康',
    industry: '医疗健康IT',
    scale: '服务1000+医疗机构',
    challenge: '项目管理与财务流程未融合，线索、合同、交付、验收全流程主要依赖手工或分散系统，项目成本核算不精细，利润难把控。',
    solution: '构建一体化数字运营平台，以项目为主线，拉通销售、交付、采购与财务。建立主数据标准，规范业务流程。',
    result: '实现财务核算精细化，打通业财壁垒。企业管控从部门深入到项目单体，有效降低项目成本，提高项目利润率。'
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
        
        <div className="grid lg:grid-cols-3 gap-8">
          {cases.map((caseItem, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col"
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
                <div>
                  <span className="inline-block px-2 py-0.5 bg-red-50 text-red-600 text-xs font-semibold rounded mb-1">挑战</span>
                  <p className="text-sm text-slate-600 leading-relaxed">{caseItem.challenge}</p>
                </div>
                <div>
                  <span className="inline-block px-2 py-0.5 bg-blue-50 text-blue-600 text-xs font-semibold rounded mb-1">方案</span>
                  <p className="text-sm text-slate-600 leading-relaxed">{caseItem.solution}</p>
                </div>
                <div>
                  <span className="inline-block px-2 py-0.5 bg-green-50 text-green-600 text-xs font-semibold rounded mb-1">成果</span>
                  <p className="text-sm text-slate-600 leading-relaxed">{caseItem.result}</p>
                </div>
              </div>
              
              {/* 客户证言 */}
              {caseItem.quote && (
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <div className="flex gap-3">
                    <Quote className="w-5 h-5 text-slate-300 shrink-0" />
                    <p className="text-sm text-slate-500 italic">
                      &ldquo;{caseItem.quote}&rdquo;
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
