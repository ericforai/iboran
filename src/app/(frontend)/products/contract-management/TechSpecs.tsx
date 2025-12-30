import { Server, Lock, Cpu, Globe } from 'lucide-react'

export default function TechSpecs() {
  const specs = [
    {
      title: '部署与性能',
      icon: <Server className="text-blue-500" />,
      items: [
        { label: '部署方式', value: '私有云 / 公有云 / 混合云' },
        { label: '并发支持', value: '支持万级以上并发审批' },
        { label: '系统架构', value: '微服务架构，支持横向扩展' },
      ]
    },
    {
      title: '安全与合效',
      icon: <Lock className="text-blue-500" />,
      items: [
        { label: '数据加密', value: 'AES-256 数据库级加密' },
        { label: '电子取证', value: '符合《电子签名法》要求' },
        { label: '访问控制', value: '基于 RBAC 的精细化权限' },
      ]
    },
    {
      title: '集成能力',
      icon: <Cpu className="text-blue-500" />,
      items: [
        { label: '开放接口', value: '标准化 RESTful API 体系' },
        { label: '认证集成', value: '支持 LDAP / AD / SSO' },
        { label: '财务集成', value: '支持 NC/U8/U9/SAP/Oracle' },
      ]
    },
    {
      title: '访问渠道',
      icon: <Globe className="text-blue-500" />,
      items: [
        { label: '移动支持', value: '鸿蒙 / iOS / Android / 企业微信' },
        { label: '离线模式', value: '支持内网部署与离线审批' },
        { label: '浏览器', value: '适配主流浏览器兼容模式' },
      ]
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">技术规范与集成架构</h2>
          <p className="text-lg text-slate-600">
            基于成熟的集成底座与协同能力，确保系统在复杂 IT 环境下的高可用性与安全性。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specs.map((spec, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="flex items-center gap-3 mb-8">
                {spec.icon}
                <h3 className="font-bold text-slate-900">{spec.title}</h3>
              </div>
              <div className="space-y-6">
                {spec.items.map((item, i) => (
                  <div key={i}>
                    <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">{item.label}</div>
                    <div className="text-sm text-slate-700 font-medium">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
