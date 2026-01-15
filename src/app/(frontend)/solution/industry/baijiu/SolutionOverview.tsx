import { CheckCircle2 } from 'lucide-react'

const features = [
  '柔性精益制造体系：支持制酒、制曲、勾调、包装全流程精细化管理',
  '事项会计成本核算：实现从业财事务到成本流水账的自动化归集与分割',
  '全链路数智化营销：从渠道管控到消费者互动的大数据精准定位',
  '数字酒库明资产：实时监控库存总量、质量等级与月度出库动态',
  'AI 融合管理创新：人工智能勾兑辅助，提升酒体设计的科学性与规范性'
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
              用友BIP白酒行业全价值链解决方案
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              基于用友BIP底座，通过“事项会计+产品成本+成本中心”的创新模式，为酒企提供从源头酿造到终端消费的数智化赋能，实现过程整体协同与经营透明。
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
                  <p className="text-slate-400 font-medium mb-2">白酒行业数智化架构图</p>
                  <div className="flex flex-col gap-2">
                    <div className="px-4 py-2 bg-red-50 text-red-600 rounded text-sm border border-red-100">数智营销 | 渠道协同 | 消费者资产</div>
                    <div className="px-4 py-2 bg-blue-50 text-blue-600 rounded text-sm border border-blue-100">智能工厂 | 柔性制造 | 数字酒库</div>
                    <div className="px-4 py-2 bg-slate-100 text-slate-600 rounded text-sm border border-slate-200">事项会计 | 成本中台 | 智能财务</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
