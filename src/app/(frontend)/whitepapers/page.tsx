'use client'

import React from 'react'
import { openAifafanChat } from '@/utilities/openAifafanChat'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'

const whitepapers = [
  {
    slug: 'business-finance-strategic-restructuring',
    title: '业财一体化·业财战略重构',
    subtitle: '从数据孤岛到价值创造的转型路径',
    readTime: '15分钟',
    category: '业财一体化',
    description: '全面解析业财一体化战略重构的路径，包含5个章节深度解析、实施路线图、风险控制清单。',
  },
]

export default function WhitepapersPage() {
  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault()
    openAifafanChat()
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#F7F8FA]">
        {/* Hero 区域 */}
        <section className="bg-gradient-to-br from-[#1F2329] via-[#2d3440] to-[#1F2329] text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">白皮书中心</h1>
              <p className="text-xl text-slate-300">
                获取泊冉软件在业财一体化、数字化转型领域的深度洞察与实施指南
              </p>
            </div>
          </div>
        </section>

        {/* 白皮书列表 */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-6">
              {whitepapers.map((wp: any) => (
                <button
                  key={wp.slug}
                  onClick={handleDownload}
                  className="w-full text-left block bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all group"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* 封面缩略图 */}
                    <div className="flex-shrink-0 w-full md:w-48 aspect-[3/4] bg-gradient-to-br from-[#E60012] to-[#C4000F] rounded-xl flex items-center justify-center text-white p-6">
                      <div className="text-center">
                        <div className="text-4xl mb-2">📄</div>
                        <div className="text-sm font-medium">{wp.category}</div>
                      </div>
                    </div>

                    {/* 信息 */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-[#E60012] text-white text-xs font-bold rounded-full">
                          白皮书
                        </span>
                        <span className="text-sm text-slate-500 flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {wp.readTime}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-[#1F2329] group-hover:text-[#E60012] transition-colors mb-2">
                        {wp.title}
                      </h3>
                      <p className="text-slate-600 mb-3">{wp.subtitle}</p>
                      <p className="text-sm text-slate-500">{wp.description}</p>
                      <div className="mt-4 flex items-center text-[#E60012] font-medium">
                        获取白皮书
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* 更多内容提示 */}
            <div className="max-w-5xl mx-auto mt-16 p-8 bg-white rounded-2xl border-2 border-dashed border-slate-200 text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-[#1F2329] mb-2">更多白皮书持续更新中</h3>
              <p className="text-slate-600 mb-6">
                我们将持续发布关于数字化转型、业财一体化、企业治理等主题的深度内容
              </p>
              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#E60012] text-white font-bold rounded-xl hover:bg-red-700 transition-colors"
              >
                咨询获取更多
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
