/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.URL || process.env.VERCEL_URL,
  generateRobotsTxt: true, // (optional)
  // ...other options
};
