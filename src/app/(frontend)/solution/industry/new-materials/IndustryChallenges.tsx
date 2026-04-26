import { Server, Gauge, Wrench, FileWarning } from 'lucide-react'

const challenges = [
  {
    icon: Server,
    title: '信息化基础薄弱',
    description: '绝大部分企业仅停留在进销存+财务应用层面，生产、质量、设备等环节数据孤岛严重',
    dataPoint: '超过70%的新材料企业ERP应用覆盖不足',
  },
  {
    icon: Gauge,
    title: '生产管控依赖DCS',
    description: '生产现场主要依赖DCS系统进行工序参数监控，缺乏与ERP系统的有效整合',
    dataPoint: 'MES/WMS选型主要集中在一体化生产模式工厂',
  },
  {
    icon: Wrench,
    title: '设备运维压力大',
    description: '生产环境恶劣导致设备配件更换频率远高于正常，设备监控预警需求显著',
    dataPoint: '电机、泵等关键设备故障率高',
  },
  {
    icon: FileWarning,
    title: 'IPO内控不合规',
    description: '成本核算方式不符合上市审计要求，流程制度不规范，需花费百万级咨询辅导费用',
    dataPoint: 'IPO机构评估常指出内控流程缺失',
  },
]

export default function IndustryChallenges() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-[#0052D9] font-semibold tracking-wider uppercase">
            Industry Challenges
          </span>
          <h2 className="text-3xl font-bold text-[#1F2329] mt-2 mb-4">
            新材料企业面临的核心挑战
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {challenges.map((challenge: any, idx: number) => (
            <div
              key={idx}
              className="bg-[#F7F8FA] p-8 rounded-xl border border-slate-100 hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-5">
                <challenge.icon className="w-7 h-7 text-[#E60012]" />
              </div>
              <h3 className="text-lg font-bold text-[#1F2329] mb-3">
                {challenge.title}
              </h3>
              <p className="text-slate-600 text-sm mb-3">
                {challenge.description}
              </p>
              <p className="text-xs text-[#0052D9] font-medium">
                📊 {challenge.dataPoint}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
