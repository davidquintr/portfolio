/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/portfolio',
  images: {
    domains: ['davidquintr.github.io'],
    unoptimized: true
  },
}

module.exports = nextConfig
