'use client'

import { motion } from 'framer-motion'
import { 
  Calculator, 
  Users, 
  MessageSquare, 
  Target, 
  FolderKanban,
  CheckCircle2
} from 'lucide-react'

const modules = [
  {
    icon: Calculator,
    title: '财务云',
    color: 'from-blue-500 to-blue-600',
    features: ['会计服务', '固定资产', '现金管理', '财务报表']
  },
  {
    icon: Users,
    title: '人力云',
    color: 'from-green-500 to-green-600',
    features: ['员工管理', '薪资核算', '假勤服务', '电子合同']
  },
  {
    icon: MessageSquare,
    title: '协同云',
    color: 'from-purple-500 to-purple-600',
    features: ['消息中心', '审批中心', '日程管理', '文档管理']
  },
  {
    icon: Target,
    title: '营销云 (CRM)',
    color: 'from-orange-500 to-orange-600',
    features: ['线索管理', '客户管理', '商机管理', '销售漏斗']
  },
  {
    icon: FolderKanban,
    title: '项目云',
    color: 'from-red-500 to-red-600',
    features: ['项目立项', '进度管理', '收入台账', '工时管理']
  }
]

export default function SolutionOverview() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1F2329] to-[#2d3748]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            YonSuite <span className="text-[#E60012]">一体化</span> 解决方案
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            五大云服务深度融合，打通专业服务机构业务全链路
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {modules.map((module, index) => {
            const Icon = module.icon
            return (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all group"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${module.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-4">
                  {module.title}
                </h3>
                <ul className="space-y-2">
                  {module.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        {/* Integration Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#0052D9]/20 to-[#E60012]/20 rounded-full border border-white/10">
            <span className="text-white font-medium">
              基于统一 iuap 平台，实现多领域、全角色的一体化设计
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
