import React from 'react'
import type { Metadata } from 'next'
import { SeoH1 } from '@/components/SeoH1'
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd'
import { ProductJsonLd } from '@/components/ProductJsonLd'
import { 
  Hero, 
  PainPoints, 
  Architecture, 
  Capabilities, 
  MemorySystem, 
  SecurityFirewall, 
  Methodology, 
  TechSpecs, 
  CTASection 
} from './components'

export const metadata: Metadata = {
  title: 'StaffAI Agent OS - 企业级 AI 员工操作系统 | 泊冉科技',
  description: '泊冉科技 StaffAI Agent OS，为企业提供可管理、可审批、可沉淀、可规模化的 AI 员工执行底座。通过双核分离架构、L1/L2/L3 分类记忆与四层安全防火墙，解决企业 AI 落地中的管理、安全与效能痛点。',
  keywords: 'StaffAI, Agent OS, AI员工, 智能体操作系统, 泊冉科技, 用友合作伙伴, 数字化转型, AI落地, HITL, 任务编排',
  alternates: {
    canonical: 'https://www.iboran.com/products/staff-ai',
  },
  openGraph: {
    title: 'StaffAI Agent OS - 企业级 AI 员工操作系统',
    description: '从“试用 AI”到“真正拥有 AI 员工”，打造可规模化的组织级生产力。',
    type: 'website',
    url: 'https://www.iboran.com/products/staff-ai',
  },
}

export default function StaffAIPage() {
  const pageTitle = 'StaffAI Agent OS - 企业级 AI 员工操作系统 | 泊冉科技'
  
  const breadcrumbItems = [
    { name: '首页', url: '/' },
    { name: '核心产品', url: '/products' },
    { name: 'StaffAI Agent OS', url: '/products/staff-ai' },
  ]
  
  return (
    <div className="flex flex-col bg-white">
      {/* 1. SEO Structured Data */}
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <ProductJsonLd 
        name="StaffAI Agent OS"
        description="企业级 AI 员工操作系统，提供全方位 Agent 执行底座与管理能力。"
      />
      
      {/* 2. Hidden SEO H1 */}
      <SeoH1 title={pageTitle} />
      
      <main>
        {/* 1. 沉浸式 Hero */}
        <Hero />
        
        {/* 2. 场景痛点 */}
        <PainPoints />
        
        {/* 3. 解决方案架构 */}
        <Architecture />
        
        {/* 4. 深度功能 */}
        <Capabilities />
        
        {/* 5. 分层记忆体系 */}
        <MemorySystem />
        
        {/* 6. 技术规格与生产级架构 */}
        <TechSpecs />
        
        {/* 7. 安全防火墙 */}
        <SecurityFirewall />
        
        {/* 8. 交付方法论 */}
        <Methodology />
        
        {/* 11. FAQ */}
        <CTASection />
      </main>
    </div>
  )
}
