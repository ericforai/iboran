import { Cloud, Code, Workflow } from 'lucide-react'

const featureGroups = [
  {
    title: "云原生基础设施",
    subtitle: "弹性扩展，稳定可靠",
    icon: Cloud,
    features: [
      { title: "容器化部署", desc: "基于 Kubernetes 的容器编排，支持弹性伸缩、自动恢复，轻松应对业务高峰。" },
      { title: "多云多端支持", desc: "适配公有云、私有云、混合云，支持 PC、移动、IoT 等多终端一体化。" },
      { title: "高可用架构", desc: "多活容灾、服务熔断、限流降级，保障业务连续性，SLA 达 99.99%。" }
    ]
  },
  {
    title: "敏捷开发平台",
    subtitle: "低代码，高效率",
    icon: Code,
    features: [
      { title: "低代码开发", desc: "可视化拖拽式开发，业务人员也能快速搭建应用，开发效率提升 5-10 倍。" },
      { title: "微服务架构", desc: "服务解耦、独立部署，支持灰度发布、蓝绿部署，快速迭代不影响全局。" },
      { title: "DevOps 一体化", desc: "CI/CD 流水线自动化，从代码提交到生产部署，实现持续交付。" }
    ]
  },
  {
    title: "开放集成能力",
    subtitle: "连接一切，生态共建",
    icon: Workflow,
    features: [
      { title: "统一 API 网关", desc: "标准化 API 管理，流量控制、认证授权、监控告警，保障接口安全高效。" },
      { title: "预置连接器", desc: "200+ 业务系统预置连接器，ERP、CRM、WMS 等系统即插即用。" },
      { title: "事件驱动集成", desc: "基于消息队列的异步解耦，支持复杂业务流程编排与实时数据同步。" }
    ]
  }
]

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">CTP 核心技术能力</h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            构建企业级云原生PaaS平台，提供从基础设施到应用开发的全栈技术支撑能力。
          </p>
        </div>

        <div className="space-y-16">
          {featureGroups.map((group, groupIdx) => (
            <div key={groupIdx} className="relative">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#0052D9]">
                  <group.icon size={26} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1F2329]">{group.title}</h3>
                  <p className="text-[#0052D9] font-medium">{group.subtitle}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {group.features.map((feature, featureIdx) => (
                  <div 
                    key={featureIdx}
                    className="p-8 bg-[#F7F8FA] rounded-2xl border border-transparent hover:border-blue-100 hover:bg-white hover:shadow-lg transition-all duration-300"
                  >
                    <h4 className="text-lg font-bold text-[#1F2329] mb-3 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#E60012] rounded-full" />
                      {feature.title}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
              
              {groupIdx < featureGroups.length - 1 && (
                <div className="absolute left-6 -bottom-10 w-0.5 h-8 bg-slate-100 hidden md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
