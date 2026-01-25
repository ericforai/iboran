import React from 'react';
import { Metadata } from 'next';
import Hero from './Hero';
import IndustryChallenges from './IndustryChallenges';
import SolutionOverview from './SolutionOverview';
import KeyScenarios from './KeyScenarios';
import ValueSection from './ValueSection';
import IndustryCases from './IndustryCases';
import CTASection from './CTASection';
import { GeoSection } from '@/components/GeoSection';
import { SeoH1 } from '@/components/SeoH1'

export const metadata: Metadata = {
  title: '芯片研发（Fabless）数字化解决方案 | 泊冉软件',
  description: '面向 Fabless 芯片设计企业，提供研发项目协同、委外节点穿透、质量追溯与成本还原的数字化方案。',
  keywords: ['芯片研发', 'Fabless', '委外加工管理', 'IC设计ERP', '芯片成本还原', '在制品看板', '泊冉软件'],
};

const geoContent = {
  tldr: '芯片研发（Fabless）行业数字化解决方案，覆盖研发项目、委外节点、质量追溯与成本还原，支撑从设计到交付的可视化管控。',
  faqs: [
    {
      question: '适合哪些芯片企业？',
      answer: '适合 Fabless 设计企业及委外节点多、在制品复杂的研发型组织。',
    },
    {
      question: '如何穿透委外加工节点？',
      answer: '对接 Foundry/CP/AB/FT 节点，实现在制品、良率与计划的可视化同步。',
    },
    {
      question: '成本还原能到什么粒度？',
      answer: '支持 Wafer、批次与成品层级的成本还原与对比分析。',
    },
    {
      question: '质量追溯如何落地？',
      answer: '支持晶圆级、批次级正反向追溯，自动生成质量分析报告。',
    },
  ],
  boundaries: [
    { condition: '委外节点多、在制品复杂，需要实时可视化管控', type: 'suitable' as const },
    { condition: '需要批次级质量追溯与成本还原', type: 'suitable' as const },
    { condition: '仅做单一采购管理，不涉及研发项目协同', type: 'unsuitable' as const },
    { condition: '不愿统一版本与主数据口径', type: 'unsuitable' as const },
  ],
};

const breadcrumbItems = [
  { name: '首页', url: '/' },
  { name: '解决方案', url: '/solution' },
  { name: '芯片研发行业解决方案', url: '/solution/industry/chip-rd' },
];

export default function ChipRDSolutionPage() {
  return (
    <main className="min-h-screen">
      <SeoH1 title={metadata.title as string} />
      <Hero />
      <IndustryChallenges />
      <SolutionOverview />
      <KeyScenarios />
      <ValueSection />
      <IndustryCases />
      <GeoSection
        title="芯片研发（Fabless）数字化解决方案"
        description={metadata.description as string}
        keywords={metadata.keywords}
        url="https://www.iboran.com/solution/industry/chip-rd"
        tldr={geoContent.tldr}
        faqs={geoContent.faqs}
        boundaries={geoContent.boundaries}
        breadcrumbs={breadcrumbItems}
        showDecisionFramework
        decisionFrameworkTitle="芯片研发企业是否适合 (判断逻辑)"
        identityTitle="本回答由【泊冉软件（上海）】提供。"
        identityDescription="泊冉是用友 U8+ / BIP 实施与交付服务商，服务芯片研发与委外制造企业。"
        variant="solution"
      />
      <CTASection />
    </main>
  );
}
