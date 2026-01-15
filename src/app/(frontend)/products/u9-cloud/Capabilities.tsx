import React from 'react'
import { Globe, Share2, Layers, Factory, Ruler, Briefcase, Zap, Cpu, Settings } from 'lucide-react'

const capabilities = [
  { icon: Globe, title: '经营全球管理', desc: '支持多组织、多语言、多税制，适配全球财务准则与合规要求。' },
  { icon: Share2, title: '网络化协同', desc: '打通产业链上下游，实现委外协同、多地点采购与销售的一体化。' },
  { icon: Ruler, title: '个性化定制', desc: '支持大规模定制模式，从参数化选配到BOM自动生成。' },
  { icon: Layers, title: '设计制造一体', desc: '深度集成PLM，实现设计变更在制造端的毫秒级同步。' },
  { icon: Factory, title: '智能工厂场景', desc: '集成MES与IoT，覆盖智能排产、数字车间到全程质量追溯。' },
  { icon: Briefcase, title: '项目化制造', desc: '针对大中型非标设备，实现项目维度全价值链成本与进度管控。' },
  { icon: Zap, title: '柔性制造引擎', desc: '基于微服务架构，支持按需配置，快速响应业务模型多变。' },
  { icon: Cpu, title: '阿米巴责任核算', desc: '通过多账簿技术，落地精细化阿米巴经营，实时核算各损益单元。' },
  { icon: Settings, title: '低代码平台支撑', desc: '内置YonBuilder低代码，支持企业根据特定场景进行业务敏捷开发。' },
]

export const Capabilities = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">九大核心数智能力</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            U9 cloud 不止于ERP，更是一个支撑离散制造全场景创新的数智平台。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, idx) => (
            <div key={idx} className="p-8 rounded-3xl border border-gray-100 hover:shadow-2xl transition-all group bg-white">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <cap.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{cap.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {cap.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
