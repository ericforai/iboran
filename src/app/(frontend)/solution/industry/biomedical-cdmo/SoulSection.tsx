'use client'

import React from 'react'
import { Sparkles, ShieldCheck, Zap, HeartHandshake } from 'lucide-react'

const tenets = [
  {
    icon: ShieldCheck,
    title: "信任交付 (Trusted Delivery)",
    description: "CDMO 不是简单的产能代工，而是知识产权与数据完整性的『信任传递』。我们的方案将合规贯穿研产始终。"
  },
  {
    icon: Zap,
    title: "效率协同 (Efficient Synergy)",
    description: "从分子到市场的加速器。打破研发与生产的物理隔阂，实现工艺参数与业务数据的毫秒级咬合。"
  },
  {
    icon: HeartHandshake,
    title: "价值激活 (Value Activation)",
    description: "从『代工者』向『共创者』进化。通过卓越成本管控，将每一分研发投入转化为确定的商业成功。"
  }
]

export function SoulSection() {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-indigo-600/10 blur-[100px] -z-10" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          {/* Left: Manifesto Heading */}
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              <span>方案之魂 · 深度解析</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              什么是 CDMO？<br />
              它是<span className="text-blue-400"> 信任驱动 </span>的<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                创新加速 Hub
              </span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-xl">
              在我们的灵魂深处，CDMO 不仅仅是代工。它是生物医药企业在创新长跑中的
              <strong className="text-blue-400 font-bold">“超级补给站”</strong>与
              <strong className="text-blue-400 font-bold">“风险对冲垫”</strong>。
              <br /><br />
              泊冉软件的方案初心，就是通过数智化技术，让这份『交付』变得更高效、更透明、更具确定性。
            </p>
          </div>

          {/* Right: Tenets */}
          <div className="lg:w-1/2 space-y-8">
            {tenets.map((tenet, idx) => (
              <div 
                key={idx} 
                className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                    <tenet.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{tenet.title}</h3>
                </div>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {tenet.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
