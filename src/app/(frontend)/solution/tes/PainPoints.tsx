import { ShieldAlert, RefreshCcw, LayoutGrid, Users, FileSearch } from 'lucide-react'

const painPoints = [
  {
    icon: LayoutGrid,
    title: '业务系统断层',
    description: '商旅申请与业务流程脱节，导致报销周期长，数据真实性难以闭环验证。'
  },
  {
    icon: RefreshCcw,
    title: '手工对账低效',
    description: '缺乏统一的平台对接商旅平台，依赖人工下载账单和流水，核对工作量巨大且易出错。'
  },
  {
    icon: ShieldAlert,
    title: '管控流于形式',
    description: '预算控制往往在报销环节才触发，缺乏事前预警与硬控制，难以预防超支风险。'
  },
  {
    icon: Users,
    title: '报账体验欠佳',
    description: '员工需要手动录入多项信息，发票散乱，审核进度不透明，极大地占用了业务时间。'
  },
  {
    icon: FileSearch,
    title: '稽核难落实',
    description: '关联交易、跨公司调拨缺乏系统支撑，内外部对账效率极低，数据合规性风险高。'
  }
]

export default function PainPoints() {
  return (
    <section className="py-24 bg-[#F7F8FA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2329] mb-4">
            行业痛点与管理难题
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {painPoints.map((point, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="w-14 h-14 bg-red-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#E60012] transition-colors">
                <point.icon className="w-7 h-7 text-[#E60012] group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1F2329] mb-3">
                {point.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
