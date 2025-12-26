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
    desc: '业财税费票一体化，自动化分录与智能化报表，提升财务核算效率 [60]%。',
    icon: <Calculator className="w-6 h-6 shrink-0" />
  },
  {
    name: '数智财资',
    desc: '全行库实时连接，资金可视化监控，智能化收付管理，降低资金风险。',
    icon: <Wallet className="w-6 h-6 shrink-0" />
  },
  {
    name: '智慧采购',
    desc: '闭环的阳光采购体系，供应商精准协同，有效降低采购成本 [15]%。',
    icon: <ShoppingCart className="w-6 h-6 shrink-0" />
  },
  {
    name: '敏捷供应链',
    desc: '产供销一体化联动，实时库存预警，库存周转率提升 [25]%。',
    icon: <Truck className="w-6 h-6 shrink-0" />
  },
  {
    name: '智能制造',
    desc: '需求驱动的柔性生产，精细化成本核算，缩短交货周期 [30]%。',
    icon: <Factory className="w-6 h-6 shrink-0" />
  },
  {
    name: '数智人力',
    desc: '全生命周期员工服务，数字化组织绩效，提升员工满意度。',
    icon: <Users2 className="w-6 h-6 shrink-0" />
  },
  {
    name: '协同办公',
    desc: '社交化办公新体验，角色化工作台，沟通效率提升 [40]%。',
    icon: <Briefcase className="w-6 h-6 shrink-0" />
  },
  {
    name: '数字营销',
    desc: '线上线下一体化，全渠道会员经营，驱动业绩持续增长。',
    icon: <TrendingUp className="w-6 h-6 shrink-0" />
  },
  {
    name: '合规税务',
    desc: '自动化税务申报，风险智能预警，确保全球化合规安全。',
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
