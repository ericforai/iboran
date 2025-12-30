import { Compass, PenTool, Rocket, Headphones } from 'lucide-react'

const phases = [
  {
    icon: Compass,
    title: '阶段一：蓝图规划',
    desc: '梳理企业费控现状，定义费用标准与审批流，设计业财映射规则。',
    items: ['现状诊断报告', '业务流程蓝图', '数据标准规范']
  },
  {
    icon: PenTool,
    title: '阶段二：系统配置',
    desc: '基于 YonBIP 平台进行低代码配置，搭建表单、流程与集成接口。',
    items: ['环境搭建', '集成接口开发', '规则引擎配置']
  },
  {
    icon: Rocket,
    title: '阶段三：上线切换',
    desc: '组织用户培训，进行并行验证，确保从旧系统平滑迁移。',
    items: ['用户操作手册', '数据迁移报告', '上线试运行']
  },
  {
    icon: Headphones,
    title: '阶段四：运营优化',
    desc: '监控自动对账率与智能稽核通过率，通过数据驱动持续优化规则。',
    items: ['系统巡检报告', '运营优化建议', '季度复盘']
  }
]

export default function Methodology() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          <div className="max-w-xl">
             <span className="text-[#0052D9] font-bold tracking-wider uppercase text-sm mb-2 block">Delivery Methodology</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2329] mb-4">
              标准化实施交付路径
            </h2>
            <p className="text-slate-600">
              基于泊冉数百家大型企业的交付经验，我们总结了一套成熟的实施方法论，确保项目按时、高质量上线。
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {phases.map((phase, idx) => (
            <div key={idx} className="group">
              <div className="bg-[#F7F8FA] rounded-2xl p-8 h-full border border-transparent hover:border-[#0052D9] hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="mb-6 flex justify-between items-start">
                   <div className="bg-white p-3 rounded-xl shadow-sm group-hover:bg-[#0052D9] transition-colors">
                      <phase.icon className="w-6 h-6 text-[#0052D9] group-hover:text-white" />
                   </div>
                   <span className="text-4xl font-bold text-slate-300 group-hover:text-blue-100 transition-colors">0{idx + 1}</span>
                </div>
                
                <h3 className="text-lg font-bold text-[#1F2329] mb-3 group-hover:text-[#0052D9]">{phase.title}</h3>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                  {phase.desc}
                </p>
                
                <ul className="space-y-2">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-center text-xs text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E60012] mr-2"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
