'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Database, GitMerge, Search, ShieldAlert } from 'lucide-react'

const features = [
  {
    icon: Database,
    title: '全生命周期闭环',
    description: '建立从定义、管理到使用的完整闭环。涵盖申请、校验、审批、发布、变更到归档，确保数据来源可控、过程可溯。'
  },
  {
    icon: GitMerge,
    title: '数据血缘分析',
    description: '记录每条主数据的血缘，清晰展示数据来源系统、流转链路及消费系统，实现数据全链路的可视化追踪与影响分析。'
  },
  {
    icon: Search,
    title: '智能数据清洗',
    description: '内置智能清洗规则与算法，支持模糊匹配、相似度分析。针对多源异构数据进行自动查重、合并与标准化处理，持续净化数据。'
  },
  {
    icon: ShieldAlert,
    title: '质量概览大屏',
    description: '提供可视化数据质量驾驶舱，实时监控数据完整性、合规性与唯一性。自动预警异常数据，形成“事前、事中、事后”的全方位治理。'
  }
]

export function Features() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                全方位构建企业级 <br />
                <span className="text-blue-600">主数据治理体系</span>
              </h2>
              <p className="text-lg text-slate-600 mb-10">
                用友 BIP MDM 平台，融合先进的数据治理方法论与 AI 智能技术，为您打造坚实的数据底座，赋能业务敏捷创新。
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                {features.map((feature) => (
                  <div key={feature.title} className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                        <feature.icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-slate-900">{feature.title}</h3>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed pl-12">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <div className="w-full lg:w-1/2">
             <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
                {/* Simulated Feature UI - Data Modeling */}
                <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
                    <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                        <div className="text-sm font-bold text-slate-700">主数据模型设计器 / 客户主数据</div>
                        <div className="flex gap-2">
                           <div className="w-3 h-3 rounded-full bg-red-400"></div>
                           <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                           <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="flex gap-4 mb-6">
                            <div className="w-1/3 bg-slate-50 rounded-lg p-4 border border-slate-100">
                                <div className="text-xs font-semibold text-slate-400 mb-2">实体属性</div>
                                <div className="space-y-2">
                                    {['客户名称', '统一社会信用代码', '所属行业', '注册地址', '法人代表'].map(item => (
                                        <div key={item} className="flex items-center gap-2 p-2 bg-white rounded border border-slate-100 text-xs text-slate-600">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="w-2/3 space-y-4">
                                <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm">
                                    <div className="flex justify-between mb-2">
                                        <span className="text-sm font-bold text-slate-800">校验规则配置</span>
                                        <span className="text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded">启用中</span>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-xs text-slate-500">
                                            <CheckCircle2 className="w-3 h-3 text-green-500" />
                                            <span>唯一性校验：统一社会信用代码</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-slate-500">
                                            <CheckCircle2 className="w-3 h-3 text-green-500" />
                                            <span>非空校验：客户名称</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-slate-500">
                                            <CheckCircle2 className="w-3 h-3 text-green-500" />
                                            <span>格式校验：手机号码/邮箱</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-slate-50 p-4 rounded-lg flex items-center justify-center border border-dashed border-slate-300">
                                    <span className="text-sm text-slate-400">+ 添加关联模型</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
