'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const cases = [
  {
    company: '大型能源集团',
    scale: '年归档量 300万+',
    result: '通过电子档案共享中心化管理，全国 50+ 分支机构实现秒级调档，审计出差成本降低 60%。',
    tag: '跨组织协同'
  },
  {
    company: '某知名制造企业',
    scale: '业财档一体化',
    result: '解决了全电发票归档难点，实现了从采购到归档的全链路数字闭环，整理效率提升 85%。',
    tag: '自动化归档'
  }
]

export default function CustomerSuccess() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3">
             <h2 className="text-4xl font-bold text-[#1F2329] mb-6">值得信赖的选择</h2>
             <div className="w-16 h-1 bg-[#E60012] mb-8" />
             <p className="text-slate-500 mb-10 leading-relaxed">
               从世界 500 强到中大型企业，泊冉软件已帮助众多行业领军者建立了合规、高效、可持续的电子档案管理体系。
             </p>
             
             {/* Simple Logo Placeholder Grid */}
             <div className="grid grid-cols-2 gap-4">
               {[1, 2, 3, 4].map(i => (
                 <div key={i} className="h-16 bg-slate-50 rounded-xl border border-dashed border-slate-200 flex items-center justify-center text-[10px] text-slate-300 font-bold uppercase tracking-wider">
                   Logo {i}
                 </div>
               ))}
             </div>
          </div>
          
          <div className="lg:w-2/3 flex flex-col md:flex-row gap-8">
            {cases.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="flex-1 bg-slate-50 p-10 rounded-[40px] relative overflow-hidden group border border-transparent hover:border-blue-100 hover:bg-white transition-all duration-500 hover:shadow-2xl hover:shadow-blue-50"
              >
                <Quote className="absolute -top-4 -right-4 w-32 h-32 text-slate-200/50 group-hover:text-blue-100 transition-colors" />
                
                <div className="inline-block px-3 py-1 bg-blue-100 text-[#0052D9] text-[10px] font-bold rounded-full mb-6 uppercase tracking-widest">
                  {item.tag}
                </div>
                
                <h3 className="text-2xl font-bold text-[#1F2329] mb-2">{item.company}</h3>
                <div className="text-sm font-medium text-[#0052D9] mb-6">{item.scale}</div>
                
                <p className="text-slate-600 leading-relaxed relative z-10">
                  “{item.result}”
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
