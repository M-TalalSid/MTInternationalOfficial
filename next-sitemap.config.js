/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://mtinternationalofficial.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/admin', '/api/*', '/private'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://mtinternationalofficial.com/sitemap.xml',
    ],
  },
};
