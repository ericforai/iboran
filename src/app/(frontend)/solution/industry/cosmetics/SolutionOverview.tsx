import { CheckCircle2 } from 'lucide-react'

const features = [
  '全域数字化营销：B2B2C架构实现从经销商到消费者的全链路数字化运营',
  '多渠道统一管理：电商平台、自建商城、零售门店三位一体协同运营',
  '智能供应链协同：采购、生产、仓储、物流全流程数据贯通与智能调度',
  '业财一体化融合：销售到收款、采购到付款业财全流程自动化处理',
  '消费者资产沉淀：会员画像、积分、等级、营销活动精细化管理'
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
              用友BIP化妆品行业全价值链解决方案
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              基于用友BIP底座，构建&quot;全域营销+供应链协同+业财融合&quot;的数智化体系，为美妆企业提供从品牌营销到终端消费的全链路数智化赋能，实现业务协同与经营透明。
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
                  <p className="text-slate-400 font-medium mb-2">化妆品行业数智化架构图</p>
                  <div className="flex flex-col gap-2">
                    <div className="px-4 py-2 bg-pink-50 text-pink-600 rounded text-sm border border-pink-100">全域营销 | B2B2C | 会员运营</div>
                    <div className="px-4 py-2 bg-blue-50 text-blue-600 rounded text-sm border border-blue-100">供应链协同 | 智能仓储 | 物流配送</div>
                    <div className="px-4 py-2 bg-slate-100 text-slate-600 rounded text-sm border border-slate-200">业财融合 | 智能财务 | 数据洞察</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
