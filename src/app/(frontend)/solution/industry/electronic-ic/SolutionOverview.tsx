import { CheckCircle2 } from 'lucide-react'

interface CoreProduct {
  name: string
  role: string
}

// 核心产品数据内置在组件中
const coreProducts: CoreProduct[] = [
  { name: '智石开 PLM', role: '研发项目时程与版本管控' },
  { name: 'BIP 供应链云', role: '全场景委外协同与计划编排' },
  { name: '制造云 (WIP)', role: 'LOT/刻号追踪与工装治具管理' },
  { name: '财务/成本中心', role: '订单级精细成本与差异分析' }
]

const description = '泊冉软件基于用友BIP超级版，为电子IC行业构建"研供产销服"一体化平台。针对Fabless模式，重点强化委外协同与批号追踪；针对IDM模式，强化生产执行与良率分析，帮助企业实现从实验室研发到规模化量产的全过程数智化。'

export default function SolutionOverview() {
  return (
    <section className="py-24 bg-[#F7F8FA]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* 左侧文字描述 */}
          <div className="lg:w-1/2">
            <span className="text-sm text-[#0052D9] font-semibold tracking-wider uppercase">
              Solution Overview
            </span>
            <h2 className="text-3xl font-bold text-[#1F2329] mt-2 mb-6">
              端到端数字化集成，打通业务与管理闭环
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {description}
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {coreProducts.map((product, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[#1F2329]">{product.name}</h4>
                    <p className="text-xs text-slate-500 mt-1">{product.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* 右侧视觉展示/架构图 */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <div className="text-8xl font-black">IC</div>
              </div>
              
              <div className="space-y-6 relative z-10">
                <h4 className="text-xl font-bold text-[#1F2329] mb-4 flex items-center gap-2">
                  <div className="w-2 h-6 bg-[#0052D9] rounded-full" />
                  IC行业全生命周期管理架构
                </h4>
                
                {/* 简易架构图模拟 */}
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg text-center">
                    <p className="font-bold text-[#0052D9]">研发管理 (PLM)</p>
                    <p className="text-[10px] text-blue-400">IP选用 · 版本控制 · 工程变更</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-1 p-4 bg-red-50 border border-red-100 rounded-lg text-center">
                      <p className="font-bold text-[#E60012]">计划/供应链</p>
                      <p className="text-[10px] text-red-400">委外协同 · MPS/MRP</p>
                    </div>
                    <div className="flex-1 p-4 bg-slate-50 border border-slate-100 rounded-lg text-center">
                      <p className="font-bold text-slate-700">销售/CRM</p>
                      <p className="text-[10px] text-slate-400">客户报价 · 样品管理</p>
                    </div>
                  </div>
                  <div className="p-4 bg-green-50 border border-green-100 rounded-lg text-center">
                    <p className="font-bold text-green-700">批号追溯与成本核算 (ERP+WIP)</p>
                    <p className="text-[10px] text-green-400">Lot Tracking · 精细化核算</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
