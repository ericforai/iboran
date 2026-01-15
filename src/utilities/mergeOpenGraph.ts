import type { Metadata } from 'next'
import { getServerSideURL } from './getURL'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  description: '专业的用友软件实施服务商',
  images: [
    {
      url: `${getServerSideURL()}/website-template-OG.webp`,
    },
  ],
  siteName: '泊冉软件',
  title: '泊冉软件',
}

const defaultTwitter: Metadata['twitter'] = {
  card: 'summary_large_image',
  title: '泊冉软件',
  description: '专业的用友软件实施服务商',
  images: [`${getServerSideURL()}/website-template-OG.webp`],
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}

export const mergeTwitter = (twitter?: Metadata['twitter'], og?: Metadata['openGraph']): Metadata['twitter'] => {
  return {
    ...defaultTwitter,
    ...twitter,
    title: twitter?.title || og?.title || defaultTwitter.title,
    description: twitter?.description || og?.description || defaultTwitter.description,
    images: twitter?.images || og?.images || defaultTwitter.images,
  }
}
