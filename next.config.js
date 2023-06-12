/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/contact',
            destination: '/src/app/pages/contact.tsx',
            permanent: true,
          },
        ]
      },
}

module.exports = nextConfig