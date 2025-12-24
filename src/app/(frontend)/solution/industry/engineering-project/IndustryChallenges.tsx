import { TrendingDown, LayoutPanelLeft, FileClock, ShieldCheck } from 'lucide-react'

const challenges = [
  {
    icon: TrendingDown,
    title: '成本管控难度大',
    description: '结算流程复杂，人工归集料工费效率极低。变更频繁且记录不透明，导致实际成本极易超出项目预算，甚至引发结算纠纷。',
    dataPoint: '手工结算效率低下，数据真实性难以保证',
  },
  {
    icon: LayoutPanelLeft,
    title: '信息孤岛现象严重',
    description: '立项、招标、合同与财务系统脱节，无法实现全周期数据闭环。项目前期决策缺乏实时数据支撑，甚至出现一事多办。',
    dataPoint: '业财脱节是制约高效管控的主要瓶颈',
  },
  {
    icon: FileClock,
    title: '进度管理不够透明',
    description: '工程进度依赖人工汇报，存在滞后和虚假成分。缺乏实时监控体系，难以及早发现延期风险并采取补救措施。',
    dataPoint: '进度风险难以在第一时间被识别与预警',
  },
  {
    icon: ShieldCheck,
    title: '质量及安全隐患',
    description: '施工现场隐患整改缺乏影像支撑和有据可查。质量缺陷无法在第一时间追根溯源，管理颗粒度无法深入一线。',
    dataPoint: '数字化拍照与存证是质量管控的关键',
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
            业主方工程管理的痛点与困惑
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {challenges.map((challenge, idx) => (
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
