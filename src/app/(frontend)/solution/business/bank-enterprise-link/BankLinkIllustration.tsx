'use client'

import { motion } from 'framer-motion'
import { PieChart, Activity, Globe, ArrowRightLeft, Building2 } from 'lucide-react'

export default function BankLinkIllustration() {
  const nodes = [
    { x: 150, y: 300, label: "ICBC 工商银行", color: "#E60012", targetX: 330, targetY: 350 }, // Left
    { x: 850, y: 300, label: "CMB 招商银行", color: "#E60012", targetX: 670, targetY: 350 }, // Right
    { x: 500, y: 650, label: "BOC 中国银行", color: "#E60012", targetX: 500, targetY: 500 }, // Bottom
    { x: 500, y: 50, label: "Citi 花旗", color: "#0052D9", targetX: 500, targetY: 150 }      // Top
  ]

  return (
    <div className="w-full h-full min-h-[500px] flex items-center justify-center relative">
      <svg
        viewBox="0 0 1000 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-[900px] drop-shadow-2xl"
      >
        <defs>
          <linearGradient id="dashboard-bg" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F8FAFC" />
          </linearGradient>
          <linearGradient id="header-bg" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0052D9" />
            <stop offset="100%" stopColor="#003598" />
          </linearGradient>
          <filter id="card-shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000000" floodOpacity="0.08" />
          </filter>
        </defs>

        {/* 主要 Dashboard 容器 */}
        <motion.g
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* 主面板背景 */}
          <rect x="250" y="150" width="500" height="400" rx="16" fill="url(#dashboard-bg)" stroke="#E2E8F0" strokeWidth="1" filter="url(#card-shadow)" />
          
          {/* 顶部导航栏 */}
          <path d="M250 166 C250 157.163 257.163 150 266 150 H734 C742.837 150 750 157.163 750 166 V 200 H 250 V 166 Z" fill="#FFFFFF" />
          <circle cx="280" cy="175" r="6" fill="#E60012" />
          <rect x="300" y="170" width="80" height="10" rx="2" fill="#E2E8F0" />
          <rect x="250" y="200" width="500" height="1" fill="#E2E8F0" />

          {/* 左侧边栏 - 模拟菜单 */}
          <rect x="250" y="201" width="80" height="349" fill="#F8FAFC" rx="0" />
          <rect x="329" y="201" width="1" height="349" fill="#E2E8F0" />
          {[1, 2, 3, 4, 5].map((i) => (
             <rect key={i} x="270" y={220 + i * 30} width="40" height="6" rx="3" fill={i === 1 ? '#0052D9' : '#CBD5E1'} />
          ))}

          {/* 核心内容区 */}
          
          {/* 1. 资金总览卡片 (Top Left) */}
          <g transform="translate(350, 230)">
            <rect width="180" height="80" rx="8" fill="white" stroke="#E2E8F0" />
            <text x="20" y="30" fontSize="10" fill="#64748B">实时资金池 (CNY)</text>
            <text x="20" y="55" fontSize="20" fontWeight="bold" fill="#1E293B">985,241,000</text>
            <motion.circle 
              cx="160" cy="25" r="4" fill="#10B981"
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </g>

          {/* 2. 收支环形图 (Top Right) */}
          <g transform="translate(550, 230)">
            <rect width="180" height="80" rx="8" fill="white" stroke="#E2E8F0" />
            <circle cx="40" cy="40" r="25" fill="none" stroke="#E2E8F0" strokeWidth="6" />
            <circle cx="40" cy="40" r="25" fill="none" stroke="#0052D9" strokeWidth="6" strokeDasharray="100 157" strokeDashoffset="0" transform="rotate(-90 40 40)" />
            <text x="80" y="35" fontSize="10" fill="#64748B">收支占比</text>
            <text x="80" y="55" fontSize="12" fontWeight="bold" fill="#0052D9">收入 65%</text>
          </g>

          {/* 3. 趋势曲线图 (Bottom) */}
          <g transform="translate(350, 330)">
            <rect width="380" height="180" rx="8" fill="white" stroke="#E2E8F0" />
            <text x="20" y="30" fontSize="12" fontWeight="bold" fill="#1E293B">近30日资金归集趋势</text>
            
            {/* 坐标轴 */}
            <line x1="20" y1="150" x2="360" y2="150" stroke="#E2E8F0" />
            <line x1="20" y1="150" x2="20" y2="50" stroke="#E2E8F0" />
            
            {/* 曲线 - 模拟真实走势 */}
            <path 
                d="M20 120 C50 110, 80 130, 110 90 C140 50, 170 80, 200 70 C230 60, 260 100, 290 80 C320 60, 350 40, 360 40" 
                fill="none" 
                stroke="url(#header-bg)" 
                strokeWidth="3" 
                strokeLinecap="round"
            />
            {/* 阴影填充 */}
            <path 
                d="M20 120 C50 110, 80 130, 110 90 C140 50, 170 80, 200 70 C230 60, 260 100, 290 80 C320 60, 350 40, 360 40 V 150 H 20 Z" 
                fill="#0052D9" 
                fillOpacity="0.05" 
            />
          </g>
        </motion.g>

        {/* 银行连接节点与数据流 */}
        {nodes.map((node, i) => (
          <g key={i}>
             {/* 连接线 */}
             <path 
                d={`M${node.x} ${node.y} L${node.targetX} ${node.targetY}`} 
                stroke={node.color} 
                strokeOpacity="0.15" 
                strokeWidth="2" 
                strokeDasharray="4 4" 
             />
             
             {/* 流动的数据包 */}
             <motion.circle 
                r="4" 
                fill={node.color}
                initial={{ cx: node.x, cy: node.y }}
                animate={{ cx: node.targetX, cy: node.targetY }}
                transition={{ 
                  duration: 1.5 + i * 0.5, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
             />

             {/* 银行卡片 */}
             <g transform={`translate(${node.x - 60}, ${node.y - 30})`}>
                <motion.g
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                >
                    <rect width="120" height="60" rx="8" fill="white" stroke={node.color} strokeWidth="2" filter="url(#card-shadow)" />
                    <text x="60" y="35" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#333">{node.label}</text>
                    <circle cx="10" cy="10" r="3" fill={node.color} fillOpacity="0.2" />
                    <circle cx="110" cy="50" r="6" fill={node.color} fillOpacity="0.1" />
                </motion.g>
             </g>
          </g>
        ))}

        {/* 鼠标指针模拟交互 - 增加临场感 */}
        <g transform="translate(580, 420)">
           <motion.path 
              d="M0 0 L12 12 L7 13 L5 19 L0 0 Z" 
              fill="#000000" 
              stroke="white" 
              strokeWidth="1"
              animate={{ 
                x: [0, 20, 0], 
                y: [0, -10, 0] 
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
           />
        </g>
      </svg>
    </div>
  )
}
