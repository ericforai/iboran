'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  CheckCircle, 
  Map, 
  Play, 
  Rocket, 
  Settings, 
  Users 
} from 'lucide-react'

const steps = [
  {
    icon: Users,
    title: '组织与分权建模',
    desc: '梳理投标团队结构，配置分支机构与三员审计策略（大型组织标配）。',
    accent: 'bg-blue-600'
  },
  {
    icon: Settings,
    title: '资产与模板初始化',
    desc: '一键导入资质证照与分项标本，由 AI 自动打码脱敏及目录解析。',
    accent: 'bg-blue-500'
  },
  {
    icon: Play,
    title: '试点项目实战运行',
    desc: '从核心投标团队开始，通过智投 PDCA 指南运行首个实操标包交付。',
    accent: 'bg-indigo-600'
  },
  {
    icon: Rocket,
    title: '规模化经营推广',
    desc: '全面上线看板，通过数据驱动集团全员从“人工”向“标准”升级。',
    accent: 'bg-emerald-600'
  }
]

export const Methodology = () => {
  return (
    <section id="methodology" className="py-32 px-6 bg-slate-50 relative border-y border-slate-100">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-20 px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight"
          >
            标准化落地路径
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-600 text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed"
          >
            我们不仅交付软件，更交付一套可复制的“赢标方法论”。
          </motion.p>
        </div>

        <div className="relative">
          <div className="absolute top-[40px] left-0 w-full h-1 bg-slate-200 -translate-y-1/2 hidden lg:block rounded-full" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((s: any, i: number) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-white border border-slate-100 p-10 rounded-[40px] group hover:bg-white hover:border-blue-200 transition-all shadow-sm hover:shadow-xl text-center lg:text-left flex flex-col items-center lg:items-start"
              >
                <div className={`w-16 h-16 rounded-2xl ${s.accent} flex items-center justify-center mb-8 group-hover:scale-110 shadow-lg shadow-blue-600/10 transition-transform`}>
                   <s.icon size={32} className="text-white" />
                </div>
                <div className="text-sm font-black text-blue-600 uppercase tracking-[0.2em] mb-4 opacity-40">Phase 0{i+1}</div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-6 tracking-tight">{s.title}</h3>
                <p className="text-slate-500 text-lg font-medium leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export const TechSpecs = () => {
  return (
    <section id="tech-specs" className="py-32 bg-white px-6">
      <div className="container max-w-7xl mx-auto py-16 border-y border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">技术规格与部署方案</h2>
            <p className="text-slate-600 text-xl font-medium leading-relaxed">提供符合企业级安全合规要求的弹性架构，支持多样化投标业务场景落地。</p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
                { title: '部署模型', desc: '支持公有云 SaaS / 混合云 / 私有化安全部署，适配不同数据主权需求。' },
                { title: '体系集成', desc: '提供标准 Open API；深度对接钉钉、企微、飞书等主流 SSO 协同体系。' },
                { title: '合规治理', desc: '符合等保三级及大型审计标准；多级权限隔离与高强度全文日志追踪。' },
                { title: '落地效率', desc: '标准软件交付包集成通用模板库，支持最快 2 周实现全业务体系上线。' }
            ].map((spec: any, i: number) => (
                <div key={i} className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 shadow-inner">
                        <CheckCircle size={22} className="text-blue-600" />
                    </div>
                    <div>
                        <h4 className="text-slate-900 font-bold text-xl mb-2">{spec.title}</h4>
                        <p className="text-base text-slate-500 font-medium leading-relaxed">{spec.desc}</p>
                    </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export const CustomerStories = () => {
    return (
        <section id="customer-stories" className="py-32 px-6 bg-slate-50">
            <div className="container max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20 px-6">
                    <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight"
                    >
                        信任的选择
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-slate-600 text-xl md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed"
                    >
                        助力千家企业实现从“人工经验”到“组织机制”的标能跨越。
                    </motion.p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { 
                            name: "某大型建筑国企", 
                            quote: "智投 Pro 的标讯聚合功能让我们的周报耗时缩短了 70%，且机会覆盖面扩大了近 3 倍，效果惊人。", 
                            stat: "+15% 中标率提升", 
                            logo: "JZ" 
                        },
                        { 
                            name: "知名 IT 服务提供商", 
                            quote: "得益于 AI 合规检查，我们成功规避了多次潜在的硬性废标风险。这已经是我们投标团队的必备工具。", 
                            stat: "-90% 废标隐患", 
                            logo: "SF" 
                        },
                        { 
                            name: "某能源装备集团", 
                            quote: "资产库的标签化复用机制让我们的技术方案一致性得到了前所未有的高度集成。效率提升立竿见影。", 
                            stat: "60% 作业效率提升", 
                            logo: "NY" 
                        }
                    ].map((story: any, i: number) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="bg-white border border-slate-100 p-10 rounded-[40px] relative overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl rounded-full" />
                            <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl mb-8 shadow-xl shadow-red-600/20">{story.logo}</div>
                            <p className="text-slate-600 text-xl font-medium italic mb-10 leading-relaxed">“{story.quote}”</p>
                            <div className="pt-8 border-t border-slate-50 flex flex-col">
                                <span className="text-slate-900 font-black text-lg mb-1">{story.name}</span>
                                <span className="text-blue-600 text-base font-black uppercase tracking-[0.2em]">{story.stat}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
