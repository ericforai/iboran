'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, ShoppingCart, Truck, Factory, Calculator } from 'lucide-react'

const scenarios = [
  {
    title: '营销管理',
    icon: ShoppingCart,
    problem: '高度依托业务员进行下单，客户需求线下对接；客户对优惠、授信还款义务没有感知；系统订单与实物流转不同步，无法实时知晓业务执行进度',
    solution: '客户APP自助下单，24小时线上交易；多种销售模式（备货、直运、退货）支持；数字化价格管理（底价+自定价、标准价+折扣、一单一议）；可视化库存管理与预警',
    outcome: '客户自助式网购体验，提升客户粘性；业务员工作便捷高效，实时查看业绩；交易过程透明化，规范交易成本',
  },
  {
    title: '采购管理',
    icon: Truck,
    problem: '线下操作人工控制，管控力度不足；计量作弊、取样化验人工计算，对结算影响大；价格计算手工操作，工作量大易出错',
    solution: '全球寻源，韧性供应；供应商风险智能识别与预警；无人值守计量收货；优质优价结算，端到端业财融合流程闭环',
    outcome: '采购合规，降低风险；效率提升，减少人工差错；供应链协同，敏捷响应',
  },
  {
    title: '生产制造',
    icon: Factory,
    problem: '人工经验依赖度高，计划执行偏差大；生产过程不透明，异常响应滞后；设备故障停机损失大',
    solution: 'PTM全流程管理（计划→生产→成本）；MES生产执行，工序级追溯；IOT设备监控，预测性维护；质量管理全过程闭环',
    outcome: '生产透明可控，异常快速响应；设备利用率提升，故障损失降低；质量追溯精准，合规有保障',
  },
  {
    title: '业财一体',
    icon: Calculator,
    problem: '财务看到的是滞后的业务信息；成本核算粗放，同区域不同成本被平均；物流费用无法精准分摊到订单',
    solution: '成本域精细化核算，避免成本平均化；物流费用实时记录到销售订单；内部交易机制，减少沟通成本；经营分析报表，全面反映企业情况',
    outcome: '财务管控前移，参与经营决策；订单级精细化利润考核；绩效管理精准，决策有力支撑',
  },
]

export default function KeyScenarios() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-[#0052D9] font-semibold tracking-wider uppercase">
            Key Scenarios
          </span>
          <h2 className="text-3xl font-bold text-[#1F2329] mt-2 mb-4">
            核心业务场景
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            覆盖基础化工企业营销、采购、生产、财务全链路业务场景
          </p>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mt-4" />
        </div>
        
        {/* Tab 切换 */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {scenarios.map((scenario, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2 ${
                activeTab === idx
                  ? 'bg-[#0052D9] text-white shadow-lg'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <scenario.icon size={18} />
              {scenario.title}
            </button>
          ))}
        </div>
        
        {/* 场景内容 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid lg:grid-cols-2 gap-12 items-start"
          >
            {/* 左侧：问题-方案-成果 */}
            <div className="space-y-6">
              <div className="p-6 bg-red-50 rounded-xl border border-red-100">
                <h4 className="text-sm font-semibold text-red-600 mb-3 flex items-center gap-2">
                  😣 行业痛点
                </h4>
                <p className="text-slate-700 leading-relaxed">{scenarios[activeTab].problem}</p>
              </div>
              <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
                <h4 className="text-sm font-semibold text-blue-600 mb-3 flex items-center gap-2">
                  💡 解决方案
                </h4>
                <p className="text-slate-700 leading-relaxed">{scenarios[activeTab].solution}</p>
              </div>
              <div className="p-6 bg-green-50 rounded-xl border border-green-100">
                <h4 className="text-sm font-semibold text-green-600 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  实现效果
                </h4>
                <p className="text-slate-700 leading-relaxed">{scenarios[activeTab].outcome}</p>
              </div>
            </div>
            
            {/* 右侧：场景截图占位 */}
            <div className="bg-gradient-to-br from-slate-100 to-slate-50 rounded-2xl p-8 aspect-[4/3] flex flex-col items-center justify-center border border-slate-200">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-4">
                {(() => {
                  const IconComponent = scenarios[activeTab].icon
                  return <IconComponent size={40} className="text-[#0052D9]" />
                })()}
              </div>
              <h3 className="text-xl font-bold text-[#1F2329] mb-2">{scenarios[activeTab].title}</h3>
              <p className="text-sm text-slate-500 text-center max-w-xs">
                用友BIP超级版 基础化工行业 {scenarios[activeTab].title}解决方案
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
