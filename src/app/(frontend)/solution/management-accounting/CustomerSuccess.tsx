'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const CUSTOMERS = [
  '大型钢铁集团', '装备制造企业', '高新科技龙头', '能源电力集团', 
  '现代服务领军', '跨国制药企业', '汽车零部件商', '快消品巨头'
]

export default function CustomerSuccess() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">
            助力千行百业实现数智化决策
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full" />
        </div>

        {/* Featured Case Study */}
        <div className="max-w-4xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#F8FAFC] p-8 md:p-12 rounded-3xl border border-slate-100 relative"
          >
            <Quote className="absolute top-8 left-8 text-blue-100 w-16 h-16 -z-0" />
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-[#0052D9] mb-4">某大型钢铁集团 (H企业) 成功案例</h3>
              <p className="text-lg text-slate-700 italic mb-8 leading-relaxed">
                “通过引入 YonBIP 管理会计，我们实现了全国数十家分支机构的‘一日结账’目标。更为关键的是，事项会计模式让我们第一次看清了产成品到原材料明细的100%还原，真正做到了业财深度融合，为反倾销应对与内部绩效考核提供了坚实的数据底座。”
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  CFO
                </div>
                <div>
                  <div className="font-bold text-slate-900">数字化转型负责人</div>
                  <div className="text-sm text-slate-500">某世界500强钢铁集团</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 lg:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
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
