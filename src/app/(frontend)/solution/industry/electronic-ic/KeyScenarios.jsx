'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = KeyScenarios;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var lucide_react_1 = require("lucide-react");
// 场景数据内置在组件中
var scenarios = [
    {
        title: 'Fabless 全程委外协同',
        problem: 'Fabless企业对Foundry/封测厂的WIP状态掌握不及时，回货拆批、并批及良率数据全凭线下Excel，极易出错。',
        solution: '建立委外服务门户，实时对接委外厂商数据，支持在线下达Turnkey指令，自动生成批号继承关系。',
        outcome: 'WIP数据同步频率从"按周"提升至"准实时"。委外结算准确率提升至100%。多级委外节点全程可视。'
    },
    {
        title: '端到端批号/刻号追溯',
        problem: '从Wafer到CP、AS、FT各个阶段，批号、片号、管脚排列等属性众多，任何环节断档都将导致无法溯源。',
        solution: '支持一品多属性管理，自动记录Wafer批号继承CP、AS、FT批号的过程，实现"一码到底"的全程数字化档案。',
        outcome: '异常召回定位耗时从"天级"缩短至"分钟级"。满足最严苛的汽车、军工级合规要求。'
    },
    {
        title: '芯片/晶圆多维度物料管理',
        problem: '同一料号下存在不同的BIN等级、DateCode。由于缺乏辅助属性，往往需要建立海量料号，维护成本极高。',
        solution: '采用"料号+辅助属性"模式，动态管理BIN等级、Wafer等级及存储有效期，智能匹配客户订单规格要求。',
        outcome: '物料编码维护量降低70%。库存周转率提升15%。极大地减少选配出货的差错率。'
    }
];
// 图标映射
var scenarioIcons = [lucide_react_1.Network, lucide_react_1.Search, lucide_react_1.Layers];
function KeyScenarios() {
    var _a = (0, react_1.useState)(0), activeTab = _a[0], setActiveTab = _a[1];
    return (<section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-[#0052D9] font-semibold tracking-wider uppercase">
            Key Scenarios
          </span>
          <h2 className="text-3xl font-bold text-[#1F2329] mt-2 mb-4">
            电子IC核心业务场景
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full"/>
        </div>
        
        {/* Tab 切换 */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {scenarios.map(function (scenario, idx) {
            var Icon = scenarioIcons[idx];
            return (<button key={idx} onClick={function () { return setActiveTab(idx); }} className={"flex items-center gap-2 px-8 py-4 rounded-xl font-bold transition-all ".concat(activeTab === idx
                    ? 'bg-[#0052D9] text-white shadow-xl scale-105'
                    : 'bg-slate-50 text-slate-500 hover:bg-slate-100')}>
                <Icon className={"w-5 h-5 ".concat(activeTab === idx ? 'text-white' : 'text-[#0052D9]')}/>
                {scenario.title}
              </button>);
        })}
        </div>
        
        {/* 场景内容 */}
        <framer_motion_1.AnimatePresence mode="wait">
          <framer_motion_1.motion.div key={activeTab} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* 左侧：内容卡片 */}
            <div className="flex flex-col gap-6">
              <div className="p-8 bg-red-50 rounded-2xl border border-red-100">
                <h4 className="text-md font-bold text-red-600 mb-3 flex items-center gap-2">
                  <span className="text-xl">😣</span> 管理痛点
                </h4>
                <p className="text-slate-700 leading-relaxed font-medium">
                  {scenarios[activeTab].problem}
                </p>
              </div>
              
              <div className="p-8 bg-blue-50 rounded-2xl border border-blue-100 flex-1">
                <h4 className="text-md font-bold text-[#0052D9] mb-3 flex items-center gap-2">
                  <span className="text-xl">💡</span> 解决方案
                </h4>
                <p className="text-slate-700 leading-relaxed">
                  {scenarios[activeTab].solution}
                </p>
              </div>
            </div>
            
            {/* 右侧：效果卡片 */}
            <div className="bg-[#1F2329] p-10 rounded-2xl shadow-2xl flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 -m-8 w-40 h-40 bg-blue-500 rounded-full opacity-10 group-hover:scale-125 transition-transform duration-700"/>
              
              <div className="relative z-10">
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <lucide_react_1.CheckCircle className="w-6 h-6 text-green-400"/>
                  实现价值收益
                </h4>
                <div className="space-y-6">
                  {scenarios[activeTab].outcome.split('。').filter(function (s) { return s; }).map(function (item, i) { return (<div key={i} className="flex gap-4 items-start border-l-2 border-slate-700 pl-6 py-1">
                      <p className="text-slate-300 leading-relaxed">
                        {item}。
                      </p>
                    </div>); })}
                </div>
                
                <div className="mt-12 flex items-center gap-4 text-slate-400">
                  <div className="p-3 bg-slate-800 rounded-lg">
                    <lucide_react_1.Cpu className="w-6 h-6"/>
                  </div>
                  <div className="p-3 bg-slate-800 rounded-lg">
                    <lucide_react_1.Database className="w-6 h-6"/>
                  </div>
                  <div className="p-3 bg-slate-800 rounded-lg">
                    <lucide_react_1.Layers className="w-6 h-6"/>
                  </div>
                </div>
              </div>
            </div>
          </framer_motion_1.motion.div>
        </framer_motion_1.AnimatePresence>
      </div>
    </section>);
}
