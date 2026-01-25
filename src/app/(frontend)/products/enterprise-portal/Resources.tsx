'use client'

import { motion } from 'framer-motion'
import type { SVGProps } from 'react'
import { Download, FileText, Video } from 'lucide-react'

const resources = [
  {
    type: '白皮书',
    title: '2024年中国企业门户建设白皮书',
    desc: '深度解析数字化转型背景下的新一代门户建设标准与实践路径。',
    icon: FileText,
    action: '下载 PDF'
  },
  {
    type: '视频教程',
    title: '可视化门户配置操作实录',
    desc: '15分钟快速上手，学习如何使用拖拽式设计器搭建个性化首页。',
    icon: Video,
    action: '观看视频'
  },
  {
    type: '行业模版',
    title: '大型集团门户布局模版包',
    desc: '集成制造业、建筑业、能源业等5大行业典型门户布局方案。',
    icon: Download,
    action: '下载资源包'
  },
  {
    type: '开发文档',
    title: '门户二次开发指南 (SDK)',
    desc: '提供磁贴开发规范与 API 接口文档，帮助开发者快速集成异构系统。',
    icon: CodeIcon,
    action: '查看文档'
  }
]

export function Resources() {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              资源中心
            </h2>
            <p className="text-lg text-slate-600">
              获取最新的产品资料与开发指南，加速您的数智化门户建设。
            </p>
          </div>
          <button className="text-blue-600 font-medium hover:text-blue-700 flex items-center gap-2">
            查看更多资源 <ArrowRightIcon />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg hover:border-blue-300 transition-all group cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                  {resource.type}
                </span>
                <resource.icon className="w-5 h-5 text-slate-400 group-hover:text-blue-500 transition-colors" />
              </div>
              
              <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {resource.title}
              </h3>
              
              <p className="text-sm text-slate-500 mb-6 line-clamp-2">
                {resource.desc}
              </p>

              <div className="flex items-center gap-2 text-sm font-medium text-slate-700 group-hover:text-blue-600 transition-colors">
                 <span>{resource.action}</span>
                 <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ArrowRightIcon() {
    return <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
}

function CodeIcon(props: SVGProps<SVGSVGElement>) {
    return <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
}
