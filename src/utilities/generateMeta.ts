import type { Metadata } from 'next'

import type { Media, Page, Post, Config } from '../payload-types'

import { mergeOpenGraph, mergeTwitter } from './mergeOpenGraph'
import { getServerSideURL } from './getURL'

const getImageURL = (image?: Media | Config['db']['defaultIDType'] | null) => {
  const serverUrl = getServerSideURL()

  let url = serverUrl + '/website-template-OG.webp'

  if (image && typeof image === 'object' && 'url' in image) {
    const ogUrl = image.sizes?.og?.url

    url = ogUrl ? serverUrl + ogUrl : serverUrl + image.url
  }

  return url
}

export const generateMeta = async (args: {
  doc: Partial<Page> | Partial<Post> | any | null
  collection?: string
}): Promise<Metadata> => {
  const { doc, collection } = args
  const serverUrl = getServerSideURL()

  const ogImage = getImageURL(doc?.meta?.image)

  const title = doc?.meta?.title ? `${doc?.meta?.title} | 泊冉软件` : '泊冉软件'

  const getPath = () => {
    if (!doc?.slug) return '/'
    if (collection === 'posts') return `/posts/${doc.slug}`
    if (collection === 'industry-solutions') return `/solution/industry/${doc.slug}`
    if (collection === 'success-stories') return `/success-stories/${doc.slug}`
    return `/${doc.slug}`
  }

  const path = getPath()

  const keywords = (doc as any)?.meta?.keywords || '用友网络, 上海泊冉软件, 数字化转型, ERP实施, 业财一体化'

  const openGraphData = {
    description: doc?.meta?.description || '',
    images: ogImage
      ? [
          {
            url: ogImage,
          },
        ]
      : undefined,
    title,
    url: path,
  }

  return {
    description: doc?.meta?.description,
    keywords,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    openGraph: mergeOpenGraph(openGraphData),
    twitter: mergeTwitter(undefined, openGraphData),
    title,
    alternates: {
      canonical: `${serverUrl}${path}`,
    },
  }
}
