import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '联系我们 - 泊冉软件 | 用友铂金级合作伙伴',
  description: '联系泊冉软件，获取专业的企业数智化解决方案咨询服务。作为用友铂金级合作伙伴，我们为高成长型企业提供YonSuite、YonBIP等产品实施服务。',
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  return (
    <article className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#E60012]/5 via-white to-[#0052D9]/5 py-24">
        <div className="absolute inset-0 grid-pattern opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1F2329] mb-6">
              联系我们
            </h1>
            <p className="text-lg text-[#4B5563] mb-8">
              无论您是想了解我们的产品、寻求解决方案，还是有任何疑问，我们随时为您提供帮助
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-[#1F2329] mb-8">
                联系方式
              </h2>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#0052D9]/10 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#0052D9]">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1F2329] mb-1">客服热线</h3>
                    <a href="tel:400-9955-161" className="text-xl font-bold text-[#0052D9] hover:underline">
                      400-9955-161
                    </a>
                    <p className="text-sm text-[#4B5563] mt-1">工作日 9:00-18:00</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#0052D9]/10 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#0052D9]">
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1F2329] mb-1">公司地址</h3>
                    <address className="text-[#4B5563] not-italic">
                      上海市普陀区曹杨路1888号<br />
                      星光耀广场1号楼1005室
                    </address>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#0052D9]/10 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#0052D9]">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1F2329] mb-1">商务合作</h3>
                    <p className="text-[#4B5563]">
                      通过电话或下方表单联系我们
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-gradient-to-br from-[#E60012] to-[#c4000f] rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">
                预约专家演示
              </h2>
              <p className="text-white/90 mb-6">
                我们的产品专家将为您提供一对一的产品演示和解决方案咨询
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>免费产品演示</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>定制化解决方案咨询</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>行业最佳实践分享</span>
                </li>
              </ul>
              <a
                href="tel:400-9955-161"
                className="inline-flex items-center justify-center w-full px-6 py-4 bg-white text-[#E60012] font-bold rounded-lg hover:bg-gray-100 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                立即致电 400-9955-161
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-[#F7F8FA]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1F2329] text-center mb-12">
            探索我们的解决方案
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link
              href="/products/yonsuite"
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group"
            >
              <h3 className="font-bold text-[#1F2329] group-hover:text-[#0052D9] transition-colors">
                YonSuite
              </h3>
              <p className="text-sm text-[#4B5563] mt-2">
                成长型企业云服务
              </p>
            </Link>
            <Link
              href="/solution/business/r2r"
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group"
            >
              <h3 className="font-bold text-[#1F2329] group-hover:text-[#0052D9] transition-colors">
                财务共享
              </h3>
              <p className="text-sm text-[#4B5563] mt-2">
                R2R智能财务解决方案
              </p>
            </Link>
            <Link
              href="/cases"
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group"
            >
              <h3 className="font-bold text-[#1F2329] group-hover:text-[#0052D9] transition-colors">
                客户案例
              </h3>
              <p className="text-sm text-[#4B5563] mt-2">
                了解客户成功故事
              </p>
            </Link>
          </div>
        </div>
      </section>
    </article>
  )
}
