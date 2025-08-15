import Link from 'next/link'
import { Container } from './container'

export function Footer() {
  return (
    <footer className="border-t" role="contentinfo">
      <Container>
        <div className="py-10 grid sm:grid-cols-2 gap-6">
          <div>
            <h2 className="sr-only">About</h2>
            <p className="font-semibold">Hope Study</p>
            <p className="text-sm text-slate-600 mt-2">Listening to parents. Learning for practice.</p>
          </div>
          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-2 text-sm">
              <li><Link className="hover:underline" href="/privacy">Privacy</Link></li>
              <li><Link className="hover:underline" href="/cookies">Cookies</Link></li>
              <li><Link className="hover:underline" href="/accessibility">Accessibility</Link></li>
              <li><Link className="hover:underline" href="/downloads">Downloads</Link></li>
            </ul>
          </nav>
        </div>
        <div className="pb-10 text-xs text-slate-500">© {new Date().getFullYear()} Hope Study.</div>
      </Container>
    </footer>
  )
}