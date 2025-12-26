'use client'

import { motion } from 'framer-motion'
import { Layout, Server, ShieldCheck, Database } from 'lucide-react'

const specs = [
  {
    title: '系统对接与集成',
    icon: <Layout className="w-5 h-5 text-[#0052D9]" />,
    desc: '预置标准化集成套件，支持主流 ERP（如用友、金蝶、SAP）、HR、CRM 及财务系统。',
    tags: ['Master Data 统一', '消息待办统一', '门户架构化']
  },
  {
    title: '部署与环境适配',
    icon: <Server className="w-5 h-5 text-[#E60012]" />,
    desc: '支持私有化部署、政务云部署。全面适配龙芯、麒麟、达梦等国产软硬件环境。',
    tags: ['全栈信创', '私有化部署', '高可用集群']
  },
  {
    title: '安全与权限管控',
    icon: <ShieldCheck className="w-5 h-5 text-[#0052D9]" />,
    desc: '通过三级等保认证。提供从接入层、应用层到数据层的全生命周期安全防护体系。',
    tags: ['三级等保', 'CA 认证', '防截屏管控']
  },
  {
    title: '底层架构性能',
    icon: <Database className="w-5 h-5 text-[#E60012]" />,
    desc: '依托 V5 / V8 核心引擎，支持十万级并发访问，满足超大型集团组织的业务需求。',
    tags: ['分布式架构', '微服务', '高性能引擎']
  }
]

export default function TechSpecs() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2329] mb-12 text-center">技术规范与集成能力</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {specs.map((spec, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl border border-slate-100 flex flex-col md:flex-row gap-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 shrink-0 rounded-lg bg-slate-50 flex items-center justify-center">
                {spec.icon}
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-[#1F2329] mb-3">{spec.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{spec.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {spec.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold rounded uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
