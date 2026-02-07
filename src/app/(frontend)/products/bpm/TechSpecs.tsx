'use client'

import { Shield, Cloud, Database, Lock, Cpu } from 'lucide-react'

const specs = [
  {
    title: '部署方式',
    items: [
      { label: '支持环境', value: '私有化部署 / 混合云 / SaaS' },
      { label: '操作系统', value: 'Windows Server / Linux (CentOS, Ubuntu)' },
      { label: '容器化', value: '支持 Docker & Kubernetes (K8s)' }
    ],
    icon: <Cloud className="text-blue-600" />
  },
  {
    title: '中间件与存储',
    items: [
      { label: '数据库', value: 'MySQL, Oracle, SQL Server, PostgreSQL' },
      { label: '中间件', value: 'Tomcat, WebLogic, JBoss' },
      { label: '缓存', value: 'Redis 集群支持' }
    ],
    icon: <Database className="text-blue-600" />
  },
  {
    title: '安全与合规',
    items: [
      { label: '权限控制', value: 'RBAC 模型 + 分级分权管理' },
      { label: '数据安全', value: 'AES-256 加密存、HTTPS 传输' },
      { label: '审计追溯', value: '操作日志、数据快照、防篡改' }
    ],
    icon: <Shield className="text-blue-600" />
  }
]

export default function TechSpecs() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">工业级性能，金融级安全</h2>
          <p className="text-slate-600">
            采用微服务架构设计，具备强大的横向扩展能力与系统容错性，支撑万级用户并发与千万级任务流转。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {specs.map((spec, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition group">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {spec.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">{spec.title}</h3>
              <div className="space-y-4">
                {spec.items.map((item, iIdx) => (
                  <div key={iIdx} className="flex flex-col">
                    <span className="text-xs text-slate-400 uppercase tracking-wider mb-1">{item.label}</span>
                    <span className="text-sm text-slate-700 font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white border border-slate-200 rounded-2xl p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-100 text-red-700 text-[10px] font-bold rounded uppercase mb-4">
                <Lock size={12} />
                国产化适配
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">全栈国产化环境兼容</h4>
              <p className="text-slate-600 leading-relaxed mb-6">
                响应国家自主可控策略，BPM 平台已完成从芯片（鲲鹏、飞腾）、操作系统（麒麟、统信）到数据库（达梦、人大金仓）的全栈国产化适配测试，以保障核心业务链条的高安全性。
              </p>
              <div className="flex flex-wrap gap-4">
                {['华为鲲鹏', '麒麟软件', '达梦数据库', '金蝶中间件'].map((tag, tIdx) => (
                  <span key={tIdx} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full border border-slate-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-72 aspect-square bg-slate-100 rounded-full flex items-center justify-center relative overflow-hidden">
               <Cpu size={120} className="text-slate-300 animate-pulse" />
               <div className="absolute inset-0 border-[20px] border-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
