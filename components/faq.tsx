'use client'
import { useState } from 'react'
import { Card } from './ui/card'

export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="space-y-3">
      {items.map((it, i) => (
        <Card key={it.q}>
          <button
            className="w-full text-left"
            aria-expanded={open === i}
            aria-controls={`faq-panel-${i}`}
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="font-medium">{it.q}</span>
          </button>
          <div id={`faq-panel-${i}`} role="region" className={open === i ? 'mt-2' : 'sr-only'}>
            <p>{it.a}</p>
          </div>
        </Card>
      ))}
    </div>
  )
}