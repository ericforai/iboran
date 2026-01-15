'use client'

import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  Database, 
  FileCheck2, 
  FolderLock, 
  Zap, 
  Search 
} from 'lucide-react'

const steps = [
  {
    icon: Database,
    title: '智能采集',
    desc: '从 ERP、财务、税务等系统自动捕获电子凭证与附件。',
    color: 'bg-blue-500'
  },
  {
    icon: FileCheck2,
    title: '自动化整理',
    desc: '系统自动执行分类、著录、组卷及四性检测。',
    color: 'bg-indigo-500'
  },
  {
    icon: FolderLock,
    title: '安全归档',
    desc: '根据档号规则自动装册入库，实现全生命周期管控。',
    color: 'bg-purple-500'
  },
  {
    icon: Search,
    title: '高效共享',
    desc: '多维检索与在线借阅，支持远程审计与数据分析。',
    color: 'bg-emerald-500'
  }
]

export default function HowItWorks() {
  return (
    <section className="py-32 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-24">
          <h2 className="text-4xl font-bold text-[#1F2329] mb-6">全生命周期管理流程</h2>
          <div className="w-20 h-1.5 bg-[#E60012] mx-auto rounded-full mb-6" />
          <p className="text-slate-500">贯穿电子会计档案从产生、收集、整理、保管到利用的全过程。</p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0" />

          <div className="grid lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <div className={`w-20 h-20 ${step.color} rounded-[2rem] flex items-center justify-center text-white shadow-xl mb-8 relative group`}>
                  <step.icon size={32} />
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 text-slate-300">
                      <ArrowRight size={24} />
                    </div>
                  )}
                  {/* Pulse Effect */}
                  <div className={`absolute inset-0 ${step.color} rounded-[2rem] animate-ping opacity-20 group-hover:block hidden`} />
                </div>
                <h3 className="text-xl font-bold text-[#1F2329] mb-4">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed px-4">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Highlight */}
        <div className="mt-24 p-8 bg-white rounded-[32px] border border-slate-100 shadow-sm flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
          <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center shrink-0">
             <Zap className="text-[#E60012]" size={30} />
          </div>
          <div>
            <h4 className="text-lg font-bold text-[#1F2329] mb-2">自动化赋能：整理效率提升 80%+</h4>
            <p className="text-slate-500 text-sm">
              通过智能中台配置，可实现大部分会计档案的“静默归档”，档案管理人员仅需对异常数据进行少量人工干预，大幅释放生产力。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
