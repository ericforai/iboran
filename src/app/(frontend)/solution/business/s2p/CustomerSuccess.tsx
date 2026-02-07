'use client'

import { motion } from 'framer-motion'

const metrics = [
  { value: "20%", label: "采购成本降低", sub: "通过战略寻源与集采" },
  { value: "4天", label: "采购周期缩短", sub: "从 15 天优化至 11 天" },
  { value: "99%以上", label: "采购合规率", sub: "全流程阳光透明可视" },
  { value: "98%", label: "供应商准时交货率", sub: "基于实时绩效协同" }
]

const logos = [
  "中国一汽", "东风汽车", "上海医药", "华润集团",
  "南方航空", "碧桂园", "正泰集团", "用友网络"
]

export default function CustomerSuccess() {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1F2329] mb-4">500+ 行业头部企业的共同选择</h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            来自制造、零售、医药、建筑等行业的头部企业，正在通过我们的 S2P 平台重塑数字化供应链竞争力。
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 divide-x divide-slate-100">
          {metrics.map((metric, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center px-4"
            >
              <div className="text-4xl lg:text-5xl font-extrabold text-[#E60012] mb-2 font-mono tracking-tighter">
                {metric.value}
              </div>
              <div className="text-lg font-bold text-[#1F2329] mb-1">
                {metric.label}
              </div>
              <div className="text-sm text-slate-500">
                {metric.sub}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logo Wall Placeholder - Since we don't have real logo images, we use stylish text boxes */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {logos.map((logo, idx) => (
             <div 
               key={idx}
               className="h-20 bg-slate-50 rounded-lg flex items-center justify-center border border-slate-100 hover:shadow-md hover:bg-white hover:border-blue-100 transition-all duration-300 font-bold text-slate-400 hover:text-[#0052D9] text-xl"
             >
               {logo}
             </div>
          ))}
        </div>
      </div>
    </section>
  )
}
