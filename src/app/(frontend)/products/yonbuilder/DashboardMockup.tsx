'use client'

import { motion } from 'framer-motion'
import {
  Layout,
  MousePointer2,
  Settings,
  Database,
  Code,
  Smartphone,
  Monitor,
  Play,
  Share2,
  Plus,
  Box,
  Type,
  Image as ImageIcon,
  Columns,
  List,
  Calendar,
  Save,
  ChevronLeft
} from 'lucide-react'
import { useState, useEffect } from 'react'

export const DashboardMockup = () => {
  const [activeElement, setActiveElement] = useState<string | null>(null)
  const showPropertyPanel = true
  
  // Auto-select an element to show activity
  useEffect(() => {
    const timer = setTimeout(() => setActiveElement('form-card'), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-full h-full bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col font-sans select-none">
      {/* Top Bar */}
      <div className="h-14 border-b border-slate-200 flex items-center justify-between px-4 bg-white z-20">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-slate-500 hover:text-slate-800 cursor-pointer">
            <ChevronLeft className="w-4 h-4" />
            <span className="text-sm font-medium">返回应用列表</span>
          </div>
          <div className="h-6 w-px bg-slate-200"></div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-50 rounded flex items-center justify-center text-[#E60012]">
              <Layout className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-800">YonBuilder 可视化构建</div>
              <div className="text-[10px] text-slate-400">正在编辑: 资产管理系统 V2.0</div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-lg">
          <button className="p-1.5 bg-white shadow-sm rounded text-slate-700">
            <Monitor className="w-4 h-4" />
          </button>
          <button className="p-1.5 hover:bg-white/50 rounded text-slate-500 hover:text-slate-700">
            <Smartphone className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50 rounded-md border border-slate-200">
            <Save className="w-3.5 h-3.5" />
            保存
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-white bg-[#0052D9] hover:bg-blue-700 rounded-md shadow-sm shadow-blue-200">
            <Play className="w-3.5 h-3.5" />
            预览发布
          </button>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Left Toolbar */}
        <div className="w-16 border-r border-slate-200 bg-slate-50 flex flex-col items-center py-4 gap-4 z-10">
          {[
            { icon: Layout, label: '页面', active: true },
            { icon: Database, label: '数据' },
            { icon: Code, label: '逻辑' },
            { icon: Settings, label: '设置' },
          ].map((item, i) => (
            <div
              key={i}
              className={`flex flex-col items-center gap-1 p-2 rounded-lg cursor-pointer transition-colors ${
                item.active
                  ? 'bg-white text-[#E60012] shadow-sm'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Component Palette */}
        <div className="w-36 border-r border-slate-200 bg-white flex flex-col z-10 hidden 2xl:flex">
          <div className="p-4 border-b border-slate-100">
            <div className="text-sm font-bold text-slate-800 mb-1">组件库</div>
            <div className="relative">
              <input
                type="text"
                placeholder="搜索组件..."
                className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:border-blue-400"
              />
              <MousePointer2 className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2" />
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-3 space-y-6">
            {[
              { title: '布局容器', items: [{ icon: Columns, label: '分栏布局' }, { icon: Box, label: '卡片容器' }] },
              { title: '基础组件', items: [{ icon: Type, label: '文本标题' }, { icon: ImageIcon, label: '图片展示' }, { icon: Plus, label: '操作按钮' }] },
              { title: '表单组件', items: [{ icon: List, label: '下拉选择' }, { icon: Calendar, label: '日期时间' }] },
            ].map((group, i) => (
              <div key={i}>
                <div className="text-xs font-semibold text-slate-400 mb-2 px-1">{group.title}</div>
                <div className="grid grid-cols-2 gap-1.5">
                  {group.items.map((item, j) => (
                    <motion.div
                      whileHover={{ scale: 1.02, backgroundColor: '#F8FAFC', borderColor: '#CBD5E1' }}
                      whileTap={{ scale: 0.98 }}
                      key={j}
                      className="flex flex-col items-center justify-center p-3 border border-slate-100 rounded-lg cursor-grab active:cursor-grabbing bg-white text-slate-600 shadow-sm hover:shadow"
                    >
                      <item.icon className="w-5 h-5 mb-1.5 text-slate-500" />
                      <span className="text-[10px]">{item.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Canvas Area */}
        <div className="flex-1 bg-slate-50 relative overflow-hidden flex items-center justify-center p-2">
          <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(#94A3B8 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full bg-white h-full rounded-lg shadow-sm border border-slate-200 flex flex-col relative"
          >
            {/* Canvas Header */}
            <div className="h-12 border-b border-slate-100 flex items-center px-6 justify-between">
              <div className="text-sm font-bold text-slate-800">资产入库单</div>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
            </div>

            {/* Canvas Content */}
            <div className="p-3 space-y-3">
              <div 
                className={`p-3 border-2 border-dashed rounded-lg transition-all cursor-pointer group ${
                  activeElement === 'header' ? 'border-[#0052D9] bg-blue-50/10' : 'border-transparent hover:border-slate-300'
                }`}
                onClick={() => setActiveElement('header')}
              >
                <div className="flex items-center justify-between mb-2 gap-2">
                  <h2 className="text-xl font-bold text-slate-800 whitespace-nowrap">固定资产入库申请</h2>
                  <div className="px-2 py-0.5 bg-green-50 text-green-600 text-[10px] rounded-full font-medium border border-green-100 whitespace-nowrap">草稿状态</div>
                </div>
                <div className="flex gap-6 text-[10px] text-slate-500">
                  <span>单据编号: ZCRK-20240321-001</span>
                  <span>申请日期: 2024-03-21</span>
                </div>
              </div>

              <motion.div 
                layoutId="active-form-card"
                className={`grid grid-cols-1 gap-3 p-4 rounded-xl border-2 transition-all cursor-pointer relative ${
                  activeElement === 'form-card' 
                    ? 'border-[#0052D9] shadow-lg shadow-blue-50 bg-white ring-4 ring-blue-50/50' 
                    : 'border-slate-100 hover:border-slate-300 bg-white'
                }`}
                onClick={() => setActiveElement('form-card')}
              >
                {activeElement === 'form-card' && (
                  <div className="absolute -top-3 -right-3 bg-[#0052D9] text-white px-2 py-0.5 text-[10px] rounded-full shadow-md z-10">
                    正在编辑
                  </div>
                )}
                
                  <div className="space-y-1pointer-events-none">
                    <label className="text-[10px] font-medium text-slate-500 whitespace-nowrap">资产名称</label>
                    <div className="h-8 w-full bg-slate-50 border border-slate-200 rounded px-2 flex items-center text-[11px] text-slate-800 whitespace-nowrap overflow-hidden text-ellipsis">
                      高性能图形工作站
                    </div>
                  </div>
                <div className="space-y-1 pointer-events-none">
                  <label className="text-[10px] font-medium text-slate-500 whitespace-nowrap">资产分类</label>
                  <div className="h-8 w-full bg-slate-50 border border-slate-200 rounded px-2 flex items-center justify-between text-[11px] text-slate-800 whitespace-nowrap overflow-hidden">
                    <span>电子设备</span>
                    <List className="w-3 h-3 text-slate-400 flex-shrink-0" />
                  </div>
                </div>
                <div className="space-y-1 pointer-events-none">
                  <label className="text-[10px] font-medium text-slate-500 whitespace-nowrap">使用部门</label>
                  <div className="h-8 w-full bg-slate-50 border border-slate-200 rounded px-2 flex items-center justify-between text-[11px] text-slate-800 whitespace-nowrap overflow-hidden">
                    <span>研发中心</span>
                    <Share2 className="w-3 h-3 text-slate-400 flex-shrink-0" />
                  </div>
                </div>
                <div className="space-y-1 pointer-events-none">
                  <label className="text-[10px] font-medium text-slate-500 whitespace-nowrap">预估金额</label>
                  <div className="h-8 w-full bg-slate-50 border border-slate-200 rounded px-2 flex items-center text-[11px] text-slate-800 whitespace-nowrap overflow-hidden">
                    ¥ 24,500.00
                  </div>
                </div>
              </motion.div>

              <div 
                className="p-3 border-2 border-dashed border-slate-200 rounded-xl bg-slate-50 flex flex-col items-center justify-center gap-2 py-8 text-slate-400 transition-colors hover:border-[#0052D9] hover:text-[#0052D9] hover:bg-blue-50/10 cursor-pointer"
                onClick={() => {}}
              >
                <Plus className="w-6 h-6" />
                <span className="text-sm font-medium">拖拽组件到此处</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Property Panel */}
        {showPropertyPanel && (
          <div className="w-40 border-l border-slate-200 bg-white flex flex-col z-10 hidden xl:flex">
            <div className="h-10 border-b border-slate-100 flex items-center px-4 justify-between bg-white">
              <span className="text-xs font-bold text-slate-800">属性配置</span>
              <Settings className="w-3.5 h-3.5 text-slate-400" />
            </div>
            
            <div className="p-4 space-y-6 overflow-y-auto">
              <div>
                <div className="text-[10px] font-bold text-slate-400 uppercase mb-3">基础属性</div>
                <div className="space-y-3">
                  <div className="space-y-1">
                    <label className="text-xs text-slate-600">字段标题</label>
                    <input type="text" defaultValue="资产名称" className="w-full h-8 text-xs px-2 border border-slate-200 rounded bg-slate-50 text-slate-700" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs text-slate-600">占位提示</label>
                    <input type="text" defaultValue="请输入资产名称" className="w-full h-8 text-xs px-2 border border-slate-200 rounded bg-slate-50 text-slate-700" />
                  </div>
                </div>
              </div>

              <div>
                <div className="text-[10px] font-bold text-slate-400 uppercase mb-3">校验规则</div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-600">必填项</span>
                    <div className="w-8 h-4 bg-[#0052D9] rounded-full relative cursor-pointer"><div className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5 shadow-sm"></div></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-600">唯一值校验</span>
                    <div className="w-8 h-4 bg-slate-200 rounded-full relative cursor-pointer"><div className="w-3 h-3 bg-white rounded-full absolute left-0.5 top-0.5 shadow-sm"></div></div>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-[10px] font-bold text-slate-400 uppercase mb-3">样式设置</div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-16 border border-slate-200 rounded bg-slate-50 flex items-center justify-center text-xs text-slate-400 cursor-pointer hover:border-blue-400 hover:text-blue-500">
                    默认
                  </div>
                  <div className="h-16 border border-slate-200 rounded bg-slate-50 flex items-center justify-center text-xs text-slate-400 cursor-pointer hover:border-blue-400 hover:text-blue-500">
                    紧凑
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
