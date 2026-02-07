'use client'

import { motion } from 'framer-motion'
import { Microscope, PencilRuler, Rocket, Settings2, FileText, CheckSquare } from 'lucide-react'

const steps = [
  {
    phase: '01 现状诊断',
    title: '数智化现状评估',
    description: '深入调研集团组织结构、业财业务现状及 IT 底座，识别核心痛点与管控风险。',
    icon: <Microscope className="w-6 h-6" />,
    deliverables: ['《业务现状调研报告》', '《数智化转型路线图》']
  },
  {
    phase: '02 方案设计',
    title: '蓝图规划与设计',
    description: '结合 U8 cloud 成熟实践，设计多组织协同方案、业财一体化流程及信创迁移策略。',
    icon: <PencilRuler className="w-6 h-6" />,
    deliverables: ['《数智化蓝图方案》', '《技术实施建议书》']
  },
  {
    phase: '03 敏捷交付',
    title: '系统配置与上线',
    description: '标准化快速部署，进行参数配置、数据迁移、员工培训，以保障业务平滑切换。',
    icon: <Rocket className="w-6 h-6" />,
    deliverables: ['《系统配置手册》', '《正式运行确认书》']
  },
  {
    phase: '04 运营赋能',
    title: '持续迭代与增值',
    description: '提供 7×24 运维支持，根据业务增长调整配置，通过 OpenAPI 连接更多生态。',
    icon: <Settings2 className="w-6 h-6" />,
    deliverables: ['《运维服务报告》', '《数智化价值分析帖》']
  }
]

export default function DeliveryMethodology() {
  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2329] mb-6">
              从“部署系统”到<br/>
              <span className="text-[#E60012]">“交付业务价值”</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              U8 cloud 采用敏捷交付方法论，不仅关注 IT 的“上线”，更关注业务是否真正实现了“敏经营”与“轻管理”。
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckSquare className="w-5 h-5 text-blue-600 mt-1" />
                <span className="text-slate-700 font-medium">标准化：行业成熟实践 快速平移</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckSquare className="w-5 h-5 text-blue-600 mt-1" />
                <span className="text-slate-700 font-medium">敏捷化：分步实施，快速见效</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckSquare className="w-5 h-5 text-blue-600 mt-1" />
                <span className="text-slate-700 font-medium">轻量化：低代码支撑快速业务变革</span>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {steps.map((step, idx) => (
                <motion.div
                  key={step.phase}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-400 transition-colors group"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-[#0052D9] group-hover:bg-[#0052D9] group-hover:text-white transition-colors">
                      {step.icon}
                    </div>
                    <span className="text-sm font-bold text-slate-400">{step.phase}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1F2329] mb-4">{step.title}</h3>
                  <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="pt-6 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                      <FileText className="w-3.5 h-3.5" />
                      阶段产出物
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {step.deliverables.map(item => (
                        <span key={item} className="px-2 py-1 bg-slate-50 text-slate-600 text-[11px] rounded border border-slate-100">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
