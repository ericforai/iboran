import { Calculator, DollarSign, GitMerge } from 'lucide-react'

const featureGroups = [
  {
    title: "智能核算层",
    subtitle: "事项驱动，自动生账",
    icon: Calculator,
    features: [
      { title: "智能事项中台", desc: "以'事件'为中心的数据模型，自动将业务事件转化为财务凭证，一次录入多维记账。" },
      { title: "自动化核算与结账", desc: "AI 驱动的凭证生成、智能审计机器人、一键月结，实现凭证自动化率 100%。" },
      { title: "多账簿管理", desc: "支持法定、管理、税务等多套账簿并行，满足不同维度的核算与报告需求。" }
    ]
  },
  {
    title: "成本管理层",
    subtitle: "精细归集，实时透视",
    icon: DollarSign,
    features: [
      { title: "精细化成本核算", desc: "与生产项目深度集成，实现'料、工、费'工序级的精准归集与分摊。" },
      { title: "实时成本追踪", desc: "成本核算同步于业务发生，管理者可随时获取产品、订单、项目的实时成本。" },
      { title: "多维利润分析", desc: "按产品、客户、渠道、区域等多维度进行利润贡献分析，支撑战略决策。" }
    ]
  },
  {
    title: "合并报表层",
    subtitle: "一键合并，智能抵消",
    icon: GitMerge,
    features: [
      { title: "智能合并报表", desc: "自动汇率折算、内部交易抵消、复杂股权关系处理，合并效率提升 80%。" },
      { title: "合并科目标准化", desc: "统一 3,000+ 合并科目映射，消除手工对账与核对的繁琐流程。" },
      { title: "多准则输出", desc: "支持中国会计准则、IFRS、US GAAP 等多准则并行出表，满足跨境经营需求。" }
    ]
  }
]

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">财务数智化，从业务闭环开始</h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            从手工核算到智能财务的跨越，构建全方位的数字化财务能力，实现效率与价值的双重飞跃。
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
