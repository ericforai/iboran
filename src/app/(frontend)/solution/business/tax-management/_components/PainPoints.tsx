'use client'

import { AlertTriangle, Clock, Database, Layers } from 'lucide-react'
import { motion } from 'framer-motion'

interface PainPoint {
  icon: React.ElementType
  title: string
  description: string
  color: string
}

const points: PainPoint[] = [
  {
    icon: AlertTriangle,
    title: "金税四期合规压力巨增",
    description: "随着'以数治税'时代的到来，税务机关利用大数据对企业进行全方位监控，企业传统的税务管理模式难以应对实时合规要求，税务风险激增。",
    color: "text-red-600 bg-red-50"
  },
  {
    icon: Clock,
    title: "人工算税申报效率低下",
    description: "大量依赖手工Excel算税和填报，不仅耗时耗力，且极易出现人为差错。在纳税申报高峰期，财务人员加班加点仍难以保证及时性。",
    color: "text-amber-600 bg-amber-50"
  },
  {
    icon: Database,
    title: "业财税数据孤岛严重",
    description: "业务系统、财务系统与税务系统之间缺乏有效集成，数据标准不统一，导致底账数据采集困难，难以实现税务数据的自动沉淀与追溯。",
    color: "text-blue-600 bg-blue-50"
  },
  {
    icon: Layers,
    title: "集团税务管控能力薄弱",
    description: "对于其大型集团企业，总部难以实时掌握各分、子公司的税务缴纳情况和风险状态，缺乏统一的税务管理视图，难以进行全局税务筹划。",
    color: "text-purple-600 bg-purple-50"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2329] mb-4">
              传统税务管理面临的严峻挑战
            </h2>
            <div className="w-20 h-1.5 bg-[#E60012] mx-auto rounded-full" />
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              在数字化监管全面升级的背景下，企业税务管理正在经历从“以票管税”向“以数治税”的深刻变革。
            </p>
          </motion.div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${point.color} group-hover:scale-110`}>
                <point.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#1F2329] mb-4 group-hover:text-[#E60012] transition-colors">
                {point.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
