import { Search, ShoppingCart, Users } from 'lucide-react'

const featureGroups = [
  {
    title: "S2C 战略寻源层",
    subtitle: "从需求到合同，科学寻源",
    icon: Search,
    features: [
      { title: "需求管理", desc: "统一需求归集、智能合并、自动生成采购计划，杜绝重复采购与盲目采购。" },
      { title: "电子招投标", desc: "在线询报价、招投标、竞价，全程留痕可追溯，实现阳光透明采购。" },
      { title: "数字合同", desc: "合同在线审批、电子签章、履约跟踪，合同全生命周期数字化管理。" }
    ]
  },
  {
    title: "P2P 采购执行层",
    subtitle: "从订单到付款，高效闭环",
    icon: ShoppingCart,
    features: [
      { title: "采购订单管理", desc: "采购申请、订单下达、变更管理，与供应商实时协同，缩短采购周期。" },
      { title: "收货与质检", desc: "到货签收、质量检验、入库管理，全程条码/RFID 识别，数据自动采集。" },
      { title: "发票与付款", desc: "三单匹配（订单-收货-发票）、智能对账、自动生成付款计划，业财一体。" }
    ]
  },
  {
    title: "SRM 供应商管理",
    subtitle: "全生命周期，深度协同",
    icon: Users,
    features: [
      { title: "供应商准入", desc: "在线注册、资质审核、现场评审，建立合格供应商库，源头把控质量。" },
      { title: "绩效评价", desc: "多维度 KPI 考核（交期、质量、服务、价格），数据驱动的供应商分级。" },
      { title: "风险监控", desc: "实时监控供应商经营风险、合规风险，及时预警，保障供应链安全。" }
    ]
  }
]

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">端到端采购供应链解决方案</h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            从战略寻源到采购执行再到供应商管理，构建全方位的数字化采购能力，实现降本、增效、控险。
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
