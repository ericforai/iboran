'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Clock, ShieldCheck, Users } from 'lucide-react'

const metrics = [
  {
    icon: Clock,
    value: '50-70%',
    label: '合并周期缩短',
    description: '通过自动化采集与抵销，将季度合并天数从 15 天内压缩至 5 天。'
  },
  {
    icon: TrendingUp,
    value: '98%+',
    label: '数据自动获取率',
    description: '实现集团内部往来、权益数据的零手工录入，保障数据源头合规。'
  },
  {
    icon: Users,
    value: '80%',
    label: '报表岗人力释放',
    description: '将报表人员从重复的手工搬运、洗数中解脱，转型为财务分析与预测分析。'
  },
  {
    icon: ShieldCheck,
    value: '99%以上',
    label: '审计合规与追溯',
    description: '每一笔抵销调整均有迹可循，满足境内外监管及国际准则的严苛审计要求。'
  }
]

export default function ValueSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#1F2329] mb-8 leading-tight">
              数智化合并<br />
              <span className="text-[#0052D9]">重塑财务报告价值</span>
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              不仅仅是报表编制工具，更是集团经营管控的核心底座。通过实时的合并能力，让企业高层能够随时掌握集团全局经营全貌。
            </p>
            
            <div className="space-y-6">
              {[
                '告别 Excel 时代的手工核对与抵销',
                '满足国资监管、全球化审计等多元需求',
                '支撑从核算到分析的价值链升级'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-slate-700 font-medium">
                  <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                    <ShieldCheck size={16} />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-2 gap-6">
            {metrics.map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-[#F8FAFC] rounded-2xl border border-slate-100 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 text-[#0052D9]">
                  <metric.icon size={28} />
                </div>
                <div className="text-3xl font-black text-[#E60012] mb-2">{metric.value}</div>
                <div className="text-lg font-bold text-[#1F2329] mb-3">{metric.label}</div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {metric.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
