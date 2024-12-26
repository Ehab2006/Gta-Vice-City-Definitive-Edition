/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: 'https://gtavice.vercel.app' || 'http://localhost:3000',
    generateRobotsTxt: true,
    exclude: ['/sitemap.xml'],
  };