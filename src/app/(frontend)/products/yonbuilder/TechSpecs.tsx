'use client'

import { Server, Shield, Code, Globe, Database } from 'lucide-react'

export default function TechSpecs() {
  return (
    <section className="py-20 bg-white border-y border-slate-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/3">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              技术规格与<br/>环境支持
            </h2>
            <p className="text-slate-600 mb-8">
              全面兼容主流技术栈，支持多种部署模式，以保障系统安全、稳定、高效运行。
            </p>
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
              <div className="flex items-center gap-3 mb-2">
                <Shield className="w-5 h-5 text-green-600" />
                <h4 className="font-bold text-slate-800">安全合规认证</h4>
              </div>
              <p className="text-xs text-slate-500 mb-4">
                已通过等保三级认证、ISO 27001 信息安全认证、可信云认证。
              </p>
              <div className="flex gap-2">
                {['等保三级', 'ISO27001', '可信云'].map(t => (
                  <span key={t} className="text-[10px] bg-white border border-slate-200 px-2 py-1 rounded text-slate-600">{t}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-[#0052D9]">
                  <Server className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-slate-800">部署环境</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="font-medium text-slate-800 min-w-16">公有云:</span>
                  <span>用友云 (阿里云/华为云底座)</span>
                </li>
                 <li className="flex items-start gap-2">
                  <span className="font-medium text-slate-800 min-w-16">私有云:</span>
                  <span>CentOS 7.6+, RedHat 7+, Ubuntu 18.04+</span>
                </li>
                 <li className="flex items-start gap-2">
                  <span className="font-medium text-slate-800 min-w-16">容器化:</span>
                  <span>Docker 19.03+, Kubernetes 1.18+</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-[#0052D9]">
                  <Database className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-slate-800">数据库支持</h3>
              </div>
               <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="font-medium text-slate-800 min-w-16">关系型:</span>
                  <span>MySQL 5.7/8.0, Oracle 11g/12c/19c, PostgreSQL 10+</span>
                </li>
                 <li className="flex items-start gap-2">
                  <span className="font-medium text-slate-800 min-w-16">信创库:</span>
                  <span>达梦 DM8, 人大金仓 KingbaseES V8, OceanBase</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-[#0052D9]">
                  <Globe className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-slate-800">前端技术栈</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>支持 React / Vue 框架组件扩展</li>
                <li>H5 标准，CSS3, JavaScript (ES6+)</li>
                <li>支持 WebAssembly 高性能计算模块</li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-[#0052D9]">
                  <Code className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-slate-800">开发语言 & API</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>支持 Java, Python, NodeJS 后端扩展</li>
                <li>提供 RESTful API, GraphQL 接口</li>
                <li>支持 Groovy 脚本动态逻辑</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
