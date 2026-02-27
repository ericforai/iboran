'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Utensils, Beaker, ShoppingBag, Landmark, ArrowRight } from 'lucide-react'

const industries = [
  {
    name: '消费品/商贸',
    icon: <Utensils className="w-8 h-8" />,
    color: 'bg-orange-500',
    tags: ['营销一体化', '全渠道库存', '会员经营'],
    desc: '助力食品餐饮、快消品企业实现从工厂到终端的全链路协同。'
  },
  {
    name: '医疗医药',
    icon: <Beaker className="w-8 h-8" />,
    color: 'bg-emerald-500',
    tags: ['GSP 合规', '批次追溯', '质量管理'],
    desc: '支持预研、生产、流通全流程合规管理，保障生命安全。'
  },
  {
    name: '现代服务业',
    icon: <Landmark className="w-8 h-8" />,
    color: 'bg-blue-500',
    tags: ['项目计费', '工时管理', '业财集成'],
    desc: '为咨询、软件、专业服务等企业提供精细化的项目核算与运营。'
  },
  {
    name: '新零售/跨境',
    icon: <ShoppingBag className="w-8 h-8" />,
    color: 'bg-purple-500',
    tags: ['多平台对接', '多准则核算', '全球运营'],
    desc: '支撑跨境电商、连锁零售企业快速布局全球市场。'
  }
]

export default function IndustrySolutions() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2329] mb-4">深耕垂直行业，懂业务更懂你</h2>
            <p className="text-slate-600 italic">
              YonSuite 不仅提供通用的管理工具，更针对高成长行业的特殊业务场景提供深度适配方案。
            </p>
          </div>
          <Link href="/solution" className="text-[#0052D9] font-bold flex items-center gap-2 hover:underline">
            查看更多行业方案
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className={`w-16 h-16 ${ind.color} text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {ind.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1F2329] mb-3">{ind.name}</h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                {ind.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {ind.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-500 text-[10px] font-medium rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
