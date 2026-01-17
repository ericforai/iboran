'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, Calculator, ShieldOff } from 'lucide-react'

const painPoints = [
  {
    icon: AlertTriangle,
    title: '授权冲突风险',
    description: '销售在签单前无法实时查看 IP 在特定品类、地域、时间段的余量，导致超量授权或资源浪费。',
    color: 'red'
  },
  {
    icon: Calculator,
    title: '分成对账泥潭',
    description: '保底费（MG）与提成费（Royalty）计算规则多变，财务每月花费 15-20 天手工对账，严重滞后。',
    color: 'amber'
  },
  {
    icon: ShieldOff,
    title: '资产流失隐患',
    description: '高清图库分发缺乏溯源，被授权商违规超范围使用 IP，缺乏有效的数字化监控手段。',
    color: 'orange'
  }
]

export default function PainPoints() {
  return (
    <section className="py-24 bg-[#F7F8FA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#1F2329] mb-4">
              行业深度洞察：IP 运营的三大"效率杀手"
            </h2>
            <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6" />
            <p className="text-slate-600 max-w-2xl mx-auto">
              在当前 IP 爆发式增长的背景下，传统的手工管理已成为企业增长的瓶颈
            </p>
          </motion.div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {painPoints.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow group"
            >
              <div className={`w-14 h-14 bg-${point.color}-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <point.icon className={`w-7 h-7 text-${point.color}-500`} />
              </div>
              <h3 className="text-xl font-bold text-[#1F2329] mb-3">
                {point.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
