import { TrendingUp, Users, Target, Shield, Quote } from 'lucide-react'

const values = [
  {
    icon: TrendingUp,
    value: '50%',
    label: '核算效率提升',
    desc: '自动化结转与对账，减少人力投入'
  },
  {
    icon: Target,
    value: '95%+',
    label: '成本预测准确率',
    desc: '动态成本监控，规避项目损失'
  },
  {
    icon: Shield,
    value: '99%以上',
    label: '业财数据一致性',
    desc: '彻底解决对账难、数据不一的问题'
  },
  {
    icon: Users,
    value: '20%',
    label: '资源利用率优化',
    desc: '智能工时管理，优化人才配置'
  }
]

export default function ValueSection() {
  return (
    <section className="py-24 bg-[#1F2329] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            创造可见的商业价值
          </h2>
          <p className="text-slate-400">
            不仅是系统的上线，更是管理效能的质变。通过 P2C 方案，助力企业从“野蛮生长”向“精益管理”转型。
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {values.map((v, i) => (
            <div key={i} className="text-center group">
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#E60012] transition-colors">
                <v.icon className="w-8 h-8 text-[#E60012] group-hover:text-white transition-colors" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{v.value}</div>
              <div className="text-lg font-semibold text-slate-200 mb-2">{v.label}</div>
              <p className="text-sm text-slate-400 leading-relaxed max-w-[200px] mx-auto">
                {v.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10 relative overflow-hidden flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#E60012] flex items-center justify-center font-bold text-white text-xl">朗</div>
                <div>
                    <h3 className="text-xl font-bold text-white">朗新科技集团</h3>
                    <p className="text-slate-400 text-sm">能源科技 · 深交所上市</p>
                </div>
              </div>
              <div className="flex-1 relative z-10">
                 <Quote className="text-slate-600 mb-4 w-8 h-8 opacity-50"/>
                 <p className="text-slate-300 leading-relaxed mb-6">
                    &quot;利用 YonBIP 项目云与财务云的深度集成，我们实现了全生命周期的数字化管理闭环。尤其是**业财一体化的风控引擎**，让每一笔预算支出都受控，彻底消灭了业财断点，支撑了集团化的高效运营。&quot;
                 </p>
              </div>
              <div className="pt-6 border-t border-white/10 flex gap-4 text-sm text-[#E60012] font-semibold">
                  <span># 业财深度融合</span>
                  <span># 全生命周期风控</span>
              </div>
           </div>

           <div className="bg-white/5 rounded-2xl p-8 border border-white/10 relative overflow-hidden flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white text-xl">思</div>
                <div>
                    <h3 className="text-xl font-bold text-white">思路智园</h3>
                    <p className="text-slate-400 text-sm">化工园区解决方案 · 高新技术</p>
                </div>
              </div>
             <div className="flex-1 relative z-10">
                 <Quote className="text-slate-600 mb-4 w-8 h-8 opacity-50"/>
                 <p className="text-slate-300 leading-relaxed mb-6">
                    &quot;作为拟上市公司，**IPO 合规性**是我们关注的重点。P2C 方案帮我们构建了完整的业务财务证据链，不仅实现了项目收支的实时掌控，更为上市审计提供了坚实的数据基础，满足了严格的合规要求。&quot;
                 </p>
              </div>
              <div className="pt-6 border-t border-white/10 flex gap-4 text-sm text-blue-400 font-semibold">
                  <span># IPO合规支撑</span>
                  <span># 成本精准归集</span>
              </div>
           </div>
        </div>
      </div>
    </section>
  )
}
