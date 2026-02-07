'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Clock, ShieldCheck, Zap } from 'lucide-react'

const values = [
  {
    label: '订单可履行率',
    value: '20%',
    direction: 'up',
    icon: TrendingUp,
    desc: '通过产销协同与动态排产，核心客户履约率显著提升。'
  },
  {
    label: '物流流转效率',
    value: '40%',
    direction: 'up',
    icon: Zap,
    desc: 'JIT/JIS拉动机制减少了线边仓积压，加速周转。'
  },
  {
    label: '研发沟通效率',
    value: '40%+',
    direction: 'up',
    icon: Clock,
    desc: 'PLM与ERP同源管理，缩短了从设计到制造的周期。'
  },
  {
    label: '质量追溯准确率',
    value: '99%以上',
    direction: 'up',
    icon: ShieldCheck,
    desc: 'IATF16949标准自动落地，满足整车厂严格追溯合规。'
  }
]

export default function ValueSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900 leading-tight">
              数字化转型转化的 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E60012] to-red-500">
                确定性业务价值
              </span>
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              我们不仅提供工具，更致力于通过数智化平台优化流程，为汽配企业带来可衡量的经济效益与管理提升。
            </p>
            
            <div className="space-y-6">
              {values.slice(0, 2).map((v) => (
                <div key={v.label} className="flex gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-red-500 shrink-0">
                    <v.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl font-black text-slate-900">{v.value}</span>
                      <span className="text-sm font-bold text-slate-400 uppercase tracking-tighter">{v.label}</span>
                    </div>
                    <p className="text-slate-500 text-sm">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:translate-y-12">
            {values.map((v, idx) => (
              <motion.div
                key={v.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`p-10 rounded-3xl border ${idx % 2 === 1 ? 'bg-slate-900 text-white border-slate-800' : 'bg-white text-slate-900 border-slate-100 shadow-xl shadow-slate-200/50'}`}
              >
                <div className="text-4xl font-black mb-4 flex items-baseline gap-1">
                   {v.value}
                   <span className="text-sm font-bold opacity-60">+</span>
                </div>
                <div className="text-lg font-bold mb-4">{v.label}</div>
                <div className={`h-1 w-12 rounded-full mb-6 ${idx % 2 === 1 ? 'bg-red-500' : 'bg-[#0052D9]'}`} />
                <p className={`text-sm leading-relaxed ${idx % 2 === 1 ? 'text-slate-400' : 'text-slate-500'}`}>
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
