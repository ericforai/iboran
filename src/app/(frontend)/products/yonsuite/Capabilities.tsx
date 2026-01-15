'use client'

import { motion } from 'framer-motion'
import { 
  Calculator, 
  Wallet, 
  ShoppingCart, 
  Truck, 
  Factory, 
  Users2, 
  Briefcase, 
  TrendingUp, 
  Scale 
} from 'lucide-react'

const capabilities = [
  {
    name: '智能财务',
    desc: '数智飞轮核心，实现业财税费票一体化，自动化率提升 [80]%，支撑复杂准则核算。',
    icon: <Calculator className="w-6 h-6 shrink-0" />
  },
  {
    name: '数智财资',
    desc: '全场景财资管理，多级资金监控，智能化全球收付，实现企业资金价值最大化。',
    icon: <Wallet className="w-6 h-6 shrink-0" />
  },
  {
    name: '智慧采购',
    desc: '连接外部商业资源，实现阳光采购、电子招标与全球供应链协同。',
    icon: <ShoppingCart className="w-6 h-6 shrink-0" />
  },
  {
    name: '敏捷供应链',
    desc: '驱动业务闭环，实时库存可见，支持跨组织拨备与全球化多地点协同。',
    icon: <Truck className="w-6 h-6 shrink-0" />
  },
  {
    name: '智能制造',
    desc: '以需求驱动生产，支持柔性化制造与精细化成本控制，缩短 [35]% 交付周期。',
    icon: <Factory className="w-6 h-6 shrink-0" />
  },
  {
    name: '数智人力',
    desc: '全生命周期数字化管理，从招聘到算薪全线上化，提升人才效能与员工体验。',
    icon: <Users2 className="w-6 h-6 shrink-0" />
  },
  {
    name: '协同办公',
    desc: '社交化协同新体验，角色化智能工作台，让沟通与审批不再拖延。',
    icon: <Briefcase className="w-6 h-6 shrink-0" />
  },
  {
    name: '数字营销',
    desc: '全渠道触达客户，线上线下一体化经营，通过数据驱动精准营销与业绩增长。',
    icon: <TrendingUp className="w-6 h-6 shrink-0" />
  },
  {
    name: '合规税务',
    desc: '自动化纳税申报，实时税务风险监控，确保企业在全球化经营中的税务合规。',
    icon: <Scale className="w-6 h-6 shrink-0" />
  }
]


export default function Capabilities() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2329] mb-4">全场景 SaaS 核心能力</h2>
          <p className="text-slate-600">聚焦客户核心痛点，提供 9 大领域深耕服务，拒绝功能堆砌。</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="p-6 rounded-xl border border-slate-100 bg-slate-50/30 hover:bg-white hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-[#0052D9] mb-5">
                {cap.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1F2329] mb-3">{cap.name}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{cap.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
