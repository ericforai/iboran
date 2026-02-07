'use client'



const cases = [
  {
    company: "钢铁巨头（某世界500强）",
    title: "替换 SAP 实现全线 BIP 财务应用",
    desc: "覆盖 48 个二级产品服务，对接 300+ 数据传输对象。通过事项会计平台，实现了财务领域与外部业务领域的深度集成，带给客户先进、智能、全面融合的数字化管理平台。",
    tags: ["国产化替代", "48+二级产品", "300+对接对象"]
  },
  {
    company: "国际知名汽车集团",
    title: "事项建模自动化，实现全球与本地双轨核算",
    desc: "借助事项库和智能会计平台，合理规范前端业务信息结构，自动转换财务语言，形成后续账务记录和报表出具。实现了档案集成、事项集成、建模自动化。",
    tags: ["全球化经营", "事项集成", "建模自动化"]
  },
  {
    company: "某传媒集团",
    title: "打造以电子发票为核心的'五流合一'数字平台",
    desc: "实现了产业链上集商流、物流、信息流、资金流和票据流的'五流合一'。单张票据节约人工 500 小时/万张，税务管理水平提升 90%，真正实现'零趟跑'。",
    tags: ["五流合一", "电子发票", "智税服务"]
  },
  {
    company: "某地产巨头",
    title: "多系统全电子化会计档案归档",
    desc: "实现会计凭证、账簿、报表以及相关外部凭证的集成，为电子档案全过程管理提供支撑。每年仅打印纸张节省就达到 120 万元，以保障了数据追溯检索的便利性。",
    tags: ["电子档案", "降本增效", "数据追溯"]
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
