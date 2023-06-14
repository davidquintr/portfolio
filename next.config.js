/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['davidquintr.github.io'],
  },
  experimental: {
    appDir: false,
  },
}

module.exports = nextConfig
