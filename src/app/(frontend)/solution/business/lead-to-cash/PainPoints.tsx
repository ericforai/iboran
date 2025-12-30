'use client'

import { TrendingDown, Users, DollarSign, Clock, ArrowRight } from 'lucide-react'

const painPoints = [
  {
    icon: TrendingDown,
    title: "获客难、转化低",
    problem: "流量红利消失，线索获取成本高；销售线索跟进不及时，商机转化率低，业绩增长乏力。",
    solution: "全渠道线索归集与智能分配，360° 客户画像精准营销，提升线索转化率 20%+"
  },
  {
    icon: Users,
    title: "销售过程不可视",
    problem: "销售行为难以监控，项目进度不透明，预测准确率低；销售人员离职带走客户资源。",
    solution: "销售漏斗全流程可视化管理，标准化销售动作，沉淀客户资产，打造铁打的营盘"
  },
  {
    icon: DollarSign,
    title: "业财数据割裂",
    problem: "销售、订单、发货、回款数据分散在不同系统，对账繁琐易出错，应收账款风险高。",
    solution: "L2C 业财一体化，订单自动转收入，实时核销对账，加速资金回笼，降低坏账风险"
  },
  {
    icon: Clock,
    title: "协同效率低下",
    problem: "跨部门协作依靠电话邮件，响应速度慢；报价、合同审批流程冗长，影响客户体验。",
    solution: "移动端实时协同，CPQ 智能报价，合同在线签署，大幅缩短交易周期，提升客户满意度"
  }
]

export default function PainPoints() {
  return (
    <section className="py-24 bg-[#F7F8FA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">企业销售管理面临的挑战</h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            从线索到回款的每一个环节都可能存在断点，阻碍企业业绩的持续增长。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {painPoints.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-2xl border border-slate-100 hover:shadow-xl hover:border-[#E60012]/20 transition-all group relative overflow-hidden"
            >
              <div className="flex items-start gap-6 relative z-10">
                <div className="w-14 h-14 bg-red-50 rounded-xl flex-shrink-0 flex items-center justify-center group-hover:bg-[#E60012] transition-colors duration-300">
                  <item.icon className="text-[#E60012] group-hover:text-white transition-colors duration-300" size={28} />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#1F2329] mb-3">{item.title}</h3>
                  <div className="mb-4">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 block">痛点</span>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {item.problem}
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-slate-50">
                    <span className="text-xs font-bold text-[#0052D9] uppercase tracking-wider mb-1 block flex items-center gap-1">
                      泊冉对策 <ArrowRight size={12} />
                    </span>
                    <p className="text-[#1F2329] font-medium text-sm leading-relaxed">
                      {item.solution}
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full -z-0 opacity-50 group-hover:scale-110 transition-transform"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
