import { CheckCircle2 } from 'lucide-react'

const features = [
  '数字化工厂建设：糖化、发酵、过滤、包装全流程MOM系统集成',
  '智能酿造平台：酿造参数自动采集、质量预判与工艺优化',
  '产销协同体系：SOP驱动的全局供应链协同与库存优化',
  '全渠道营销：电商、即时零售、传统渠道的统一管理与数据驱动',
  '业财一体化：体系标准建立、财报管报协同、实时成本核算'
]

export default function SolutionOverview() {
  return (
    <section className="py-24 bg-[#F7F8FA]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm text-[#0052D9] font-semibold tracking-wider uppercase">
              Solution Overview
            </span>
            <h2 className="text-3xl font-bold text-[#1F2329] mt-2 mb-6">
              用友BIP啤酒行业全价值链解决方案
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              基于用友BIP底座，构建以数据驱动、AI赋能的啤酒企业数智化管理运营体系，实现从智能酿造到消费者运营的全链路数字化转型。
            </p>
            
            <div className="space-y-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <CheckCircle2 className="w-6 h-6 text-[#E60012] shrink-0" />
                  <p className="text-slate-700 font-medium">{feature}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
            <div className="aspect-[4/3] bg-slate-50 rounded-lg flex items-center justify-center mb-6 overflow-hidden">
               {/* 架构图占位 */}
               <div className="text-center px-6">
                 <p className="text-slate-400 font-medium mb-2">啤酒行业数智化架构图</p>
                 <div className="flex flex-col gap-2">
                   <div className="px-4 py-2 bg-red-50 text-red-600 rounded text-sm border border-red-100">全渠道营销 | 即时零售 | 消费者运营</div>
                   <div className="px-4 py-2 bg-blue-50 text-blue-600 rounded text-sm border border-blue-100">智能工厂 | MOM平台 | 质量追溯</div>
                   <div className="px-4 py-2 bg-slate-100 text-slate-600 rounded text-sm border border-slate-200">业财融合 | 成本中台 | 数据驱动</div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
