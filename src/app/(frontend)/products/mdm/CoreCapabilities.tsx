'use client'

import { motion } from 'framer-motion'
import { 
  Settings, 
  Smartphone, 
  Table, 
  GitBranch, 
  FileSpreadsheet, 
  UploadCloud,
  Globe2,
  Lock
} from 'lucide-react'

const capabilities = [
  {
    category: '灵活建模',
    items: [
      { name: '拖拽式模型设计', icon: Settings, desc: '可视化定义主数据属性、校验规则与关联关系' },
      { name: '语义与标签', icon: Table, desc: '增强语义标识能力，支持多语言多版本管理' },
      { name: '模型分组管理', icon: Layers, desc: '支持按业务领域对模型进行分组授权与管理' },
    ]
  },
  {
    category: '智能维护',
    items: [
      { name: '实时查重', icon: Search, desc: '数据录入时实时显示重复记录，从源头杜绝脏数据' },
      { name: 'Excel 智能导入', icon: FileSpreadsheet, desc: '支持按需选择字段导入，自动识别表头与校验' },
      { name: '移动端审批', icon: Smartphone, desc: '嵌入友空间/H5，支持随时随地进行主数据申请与审批' },
    ]
  },
  {
    category: '流程与集成',
    items: [
      { name: '动态流程引擎', icon: GitBranch, desc: '支持加签、转办、退回、批量审批等复杂流程场景' },
      { name: 'Open API 开放', icon: UploadCloud, desc: '标准 RESTful 接口，支持与第三方系统无缝集成' },
      { name: '全局消息通知', icon: Globe2, desc: '数据分发、清洗任务完成时自动触发多渠道通知' },
    ]
  }
]

// Helper for icon since we used it in the array but didn't import Search yet
import { Search, Layers } from 'lucide-react'

export function CoreCapabilities() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            全面增强的 <span className="text-blue-600">核心能力</span>
          </h2>
          <p className="text-lg text-slate-600">
            不仅是管理工具，更是赋能工具。基于 YonBIP 云原生架构，提供极致的用户体验与扩展能力。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {capabilities.map((cat, catIndex) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-blue-600 rounded-full"></span>
                {cat.category}
              </h3>
              <div className="space-y-6">
                {cat.items.map((item) => (
                  <div key={item.name} className="flex gap-4 group">
                    <div className="mt-1 w-10 h-10 bg-white rounded-lg border border-slate-200 flex items-center justify-center text-slate-500 group-hover:text-blue-600 group-hover:border-blue-200 transition-colors shrink-0">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">{item.name}</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
