'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Clock, ShieldCheck, Zap } from 'lucide-react'

const metrics = [
  {
    label: "凭证自动化率",
    value: "99.4%",
    desc: "业务事项自动触发核算",
    icon: Zap,
    color: "text-blue-600"
  },
  {
    label: "结账周期缩短",
    value: "3-5 天",
    desc: "实时核算、自动抵销",
    icon: Clock,
    color: "text-[#E60012]"
  },
  {
    label: "对账成本降低",
    value: "60%+",
    desc: "业财同源，消除手工对账",
    icon: TrendingUp,
    color: "text-green-600"
  },
  {
    label: "合规风险识别",
    value: "99%以上",
    desc: "多准则、多币种实时监控",
    icon: ShieldCheck,
    color: "text-blue-900"
  }
]

const customers = [
  { name: '中信集团', logo: 'https://cdn.iconscout.com/icon/free/png-256/free-citic-bank-3421528-2854332.png', role: '大型央企 R2R 实践标杆' },
  { name: '国投集团', logo: 'https://www.sdic.com.cn/res/SDIC/images/logo.png', role: '集团财务共享与全球合并' },
  { name: '中国平煤神马', logo: 'http://www.ccpc.top/upload/201805/1526435860.png', role: '数智核算与管理报告转型' },
  { name: '德邦快递', logo: 'https://ts1.cn.mm.bing.net/th/id/R-C.387b3b3d4d7a8d9a8e0e0e0e0e0e0e0e?rik=...&pid=ImgRaw&r=0', role: '高频交易下的智能核算引擎' },
]

export default function ValueSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">赋能企业财务价值创造</h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            从&quot;价值记录者&quot;向&quot;价值创造者&quot;转型，构建世界一流财务体系。
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 text-center hover:shadow-lg transition-all"
            >
              <div className={`w-12 h-12 ${metric.color} bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm`}>
                <metric.icon size={24} />
              </div>
              <div className={`text-3xl font-black mb-2 ${metric.color}`}>
                {metric.value}
              </div>
              <div className="text-sm font-bold text-[#1F2329] mb-1">{metric.label}</div>
              <div className="text-xs text-slate-500">{metric.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* Customer Logo Wall */}
        <div className="pt-16 border-t border-slate-100">
           <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-10">Trusted by Global Leaders</p>
           <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60">
              {customers.map((c, i) => (
                <div key={i} className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-pointer">
                   <div className="h-12 flex items-center justify-center text-center">
                      <span className="text-lg font-bold text-slate-800">{c.name}</span>
                   </div>
                   <span className="text-[10px] text-slate-400 font-medium">{c.role}</span>
                </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  )
}
