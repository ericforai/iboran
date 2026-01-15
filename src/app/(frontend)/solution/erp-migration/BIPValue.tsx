'use client'

import { Globe, Cpu, Users, Layers, Sparkles, Brain, Database, Rocket, Shield } from 'lucide-react'
import { motion } from 'framer-motion'

export default function BIPValue() {
  const features = [
    {
      icon: Globe,
      title: "全球化运营",
      desc: "支持多语言、多币种、多准则、多时区，助力中国企业出海，实现全球化管控。"
    },
    {
      icon: Cpu,
      title: "数智化驱动",
      desc: "内置 AI 智能体 (YonGPT)，实现智能填单、智能审单、智能分析，从流程驱动转向数据驱动。"
    },
    {
      icon: Users,
      title: "社会化协同",
      desc: "连接客户、供应商、伙伴、员工，打破企业边界，构建产业互联网生态。"
    },
    {
      icon: Layers,
      title: "云原生架构",
      desc: "基于微服务架构，弹性伸缩，高可用高并发，快速响应业务创新需求。"
    }
  ]

  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="relative z-10">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-6 animate-pulse">
              Why Upgrade to BIP?
            </div>
            <h2 className="text-4xl font-bold mb-6">
              从 ERP 到 BIP<br />
              <span className="text-blue-400">商业创新平台的跨越</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              不仅仅是软件的升级，更是管理思想与技术架构的全面革新。用友 BIP 帮助企业从单纯的资源计划管理（ERP）走向商业创新平台（BIP），通过“AI X 数据 X 流程”的深度融合，重塑核心竞争力。
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 group-hover:bg-blue-900/50 transition-colors">
                    <feature.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-slate-100">{feature.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Right Visual - Rich Architecture Representation */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/10 blur-[80px] rounded-full pointer-events-none"></div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl border border-white/10 p-8 relative overflow-hidden">
              <div className="relative z-10 space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-lg font-bold text-white mb-1">BIP 3.0 领先架构</h3>
                  <p className="text-slate-400 text-sm">数智底座 + 创新服务</p>
                </div>

                {/* Layer 1: SaaS */}
                <div className="grid grid-cols-5 gap-2">
                  {['财务云', '人力云', '供应链', '营销云', '制造云'].map((item, i) => (
                    <div key={i} className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 border border-blue-500/30 rounded-lg py-3 text-center text-xs font-medium text-blue-200">
                      {item}
                    </div>
                  ))}
                </div>

                {/* Arrow Down */}
                <div className="flex justify-center -my-2 opacity-50">
                   <div className="w-px h-8 bg-gradient-to-b from-blue-500/50 to-transparent"></div>
                </div>

                {/* Layer 2: Middle Platform */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-700/50 border border-white/5 rounded-xl p-4 relative overflow-hidden group">
                    <div className="flex items-center gap-2 mb-2 text-purple-300">
                       <Brain className="w-4 h-4" />
                       <span className="font-bold text-sm">智能中台</span>
                    </div>
                    <div className="space-y-1.5">
                       <div className="text-xs text-slate-400 flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-purple-400"></span> YonGPT
                       </div>
                       <div className="text-xs text-slate-400 flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-purple-400"></span> 知识图谱
                       </div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-700/50 border border-white/5 rounded-xl p-4 group">
                    <div className="flex items-center gap-2 mb-2 text-green-300">
                       <Database className="w-4 h-4" />
                       <span className="font-bold text-sm">数据中台</span>
                    </div>
                    <div className="space-y-1.5">
                       <div className="text-xs text-slate-400 flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-green-400"></span> HTAP
                       </div>
                       <div className="text-xs text-slate-400 flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-green-400"></span> 数据湖
                       </div>
                    </div>
                  </div>
                </div>

                {/* Layer 3: Tech Base */}
                <div className="bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700 rounded-xl p-5 text-center relative overflow-hidden">
                   <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                   <div className="relative z-10 flex items-center justify-between px-4">
                      <div className="flex items-center gap-2 text-white font-bold">
                         <Rocket className="w-4 h-4 text-blue-500" />
                         iuap 统一底座
                      </div>
                      <div className="flex gap-2">
                         <span className="text-[10px] px-2 py-0.5 bg-slate-800 rounded border border-slate-600 text-slate-400">云原生</span>
                         <span className="text-[10px] px-2 py-0.5 bg-slate-800 rounded border border-slate-600 text-slate-400">微服务</span>
                         <span className="text-[10px] px-2 py-0.5 bg-slate-800 rounded border border-slate-600 text-slate-400">信创适配</span>
                      </div>
                   </div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute top-4 right-4 animate-bounce duration-3000">
                  <div className="px-3 py-1 bg-[#E60012] text-white text-[10px] font-bold rounded-full shadow-lg shadow-red-900/50 flex items-center gap-1">
                    <Shield className="w-3 h-3" />
                    安全可控
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
