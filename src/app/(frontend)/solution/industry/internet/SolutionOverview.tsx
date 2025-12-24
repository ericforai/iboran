import { Layers, Database, Cloud } from 'lucide-react'

export default function SolutionOverview() {
  const coreProducts = [
    { name: '全球司库', role: '资金流动性管理与风险控制' },
    { name: '智能财务', role: '业财融合与精细化核算' },
    { name: '人力云', role: '组织效能与灵活用工管理' },
    { name: '数智采购', role: '供应链协同与阳光采购' },
    { name: '商业创新平台', role: '敏捷开发与生态连接' },
  ]

  return (
    <section className="py-24 bg-[#F7F8FA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-[#0052D9] font-semibold tracking-wider uppercase">
            Solution Architecture
          </span>
          <h2 className="text-3xl font-bold text-[#1F2329] mt-2 mb-4">
            YonBIP 互联网行业数智化总体架构
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#1F2329]">
              构建敏捷、智能、全球一体化的数智底座
            </h3>
            <p className="text-slate-600 leading-relaxed">
              基于用友 BIP 商业创新平台，为互联网企业提供从底层技术平台到上层业务应用的全方位支持。打通业务与财务壁垒，实现数据驱动的精细化运营，支撑企业全球化扩张与业务敏捷创新。
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                  <Cloud className="w-6 h-6 text-[#0052D9]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1F2329]">技术底座</h4>
                  <p className="text-sm text-slate-600">云原生、微服务架构，支持高并发与弹性伸缩</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center shrink-0">
                  <Database className="w-6 h-6 text-[#E60012]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1F2329]">数据智能</h4>
                  <p className="text-sm text-slate-600">实时数据中台，赋能经营分析与智能决策</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
                  <Layers className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1F2329]">业务中台</h4>
                  <p className="text-sm text-slate-600">模块化业务能力（BBC），支持前台业务快速迭代</p>
                </div>
              </div>
            </div>
            
            <div className="pt-6">
               <h4 className="font-bold text-[#1F2329] mb-3">核心产品模块：</h4>
               <div className="flex flex-wrap gap-2">
                 {coreProducts.map((p, i) => (
                   <span key={i} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-sm text-slate-600 shadow-sm">
                     {p.name}
                   </span>
                 ))}
               </div>
            </div>
          </div>

          <div className="bg-white p-2 rounded-2xl shadow-xl border border-slate-100">
             {/* 架构图占位，实际项目应替换为架构图 */}
             <div className="aspect-[4/3] bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 p-8">
                  {/* 模拟架构图层次 */}
                  <div className="w-full h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold opacity-90 shadow-md">
                    生态连接 (银行/税务/商旅/供应商)
                  </div>
                  <div className="grid grid-cols-3 gap-2 w-full">
                    <div className="h-24 bg-red-500/10 border border-red-200 rounded-lg flex items-center justify-center text-center text-sm font-medium text-red-800 p-2">
                      智能财务<br/>(核算/共享/税务)
                    </div>
                    <div className="h-24 bg-blue-500/10 border border-blue-200 rounded-lg flex items-center justify-center text-center text-sm font-medium text-blue-800 p-2">
                      全球司库<br/>(资金/融资/外汇)
                    </div>
                    <div className="h-24 bg-green-500/10 border border-green-200 rounded-lg flex items-center justify-center text-center text-sm font-medium text-green-800 p-2">
                      人力资源<br/>(CoreHR/绩效/招聘)
                    </div>
                  </div>
                  <div className="w-full h-16 bg-slate-800 rounded-lg flex items-center justify-center text-white font-bold opacity-90 shadow-md">
                    YonBIP 商业创新平台 (PaaS)
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}
