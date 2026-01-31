// Input: 无外部依赖 (仅 UI 组件)
// Output: UTM 链接生成器页面，供营销团队创建跟踪链接
// Pos: app/(frontend)/tools/utm-builder - 工具页面
// 一旦我被更新，务必更新我的开头注释，以及所属的文件夹的 md。
'use client'

import React, { useState, useMemo } from 'react'
import { Copy, Check } from 'lucide-react'

const SOURCE_OPTIONS = [
  { value: 'baidu', label: '百度', description: '百度搜索/竞价' },
  { value: 'google', label: 'Google', description: 'Google 搜索/广告' },
  { value: 'wechat', label: '微信', description: '微信公众号/朋友圈' },
  { value: 'douyin', label: '抖音', description: '抖音信息流' },
  { value: 'linkedin', label: 'LinkedIn', description: 'LinkedIn 社交' },
  { value: 'email', label: '邮件', description: 'EDM 邮件营销' },
  { value: 'direct', label: '直接', description: '直接访问/二维码' },
]

const MEDIUM_OPTIONS = [
  { value: 'cpc', label: '点击付费 (CPC)', description: '竞价广告、信息流广告' },
  { value: 'organic', label: '自然搜索', description: 'SEO 自然搜索结果' },
  { value: 'social', label: '社交媒体', description: '社交平台内容' },
  { value: 'email', label: '邮件', description: '邮件营销' },
  { value: 'qr', label: '二维码', description: '线下二维码扫码' },
  { value: 'referral', label: '引荐', description: '其他网站链接跳转' },
]

const CONTENT_OPTIONS = [
  { value: 'hero_cta', label: '首屏 CTA' },
  { value: 'sidebar_banner', label: '侧边栏横幅' },
  { value: 'floating_btn', label: '悬浮按钮' },
  { value: 'text_link', label: '文字链接' },
  { value: 'image_banner', label: '图片横幅' },
]

interface UTMParams {
  url: string
  utm_source: string
  utm_medium: string
  utm_campaign: string
  utm_content: string
  utm_term: string
}

