'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'

interface Scenario {
  title: string
  problem: string
  solution: string
  outcome: string
  image: string
}

interface KeyScenariosProps {
  scenarios: Scenario[]
}

export default function KeyScenarios({ scenarios }: KeyScenariosProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#1F2329] mb-4">
            核心<span className="text-[#0052D9]">业务场景</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            三大场景覆盖专业服务机构核心业务链路
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {scenarios.map((scenario, index) => (
            <button
              key={scenario.title}
              onClick={() => setActiveIndex(index)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeIndex === index
                  ? 'bg-[#0052D9] text-white shadow-lg'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {scenario.title}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left: Content */}
              <div className="p-8 lg:p-12">
                <h3 className="text-2xl font-bold text-[#1F2329] mb-6">
                  {scenarios[activeIndex].title}
                </h3>
                
                <div className="space-y-6">
                  {/* Problem */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-red-600 font-bold text-sm">痛</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">业务痛点</h4>
                      <p className="text-slate-600">{scenarios[activeIndex].problem}</p>
                    </div>
                  </div>

                  {/* Solution */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-sm">解</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">解决方案</h4>
                      <p className="text-slate-600">{scenarios[activeIndex].solution}</p>
                    </div>
                  </div>

                  {/* Outcome */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">实施效果</h4>
                      <p className="text-[#E60012] font-medium">{scenarios[activeIndex].outcome}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Image */}
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={scenarios[activeIndex].image}
                  alt={scenarios[activeIndex].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
