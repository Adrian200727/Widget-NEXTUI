/** @type {import('next').NextConfig} */
const nextConfig = {};

export default {
  experimental: {
    optimizeFonts: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
};
