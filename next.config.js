/** @type {import('next').NextConfig} */
const nextConfig = {};

export default {
  experimental: {
    optimizeFonts: true,
    esmExternals: "loose",
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
};
