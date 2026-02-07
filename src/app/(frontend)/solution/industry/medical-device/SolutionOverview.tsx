import { Share2, Link, Database, Cpu, Activity } from 'lucide-react'

const features = [
  {
    icon: Share2,
    title: '一体化协同',
    description: '打通研发、供应、生产、质量、营销、财务及人力，实现多组织一体化应用模式。'
  },
  {
    icon: Database,
    title: '数据统一驱动',
    description: '统一元数据、统一流程和表单，以保障业务数据与规范统一治理，过程规范化，结果数据化。'
  },
  {
    icon: Link,
    title: '全流程追溯',
    description: '深度集成 UDI 与产供销业务，实现从原材料采购到终端销售的全过程合规追溯。'
  },
  {
    icon: Cpu,
    title: '智能化创新',
    description: '利用 YonGPT 语义理解与 AI 智能体，赋能质量预警、经营分析与办公协同场景。'
  }
]

export default function SolutionOverview() {
  return (
    <section className="py-24 bg-[#F7F8FA]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-6">
            YonSuite 医疗器械行业一体化解决方案
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            泊冉软件基于用友 YonSuite 商业创新平台，为医疗器械企业构建全在线、一体化、智能化的数智引擎。
            通过一个平台落地所有业务场景，消除信息孤岛，实现业财深度融合。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-[#0052D9]" />
              </div>
              <h3 className="text-xl font-bold text-[#1F2329] mb-4">{feature.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-slate-100 overflow-hidden relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#1F2329] mb-6">
                全业务蓝图：从研发到商业化的一站式管理
              </h3>
              <ul className="space-y-4">
                {[
                  '质量管理：覆盖供应商审计、首营管理、检验放行及 GMP 控制',
                  'UDI 追溯：生成/扫码/校验工作台与药监平台深度集成',
                  '项目研发：项目计划、进度填报、费用管控与成果物归档',
                  '精益生产：MRP 运算优化需求计划，精细化成本构成实时分析',
                  '费控管理：业务代表移动拜访与外勤人员费用闭环管控'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#E60012] shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6 aspect-video flex items-center justify-center border border-slate-200 shadow-inner">
               <div className="text-center">
                  <Activity className="w-16 h-16 text-blue-200 mx-auto mb-4" />
                  <p className="text-slate-400 font-medium">医疗器械数智化应用架构</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
