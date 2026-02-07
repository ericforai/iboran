import { Building2, Globe2, Layers, ArrowUpRight } from 'lucide-react'

export default function Overview() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left Column: Project Metadata */}
          <div className="lg:col-span-4">
            <div className="bg-slate-50 rounded-2xl p-8 sticky top-24 border border-slate-100">
              <h3 className="font-bold text-lg text-slate-900 mb-6 pb-4 border-b border-slate-200 flex items-center gap-2">
                项目概览
              </h3>
              
              <div className="space-y-6">
                <div className="group">
                  <div className="flex items-center gap-3 text-slate-500 mb-2 group-hover:text-blue-600 transition-colors">
                    <Building2 className="w-5 h-5" />
                    <span className="text-sm font-medium uppercase tracking-wider">客户</span>
                  </div>
                  <div className="text-slate-900 font-semibold pl-8">南极电商股份有限公司</div>
                </div>

                <div className="group">
                  <div className="flex items-center gap-3 text-slate-500 mb-2 group-hover:text-blue-600 transition-colors">
                    <Globe2 className="w-5 h-5" />
                    <span className="text-sm font-medium uppercase tracking-wider">行业</span>
                  </div>
                  <div className="text-slate-900 font-semibold pl-8">现代服务业 / 品牌授权 / 电商服务</div>
                </div>

                <div className="group">
                  <div className="flex items-center gap-3 text-slate-500 mb-2 group-hover:text-blue-600 transition-colors">
                    <Layers className="w-5 h-5" />
                    <span className="text-sm font-medium uppercase tracking-wider">解决方案</span>
                  </div>
                  <div className="text-slate-900 font-semibold pl-8">泊冉 SRM + PaaS 数字化运营中台</div>
                </div>
                
                <div className="pt-6 mt-6 border-t border-slate-200">
                  <a href="#" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group">
                    访问官网 
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Context & Background */}
          <div className="lg:col-span-8">
            <div className="max-w-3xl">
              <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">项目背景</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
                从传统的品牌授权模式<br />向<span className="text-blue-600">数字化品牌生态</span>转型
              </h2>
              
              <div className="prose prose-lg prose-slate text-slate-600 leading-relaxed space-y-6">
                <p>
                  南极电商作为中国优质的品牌授权与综合服务商，旗下拥有南极人、卡帝乐鳄鱼、精典泰迪等60多个知名品牌。随着业务规模的快速扩张，传统的管理模式面临严峻挑战：
                </p>
                <div className="bg-blue-50/50 p-6 rounded-xl border-l-4 border-blue-500 my-8">
                  <p className="font-medium text-blue-900 m-0 italic">
                    &quot;我们需要一个能够支撑百亿级GMV、连接数千家供应商和经销商的数字化中台，实现从&apos;人管&apos;到&apos;数智化治理&apos;的跨越。&quot;
                  </p>
                </div>
                <p>
                  面对多品牌、多渠道、多业态的&quot;三多&quot;特性，以及海量的SKU和交易数据，南极电商亟需构建统一的数字化底座，打通内部管理与外部生态的协同链路。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
