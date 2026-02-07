'use client'

import { motion } from 'framer-motion'
import { Award, Users, Wrench } from 'lucide-react'

const advantages = [
  {
    icon: Award,
    title: '头部案例经验',
    desc: '已成功实施南极电商等 IP/品牌管理行业巨头，具备处理"百万级 SKU、千万级订单、数万家经销商"的极限压力经验'
  },
  {
    icon: Wrench,
    title: '深厚的技术栈',
    desc: '作为国家级高新技术企业和上海市"专精特新"企业，基于 YonBuilder 进行深度的 IP 特色功能定制'
  },
  {
    icon: Users,
    title: '一站式交付',
    desc: '从 IP 战略咨询、ERP 实施到后续运维，泊冉提供全生命周期服务'
  }
]

const capabilities = [
  '百万级 SKU 管理',
  '千万级订单处理',
  '数万家经销商覆盖',
  'YonBuilder 深度定制'
]

export default function CustomerSuccess() {
  return (
    <section className="py-24 bg-[#F7F8FA] border-t border-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#1F2329] mb-4">
              为什么选择泊冉实施？
            </h2>
            <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6" />
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Highlight Case */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-3xl p-8 lg:p-12 mb-12 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/4"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="text-purple-200 text-sm font-semibold uppercase tracking-wider mb-4">
                  标杆客户案例
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold mb-4">南极电商</h3>
                <p className="text-purple-100 text-lg leading-relaxed mb-6">
                  中国优质的 IP 品牌授权运营商，泊冉为其打造了完整的 IP 资产管理与授权分成结算体系。
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {capabilities.map((cap, idx) => (
                    <span 
                      key={idx}
                      className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="lg:w-1/3 text-center">
                <div className="inline-flex items-center justify-center w-32 h-32 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20">
                  <span className="text-4xl font-bold">南极</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Advantages Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((adv, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-[#0052D9]/10 rounded-2xl flex items-center justify-center mb-6">
                  <adv.icon className="text-[#0052D9]" size={28} />
                </div>
                
                <h3 className="text-xl font-bold text-[#1F2329] mb-3">
                  {adv.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed">
                  {adv.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