export default function UTMBuilderPage() {
  const [params, setParams] = useState<UTMParams>({
    url: 'https://www.iboran.com',
    utm_source: 'baidu',
    utm_medium: 'cpc',
    utm_campaign: '',
    utm_content: '',
    utm_term: '',
  })
  const [copied, setCopied] = useState(false)

  const generatedUrl = useMemo(() => {
    const url = new URL(params.url)
    Object.entries(params).forEach(([key, value]) => {
      if (key !== 'url' && value) url.searchParams.set(key, value)
    })
    return url.toString()
  }, [params])

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-[#F7F8FA] py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <h1 className="text-3xl font-bold text-[#1F2329] mb-2">UTM 链接生成器</h1>
          <p className="text-[#4B5563] mb-8">为营销活动生成带 UTM 参数的跟踪链接</p>

          <div className="space-y-6">
            {/* 目标 URL */}
            <div>
              <label className="block text-sm font-medium text-[#1F2329] mb-2">
                目标 URL <span className="text-red-500">*</span>
              </label>
              <input
                type="url"
                value={params.url}
                onChange={(e) => setParams({ ...params, url: e.target.value })}
                placeholder="https://www.iboran.com/solution/erp"
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0052D9] focus:border-transparent"
              />
            </div>

            {/* 来源 */}
            <div>
              <label className="block text-sm font-medium text-[#1F2329] mb-2">
                utm_source (来源) <span className="text-red-500">*</span>
              </label>
              <select
                value={params.utm_source}
                onChange={(e) => setParams({ ...params, utm_source: e.target.value })}
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0052D9]"
              >
                {SOURCE_OPTIONS.map(opt => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label} ({opt.value}) - {opt.description}
                  </option>
                ))}
              </select>
            </div>

            {/* 媒介 */}
            <div>
              <label className="block text-sm font-medium text-[#1F2329] mb-2">
                utm_medium (媒介) <span className="text-red-500">*</span>
              </label>
              <select
                value={params.utm_medium}
                onChange={(e) => setParams({ ...params, utm_medium: e.target.value })}
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0052D9]"
              >
                {MEDIUM_OPTIONS.map(opt => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label} ({opt.value})
                  </option>
                ))}
              </select>
            </div>

            {/* 活动名称 */}
            <div>
              <label className="block text-sm font-medium text-[#1F2329] mb-2">
                utm_campaign (活动名称)
              </label>
              <input
                type="text"
                value={params.utm_campaign}
                onChange={(e) => setParams({ ...params, utm_campaign: e.target.value })}
                placeholder="活动名称: yonsuite_launch / spring_promo_2025"
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0052D9]"
              />
            </div>

            {/* 内容标识 */}
            <div>
              <label className="block text-sm font-medium text-[#1F2329] mb-2">
                utm_content (内容标识)
              </label>
              <div className="flex gap-2 flex-wrap">
                {CONTENT_OPTIONS.map(opt => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setParams({ ...params, utm_content: opt.value })}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      params.utm_content === opt.value
                        ? 'bg-[#0052D9] text-white'
                        : 'bg-slate-100 text-[#4B5563] hover:bg-slate-200'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
              <input
                type="text"
                value={params.utm_content}
                onChange={(e) => setParams({ ...params, utm_content: e.target.value })}
                placeholder="或输入自定义内容标识"
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0052D9] mt-2"
              />
            </div>

            {/* 关键词 */}
            <div>
              <label className="block text-sm font-medium text-[#1F2329] mb-2">
                utm_term (关键词)
              </label>
              <input
                type="text"
                value={params.utm_term}
                onChange={(e) => setParams({ ...params, utm_term: e.target.value })}
                placeholder="关键词: 用友实施 / ERP系统"
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0052D9]"
              />
            </div>

            {/* 生成的 URL */}
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-medium text-[#1F2329]">生成的 UTM 链接</label>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm font-medium hover:border-[#0052D9] hover:text-[#0052D9] transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-green-500" />
                      <span>已复制</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>复制链接</span>
                    </>
                  )}
                </button>
              </div>
              <code className="block text-sm text-[#0052D9] break-all bg-white p-4 rounded-lg border border-slate-200">
                {generatedUrl}
              </code>
            </div>
          </div>
        </div>

        {/* 使用指南 */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mt-6">
          <h2 className="text-xl font-bold text-[#1F2329] mb-4">使用指南</h2>
          <div className="space-y-4 text-[#4B5563]">
            <div>
              <h3 className="font-medium text-[#1F2329] mb-2">渠道命名规范</h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">渠道</th>
                    <th className="text-left py-2">utm_source</th>
                    <th className="text-left py-2">utm_medium</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b"><td className="py-2">百度搜索</td><td><code>baidu</code></td><td><code>organic</code></td></tr>
                  <tr className="border-b"><td className="py-2">百度竞价</td><td><code>baidu</code></td><td><code>cpc</code></td></tr>
                  <tr className="border-b"><td className="py-2">微信公众号</td><td><code>wechat</code></td><td><code>social</code></td></tr>
                  <tr className="border-b"><td className="py-2">抖音</td><td><code>douyin</code></td><td><code>social</code></td></tr>
                  <tr className="border-b"><td className="py-2">EDM 邮件</td><td><code>email</code></td><td><code>email</code></td></tr>
                </tbody>
              </table>
            </div>

            <div>
              <h3 className="font-medium text-[#1F2329] mb-2">UTM 参数说明</h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">参数</th>
                    <th className="text-left py-2">用途</th>
                    <th className="text-left py-2">示例值</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b"><td className="py-2"><code>utm_source</code></td><td className="py-2">流量来源</td><td className="py-2">baidu, google, wechat</td></tr>
                  <tr className="border-b"><td className="py-2"><code>utm_medium</code></td><td className="py-2">媒介类型</td><td className="py-2">cpc, organic, social</td></tr>
                  <tr className="border-b"><td className="py-2"><code>utm_campaign</code></td><td className="py-2">活动名称</td><td className="py-2">yonsuite_launch</td></tr>
                  <tr className="border-b"><td className="py-2"><code>utm_content</code></td><td className="py-2">内容标识</td><td className="py-2">hero_cta, sidebar</td></tr>
                  <tr className="border-b"><td className="py-2"><code>utm_term</code></td><td className="py-2">关键词</td><td className="py-2">用友实施</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
