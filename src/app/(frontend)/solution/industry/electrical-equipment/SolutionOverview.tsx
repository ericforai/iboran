import { 
  ShoppingCart, 
  FlaskConical, 
  Package, 
  Factory, 
  FolderKanban, 
  Calculator,
  Layers,
  Database,
  Bot
} from 'lucide-react'

const coreModules = [
  { icon: ShoppingCart, name: '营销云', desc: 'L2C销售到收款' },
  { icon: FlaskConical, name: '研发云', desc: 'PLM产品生命周期' },
  { icon: Package, name: '供应链云', desc: 'S2P采购到付款' },
  { icon: Factory, name: '制造云', desc: 'P2M生产制造' },
  { icon: FolderKanban, name: '项目云', desc: '项目型生产管控' },
  { icon: Calculator, name: '财务云', desc: 'R2R业财融合' },
]

const platformLayers = [
  { icon: Layers, name: '应用平台', desc: '组织、流程、主数据' },
  { icon: Database, name: '数据平台', desc: '数据湖、BI分析' },
  { icon: Bot, name: '智能平台', desc: 'AI大模型、智能助理' },
]

export default function SolutionOverview() {
  return (
    <section className="py-24 bg-[#F7F8FA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-[#0052D9] font-semibold tracking-wider uppercase">
            Solution Overview
          </span>
          <h2 className="text-3xl font-bold text-[#1F2329] mt-2 mb-4">
            用友BIP超级版电气装备解决方案
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            基于用友BIP数智化统一平台，提供端到端业务融合能力，覆盖营销、研发、供应链、制造、项目、财务全领域
          </p>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mt-4" />
        </div>
        
        {/* Architecture Diagram */}
        <div className="max-w-5xl mx-auto">
          {/* Core Business Modules */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 mb-6">
            <h3 className="text-lg font-bold text-[#1F2329] mb-6 text-center">核心业务云</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {coreModules.map((module, idx) => (
                <div 
                  key={idx}
                  className="text-center p-4 rounded-xl bg-gradient-to-br from-blue-50 to-slate-50 border border-slate-100 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-[#0052D9] rounded-lg flex items-center justify-center mx-auto mb-3">
                    <module.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="font-semibold text-[#1F2329] text-sm">{module.name}</div>
                  <div className="text-xs text-slate-500 mt-1">{module.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Platform Layers */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-white mb-4 text-center">iuap 统一数智底座</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {platformLayers.map((layer, idx) => (
                <div 
                  key={idx}
                  className="text-center p-4 rounded-xl bg-white/5 border border-white/10"
                >
                  <layer.icon className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <div className="font-semibold text-white text-sm">{layer.name}</div>
                  <div className="text-xs text-slate-400 mt-1">{layer.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Capabilities */}
          <div className="mt-8 grid md:grid-cols-4 gap-4">
            {[
              { label: 'MTO/MTS混合计划', value: '柔性生产' },
              { label: 'WMS+TMS一体', value: '物流协同' },
              { label: '多组织内部交易', value: '集团管控' },
              { label: '项目型成本归集', value: '精准核算' },
            ].map((cap, idx) => (
              <div key={idx} className="bg-white rounded-xl p-4 text-center border border-slate-100">
                <div className="text-[#E60012] font-bold text-lg">{cap.value}</div>
                <div className="text-slate-600 text-sm mt-1">{cap.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
