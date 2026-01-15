'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code2, Smartphone, Cpu, Share2, Database, Layout } from 'lucide-react'

const capabilities = [
  {
    id: 'visual',
    icon: Layout,
    title: '可视化构建',
    desc: '所见即所得的页面设计器，支持拖拽式布局与组件化配置。',
    content: (
      <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 h-full flex flex-col">
        <div className="flex items-center gap-2 mb-4 border-b border-slate-200 pb-2">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
          <span className="text-xs text-slate-400 ml-2">App Designer</span>
        </div>
        <div className="flex-1 grid grid-cols-12 gap-4">
          <div className="col-span-3 border-r border-slate-200 pr-4 space-y-2">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="h-8 bg-white border border-slate-200 rounded flex items-center px-2">
                <div className="w-4 h-4 bg-slate-100 rounded mr-2"></div>
                <div className="w-12 h-2 bg-slate-100 rounded"></div>
              </div>
            ))}
          </div>
          <div className="col-span-9 bg-white border border-dashed border-slate-300 rounded flex items-center justify-center">
            <div className="text-center">
              <Layout className="w-8 h-8 text-slate-300 mx-auto mb-2" />
              <div className="text-xs text-slate-400">画布区域</div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'mobile',
    icon: Smartphone,
    title: '多端适配',
    desc: '一次开发，自动生成 PC、H5、小程序等多端应用。',
    content: (
      <div className="bg-slate-900 p-6 rounded-lg h-full flex items-center justify-center gap-8">
        <div className="w-48 h-32 bg-slate-800 rounded-lg border border-slate-700 p-2 relative">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-slate-700 rounded-b"></div>
           <div className="w-full h-full bg-slate-700/50 rounded flex items-center justify-center text-slate-500 text-xs">Web</div>
        </div>
        <div className="w-16 h-32 bg-slate-800 rounded-lg border border-slate-700 p-1 relative">
           <div className="absolute top-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-slate-600 rounded-full"></div>
           <div className="w-full h-full bg-slate-700/50 rounded flex items-center justify-center text-slate-500 text-[10px]">Mobile</div>
        </div>
      </div>
    )
  },
  {
    id: 'ai',
    icon: Cpu,
    title: 'AI 智能编程',
    desc: '基于 YonGPT 大模型，通过自然语言生成代码与 SQL。',
    content: (
      <div className="bg-[#1e1e1e] p-4 rounded-lg h-full font-mono text-xs overflow-hidden">
        <div className="flex gap-2 mb-3">
           <div className="text-green-400">$</div>
           <div className="text-white">生成一个员工请假流程</div>
        </div>
        <div className="pl-4 space-y-1 text-blue-300">
           <div>Generating workflow...</div>
           <div className="text-purple-400">const leaveRequest = {'{'}</div>
           <div className="pl-4 text-orange-300">applicant: User,</div>
           <div className="pl-4 text-orange-300">days: Number,</div>
           <div className="pl-4 text-orange-300">reason: String,</div>
           <div className="pl-4 text-yellow-300">approve: (manager) ={'>'} {'{'} ... {'}'}</div>
           <div className="text-purple-400">{'}'}</div>
           <div className="text-green-400 mt-2">Done.</div>
        </div>
      </div>
    )
  },
  {
    id: 'integration',
    icon: Share2,
    title: '连接集成',
    desc: '内置 300+ 连接器，零代码打通 ERP、OA 与第三方系统。',
    content: (
      <div className="bg-blue-50 p-6 rounded-lg h-full flex items-center justify-center relative">
        <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center z-10 border-2 border-blue-100">
          <Share2 className="w-8 h-8 text-[#0052D9]" />
        </div>
        {[0, 60, 120, 180, 240, 300].map((deg, i) => (
          <div key={i} className="absolute w-2 h-2 bg-blue-400 rounded-full" 
               style={{ transform: `rotate(${deg}deg) translate(60px)` }}></div>
        ))}
         <div className="absolute w-40 h-40 border border-dashed border-blue-200 rounded-full animate-spin-slow"></div>
      </div>
    )
  }
]

export default function Capabilities() {
  const [activeTab, setActiveTab] = useState('visual')

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            全面感知的<span className="text-[#0052D9]">核心能力矩阵</span>
          </h2>
          <p className="text-lg text-slate-600">
            从构建体验到智能化赋能，提供全方位的技术支撑
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          {/* Left Navigation */}
          <div className="lg:w-1/3 space-y-4">
            {capabilities.map((cap) => (
              <div
                key={cap.id}
                onClick={() => setActiveTab(cap.id)}
                className={`p-6 rounded-xl cursor-pointer transition-all border-2 ${
                  activeTab === cap.id
                    ? 'bg-white border-[#0052D9] shadow-md'
                    : 'bg-white border-transparent hover:border-slate-200'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    activeTab === cap.id ? 'bg-blue-50 text-[#0052D9]' : 'bg-slate-100 text-slate-500'
                  }`}>
                    <cap.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className={`font-bold text-lg mb-1 ${
                      activeTab === cap.id ? 'text-[#0052D9]' : 'text-slate-800'
                    }`}>
                      {cap.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Content Area */}
          <div className="lg:w-2/3 bg-white rounded-2xl p-2 shadow-lg border border-slate-100 min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full p-6"
              >
                {capabilities.find(c => c.id === activeTab)?.content}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
