const featuredCases = [
  {
    company: '万华化学',
    industry: '化工新材料',
    scale: '全球聚氨酯龙头企业',
    challenge: '多业务板块协同管理复杂，全球化运营需要统一平台支撑，产销协同效率需提升',
    solution: '部署用友BIP超级版，实现集团财务、供应链、生产一体化管理，支撑全球化运营',
    result: '运营效率显著提升，财务共享中心高效运转，产销协同更加敏捷',
  },
  {
    company: '道恩集团',
    industry: '高端化工新材料',
    scale: '中国制造业500强',
    challenge: '业务快速扩张，信息系统分散，数据孤岛严重，管理决策缺乏数据支撑',
    solution: '搭建统一数智化平台，打通销售、采购、生产、财务全链路，建立经营驾驶舱',
    result: '信息透明化，决策效率提升，业财一体化运营',
  },
  {
    company: '鲁西化工',
    industry: '大型化工企业集团',
    scale: '化工园区龙头',
    challenge: '生产工艺复杂，安全环保要求严格，成本核算精细化程度不足',
    solution: '实施智能制造+业财一体方案，强化安环管理，实现成本精细化核算',
    result: '生产更安全可控，合规有保障，成本管理精准透明',
  },
]

const allCustomers = [
  '万华化学', '道恩集团', '红星集团', '海科集团', '鲁西化工', '渤化集团',
  '旭阳集团', '宜化集团', '宜宾天原', '北方华锦', '新疆天业', '鹏飞集团',
  '延长石油', '大土河能源', '华鲁恒升', '福建能化', '北元集团'
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
          <p className="text-slate-500 max-w-2xl mx-auto">
            服务17+基础化工行业龙头企业，助力行业数智化转型
          </p>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mt-4" />
        </div>
        
        {/* Featured Cases */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {featuredCases.map((caseItem, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow"
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
              <div className="space-y-4">
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
            </div>
          ))}
        </div>

        {/* Customer Logo Wall */}
        <div className="bg-white rounded-2xl p-8 border border-slate-100">
          <h3 className="text-center text-lg font-bold text-[#1F2329] mb-6">
            更多标杆客户
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {allCustomers.map((customer, idx) => (
              <div 
                key={idx}
                className="px-6 py-3 bg-slate-50 rounded-lg text-slate-700 font-medium hover:bg-slate-100 transition"
              >
                {customer}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
