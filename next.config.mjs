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

  // 🔒 Move security headers here (no middleware needed)
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Permissions-Policy', value: 'geolocation=(), microphone=(), camera=()' },
          { key: 'X-XSS-Protection', value: '0' }
        ]
      }
    ]
  },

  experimental: {
    serverActions: { bodySizeLimit: '2mb' }
  }
}

export default nextConfig
