

const cases = [
  {
    company: '贵州茅台',
    title: '构建"战略、计划、预算、绩效"四位一体闭环',
    description: '通过 SPE 方案实现全面预算管理体系的重构，达成了预算编制的精细化与执行控制的刚性化，支撑集团战略目标的精准落地。',
    tags: ['白酒行业', '全面预算', '绩效考核']
  },
  {
    company: '云投集团',
    title: '实现集团公共 + 行业个性化的多业态管控',
    description: '针对大型综合性国企的复杂业态，建立了既统一管控又兼顾灵活性的预算管理平台，大幅提升了集团层面的资源配置效率。',
    tags: ['国资国企', '多业态', '集团管控']
  }
]

const clients = [
  '中国移动',
  '燕京啤酒',
  '包头能源',
  '广汽丰田',
  '三峡能源',
  '华光华能',
  '信维通信',
  '雅江清洁能源'
]

export default function CustomerSuccess() {
  return (
    <section className="py-24 bg-[#F7F8FA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2329] mb-4">
            行业领军企业的共同选择
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full" />
        </div>

        {/* Featured Cases */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {cases.map((item, idx) => (
            <div key={idx} className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-8 w-1 bg-[#E60012] rounded-full" />
                <h3 className="text-2xl font-bold text-[#1F2329]">
                  {item.company}
                </h3>
              </div>
              <h4 className="text-lg font-semibold text-[#0052D9] mb-4">
                {item.title}
              </h4>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="px-3 py-1 bg-slate-50 text-slate-500 text-xs font-medium rounded-full border border-slate-100">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos / Names */}
        <div className="text-center">
          <p className="text-slate-500 text-sm font-semibold uppercase tracking-widest mb-8">
            TRUSTED BY INDUSTRY LEADERS
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {clients.map((client, idx) => (
              <div key={idx} className="bg-white px-6 py-3 rounded-lg border border-slate-200 shadow-sm text-[#1F2329] font-bold text-sm md:text-base">
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
