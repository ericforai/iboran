import { Clock, Database, BarChart2, FileWarning } from 'lucide-react'

const painPoints = [
  {
    icon: Database,
    title: '信息孤岛，数据割裂',
    description: '协同、费控、工时、销售散落在不同系统。财务与业务数据分离，口径不一致，不仅重复录入，更导致经营数据严重滞后。'
  },
  {
    icon: Clock,
    title: '项目过程黑盒，失控风险',
    description: '项目进度全靠周报，实际执行情况不透明。管理者无法及时感知项目延期或成本超支的风险，往往等到结项才发现亏损。'
  },
  {
    icon: FileWarning,
    title: '预算虚设，成本不可控',
    description: '由于缺乏业务环节的过程控制（如采购申请、合同签订时的预算占用），预算往往沦为事后的数字游戏，无法真正约束支出。'
  },
  {
    icon: BarChart2,
    title: 'IPO合规审计困难',
    description: '对于拟上市企业，缺乏完整的证据链（Evidential Chain）支撑收入确认和成本归集的合理性，难以应对严格的财务审计要求。'
  }
]

export default function PainPoints() {
  return (
    <section className="py-24 bg-[#F7F8FA]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2329] mb-4">
            项目型企业普遍面临的 &quot;成长阵痛&quot;
          </h2>
          <p className="text-lg text-slate-600">
            当企业规模扩大，简单的粗放式管理已无法支撑业务发展，甚至成为上市路上的绊脚石。
          </p>
          <div className="w-16 h-1 bg-[#E60012] mx-auto mt-6 rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((point, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="w-14 h-14 bg-red-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#E60012] transition-colors">
                <point.icon className="w-7 h-7 text-[#E60012] group-hover:text-white transition-colors" />
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
