import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '服务条款 - 泊冉软件',
  description: '上海泊冉软件有限公司服务条款，了解使用我们服务的规则和条件。',
  keywords: '服务条款, 用户协议, 使用条款, 泊冉软件',
}

export default function TermsPage() {
  return (
    <>
      <div className="bg-gray-50 min-h-screen">
        <header className="bg-white pt-32 pb-16 border-b border-gray-200">
          <div className="container px-4">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">服务条款</h1>
            <p className="text-gray-600 max-w-2xl">
              最后更新日期：2026年1月1日
            </p>
          </div>
        </header>

        <main className="container px-4 py-16 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 prose prose-gray max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. 接受条款</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                欢迎使用上海泊冉软件有限公司（以下简称“泊冉”、“我们”或“公司”）提供的网站和服务。通过访问或使用我们的服务，您同意遵守本服务条款及所有适用的法律法规。
              </p>
              <p className="text-gray-600 leading-relaxed">
                如果您不同意本服务条款的任何部分，请勿使用我们的服务。
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. 服务说明</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                泊冉提供以下服务：
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>用友软件实施与咨询服务</li>
                <li>企业数字化转型解决方案</li>
                <li>系统定制开发服务</li>
                <li>技术支持和维护服务</li>
                <li>行业资讯和知识资源</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                我们保留随时修改、暂停或终止全部或部分服务的权利，恕不另行通知。
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. 用户责任</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                使用我们的服务时，您同意：
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>提供准确、真实和完整的信息</li>
                <li>维护账户信息的准确性和及时更新</li>
                <li>妥善保管账户凭证和密码</li>
                <li>对使用您账户的所有活动负责</li>
                <li>不通过我们的服务进行任何非法或未经授权的活动</li>
                <li>不干扰或破坏服务的安全或正常运行</li>
                <li>不上传病毒、恶意代码或其他有害内容</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. 知识产权</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                本网站及其所有内容，包括但不限于文字、图片、图形、标识、软件、代码等，均受知识产权法律保护，归泊冉或其许可方所有。
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                未经我们事先书面同意，您不得：
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>复制、修改、分发或展示任何内容</li>
                <li>将内容用于商业目的</li>
                <li>从本网站提取数据或创建衍生作品</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. 服务条款变更</h2>
              <p className="text-gray-600 leading-relaxed">
                我们保留随时修改本服务条款的权利。修改后的条款将在本页面发布，并自发布之日起生效。您在修改后继续使用我们的服务即表示接受修改后的条款。
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. 免责声明</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                本网站及其内容按“现状”和“可用”基础提供，不提供任何明示或暗示的保证，包括但不限于：
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>服务的持续可用性或无中断</li>
                <li>内容的准确性、可靠性或时效性</li>
                <li>服务器无病毒或其他有害组件</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                我们不对因使用或无法使用本服务而导致的任何直接、间接、附带、特殊或后果性损害承担责任。
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. 争议解决</h2>
              <p className="text-gray-600 leading-relaxed">
                因本服务条款引起的或与其有关的任何争议，双方应首先通过友好协商解决。协商不成的，任何一方可向上海市有管辖权的人民法院提起诉讼。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. 联系我们</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                如您对本服务条款有任何疑问，请通过以下方式联系我们：
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-2"><strong>公司：</strong>上海泊冉软件有限公司</p>
                <p className="text-gray-700 mb-2"><strong>邮箱：</strong>legal@boran.com</p>
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
