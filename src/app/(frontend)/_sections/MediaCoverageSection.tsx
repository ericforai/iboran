'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Newspaper, Award, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
}

export const MediaCoverageSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-white overflow-hidden border-t border-slate-100">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-16 items-center">
          
          {/* Left: Context & Label */}
          <motion.div 
            {...fadeInUp}
            className="flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-mono font-bold uppercase tracking-widest mb-8">
              <Award className="w-3 h-3" />
              权威媒体报道
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-slate-950 tracking-tight leading-[1.1] mb-6 lg:mb-8">
              主流媒体<br />
              深度见证数智实力
            </h2>
            
            <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed mb-8 lg:mb-10 max-w-sm">
              从技术突破到行业标杆，泊冉软件的交付价值多次获得国家级权威媒体关注与报道。
            </p>

            <div className="flex flex-col gap-4 pt-10 border-t border-slate-100 w-full mt-auto">
               <div className="flex flex-wrap gap-4">
                 {[
                   { source: '新华网', type: '权威媒体专访', icon: <Newspaper size={14} />, color: 'text-red-600', bg: 'bg-red-50' },
                   { source: '主流报道', type: '数字化排头兵', icon: <Award size={14} />, color: 'text-blue-600', bg: 'bg-blue-50' }
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-4 p-3 pr-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all group/item cursor-default">
                      <div className={`w-10 h-10 ${item.bg} ${item.color} rounded-xl flex items-center justify-center transition-transform group-hover/item:scale-110`}>
                        {item.icon}
                      </div>
                      <div className="flex flex-col">
                         <span className="text-[12px] font-black text-slate-900 tracking-tight">{item.source}</span>
                         <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none mt-0.5">{item.type}</span>
                      </div>
                   </div>
                 ))}
               </div>
               <div className="pt-2">
                 <span className="text-slate-950 font-black italic text-base tracking-tight mb-1 block">“ 数字化转型的排头兵 ”</span>
                 <p className="text-xs font-medium text-slate-400 leading-relaxed">
                   摘自新华网对强生出租财务共享中心建设的深度专访
                 </p>
               </div>
            </div>
          </motion.div>

          {/* Right: The Feature Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative group"
          >
            {/* Decorative Shadow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/5 to-indigo-600/5 rounded-[40px] blur-2xl group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
            
            <div className="bg-slate-50 border border-slate-200/60 rounded-[32px] overflow-hidden p-1 lg:p-2 shadow-sm group-hover:shadow-xl transition-all duration-700">
              <div className="bg-white rounded-[20px] sm:rounded-[26px] p-6 sm:p-8 lg:p-12 relative overflow-hidden">
                
                {/* News Source Header */}
                <div className="flex items-center justify-between mb-12">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600">
                        <Newspaper size={24} />
                      </div>
                      <div>
                        <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">Featured Report</div>
                        <div className="text-lg font-heading font-black text-slate-900">新华网 XINHUANET</div>
                      </div>
                   </div>
                   <div className="text-sm font-mono text-slate-300 font-bold">2021.07.14</div>
                </div>

                {/* Article Headline */}
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-slate-950 leading-tight mb-6 lg:mb-8 group-hover:text-blue-600 transition-colors">
                  上海强生出租：打造财务中台 向共享要效率
                </h3>

                {/* Content Essence */}
                <div className="space-y-6 mb-12 border-l-2 border-slate-100 pl-8">
                  <p className="text-slate-500 leading-relaxed font-medium">
                    “ 通过致远互联协同运营平台 COP，实现业财一体化与前端业务打通，业务数据实时传递... 凭证自动化率已达到 <span className="text-blue-600 font-black">80%</span>，大幅提升财务工作质量和效率。 ”
                  </p>
                  <div className="flex flex-wrap gap-3">
                     {['财务共享中心', '业财一体化', '数字化转型'].map(tag => (
                       <span key={tag} className="px-3 py-1 bg-slate-50 text-[10px] font-bold text-slate-400 rounded-md uppercase tracking-wider">
                         {tag}
                       </span>
                     ))}
                  </div>
                </div>

                {/* Action */}
                <Link 
                  href="https://www.news.cn/info/20210714/703f226d7263450c96107f2232cc5eba/c.html" 
                  target="_blank"
                  className="inline-flex items-center gap-2 group/btn px-6 py-3 bg-slate-950 text-white text-sm font-bold rounded-xl hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-slate-950/10"
                >
                  阅读权威报道原文
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </Link>

                {/* Background Decoration */}
                <div className="absolute top-0 right-0 p-12 text-slate-50 pointer-events-none -z-10 rotate-12">
                   <Newspaper size={300} strokeWidth={0.5} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
