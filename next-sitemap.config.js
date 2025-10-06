/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://mtinternationalofficial.com', // ✅ your domain (no trailing slash)
  generateRobotsTxt: true, // ✅ automatically creates robots.txt
  sitemapSize: 7000, // optional: limits URLs per sitemap file
  changefreq: 'monthly',
  priority: 0.7,
  exclude: ['/admin/*', '/private/*'], // exclude private routes
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://mtinternationalofficial.com/sitemap.xml',
    ],
  },
};
