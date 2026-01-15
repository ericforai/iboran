'use client'

import { motion } from 'framer-motion'
import { Database, Network, Cloud, Code2, Server, Globe, Share2 } from 'lucide-react'

export default function Architecture() {
  const layers = [
    {
      title: "混合云网关",
      icon: Cloud,
      color: "bg-blue-600",
      items: ["公有云", "私有云", "专属云", "跨云连接"]
    },
    {
      title: "企业服务总线 (ESB) & API 网关",
      icon: Network,
      color: "bg-indigo-600",
      items: ["协议转换", "流量控制", "熔断限流", "日志审计", "安全鉴权"]
    },
    {
      title: "集成资产中心",
      icon: Share2,
      color: "bg-red-600",
      items: ["预置连接器", "集成模板", "行业资产包", "开箱即用"]
    },
    {
      title: "主数据管理 (MDM)",
      icon: Database,
      color: "bg-emerald-600",
      items: ["数据清洗", "质量质检", "模型分发", "全生命周期"]
    }
  ]

  const systems = [
    { name: "ERP (NC/U8/U9)", color: "bg-slate-100 text-slate-600" },
    { name: "CRM / 营销", color: "bg-slate-100 text-slate-600" },
    { name: "SRM / 采购", color: "bg-slate-100 text-slate-600" },
    { name: "MES / 制造", color: "bg-slate-100 text-slate-600" },
    { name: "三方系统 (SAP/Oracle)", color: "bg-slate-100 text-slate-600" }
  ]

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 font-medium text-sm mb-4"
          >
            Product Architecture
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-[#1F2329] mb-4"
          >
            混合技术架构，连接无限可能
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 max-w-2xl mx-auto"
          >
            基于云原生技术底座，打通云上云下业务壁垒，构建稳健的数智化集成体系
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* Connecting Lines - Background */}
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none z-0 px-20 py-20">
             <div className="w-full h-full border-2 border-dashed border-slate-100 rounded-3xl"></div>
          </div>

          <div className="grid gap-6 relative z-10">
            {/* Top Layer: Consumption / Applications */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {systems.map((sys, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx }}
                  className={`${sys.color} p-4 rounded-xl text-center text-sm font-bold border border-slate-200 shadow-sm`}
                >
                  {sys.name}
                </motion.div>
              ))}
            </div>

            {/* Down Arrows */}
             <div className="flex justify-center gap-10 mb-2">
                <div className="w-px h-8 bg-gradient-to-b from-slate-200 to-blue-200"></div>
                <div className="w-px h-8 bg-gradient-to-b from-slate-200 to-blue-200"></div>
                <div className="w-px h-8 bg-gradient-to-b from-slate-200 to-blue-200"></div>
             </div>

            {/* Core Architecture Layers */}
            <div className="space-y-4">
               {layers.map((layer, idx) => (
                 <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col md:flex-row items-center gap-6 group hover:border-blue-200 transition-colors"
                 >
                    <div className={`w-16 h-16 ${layer.color} rounded-2xl flex items-center justify-center shrink-0 shadow-lg text-white`}>
                      <layer.icon size={32} />
                    </div>
                    
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-xl font-bold text-[#1F2329] mb-2">{layer.title}</h3>
                      <div className="flex flex-wrap justify-center md:justify-start gap-2">
                        {layer.items.map((item, i) => (
                           <span key={i} className="px-3 py-1 bg-slate-50 text-slate-600 text-xs rounded-full border border-slate-100 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                             {item}
                           </span>
                        ))}
                      </div>
                    </div>

                    <div className="hidden md:flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-green-400 transition-colors"></div>
                       <div className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-green-400 transition-colors delay-75"></div>
                       <div className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-green-400 transition-colors delay-150"></div>
                    </div>
                 </motion.div>
               ))}
            </div>

            {/* Foundation Layer */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.6 }}
               className="mt-8 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-6 text-center text-white relative overflow-hidden"
            >
               <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.05]"></div>
               <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12">
                  <div className="flex items-center gap-3">
                    <Server size={20} className="text-blue-400" />
                    <span className="font-semibold">云原生技术底座</span>
                  </div>
                  <div className="hidden md:block w-px h-6 bg-slate-600"></div>
                  <div className="flex items-center gap-3">
                    <Globe size={20} className="text-blue-400" />
                    <span className="font-semibold">多租户隔离</span>
                  </div>
                  <div className="hidden md:block w-px h-6 bg-slate-600"></div>
                  <div className="flex items-center gap-3">
                    <Code2 size={20} className="text-blue-400" />
                    <span className="font-semibold">低代码开发</span>
                  </div>
               </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
