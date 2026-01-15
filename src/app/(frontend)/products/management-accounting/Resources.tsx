'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FileText, Play, Download, ExternalLink } from 'lucide-react'

const resources = [
  {
    type: '白皮书',
    title: '《BIP 管理会计：数智化转型白皮书》',
    description: '深入了解事项会计中台架构如何支撑企业财管分离与精细化运营。',
    icon: <FileText className="w-6 h-6 text-blue-600" />,
    link: '#'
  },
  {
    type: '视频演示',
    title: '智能成本核算与月结全流程演示',
    description: '5 分钟直观体验从业务事项捕捉到智能月结的一键式操作过程。',
    icon: <Play className="w-6 h-6 text-red-600" />,
    link: '#'
  },
  {
    type: '案例集',
    title: '大型集团企业成本管控实践精萃',
    description: '汇集钢铁、制造、能源等行业头部企业的管理会计实践心得。',
    icon: <FileText className="w-6 h-6 text-indigo-600" />,
    link: '#'
  }
]

export default function Resources() {
  return (
    <section className="py-24 bg-slate-900 border-b border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
           <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                 知识赋能：深入探索管理会计前沿
              </h2>
              <p className="text-slate-400">
                 我们为您准备了详实的技术文档与实践指南，助力您更全面地了解 BIP 管理会计。
              </p>
           </div>
           <button className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-2 group">
              查看更多资源 <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
           </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {resources.map((res, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 p-8 rounded-[32px] hover:bg-slate-800/60 transition-all group"
             >
                <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                   {res.icon}
                </div>
                <div className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">{res.type}</div>
                <h3 className="text-xl font-bold text-white mb-4 leading-tight">{res.title}</h3>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed">{res.description}</p>
                <button className="w-full flex items-center justify-center gap-2 py-4 bg-white/5 hover:bg-white/10 rounded-2xl text-white font-semibold transition-colors">
                   <Download className="w-4 h-4" /> 立即获取
                </button>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  )
}
