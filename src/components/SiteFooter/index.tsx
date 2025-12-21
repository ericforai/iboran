import React from 'react'
import Link from 'next/link'

export const SiteFooter = () => {
    return (
        <footer className="bg-[#F7F8FA] border-t border-slate-200 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-12">
                    {/* Left Side: Logo & Info */}
                    <div className="max-w-sm flex-shrink-0">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="text-2xl font-bold text-[#1F2329]">泊冉软件</div>
                            <span className="text-xs bg-[#E60012] text-white px-1.5 py-0.5 rounded">铂金伙伴</span>
                        </div>
                        <div className="space-y-3 text-slate-500 text-sm">
                            <p>上海泊冉软件有限公司</p>
                            <p>上海市普陀区曹杨路1888号星光耀广场1号楼1005室</p>
                            <p className="font-semibold text-[#1F2329] pt-2 text-lg">售前热线 400-9955-161</p>
                        </div>
                    </div>

                    {/* Right Side: Menu Links - Flexbox for tight packing to the right */}
                    <div className="w-full lg:w-auto lg:flex-1 flex flex-wrap lg:justify-end gap-x-12 gap-y-8">
                        {[
                            { title: '产品', links: ['U8 Cloud', 'YonSuite', '人力云', '供应链云'] },
                            { title: '解决方案', links: ['智能财务', '智能制造', '新零售', '项目管理'] },
                            { title: '服务', links: ['实施交付', '二次开发', '运维支持', '客户培训'] },
                            { title: '关于', links: ['公司简介', '新闻动态', '加入我们', '联系我们'] },
                        ].map((col, i) => (
                            <div key={i} className="text-left lg:text-right min-w-[100px]">
                                <h4 className="font-bold text-[#1F2329] mb-4">{col.title}</h4>
                                <ul className="space-y-2">
                                    {col.links.map(l => (
                                        <li key={l}>
                                            <Link href="#" className="text-sm text-slate-500 hover:text-[#0052D9] transition-colors whitespace-nowrap">{l}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="border-t border-slate-200 pt-8 text-center text-sm text-slate-400">
                    © 2024 Boran Software. 沪ICP备13039056号.
                </div>
            </div>
        </footer>
    )
}
