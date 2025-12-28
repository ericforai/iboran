import { AlertCircle, Ban, Users, Building2, TrendingDown } from 'lucide-react'

export default function TargetAudience() {
  const painPoints = [
    {
      title: '缺少合同管理机制',
      desc: '电子合同管理制度不健全，签约相对方准入随意，缺乏考核标准，存在巨大签约风险。',
    },
    {
      title: '合同标准不规范',
      desc: '条款不全面、文本混乱，导致审核和管理成本高，归档和查询极其困难。',
    },
    {
      title: '合同签订风险大',
      desc: '合规条件复杂且缺乏固化，法务部门无法第一时间参与决议，法律风险隐患重重。',
    },
    {
      title: '审批履约效率低',
      desc: '审批意见反复、修改版本混乱；人工监控履约进度易导致延误，收付款数据与财务不通。',
    },
  ]

  const indicators = [
    { label: '合同数量', value: '100+', unit: '份/年', color: 'text-blue-600' },
    { label: '起草时间', value: '45+', unit: '分钟/份', color: 'text-red-500' },
    { label: '查找成本', value: '2', unit: '小时+', color: 'text-orange-500' },
  ]

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">谁需要构建专业的合同管理体系？</h2>
          <p className="text-lg text-slate-600">
            当企业的合同管理仍停留在“纸质流转”或“简单存储”阶段，以下风险将成为企业发展的隐形绊脚石。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Pain Points */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-8">
              <TrendingDown className="text-red-500" />
              典型现状与管理瓶颈
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {painPoints.map((point, index) => (
                <div key={index} className="p-6 rounded-xl bg-slate-50 border border-slate-100 hover:shadow-md transition">
                  <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-red-500 mb-4">
                    <AlertCircle size={20} />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">{point.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{point.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Target Selection */}
          <div className="bg-slate-900 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-3xl rounded-full"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Users className="text-blue-400" />
                适用企业画像
              </h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="flex items-center gap-2 font-bold mb-4 text-blue-400">
                    <Building2 size={18} />
                    理想适用对象
                  </h4>
                  <ul className="space-y-3 text-slate-300">
                    <li className="flex items-start gap-2 text-sm leading-relaxed">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      对合同合规性、审计追踪有严格要求的中大型集团企业
                    </li>
                    <li className="flex items-start gap-2 text-sm leading-relaxed">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      涉及大量采购、销售及外包合同，急需提升法务审核效率的组织
                    </li>
                    <li className="flex items-start gap-2 text-sm leading-relaxed">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      希望打通合同与财务收付款、CRM及ERP系统的数字化企业
                    </li>
                  </ul>
                </div>

                <div className="pt-8 border-t border-slate-800">
                  <h4 className="flex items-center gap-2 font-bold mb-4 text-red-400">
                    <Ban size={18} />
                    不适用情况
                  </h4>
                  <ul className="space-y-3 text-slate-400">
                    <li className="flex items-start gap-2 text-sm">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-600 shrink-0" />
                      只需简单的扫描文档存储，无流程化审批要求的初创团队
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-600 shrink-0" />
                      无特定合规和法务风控需求的离散型个人工作室
                    </li>
                  </ul>
                </div>
              </div>

              {/* Data Visualization Style */}
              <div className="mt-10 grid grid-cols-3 gap-4 pt-8 border-t border-slate-800">
                {indicators.map((item, idx) => (
                  <div key={idx} className="text-center">
                    <div className={`text-xl font-bold ${item.color}`}>{item.value}</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider">{item.label}({item.unit})</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
