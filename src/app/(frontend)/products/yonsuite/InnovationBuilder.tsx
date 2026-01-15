'use client'

import { motion } from 'framer-motion'
import { Code2, Smartphone, Cpu, Box, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

const builderFeatures = [
  {
    title: '无代码/低代码开发',
    desc: '拖拽式可视化建模，非 IT 人员也能快速构建业务应用',
    icon: <Box className="w-5 h-5 text-blue-500" />
  },
  {
    title: '原生移动化体验',
    desc: '一次开发，多端自适应，完美集成在移动端工作台',
    icon: <Smartphone className="w-5 h-5 text-blue-500" />
  },
  {
    title: '云原生技术底座',
    desc: '基于微服务、中台化架构，支撑海量数据与高并发场景',
    icon: <Cpu className="w-5 h-5 text-blue-500" />
  }
]

export default function InnovationBuilder() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Visual Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-2xl blur-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden aspect-[16/10]">
                <Image 
                  src="/images/yonsuite-innovation-builder.png" 
                  alt="YonBuilder Innovation Platform" 
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  </div>
                  <span className="font-bold text-[#1F2329]">极速交付上线</span>
                </div>
                <div className="text-xs text-slate-400">平均缩短 [60]% 开发周期</div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#0052D9] text-sm font-medium mb-6">
                <Code2 className="w-4 h-4" />
                <span>YonBuilder | 商业创新底座</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2329] mb-8 leading-tight">
                低代码驱动业务快速创新 <br/>
                让想法即刻落地
              </h2>
              
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                在快速变化的市场环境下，YonSuite 提供的 YonBuilder 平台让企业不仅可以“买”服务，
                更可以“造”服务。无需繁琐的编码，即可在云端构建专属的个性化应用。
              </p>

              <div className="space-y-8">
                {builderFeatures.map((f, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                      {f.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1F2329] mb-1">{f.title}</h4>
                      <p className="text-slate-500 text-sm">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
