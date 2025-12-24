'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, ArrowRight } from 'lucide-react'

interface Scenario {
  title: string
  problem: string
  solution: string
  outcome: string
  image?: string
}

interface KeyScenariosProps {
  scenarios: Scenario[]
}

export default function KeyScenarios({ scenarios }: KeyScenariosProps) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-[#0052D9] font-bold tracking-widest uppercase mb-3 block">
            Business Scenarios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2329] mb-6">
            覆盖全价值链的业务场景
          </h2>
          <div className="w-20 h-1.5 bg-[#E60012] mx-auto rounded-full" />
        </div>
        
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {scenarios.map((scenario, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 border-2 ${
                activeTab === idx
                  ? 'bg-[#0052D9] border-[#0052D9] text-white shadow-lg shadow-blue-200 transform scale-105'
                  : 'bg-white border-slate-200 text-slate-600 hover:border-[#0052D9] hover:text-[#0052D9]'
              }`}
            >
              {scenario.title}
            </button>
          ))}
        </div>
        
        {/* Scenario Content */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-2 gap-12 items-stretch"
            >
              {/* Left: Content Cards */}
              <div className="space-y-6 flex flex-col justify-center">
                <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                  <h4 className="flex items-center gap-2 text-red-700 font-bold mb-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-red-200 text-red-700 text-xs">!</span>
                    痛点与挑战
                  </h4>
                  <p className="text-slate-700 leading-relaxed">{scenarios[activeTab].problem}</p>
                </div>

                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                  <h4 className="flex items-center gap-2 text-[#0052D9] font-bold mb-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-200 text-blue-700 text-xs">💡</span>
                    解决方案
                  </h4>
                  <p className="text-slate-700 leading-relaxed">{scenarios[activeTab].solution}</p>
                </div>

                <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                  <h4 className="flex items-center gap-2 text-green-700 font-bold mb-3">
                    <CheckCircle className="w-5 h-5" />
                    应用价值
                  </h4>
                  <p className="text-slate-700 leading-relaxed">{scenarios[activeTab].outcome}</p>
                </div>
              </div>
              
              {/* Right: Visual */}
              <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden shadow-2xl group">
                {scenarios[activeTab].image ? (
                  <>
                    <img 
                      src={scenarios[activeTab].image} 
                      alt={scenarios[activeTab].title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                       <p className="text-white font-medium text-lg flex items-center gap-2">
                         查看场景详情 <ArrowRight className="w-5 h-5" />
                       </p>
                    </div>
                  </>
                ) : (
                  <div className="absolute inset-0 bg-slate-100 flex items-center justify-center">
                    <p className="text-slate-400">场景演示图</p>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
