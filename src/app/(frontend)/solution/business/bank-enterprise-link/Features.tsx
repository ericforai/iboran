import { Landmark, ArrowRightLeft, Ticket, Database } from 'lucide-react'

const features = [
  {
    title: '银账通',
    subtitle: '智能精准的账务核对',
    icon: Landmark,
    items: [
      '全量账户自动对账：支持回单、明细、余额多维度自动核销。',
      '回单/凭证一键追溯：流水直通原始凭证，审计再无烦恼。',
      '电子归档 99%以上：回单自动化下载关联，全面实现无纸化办公。',
    ],
    metric: '对账效率提升 90%',
    color: 'bg-blue-600',
  },
  {
    title: '快结算',
    subtitle: '极简极速的支付闭环',
    icon: ArrowRightLeft,
    items: [
      '支付屏蔽差异：通过一个界面操作所有银行支付。',
      '单笔/批量秒级发放：支持薪资、供应商账款一键直达。',
      '多因子安全防护：CA 认证与加密传输，以保障资金更稳妥可控。',
    ],
    metric: '结算周期缩短 80%',
    color: 'bg-[#E60012]',
  },
  {
    title: '电票通',
    subtitle: '票据全生命周期管理',
    icon: Ticket,
    items: [
      '新一代票据直联：支持等分化票据签发、背书、转让。',
      '全链路风控识别：智能识别假票、回头票，防范金融风险。',
      '供应链金融赋能：资产池统筹管理，提升票据流通效率。',
    ],
    metric: '7天快速上线',
    color: 'bg-slate-800',
  },
  {
    title: '司库云底座',
    subtitle: '中大企业的财资中枢',
    icon: Database,
    items: [
      '2500+ 银行预置：主流银行开箱即用，无需二次开发。',
      '境内外贯通：支持境外银行 SWIFT 接入，实现全球资产透明。',
      '业财资一体化：与 ERP、费控、采购系统无缝衔接。',
    ],
    metric: '全球资金 可视化',
    color: 'bg-blue-700',
  },
]

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">核心组件与能力</h2>
          <div className="w-16 h-1 bg-[#0052D9] mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row bg-[#F7F8FA] rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              <div className={`md:w-1/3 p-8 flex flex-col items-center justify-center text-white ${feature.color}`}>
                <feature.icon className="w-12 h-12 mb-4" />
                <div className="text-xl font-bold">{feature.title}</div>
                <div className="mt-6 px-3 py-1 bg-white/20 rounded text-xs font-semibold backdrop-blur-sm">
                  {feature.metric}
                </div>
              </div>
              <div className="flex-1 p-8">
                <h4 className="text-lg font-bold text-[#1F2329] mb-4">
                  {feature.subtitle}
                </h4>
                <ul className="space-y-4">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-[#0052D9]" />
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
