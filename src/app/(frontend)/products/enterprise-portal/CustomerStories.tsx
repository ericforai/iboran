'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Quote } from 'lucide-react'

export function CustomerStories() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            领先企业的共同选择
          </h2>
          <p className="text-lg text-slate-600">
            赋能 1000+ 数智化先行企业，打造高效协同的数字工作环境。
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-bold text-slate-900 text-lg">
                    H
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">湖南中烟</h3>
                    <p className="text-slate-400 text-sm">Hunan Tobacco</p>
                  </div>
                </div>

                <div>
                   <Quote className="w-8 h-8 text-blue-500 mb-4" />
                   <h4 className="text-2xl font-bold text-white leading-relaxed mb-4">
                    “通过YonBIP统一门户平台，将分散在数十个独立系统的业务入口与待办进行了全面整合，真正实现了全员办公的‘一键跳转、一处通办’。”
                   </h4>
                   <p className="text-slate-400 italic">—— 湖南中烟信息中心负责人</p>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-700">
                    <div>
                        <div className="text-3xl font-bold text-blue-400 mb-1">90%</div>
                        <div className="text-sm text-slate-400">系统切换时间减少</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-green-400 mb-1">100%</div>
                        <div className="text-sm text-slate-400">业务入口统一</div>
                    </div>
                </div>
              </div>

              <div className="relative bg-gradient-to-br from-blue-900 to-slate-900 p-12 flex flex-col justify-center">
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
                 <div className="relative z-10 space-y-6">
                    <div className="bg-slate-800/50 backdrop-blur border border-slate-700 p-6 rounded-xl">
                        <h5 className="font-bold text-white mb-2">面临挑战</h5>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            信息化起步早，烟叶、生产、物资、办公等系统高度分散，员工需要频繁往返于数十个独立系统，信息获取分散，协同效率受阻。
                        </p>
                    </div>
                    <div className="bg-blue-900/40 backdrop-blur border border-blue-800 p-6 rounded-xl">
                        <h5 className="font-bold text-white mb-2">解决方案</h5>
                        <p className="text-blue-100 text-sm leading-relaxed">
                            基于YonBIP构建统一门户管理平台，集成生产与行政核心系统，打造统一待办窗口，实现各业务板块的互联互通。
                        </p>
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
