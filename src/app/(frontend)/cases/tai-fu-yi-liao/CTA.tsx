import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="container mx-auto px-4 text-center text-white max-w-4xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">开启您的数字化转型</h2>
        <p className="text-blue-100 mb-8 text-base sm:text-lg max-w-2xl mx-auto">
          让泊冉软件的专业团队帮助您实现业务创新与效率提升
        </p>
        <Link 
          href="/contact" 
          className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-blue-600"
          aria-label="立即咨询联系我们"
        >
          立即咨询 
          <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}
