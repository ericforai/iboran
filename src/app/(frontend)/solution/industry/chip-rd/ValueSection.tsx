'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingDown, 
  BarChart, 
  Clock, 
  ShoppingCart,
  Zap
} from 'lucide-react';

const ValueSection = () => {
  const values = [
    {
      title: '集成化流程主导',
      desc: '从职能导向转为流程导向，解决部门墙，集成销售、研发、供应、财务全量数据。',
      icon: Zap,
    },
    {
      title: '极致市场响应',
      desc: '缩短制造周期，精准预测需求，减少由于芯片短缺、库存过高带来的经营风险。',
      icon: Clock,
    },
    {
      title: '精益化价值链',
      desc: '全过程管控良率与非良品，实现“准时化供货”，提升供应链核心竞争力。',
      icon: BarChart,
    },
  ];

  const metrics = [
    { label: '库存资金占用减少', value: '30-50%', icon: TrendingDown },
    { label: '计划均衡率提高', value: '40-60%', icon: Zap },
    { label: '准时交货率提升', value: '55%', icon: Clock },
    { label: '采购成本降低', value: '20-50%', icon: ShoppingCart },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6 font-primary">
              方案价值分析：提升企业核心竞争力
            </h2>
            <div className="w-20 h-1 bg-red-600 mx-auto rounded-full" />
          </motion.div>
        </div>

        {/* Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {values.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-shadow group"
            >
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform shadow-lg">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Metrics Grid */}
        <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="relative text-center mb-16">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">经济效益与战略收益预期</h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              基于数智化底座，实现全价值链穿透，为企业带来显著的量化收益。
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 relative">
            {metrics.map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex p-3 rounded-full bg-blue-600/20 text-blue-400 mb-4 border border-blue-600/30">
                  <metric.icon className="w-6 h-6" />
                </div>
                <div className="text-3xl lg:text-5xl font-black text-white mb-2 leading-none">
                  {metric.value}
                </div>
                <div className="text-xs lg:text-sm font-bold text-slate-500 uppercase tracking-widest">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ValueSection;
