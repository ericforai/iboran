'use client'

import { motion } from 'framer-motion'
import { AlertCircle, FileX, Clock, Sliders } from 'lucide-react'

const painPoints = [
  {
    icon: AlertCircle,
    title: '生产进度是&quot;黑箱&quot;',
    desc: '调度员跑断腿收集数据，老板看不见现场。订单进度全靠问，异常情况发现晚，交付延期风险高。'
  },
  {
    icon: FileX,
    title: '质量问题难追溯',
    desc: '纸质单据堆积如山，数据不连贯。一旦出现客诉，查不到具体批次、机台和责任人，无法精准定责与改进。'
  },
  {
    icon: Clock,
    title: '计件统计繁琐出错',
    desc: '月底统计员加班加点算工资，纸质报表易丢失、易出错。工人对工资条有异议，影响生产积极性。'
  },
  {
    icon: Sliders,
    title: '设备利用率不明',
    desc: '设备停机没人管，故障响应慢。OEE（设备综合效率）数据缺失，设备不仅也是资产，更是生产瓶颈。'
  }
]

export default function PainPoints() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            传统制造企业的痛点
          </h2>
          <p className="text-lg text-slate-600">
            告别粗放式管理，解决生产现场&quot;看不见、管不着、算不清&quot;的核心难题
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-red-100 hover:bg-red-50/30 transition-colors"
            >
              <div className="mb-4 text-red-500 bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-sm">
                <item.icon size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
