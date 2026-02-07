import { Server, ShieldCheck, Database } from 'lucide-react'

export const TechSpecs = () => {
  const specs = [
    {
      icon: Server,
      title: '部署与集成',
      items: [
        '支持私有云部署、混合云或云端 SaaS 调用',
        '标准 REST/Webservice 接口体系，适配各种异构系统',
        '内置用友 BIP / U9 cloud / U8 cloud 专用适配器'
      ]
    },
    {
      icon: ShieldCheck,
      title: '安全与合规',
      items: [
        '符合等保三级安全要求，支持国密算法加密',
        '字段级权限控制，供应商逻辑分离，以保障信息不串岗',
        '支持全程审计跟踪，所有操作、审批、投标记录均可追溯'
      ]
    },
    {
      icon: Database,
      title: '数据处理量',
      items: [
        '支持亿级数据存储，万人级供应商在线协同并发',
        '基于协同索引引擎，支持采购历史数据的毫秒级检索',
        '分布式数据库架构适配，保障业务连续性'
      ]
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">技术标准与架构</h2>
          <p className="text-slate-600">稳定、安全、可扩展的技术底层，支撑组织复杂的采购业务演进。</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {specs.map((spec, index) => (
            <div key={index} className="space-y-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 rounded-xl">
                <spec.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{spec.title}</h3>
              <ul className="space-y-4">
                {spec.items.map((item, i) => (
                  <li key={i} className="text-slate-600 text-sm flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 bg-blue-600 rounded-full shrink-0"></span>
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
