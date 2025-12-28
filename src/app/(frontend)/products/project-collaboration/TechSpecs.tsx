import React from 'react'
import { Server, Shield, Share2, Users } from 'lucide-react'

const specs = [
  {
    title: '集成能力',
    icon: <Share2 className="w-5 h-5" />,
    items: ['标准 Restful API 接口', '支持与各类 ERP 系统对接', '支持金蝶/用友财务凭证集成', '支持钉钉/微信/飞书深度集成']
  },
  {
    title: '安全防护',
    icon: <Shield className="w-5 h-5" />,
    items: ['多层级权限模型 (角色/岗位/人员)', '数据传输加密 (HTTPS/SSL)', '详细的系统操作留痕与审计', '支持国密算法加解密']
  },
  {
    title: '部署方式',
    icon: <Server className="w-5 h-5" />,
    items: ['支持私有化本地部署', '支持公有云 SaaS 模式', '支持混合云架构', '支持国产化操作系统/数据库']
  },
  {
    title: '用户规模',
    icon: <Users className="w-5 h-5" />,
    items: ['支持万级用户并在线', '分布式架构平滑扩展', '高并发项目任务处理优化', '数据隔离与多租户管理']
  }
]

export const TechSpecs = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold mb-6 italic">技术集成与安全</h2>
          <p className="text-gray-600 text-lg">
            稳定、安全、可连接，支撑企业项目管理数智化升级。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {specs.map((spec, idx) => (
            <div key={idx} className="p-8 rounded-2xl border border-gray-100 bg-gray-50/30 hover:bg-white hover:shadow-xl transition-all group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-lg bg-brand-red/5 text-brand-red flex items-center justify-center group-hover:bg-brand-red group-hover:text-white transition-colors">
                  {spec.icon}
                </div>
                <h3 className="text-xl font-bold">{spec.title}</h3>
              </div>
              <ul className="space-y-4">
                {spec.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
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
