import { XCircle, CheckCircle2, AlertTriangle, Building2, TrendingUp, Shield } from 'lucide-react'

export default function TargetAudience() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Screening */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-2xl font-bold text-[#1F2329] mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-[#0052D9]" />
              谁适合用友 BIP？
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4 p-4 bg-blue-50/30 rounded-lg border border-blue-50">
                <Building2 className="w-6 h-6 text-[#0052D9] flex-shrink-0" />
                <div>
                  <div className="font-bold text-[#1F2329]">集团型/大型企业</div>
                  <div className="text-sm text-slate-600">多组织、多业态、多地点运营，需要统一管控与协同。</div>
                </div>
              </div>
              <div className="flex gap-4 p-4 bg-blue-50/30 rounded-lg border border-blue-50">
                <TrendingUp className="w-6 h-6 text-[#0052D9] flex-shrink-0" />
                <div>
                  <div className="font-bold text-[#1F2329]">处于高速增长/转型期</div>
                  <div className="text-sm text-slate-600">业务变化快，旧系统不仅无法支持，反而成为制约瓶颈。</div>
                </div>
              </div>
              <div className="flex gap-4 p-4 bg-blue-50/30 rounded-lg border border-blue-50">
                <Shield className="w-6 h-6 text-[#0052D9] flex-shrink-0" />
                <div>
                  <div className="font-bold text-[#1F2329]">注重自主可控与合规</div>
                  <div className="text-sm text-slate-600">特别是国央企、上市公司，对数据安全和国产化有硬性要求。</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-400 mb-6 flex items-center gap-2">
              <XCircle className="w-6 h-6" />
              不适用/不建议的情况
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-100 grayscale opacity-70">
                <div className="font-bold text-slate-600">单一小型企业（&lt;50人）</div>
                <div className="text-sm text-slate-500">BIP 架构庞大，小微企业建议使用 YonSuite 或 U8 cloud。</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-100 grayscale opacity-70">
                <div className="font-bold text-slate-600">仅需简单记账</div>
                <div className="text-sm text-slate-500">如果不需要供应链、业财融合等高级能力，BIP 会导致过度配置。</div>
              </div>
            </div>
          </div>
        </div>

        {/* Pain Points */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1F2329]">
            解决什么核心问题？
          </h2>
          <p className="text-slate-600 mt-4">
            消除“信息化孤岛”，实现真正的“数智化”
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "业务与 AI 割裂",
              desc: "买了 AI 但用不起来，无法融入核心业务流程，沦为“玩具”。",
              risk: "投资浪费，错失智能红利",
              icon: AlertTriangle
            },
            {
              title: "数据孤岛林立",
              desc: "人财物客项数据分散在 CRM、HR、ERP 等不同系统，决策缺乏全局视野。",
              risk: "决策滞后，管理成本高",
              icon: XCircle
            },
            {
              title: "系统僵化，响应慢",
              desc: "传统 ERP 架构臃肿，二次开发困难，无法适应新业务快速上线。",
              risk: "制约业务创新",
              icon: AlertTriangle
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6 text-[#E60012]" />
              </div>
              <h3 className="text-lg font-bold text-[#1F2329] mb-3">{item.title}</h3>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                {item.desc}
              </p>
              <div className="text-xs font-semibold text-[#E60012] bg-red-50 px-3 py-1.5 rounded inline-block">
                风险：{item.risk}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
