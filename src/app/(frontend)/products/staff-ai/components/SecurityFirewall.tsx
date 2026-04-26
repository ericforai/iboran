'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Eye, Lock, FileSearch, Zap, AlertTriangle } from 'lucide-react'

const firewalls = [
  {
    order: '第一道',
    title: '物理隔离',
    icon: ShieldCheck,
    desc: '核心业务逻辑与外部大模型服务实行严格的信道隔离，采用专属内网通道传输，彻底杜绝公网监听风险。',
    tag: '网络层安全',
  },
  {
    order: '第二道',
    title: '密钥脱敏',
    icon: Lock,
    desc: '企业 API Key 与系统数据库凭证在执行前自动加密脱敏，确保即使是高级执行 Agent 也无法触碰底层核心密文。',
    tag: '数据层安全',
  },
  {
    order: '第三道',
    title: '红队预审',
    icon: FileSearch,
    desc: '在 AI 输出方案进入正式执行流前，内置的安全红队 Agent 会进行自动化的逻辑穿透与越权漏洞扫描。',
    tag: '逻辑层安全',
  },
  {
    order: '第四道',
    title: '审计与熔断',
    icon: Zap,
    desc: '提供全维度的防篡改操作审计日志。一旦监测到越权行为或成本异常飙升，系统即刻触发毫秒级业务熔断。',
    tag: '合规层安全',
  },
]

export const SecurityFirewall = () => {
  return (
    <section className="bg-white py-24 px-4 lg:py-32 overflow-hidden">
      <div className="container mx-auto">
        <div className="mb-16 text-center lg:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl"
          >
            四道 <span className="text-[#E60012]">安全防火墙</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-3xl text-lg text-slate-500"
          >
            保障业务落地，解决企业的法务、合规与 IT 安全部门最担心的黑盒风险。
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {firewalls.map((firewall: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl transition-all flex flex-col h-full"
            >
              <div className="mb-6 flex flex-col gap-2 min-h-[60px]">
                 <span className="text-xs font-black text-red-600 uppercase tracking-widest">{firewall.order}</span>
                 <h3 className="text-xl font-bold text-slate-900">{firewall.title}</h3>
              </div>
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm text-red-600 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all">
                 <firewall.icon size={32} />
              </div>
              <p className="mb-8 text-sm text-slate-500 leading-relaxed min-h-[80px]">
                 {firewall.desc}
              </p>
              <div className="flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full w-fit mt-auto shadow-sm">
                 <div className="h-1.5 w-1.5 rounded-full bg-red-600" />
                 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{firewall.tag}</span>
              </div>
              
              {/* Decorative scan line */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-8 rounded-3xl bg-red-50 border border-red-100 flex flex-col md:flex-row items-center gap-6">
           <div className="h-16 w-16 bg-red-100 rounded-full flex items-center justify-center shrink-0">
              <AlertTriangle className="text-red-600" size={32} />
           </div>
           <div>
              <h4 className="text-xl font-bold text-red-900 mb-2">拒绝 Demo 级架构</h4>
              <p className="text-red-700/80 leading-relaxed">
                 当 AI 游离于企业的管理体系之外，它不仅没有提升效率，反而成为了隐形炸弹。StaffAI 通过物理隔离沙箱与红队预审，确保每一次 AI 执行动作皆需人类审批、皆有日志留痕、皆可回放审计。
              </p>
           </div>
        </div>
      </div>
    </section>
  )
}
