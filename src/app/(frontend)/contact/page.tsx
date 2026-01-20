import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { ContactForm } from './ContactForm'
import { Phone, MapPin, Mail, ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: '联系我们 - 泊冉软件 | 用友铂金级合作伙伴',
  description: '联系泊冉软件，获取专业的企业数智化解决方案咨询服务。作为用友铂金级合作伙伴，我们为高成长型企业提供YonSuite、YonBIP等产品实施服务。',
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  return (
    <article className="min-h-screen bg-[#F5F7FA]">
      {/* Hero Section - Compacted */}
      <section className="relative bg-white pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-[#1F2329] mb-4 tracking-tight">
              联系泊冉软件
            </h1>
            <p className="text-lg text-[#4B5563] max-w-2xl mx-auto leading-relaxed">
              无论您是寻求企业数智化转型方案，还是需要产品技术支持，
              我们的专家团队随时为您提供专业服务
            </p>
          </div>
        </div>
      </section>

      {/* Main Content - Compacted */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-6">
              
              {/* Left Column: Contact Form */}
              <div className="lg:col-span-7">
                <Card className="shadow-lg border-0 overflow-hidden h-full flex flex-col">
                  <div className="h-1.5 bg-[#E60012] w-full shrink-0" />
                  <CardHeader className="pt-6 pb-2 px-6 shrink-0">
                    <CardTitle className="text-xl">发送留言</CardTitle>
                    <CardDescription className="text-xs">
                      填写下方表单，我们的解决方案专家将在 24 小时内与您联系
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 pt-4 flex-1">
                    <ContactForm />
                  </CardContent>
                </Card>
              </div>

              {/* Right Column: Contact Info */}
              <div className="lg:col-span-5 flex flex-col gap-4 h-full">
                
                {/* Contact Cards - Compact Grid */}
                <div className="grid gap-4 shrink-0">
                  {/* Phone */}
                  <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 text-[#0052D9]">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm mb-0.5">客户服务热线</h3>
                        <a href="tel:400-9955-161" className="text-xl font-bold text-[#0052D9] hover:underline block leading-none">
                          400-9955-161
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Address */}
                  <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-4 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center shrink-0 text-gray-700">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm mb-0.5">总部地址</h3>
                        <p className="text-gray-600 text-sm leading-snug">
                          上海市普陀区曹杨路1888号<br />
                          星光耀广场1号楼1005室
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Email */}
                  <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center shrink-0 text-gray-700">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm mb-0.5">商务合作</h3>
                        <a href="mailto:contact@iboran.com" className="text-gray-600 text-sm hover:text-[#0052D9] transition-colors">
                          contact@iboran.com
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Trust/Support Section - Compact */}
                <div className="bg-[#1F2329] text-white rounded-xl p-5 shadow-lg mt-0 flex-1 flex flex-col justify-center">
                  <h3 className="text-sm font-bold mb-3 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#E60012]" />
                    为什么选择泊冉？
                  </h3>
                  <ul className="space-y-2 text-gray-300 text-xs">
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-[#E60012] mt-1.5 shrink-0" />
                      <span>用友网络铂金级合作伙伴，行业领先的交付能力</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-[#E60012] mt-1.5 shrink-0" />
                      <span>10+ 年企业数智化转型服务经验，服务客户 2500+</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-[#E60012] mt-1.5 shrink-0" />
                      <span>提供从咨询、实施到运维的全生命周期服务保障</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </article>
  )
}
