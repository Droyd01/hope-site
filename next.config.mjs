/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'static.wixstatic.com' },
      { protocol: 'https', hostname: '*.filesusr.com' }
    ]
  },
  async redirects() {
    return [
      { source: '/website', destination: '/', permanent: true },
      { source: '/website/the-researcher', destination: '/researcher', permanent: true },
      { source: '/website/blank-page', destination: '/research-roadmap', permanent: true },
      { source: '/ugd/:path*', destination: '/downloads', permanent: true }
    ]
  },
  experimental: {
    serverActions: { bodySizeLimit: '2mb' }
  }
}

export default nextConfig
