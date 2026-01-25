import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '隐私政策 - 泊冉软件',
  description: '上海泊冉软件有限公司隐私政策，了解我们如何收集、使用和保护您的个人信息。',
  keywords: '隐私政策, 数据保护, 个人信息, 泊冉软件',
}

export default function PrivacyPage() {
  return (
    <>
      <div className="bg-gray-50 min-h-screen">
        <header className="bg-white pt-32 pb-16 border-b border-gray-200">
          <div className="container px-4">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">隐私政策</h1>
            <p className="text-gray-600 max-w-2xl">
              最后更新日期：2026年1月1日
            </p>
          </div>
        </header>

        <main className="container px-4 py-16 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 prose prose-gray max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">引言</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                上海泊冉软件有限公司（以下简称“我们”、“泊冉”或“公司”）尊重并保护您的隐私权。本隐私政策说明了我们如何收集、使用、披露和保护您在使用我们服务时提供的个人信息。
              </p>
              <p className="text-gray-600 leading-relaxed">
                使用我们的服务即表示您同意本隐私政策中描述的做法。如果您不同意我们的做法，请勿使用我们的服务。
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">我们收集的信息</h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">1. 个人身份信息</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                当您联系我们、注册账户或使用我们的服务时，我们可能收集以下信息：
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                <li>姓名、职位、公司名称</li>
                <li>电子邮件地址、电话号码</li>
                <li>通信地址</li>
                <li>工作相关信息和业务需求</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">2. 技术信息</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                我们自动收集的技术信息包括：
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>IP 地址和浏览器类型</li>
                <li>设备信息和操作系统</li>
                <li>访问时间和页面浏览记录</li>
                <li>网站使用情况和点击流数据</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">信息的使用</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                我们使用收集的信息用于以下目的：
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>提供、维护和改进我们的服务</li>
                <li>处理您的请求和交易</li>
                <li>向您发送与服务相关的通知和更新</li>
                <li>回应您的咨询、问题和反馈</li>
                <li>分析网站使用情况以优化用户体验</li>
                <li>检测、预防和解决技术问题和安全问题</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">信息的共享</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                我们不会出售、出租或以其他方式向第三方披露您的个人信息，除非：
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>获得您的明确同意</li>
                <li>法律、法规或政府主管部门要求</li>
                <li>为保护我们的权利、财产或安全</li>
                <li>与可信的第三方服务提供商合作（在保密协议下）</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">数据安全</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                我们采取合理的技术和组织措施来保护您的个人信息免受未经授权的访问、使用或披露。这包括：
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>使用 SSL/TLS 加密技术</li>
                <li>定期安全审计和漏洞扫描</li>
                <li>访问权限控制和员工保密培训</li>
                <li>数据备份和灾难恢复机制</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">您的权利</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                根据适用的数据保护法律，您拥有以下权利：
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>访问我们持有的关于您的个人信息</li>
                <li>要求更正不准确的信息</li>
                <li>要求删除您的个人信息</li>
                <li>反对或限制某些处理活动</li>
                <li>撤回同意（如适用）</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                如需行使这些权利，请通过 privacy@boran.com 联系我们。
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookie 政策</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                我们使用 Cookie 和类似技术来改善用户体验、分析网站使用情况。您可以通过浏览器设置管理 Cookie 偏好，但这可能影响网站的某些功能。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">联系我们</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                如果您对本隐私政策有任何疑问、意见或投诉，请通过以下方式联系我们：
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-2"><strong>公司：</strong>上海泊冉软件有限公司</p>
                <p className="text-gray-700 mb-2"><strong>邮箱：</strong>privacy@boran.com</p>
                <p className="text-gray-700 mb-2"><strong>电话：</strong>400-9955-161</p>
                <p className="text-gray-700"><strong>地址：</strong>上海市普陀区曹杨路1888号星光耀广场1号楼1005室</p>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  )
}
