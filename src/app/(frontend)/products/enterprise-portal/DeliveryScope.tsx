'use client'

import { motion } from 'framer-motion'
import { CheckCircle, PlusCircle } from 'lucide-react'

export function DeliveryScope() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            交付范围定义
          </h2>
          <p className="text-lg text-slate-600">
            明确的标准产品边界与增值服务选项，助力企业按需构建。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Standard Scope */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="border-2 border-slate-200 rounded-2xl p-8 hover:border-blue-500 transition-colors"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">核心标准版</h3>
                <p className="text-sm text-slate-500">包含开箱即用的核心能力</p>
              </div>
            </div>

            <ul className="space-y-4">
              {[
                { title: '门户引擎核心', desc: '含可视化设计器、磁贴管理、权限控制' },
                { title: '多端入口支持', desc: 'PC端 Web 门户 + 移动端（友空间）同步' },
                { title: '基础磁贴包', desc: '预置 50+ 常用业务磁贴与报表图表组件' },
                { title: '统一身份认证', desc: '支持标准 OAuth2 / CAS 协议对接' },
                { title: '统一待办集成', desc: '提供标准 API 接口，支持 3 个系统的待办集成' },
                { title: '标准主题模版', desc: '提供 5 套行业通用门户主题模版' },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-slate-900 block">{item.title}</span>
                    <span className="text-sm text-slate-500">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Optional Scope */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="border-2 border-slate-200 rounded-2xl p-8 hover:border-orange-500 transition-colors bg-slate-50"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <PlusCircle className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">增值选配项</h3>
                <p className="text-sm text-slate-500">满足深度定制与集成需求</p>
              </div>
            </div>

            <ul className="space-y-4">
              {[
                { title: '异构系统深度集成', desc: '老旧系统（无标准接口）的定制化对接开发' },
                { title: '专属化部署', desc: '支持私有化部署或专属云资源池托管' },
                { title: '定制磁贴开发', desc: '按业务需求定制开发专用业务磁贴或大屏' },
                { title: 'UI/UX 定制设计', desc: '企业专属 VI 视觉风格设计与主题开发' },
                { title: '多租户运营扩展', desc: '面向集团二级单位的独立租户运营能力' },
                { title: '数据大屏集成', desc: '集成 DataV 或 QuickBI 等专业数据大屏' },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <PlusCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-slate-900 block">{item.title}</span>
                    <span className="text-sm text-slate-500">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
