'use client'



const customers = [
  { name: '中国一汽', logo: 'faw' },
  { name: '碧桂园', logo: 'bgy' },
  { name: '南方航空', logo: 'csair' },
  { name: '中兴通讯', logo: 'zte' },
  { name: '三一重工', logo: 'sany' },
  { name: '海底捞', logo: 'haidilao' }
]

export default function CustomerSuccess() {
  return (
    <section className="py-20 bg-[#F7F8FA] border-t border-slate-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="lg:w-1/3 text-center lg:text-left">
            <h2 className="text-2xl font-bold text-[#1F2329] mb-4">
              500+ 行业领军企业的共同选择
            </h2>
            <p className="text-slate-600 mb-6">
              无论是制造业巨头还是新零售先锋，泊冉软件 L2C 解决方案通过标准化产品与行业化最佳实践，助力企业实现销售业绩的指数级增长。
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-8">
              <div>
                <div className="text-3xl font-bold text-[#0052D9]">￥100B+</div>
                <div className="text-sm text-slate-500 mt-1">年处理交易额</div>
              </div>
              <div className="w-px h-10 bg-slate-200"></div>
              <div>
                <div className="text-3xl font-bold text-[#E60012]">98%</div>
                <div className="text-sm text-slate-500 mt-1">客户续约率</div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {customers.map((customer, idx) => (
                <div 
                  key={idx}
                  className="bg-white h-24 rounded-lg border border-slate-100 flex items-center justify-center p-4 hover:shadow-md transition-shadow grayscale hover:grayscale-0 opacity-80 hover:opacity-100"
                >
                  <span className="font-bold text-slate-400 text-lg">{customer.name}</span>
                  {/* Real logos would be used here, using Image component or SVG */}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
