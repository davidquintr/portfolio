/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['davidquintr.github.io'],
    unoptimized: true
  },
  basePath: '/portfolio'
}

module.exports = nextConfig
