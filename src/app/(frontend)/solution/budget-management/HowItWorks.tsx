import { ArrowRight, Target, ClipboardList, ShieldCheck, PieChart } from 'lucide-react'
import Link from 'next/link'

const steps = [
  {
    icon: Target,
    title: '战略与目标测算',
    description: '将顶层战略下沉，通过 YonGPT 智能预测与多版本沙箱模拟，科学设定年度及月度经营目标。'
  },
  {
    icon: ClipboardList,
    title: '全面预算编报',
    description: '多组织在线协同编报，支持 MDR 规则与多维度计算逻辑，自动汇总、抵消与平准。'
  },
  {
    icon: ShieldCheck,
    title: '全业务场景控制',
    description: '全面集成业务流程，实现事前申请、事中预警到事后结算的全方位实时刚性及柔性管控。'
  },
  {
    icon: PieChart,
    title: '深度分析与绩效评价',
    description: '实时的预算执行分析与穿透查询，实现 PDCA 闭环管理，为绩效考核与滚动预测提供数据支撑。'
  }
]

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">
            端到端的“编-报-控-审-析”全流程闭环
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0052D9] transition-all duration-300 relative">
                  <step.icon className="w-10 h-10 text-[#0052D9] group-hover:text-white transition-colors" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white shadow-md rounded-full flex items-center justify-center text-sm font-bold text-[#1F2329]">
                    {idx + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1F2329] mb-4">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed px-4">
                  {step.description}
                </p>
              </div>
              
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+60px)] w-[calc(100%-120px)] border-t-2 border-dashed border-slate-200" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 bg-[#001529] rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-white">
           <div className="space-y-2 text-center md:text-left">
              <h4 className="text-2xl font-bold">业财合一，敏捷响应</h4>
              <p className="text-slate-400">构建以预算为核心的业务指挥系统，让资源投入更加精准有效。</p>
           </div>
           <Link href="/contact" className="px-8 py-3 bg-[#E60012] hover:bg-red-700 text-white font-bold rounded-lg transition-all flex items-center gap-2">
              查看技术架构图 <ArrowRight size={18} />
           </Link>
        </div>
      </div>
    </section>
  )
}
