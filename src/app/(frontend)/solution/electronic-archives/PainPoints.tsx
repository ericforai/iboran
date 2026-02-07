'use client'

import { AlertTriangle, Clock, DollarSign, ShieldAlert } from 'lucide-react'
import { motion } from 'framer-motion'

const points = [
  {
    icon: DollarSign,
    title: '成本与规模挑战',
    description: '档案数量随业务扩张呈指数级增加，传统管理模式下库房租赁、纸张整理成本极高。',
    stat: '降低 33% 管理费用'
  },
  {
    icon: ShieldAlert,
    title: '合规监管压力',
    description: '国家政策对电子凭证归档要求日益严格，手动把握标准困难，面临极高的法律合规风险。',
    stat: '内置四性检测标准'
  },
  {
    icon: Clock,
    title: '调档审计低效',
    description: '异地凭证调阅需长途邮寄，人工翻阅效率极低，单笔凭证获取通常耗时 0.5 天以上。',
    stat: '调档效率提升 99%'
  },
  {
    icon: AlertTriangle,
    title: '数据安全风险',
    description: '纸质档案面临丢失、损毁、受潮等物理损坏风险，且缺乏全生命周期的权限管控与操作留痕。',
    stat: '数据 近100% 备份保障'
  }
]

export default function PainPoints() {
  return (
    <section className="py-32 bg-[#F7F8FA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-[#1F2329] mb-6">
            档案管理面临的严峻挑战
          </h2>
          <div className="w-20 h-1.5 bg-[#E60012] mx-auto rounded-full mb-6" />
          <p className="text-slate-500 max-w-2xl mx-auto">
            在数字化转型的浪潮下，传统纸质档案管理已成为制约企业运营效率与合规化的瓶颈。
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#E60012] group-hover:text-white transition-colors duration-300">
                <point.icon className="w-7 h-7 text-[#E60012] group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1F2329] mb-4">
                {point.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {point.description}
              </p>
              <div className="pt-6 border-t border-slate-50">
                <span className="text-sm font-bold text-[#0052D9]">{point.stat}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
