'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ShoppingCart, Users, BarChart3 } from 'lucide-react'
import S2PDashboardMockup from './S2PDashboardMockup'

type DashboardType = 'sourcing' | 'procurement' | 'supplier' | 'analysis'

const features = [
  {
    id: 'sourcing',
    title: "战略寻源 S2C",
    subtitle: "智能寻源，降本增效",
    icon: Search,
    description: "从需求归集、供应商准入到在线招投标、电子合同，实现寻源全过程数字化、阳光化。",
    points: [
      "全网供应商寻源与准入认证",
      "在线询比价、招投标、竞价",
      "电子合同与电子签章集成"
    ]
  },
  {
    id: 'procurement',
    title: "采购执行 P2P",
    subtitle: "自动流转，高效闭环",
    icon: ShoppingCart,
    description: "打通采购申请、订单协同、收货质检到财务结算的全流程，大幅缩短采购周期。",
    points: [
      "采购申请与订单自动协同",
      "移动端收货、质检与入库",
      "三单匹配与发票自动校验"
    ]
  },
  {
    id: 'supplier',
    title: "供应商管理 SRM",
    subtitle: "协同共赢，风险可控",
    icon: Users,
    description: "建立全生命周期的供应商管理体系，实时监控供应商绩效与风险，提升供应链韧性。",
    points: [
      "360° 供应商画像与绩效考核",
      "供应商风险雷达与自动预警",
      "供需双方即时沟通与协同"
    ]
  },
  {
    id: 'analysis',
    title: "采购支出分析",
    subtitle: "数据驱动，决策赋能",
    icon: BarChart3,
    description: "多维度的采购支出分析模型，帮助企业识别节资机会，优化采购策略。",
    points: [
      "品类支出分析与趋势预测",
      "采购价格波动监控",
      "供应商降本贡献度分析"
    ]
  }
]

export default function Features() {
  const [activeTab, setActiveTab] = useState<DashboardType>('sourcing')

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2329] mb-4">
            全流程、一体化的 S2P 数字化采购平台
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            打破系统孤岛，连接企业内部与外部供应链网络，实现采购业务的全链条数字化覆盖。
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left: Navigation Tabs */}
          <div className="lg:w-1/3 space-y-4">
             {features.map((feature) => (
               <div 
                 key={feature.id}
                 onClick={() => setActiveTab(feature.id as DashboardType)}
                 className={`
                   p-6 rounded-xl cursor-pointer transition-all duration-300 border
                   ${activeTab === feature.id 
                     ? 'bg-blue-50 border-blue-200 shadow-md' 
                     : 'bg-white border-transparent hover:bg-slate-50 hover:border-slate-100'}
                 `}
               >
                 <div className="flex items-center gap-4 mb-3">
                   <div className={`p-3 rounded-lg ${activeTab === feature.id ? 'bg-[#0052D9] text-white' : 'bg-slate-100 text-slate-500'}`}>
                     <feature.icon size={24} />
                   </div>
                   <div>
                     <h3 className={`font-bold text-lg ${activeTab === feature.id ? 'text-[#0052D9]' : 'text-slate-800'}`}>
                       {feature.title}
                     </h3>
                     <p className="text-slate-500 text-sm">{feature.subtitle}</p>
                   </div>
                 </div>
                 
                 <AnimatePresence>
                   {activeTab === feature.id && (
                     <motion.div
                       initial={{ height: 0, opacity: 0 }}
                       animate={{ height: 'auto', opacity: 1 }}
                       exit={{ height: 0, opacity: 0 }}
                       className="overflow-hidden"
                     >
                       <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                         {feature.description}
                       </p>
                       <ul className="space-y-2">
                         {feature.points.map((point, idx) => (
                           <li key={idx} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                             <div className="w-1.5 h-1.5 rounded-full bg-[#E60012]"></div>
                             {point}
                           </li>
                         ))}
                       </ul>
                     </motion.div>
                   )}
                 </AnimatePresence>
               </div>
             ))}
          </div>

          {/* Right: Dashboard Mockup Preview */}
          <div className="lg:w-2/3 relative h-[600px] lg:h-auto min-h-[550px]">
             {/* Background Decoration */}
             <div className="absolute top-10 -right-10 w-3/4 h-3/4 bg-slate-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
             
             <div className="relative z-10 w-full h-full">
               <AnimatePresence mode='wait'>
                 <motion.div 
                   key={activeTab}
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: -20 }}
                   transition={{ duration: 0.4 }}
                   className="w-full h-full"
                 >
                    <S2PDashboardMockup type={activeTab} />
                 </motion.div>
               </AnimatePresence>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}
