'use client'

import { motion } from 'framer-motion'
import { FileText, Database, Calculator, PieChart, ArrowRight } from 'lucide-react'

const steps = [
  {
    title: "业务驱动",
    desc: "全领域业务事项实时采集",
    icon: FileText,
    details: ["48+ 二级产品服务", "300+ 数据对接对象", "业务单据秒级转换"]
  },
  {
    id: "event-center",
    title: "事项中台",
    desc: "数智化会计中枢处理",
    icon: Database,
    details: ["事项法建模", "多准则规则适配", "五流合一校验"]
  },
  {
    title: "智能核算",
    desc: "机器人自动生成凭证",
    icon: Calculator,
    details: ["凭证自动生成 95%+", "实时多维核算", "智能关账引擎"]
  },
  {
    title: "经营决策",
    desc: "数据驱动的价值创造",
    icon: PieChart,
    details: ["管理报表穿透", "全球司库看板", "纳税风险监控"]
  }
]

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">基于&quot;事项法会计&quot;的业财融合架构</h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            打破传统财务&quot;宏观汇总&quot;局限，通过颗粒度更细的&quot;业务事项&quot;驱动财务核算，还原业务真像，实现业财数据的无缝穿透。
          </p>
        </div>

        <div className="relative">
          {/* Architecture Visual */}
          <div className="hidden lg:grid grid-cols-4 gap-8 mb-16 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 relative group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-[#0052D9] mb-6 group-hover:bg-[#E60012] group-hover:text-white transition-colors">
                  <step.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#1F2329] mb-3">{step.title}</h3>
                <p className="text-slate-500 text-sm mb-6">{step.desc}</p>
                <ul className="space-y-2">
                  {step.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-200" />
                      {detail}
                    </li>
                  ))}
                </ul>

                {idx < steps.length - 1 && (
                  <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 z-[-1] text-slate-300">
                     <ArrowRight size={24} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-100 to-transparent -z-0" />
        </div>
      </div>
    </section>
  )
}
