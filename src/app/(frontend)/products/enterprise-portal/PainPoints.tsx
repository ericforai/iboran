'use client'

import { motion } from 'framer-motion'
import { AlertCircle, Link, ShieldAlert, Users } from 'lucide-react'

const painPoints = [
  {
    icon: Link,
    title: '入口繁杂，多头寻找',
    symptom: '员工需记住ERP、OA、CRM等多个系统的账号与网址，频繁切换登录。',
    impact: '工作效率降低30%，用户体验割裂，新员工上手难。',
    color: 'blue'
  },
  {
    icon: AlertCircle,
    title: '信息孤岛，待办分散',
    symptom: '审批、消息散落在各个异构系统中，缺乏统一的通知中心。',
    impact: '关键任务易遗漏，审批流转周期长，响应速度慢。',
    color: 'red'
  },
  {
    icon: ShieldAlert,
    title: '管控乏力，形象不一',
    symptom: '集团无法统一规范下属单位的门户风格，应用分发与权限管理混乱。',
    impact: '品牌形象难以统一，信息安全存在隐患，管理成本高企。',
    color: 'orange'
  },
  {
    icon: Users,
    title: '千人一面，体验单一',
    symptom: '所有员工看到相同的界面，无法根据岗位角色提供个性化服务。',
    impact: '高频业务无法快速触达，难以满足不同角色的办公需求。',
    color: 'purple'
  }
]

export function PainPoints() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            为什么企业需要统一门户？
          </h2>
          <p className="text-lg text-slate-600">
            随着信息化建设的深入，企业应用系统日益增多，传统的离散式访问模式已成为制约组织效能的瓶颈。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 bg-${point.color}-100 group-hover:bg-${point.color}-600`}>
                <point.icon className={`w-6 h-6 text-${point.color}-600 group-hover:text-white transition-colors duration-300`} />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                {point.title}
              </h3>
              
              <div className="space-y-4">
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">症状</span>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    {point.symptom}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200">
                   <span className="text-xs font-semibold text-red-500 uppercase tracking-wider">后果</span>
                   <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    {point.impact}
                  </p>
                </div>
              </div>

              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/10 rounded-2xl pointer-events-none transition-colors duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
