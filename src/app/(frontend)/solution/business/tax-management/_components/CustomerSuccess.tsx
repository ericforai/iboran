'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const customers = [
  "中国建筑", "国家电网", "中国移动", "三一重工", "海尔集团", "美的集团"
]

export default function CustomerSuccess() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">
            500强企业的共同选择
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full" />
        </div>

        {/* Logo Wall Placeholder */}
        <div className="flex flex-wrap justify-center gap-12 mb-20 opacity-60">
           {/* In a real scenario, we would use real logos. Here we use text placeholders for the implementation. 
               The user can replace these with actual Image components later. */}
           {customers.map((name, idx) => (
             <div key={idx} className="text-xl font-bold text-slate-400 border-2 border-slate-100 px-6 py-3 rounded-lg grayscale hover:grayscale-0 hover:border-blue-200 hover:text-blue-600 transition-all cursor-default">
               {name}
             </div>
           ))}
        </div>

        {/* Testimonial */}
        <div className="bg-[#F7F8FA] rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto relative">
          <div className="text-6xl text-[#E60012] opacity-20 font-serif absolute top-4 left-6">“</div>
          <div className="text-center relative z-10">
            <p className="text-xl text-slate-700 leading-relaxed italic mb-8">
              “通过引入税务云平台，我们实现了全国100多家分公司税务的集中管控。全税种自动申报不仅将我们的作业效率提升了85%，更重要的是建立了实时的税务风险防火墙，让集团的每一笔税款都交得明白、合规。”
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
                {/* Avatar placeholder */}
                <div className="w-full h-full bg-slate-300"></div>
              </div>
              <div className="text-left">
                <div className="font-bold text-[#1F2329]">某大型集团</div>
                <div className="text-sm text-slate-500">财务总监</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
