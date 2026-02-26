'use client'

import React from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { DashboardPreview } from './DashboardPreview'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

export const Hero = () => {
  const { scrollY } = useScroll()
  const y2 = useTransform(scrollY, [0, 500], [0, -40])
  const [showMoreHonors, setShowMoreHonors] = React.useState(false)

  return (
    <section className="relative min-h-[58vh] md:min-h-[84vh] lg:min-h-screen flex items-start lg:items-center pt-14 pb-12 md:pt-20 md:pb-12 lg:pt-16 lg:pb-24 overflow-hidden bg-[#0F172A] isolate text-white">
      {/* 1. Deep Future Background */}
      <div className="absolute inset-0 z-[-1]">
        {/* Digital Grid - Neon Blue - Increased Opacity */}
        <div className="absolute inset-0 opacity-[0.15]" style={{
           backgroundImage: `linear-gradient(rgba(56, 189, 248, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.3) 1px, transparent 1px)`,
           backgroundSize: '40px 40px',
           maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
        }}></div>

        {/* Central Spotlight - Fills negative space */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-gradient-to-b from-indigo-900/20 via-cyan-900/10 to-transparent blur-[100px] -z-10"></div>

        {/* Ambient Glows */}
        <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-indigo-600/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-12 items-center">

            {/* Left Column: Text Content */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="flex flex-col items-start text-left w-full"
            >
               <motion.div variants={fadeInUp} className="relative mb-4 lg:mb-8">
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] sm:text-xs font-mono mb-4 lg:mb-6 backdrop-blur-sm">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                     <span className="font-bold text-white mr-1">泊冉软件</span>
                     <span className="opacity-40 mr-1">|</span>
                     用友合作伙伴
                 </div>
                 <h1 className="text-2xl sm:text-4xl lg:text-[72px] font-heading font-bold leading-[1.1] lg:leading-[0.95] tracking-tighter mb-4 lg:mb-6 text-white drop-shadow-2xl">
                   <span className="whitespace-nowrap">您的业财数据</span> <br className="lg:block" />
                   <span className="whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 animate-shimmer bg-[length:200%_100%]">
                     打通了吗？
                   </span>
                 </h1>
                 {/* Decorative Glitch Element - Refined */}
                 <div className="absolute -top-[20%] -left-[10%] w-[140%] h-[140%] bg-blue-600/5 blur-[80px] -z-10 rounded-full pointer-events-none mix-blend-screen"></div>
               </motion.div>

                <motion.p variants={fadeInUp} className="text-sm sm:text-base lg:text-xl text-slate-400 font-medium leading-relaxed mb-4 lg:mb-8 max-w-full lg:max-w-xl">
                  14年深耕 <span className="text-cyan-400 font-semibold">半导体、新零售、装备制造、消费品、专业服务</span> 五大行业，帮您避开我们踩过的坑。服务 500+ 企业，其中 80% 是老客户转介绍。
                </motion.p>

                <motion.div variants={fadeInUp} className="md:hidden flex flex-wrap gap-2 mb-5 w-full">
                  {['业财打通', '财务共享', '供应链协同', '系统迁移'].map((item, idx) => (
                    <div
                      key={idx}
                      className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/20 bg-white/5 px-2.5 py-1 text-[11px] text-slate-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="hidden md:grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-400 font-medium mb-5 lg:mb-10 w-full"
                >
                  {[
                    '业财数据打通？',
                    '财务共享建设？',
                    '供应链协同优化？',
                    '遗留系统迁移？',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 group whitespace-nowrap">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.4)]"></span>
                      <span className="group-hover:text-cyan-300 transition-colors">{item}</span>
                    </div>
                  ))}
                </motion.div>

               <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3 sm:gap-5 relative z-20 w-full">
                 {/* Spotlight Button 1 */}
                 <Link href="/contact" className="group relative w-full sm:w-auto">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-slate-950 font-bold text-sm rounded-lg flex items-center justify-center gap-2 shadow-xl hover:shadow-cyan-500/20 transition-all active:scale-[0.98]">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      <span>免费诊断我的企业</span>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-950 group-hover:translate-x-1 transition-all" />
                    </div>
                 </Link>

                 {/* Spotlight Button 2 - Glass */}
                 <Link href="/solution" className="group px-6 sm:px-8 py-3.5 sm:py-4 bg-white/5 border border-white/10 text-white font-bold text-sm rounded-lg hover:bg-white/10 hover:border-white/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 backdrop-blur-md overflow-hidden relative w-full sm:w-auto">
                   <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                   <span>查看行业方案</span>
                 </Link>
               </motion.div>

               <motion.div
                 variants={fadeInUp}
                 className="mt-6 lg:mt-12 pt-5 lg:pt-8 border-t border-white/5 w-full max-w-full lg:max-w-lg"
               >
                  <div className="md:hidden">
                    <div className="text-xs text-slate-400">
                      国家级高新技术企业 · 上海市专精特新
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowMoreHonors((prev) => !prev)}
                      className="mt-2 text-[11px] text-cyan-300 hover:text-cyan-200 transition-colors"
                    >
                      {showMoreHonors ? '收起更多' : '展开更多资质'}
                    </button>
                    {showMoreHonors ? (
                      <div className="mt-2 space-y-1.5">
                        <div className="text-xs text-slate-500">国家级科技型中小企业</div>
                        <div className="text-xs text-slate-500">宝山区企业技术中心</div>
                      </div>
                    ) : null}
                  </div>

                  <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 gap-y-3 lg:gap-y-4 gap-x-2">
                     {[
                       "国家级高新技术企业",
                       "国家级科技型中小企业",
                       "上海市专精特新企业",
                       "宝山区企业技术中心"
                     ].map((honor, i) => (
                       <div key={i} className="flex items-center gap-2 sm:gap-3 group cursor-default">
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-cyan-400 transition-colors duration-300 flex-shrink-0"></div>
                          <span className="text-xs sm:text-sm text-slate-500 font-medium group-hover:text-slate-300 transition-colors duration-300 tracking-wide">{honor}</span>
                       </div>
                     ))}
                  </div>
               </motion.div>
            </motion.div>

           {/* Right Column: Dashboard Visual - Hidden on mobile, shown on lg+ */}
           <motion.div
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1, delay: 0.2 }}
             className="relative w-full h-auto hidden lg:block"
           >
              <motion.div
                 style={{ y: y2 }}
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 1.5, ease: "easeOut" }}
                 className="relative group w-full h-full"
              >
                 {/* Glowing Rim */}
                 <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 rounded-2xl opacity-40 group-hover:opacity-70 blur-lg transition-opacity duration-700"></div>

                 {/* Main Container */}
                 <div className="relative bg-[#0F111A] rounded-xl border border-white/10 shadow-2xl ring-1 ring-white/10 h-full">
                   <DashboardPreview />
                 </div>

                  {/* Reflection Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none rounded-xl"></div>
              </motion.div>
           </motion.div>

        </div>
      </div>



      {/* Smooth Transition Removed - Using natural spacing */}
    </section>
  )
}
