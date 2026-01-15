import { 
  TrendingUp, 
  ShoppingCart, 
  Factory, 
  Calculator,
  Boxes,
  Wrench,
  Shield,
  Zap
} from 'lucide-react'

const architectureLayers = [
  {
    name: '决策层',
    color: 'bg-blue-600',
    modules: ['经营看板', '总经理看板', '决策分析'],
  },
  {
    name: '运营层',
    color: 'bg-emerald-600',
    modules: ['集团财务', '预算管理', '资金管理', '人力资源', '销售协同', '供应协同'],
  },
  {
    name: '执行层',
    color: 'bg-amber-600',
    modules: ['生产调度', '质量管理', '厂内物流', '设备管理', '能源管理', '安环管理'],
  },
  {
    name: '现场层',
    color: 'bg-slate-600',
    modules: ['物联AIoT', '设备采集', '检测采集', '能源采集', '数据处理'],
  },
]

const coreProducts = [
  { icon: TrendingUp, name: '销售管理', role: '多销售模式、价格管理、客户APP' },
  { icon: ShoppingCart, name: '采购管理', role: '全球寻源、供应商协同、无人值守' },
  { icon: Factory, name: '生产管理', role: 'PTM全流程、MES执行、质量追溯' },
  { icon: Calculator, name: '财务管理', role: '业财一体、成本核算、精细化绩效' },
  { icon: Boxes, name: '库存管理', role: '库存可视化、库龄预警、保质期管理' },
  { icon: Wrench, name: '设备管理', role: 'IOT监控、预测维护、点巡检' },
  { icon: Shield, name: '安环管理', role: '双预防、作业票、环保监控' },
  { icon: Zap, name: '能源管理', role: '能源采集、能源分析、碳足迹' },
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
            用友BIP基础化工行业蓝图方案
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            构建从决策层到现场层的全栈数智化平台，支撑基础化工企业五化战略落地
          </p>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mt-4" />
        </div>

        {/* Architecture Layers */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-3">
            {architectureLayers.map((layer, idx) => (
              <div key={idx} className="flex items-stretch gap-3">
                <div className={`${layer.color} text-white font-bold text-sm px-4 py-3 rounded-l-lg flex items-center justify-center min-w-[80px]`}>
                  {layer.name}
                </div>
                <div className="flex-1 bg-white rounded-r-lg p-3 border border-slate-200 flex flex-wrap gap-2">
                  {layer.modules.map((module, midx) => (
                    <span key={midx} className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">
                      {module}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreProducts.map((product, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                <product.icon className="w-6 h-6 text-[#0052D9]" />
              </div>
              <h3 className="text-lg font-bold text-[#1F2329] mb-2">{product.name}</h3>
              <p className="text-sm text-slate-600">{product.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
