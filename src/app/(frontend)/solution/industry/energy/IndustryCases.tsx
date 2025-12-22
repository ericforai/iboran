import { Quote } from 'lucide-react'

const cases = [
  {
    company: '平煤集团',
    industry: '煤炭开采',
    scale: '大型国有能源企业',
    challenge: '物资供应与材料消耗管理分散，以领代耗问题严重，矿产品精细化成本核算困难，无法建立基于作业成本法的成本BOM',
    solution: '供应到口、核算到面，实现集团物资供应与材料消耗一体化应用：出库跟踪入库，材料消耗全周期管理，工作面物资可视化',
    result: '工作面物资可参与利库平衡，彻底解决煤矿以领代耗问题，实现矿产品精细化成本核算',
    quote: '物资管理从账物分离到账物一致，成本核算从粗放到精细化，管理水平实现质的飞跃',
  },
  {
    company: '榆林能源',
    industry: '煤化工/电力',
    scale: '综合能源企业',
    challenge: '设备分布广、类型多，传统人工巡检效率低，设备故障导致非计划停产频繁，累计影响产量巨大',
    solution: '构建基于IOT+点检定修和全生命周期管理的设备服务共享平台，实现电厂SIS/MIS一体化，设备编码三码合一',
    result: '2020-2021年累计减少非计划性停产37次，累计减少因设备故障导致的影响生产时长465小时，相当于减少产量损失11.6万吨',
    quote: 'IOT+智能设备运维，大幅提升了精细化管理水平，减少了隐性效益损失',
  },
  {
    company: '乌海能源（国家能源集团）',
    industry: '矿山开采',
    scale: '央企能源企业',
    challenge: '矿山信息系统孤岛严重，经营管理数据与工业大数据割裂，数据分析和智能应用能力不足',
    solution: '基于精智工业互联网平台，IOT+数据治理打造矿山工业互联网智能应用APP体系，融合边缘层、网络层、平台层、应用层',
    result: '构建安全生产一张图、设备运行一张图、经营管理一张图、利润敏感性分析一张图，实现万物互联一张网、数据汇集一个库',
    quote: '工业互联网平台让矿山实现了数字化、智能化的全面升级',
  },
  {
    company: '潞宝焦化',
    industry: '焦化行业',
    scale: '大型焦化企业',
    challenge: '生产数据采集分散，安全环保管理困难，能源消耗无法精细化管理，设备管理智能化程度低',
    solution: '基于用友精智工业互联网平台，构建焦化智能工厂七大应用：安全、环保、能源、配料、资产、智能工厂、IOT',
    result: '通过大屏/3D系统实时展示生产数据和设备运行状态，实现安环管理、能源管理、智能配料、设备管理的数字化智能化',
    quote: '智能工厂平台让我们实现了从传统制造到智能制造的跨越',
  },
]

export default function IndustryCases() {
  return (
    <section className="py-24 bg-[#F7F8FA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-[#0052D9] font-semibold tracking-wider uppercase">
            Success Stories
          </span>
          <h2 className="text-3xl font-bold text-[#1F2329] mt-2 mb-4">
            能源行业标杆客户案例
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full" />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {cases.map((caseItem, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition"
            >
              {/* Company Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-[#1F2329]">
                    {caseItem.company}
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">
                    {caseItem.industry} · {caseItem.scale}
                  </p>
                </div>
                <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-amber-600 font-bold text-lg">
                    {caseItem.company.charAt(0)}
                  </span>
                </div>
              </div>
              
              {/* Challenge-Solution-Result */}
              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="shrink-0 w-16 text-sm font-semibold text-red-600">挑战</span>
                  <p className="text-sm text-slate-600">{caseItem.challenge}</p>
                </div>
                <div className="flex gap-3">
                  <span className="shrink-0 w-16 text-sm font-semibold text-blue-600">方案</span>
                  <p className="text-sm text-slate-600">{caseItem.solution}</p>
                </div>
                <div className="flex gap-3">
                  <span className="shrink-0 w-16 text-sm font-semibold text-green-600">成果</span>
                  <p className="text-sm text-slate-600">{caseItem.result}</p>
                </div>
              </div>
              
              {/* Customer Quote */}
              <div className="mt-6 pt-6 border-t border-slate-100">
                <div className="flex gap-3">
                  <Quote className="w-5 h-5 text-slate-300 shrink-0" />
                  <p className="text-sm text-slate-500 italic">
                    &ldquo;{caseItem.quote}&rdquo;
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
