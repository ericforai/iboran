import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import { Lexend } from 'next/font/google'
import React, { Suspense } from 'react'
import './globals.css'

import { MobileStickyBar } from '@/components/MobileStickyBar'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
// import { ReactScan } from '@/components/ReactScan'
import { WebVitals } from '@/components/WebVitals'
import { ScrollTriggerDrawer } from '@/components/ScrollTriggerDrawer'
import { ExitIntentModal } from '@/components/ExitIntentModal'
import AIConsultant from '@/components/AIConsultant'
import { AIWidgetConfig } from '@/types/ai'
import { getCachedGlobal } from '@/utilities/getGlobals'
import type { Contact } from '@/payload-types'
import { AttributionProvider } from '@/providers/Attribution'
import { AnalyticsProvider } from '@/providers/Analytics'

const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-lexend',
  display: 'swap',
  preload: false,
})

import { OrganizationJsonLd } from '@/components/OrganizationJsonLd'

// A minimal layout ensuring NO database or Payload code runs on the Home Page
export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const contactData = await getCachedGlobal('contact', 1)() as Contact

  const AI_CONFIG: AIWidgetConfig = {
    theme: 'indigo',
    name: "泊冉在线客服",
    subTitle: "7x24小时在线",
    systemInstruction: `你是一个专业的企业数字化转型顾问，来自泊冉软件。
你的核心知识如下：
1. 泊冉身份：拥有14年数字化转型深耕经验，总部位于上海。
2. 核心优势：拥有 YonBIP 敏捷交付方法论，擅长处理复杂的业财一体化及集团级数字化管控。
3. 擅长行业：半导体、新零售、装备制造、生物医药、消费品和专业服务。
4. 核心产品：用友 YonBIP (大型企业)、YonSuite (成长型企业)、U8C/NCCloud 升级方案。
5. 服务范围：管理咨询、系统实施、定制开发、运维支持。

你的目标是专业、耐心地解答用户的业务挑战，回答应尽可能基于上述泊冉的真实资料。在合适的时候通过“预约专业演示”引导用户咨询泊冉的专业服务。`,
    welcomeTitle: "您好！我是泊冉在线客服",
    welcomeMessage: "泊冉软件深耕数智化转型14年，我来协助您对接方案与顾问服务。您可以直接咨询 **YonBIP**、**智能制造方案** 或 **行业实践案例**。",
    suggestions: [
      { 
        title: "了解泊冉", 
        desc: "关于我们的实力与资质", 
        query: "泊冉软件有哪些核心优势？",
        answer: "泊冉软件拥有14年数字化转型深耕经验。我们专注于为制造、零售、医药等行业提供从业务咨询到系统交付的全生命周期服务。总部位于上海，已助力数百家企业实现数智化升级。"
      },
      { 
        title: "数字化转型建议", 
        desc: "针对您行业的方案说明", 
        query: "智能制造企业如何通过用友系统提升效率？",
        answer: "我们建议企业通过“业务驱动”而非“技术驱动”来开启转型。针对智能制造，我们提供业财一体化、智能工厂及供应链协同方案；针对零售，侧重 D2C 全渠道与中台建设。具体建议需结合您的业务规模与痛点，欢迎预约专家诊断。"
      },
      { 
        title: "联系服务专家", 
        desc: "获取一对一咨询", 
        query: "trigger:open-consult-modal",
        answer: "您可以通过页面底部的“在线咨询”或拨打我们的服务热线直接联系。我们也支持预约资深顾问进行一对一的业务需求诊断。点击输入框上方的“预约专业演示”，我们将尽快为您分配行业专家。"
      }
    ],
    errorMessage: "抱歉，由于网络波动，我暂时无法处理您的请求。请稍后再试。",
    actionButton: {
      label: "预约专业演示",
      command: "trigger:open-demo-modal"
    }
  };

  return (
    <html className={`${GeistSans.variable} ${GeistMono.variable} ${lexend.variable}`} lang="zh-CN" suppressHydrationWarning>
      <head>
        <meta name="baidu-site-verification" content="codeva-JLdkamsCUi" />
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
        <link href="/assets/images/boran-logo-transparent.png" rel="apple-touch-icon" sizes="180x180" />
        <script
          dangerouslySetInnerHTML={{
            __html: `var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?e91dfc82759053f4c922045bf879a7d9";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();`,
          }}
        />
      </head>
      <body suppressHydrationWarning className="antialiased font-sans lg:pb-0 pb-20">
        <OrganizationJsonLd />
        {/* <ReactScan /> */}
        <WebVitals />
        {/* Cinematic Grain Overlay - DISABLED for Performance
        { <div className="fixed inset-0 z-[9999] pointer-events-none bg-cinematic-grain mix-blend-overlay"></div> }
        */}
        <Suspense fallback={<div />}>
          <AnalyticsProvider>
            <AttributionProvider>
              <Navbar contactData={contactData} />
              {children}
              <Footer />
              <MobileStickyBar contactData={contactData} />
              <ScrollTriggerDrawer />
              <ExitIntentModal />
              <AIConsultant config={AI_CONFIG} />
            </AttributionProvider>
          </AnalyticsProvider>
        </Suspense>
      </body>
    </html>
  )
}

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || 'https://www.iboran.com'),
  title: '泊冉软件 - 专业的用友软件实施服务商 | Yonyou Partner',
  description: '泊冉软件是用友合作伙伴，深耕智能制造、新零售及生物医药行业，提供从业务咨询到系统交付的全生命周期数智化转型服务。',
  keywords: '泊冉软件, 用友实施商, YonBIP, YonSuite, 用友合作伙伴, 数智化转型, ERP实施, 业财一体化',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}
