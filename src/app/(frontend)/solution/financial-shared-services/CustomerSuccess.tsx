'use client'

import Image from 'next/image'

// Generic logos for enterprise clients
const CUSTOMERS = [
  '中国建筑', '国家电网', '中国移动', '南方航空', 
  '碧桂园', '三一重工', '新华保险', '海底捞'
]

export default function CustomerSuccess() {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-[#1F2329] mb-12">
          深受 500+ 大型企业信赖的财务共享选择
        </h2>
        
        <div className="flex flex-wrap justify-center gap-8 lg:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Using text placeholders enriched with styling since we don't have actual logo assets handy */}
          {CUSTOMERS.map((name, idx) => (
             <div key={idx} className="text-xl font-bold text-slate-400 hover:text-[#0052D9] cursor-default transition-colors select-none">
               {name}
             </div>
          ))}
        </div>
      </div>
    </section>
  )
}
