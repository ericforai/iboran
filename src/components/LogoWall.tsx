'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Client = {
  name: string
  logo?: string
  href?: string
  className?: string
}

const clients: Client[] = [
  { name: '汉堡王', logo: '/logos/burger-king.svg', href: '/cases/han-bao-wang' },
  { name: 'M Stand', logo: '/logos/mstand.png', href: '/cases/mstand' },
  { name: 'Tim Hortons', logo: '/logos/tim-hortons.svg', href: '/cases/tims' },
  { name: '林清轩', logo: '/logos/lin-qing-xuan.png', href: '/cases/lin-qing-xuan' },
  { name: '马记永', logo: '/logos/majiyong.png', href: '/cases/ma-ji-yong' },
  { name: '交运集团', logo: '/logos/jiaoyun.png', href: '/cases/jiao-yun-ji-tuan' },
  { name: '奥普家居', logo: '/logos/aupu.png', href: '/cases/ao-pu-jia-ju' },
  { name: '汇纳股份', logo: '/logos/winner.png', href: '/cases/hui-na-gu-fen' },
  { name: '润达医疗', logo: '/logos/runda.png', href: '/cases/run-da-yi-liao' },
  { name: '爱数科技', logo: '/logos/eisoo.png', href: '/cases/ai-shu-ke-ji' },
  { name: '爱发科', logo: '/logos/ulvac.svg', href: '/cases/ai-fa-ke' },
  { name: '开能健康', logo: '/logos/canature.png', href: '/cases/kai-neng-jian-kang' },
  { name: '原能细胞', logo: '/logos/origincell.png', href: '/cases/yuan-neng-sheng-wu' },
  { name: '拳头游戏', logo: '/logos/riot-games.png', href: '/cases/quan-tou-you-xi' },
  { name: '上海清算所', logo: '/logos/shch.png', href: '/cases/shang-hai-qing-suan-suo', className: 'brightness-0' },
  { name: '住友集团', logo: '/logos/sumitomo.svg', href: '/cases/sumitomo' },
  { name: '童涵春堂', logo: '/logos/thct.png', href: '/cases/tong-han-chun-tang' },
  { name: '强生交通', logo: '/logos/qiang-sheng.svg', href: '/cases/qiang-sheng-jiao-tong' },
  { name: '中荷环保', logo: '/logos/zhong-he.png', href: '/cases/zhong-he-huan-bao' },
  { name: '福寿康', logo: '/logos/fsk.png', href: '/cases/fu-shou-kang' },
  { name: '南极电商', logo: '/logos/nanji.png', href: '/cases/nanji-ecommerce' },
  { name: '安能物流', logo: '/logos/ane.png', href: '/cases/anneng-logistics' },
  { name: 'COSTA', logo: '/logos/costa.svg', href: '/cases/costa' },
  { name: '久事集团', logo: '/logos/juss.png', href: '/cases/jiu-shi-gong-jiao' },
  { name: '捷太格特', logo: '/logos/jtekt.svg', href: '/cases/jtekt' },
]

export const LogoWall = () => {
  return (
    <section className="py-14 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-3 md:mb-6">
            行业认可与标杆客户
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            众多行业头部企业选择泊冉作为数字化转型合作伙伴
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6 lg:gap-8">
          {clients.map((client) => {
            const content = (
              <>
                {client.logo ? (
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={160}
                    height={96}
                    className={`max-h-14 md:max-h-24 w-auto object-contain transition-transform duration-500 group-hover:scale-110 ${client.className || ''}`}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                      e.currentTarget.nextElementSibling?.classList.remove('hidden')
                    }}
                  />
                ) : null}
                <span className={`text-slate-400 font-medium text-center transition-colors duration-300 group-hover:text-blue-600 ${client.logo ? 'hidden' : ''}`}>
                  {client.name}
                </span>
              </>
            );

            const containerClassName = `group relative flex items-center justify-center p-3 md:p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-xl transition-all duration-300 h-24 md:h-40 overflow-hidden ${client.href ? 'cursor-pointer' : ''}`;

            if (client.href) {
              return (
                <Link 
                  key={client.name} 
                  href={client.href}
                  className={containerClassName}
                >
                  {content}
                </Link>
              );
            }

            return (
              <div 
                key={client.name} 
                className={containerClassName}
              >
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
