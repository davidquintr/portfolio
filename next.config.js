/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['davidquintr.github.io'],
    unoptimized: true
  },
  output: 'export',
  distDir: '_static',
}

module.exports = nextConfig
