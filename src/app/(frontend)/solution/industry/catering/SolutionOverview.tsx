import { ShieldCheck, Cpu, Globe, Zap } from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: '业财原生一体化',
    description: '打通 POS 到 ERP 的全链路，实现交易、结算、凭证自动闭环。'
  },
  {
    icon: Cpu,
    title: 'AI 智领营运',
    description: '引入 AI Agent 实现智能要货、自动补货及精准成本模拟分析。'
  },
  {
    icon: Globe,
    title: '全球化部署能力',
    description: '支持多语、多币、多准则，助力中国餐饮品牌一站式出海。'
  },
  {
    icon: Zap,
    title: '敏捷上线见效',
    description: '基于成熟实践模板，实现系统快速部署与业务快速响应。'
  }
]

export default function SolutionOverview() {
  return (
    <section className="py-24 bg-[#F7F8FA]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <span className="text-sm text-[#0052D9] font-semibold tracking-wider uppercase">
              Solution Blueprint
            </span>
            <h2 className="text-4xl font-bold text-[#1F2329] mt-3 mb-6">
              全栈云赋能餐饮连锁 <br />
              一体化经营管理平台
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              用友BIP超级版构建了从“上游智能采购、中游智慧加工、下游数智服务”的完整闭环，通过数据湖与AI能力，将离散的门店孤岛连接成协同增值的价值网。
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <div key={i} className="flex gap-3">
                  <f.icon className="w-6 h-6 text-[#0052D9] shrink-0" />
                  <div>
                    <h4 className="font-bold text-[#1F2329]">{f.title}</h4>
                    <p className="text-sm text-slate-500 mt-1">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
              {/* 简化的架构图示意 */}
              <div className="space-y-4">
                <div className="p-4 bg-blue-600 text-white rounded-lg text-center font-bold">
                  数智运营决策分析 (BI / AI)
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-3 bg-blue-50 border border-blue-100 rounded-lg text-center text-xs font-semibold text-blue-700">
                    数智财务
                  </div>
                  <div className="p-3 bg-blue-50 border border-blue-100 rounded-lg text-center text-xs font-semibold text-blue-700">
                    数智人力
                  </div>
                  <div className="p-3 bg-blue-50 border border-blue-100 rounded-lg text-center text-xs font-semibold text-blue-700">
                    数智资产
                  </div>
                </div>
                <div className="relative py-4">
                  <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-slate-200"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="px-2 bg-white text-xs text-slate-400">核心业务闭环</span>
                  </div>
                </div>
                <div className="flex justify-between gap-2">
                  <div className="flex-1 p-3 bg-slate-50 border border-slate-200 rounded-lg text-center text-[10px] text-slate-600">
                    智能采购 (S2P)
                  </div>
                  <div className="flex-1 p-3 bg-red-50 border border-red-100 rounded-lg text-center text-[10px] text-red-600">
                    数智门店 (POS)
                  </div>
                  <div className="flex-1 p-3 bg-slate-50 border border-slate-200 rounded-lg text-center text-[10px] text-slate-600">
                    智慧物流 (TMS)
                  </div>
                </div>
                <div className="p-4 bg-slate-900 text-slate-100 rounded-lg text-center font-mono text-xs">
                  iuap 统一数智底座 (PaaS)
                </div>
              </div>
            </div>
            {/* 装饰元素 */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#E60012]/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-[#0052D9]/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
