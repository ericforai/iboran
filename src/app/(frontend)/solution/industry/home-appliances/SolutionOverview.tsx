import { CheckCircle2 } from 'lucide-react'

interface CoreProduct {
  name: string
  role: string
}

const coreProducts: CoreProduct[] = [
  { name: 'YonSuite 电商云', role: '全渠道订单聚合与高效拉单' },
  { name: 'YonSuite 供应云', role: '多仓一盘货及外仓集成协同' },
  { name: 'YonSuite 营销云', role: '终端赋能与营销费用一体化' },
  { name: 'YonSuite 财务云', role: '海量流水对账与利润精准核算' }
]

const description = '泊冉软件针对家电及消费电子行业"全渠道、快周转、强追溯"的特点，推出以 YonSuite 为核心的一体化数智方案。方案打通了从天猫/京东/拼多多等电商平台到科捷/顺丰等 WMS 外仓的完整链路，实现订单透明流转与 SN 码全生命周期追溯。'

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
              端到端数字化集成，激发家电全渠道价值
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {description}
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {coreProducts.map((product, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm border border-slate-100">
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
                <div className="text-8xl font-black text-blue-900">3C</div>
              </div>
              
              <div className="space-y-6 relative z-10">
                <h4 className="text-xl font-bold text-[#1F2329] mb-4 flex items-center gap-2">
                  <div className="w-2 h-6 bg-blue-600 rounded-full" />
                  家电及消费电子全闭环管理架构
                </h4>
                
                {/* 简易架构图模拟 */}
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg text-center">
                    <p className="font-bold text-blue-700">全渠道触达 (B2C/B2B/O2O)</p>
                    <p className="text-[10px] text-blue-400">主流电商集成 · 社交营销 · 终端掌控</p>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-1 p-4 bg-red-50 border border-red-100 rounded-lg text-center">
                      <p className="font-bold text-[#E60012]">订单履约中心</p>
                      <p className="text-[10px] text-red-500">智能审单 · 促销匹配</p>
                    </div>
                    <div className="flex-1 p-4 bg-indigo-50 border border-indigo-100 rounded-lg text-center">
                      <p className="font-bold text-indigo-700">全链 SN 追踪</p>
                      <p className="text-[10px] text-indigo-500">工厂标定 · 配送追溯</p>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-center">
                    <p className="font-bold text-slate-700">一盘货协作 (多仓/外仓集成)</p>
                    <p className="text-[10px] text-slate-500">库存共享 · WMS/ERP 深度融合</p>
                  </div>

                  <div className="p-4 bg-green-50 border border-green-100 rounded-lg text-center">
                    <p className="font-bold text-green-700">数据治理与数智对账</p>
                    <p className="text-[10px] text-green-500">海量流水 · 损益实时分析</p>
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
