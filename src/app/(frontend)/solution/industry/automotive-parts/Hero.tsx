'use client'

import { motion } from 'framer-motion'
import { Factory, Settings2, Package, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

const modules = [
  { icon: Settings2, label: '数字化研产' },
  { icon: Factory, label: '精益制造' },
  { icon: Package, label: '柔性供应' },
  { icon: ShieldCheck, label: '全周期追溯' },
]

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden bg-slate-50">
      {/* 背景装饰 */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* 左侧: 文字内容 (60%) */}
          <div className="flex-[1.5] text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-[#E60012] text-sm font-bold mb-8"
            >
              <Factory className="w-4 h-4" />
              汽配行业数字化解决方案
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-[1.15]"
            >
              打通整车厂协同黑盒 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052D9] to-blue-500">
                重塑汽配制造价值链
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed"
            >
              泊冉软件基于用友YONBIP平台，为汽配企业提供从主机厂协同、精益生产到全周期质量追溯的端到端解决方案，助力企业实现 IATF16949 体系的高效落地。
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-12"
            >
              <Link
                href="/about/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-[#E60012] text-white font-bold rounded-xl hover:bg-red-700 transition-all shadow-lg shadow-red-500/25"
              >
                免费预约行业方案演示
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="https://consult.boran.com.cn"
                className="px-8 py-4 border-2 border-[#0052D9] text-[#0052D9] font-bold rounded-xl hover:bg-blue-50 transition-all"
              >
                获取行业白皮书
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center lg:justify-start gap-8"
            >
              {['一汽集团', '北汽集团', '江铃汽车'].map((client) => (
                <div key={client} className="flex items-center gap-2 text-slate-400 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  {client}
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* 右侧: 视觉元素 (40%) */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative"
            >
              {/* 装饰卡片 */}
              <div className="absolute inset-0 bg-blue-600/5 rounded-3xl -rotate-6 scale-105" />
              
              <div className="relative bg-white p-8 rounded-3xl shadow-2xl border border-slate-100">
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center text-[#E60012]">
                      <Factory className="w-7 h-7" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-400 uppercase tracking-wider text-xs">Industry Solution</div>
                      <div className="text-xl font-bold text-slate-900">汽配数智化引擎</div>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-emerald-100 text-emerald-600 rounded-full text-xs font-bold">
                    BIP Powered
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-10">
                  {modules.map((m, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-red-100 transition-colors group">
                      <m.icon className="w-6 h-6 text-[#0052D9] mb-2 group-hover:scale-110 transition-transform" />
                      <div className="text-sm font-bold text-slate-900">{m.label}</div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-600 to-[#0052D9] text-white">
                    <div className="text-xs opacity-80 mb-1">关键性能指标提高</div>
                    <div className="flex items-end justify-between">
                      <div className="text-3xl font-extrabold leading-none">40%</div>
                      <div className="text-sm font-medium opacity-90">物流流转效率</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-slate-900 text-white">
                      <div className="text-xs opacity-60 mb-1">订单可履行率</div>
                      <div className="text-xl font-bold text-red-500">+20%</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                      <div className="text-xs text-slate-500 mb-1 text-xs">研发沟通成本</div>
                      <div className="text-xl font-bold text-slate-900">-15%</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 浮动元素 */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 p-4 bg-white rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 z-20"
              >
                <div className="w-10 h-10 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">IATF16949</div>
                  <div className="text-sm font-bold text-slate-900">合规审计已通过</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
