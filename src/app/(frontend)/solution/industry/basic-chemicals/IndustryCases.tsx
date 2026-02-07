const featuredCases = [
  {
    company: '河南心连心化学工业集团',
    industry: '化肥/基础化工',
    scale: '尿素250万吨/年',
    challenge: '营销活动缺乏全过程管控，业务协同依赖线下，渠道交易效率低，经营决策缺乏实时数据支撑',
    solution: '构建营销服务与种植服务双平台，通过营销驾驶舱和移动作战地图实现“连接商、连接客、连接人”',
    result: '营销资源数字化全覆盖，核心指标实时掌控。实现业务流程化、经营数字化，赋能区域市场精准运营',
  },
  {
    company: '先正达集团中国',
    industry: '作物营养/植保',
    scale: '全球知名农业科技企业',
    challenge: '现有系统无法满足灵活营销政策（返利、计息、底价管控），主辅计量转换不便，由于物流信息断层导致产销协同难',
    solution: '部署数字化供应链网络协同平台，实现从寻源、合同、履约到支付的端到端全场景智能采购与销售。建立区域成本域核算模型',
    result: '提供自助式网购体验，交易过程透明化。货源高效分配，24小时线上交易，实现精细化成本核算与风控管理',
  },
  {
    company: '万华化学',
    industry: '化工新材料',
    scale: '全球聚氨酯头部',
    challenge: '多业务板块全球化协作复杂，产销协同效率需进一步提升。原有系统无法支撑全栈信创国产化替代',
    solution: '基于用友BIP超级版构建统一数智底座，实现研供产销服、人财物客项一体化管理。全面适配信创国产化环境',
    result: '运营效率显著提升，支撑全球化敏捷运营。成功实现国产化平替，以保障核心业务数据安全可控',
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
            服务17+基础化工行业头部企业，助力行业数智化转型
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
