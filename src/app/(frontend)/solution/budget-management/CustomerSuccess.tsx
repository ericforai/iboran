const cases = [
  {
    company: '贵州茅台',
    tag: '行业标杆',
    title: '构建“战略、计划、预算和绩效”四位一体体系',
    description: '通过 YonBIP 预算系统实现集团统筹与层级管控的平衡，实现从战略目标、经营计划、全面预算到绩效评价的经营管理闭环，支撑千亿级大型集团的精准管控。',
    result: '构建了全集团统一的预算编报告模型与实时控制中台。'
  },
  {
    company: '云投集团',
    tag: '复杂编报',
    title: '支撑多层级大规模组织实时在线编报',
    description: '面对数百家成员单位的复杂组织架构，实现五级次自动抵消合并。构建了集团公共+行业个性化的预算编制模型。',
    result: '集团预算数据汇总速度由天级缩短至秒级。'
  }
]

export default function CustomerSuccess() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">
            客户成功案例
          </h2>
          <p className="text-slate-500">
            赋能数千家头部企业，实现预算管控的全面升级
          </p>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mt-6" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((item, idx) => (
            <div key={idx} className="bg-[#F7F8FA] p-8 md:p-12 rounded-3xl relative overflow-hidden group">
               {/* Decorative icon background */}
               <div className="absolute top-[-10%] right-[-10%] text-slate-200 opacity-20 scale-150 group-hover:rotate-12 transition-transform duration-500">
                  <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="100" cy="100" r="100" fill="currentColor"/>
                  </svg>
               </div>
               
               <div className="relative z-10">
                  <div className="inline-block px-3 py-1 bg-white rounded-full text-xs font-bold text-[#E60012] mb-6 shadow-sm">
                    {item.tag}
                  </div>
                  <h3 className="text-2xl font-bold text-[#1F2329] mb-4 flex items-center gap-3">
                    {item.company}
                  </h3>
                  <div className="text-lg font-bold text-[#0052D9] mb-4 leading-snug">
                    {item.title}
                  </div>
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="pt-6 border-t border-slate-200 flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-green-600 font-bold text-xs">成果</span>
                    </div>
                    <p className="text-slate-800 font-medium">
                      {item.result}
                    </p>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
