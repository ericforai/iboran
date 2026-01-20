const SITE_URL =
  process.env.NEXT_PUBLIC_SERVER_URL ||
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
  'https://www.iboran.com'

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  exclude: ['/admin/*'], // Ensure admin pages are not in sitemap
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/admin/*',
      },
    ],
  },
}