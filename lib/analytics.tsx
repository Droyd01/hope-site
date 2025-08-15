'use client'
export function Analytics() {
  if (!process.env.NEXT_PUBLIC_ANALYTICS) return null
  if (process.env.NEXT_PUBLIC_ANALYTICS === 'plausible') {
    return <script defer data-domain={process.env.NEXT_PUBLIC_ANALYTICS_DOMAIN} src="https://plausible.io/js/script.js"></script>
  }
  if (process.env.NEXT_PUBLIC_ANALYTICS === 'ga4') {
    const id = process.env.NEXT_PUBLIC_GA4_ID
    return (
      <>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${id}`}></script>
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)};gtag('js', new Date());gtag('config','${id}',{anonymize_ip:true});` }} />
      </>
    )
  }
  return null
}