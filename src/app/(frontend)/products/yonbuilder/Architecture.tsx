'use client'

import { motion } from 'framer-motion'
import { Database, Layout, Box, GitBranch, Terminal, Shield, Cpu, Cloud, Globe } from 'lucide-react'

export default function Architecture() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            云原生 • 模型驱动 • 多态部署
          </h2>
          <p className="text-lg text-slate-600">
            基于先进的云原生微服务架构，提供从底层技术设施到上层业务应用的全栈低代码能力
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Decorative background lines */}
          <div className="absolute inset-0 border-x border-slate-100/50 pointer-events-none"></div>
          
          <div className="space-y-4 relative z-10">
            {/* Layer 1: Access & Experience */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="text-xs font-bold text-slate-400 w-24 text-right">多端体验</div>
                <div className="flex-1 h-px bg-slate-200"></div>
              </div>
              <div className="grid grid-cols-4 gap-4 pl-28">
                {[
                  { icon: Globe, label: 'Web 端' },
                  { icon: Terminal, label: '移动端' },
                  { icon: Box, label: '桌面端' },
                  { icon: Layout, label: '小程序' },
                ].map((item, i) => (
                  <div key={i} className="bg-slate-50 border border-slate-200 rounded-lg p-4 flex flex-col items-center justify-center gap-2 hover:border-blue-400 transition-colors cursor-default">
                    <item.icon className="w-5 h-5 text-slate-600" />
                    <span className="text-sm font-medium text-slate-700">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Arrow Down */}
            <div className="flex justify-center pl-28 py-2">
              <div className="w-0.5 h-6 bg-slate-200"></div>
            </div>

            {/* Layer 2: Visual Application Construction */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="text-xs font-bold text-[#E60012] w-24 text-right">应用构建层</div>
                <div className="flex-1 h-px bg-[#E60012]/20"></div>
              </div>
              <div className="bg-white border-2 border-[#E60012]/10 rounded-xl p-6 pl-8 shadow-sm relative ml-28">
                 <div className="absolute top-0 left-0 bottom-0 w-2 bg-[#E60012] rounded-l-lg"></div>
                 <div className="grid grid-cols-3 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-bold text-slate-800 flex items-center gap-2">
                        <Layout className="w-4 h-4 text-[#E60012]" /> 页面设计
                      </h4>
                      <div className="space-y-2">
                        {['拖拽式画布', '响应式布局', '组件属性配置', '主题样式定义'].map(t => (
                          <div key={t} className="text-xs text-slate-600 bg-slate-50 px-2 py-1.5 rounded border border-slate-100">{t}</div>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-bold text-slate-800 flex items-center gap-2">
                        <GitBranch className="w-4 h-4 text-[#E60012]" /> 流程编排
                      </h4>
                      <div className="space-y-2">
                        {['BPMN 2.0', '审批流设计', '业务规则引擎', '自动化触发器'].map(t => (
                          <div key={t} className="text-xs text-slate-600 bg-slate-50 px-2 py-1.5 rounded border border-slate-100">{t}</div>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-bold text-slate-800 flex items-center gap-2">
                        <Database className="w-4 h-4 text-[#E60012]" /> 数据建模
                      </h4>
                      <div className="space-y-2">
                        {['元数据驱动', '实体关系图', '数据查询设计', 'Excel 导入导出'].map(t => (
                          <div key={t} className="text-xs text-slate-600 bg-slate-50 px-2 py-1.5 rounded border border-slate-100">{t}</div>
                        ))}
                      </div>
                    </div>
                 </div>
              </div>
            </motion.div>

            {/* Arrow Down */}
            <div className="flex justify-center pl-28 py-2">
              <div className="w-0.5 h-6 bg-slate-200"></div>
            </div>

            {/* Layer 3: Tech Engine */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="text-xs font-bold text-[#0052D9] w-24 text-right">技术支撑层</div>
                <div className="flex-1 h-px bg-[#0052D9]/20"></div>
              </div>
              <div className="grid grid-cols-2 gap-4 ml-28">
                <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-4">
                  <h4 className="font-bold text-[#0052D9] mb-3 flex items-center gap-2">
                    <Shield className="w-4 h-4" /> 安全与治理
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['RBAC 权限', '数据加密', '审计日志', 'API 网关'].map(t => (
                      <span key={t} className="text-xs bg-white text-slate-600 px-2 py-1 rounded border border-blue-100">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-4">
                  <h4 className="font-bold text-[#0052D9] mb-3 flex items-center gap-2">
                    <Cloud className="w-4 h-4" /> 云原生底座
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['微服务', '容器化', 'DevOps', '多租户'].map(t => (
                      <span key={t} className="text-xs bg-white text-slate-600 px-2 py-1 rounded border border-blue-100">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Layer 4: Infrastructure */}
             <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-4 ml-28"
            >
              <div className="bg-slate-900 rounded-lg p-3 flex items-center justify-center gap-8 text-slate-400 text-sm">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4" />
                  <span>公有云</span>
                </div>
                <div className="flex items-center gap-2">
                  <Box className="w-4 h-4" />
                  <span>私有云</span>
                </div>
                <div className="flex items-center gap-2">
                  <Cloud className="w-4 h-4" />
                  <span>混合云</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
