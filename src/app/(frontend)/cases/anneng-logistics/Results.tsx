'use client'

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { useRef, useEffect } from 'react'

function Counter({ value, suffix = "" }: { value: number, suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 })
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest) + suffix
      }
    })
  }, [springValue, suffix])

  return <span ref={ref} />
}

export default function Results() {
  return (
    <section className="py-24 bg-[#050B14] text-white relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-heading font-bold mb-4">主要成效</h2>
          <p className="text-slate-400">数字化转型带来的可量化商业价值</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="p-8"
            >
                <div className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-300 to-blue-600 mb-4 font-heading">
                    <Counter value={100} suffix="%" />
                </div>
                <div className="text-lg text-white font-medium mb-2">业财数据实时一致</div>
                <p className="text-sm text-slate-400">彻底打通业务与财务数据，消除了人工对账，以保障报表数据源头单一、真实可信。</p>
            </motion.div>

             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.4, duration: 0.5 }}
               className="p-8"
             >
                <div className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-orange-300 to-orange-600 mb-4 font-heading">
                    <Counter value={95} suffix="%" />
                </div>
                <div className="text-lg text-white font-medium mb-2">报表周期缩短</div>
                <p className="text-sm text-slate-400">月结关账时间大幅缩短，从数天缩减至小时级，管理报表实现 T+0 实时展现。</p>
            </motion.div>

             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.6, duration: 0.5 }}
               className="p-8"
             >
                <div className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-green-300 to-green-600 mb-4 font-heading">
                    <Counter value={300} suffix="+" />
                </div>
                <div className="text-lg text-white font-medium mb-2">利润中心精细化</div>
                <p className="text-sm text-slate-400">覆盖全网所有网点和转运中心的独立核算，实现经营单元的阿米巴式精细管理。</p>
            </motion.div>
        </div>
      </div>
    </section>
  )
}
