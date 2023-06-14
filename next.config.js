/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    basePath: '/portfolio',
    domains: ['davidquintr.github.io'],
    unoptimized: true
  },
}

module.exports = nextConfig
