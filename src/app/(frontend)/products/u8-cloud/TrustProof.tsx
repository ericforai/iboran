'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Trophy, BadgeCheck, Users, Globe2, Building } from 'lucide-react'

const stats = [
  { label: '企业客户', value: '6000+', icon: <Users className="w-5 h-5" /> },
  { label: '信创互认证', value: '68+', icon: <ShieldCheck className="w-5 h-5" /> },
  { label: 'OpenAPI 连接', value: '610+', icon: <Globe2 className="w-5 h-5" /> },
  { label: '信创技术积累', value: '5年+', icon: <Trophy className="w-5 h-5" /> }
]

const cases = [
  {
    company: '南京方生和医药科技',
    industry: '制药行业',
    description: '建立完善集团管控体系，实现多组织财务供应链一体化及委外业务管理。',
    result: '响应速度提升 [40]%'
  },
  {
    company: '陕西老蜂农生物科技',
    industry: '生物科技',
    description: '构建产供销财一体化平台，实现一键报表合并及精细化成本管理。',
    result: '结账效率提升 [50]%'
  },
  {
    company: '赤峰东荣羊绒制品',
    industry: '纺织行业',
    description: '专注于集团管控与一体化业务协同，提升整体经营效率。',
    result: '管理成本降低 [25]%'
  }
]

export default function TrustProof() {
  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2329] mb-4">领先企业的数智化选择</h2>
          <p className="text-lg text-slate-600">深耕成长型集团市场，以过硬的技术与成熟的行业经验，助力企业稳健发展。</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm text-center"
            >
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#0052D9] mx-auto mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-[#1F2329] mb-1">{stat.value}</div>
              <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Case Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((card, idx) => (
            <motion.div
              key={card.company}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded bg-slate-50 flex items-center justify-center">
                  <Building className="w-5 h-5 text-slate-400" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#1F2329]">{card.company}</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">{card.industry}</div>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-6 h-12 overflow-hidden">
                {card.description}
              </p>
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BadgeCheck className="w-4 h-4 text-emerald-500" />
                  <span className="text-xs font-bold text-slate-700">交付成果</span>
                </div>
                <div className="text-emerald-500 font-bold">{card.result}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
