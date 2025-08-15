import { NextResponse } from 'next/server'

export function GET() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  return new NextResponse(
    `User-agent: *\nAllow: /\nSitemap: ${base}/sitemap.xml\n`,
    { headers: { 'Content-Type': 'text/plain' } }
  )
}