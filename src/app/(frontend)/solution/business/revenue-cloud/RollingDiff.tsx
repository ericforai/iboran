import { ArrowRight, RotateCw, Database, CheckSquare, AlertCircle } from 'lucide-react'

const steps = [
  {
    number: 1,
    icon: AlertCircle,
    iconColor: 'text-orange-500',
    bgColor: 'bg-slate-100',
    title: "发现差异",
    desc: "订单因银行延迟导致当日对账不平。系统自动标记异常。"
  },
  {
    number: 2,
    icon: Database,
    iconColor: 'text-[#0052D9]',
    bgColor: 'bg-blue-100',
    title: "纳入资金池",
    desc: "差异数据进入「待核对池」，不影响当日整体结账，无需人工干预。"
  },
  {
    number: 3,
    icon: RotateCw,
    iconColor: 'text-[#E60012]',
    bgColor: 'bg-red-100',
    title: "滚动核对",
    desc: "次日新回单到账，系统自动提取历史池数据进行二次匹配。"
  },
  {
    number: 4,
    icon: CheckSquare,
    iconColor: 'text-green-600',
    bgColor: 'bg-green-100',
    title: "自动销账",
    desc: "匹配成功后自动生成凭证。若仍有差异，提供一键原因分类处理。"
  }
]

export default function RollingDiff() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-red-100 text-[#E60012] text-xs font-bold rounded-full mb-4">
            核心引擎 02
          </div>
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">滚动式差异处理</h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            差错账无处遁形。自动将未平账目纳入资金池滚动核对，彻底解决跨期差异难题。
          </p>
        </div>

        {/* Process Flow Diagram */}
        <div className="relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-slate-100 -z-10 -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative group hover:-translate-y-1 transition-transform"
              >
                <div className={`w-10 h-10 ${step.bgColor} rounded-full flex items-center justify-center mb-4 ${step.iconColor} font-bold border-2 border-white shadow-sm z-10`}>
                  {step.number}
                </div>
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <step.icon size={18} className={step.iconColor}/>
                  {step.title}
                </h3>
                <p className="text-sm text-slate-500">
                  {step.desc}
                </p>
                {idx < 3 && (
                  <div className="absolute top-1/2 -right-4 hidden lg:block text-slate-300 bg-white p-1 rounded-full z-10">
                    <ArrowRight size={20} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
