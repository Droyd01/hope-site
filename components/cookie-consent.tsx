'use client'
import { useEffect, useState } from 'react'

export function CookieConsent() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined' && !localStorage.getItem('cookie-consent')) setShow(true)
  }, [])
  if (!show) return null
  return (
    <div role="dialog" aria-label="Cookie consent" className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-white border shadow rounded-xl p-4 max-w-lg w-[95%]">
      <p className="text-sm">
        We use privacy-friendly analytics to understand site usage. No marketing cookies.{' '}
        <a className="underline" href="/cookies">Learn more</a>.
      </p>
      <div className="mt-3 flex gap-2">
        <button className="rounded-full bg-primary text-white px-4 py-2" onClick={() => { localStorage.setItem('cookie-consent', 'true'); setShow(false) }}>
          Accept
        </button>
        <button className="rounded-full border px-4 py-2" onClick={() => setShow(false)}>Decline</button>
      </div>
    </div>
  )
}