import { ZapOff, ShieldAlert, Layers, Clock } from 'lucide-react'

const painPoints = [
  {
    icon: ZapOff,
    title: '手工对账效率低下',
    description: '财务每天需登录多个网银下载回单，逐笔人工对账，重复劳动强度大，且极易出错。',
  },
  {
    icon: Clock,
    title: '信息传递严重滞后',
    description: '业务系统与银行系统割裂，余额和交易流水无法实时同步，决策层难以及时掌握资金全局。',
  },
  {
    icon: ShieldAlert,
    title: 'UKey 管理风险隐患',
    description: '实体 UKey 数量多、分散在不同财务手中，岗位权限不清晰，存在资金被挪用等违规操作风险。',
  },
  {
    icon: Layers,
    title: '异构系统集成极其昂贵',
    description: '每开发一家银行的直连都需要独立对接，接口标准不一、维护成本极高，严重阻碍司库建设。',
  },
]

export default function PainPoints() {
  return (
    <section className="py-24 bg-[#F7F8FA]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">
            为什么传统的网银模式无法支撑数智化经营？
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6" />
          <p className="text-slate-600">
            在多银行、多账户、全球化经营的背景下，缺乏统一底座的碎片化操作已成为企业降本增效的核心痛点。
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((point, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#E60012] transition-colors">
                <point.icon className="w-7 h-7 text-[#E60012] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-[#1F2329] mb-4">
                {point.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
