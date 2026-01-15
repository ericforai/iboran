'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  FileText, 
  ShieldCheck, 
  Search, 
  Database, 
  Zap, 
  Network,
  CheckCircle2,
  AlertCircle
} from 'lucide-react'

export default function ElectronicArchivesDashboard() {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Decorative Background Glows */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-400/20 blur-3xl rounded-full" />
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-red-400/10 blur-3xl rounded-full" />

      {/* Main Container */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#F8FAFC] rounded-2xl border border-white/60 shadow-2xl overflow-hidden backdrop-blur-sm"
      >
        {/* Header Area */}
        <div className="bg-white px-6 py-3 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#0052D9] rounded-lg flex items-center justify-center text-white">
              <Database size={18} />
            </div>
            <span className="font-bold text-slate-800 tracking-tight">Archives Cloud</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-full text-[10px] font-medium text-slate-500">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              系统运行中 (Safe Mode)
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-200" />
          </div>
        </div>

        <div className="p-6 grid grid-cols-12 gap-6">
          {/* Left Column: Stats & Alerts */}
          <div className="col-span-12 md:col-span-4 space-y-6">
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm"
              >
                <div className="text-slate-400 text-xs mb-1">已归档总量</div>
                <div className="text-xl font-bold text-slate-800">12.5M</div>
                <div className="text-green-500 text-[10px] font-medium flex items-center gap-1 mt-1">
                  <Zap size={10} /> +2.4%
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm"
              >
                <div className="text-slate-400 text-xs mb-1">OCR识别率</div>
                <div className="text-xl font-bold text-slate-800">99.8%</div>
                <div className="text-blue-500 text-[10px] font-medium flex items-center gap-1 mt-1">
                  Stable
                </div>
              </motion.div>
            </div>

            {/* Compliance Checklist */}
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2 whitespace-nowrap">
                <ShieldCheck size={14} className="text-[#0052D9]" />
                国家标准 &quot;四性检测&quot;
              </h4>
              <div className="space-y-3">
                {[
                  { label: '真实性 (Authenticity)', status: 'Verified' },
                  { label: '完整性 (Integrity)', status: 'Verified' },
                  { label: '可用性 (Usability)', status: 'Verified' },
                  { label: '安全性 (Security)', status: 'Verified' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between text-xs">
                    <span className="text-slate-600">{item.label}</span>
                    <span className="text-green-600 font-bold flex items-center gap-1">
                      <CheckCircle2 size={12} /> OK
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Visualization */}
          <div className="col-span-12 md:col-span-8 space-y-6">
            {/* Main Visual: Archive Knowledge Graph Simulation */}
            <div className="bg-[#0f172a] rounded-xl p-6 relative h-[280px] overflow-hidden group">
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px]" />
              </div>
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-white/90 whitespace-nowrap">
                    <Network size={16} className="text-blue-400" />
                    <span className="text-[11px] font-medium">凭证智能图谱检索 (Knowledge Graph)</span>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <div className="w-2 h-2 rounded-full bg-amber-400" />
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                  </div>
                </div>

                {/* Animated Graph Elements */}
                <div className="flex-1 relative flex items-center justify-center">
                  {/* Center Node */}
                  <motion.div 
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="w-16 h-16 rounded-full bg-blue-500/20 border-2 border-blue-400 flex items-center justify-center text-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                  >
                    <FileText size={28} />
                  </motion.div>

                  {/* Satellite Nodes */}
                  {[
                    { icon: ShieldCheck, color: 'text-green-400', label: '合规校验', delay: 0 },
                    { icon: Search, color: 'text-amber-400', label: '智能检索', delay: 1 },
                    { icon: Zap, color: 'text-purple-400', label: '快速响应', delay: 2 },
                  ].map((node, idx) => (
                    <motion.div 
                      key={idx}
                      animate={{ 
                        rotate: 360,
                      }}
                      transition={{ duration: 20 + idx * 5, repeat: Infinity, ease: "linear" }}
                      className="absolute w-full h-full flex items-center justify-center"
                    >
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute translate-x-24 md:translate-x-32"
                      >
                        <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700 backdrop-blur-sm flex flex-col items-center gap-1 shadow-xl">
                          <node.icon size={20} className={node.color} />
                          <span className="text-[8px] text-white/60 font-medium whitespace-nowrap">{node.label}</span>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                  
                  {/* Simulated Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                    <line x1="50%" y1="50%" x2="70%" y2="40%" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 2" />
                    <line x1="50%" y1="50%" x2="30%" y2="60%" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 2" />
                    <line x1="50%" y1="50%" x2="65%" y2="65%" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 2" />
                  </svg>
                </div>

                <div className="flex items-center justify-between text-[10px] text-slate-500 bg-slate-900/50 p-2 rounded-lg border border-slate-800/50 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span>正在检索：凭证号 #2024-ARCH-0912</span>
                  </div>
                  <span className="font-mono text-blue-400">0.024s</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Area / Action Bar */}
        <div className="px-6 py-4 bg-[#F1F5F9] border-t border-slate-200 flex items-center justify-between">
          <div className="flex gap-6">
            <div className="flex items-center gap-2 text-[10px] text-slate-500">
               <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
               入库统计
            </div>
            <div className="flex items-center gap-2 text-[10px] text-slate-500">
               <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
               检索分析
            </div>
          </div>
          <div className="text-[10px] font-bold text-[#0052D9] uppercase tracking-widest cursor-pointer hover:underline">
            进入指挥中心 &rarr;
          </div>
        </div>
      </motion.div>

      {/* Floating Elements for Depth */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute -top-6 right-10 bg-white p-3 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3 z-20"
      >
        <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-[#E60012]">
          <AlertCircle size={18} />
        </div>
        <div>
          <div className="text-[10px] font-bold text-slate-800">12 份待归档凭证</div>
          <div className="text-[8px] text-slate-400">需要手动确认元数据</div>
        </div>
      </motion.div>
    </div>
  )
}
