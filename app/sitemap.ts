import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const pages = ['/', '/study', '/researcher', '/research-roadmap', '/participants', '/contact', '/downloads', '/privacy', '/cookies', '/accessibility']
  return pages.map((p) => ({ url: `${base}${p}`, changeFrequency: 'monthly', priority: p === '/' ? 1.0 : 0.7 }))
}