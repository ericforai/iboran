
'use client'

import { motion } from 'framer-motion'
import { Database, FileSpreadsheet, EyeOff, BarChart } from 'lucide-react'

const painPoints = [
  {
    icon: Database,
    title: '数据孤岛严重',
    description: '分散在ERP、CRM、HR等多个业务系统中的数据无法互通，不仅难以统一管理，更导致数据口径不一致，决策依据大打折扣。'
  },
  {
    icon: FileSpreadsheet,
    title: '报表制作低效',
    description: '传统报表依赖IT人员开发，业务需求响应慢、周期长。海量Excel手工合并费时费力，且极易出错，无法满足敏捷运营需求。'
  },
  {
    icon: EyeOff,
    title: '经营状况看不清',
    description: '管理者缺乏实时、全局的经营视图，只能依赖滞后的月报/季报进行决策，难以在瞬息万变的市场环境中及时发现问题与机会。'
  },
  {
    icon: BarChart,
    title: '可视化效果差',
    description: '传统报表界面枯燥单调，缺乏美观与交互性，难以在大屏展示、汇报演示等场景中有效传递数据价值与企业形象。'
  }
]

export default function PainPoints() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-red-50 text-red-600 font-medium text-sm mb-4"
          >
            业务挑战
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
          >
            企业数据化运营面临的困局
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            在数字化转型过程中，大多数企业面临着“有数据无价值、有报表无洞察”的尴尬局面
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow group"
            >
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <point.icon className="w-7 h-7 text-[#E60012]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {point.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
