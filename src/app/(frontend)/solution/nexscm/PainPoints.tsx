import { AlertTriangle, Users, EyeOff, Warehouse, HelpCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const points = [
  {
    icon: AlertTriangle,
    title: '盲目开发风险',
    description: 'IP 价值停留在感性层面，缺乏多维度数据分级。立项时“拍脑袋”导致资源错配，初审阶段无法有效预警高风险方案。',
    color: 'bg-red-50 text-red-600 border-red-100',
  },
  {
    icon: Users,
    title: '供应链协同极度混乱',
    description: '面对精密模型或多材质礼盒，寻找匹配工厂如大海捞针。品控、财务、法务、采购等部门在打样阶段频繁断链。',
    color: 'bg-blue-50 text-blue-600 border-blue-100',
  },
  {
    icon: EyeOff,
    title: '生产过程沦为“黑盒”',
    description: '从下订单到成品的数月周期内，进度难掌控、品质不可见。逾期风险无法实时预警，延期天数往往靠人工猜测。',
    color: 'bg-indigo-50 text-indigo-600 border-indigo-100',
  },
  {
    icon: Warehouse,
    title: '库存积压与周期错位',
    description: '周边产品生命周期极短。缺乏基于销量的自适应补货算法，导致爆款断货、长尾积压，严重侵蚀品牌利润。',
    color: 'bg-orange-50 text-orange-600 border-orange-100',
  },
]

export default function PainPoints() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2329] mb-6">
            IP 衍生品行业正面临的供应链挑战
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            在碎片化的市场环境下，传统的“黑盒”供应链模式已无法满足高效率、高质量的周边产品开发需求。
          </p>
          <div className="w-20 h-1.5 bg-[#E60012] mx-auto mt-8 rounded-full shadow-[0_4px_10px_rgba(230,0,18,0.3)]" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, idx) => (
            <div
              key={idx}
              className="group relative bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Animated Corner Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-bl-[100px] -mr-12 -mt-12 group-hover:bg-slate-100 transition-colors" />
              
              <div className={`w-14 h-14 ${point.color} border rounded-xl flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform`}>
                <point.icon className="w-7 h-7" />
              </div>
              
              <h3 className="text-xl font-bold text-[#1F2329] mb-4 relative z-10">
                {point.title}
              </h3>
              
              <p className="text-slate-600 text-sm leading-relaxed relative z-10 mb-6">
                {point.description}
              </p>
              
              <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest pt-4 border-t border-slate-50">
                <HelpCircle size={12} className="opacity-50" />
                行业普遍痛点
              </div>
            </div>
          ))}
        </div>
        
        {/* Metric Hint */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-[#001529] rounded-full text-white text-sm font-medium shadow-xl">
            <span className="text-blue-400 font-black">NexSCM SOLUTION</span>
            <div className="w-px h-4 bg-slate-700" />
            <span>我们将以上不确定性转化为 100% 数字化确定性</span>
          </div>
        </div>
      </div>
    </section>
  )
}
