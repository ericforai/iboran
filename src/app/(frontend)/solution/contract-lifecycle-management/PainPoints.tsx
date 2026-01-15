import { AlertCircle, Clock, Search, ShieldAlert, ArrowRight } from 'lucide-react'

const points = [
  {
    icon: Search,
    title: '合同查找/调阅难',
    problem: '合同分散在各系统或线下柜子中，缺乏统一电子台账，检索历史合同如同大海捞针。',
    solution: '统一电子合同库，支持 OCR 全文检索与元数据筛选，秒级定位任意合同。',
  },
  {
    icon: ShieldAlert,
    title: '签约合规风险大',
    problem: '起草过程随意，条款修改缺乏留痕，审批流转不规范，法律风险难以前置把控。',
    solution: '强制使用标准范本与合规审批流，AI 智能审查关键条款，风险前置拦截。',
  },
  {
    icon: Clock,
    title: '履行过程监控缺失',
    problem: '签署后即“死档”，收付款计划与合同条款脱钩，违约风险无法实时预警。',
    solution: '履约进度实时看板，自动关联收付款计划与发票，关键节点自动预警。',
  },
  {
    icon: AlertCircle,
    title: '业财数据孤岛',
    problem: '业务系统与财务系统不通，合同执行情况无法自动对账，手工统计管理成本高。',
    solution: '业财一体化集成，合同驱动财务凭证生成，实现单单匹配与自动对账。',
  },
]

export default function PainPoints() {
  return (
    <section className="py-24 bg-[#F7F8FA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">
            为什么需要 CLM 数智合同管理？
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6" />
          <p className="text-slate-500 max-w-2xl mx-auto italic">
            针对企业在传统合同管理中的核心痛点，提供全生命周期的数字化解决方案
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((point, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
            >
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#E60012] transition-colors duration-300">
                <point.icon className="w-6 h-6 text-[#E60012] group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="text-lg font-bold text-[#1F2329] mb-4 min-h-[56px] flex items-center">
                {point.title}
              </h3>
              
              <div className="flex-1 space-y-4">
                <div className="bg-slate-50 p-3 rounded-lg">
                   <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">Problem</div>
                   <p className="text-sm text-slate-600 leading-relaxed text-justify">
                     {point.problem}
                   </p>
                </div>

                <div className="flex justify-center text-slate-300">
                   <ArrowRight size={16} className="rotate-90 md:rotate-0" />
                </div>

                <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                   <div className="text-[10px] font-bold text-blue-500 uppercase mb-1">Solution</div>
                   <p className="text-sm text-blue-700 leading-relaxed text-justify">
                     {point.solution}
                   </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

