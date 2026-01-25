import { Trophy, CheckCircle } from 'lucide-react'

export default function Results() {
  return (
    <section className="py-24 bg-[#0B1121] text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">项目价值与成效</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            通过数字化转型，西域供应链实现了从业务端到财务端的全流程闭环管理，显著提升了集团化运营效率
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-20">
           <div className="text-center p-6 bg-slate-800/50 rounded-2xl border border-slate-700 backdrop-blur-sm">
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">50<span className="text-2xl text-blue-500">%</span></div>
              <div className="text-slate-400 font-medium">资金结算效率提升</div>
           </div>
           
           <div className="text-center p-6 bg-slate-800/50 rounded-2xl border border-slate-700 backdrop-blur-sm">
              <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">80<span className="text-2xl text-cyan-500">%</span></div>
              <div className="text-slate-400 font-medium">报表生成周期缩短</div>
           </div>

           <div className="text-center p-6 bg-slate-800/50 rounded-2xl border border-slate-700 backdrop-blur-sm">
              <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">100<span className="text-2xl text-emerald-500">%</span></div>
              <div className="text-slate-400 font-medium">系统数据一致性</div>
           </div>

           <div className="text-center p-6 bg-slate-800/50 rounded-2xl border border-slate-700 backdrop-blur-sm">
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">3<span className="text-2xl text-purple-500">流</span></div>
              <div className="text-slate-400 font-medium">物流/资金流/信息流合一</div>
           </div>
        </div>

        <div className="bg-gradient-to-br from-blue-900/50 to-slate-900/50 rounded-3xl p-8 md:p-12 border border-blue-500/20">
          <div className="flex flex-col md:flex-row items-center gap-10">
             <div className="shrink-0 p-4 bg-blue-500 rounded-full shadow-lg shadow-blue-500/30">
                <Trophy className="w-10 h-10 text-white" />
             </div>
             <div>
                <h3 className="text-2xl font-bold mb-4 text-white">数字化转型标杆价值</h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  电商/MRO行业客户西域供应链在快速发展中，亟需解决多业务协同与集团化运营的深层次挑战。
                  通过构建以“多系统集成”为基础的一体化平台，打通供应链管理服务、物流配送、仓储服务等全链路业务流程，
                  实现业务与财务深度融合。推动“付款自动化”落地，提升结算效率与准确性。
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="flex items-center gap-2 text-sm text-blue-300 bg-blue-500/10 px-3 py-1.5 rounded-full border border-blue-500/20"><CheckCircle className="w-4 h-4"/> 财务业务深度融合</span>
                  <span className="flex items-center gap-2 text-sm text-blue-300 bg-blue-500/10 px-3 py-1.5 rounded-full border border-blue-500/20"><CheckCircle className="w-4 h-4"/> 供应链金融创新</span>
                  <span className="flex items-center gap-2 text-sm text-blue-300 bg-blue-500/10 px-3 py-1.5 rounded-full border border-blue-500/20"><CheckCircle className="w-4 h-4"/> 集团化高效管控</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}
