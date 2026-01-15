import { Quote } from 'lucide-react'

const customers = [
  { name: '中信集团', logo: 'CITIC' },
  { name: '国投集团', logo: 'SDIC' },
  { name: '成都高投', logo: 'CDHT' },
  { name: '国联集团', logo: 'GUOLIAN' },
  { name: '海信集团', logo: 'Hisense' },
  { name: '顺丰控股', logo: 'SF Holding' },
]

export default function CustomerSuccess() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold text-slate-400 uppercase tracking-widest mb-12">
            值得信任的全球伙伴
          </h2>
          
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
            {customers.map((customer, i) => (
              <div key={i} className="text-2xl md:text-3xl font-black italic tracking-tighter text-slate-800">
                {customer.name}
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 italic relative">
             <Quote className="absolute top-6 left-6 text-blue-100" size={48} />
             <p className="text-slate-600 mb-6 relative z-10">
               &quot;通过用友合并报表系统，我们将集团 300 多家成员单位的合并周期缩短了 60%。智能抵销引擎不仅提高了效率，更确保了数据的高度合规，让我们的财务报告更加透明、可信。&quot;
             </p>
             <div className="font-bold text-[#1F2329]">—— 某大型央企 财务部总经理</div>
          </div>
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 italic relative">
             <Quote className="absolute top-6 left-6 text-blue-100" size={48} />
             <p className="text-slate-600 mb-6 relative z-10">
               &quot;在多准则转换与多币种折算方面，用友展现了强大的专业度。现在我们可以一键生成符合 HKFRS、IFRS 以及境内准则的各类报表，极大缓解了我们多头报送的压力。&quot;
             </p>
             <div className="font-bold text-[#1F2329]">—— 某跨国制造集团 财务总监</div>
          </div>
        </div>
      </div>
    </section>
  )
}
