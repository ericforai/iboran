import { ShieldCheck, Lock, Landmark, FileSearch, ShieldAlert } from 'lucide-react'

const securityFeatures = [
  {
    title: "数据隐私与主权安全",
    description: "支持跨国协作中的数据出境合规审查，内置隐私脱敏与加密技术，确保核心研发数据安全受控。",
    icon: Lock
  },
  {
    title: "国产化替代与自主可控",
    description: "全面支持国产数据库、操作系统及中间件。适配麒麟、统信、龙芯等信创体系，无惧技术断供风险。",
    icon: Landmark
  },
  {
    title: "计算机化系统验证 (CSV)",
    description: "严格遵循 GAMP5 与 FDA 21 CFR Part 11。提供完整的审计追踪（Audit Trail）与电子签名管理，满足监管审计需求。",
    icon: FileSearch
  },
  {
    title: "全堆栈纵深防御",
    description: "从物理设施到应用层的高安全架构。具备防勒索、防篡改、防攻击的综合预警与防御能力，保障业务永续。",
    icon: ShieldAlert
  }
]

export function SecuritySection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side: Illustration Area */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 bg-slate-900 rounded-[2.5rem] p-12 overflow-hidden shadow-2xl">
              {/* Decorative Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] -z-10 animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-600/20 blur-[100px] -z-10"></div>

              <div className="relative z-10">
                <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center mb-10 shadow-lg shadow-blue-600/40">
                  <ShieldCheck className="w-10 h-10 text-white" />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                  守护药企<span className="text-blue-400">生命线</span><br/>
                  构建安全合规的数字化基座
                </h2>
                
                <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                  在高度监管与技术竞争激烈的生物医药行业，数据安全与合规是企业的生存根基。泊冉为您提供全栈式自主可控的安全保障。
                </p>

                <div className="flex flex-wrap gap-4">
                  <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-medium">
                    符合 NMPA/FDA 规范
                  </div>
                  <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-medium">
                    国产化信创认证
                  </div>
                  <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-medium">
                    数据加密分级管控
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Decorative Rings */}
            <div className="absolute -top-10 -left-10 w-40 h-40 border border-slate-100 rounded-full -z-10"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 border-2 border-slate-50 rounded-full -z-10"></div>
          </div>

          {/* Right Side: Features Grid */}
          <div className="lg:w-1/2 grid sm:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="group p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:border-blue-100 transition-all duration-300">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-blue-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
