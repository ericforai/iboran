import { Server, Cloud, ShieldCheck, Zap, Globe, Lock } from 'lucide-react'

export default function Architecture() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">
            混合云部署架构，安全与效率的优质平衡
          </h2>
          <div className="w-16 h-1 bg-[#0052D9] mx-auto rounded-full mb-6" />
          <p className="text-slate-600 max-w-2xl mx-auto">
            支持私有化部署前置机对接银行专线，同时利用云端 SaaS 能力实现即开即用。
            既保证了资金交易的私密性与安全性，又享受了云服务的便捷维护与快速迭代。
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-slate-100">
          {/* 架构图示 */}
          <div className="grid lg:grid-cols-3 gap-8 items-center relative z-10">
            {/* 左侧：企业端 */}
            <div className="flex flex-col items-center p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <div className="text-sm font-bold text-slate-500 mb-4 uppercase tracking-wider">企业侧 / 混合云</div>
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                <Server className="w-10 h-10 text-[#1F2329]" />
              </div>
              <h3 className="font-bold text-lg text-[#1F2329] mb-2">企业ERP/业务系统</h3>
              <div className="flex flex-col gap-2 w-full">
                <div className="px-3 py-2 bg-white rounded border border-slate-200 text-xs text-center text-slate-600 font-medium">
                  NC / U8 / U9 / YonSuite
                </div>
                <div className="px-3 py-2 bg-white rounded border border-slate-200 text-xs text-center text-slate-600 font-medium">
                  自建/异构系统
                </div>
              </div>
            </div>

            {/* 中间：银企联云平台 */}
            <div className="flex flex-col items-center">
              <div className="w-full flex items-center justify-center gap-2 text-[#0052D9] mb-2">
                <span className="h-px w-full bg-blue-200 border-t border-dashed border-[#0052D9]" />
                <span className="text-xs font-bold whitespace-nowrap bg-blue-50 px-2 py-1 rounded text-[#0052D9]">HTTPS 加密传输</span>
                <span className="h-px w-full bg-blue-200 border-t border-dashed border-[#0052D9]" />
              </div>
              
              <div className="relative p-8 bg-[#0052D9] rounded-2xl shadow-lg text-white w-full text-center">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center ring-4 ring-white">
                  <Cloud className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-xl mt-4 mb-2">用友银企联云平台</h3>
                <p className="text-blue-100 text-xs mb-6">数智化金融服务底座</p>
                
                <div className="grid grid-cols-2 gap-3 text-left">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-blue-200" />
                    <span className="text-xs">金融级安全</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-blue-200" />
                    <span className="text-xs">7天快速上线</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-blue-200" />
                    <span className="text-xs">全球银行连接</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-blue-200" />
                    <span className="text-xs">CA 身份认证</span>
                  </div>
                </div>
              </div>

              <div className="w-full flex items-center justify-center gap-2 text-[#0052D9] mt-2">
                <span className="h-px w-full bg-blue-200 border-t border-dashed border-[#0052D9]" />
                <span className="text-xs font-bold whitespace-nowrap bg-blue-50 px-2 py-1 rounded text-[#0052D9]">专线直连</span>
                <span className="h-px w-full bg-blue-200 border-t border-dashed border-[#0052D9]" />
              </div>
            </div>

            {/* 右侧：银行端 */}
            <div className="flex flex-col items-center p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <div className="text-sm font-bold text-slate-500 mb-4 uppercase tracking-wider">金融机构</div>
              <div className="grid grid-cols-2 gap-4 w-full">
                 <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm mb-2 border border-slate-100">
                      <span className="text-xs font-bold text-[#E60012]">ICBC</span>
                    </div>
                    <span className="text-xs text-slate-500">大型国有</span>
                 </div>
                 <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm mb-2 border border-slate-100">
                      <span className="text-xs font-bold text-[#E60012]">CMB</span>
                    </div>
                    <span className="text-xs text-slate-500">股份制</span>
                 </div>
                 <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm mb-2 border border-slate-100">
                      <span className="text-xs font-bold text-[#E60012]">CITI</span>
                    </div>
                    <span className="text-xs text-slate-500">外资银行</span>
                 </div>
                 <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm mb-2 border border-slate-100">
                      <span className="text-xs font-bold text-[#E60012]">More</span>
                    </div>
                    <span className="text-xs text-slate-500">2500+</span>
                 </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {[
              { label: '开箱即用', desc: '预置 40000+ 接口' },
              { label: '统一运维', desc: '云端自动升级维护' },
              { label: '安全合规', desc: '数据加密传输' },
              { label: '高可用性', desc: '99.9% SLA 保障' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-lg font-bold text-[#1F2329]">{item.label}</div>
                <div className="text-sm text-slate-500">{item.desc}</div>
              </div>
            ))}
          </div>

          {/* 背景装饰线 */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-slate-100 -translate-y-1/2 z-0 hidden lg:block" />
        </div>
      </div>
    </section>
  )
}
