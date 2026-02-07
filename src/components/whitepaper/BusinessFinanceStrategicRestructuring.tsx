/**
 * 业财一体化·业财战略重构 白皮书内容
 * 可直接用于 Payload CMS 的 fullContent 字段
 * 或者作为独立页面组件使用
 */

'use client'

import React from 'react'
import Link from 'next/link'

// 目录数据
const tableOfContents = [
  { id: 'chapter-1', title: '业财一体化的核心逻辑', page: 3 },
  { id: 'chapter-2', title: '传统业财模式的痛点', page: 7 },
  { id: 'chapter-3', title: '业财战略重构三步方法论', page: 13 },
  { id: 'chapter-4', title: '业财重构的技术实现路径', page: 19 },
  { id: 'chapter-5', title: '业财重构的实施保障', page: 25 },
]

// 第一章内容
const Chapter1 = () => (
  <section id="chapter-1" className="scroll-mt-24">
    <div className="flex items-center gap-3 mb-8">
      <span className="flex-shrink-0 w-10 h-10 bg-[#E60012] text-white rounded-lg flex items-center justify-center font-bold text-lg">1</span>
      <h2 className="text-2xl md:text-3xl font-bold text-[#1F2329]">业财一体化的核心逻辑</h2>
    </div>

    <div className="space-y-6 text-[#4B5563] leading-relaxed">
      <p className="text-lg">
        业财一体化，即<b>业务财务一体化</b>，是指通过信息化手段，将企业的业务流程与财务流程进行深度融合，实现数据实时共享、流程协同联动、管理决策支持的全面整合。
      </p>

      <h3 className="text-xl font-bold text-[#1F2329] pt-4">什么是业财一体化？</h3>
      <p>
        业财一体化不仅仅是IT系统的集成，更是管理理念的革新。它要求企业打破传统职能部门之间的信息壁垒，建立以数据为核心的运营体系，使每一笔业务发生时，财务数据同步生成；每一项财务分析，都能追溯到具体业务动因。
      </p>

      <h3 className="text-xl font-bold text-[#1F2329] pt-4">业财一体化的三大核心价值</h3>
      <div className="grid md:grid-cols-3 gap-4 my-6">
        <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-[#0052D9]">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h4 className="font-bold text-[#1F2329] mb-2">提升效率</h4>
          <p className="text-sm">消除手工重复录入，业务单据自动生成财务凭证，处理效率提升80%以上</p>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-100">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 text-green-600">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h4 className="font-bold text-[#1F2329] mb-2">降低风险</h4>
          <p className="text-sm">数据源头统一，减少人为错误，合规性检查内嵌于业务流程，风险可控</p>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl border border-purple-100">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 text-purple-600">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h4 className="font-bold text-[#1F2329] mb-2">赋能决策</h4>
          <p className="text-sm">实时掌握经营状况，多维数据分析支持管理层快速决策，把握市场机遇</p>
        </div>
      </div>

      <h3 className="text-xl font-bold text-[#1F2329] pt-4">业财一体化的演进历程</h3>
      <div className="relative pl-8 border-l-2 border-[#E60012] space-y-6 my-6">
        <div className="relative">
          <div className="absolute -left-10 w-6 h-6 bg-[#E60012] rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
          <h4 className="font-bold text-[#1F2329] mb-1">手工记账时代（1980s-1990s）</h4>
          <p className="text-sm">业务与财务高度分离，依赖纸质单据传递，信息滞后严重</p>
        </div>
        <div className="relative">
          <div className="absolute -left-10 w-6 h-6 bg-[#E60012] rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
          <h4 className="font-bold text-[#1F2329] mb-1">电算化时代（2000s-2010s）</h4>
          <p className="text-sm">财务软件普及，实现会计电算化，但业务系统与财务系统仍独立运行</p>
        </div>
        <div className="relative">
          <div className="absolute -left-10 w-6 h-6 bg-[#E60012] rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
          <h4 className="font-bold text-[#1F2329] mb-1">ERP时代（2010s-至今）</h4>
          <p className="text-sm">企业资源规划系统整合内部流程，业财数据在统一平台流转</p>
        </div>
        <div className="relative">
          <div className="absolute -left-10 w-6 h-6 bg-gradient-to-br from-[#E60012] to-[#0052D9] rounded-full flex items-center justify-center text-white text-xs font-bold">4</div>
          <h4 className="font-bold text-[#1F2329] mb-1">数智化时代（未来方向）</h4>
          <p className="text-sm">AI驱动的智能业财融合，预测性分析、自动化决策、实时经营洞察</p>
        </div>
      </div>
    </div>
  </section>
)

// 第二章内容
const Chapter2 = () => (
  <section id="chapter-2" className="scroll-mt-24">
    <div className="flex items-center gap-3 mb-8">
      <span className="flex-shrink-0 w-10 h-10 bg-[#E60012] text-white rounded-lg flex items-center justify-center font-bold text-lg">2</span>
      <h2 className="text-2xl md:text-3xl font-bold text-[#1F2329]">传统业财模式的痛点</h2>
    </div>

    <div className="space-y-6 text-[#4B5563] leading-relaxed">
      <p className="text-lg">
        尽管业财一体化的概念已提出多年，但许多企业在实际落地过程中仍面临诸多挑战。这些痛点往往根植于历史系统架构、组织架构和管理惯性之中。
      </p>

      <h3 className="text-xl font-bold text-[#1F2329] pt-4">痛点一：数据孤岛，信息难以穿透</h3>
      <div className="bg-red-50 rounded-xl p-6 border-l-4 border-[#E60012] my-4">
        <p className="font-medium text-[#1F2329] mb-2">典型场景</p>
        <p className="text-sm">销售部门使用CRM系统，库存管理使用WMS系统，财务使用ERP系统，三个系统的数据彼此独立，月底财务需要手工对账，耗时长达3-5天。</p>
      </div>
      <p>业务数据分散在异构系统中，缺乏统一的数据标准和交换机制。财务人员无法追溯到业务源头，业务人员也看不到财务影响，形成&quot;两张皮&quot;现象。</p>

      <h3 className="text-xl font-bold text-[#1F2329] pt-4">痛点二：流程割裂，业财协同困难</h3>
      <div className="bg-red-50 rounded-xl p-6 border-l-4 border-[#E60012] my-4">
        <p className="font-medium text-[#1F2329] mb-2">典型场景</p>
        <p className="text-sm">采购流程中，采购订单在供应链系统完成，但发票校验和付款需要财务系统处理，中间需要人工传递单据，容易出现遗漏和错误。</p>
      </div>
      <p>业务流程与财务流程在不同系统中各自运转，缺乏端到端的流程设计和系统支撑，导致协同效率低下。</p>

      <h3 className="text-xl font-bold text-[#1F2329] pt-4">痛点三：时效滞后，决策支持不足</h3>
      <div className="bg-red-50 rounded-xl p-6 border-l-4 border-[#E60012] my-4">
        <p className="font-medium text-[#1F2329] mb-2">典型场景</p>
        <p className="text-sm">管理层想了解当月销售业绩和毛利情况，财务部门需要等到次月结账后才能提供报表，决策时机已经错过。</p>
      </div>
      <p>传统模式下，财务数据以月度为周期进行结账和报告，无法满足现代企业对实时经营数据的需求。</p>

      <h3 className="text-xl font-bold text-[#1F2329] pt-4">痛点四：合规风险，内控挑战严峻</h3>
      <div className="bg-red-50 rounded-xl p-6 border-l-4 border-[#E60012] my-4">
        <p className="font-medium text-[#1F2329] mb-2">典型场景</p>
        <p className="text-sm">费用报销过程中，员工发票的真实性、合规性难以实时校验，存在虚假报销风险，审计发现问题的成本高昂。</p>
      </div>
      <p>缺乏内嵌的合规检查和风险控制机制，依赖人工审核，既效率低下又存在漏洞。</p>

      <h3 className="text-xl font-bold text-[#1F2329] pt-4">痛点五：人才断层，复合型人才稀缺</h3>
      <div className="bg-red-50 rounded-xl p-6 border-l-4 border-[#E60012] my-4">
        <p className="font-medium text-[#1F2329] mb-2">典型场景</p>
        <p className="text-sm">财务人员不懂业务，业务人员不懂财务，双方沟通存在障碍，导致系统需求无法准确传达，项目推进困难。</p>
      </div>
      <p>业财一体化需要既懂财务又懂业务的复合型人才，但这类人才在企业中极为稀缺。</p>

      <div className="bg-slate-50 rounded-xl p-6 my-6">
        <h4 className="font-bold text-[#1F2329] mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-[#E60012]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          业财成熟度自评矩阵
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 font-medium text-[#1F2329]">成熟度级别</th>
                <th className="text-left py-3 font-medium text-[#1F2329]">数据整合</th>
                <th className="text-left py-3 font-medium text-[#1F2329]">流程协同</th>
                <th className="text-left py-3 font-medium text-[#1F2329]">决策支持</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="py-3 font-medium">L1 级别：初始</td>
                <td>高度分离</td>
                <td>手工传递</td>
                <td>事后报告</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-3 font-medium">L2 级别：部门级</td>
                <td>部门内整合</td>
                <td>部门内协同</td>
                <td>部门级报告</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-3 font-medium">L3 级别：企业级</td>
                <td>企业内整合</td>
                <td>端到端流程</td>
                <td>企业级报告</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-3 font-medium">L4 级别：生态级</td>
                <td>生态整合</td>
                <td>跨企业协同</td>
                <td>智能预测</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
)

// 第三章内容
const Chapter3 = () => (
  <section id="chapter-3" className="scroll-mt-24">
    <div className="flex items-center gap-3 mb-8">
      <span className="flex-shrink-0 w-10 h-10 bg-[#E60012] text-white rounded-lg flex items-center justify-center font-bold text-lg">3</span>
      <h2 className="text-2xl md:text-3xl font-bold text-[#1F2329]">业财战略重构三步方法论</h2>
    </div>

    <div className="space-y-6 text-[#4B5563] leading-relaxed">
      <p className="text-lg">
        业财一体化不是一蹴而就的IT项目，而是需要系统性规划的转型工程。基于多年实践，我们总结出&quot;三步走&quot;方法论，帮助企业有序推进业财重构。
      </p>

      <div className="bg-gradient-to-r from-[#E60012] to-[#C4000F] rounded-2xl p-8 text-white my-8">
        <h3 className="text-2xl font-bold mb-6">业财战略重构路线图</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#E60012] font-bold">1</span>
              <h4 className="font-bold text-lg">顶层设计</h4>
            </div>
            <p className="text-sm text-white/90">明确目标，设计架构，规划路径</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#E60012] font-bold">2</span>
              <h4 className="font-bold text-lg">系统落地</h4>
            </div>
            <p className="text-sm text-white/90">分步实施，快速迭代，持续优化</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#E60012] font-bold">3</span>
              <h4 className="font-bold text-lg">运营保障</h4>
            </div>
            <p className="text-sm text-white/90">组织变革，人才培养，持续改进</p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-bold text-[#1F2329] pt-4">第一步：顶层设计——想清楚再动手</h3>
      <p>顶层设计是业财重构成功的关键起点，需要从战略高度明确目标、设计架构、规划路径。</p>

      <div className="space-y-4 my-6">
        <div className="flex gap-4 items-start">
          <div className="flex-shrink-0 w-8 h-8 bg-[#0052D9] rounded-lg flex items-center justify-center text-white font-bold text-sm">1.1</div>
          <div>
            <h4 className="font-bold text-[#1F2329]">明确业财重构目标</h4>
            <p className="text-sm mt-1">是提升效率？降低风险？还是赋能决策？不同目标决定不同路径。</p>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <div className="flex-shrink-0 w-8 h-8 bg-[#0052D9] rounded-lg flex items-center justify-center text-white font-bold text-sm">1.2</div>
          <div>
            <h4 className="font-bold text-[#1F2329]">设计数据架构</h4>
            <p className="text-sm mt-1">统一主数据标准（客户、供应商、物料、组织），定义数据交换规范。</p>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <div className="flex-shrink-0 w-8 h-8 bg-[#0052D9] rounded-lg flex items-center justify-center text-white font-bold text-sm">1.3</div>
          <div>
            <h4 className="font-bold text-[#1F2329]">规划实施路径</h4>
            <p className="text-sm mt-1">确定优先级（先核心后扩展）、节奏（分阶段推进）、资源（预算、团队）。</p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-bold text-[#1F2329] pt-4">第二步：系统落地——小步快跑</h3>
      <p>系统落地遵循&quot;总体规划、分步实施、急用先行、快速见效&quot;的原则。</p>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="border border-slate-200 rounded-xl p-5">
          <h4 className="font-bold text-[#1F2329] mb-3 flex items-center gap-2">
            <span className="w-6 h-6 bg-green-100 text-green-600 rounded flex items-center justify-center text-xs">✓</span>
            推荐做法
          </h4>
          <ul className="text-sm space-y-2 text-slate-600">
            <li>• 选择高价值场景作为突破口</li>
            <li>• 采用敏捷开发，快速迭代</li>
            <li>• 建立原型验证，降低风险</li>
            <li>• 持续收集反馈，优化方案</li>
          </ul>
        </div>
        <div className="border border-slate-200 rounded-xl p-5">
          <h4 className="font-bold text-[#1F2329] mb-3 flex items-center gap-2">
            <span className="w-6 h-6 bg-red-100 text-red-600 rounded flex items-center justify-center text-xs">✗</span>
            避免误区
          </h4>
          <ul className="text-sm space-y-2 text-slate-600">
            <li>• 追求大而全，战线过长</li>
            <li>• 一次性替换所有系统</li>
            <li>• 忽视用户培训和变更管理</li>
            <li>• 缺乏持续优化机制</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-bold text-[#1F2329] pt-4">第三步：运营保障——持续改进</h3>
      <p>系统上线只是开始，持续的运营保障才是价值实现的关键。</p>

      <div className="bg-slate-50 rounded-xl p-6 my-6">
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-bold text-[#1F2329] mb-2">组织保障</h4>
            <p className="text-sm">建立业财一体化推进委员会，明确业务、财务、IT三方职责分工，形成协同机制。</p>
          </div>
          <div>
            <h4 className="font-bold text-[#1F2329] mb-2">人才培养</h4>
            <p className="text-sm">培养懂业务的财务人员、懂财务的业务人员，建立复合型人才梯队。</p>
          </div>
          <div>
            <h4 className="font-bold text-[#1F2329] mb-2">持续优化</h4>
            <p className="text-sm">定期评估系统使用情况，收集用户反馈，持续优化流程和功能。</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

// 第四章内容
const Chapter4 = () => (
  <section id="chapter-4" className="scroll-mt-24">
    <div className="flex items-center gap-3 mb-8">
      <span className="flex-shrink-0 w-10 h-10 bg-[#E60012] text-white rounded-lg flex items-center justify-center font-bold text-lg">4</span>
      <h2 className="text-2xl md:text-3xl font-bold text-[#1F2329]">业财重构的技术实现路径</h2>
    </div>

    <div className="space-y-6 text-[#4B5563] leading-relaxed">
      <p className="text-lg">
        业财一体化的技术实现需要架构思维，既要满足当前业务需求，也要支撑未来发展。以下是成熟的技术实现路径。
      </p>

      <h3 className="text-xl font-bold text-[#1F2329] pt-4">技术架构设计</h3>
      <div className="bg-slate-800 rounded-2xl p-6 text-white my-6 overflow-x-auto">
        <pre className="text-sm font-mono">
{`┌─────────────────────────────────────────────────────────┐
│                    业务应用层                              │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐        │
│  │  销售   │ │  采购   │ │  库存   │ │  生产   │        │
│  └────┬────┘ └────┬────┘ └────┬────┘ └────┬────┘        │
└───────┼──────────┼──────────┼──────────┼─────────────────┘
        │          │          │          │
┌───────┼──────────┼──────────┼──────────┼─────────────────┐
│       ▼          ▼          ▼          ▼                  │
│              业务中台 / API 网关                            │
└───────┼──────────┼──────────┼──────────┼─────────────────┘
        │          │          │          │
┌───────┼──────────┼──────────┼──────────┼─────────────────┐
│       ▼          ▼          ▼          ▼                  │
│              业财一体化引擎                                │
│  ┌─────────────────────────────────────────┐             │
│  │  单据映射  │  流程编排  │  数据转换     │             │
│  └─────────────────────────────────────────┘             │
└───────┼──────────────────────────┼───────────────────────┘
        │                          │
┌───────┼──────────────────────────┼───────────────────────┐
│       ▼                          ▼                       │
│  ┌─────────┐              ┌──────────┐                   │
│  │  ERP    │              │  数据中台 │                   │
│  │  财务   │              │  BI/分析  │                   │
│  └─────────┘              └──────────┘                   │
└─────────────────────────────────────────────────────────┘`}
        </pre>
      </div>

      <h3 className="text-xl font-bold text-[#1F2329] pt-4">核心功能模块</h3>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="border border-slate-200 rounded-xl p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-[#0052D9]">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <h4 className="font-bold text-[#1F2329]">单据映射引擎</h4>
          </div>
          <p className="text-sm text-slate-600">配置业务单据到财务凭证的映射规则，支持多对多、拆分、合并等复杂场景。</p>
        </div>

        <div className="border border-slate-200 rounded-xl p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h4 className="font-bold text-[#1F2329]">流程编排引擎</h4>
          </div>
          <p className="text-sm text-slate-600">可视化配置业务财务协同流程，支持审批、条件分支、并行处理。</p>
        </div>

        <div className="border border-slate-200 rounded-xl p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
              </svg>
            </div>
            <h4 className="font-bold text-[#1F2329]">数据同步中心</h4>
          </div>
          <p className="text-sm text-slate-600">实时/定时同步业务数据到财务系统，以保障数据一致性和时效性。</p>
        </div>

        <div className="border border-slate-200 rounded-xl p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h4 className="font-bold text-[#1F2329]">对账清算引擎</h4>
          </div>
          <p className="text-sm text-slate-600">自动对账业务与财务数据，发现并标记差异，支持差异处理流程。</p>
        </div>
      </div>

      <h3 className="text-xl font-bold text-[#1F2329] pt-4">关键技术选型</h3>
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="text-left py-3 px-4 font-medium text-[#1F2329] rounded-tl-lg">技术领域</th>
              <th className="text-left py-3 px-4 font-medium text-[#1F2329]">推荐方案</th>
              <th className="text-left py-3 px-4 font-medium text-[#1F2329] rounded-tr-lg">说明</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr>
              <td className="py-3 px-4">业务系统</td>
              <td className="py-3 px-4">用友 YonSuite / YonBIP</td>
              <td className="py-3 px-4">成熟的云原生ERP，支持业财一体化</td>
            </tr>
            <tr>
              <td className="py-3 px-4">数据中台</td>
              <td className="py-3 px-4">用友 iPaaS / 自研</td>
              <td className="py-3 px-4">统一数据服务，支持实时和批量集成</td>
            </tr>
            <tr>
              <td className="py-3 px-4">分析平台</td>
              <td className="py-3 px-4">用友 BI / Power BI</td>
              <td className="py-3 px-4">可视化报表，支持多维分析</td>
            </tr>
            <tr>
              <td className="py-3 px-4">移动端</td>
              <td className="py-3 px-4">用友移动 / 微信小程序</td>
              <td className="py-3 px-4">随时随地访问，提升用户体验</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
)

// 第五章内容
const Chapter5 = () => (
  <section id="chapter-5" className="scroll-mt-24">
    <div className="flex items-center gap-3 mb-8">
      <span className="flex-shrink-0 w-10 h-10 bg-[#E60012] text-white rounded-lg flex items-center justify-center font-bold text-lg">5</span>
      <h2 className="text-2xl md:text-3xl font-bold text-[#1F2329]">业财重构的实施保障</h2>
    </div>

    <div className="space-y-6 text-[#4B5563] leading-relaxed">
      <p className="text-lg">
        业财一体化建设是一项复杂的系统工程，成功与否不仅取决于技术实现，更取决于组织保障、变革管理和风险控制。
      </p>

      <h3 className="text-xl font-bold text-[#1F2329] pt-4">组织保障：建立跨部门协同机制</h3>
      <p>业财一体化需要业务、财务、IT三方深度协作，必须建立有效的组织保障机制。</p>

      <div className="bg-gradient-to-r from-blue-50 to-white rounded-xl p-6 my-6 border border-blue-100">
        <h4 className="font-bold text-[#1F2329] mb-4">业财一体化推进委员会架构</h4>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#E60012] rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h5 className="font-bold text-[#1F2329]">指导委员会</h5>
            <p className="text-xs text-slate-500 mt-1">高层领导，决策审批</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#0052D9] rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h5 className="font-bold text-[#1F2329]">项目办公室</h5>
            <p className="text-xs text-slate-500 mt-1">PMO，统筹协调</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h5 className="font-bold text-[#1F2329]">执行小组</h5>
            <p className="text-xs text-slate-500 mt-1">业务/财务/IT联合</p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-bold text-[#1F2329] pt-4">变革管理：减少阻力，提升接受度</h3>
      <p>系统上线往往面临用户阻力，需要有效的变革管理策略。</p>

      <div className="space-y-4 my-6">
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-[#0052D9] text-white rounded-lg flex items-center justify-center font-bold">1</div>
          <div className="flex-1">
            <h4 className="font-bold text-[#1F2329]">提前沟通，建立共识</h4>
            <p className="text-sm text-slate-600 mt-1">在项目启动前充分沟通变革必要性和预期收益，让关键用户参与方案设计。</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-[#0052D9] text-white rounded-lg flex items-center justify-center font-bold">2</div>
          <div className="flex-1">
            <h4 className="font-bold text-[#1F2329]">充分培训，提升能力</h4>
            <p className="text-sm text-slate-600 mt-1">分角色开展系统培训，提供操作手册和视频教程，建立帮助支持机制。</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-[#0052D9] text-white rounded-lg flex items-center justify-center font-bold">3</div>
          <div className="flex-1">
            <h4 className="font-bold text-[#1F2329]">快速见效，建立信心</h4>
            <p className="text-sm text-slate-600 mt-1">优先实施高价值场景，让用户快速体验变革价值，建立正向反馈循环。</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-[#0052D9] text-white rounded-lg flex items-center justify-center font-bold">4</div>
          <div className="flex-1">
            <h4 className="font-bold text-[#1F2329]">激励机制，鼓励参与</h4>
            <p className="text-sm text-slate-600 mt-1">对积极参与变革、提出改进建议的用户给予表彰和奖励。</p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-bold text-[#1F2329] pt-4">风险控制：识别风险，制定预案</h3>
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="text-left py-3 px-4 font-medium text-[#1F2329]">风险类型</th>
              <th className="text-left py-3 px-4 font-medium text-[#1F2329]">风险描述</th>
              <th className="text-left py-3 px-4 font-medium text-[#1F2329]">应对措施</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr>
              <td className="py-3 px-4">数据风险</td>
              <td className="py-3 px-4">数据迁移、清洗、校验</td>
              <td className="py-3 px-4">建立数据治理机制，多轮验证</td>
            </tr>
            <tr>
              <td className="py-3 px-4">系统风险</td>
              <td className="py-3 px-4">系统稳定性、性能</td>
              <td className="py-3 px-4">充分测试，灰度上线</td>
            </tr>
            <tr>
              <td className="py-3 px-4">业务风险</td>
              <td className="py-3 px-4">业务中断、错误</td>
              <td className="py-3 px-4">制定应急预案，保留并行期</td>
            </tr>
            <tr>
              <td className="py-3 px-4">人员风险</td>
              <td className="py-3 px-4">关键人员流失、抵制</td>
              <td className="py-3 px-4">知识转移，建立备份机制</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-xl p-6 my-6">
        <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          成功关键要素
        </h4>
        <p className="text-sm text-green-700">业财一体化的成功，60%取决于组织与变革管理，30%取决于流程优化，只有10%取决于技术实现。切记：技术是手段，业务价值才是目标。</p>
      </div>
    </div>
  </section>
)

// 主组件
export const BusinessFinanceStrategicRestructuring = () => {
  return (
    <div className="bg-white">
      {/* 封面区域 */}
      <section className="bg-gradient-to-br from-[#1F2329] via-[#2d3440] to-[#1F2329] text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-[#E60012] rounded-full text-sm font-medium mb-6">
              泊冉软件 · 白皮书
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              业财一体化·业财战略重构
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8">
              从数据孤岛到价值创造的转型路径
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                阅读时长 15 分钟
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                约 8000 字
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                发布于 2025年1月
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 目录区域 */}
      <section className="py-16 bg-[#F7F8FA] border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1F2329] mb-8 text-center">目录</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {tableOfContents.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-lg transition-shadow group"
                >
                  <span className="flex-shrink-0 w-10 h-10 bg-slate-100 group-hover:bg-[#E60012] group-hover:text-white rounded-lg flex items-center justify-center font-bold text-slate-600 transition-colors">
                    {item.id.split('-')[1]}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-medium text-[#1F2329] group-hover:text-[#E60012] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 正文区域 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Chapter1 />
            <div className="my-16 border-t border-slate-200" />
            <Chapter2 />
            <div className="my-16 border-t border-slate-200" />
            <Chapter3 />
            <div className="my-16 border-t border-slate-200" />
            <Chapter4 />
            <div className="my-16 border-t border-slate-200" />
            <Chapter5 />
          </div>
        </div>
      </section>

      {/* CTA 区域 */}
      <section className="py-16 bg-gradient-to-r from-[#E60012] to-[#C4000F]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">需要业财一体化实施服务？</h2>
            <p className="text-xl text-white/90 mb-8">
              泊冉软件是用友官方实施服务商，拥有12+年业财一体化落地经验
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-[#E60012] font-bold rounded-xl hover:bg-slate-100 transition-colors"
              >
                联系咨询专家
              </Link>
              <Link
                href="/cases"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors"
              >
                查看成功案例
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 版权信息 */}
      <div className="py-8 text-center text-slate-400 text-sm border-t border-slate-200">
        © 2025 泊冉软件. All rights reserved. | 本白皮书内容受版权保护
      </div>
    </div>
  )
}

export default BusinessFinanceStrategicRestructuring
