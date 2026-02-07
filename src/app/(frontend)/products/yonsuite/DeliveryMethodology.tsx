'use client'

import { motion } from 'framer-motion'
import { Search, PenTool, Rocket, Activity, ChevronRight } from 'lucide-react'

const steps = [
  {
    title: '诊断建议 (Diagnosis)',
    desc: '深度调研企业现状，识别核心业务瓶颈与数智化漏项。',
    outputs: ['《业务诊断报告》', '《数智化路线图》'],
    icon: <Search className="w-6 h-6 text-[#0052D9]" />
  },
  {
    title: '架构设计 (Design)',
    desc: '基于标准 SaaS 场景，快速匹配或低代码构建企业专属流程。',
    outputs: ['《系统架构设计》', '《业务映射蓝图》'],
    icon: <PenTool className="w-6 h-6 text-[#0052D9]" />
  },
  {
    title: '敏捷实施 (Execution)',
    desc: '快速配置、连接集成、数据迁移，以保障最快 1 个月核心上线。',
    outputs: ['《配置说明书》', '《用户测试报告》'],
    icon: <Rocket className="w-6 h-6 text-[#0052D9]" />
  },
  {
    title: '持续运营 (Operation)',
    desc: '系统上线后的持续迭代与增值服务，支撑企业商业创新。',
    outputs: ['《运维服务手册》', '《创新应用清单》'],
    icon: <Activity className="w-6 h-6 text-[#0052D9]" />
  }
]

export default function DeliveryMethodology() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2329] mb-4">YonSuite 敏捷交付方法论</h2>
          <p className="text-slate-600 italic">4个阶段，标准化输出，以保障项目高质量、快节奏落地</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-6">
                {step.icon}
              </div>
              
              <h3 className="text-lg font-bold text-[#1F2329] mb-3">{step.title}</h3>
              <p className="text-sm text-slate-500 mb-6 leading-relaxed">{step.desc}</p>
              
              <div className="space-y-2">
                <div className="text-xs font-bold text-[#1F2329] uppercase tracking-wider opacity-60">标准产出物：</div>
                {step.outputs.map((out, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                    <ChevronRight className="w-3 h-3 text-[#0052D9]" />
                    {out}
                  </div>
                ))}
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <ChevronRight className="w-6 h-6 text-slate-200" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-red-50 text-[#E60012] font-semibold rounded-full border border-red-100 italic text-sm">
            <span>交付目标：</span>
            <span>助力企业实现 [100]% 场景在线化与数据一致性</span>
          </div>
        </div>
      </div>
    </section>
  )
}
