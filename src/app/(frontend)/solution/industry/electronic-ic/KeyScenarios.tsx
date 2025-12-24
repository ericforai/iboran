'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, Layers, Cpu, Database } from 'lucide-react'

interface Scenario {
  title: string
  problem: string
  solution: string
  outcome: string
  icon: React.ElementType
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
          <span className="text-sm text-[#0052D9] font-semibold tracking-wider uppercase">
            Key Scenarios
          </span>
          <h2 className="text-3xl font-bold text-[#1F2329] mt-2 mb-4">
            电子IC核心业务场景
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full" />
        </div>
        
        {/* Tab 切换 */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {scenarios.map((scenario, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-8 py-4 rounded-xl font-bold transition-all ${
                activeTab === idx
                  ? 'bg-[#0052D9] text-white shadow-xl scale-105'
                  : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
              }`}
            >
              <scenario.icon className={`w-5 h-5 ${activeTab === idx ? 'text-white' : 'text-[#0052D9]'}`} />
              {scenario.title}
            </button>
          ))}
        </div>
        
        {/* 场景内容 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="grid lg:grid-cols-2 gap-12 items-stretch"
          >
            {/* 左侧：内容卡片 */}
            <div className="flex flex-col gap-6">
              <div className="p-8 bg-red-50 rounded-2xl border border-red-100">
                <h4 className="text-md font-bold text-red-600 mb-3 flex items-center gap-2">
                  <span className="text-xl">😣</span> 管理痛点
                </h4>
                <p className="text-slate-700 leading-relaxed font-medium">
                  {scenarios[activeTab].problem}
                </p>
              </div>
              
              <div className="p-8 bg-blue-50 rounded-2xl border border-blue-100 flex-1">
                <h4 className="text-md font-bold text-[#0052D9] mb-3 flex items-center gap-2">
                  <span className="text-xl">💡</span> 解决方案
                </h4>
                <p className="text-slate-700 leading-relaxed">
                  {scenarios[activeTab].solution}
                </p>
              </div>
            </div>
            
            {/* 右侧：效果卡片 */}
            <div className="bg-[#1F2329] p-10 rounded-2xl shadow-2xl flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 -m-8 w-40 h-40 bg-blue-500 rounded-full opacity-10 group-hover:scale-125 transition-transform duration-700" />
              
              <div className="relative z-10">
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  实现价值收益
                </h4>
                <div className="space-y-6">
                  {scenarios[activeTab].outcome.split('。').filter(s => s).map((item, i) => (
                    <div key={i} className="flex gap-4 items-start border-l-2 border-slate-700 pl-6 py-1">
                      <p className="text-slate-300 leading-relaxed">
                        {item}。
                      </p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 flex items-center gap-4 text-slate-400">
                  <div className="p-3 bg-slate-800 rounded-lg">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <div className="p-3 bg-slate-800 rounded-lg">
                    <Database className="w-6 h-6" />
                  </div>
                  <div className="p-3 bg-slate-800 rounded-lg">
                    <Layers className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
