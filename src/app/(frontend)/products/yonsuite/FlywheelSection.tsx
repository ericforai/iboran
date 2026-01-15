'use client'

import { motion } from 'framer-motion'
import { Disc, Zap, RotateCw, Layers } from 'lucide-react'

const flywheelFeatures = [
  {
    title: '56+ 场景化飞轮',
    desc: '覆盖从财务、供应链到人力、营销的全业务场景解决方案',
    icon: <Layers className="w-6 h-6" />
  },
  {
    title: '数智飞轮模型',
    desc: '以入、销、调、存、财为核心，实现业务数据的闭环驱动',
    icon: <RotateCw className="w-6 h-6" />
  },
  {
    title: '极速价值交付',
    desc: '基于标准场景快速上线，助力成长型企业敏捷创新',
    icon: <Zap className="w-6 h-6" />
  }
]

export default function FlywheelSection() {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-2 border-dashed border-blue-400 rounded-full animate-[spin_60s_linear_infinite]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-blue-400 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                <Disc className="w-4 h-4 animate-spin-slow" />
                <span>数智飞轮 | Digital Intelligence Flywheel</span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-8 leading-tight">
                一个飞轮旋转起来 <br/>
                助力企业实现持续性增长
              </h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-xl">
                YonSuite 独有的“数智飞轮”模型，将企业复杂的管理需求通过 56 个细分场景应用连接贯通。
                每一个“飞轮”的开启，都意味着一个新的数智化闭环的建立，协同带动企业整体的高效运转。
              </p>

              <div className="grid sm:grid-cols-1 gap-6 mb-10">
                {flywheelFeatures.map((f, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center shrink-0">
                      {f.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{f.title}</h4>
                      <p className="text-sm text-slate-400">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>


            </motion.div>
          </div>

          <div className="flex-1 relative">
            {/* Visual representation of the flywheel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square max-w-[500px] mx-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-full blur-3xl"></div>
              
              {/* Flywheel Rings */}
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute w-full h-full border-4 border-blue-500/30 rounded-full animate-[spin_20s_linear_infinite]">
                   <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)]"></div>
                </div>
                <div className="absolute w-3/4 h-3/4 border-2 border-emerald-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse]">
                   <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
                </div>
                
                {/* Center Core */}
                <div className="w-40 h-40 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex flex-col items-center justify-center shadow-2xl border border-blue-400/50 transform rotate-45">
                   <div className="-rotate-45 text-center px-4">
                     <span className="block text-2xl font-black mb-1">BIP</span>
                     <span className="block text-[10px] text-blue-200 uppercase tracking-tighter">Core Engine</span>
                   </div>
                </div>

                {/* Satellite Nodes */}
                {[
                  { name: '财务', angle: 0, color: 'bg-red-500' },
                  { name: '供应链', angle: 72, color: 'bg-blue-500' },
                  { name: '制造', angle: 144, color: 'bg-emerald-500' },
                  { name: '营销', angle: 216, color: 'bg-orange-500' },
                  { name: '人力', angle: 288, color: 'bg-purple-500' }
                ].map((node, i) => (
                  <div
                    key={i}
                    className="absolute w-16 h-16 flex flex-col items-center justify-center transition-all duration-700"
                    style={{
                      transform: `rotate(${node.angle}deg) translateY(-200px) rotate(-${node.angle}deg)`
                    }}
                  >
                    <div className={`w-12 h-12 ${node.color} rounded-xl shadow-lg flex items-center justify-center mb-1 border border-white/20`}>
                      <span className="text-xs font-bold">{node.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
