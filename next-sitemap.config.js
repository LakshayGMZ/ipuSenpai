/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://www.ipusenpai.in',
    generateRobotsTxt: false,
    sitemapSize: 10000,
    generateIndexSitemap: false,
}