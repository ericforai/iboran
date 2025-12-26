import React from 'react'
import { Server, HardDrive, ShieldCheck, Zap } from 'lucide-react'

const specs = [
  {
    title: '部署架构',
    items: ['华为云/阿里云专属公有云', '私有化云部署 (IDC)', '容器化微服务容器底座'],
    icon: Server,
  },
  {
    title: '集成能力',
    items: ['内置 OpenAPI 平台', '预集成 PLM/MES/SRM', '支持低代码业务扩展'],
    icon: Zap,
  },
  {
    title: '数据资产',
    items: ['多租户物理/逻辑隔离', '核心数据动态脱敏', '国产化主流软硬件适配'],
    icon: ShieldCheck,
  },
  {
    title: '性能保障',
    items: ['高并发支撑 (亿级分录)', '24/7 云端监控审计', '异地容灾备份机制'],
    icon: HardDrive,
  },
]

export const TechSpecs = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-brand-red">技术集成与安全</h2>
          <p className="text-gray-600">云原生架构，保障系统敏捷性、扩展性与极致安全。</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specs.map((spec, idx) => (
            <div key={idx} className="p-8 rounded-3xl border border-gray-100 hover:border-blue-200 transition-all bg-gray-50/30">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6">
                <spec.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{spec.title}</h3>
              <ul className="space-y-3">
                {spec.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
