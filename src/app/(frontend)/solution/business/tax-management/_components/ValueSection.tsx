'use client'

import { motion } from 'framer-motion'

const metrics = [
  {
    value: "+80%",
    label: "税务申报效率提升",
    desc: "从数天缩短至数分钟，释放财务人员核心精力"
  },
  {
    value: "100%",
    label: "数据准确性",
    desc: "全流程自动化采集与计算，杜绝人工录入差错"
  },
  {
    value: "95%",
    label: "税务风险降低",
    desc: "事前事中智能预警，有效规避合规风险与罚款"
  },
  {
    value: "-30%",
    label: "综合管理成本降低",
    desc: "减少低价值重复劳动，优化税务人力资源配置"
  }
]

export default function ValueSection() {
  return (
    <section className="py-24 bg-[#001529] text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute -top-[50%] -left-[20%] w-[80%] h-[200%] bg-gradient-to-r from-blue-900 to-transparent rotate-12 blur-3xl"></div>
        <div className="absolute top-[20%] right-[10%] w-[40%] h-[80%] bg-gradient-to-b from-red-900 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            不仅仅是工具，更是管理价值的跃迁
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            帮助企业从被动合规转向主动管理，构建数据驱动的税务治理新范式。
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl text-center hover:bg-white/10 transition-colors"
            >
              <div className="text-4xl lg:text-5xl font-bold text-[#E60012] mb-4 font-mono tracking-tighter">
                {metric.value}
              </div>
              <div className="text-lg font-bold text-white mb-2">
                {metric.label}
              </div>
              <div className="text-slate-400 text-sm">
                {metric.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
