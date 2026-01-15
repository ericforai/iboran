import { notFound } from 'next/navigation'
import type { Metadata } from 'next/types'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { WhitepaperClient } from './client'
import type { Resource } from '@/payload-types'

export const dynamic = 'force-static'
export const revalidate = 600

// 获取静态参数
export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const resources = await payload.find({
    collection: 'resources',
    depth: 0,
    limit: 100,
    where: {
      and: [
        { category: { equals: 'whitepaper' } },
      ],
    },
  })

  return resources.docs
    .filter((doc: any) => doc.slug)
    .map((doc: any) => ({
      slug: doc.slug,
    }))
}

// 获取单个资源
async function getResourceBySlug(slug: string): Promise<Resource | null> {
  const payload = await getPayload({ config: configPromise })

  const resources = await payload.find({
    collection: 'resources',
    depth: 1,
    limit: 1,
    where: {
      and: [
        { slug: { equals: slug } },
      ],
    },
  })

  return resources.docs[0] || null
}

// 生成元数据
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const resource = await getResourceBySlug(slug)

  if (!resource) {
    return {
      title: '白皮书未找到 | 泊冉软件',
    }
  }

  return {
    title: `${resource.title} - 白皮书 | 泊冉软件`,
    description: resource.summary || `下载泊冉软件提供的${resource.title}白皮书`,
  }
}

// 服务端页面组件
export default async function WhitepaperPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const resource = await getResourceBySlug(slug)

  if (!resource) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <WhitepaperClient resource={resource} />
      <Footer />
    </>
  )
}
