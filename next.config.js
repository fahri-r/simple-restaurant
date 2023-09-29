/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    TABLE_COUNT: process.env.TABLE_COUNT,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/menu",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
