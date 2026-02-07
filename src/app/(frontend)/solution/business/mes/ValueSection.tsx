'use client'


import { CheckCircle2 } from 'lucide-react'

export default function ValueSection() {
  return (
    <section className="py-24 bg-[#0F172A] text-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 leading-tight">
              数据驱动制造 <br />
              <span className="text-blue-400">重构工厂核心竞争力</span>
            </h2>
            <div className="space-y-6">
              {[
                { title: '生产透明化', desc: '进度实时可视，异常快速响应，交付周期缩短 20%+' },
                { title: '质量合规化', desc: '建立完整的质量追溯体系，满足高端验厂需求，客诉率降低 30%' },
                { title: '成本精细化', desc: '实时采集工时与物料消耗，精准核算生产成本，减少浪费' },
                { title: '决策科学化', desc: '基于真实数据的 OEE 与产能分析，辅助管理层优化决策' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1">
                    <CheckCircle2 className="text-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                    <p className="text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2">
             <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 backdrop-blur border border-white/10 p-6 rounded-2xl text-center">
                   <div className="text-4xl font-bold text-blue-400 mb-2">99%</div>
                   <div className="text-sm text-slate-300">库存准确率</div>
                </div>
                <div className="bg-white/5 backdrop-blur border border-white/10 p-6 rounded-2xl text-center">
                   <div className="text-4xl font-bold text-blue-400 mb-2">30%</div>
                   <div className="text-sm text-slate-300">WIP 在制品降低</div>
                </div>
                <div className="bg-white/5 backdrop-blur border border-white/10 p-6 rounded-2xl text-center">
                   <div className="text-4xl font-bold text-blue-400 mb-2">99%以上</div>
                   <div className="text-sm text-slate-300">质量可追溯</div>
                </div>
                <div className="bg-white/5 backdrop-blur border border-white/10 p-6 rounded-2xl text-center">
                   <div className="text-4xl font-bold text-blue-400 mb-2">2x</div>
                   <div className="text-sm text-slate-300">计件核算效率提升</div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}
