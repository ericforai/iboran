import { ChevronRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-orange-50 via-white to-amber-50 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 4px 4px, rgba(251, 146, 60, 0.15) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-400/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-400/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-2 text-orange-600 text-sm font-medium mb-6">
              <span>客户案例</span>
              <ChevronRight className="w-4 h-4" />
              <span>消费品 / 宠物经济</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8">
              犀早宠物<br />
              <span className="text-orange-500 text-3xl md:text-5xl">数字化转型实践</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mb-8">
              宠物食品及用品零售批发、宠物服务、摄影扩印、信息咨询。打造ERP+OMS一体化平台，支撑宠物新零售业务持续扩张。
            </p>

            {/* Quick stats badges */}
            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 bg-orange-100 rounded-full border border-orange-200 text-orange-700 text-sm font-medium">
                宠物新零售
              </div>
              <div className="px-4 py-2 bg-teal-100 rounded-full border border-teal-200 text-teal-700 text-sm font-medium">
                ERP+OMS一体化
              </div>
              <div className="px-4 py-2 bg-amber-100 rounded-full border border-amber-200 text-amber-700 text-sm font-medium">
                多业态融合
              </div>
            </div>
          </div>

          {/* Right Decorative SVG - Pet Theme */}
          <div className="hidden lg:block relative">
            <svg viewBox="0 0 400 400" className="w-full h-auto animate-float" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="petOrange" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FB923C" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#EA580C" stopOpacity="0.9" />
                </linearGradient>
                <linearGradient id="petTeal" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2DD4BF" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="petAmber" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FCD34D" />
                  <stop offset="100%" stopColor="#F59E0B" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Background shapes */}
              <circle cx="200" cy="200" r="140" fill="none" stroke="url(#petOrange)" strokeWidth="2" opacity="0.15" />
              <circle cx="200" cy="200" r="110" fill="none" stroke="url(#petTeal)" strokeWidth="2" opacity="0.15" strokeDasharray="8,8" />

              {/* Cute dog/cat face illustration */}
              <g filter="url(#glow)">
                {/* Face base - orange color */}
                <ellipse cx="200" cy="180" rx="90" ry="80" fill="url(#petOrange)" opacity="0.85" />

                {/* Ears */}
                <ellipse cx="120" cy="100" rx="35" ry="50" fill="#EA580C" opacity="0.7" transform="rotate(-20 120 100)" />
                <ellipse cx="280" cy="100" rx="35" ry="50" fill="#EA580C" opacity="0.7" transform="rotate(20 280 100)" />

                {/* Inner ears */}
                <ellipse cx="125" cy="105" rx="20" ry="30" fill="#FED7AA" opacity="0.8" transform="rotate(-20 125 105)" />
                <ellipse cx="275" cy="105" rx="20" ry="30" fill="#FED7AA" opacity="0.8" transform="rotate(20 275 105)" />

                {/* Forehead patch - lighter */}
                <ellipse cx="200" cy="140" rx="35" ry="25" fill="#FED7AA" opacity="0.6" />

                {/* Eyes */}
                <ellipse cx="165" cy="170" rx="18" ry="22" fill="#1F2937" opacity="0.9" />
                <ellipse cx="235" cy="170" rx="18" ry="22" fill="#1F2937" opacity="0.9" />

                {/* Eye highlights */}
                <circle cx="170" cy="165" r="6" fill="white" opacity="0.8" />
                <circle cx="240" cy="165" r="6" fill="white" opacity="0.8" />

                {/* Nose */}
                <ellipse cx="200" cy="210" rx="15" ry="12" fill="#1F2937" opacity="0.9" />
                <ellipse cx="200" cy="207" rx="6" ry="4" fill="#6B7280" opacity="0.5" />

                {/* Mouth - smile */}
                <path d="M175 230 Q200 250 225 230" stroke="#1F2937" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7" />

                {/* Cheeks - rosy */}
                <ellipse cx="140" cy="200" rx="15" ry="10" fill="#FCA5A5" opacity="0.4" />
                <ellipse cx="260" cy="200" rx="15" ry="10" fill="#FCA5A5" opacity="0.4" />
              </g>

              {/* Paw prints decoration */}
              <g className="animate-float" style={{ animationDelay: '0.5s' }}>
                {/* Paw 1 */}
                <circle cx="60" cy="120" r="12" fill="#FB923C" opacity="0.4" />
                <circle cx="45" cy="100" r="8" fill="#FB923C" opacity="0.35" />
                <circle cx="60" cy="95" r="8" fill="#FB923C" opacity="0.35" />
                <circle cx="75" cy="100" r="8" fill="#FB923C" opacity="0.35" />
              </g>

              <g className="animate-float" style={{ animationDelay: '1s' }}>
                {/* Paw 2 */}
                <circle cx="340" cy="300" r="10" fill="#2DD4BF" opacity="0.35" />
                <circle cx="328" cy="283" r="6" fill="#2DD4BF" opacity="0.3" />
                <circle cx="340" cy="279" r="6" fill="#2DD4BF" opacity="0.3" />
                <circle cx="352" cy="283" r="6" fill="#2DD4BF" opacity="0.3" />
              </g>

              <g className="animate-float" style={{ animationDelay: '0.8s' }}>
                {/* Paw 3 */}
                <circle cx="330" cy="130" r="8" fill="#F59E0B" opacity="0.3" />
                <circle cx="321" cy="117" r="5" fill="#F59E0B" opacity="0.25" />
                <circle cx="330" cy="114" r="5" fill="#F59E0B" opacity="0.25" />
                <circle cx="339" cy="117" r="5" fill="#F59E0B" opacity="0.25" />
              </g>

              {/* Floating hearts - playfulness */}
              <path d="M80 250 C80 245, 70 235, 65 240 C60 245, 65 255, 80 265 C95 255, 100 245, 95 240 C90 235, 80 245, 80 250 Z"
                    fill="#FCA5A5" opacity="0.4" className="animate-float" style={{ animationDelay: '1.2s' }} />
              <path d="M320 200 C320 197, 314 191, 311 194 C308 197, 311 203, 320 209 C329 203, 332 197, 329 194 C326 191, 320 197, 320 200 Z"
                    fill="#FCA5A5" opacity="0.3" className="animate-float" style={{ animationDelay: '0.6s' }} />

              {/* Bone shape */}
              <g className="animate-float" style={{ animationDelay: '1.5s' }}>
                <rect x="165" y="300" width="70" height="16" rx="8" fill="url(#petAmber)" opacity="0.5" />
                <circle cx="165" cy="308" r="10" fill="url(#petAmber)" opacity="0.5" />
                <circle cx="235" cy="308" r="10" fill="url(#petAmber)" opacity="0.5" />
              </g>

              {/* Small decorative dots */}
              <circle cx="100" cy="320" r="4" fill="#FB923C" opacity="0.4" className="animate-float" style={{ animationDelay: '0.3s' }} />
              <circle cx="300" cy="60" r="3" fill="#2DD4BF" opacity="0.5" className="animate-float" style={{ animationDelay: '0.7s' }} />
              <circle cx="50" cy="200" r="5" fill="#F59E0B" opacity="0.3" className="animate-float" style={{ animationDelay: '1.1s' }} />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
