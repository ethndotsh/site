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
  async headers() {
    return [
      {
        source: "/(.*?)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
      {
        source: "/img/:slug*",
        headers: [{ key: "cache-control", value: "max-age=2592000" }],
      },
      {
        source: "/fonts/:slug*",
        headers: [{ key: "cache-control", value: "max-age=2592000" }],
      },
    ];
  },
};

module.exports = nextConfig;
