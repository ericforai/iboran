'use client'

import { motion } from 'framer-motion'
import { 
  BarChart3, 
  Wallet, 
  Users, 
  Receipt, 
  FileCheck, 
  Box, 
  Cpu, 
  Share2, 
  ShieldCheck 
} from 'lucide-react'

const capabilities = [
  {
    title: '集团化管控',
    desc: '支持多组织、多准则、多币种，助力集团实现纵向控制与横向协同。',
    icon: <BarChart3 className="w-8 h-8 text-[#0052D9]" />
  },
  {
    title: '高效合并报表',
    desc: '自动采集底层数据，一键生成合并报表，大幅提升报表质量与生成效率。',
    icon: <FileCheck className="w-8 h-8 text-[#0052D9]" />
  },
  {
    title: '集中资金管理',
    desc: '实现集团资金池、收支计划及收付自动对账，实时监控资金流向。',
    icon: <Wallet className="w-8 h-8 text-[#0052D9]" />
  },
  {
    title: '敏经营供应链',
    desc: '覆盖采购、销售、库存、委外等核心场景，实现全链路数智化闭环。',
    icon: <Box className="w-8 h-8 text-[#0052D9]" />
  },
  {
    title: '费控智能报账',
    desc: '移动报销、发票自动识别、自动入账，显著减少财务人工干预。',
    icon: <Receipt className="w-8 h-8 text-[#0052D9]" />
  },
  {
    title: '全栈信创安全',
    desc: '深度适配国产 CPU/OS/数据库，拥有 [68]+ 项互认证，保障数据主权。',
    icon: <ShieldCheck className="w-8 h-8 text-[#0052D9]" />
  },
  {
    title: '数智人力管理',
    desc: '涵盖人事、考勤、薪酬及绩效，提升集团化人才管理与服务效率。',
    icon: <Users className="w-8 h-8 text-[#0052D9]" />
  },
  {
    title: '生态融合连接',
    desc: '通过 [610]+ OpenAPI 快速对接外部电商、营销、物流及外部办公平台。',
    icon: <Share2 className="w-8 h-8 text-[#0052D9]" />
  },
  {
    title: '云原生底座',
    desc: '公有云原生架构，支持弹性伸缩、灰度发布，降低 IT 运维压力。',
    icon: <Cpu className="w-8 h-8 text-[#0052D9]" />
  }
]

export default function Capabilities() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2329] mb-6">全方位赋能成长型集团</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            不只是工具的堆砌，而是深度打通“业、财、税、金、档”的价值链，让管理不再成为业务增长的瓶颈。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="p-8 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1F2329] mb-4 group-hover:text-[#0052D9] transition-colors">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm lg:text-base">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
