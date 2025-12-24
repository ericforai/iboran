"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
exports.default = ElectronicICPage;
var Hero_1 = require("./Hero");
var IndustryChallenges_1 = require("./IndustryChallenges");
var SolutionOverview_1 = require("./SolutionOverview");
var KeyScenarios_1 = require("./KeyScenarios");
var IndustryCases_1 = require("./IndustryCases");
var ValueSection_1 = require("./ValueSection");
var CTASection_1 = require("./CTASection");
exports.metadata = {
    title: '芯片半导体/电子IC行业解决方案 - 数字化转型 | 泊冉软件',
    description: '泊冉软件为电子IC行业提供一站式数字化解决方案，针对Fabless、IDM模式提供研发、委外、供应链一体化服务，实现批号追溯与精细化成本管控。',
    keywords: [
        '芯片半导体',
        '电子IC',
        'Fabless',
        '半导体数字化',
        '芯片委外管理',
        '泊冉软件',
        '用友'
    ],
};
function ElectronicICPage() {
    var industryName = '电子IC';
    return (<main className="min-h-screen">
      <Hero_1.default />
      
      <IndustryChallenges_1.default industryName={industryName}/>
      
      <SolutionOverview_1.default />
      
      <KeyScenarios_1.default />
      
      <IndustryCases_1.default />
      
      <ValueSection_1.default />
      
      <CTASection_1.default />
    </main>);
}
