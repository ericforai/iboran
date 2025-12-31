import { Server, Cpu, BarChart3, Settings, Database, Gauge, Monitor, Wrench } from 'lucide-react'

const coreModules = [
  { name: 'MES', fullName: '制造执行系统', desc: '生产执行、在制追踪、品质管理', icon: Server },
  { name: 'EAP', fullName: '设备自动化程序', desc: '信息传输、流程控制、异常捕捉', icon: Cpu },
  { name: 'SPC', fullName: '统计过程控制', desc: '管制图分析、异常检测、品质监控', icon: BarChart3 },
  { name: 'FDC', fullName: '故障检测分类', desc: '机台参数监控、工艺过程控制', icon: Monitor },
  { name: 'YMS', fullName: '良率管理系统', desc: 'BIN统计、良率分析、缺陷追踪', icon: Gauge },
  { name: 'APC', fullName: '高级制程控制', desc: '参数调优、前馈/后馈控制', icon: Settings },
  { name: 'RMS', fullName: '配方管理系统', desc: '配方管理、参数稽核、版本控制', icon: Database },
  { name: 'RTD', fullName: '实时派工系统', desc: '智能排程、实时派工、负载均衡', icon: Wrench },
]

export default function SolutionOverview() {
  return (
    <section className="py-24 bg-[#F7F8FA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-[#0052D9] font-semibold tracking-wider uppercase">
            CIM Architecture
          </span>
          <h2 className="text-3xl font-bold text-[#1F2329] mt-2 mb-4">
            半导体CIM解决方案架构
          </h2>
          <div className="w-16 h-1 bg-[#E60012] mx-auto rounded-full mb-6" />
          <p className="text-slate-600 max-w-3xl mx-auto">
            泊冉软件提供完整的CIM（计算机集成制造）解决方案，覆盖从ERP到设备层的全栈能力，
            助力半导体工厂实现从Auto1到Auto3的全自动化升级。
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            {/* ERP Layer */}
            <div className="bg-[#0052D9] text-white p-4 text-center">
              <div className="text-sm font-medium opacity-80">企业资源层</div>
              <div className="text-lg font-bold">用友 YonBIP</div>
            </div>
            
            {/* MOM Layer */}
            <div className="p-6 border-b border-slate-100">
              <div className="text-center mb-4">
                <span className="inline-block px-3 py-1 bg-blue-50 text-[#0052D9] rounded-full text-sm font-medium">
                  制造运营层 MOM
                </span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {coreModules.map((module, idx) => (
                  <div key={idx} className="bg-[#F7F8FA] rounded-lg p-4 text-center hover:shadow-md transition group">
                    <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                      <module.icon size={20} className="text-[#0052D9]" />
                    </div>
                    <div className="font-bold text-[#1F2329]">{module.name}</div>
                    <div className="text-xs text-slate-500 mt-1">{module.fullName}</div>
                    <div className="text-xs text-slate-400 mt-2 leading-relaxed">{module.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Equipment Layer */}
            <div className="bg-slate-50 p-4 text-center">
              <div className="text-sm font-medium text-slate-500">设备层</div>
              <div className="flex items-center justify-center gap-6 mt-2 flex-wrap">
                <span className="text-sm text-slate-600">AGV</span>
                <span className="text-slate-300">|</span>
                <span className="text-sm text-slate-600">Stocker</span>
                <span className="text-slate-300">|</span>
                <span className="text-sm text-slate-600">RFID</span>
                <span className="text-slate-300">|</span>
                <span className="text-sm text-slate-600">机台设备</span>
                <span className="text-slate-300">|</span>
                <span className="text-sm text-slate-600">传感器</span>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#E60012] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">01</span>
            </div>
            <h3 className="font-bold text-[#1F2329] mb-2">自主研发</h3>
            <p className="text-sm text-slate-600">核心代码100%自主可控，支持国产化部署</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#0052D9] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">02</span>
            </div>
            <h3 className="font-bold text-[#1F2329] mb-2">量产验证</h3>
            <p className="text-sm text-slate-600">12寸FAB线稳定运行，支持月产3万片+</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">03</span>
            </div>
            <h3 className="font-bold text-[#1F2329] mb-2">快速交付</h3>
            <p className="text-sm text-slate-600">模块化架构，系统上线周期缩短40%</p>
          </div>
        </div>
      </div>
    </section>
  )
}
