/** @type {import('next-sitemap').IConfig} */
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://mtinternationalofficial.com";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/admin/*", "/private/*", "/api/*"], // exclude from sitemap too
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/about",
          "/services",
          "/blog",
          "/contact",
          "/terms",
          "/privacy",
          "/cookies",
        ],
        disallow: ["/admin", "/private", "/api"],
      },
      {
        userAgent: "Googlebot",
        crawlDelay: 1,
      },
      {
        userAgent: "Bingbot",
        crawlDelay: 1,
      },
    ],
    additionalSitemaps: [`${siteUrl}/sitemap.xml`],
  },
};
