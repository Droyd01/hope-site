import Link from 'next/link'
import { Container } from './container'

export function Navbar() {
  const items = [
    { href: '/', label: 'Home' },
    { href: '/study', label: 'Study' },
    { href: '/researcher', label: 'Researcher' },
    { href: '/research-roadmap', label: 'Roadmap' },
    { href: '/participants', label: 'Participate' },
    { href: '/contact', label: 'Contact' }
  ]
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <nav aria-label="Primary" className="py-3">
        <Container>
          <div className="flex items-center gap-6">
            <Link href="/" className="font-bold text-lg" aria-label="Hope Study Home">HOPE</Link>
            <ul className="flex items-center gap-4">
              {items.map((i) => (
                <li key={i.href}><Link className="hover:underline" href={i.href}>{i.label}</Link></li>
              ))}
            </ul>
          </div>
        </Container>
      </nav>
    </header>
  )
}