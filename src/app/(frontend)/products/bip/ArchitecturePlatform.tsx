'use client'

import { motion } from 'framer-motion'
import { Layers, Zap, Database, Brain, Rocket, Shield } from 'lucide-react'

export default function ArchitecturePlatform() {
  const stacks = [
    {
      name: "技术底座 (Technical Base)",
      desc: "云原生架构，支持多租户、多语言、多时区、高性能并发。",
      icon: Layers,
      features: ["微服务", "容器化", ["多云适配", "DevOps"]]
    },
    {
      name: "智能中台 (YonGPT)",
      desc: "业界首个企业服务大模型，提供智友助手、数智员工等 AI 服务。",
      icon: Brain,
      features: ["语义理解", "内容生成", ["知识图谱", "智能预测"]]
    },
    {
      name: "数据中台 (Data Base)",
      desc: "HTAP 超融合架构，提供全量存储、实时计算与智能决策支持。",
      icon: Database,
      features: ["主数据", "数据湖", ["BI分析", "实时计算"]]
    },
    {
      name: "业务中台 (Business Base)",
      desc: "共享服务架构，沉淀通用业务逻辑，快速响应业务创新。",
      icon: Zap,
      features: ["组织建模", "流程配置", ["规则引擎", "多维核算"]]
    }
  ]

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left: Text Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2329] mb-6">
              iuap：数智化底座平台
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              用友 iuap 平台是 YonBIP 的底层核心，通过“三中台+一底座”的架构，
              为企业提供从技术、数据到智能化的全方位支撑，打破信息壁垒，实现原生一体。
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {stacks.map((stack, index) => (
                <motion.div
                  key={stack.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <stack.icon className="w-5 h-5 text-[#0052D9]" />
                    <h3 className="font-bold text-[#1F2329]">{stack.name}</h3>
                  </div>
                  <p className="text-sm text-slate-500 mb-2 leading-relaxed">
                    {stack.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-blue-50/50 rounded-2xl border border-blue-100 flex items-start gap-4">
              <Shield className="w-6 h-6 text-[#0052D9] mt-1" />
              <div>
                <h4 className="font-bold text-[#1F2329] mb-1">高安全、高可用、高国产化适配</h4>
                <p className="text-sm text-slate-600">
                  全面适配国产芯片、操作系统、数据库，符合信创标准，支撑大型集团全球业务运营。
                </p>
              </div>
            </div>
          </div>

          {/* Right: Visual Architecture */}
          <div className="lg:w-1/2 relative">
            <div className="bg-slate-900 rounded-3xl p-8 lg:p-12 text-white shadow-2xl relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 opacity-20 blur-[100px] rounded-full"></div>
              
              <div className="space-y-6 relative z-10">
                {/* Visual Layers */}
                <div className="border border-blue-500/30 bg-blue-500/10 p-4 rounded-xl text-center">
                  <div className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">SaaS 应用层</div>
                  <div className="text-sm">人 · 财 · 物 · 供 · 产 · 销 · 研 · 资 · 项目 · 协同</div>
                </div>

                <div className="flex justify-center">
                   <div className="w-px h-6 bg-gradient-to-b from-blue-500/50 to-transparent"></div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="border border-purple-500/30 bg-purple-500/10 p-4 rounded-xl text-center">
                    <div className="text-purple-300 text-xs font-bold mb-1">智能中台</div>
                    <div className="text-[10px] text-slate-400">YonGPT / AI服务</div>
                  </div>
                  <div className="border border-green-500/30 bg-green-500/10 p-4 rounded-xl text-center">
                    <div className="text-green-300 text-xs font-bold mb-1">数据中台</div>
                    <div className="text-[10px] text-slate-400">HTAP / 数据湖</div>
                  </div>
                </div>

                <div className="border border-slate-700 bg-slate-800/50 p-6 rounded-xl text-center">
                  <div className="text-slate-200 text-sm font-bold mb-2">业务中台 / 技术底座</div>
                  <div className="flex justify-center gap-3">
                    <span className="text-[9px] px-2 py-0.5 bg-slate-700 rounded-full">微服务</span>
                    <span className="text-[9px] px-2 py-0.5 bg-slate-700 rounded-full">低代码</span>
                    <span className="text-[9px] px-2 py-0.5 bg-slate-700 rounded-full">连接集成</span>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-lg text-sm font-bold">
                    <Rocket className="w-4 h-4" />
                    iuap 统一底座
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
