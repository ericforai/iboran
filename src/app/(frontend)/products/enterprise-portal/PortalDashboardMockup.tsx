'use client'

import { motion } from 'framer-motion'
import {
  Layout,
  MessageSquare,
  CheckSquare,
  BarChart,
  Calendar,
  Mail,
  Bell,
  Search,
  User,
  Settings,
  Grid,
  FileText,
  Briefcase,
  Users,
  Layers,
  Cloud
} from 'lucide-react'

export function PortalDashboardMockup() {
  return (
    <div className="w-full h-full bg-slate-50 rounded-xl overflow-hidden shadow-2xl border border-slate-200 flex flex-col font-sans">
      {/* Top Navigation Bar */}
      <div className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-4 shrink-0">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Layout className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-slate-800 hidden sm:block">企业统一门户</span>
          </div>
          <div className="hidden md:flex bg-slate-100 rounded-md px-3 py-1.5 items-center gap-2 w-64">
            <Search className="w-4 h-4 text-slate-400" />
            <span className="text-sm text-slate-400">搜索应用、消息或待办...</span>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="p-2 hover:bg-slate-100 rounded-full cursor-pointer relative">
            <Bell className="w-5 h-5 text-slate-600" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
          </div>
          <div className="p-2 hover:bg-slate-100 rounded-full cursor-pointer">
            <Settings className="w-5 h-5 text-slate-600" />
          </div>
          <div className="flex items-center gap-2 ml-2 pl-2 border-l border-slate-200">
            <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center overflow-hidden">
              <User className="w-5 h-5 text-slate-500" />
            </div>
            <span className="text-sm font-medium text-slate-700 hidden lg:block">管理员</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-hidden flex">
        {/* Sidebar Navigation */}
        <div className="w-16 lg:w-48 bg-slate-900 flex flex-col shrink-0 text-slate-300">
          <div className="flex-1 py-4 space-y-2">
            <div className="px-2 lg:px-4 py-2 bg-blue-600 mx-2 rounded-md text-white flex items-center gap-3 cursor-pointer">
              <Grid className="w-5 h-5 shrink-0" />
              <span className="hidden lg:block text-sm font-medium">工作台</span>
            </div>
            {[
              { icon: MessageSquare, label: '消息中心', count: 12 },
              { icon: CheckSquare, label: '统一待办', count: 5 },
              { icon: Users, label: '通讯录' },
              { icon: Briefcase, label: '应用中心' },
              { icon: FileText, label: '公文管理' },
              { icon: Calendar, label: '日程计划' },
            ].map((item, index) => (
              <div key={index} className="px-2 lg:px-4 py-2 mx-2 hover:bg-slate-800 rounded-md flex items-center gap-3 cursor-pointer group relative">
                <item.icon className="w-5 h-5 shrink-0 group-hover:text-white transition-colors" />
                <span className="hidden lg:block text-sm group-hover:text-white transition-colors">{item.label}</span>
                {item.count && (
                  <span className="absolute right-1 top-1 lg:top-auto lg:right-2 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full min-w-[16px] text-center border border-slate-900">{item.count}</span>
                )}
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-slate-800">
            <div className="flex items-center gap-3 text-slate-400 hover:text-white cursor-pointer ">
               <Layers className="w-5 h-5 shrink-0" />
               <span className="hidden lg:block text-sm">门户配置</span>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 bg-slate-50 p-4 lg:p-6 overflow-y-auto">
          <div className="grid grid-cols-12 gap-4 auto-rows-min">
            
            {/* Quick Access Apps - Row 1 */}
            <div className="col-span-12 lg:col-span-8 bg-white rounded-lg p-4 shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-slate-800">常用应用</h3>
                <span className="text-xs text-blue-600 cursor-pointer hover:underline">编辑</span>
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-4">
                {[
                  { name: 'OA审批', color: 'bg-blue-100 text-blue-600' },
                  { name: 'ERP系统', color: 'bg-orange-100 text-orange-600' },
                  { name: 'CRM', color: 'bg-green-100 text-green-600' },
                  { name: 'HRM', color: 'bg-purple-100 text-purple-600' },
                  { name: 'BI报表', color: 'bg-indigo-100 text-indigo-600' },
                  { name: '企业云盘', color: 'bg-cyan-100 text-cyan-600' },
                  { name: '费控报销', color: 'bg-rose-100 text-rose-600' },
                  { name: '更多...', color: 'bg-slate-100 text-slate-500' },
                ].map((app, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 cursor-pointer group">
                    <div className={`w-10 h-10 ${app.color} rounded-lg flex items-center justify-center transition-transform group-hover:scale-110`}>
                      <BoxIcon i={i} />
                    </div>
                    <span className="text-xs text-slate-600 truncate w-full text-center">{app.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Weather / Date - Row 1 */}
            <div className="col-span-12 lg:col-span-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg p-4 shadow-sm text-white flex flex-col justify-between h-32 lg:h-auto">
              <div>
                <div className="text-2xl font-bold">14:28</div>
                <div className="text-sm opacity-90">2024年3月20日 星期三</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CloudIcon />
                  <span className="text-lg">22°C</span>
                </div>
                <span className="text-sm bg-white/20 px-2 py-0.5 rounded">北京</span>
              </div>
            </div>

            {/* Tasks - Row 2 */}
            <div className="col-span-12 lg:col-span-6 bg-white rounded-lg p-4 shadow-sm border border-slate-100 h-64 flex flex-col">
              <div className="flex items-center justify-between mb-3 shrink-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-slate-800">待办事项</h3>
                  <span className="bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded-full font-bold">5</span>
                </div>
                <span className="text-xs text-slate-500 cursor-pointer hover:text-blue-600">查看全部</span>
              </div>
              <div className="flex-1 overflow-y-auto pr-1 space-y-2">
                {[
                    { title: '采购合同审批 - 20240320-001', source: 'ERP', time: '10:30', urgent: true },
                    { title: '部门费用报销申请 - 李明', source: '费控', time: '09:15', urgent: false },
                    { title: '新员工入职流程 - 张三', source: 'HR', time: '昨天', urgent: false },
                    { title: 'Q1季度预算调整申请', source: '预算', time: '昨天', urgent: true },
                    { title: 'IT设备采购申请', source: '行政', time: '前天', urgent: false },
                ].map((task, i) => (
                    <motion.div 
                        key={i} 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded-md border-b border-slate-50 last:border-0 cursor-pointer"
                    >
                        <div className={`w-1.5 h-1.5 rounded-full ${task.urgent ? 'bg-red-500' : 'bg-green-500'}`}></div>
                        <div className="flex-1 min-w-0">
                            <div className="text-sm text-slate-700 truncate font-medium">{task.title}</div>
                            <div className="flex items-center gap-2 mt-0.5">
                                <span className="text-[10px] bg-slate-100 text-slate-500 px-1.5 rounded">{task.source}</span>
                                <span className="text-[10px] text-slate-400">{task.time}</span>
                            </div>
                        </div>
                        <button className="text-xs text-blue-600 border border-blue-600 px-2 py-0.5 rounded hover:bg-blue-50">处理</button>
                    </motion.div>
                ))}
              </div>
            </div>

            {/* News / Notices - Row 2 */}
            <div className="col-span-12 lg:col-span-6 bg-white rounded-lg p-4 shadow-sm border border-slate-100 h-64 flex flex-col">
               <div className="flex items-center justify-between mb-3 shrink-0">
                <h3 className="font-semibold text-slate-800">通知公告</h3>
                <span className="text-xs text-slate-500 cursor-pointer hover:text-blue-600">更多</span>
              </div>
              <div className="flex-1 space-y-3">
                 {[
                    { title: '关于2024年清明节放假安排的通知', tag: '行政', date: '03-19', top: true },
                    { title: '公司全新一代企业门户正式上线公告', tag: 'IT', date: '03-18', top: true },
                    { title: '关于开展2024年度员工满意度调查的通知', tag: '人资', date: '03-15', top: false },
                    { title: '关于加强网络安全管理的通知', tag: 'IT', date: '03-10', top: false },
                    { title: '3月份员工生日会活动安排', tag: '工会', date: '03-08', top: false },
                 ].map((news, i) => (
                    <div key={i} className="flex items-center justify-between group cursor-pointer">
                        <div className="flex items-center gap-2 min-w-0">
                            {news.top && <span className="text-[10px] bg-red-50 text-red-500 border border-red-100 px-1 rounded transform scale-90 origin-left">置顶</span>}
                            <span className="text-sm text-slate-700 truncate group-hover:text-blue-600 transition-colors">{news.title}</span>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                             <span className="text-[10px] text-slate-400 hidden sm:block">[{news.tag}]</span>
                             <span className="text-xs text-slate-400">{news.date}</span>
                        </div>
                    </div>
                 ))}
              </div>
            </div>

            {/* Data Chart - Row 3 */}
             <div className="col-span-12 bg-white rounded-lg p-4 shadow-sm border border-slate-100 h-48">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-slate-800">经营概览</h3>
                <div className="flex gap-2">
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded cursor-pointer">本月</span>
                    <span className="text-xs text-slate-400 px-2 py-0.5 cursor-pointer">本季</span>
                </div>
              </div>
              <div className="flex items-end justify-between h-32 gap-2 px-2 pb-2">
                 {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 50, 95].map((h, i) => (
                     <div key={i} className="flex-1 flex flex-col justify-end gap-1 group">
                        <div className="w-full bg-slate-100 rounded-t-sm relative overflow-hidden h-24">
                            <motion.div 
                                initial={{ height: 0 }}
                                animate={{ height: `${h}%` }}
                                transition={{ duration: 1, delay: i * 0.05 }}
                                className="absolute bottom-0 w-full bg-blue-500 opacity-80 group-hover:opacity-100 transition-opacity" 
                            />
                        </div>
                        <span className="text-[10px] text-slate-400 text-center">{i + 1}月</span>
                     </div>
                 ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

function BoxIcon({ i }: { i: number }) {
  const icons = [FileText, Layers, Users, Briefcase, BarChart, Cloud, CheckSquare, Grid];
  const Icon = icons[i] || Grid;
  return <Icon className="w-5 h-5 opacity-90" />
}

function CloudIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cloud-sun"><path d="M12 2v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="M20 12h2"/><path d="m19.07 4.93-1.41 1.41"/><path d="M15.947 12.65a4 4 0 0 0-5.925-4.128"/><path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"/></svg>
    )
}
