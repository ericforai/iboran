
'use client'

import { motion } from 'framer-motion'


const customers = [
    { name: '某大型央企', desc: '构建集团级数据中台，实现通过数据驱动的战略管控' },
    { name: '知名制造企业', desc: '打造数智化工厂，实时监控产线效能，提升OEE' },
    { name: '头部零售集团', desc: '全渠道营销数据分析，精准洞察消费者画像' },
    { name: '高科技独角兽', desc: '基于IPO合规要求，构建精细化财务分析体系' },
]

export default function CustomerSuccess() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            千行百业的共同选择
          </h2>
          <p className="text-lg text-slate-600">
            助力众多行业头部企业通过数据创造价值
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
           {customers.map((c, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="bg-slate-50 rounded-xl p-8 border border-slate-100 hover:shadow-lg transition-all text-center"
             >
                <div className="w-16 h-16 bg-slate-200 rounded-full mx-auto mb-4 flex items-center justify-center text-slate-400 text-xs">
                    Logo
                </div>
                <h3 className="font-bold text-lg mb-2">{c.name}</h3>
                <p className="text-sm text-slate-500">{c.desc}</p>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  )
}
