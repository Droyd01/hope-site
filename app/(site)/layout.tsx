import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SkipToContent } from '@/components/skip-to-content'
import { CookieConsent } from '@/components/cookie-consent'
import { Analytics } from '@/lib/analytics'
import { siteMeta } from '@/lib/seo'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: { default: siteMeta.title, template: '%s | Hope Study' },
  description: siteMeta.description,
  openGraph: {
    title: siteMeta.title,
    description: siteMeta.description,
    url: siteMeta.url,
    siteName: 'Hope Study',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'en_GB',
    type: 'website'
  },
  twitter: { card: 'summary_large_image', title: siteMeta.title, description: siteMeta.description, images: ['/og-image.png'] },
  alternates: { canonical: siteMeta.url }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <SkipToContent />
        <Navbar />
        <main id="main-content" role="main" className="min-h-screen">
          {children}
        </main>
        <Footer />
        <CookieConsent />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteMeta.organizationLdJson) }}
          aria-hidden="true"
        />
      </body>
    </html>
  )
}