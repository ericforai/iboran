'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, ArrowRight, MessageSquare } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#0052D9] rounded-[3rem] p-12 lg:p-24 text-center relative overflow-hidden"
        >
          {/* Background visuals */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2)_0%,transparent_70%)]" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="inline-flex p-4 rounded-3xl bg-white/10 backdrop-blur-md mb-8">
              <Cpu className="w-12 h-12 text-white" />
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-8 leading-tight">
              立即开启芯片研发<br />
              一站式数字化管理新篇章
            </h2>
            
            <p className="text-white/80 text-lg lg:text-xl mb-12 max-w-2xl mx-auto font-medium">
              泊冉软件深耕芯片半导体行业，为多家 Fabless 企业提供深度定制化方案。立即联系我们的行业专家，获取专属您的数字化转型蓝图。
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="px-10 py-5 bg-[#E60012] text-white rounded-2xl font-black text-xl hover:bg-red-700 transition-all shadow-xl hover:shadow-red-500/20 flex items-center justify-center group">
                预约行业专家演示
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="px-10 py-5 bg-white text-[#0052D9] border-2 border-white rounded-2xl font-black text-xl hover:bg-blue-50 transition-all flex items-center justify-center">
                <MessageSquare className="mr-3 w-6 h-6" />
                在线方案咨询
              </button>
            </div>

            <div className="mt-12 flex items-center justify-center space-x-8 text-white/60 font-bold text-sm uppercase tracking-widest">
              <span>已部署客户 50+</span>
              <span className="w-1.5 h-1.5 bg-white/30 rounded-full" />
              <span>上市率 40%</span>
              <span className="w-1.5 h-1.5 bg-white/30 rounded-full" />
              <span>标杆案例 12+</span>
            </div>
          </div>

          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-red-600 rounded-full blur-[100px] opacity-40 animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
