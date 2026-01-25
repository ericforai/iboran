'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Layers, 
  BarChart3, 
  ShieldCheck, 
  Workflow, 
  Zap,
  ArrowRight,
  Database
} from 'lucide-react';

const Hero = () => {
  const capabilities = [
    { icon: Workflow, text: '研发项目管理' },
    { icon: Layers, text: '委外全流程监控' },
    { icon: BarChart3, text: '精细化批次成本' },
    { icon: Database, text: '主数据品号管理' },
    { icon: ShieldCheck, text: '芯片质量追溯' },
    { icon: Zap, text: 'MRP排程优化' },
  ];

  const metrics = [
    { label: '库存资金占用', value: '-30%~50%' },
    { label: '计划均衡率', value: '+40%~60%' },
    { label: '准时交货率', value: '55%' },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent -z-10" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content (60%) */}
          <div className="flex-[1.5] text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-sm font-medium mb-6">
                <Cpu className="w-4 h-4" />
                <span>芯片研发 (Fabless) 行业解决方案</span>
              </div>
              
              <h2 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                芯片研发行业<span className="text-blue-600">数字化解决方案</span><br />
                穿透委外与全生命周期<br />
                可视化管控
              </h2>
              
              <p className="text-lg lg:text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0">
                针对 Fabless 芯片设计企业量身定制，打通研发创新、委外监控、精细化成本与全链路追溯，助力企业实现从设计到交付的端到端管控。
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <button className="px-8 py-4 bg-[#E60012] text-white rounded-lg font-bold text-lg hover:bg-red-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center">
                  预约行业专家咨询
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="px-8 py-4 border-2 border-[#0052D9] text-[#0052D9] rounded-lg font-bold text-lg hover:bg-blue-50 transition-all">
                  查看技术白皮书
                </button>
              </div>
            </motion.div>
          </div>
          
          {/* Right Visuals (40%) */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative bg-white p-8 rounded-3xl shadow-2xl border border-slate-100"
            >
              {/* Central Icon */}
              <div className="absolute -top-12 -left-12 w-24 h-24 bg-blue-600 rounded-2xl flex items-center justify-center shadow-xl transform -rotate-12">
                <Cpu className="w-12 h-12 text-white" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-8 ml-12">核心业务数字化底座</h3>
              
              {/* Capability Grid */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                {capabilities.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3 p-3 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 transition-colors group">
                    <item.icon className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-semibold text-slate-700">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Metrics Bar */}
              <div className="grid grid-cols-3 gap-2 border-t border-slate-100 pt-8 mt-4">
                {metrics.map((metric, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-xl font-black text-blue-600">{metric.value}</div>
                    <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">{metric.label}</div>
                  </div>
                ))}
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-red-50 rounded-full blur-2xl opacity-60 -z-10" />
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
