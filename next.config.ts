// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // 👈 disables server-based optimization
  },
};

module.exports = nextConfig;
