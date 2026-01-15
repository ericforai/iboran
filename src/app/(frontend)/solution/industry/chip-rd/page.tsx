import React from 'react';
import { Metadata } from 'next';
import Hero from './Hero';
import IndustryChallenges from './IndustryChallenges';
import SolutionOverview from './SolutionOverview';
import KeyScenarios from './KeyScenarios';
import ValueSection from './ValueSection';
import IndustryCases from './IndustryCases';
import CTASection from './CTASection';

export const metadata: Metadata = {
  title: '芯片研发行业解决方案 - 数字化转型 | 泊冉软件',
  description: '泊冉软件为芯片研发 (Fabless) 企业提供一站式数字化解决方案，涵盖研发项目协同、穿透式委外监控、精细化芯片成本还原及全流程质量追溯。',
  keywords: ['芯片研发', 'Fabless', '委外加工管理', 'IC设计ERP', '芯片成本还原', '在制品看板', '泊冉软件'],
};

export default function ChipRDSolutionPage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <IndustryChallenges />
      <SolutionOverview />
      <KeyScenarios />
      <ValueSection />
      <IndustryCases />
      <CTASection />
    </main>
  );
}
