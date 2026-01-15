'use client'

import { motion } from 'framer-motion'
import { Workflow, Fingerprint, RefreshCw, BarChart3, Binary, ShieldCheck } from 'lucide-react'

export default function CoreCapabilities() {
  const capabilities = [
    {
      title: "API 全生命周期治理",
      desc: "从 API 设计、发布、测试到下线全流程管控。支持 Mock 调试、版本管理、自动生成文档，以及精细化的授权策略。",
      icon: Workflow,
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      title: "主数据智能清洗",
      desc: "内置多维度质检规则，支持实时数据质检与清洗。提供数据质量概览报告，确保主数据在分发前的一致性与准确性。",
      icon: RefreshCw,
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    },
    {
      title: "异构系统身份绑定",
      desc: "解决多系统间账号不统一问题，支持 OneID 身份映射与统一认证鉴权，实现单点登录与跨系统无缝跳转。",
      icon: Fingerprint,
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
    {
      title: "端到端链路追踪",
      desc: "提供全链路可视化监控，从请求发起到落地的每一个节点都可追溯。快速定位故障点，告别日志黑盒。",
      icon: BarChart3,
      color: "text-orange-600",
      bg: "bg-orange-50"
    },
    {
      title: "开箱即用集成资产",
      desc: "预置 SAP、Oracle、金蝶及主流 SaaS 应用（钉钉、企微）的连接器与集成模板。通过 '资产包' 模式快速复用交付经验。",
      icon: Binary,
      color: "text-indigo-600",
      bg: "bg-indigo-50"
    },
    {
      title: "混合云安全网关",
      desc: "支持公有云与私有云之间的安全穿透，无需复杂的 VPN 配置即可实现云上云下数据互通，保障数据传输安全。",
      icon: ShieldCheck,
      color: "text-red-600",
      bg: "bg-red-50"
    }
  ]

  return (
    <section className="py-24 bg-[#F7F8FA]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-6">
            六大核心能力，赋能企业集成创新
          </h2>
          <p className="text-slate-500 text-lg">
            不仅仅是连接工具，更为企业提供可落地的资产化、规范化集成解决方案
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-8 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group border border-transparent hover:border-blue-100"
            >
              <div className={`w-14 h-14 ${cap.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <cap.icon className={`w-7 h-7 ${cap.color}`} />
              </div>
              <h3 className="text-xl font-bold text-[#1F2329] mb-3 group-hover:text-blue-600 transition-colors">
                {cap.title}
              </h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {cap.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
