'use client'

import { motion } from 'framer-motion'
import { Cloud, Code, Database, Globe, Lock, Server } from 'lucide-react'

const specs = [
  {
    category: '部署环境',
    icon: Cloud,
    items: [
      { label: '公有云', value: 'YonBIP 专属云资源池' },
      { label: '私有云', value: '支持客户本地数据中心部署' },
      { label: '混合云', value: '跨云融合部署模式' }
    ]
  },
  {
    category: '客户端支持',
    icon: Globe,
    items: [
      { label: 'Web 端', value: 'Chrome 80+, Edge, Firefox, Safari' },
      { label: '移动端', value: 'iOS 12+, Android 8.0+, 友空间 App' },
      { label: '桌面端', value: 'Windows, macOS 原生客户端' }
    ]
  },
  {
    category: '集成能力',
    icon: Code,
    items: [
      { label: 'API 协议', value: 'Restful API, GraphQL, SOAP' },
      { label: '消息总线', value: 'RabbitMQ, Kafka, RocketMQ' },
      { label: 'SSO 协议', value: 'OAuth2.0, SAML 2.0, CAS, OIDC' }
    ]
  },
  {
    category: '开发扩展',
    icon: Database,
    items: [
      { label: '后端技术', value: 'Java Spring Boot, 微服务架构' },
      { label: '前端框架', value: 'React, Vue, H5 微组件标准' },
      { label: '低代码', value: 'YonBuilder 低代码扩展支持' }
    ]
  },
  {
    category: '安全合规',
    icon: Lock,
    items: [
      { label: '传输加密', value: '全链路 HTTPS / TLS 1.3 加密' },
      { label: '身份认证', value: 'MFA 多因素认证, 扫码登录' },
      { label: '数据安全', value: '国密算法支持, 数据脱敏存储' }
    ]
  },
  {
    category: '性能指标',
    icon: Server,
    items: [
      { label: '并发支持', value: '支持千万级用户并发访问' },
      { label: '响应时间', value: '页面平均加载时间 < 1.5s' },
      { label: '可用性', value: 'SLA 99.99% 高可用保障' }
    ]
  }
]

export function TechSpecs() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            企业级技术规格标准
          </h2>
          <p className="text-lg text-slate-600">
            全面适配主流技术栈与信创环境，满足大型企业对安全、性能与扩展性的严苛要求。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specs.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4 border-b border-slate-100 pb-3">
                <spec.icon className="w-5 h-5 text-blue-600" />
                <h3 className="font-bold text-slate-800">{spec.category}</h3>
              </div>
              <ul className="space-y-3">
                {spec.items.map((item, i) => (
                  <li key={i} className="flex justify-between items-start text-sm">
                    <span className="text-slate-500 shrink-0">{item.label}</span>
                    <span className="text-slate-900 font-medium text-right">{item.value}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
