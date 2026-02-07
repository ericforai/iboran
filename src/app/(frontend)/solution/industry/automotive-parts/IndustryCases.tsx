'use client'

import { motion } from 'framer-motion'
import { Quote, ArrowUpRight } from 'lucide-react'

const cases = [
  {
    company: '一汽集团',
    title: '全方位数字化转型',
    desc: '从集团管控、财务共享到营销服务平台的全面重构。',
    quote: '数字化转型使我们的开发效率提升了40%以上，构建了一套逻辑清晰、实时在线的运营体系。',
    results: ['开发效率 +40%', '组织活力全面激发', '业务实时在线']
  },
  {
    company: '亚大集团',
    title: '全球化管控与分子工厂协同',
    desc: '赋能矩阵式事业部管控，覆盖全国60多家生产销售公司。',
    quote: '通过MRP实现了资源统筹规划，产供销有效协同，打通了SRM、MES等系统的集成孤岛。',
    results: ['业财税一体化', '产供销高效协同', '集团化精细考核']
  },
  {
    company: '江铃汽车',
    title: '多制造模式下的业务管控',
    desc: '针对新能源、卡车、客车等多种车型的全生命周期数字化管理。',
    quote: '物流流转效率提升了40%，齐套率提升30%，有效控制了多模式下的管理风险。',
    results: ['齐套率 +30%', '物流效率 +40%', '订单可履行率 +20%']
  }
]

export default function IndustryCases() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
              见证 <span className="text-[#0052D9]">汽车头部企业</span> 的数智化蝶变
            </h2>
            <p className="text-lg text-slate-600">
              从中国一汽到江铃汽车，我们已助力众多汽配及整车企业迈向数智化新高度。
            </p>
          </div>
          <motion.button
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 text-[#0052D9] font-bold group"
          >
            查看更多行业案例
            <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((c, index) => (
            <motion.div
              key={c.company}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col h-full bg-white rounded-3xl p-8 border border-slate-100 hover:shadow-2xl hover:shadow-blue-500/5 transition-all group"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="text-xl font-black text-slate-900 tracking-tight">{c.company}</div>
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:text-blue-500 transition-colors">
                  <Quote className="w-5 h-5 fill-current" />
                </div>
              </div>

              <h3 className="text-lg font-bold text-blue-600 mb-4">{c.title}</h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">{c.desc}</p>
              
              <div className="relative mb-8">
                 <div className="absolute top-0 left-0 w-1 h-full bg-slate-100 rounded-full" />
                 <p className="pl-6 text-slate-700 italic text-sm leading-relaxed">
                   &quot;{c.quote}&quot;
                 </p>
              </div>

              <div className="mt-auto pt-6 border-t border-slate-50 grid grid-cols-2 gap-y-3">
                {c.results.map((r) => (
                  <div key={r} className="flex items-center gap-2 text-xs font-bold text-slate-900">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {r}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
