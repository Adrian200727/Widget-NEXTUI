/** @type {import('next').NextConfig} */
const nextConfig = {};

export default {
  experimental: {
    optimizeFonts: true,
    esmExternals: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
};
