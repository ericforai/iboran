import { FileText, PenTool, Bell, Database, PieChart, ShieldCheck, Share2, ClipboardList, Cpu } from 'lucide-react'

export default function Capabilities() {
  const capabilities = [
    {
      title: '数智范本库',
      desc: '统一合同类型与模版，支持动态变量填充，实现“一分钟起草”。',
      icon: <FileText className="text-blue-600" />,
    },
    {
      title: '电子签章集成',
      desc: '集成法大大等主流平台，实现实名认证、电子签约及司法存证。',
      icon: <PenTool className="text-blue-600" />,
    },
    {
      title: '智能履约预警',
      desc: '针对合同到期、收付款节点、延期交付等关键事件自动预警。',
      icon: <Bell className="text-blue-600" />,
    },
    {
      title: '合同台账管理',
      desc: '多维度分权查询，支持台账实时更新，数据共享互通更高效。',
      icon: <Database className="text-blue-600" />,
    },
    {
      title: '决策分析报表',
      desc: '合同空间大屏展示，实时监控各维度合同金额、执行进度与红线。',
      icon: <PieChart className="text-blue-600" />,
    },
    {
      title: '全生命周期审计',
      desc: '支持修改留痕、权责匹配，以保障每一份合同签署都符合公司内控。',
      icon: <ShieldCheck className="text-blue-600" />,
    },
    {
      title: '外部系统协同',
      desc: '无缝对接 CRM、ERP、财务系统，打破合同与业务数据孤岛。',
      icon: <Share2 className="text-blue-600" />,
    },
    {
      title: '档案电子化管理',
      desc: '合同自动归档，形成电子索引，支持移动端随时调阅与下载。',
      icon: <ClipboardList className="text-blue-600" />,
    },
    {
      title: 'OCR 自动提取',
      desc: '利用 AI 技术自动识别扫描件关键字段，减少人工录入风险。',
      icon: <Cpu className="text-blue-600" />,
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">核心能力清单</h2>
          <p className="text-lg text-slate-600">
            不仅是工具的堆砌，更是对合同管理全场景业务的深度覆盖。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((item, index) => (
            <div key={index} className="group p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:border-blue-100 transition-all duration-300">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
