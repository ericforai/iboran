'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Server, Lock, Cpu, Globe } from 'lucide-react'

const specs = [
  {
    icon: <Globe className="w-5 h-5 text-blue-500" />,
    title: '部署与合规',
    items: [
      '支持私有云、公有云及混合云部署',
      '符合中国会计准则与国际财务报告准则 (IFRS)',
      '通过等保三级安全认证',
      '满足全球化跨国审计合规要求'
    ]
  },
  {
    icon: <Cpu className="w-5 h-5 text-indigo-500" />,
    title: '集成技术栈',
    items: [
      '基于 iuap 云原生技术架构',
      '标准 RESTful API 接口',
      '支持 EDI / MQ 等主流集成方式',
      '适配 U8 / U9 / NC 及第三方 ERP 系统'
    ]
  },
  {
    icon: <Lock className="w-5 h-5 text-purple-500" />,
    title: '安全防护',
    items: [
      '端到端数据加密传输',
      '精细化权限设置 (角色、组织、维度)',
      '全生命周期操作审计记录',
      '多级灾备方案支撑'
    ]
  },
  {
    icon: <Server className="w-5 h-5 text-slate-500" />,
    title: '核心性能指标',
    items: [
      '支持万亿级海量业务事项处理',
      '事项到核算转化延迟 {'<'} 1s',
      '亿级数据量下卷积计算秒级响应',
      '系统 SLA 可用性承诺 {'>'} 99.99%'
    ]
  }
]

export default function TechSpecs() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            硬核技术底座，<br />支撑海量业财数据实时处理。
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            BIP 管理会计不仅提供了深厚的业务逻辑，更在技术架构上保持领先，为企业数字化基石赋能。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {specs.map((spec, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
             >
                <div className="mb-6 p-3 bg-slate-50 rounded-xl w-fit">
                   {spec.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-6">{spec.title}</h3>
                <ul className="space-y-4">
                  {spec.items.map((item, j) => (
                    <li key={j} className="flex items-start space-x-3 text-sm text-slate-600 leading-relaxed">
                       <div className="w-1.5 h-1.5 rounded-full bg-blue-300 mt-1.5 flex-shrink-0" />
                       <span>{item}</span>
                    </li>
                  ))}
                </ul>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  )
}
