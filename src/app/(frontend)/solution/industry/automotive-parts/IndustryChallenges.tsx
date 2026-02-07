'use client'

import { motion } from 'framer-motion'
import { Link2, ShieldCheck, Zap, BarChart3 } from 'lucide-react'

const challenges = [
  {
    title: '供应链协同效率低',
    description: '与主机厂（OEM）及多级供应商之间的计划同步慢，导致库存呆滞或生产停工待料。',
    icon: Link2,
    dataPoint: '40%',
    dataLabel: '协作效率提升空间',
    color: 'blue'
  },
  {
    title: '品质合规追溯难',
    description: 'IATF16949体系落地难，产品批次、序列号追溯不完整，难以快速应对主机厂召回要求。',
    icon: ShieldCheck,
    dataPoint: '近100%',
    dataLabel: '正反向追溯率要求',
    color: 'red'
  },
  {
    title: '研发与制造脱节',
    description: '新品研发周期短、变更频繁，BOM版本管理混乱，导致采购和生产产生大量呆滞物资。',
    icon: Zap,
    dataPoint: '40%+',
    dataLabel: '研发沟通成本占比',
    color: 'orange'
  },
  {
    title: '成本核算不精细',
    description: '多种车型、海量零件，传统核算难以精确到每一个工单的料工费，影响报价竞争力。',
    icon: BarChart3,
    dataPoint: '20%',
    dataLabel: '潜在成本优化空间',
    color: 'emerald'
  }
]

export default function IndustryChallenges() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
            汽配企业正面临的 <span className="text-[#E60012]">核心挑战</span>
          </h2>
          <p className="text-lg text-slate-600">
            在汽车产业加速去中心化、数字化转型的背景下，零配件企业必须穿透管理黑盒，实现精准协同。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-red-100 hover:shadow-xl hover:shadow-red-500/5 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110
                ${challenge.color === 'blue' ? 'bg-blue-100 text-blue-600' : 
                  challenge.color === 'red' ? 'bg-red-100 text-[#E60012]' :
                  challenge.color === 'orange' ? 'bg-orange-100 text-orange-600' :
                  'bg-emerald-100 text-emerald-600'}`}
              >
                <challenge.icon className="w-8 h-8" />
              </div>

              <h3 className="text-xl font-bold mb-4 text-slate-900">{challenge.title}</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                {challenge.description}
              </p>

              <div className="mt-auto pt-6 border-t border-slate-200/60">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-2xl font-bold text-slate-900">{challenge.dataPoint}</span>
                  <span className="text-sm font-medium text-slate-500">{challenge.dataLabel}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
