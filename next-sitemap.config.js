/** @type {import('next-sitemap').IConfig} */
export default {
  siteUrl: process.env.NEXT_PUBLIC_SERVER_URL || 'https://www.iboran.com',
  generateRobotsTxt: true,
  outDir: 'public',
  exclude: ['/admin', '/api/*'],
  transform: async (config, path) => {
    // Default priority and changefreq
    let priority = 0.7
    let changefreq = 'weekly'

    // Homepage
    if (path === '/') {
      priority = 1.0
      changefreq = 'daily'
    }

    // Main pages
    if (['/about', '/contact', '/posts', '/cases', '/solution', '/products'].includes(path)) {
      priority = 0.9
      changefreq = 'weekly'
    }

    // Legal pages
    if (['/privacy', '/terms', '/sitemap'].includes(path)) {
      priority = 0.3
      changefreq = 'monthly'
    }

    return {
      loc: path,
      priority,
      changefreq,
      lastmod: new Date().toISOString(),
    }
  },
}
