'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = IndustryChallenges;
var lucide_react_1 = require("lucide-react");
// 挑战数据内置在组件中
var challenges = [
    {
        title: '研发协同与版本管理',
        description: 'IP选用验证复杂，研发经验难以系统化，ECR（工程变更）频繁，导致设计与生产脱节。',
        dataPoint: '研发投入占营收比重高达20%+'
    },
    {
        title: '复杂委外供应链协同',
        description: '高度依赖Foundry与封装厂，制程中拆批、并批频繁，WIP（在制品）透明度底。',
        dataPoint: '生产周期变动率可达30%'
    },
    {
        title: '全生命周期追溯要求',
        description: '需从Wafer到成品实现Lot Tracking、刻号管理及BIN良率分析，合规压力大。',
        dataPoint: '99.9%的批号追溯准确率要求'
    },
    {
        title: '精细化成本与良率核算',
        description: '需核算出每一批、每一个Die的单位成本。由于良率波动，成本结算滞后且不准。',
        dataPoint: '良率波动直接影响毛利5-10%'
    }
];
// 图标映射
var icons = [lucide_react_1.Settings, lucide_react_1.Network, lucide_react_1.Search, lucide_react_1.BarChart3];
function IndustryChallenges(_a) {
    var industryName = _a.industryName;
    return (<section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-[#0052D9] font-semibold tracking-wider uppercase">
            Industry Challenges
          </span>
          <h2 className="text-3xl font-bold text-[#1F2329] mt-2 mb-4">
            {industryName}企业面临的核心挑战
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full"/>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {challenges.map(function (challenge, idx) {
            var Icon = icons[idx];
            return (<div key={idx} className="bg-[#F7F8FA] p-8 rounded-xl border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-[#E60012]"/>
                </div>
                <h3 className="text-lg font-bold text-[#1F2329] mb-3">
                  {challenge.title}
                </h3>
                <p className="text-slate-600 text-sm mb-3 leading-relaxed">
                  {challenge.description}
                </p>
                {challenge.dataPoint && (<p className="text-xs text-[#0052D9] font-medium">
                    📊 {challenge.dataPoint}
                  </p>)}
              </div>);
        })}
        </div>
      </div>
    </section>);
}
