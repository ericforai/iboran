'use client'



const cases = [
  {
    company: "某央企基建集团",
    title: "全球财务共享，支撑 100+ 海外项目",
    desc: "建设全球财务共享中心，统一核算体系与数据标准。通过多准则核算引擎，实现'一次录入、多准则报告'，满足中国会计准则与国际财务报告准则的双重合规需求。",
    tags: ["全球共享", "多准则核算", "海外合规"]
  },
  {
    company: "知名制造上市企业",
    title: "智能关账提速，月结仅需 2 天",
    desc: "引入 BIP 智能关账工作台，实现全流程由'人找事'向'事找人'的转变。自动化的期末处理与内部交易对账，将月度关账周期从 7 天缩短至 2 天，效率提升 70%。",
    tags: ["智能关账", "快速月结", "效率提升"]
  },
  {
    company: "大型零售连锁集团",
    title: "业财融合，百万级单据实时入账",
    desc: "基于事项法会计，实现前端 POS、电商平台与财务系统的实时互联。日均处理百万级业务单据，自动生成财务凭证，不仅消灭了手工账，更实现了单品级的精细化核算。",
    tags: ["事项会计", "实时入账", "大数据核算"]
  },
  {
    company: "高科技集团",
    title: "内部交易自动抵销，一键合并报表",
    desc: "针对集团内部复杂的关联交易，利用协同对账平台实现交易即时确认。期末一键生成合并抵销分录，自动化出具集团合并报表，数据准确率 99%以上。",
    tags: ["合并报表", "关联交易", "财务管控"]
  }
]

export default function CustomerSuccess() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">行业标杆案例</h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex flex-wrap gap-2 mb-6">
                {item.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="px-3 py-1 bg-blue-50 text-[#0052D9] text-xs font-bold rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold text-[#1F2329] mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6 font-medium text-sm">
                {item.company}
              </p>
              <p className="text-slate-500 text-sm leading-relaxed border-l-4 border-slate-100 pl-4">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
