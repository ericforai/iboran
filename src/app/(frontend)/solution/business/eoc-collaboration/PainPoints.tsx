'use client'

import { AlertTriangle, Clock, Database, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'

const painPoints = [
  {
    icon: Clock,
    title: '重复性手动工作',
    description: '员工平均每天花费 2 小时在排程、会议纪要等重复性任务上，而非增值工作。',
  },
  {
    icon: Database,
    title: '知识碎片化',
    description: '重要文档和经验散落在各种软件中，查找现有信息比从头创建还要难。',
  },
  {
    icon: AlertTriangle,
    title: '执行延迟',
    description: '会议中的决定往往缺乏立即跟进，导致响应缓慢和执行偏差。',
  },
  {
    icon: ShieldCheck,
    title: '安全与合规',
    description: '企业面临日益增长的数据主权、私有化部署和信创合规压力。',
  },
]

export default function PainPoints() {
  return (
    <section className="py-24 bg-[#F7F8FA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-[#1F2329] mb-4"
          >
            行业面临的协同痛点
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            className="h-1 bg-[#E60012] mx-auto rounded-full"
          />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <point.icon className="w-6 h-6 text-[#E60012]" />
              </div>
              <h3 className="text-lg font-bold text-[#1F2329] mb-3">
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
