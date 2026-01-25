import { Award, CheckCircle2, Building } from 'lucide-react'
export default function TrustProof() {
  const stats = [
    { label: '服务组织', value: '50,000+', desc: '跨行业数字化转型实践' },
    { label: '合规标准', value: 'ISO27001', desc: '国际信息安全管理体系认证' },
    { label: '支持人数', value: '5,000,000+', desc: '每日活跃系统用户' },
  ]

  const cases = [
    {
      company: '某知名快消品牌',
      result: '签署周期从 7 天缩短至 2 小时',
      tags: ['电子签章', '移动审批'],
      desc: '通过集成法大大与 OA 系统，实现了全国经销商合同的秒级签署与自动归档。'
    },
    {
      company: '某大型建筑集团',
      result: '减少 95% 的合同逾期风险',
      tags: ['履约预警', '财务集成'],
      desc: '通过打通 NC 财务系统，合同收付款节点自动触发提醒，彻底解决了款项错配问题。'
    }
  ]

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Stats Section */}
          <div className="lg:col-span-1 space-y-8">
            <h2 className="text-3xl font-bold text-slate-900 leading-tight">
              赋能超 <span className="text-blue-600">5万家</span> 组织<br/>
              实现数智化合同治理
            </h2>
            <div className="space-y-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-blue-100 rounded-lg text-blue-600">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                    <div className="text-sm font-medium text-slate-500">{stat.label}</div>
                    <div className="text-xs text-slate-400 mt-1">{stat.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
              <Award className="text-orange-500" size={40} />
              <div>
                <p className="text-sm font-bold text-slate-900 tracking-tight">“协同外挂”产品认证</p>
                <p className="text-[10px] text-slate-500 uppercase">OFFICIAL CERTIFIED PARTNER</p>
              </div>
            </div>
          </div>

          {/* Case Cards */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6 relative">
             {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-400/5 blur-3xl rounded-full" />
            
            {cases.map((item, idx) => (
              <div key={idx} className="relative bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-shadow group">
                <div className="flex items-center gap-2 mb-6 text-slate-400 border-b border-slate-50 pb-4">
                  <Building size={16} />
                  <span className="text-xs font-bold uppercase tracking-wider">{item.company}</span>
                </div>
                
                <h3 className="text-xl font-bold text-blue-600 mb-4 group-hover:text-[#E60012] transition-colors">{item.result}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {item.desc}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold rounded-full uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
