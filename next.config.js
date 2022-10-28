/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["grng.netlify.app"],
  },
};

module.exports = nextConfig;
