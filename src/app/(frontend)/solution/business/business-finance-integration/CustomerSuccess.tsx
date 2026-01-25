import { Quote } from 'lucide-react'
import Image from 'next/image'

export default function CustomerSuccess() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center px-4 py-2 bg-red-50 rounded-full text-[#E60012] text-sm font-bold mb-6">
              客端成功案例
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2329] mb-8">
              某大型钢铁集团：<br />
              <span className="text-[#0052D9]">从 7 天到 1 天</span>的月结跨越
            </h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-1 bg-[#E60012] rounded-full" />
                <div>
                  <h4 className="font-bold text-slate-800 mb-2">背景挑战</h4>
                  <p className="text-slate-500 text-sm">
                    传统法人架构与管理架构分离，法人核算为了税务合规，管理核算为了内部运营，两套账对账极度困难，结账周期长达 7 天。
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-1 bg-[#0052D9] rounded-full" />
                <div>
                  <h4 className="font-bold text-slate-800 mb-2">解决方案</h4>
                  <p className="text-slate-500 text-sm">
                    通过事项会计中台，实现“同源分流”。一份业务事项数据，自动生成法人会计账与管理责任账，解耦核心业务与核算逻辑。
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-8 bg-white rounded-2xl shadow-sm border border-slate-100 relative">
               <Quote className="absolute top-6 right-6 text-slate-100 w-16 h-16" />
               <p className="text-slate-600 italic leading-relaxed relative z-10 mb-6">
                 &quot;通过业财融合的实施，我们不仅解决了财管分离的对账痛点，更建立了一套实时、穿透的数字化经营体系。现在，哪怕是集团级别的月结，我们也能在 24 小时内高质量完成。&quot;
               </p>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden relative">
                    <Image 
                      src="/images/solutions/bfi/cfo_avatar_male_professional_1767345817773.png" 
                      alt="财务总监" 
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-sm">财务总监</div>
                    <div className="text-slate-400 text-xs text-uppercase tracking-wider">H 钢铁集团有限公司</div>
                  </div>
               </div>
            </div>
          </div>
 
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
             <div className="space-y-4">
                <div className="h-48 rounded-2xl bg-slate-200 overflow-hidden shadow-lg border border-white/20 relative">
                   <Image 
                     src="/images/solutions/bfi/steel_plant_digital_twin_1767345768567.png" 
                     alt="Steel Plant Digital Twin" 
                     fill
                     sizes="(min-width: 1024px) 25vw, 50vw"
                     className="object-cover hover:scale-110 transition-transform duration-700"
                   />
                </div>
                <div className="h-64 rounded-2xl bg-blue-100 flex items-center justify-center p-8 shadow-sm">
                   <div className="text-center">
                      <div className="text-3xl font-black text-[#0052D9] mb-2">100%</div>
                      <div className="text-sm font-bold text-slate-500">内部往来对账自动化</div>
                   </div>
                </div>
             </div>
             <div className="space-y-4 pt-8">
                <div className="h-64 rounded-2xl bg-red-100 flex items-center justify-center p-8 shadow-sm">
                   <div className="text-center">
                      <div className="text-3xl font-black text-[#E60012] mb-2">24h</div>
                      <div className="text-sm font-bold text-slate-500">集团级月结时效</div>
                   </div>
                </div>
                <div className="h-48 rounded-2xl bg-slate-200 overflow-hidden shadow-lg border border-white/20 relative">
                   <Image 
                     src="/images/solutions/bfi/global_finance_dashboard_abstract_1767345785341.png" 
                     alt="Global Finance Connection" 
                     fill
                     sizes="(min-width: 1024px) 25vw, 50vw"
                     className="object-cover hover:scale-110 transition-transform duration-700"
                   />
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}
