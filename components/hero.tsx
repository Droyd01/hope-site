import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { Container } from './container'

export function Hero({
  title, lead, primaryCta, secondaryCta, image
}: {
  title: string
  lead: string
  primaryCta: { href: string; label: string }
  secondaryCta?: { href: string; label: string }
  image?: { src: string; alt: string }
}) {
  return (
    <section aria-label="Introduction" className="py-16 border-b bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl sm:text-5xl font-semibold mb-4">{title}</h1>
            <p className="text-lg text-slate-700 mb-6">{lead}</p>
            <div className="flex gap-3">
              <Button asChild><Link href={primaryCta.href}>{primaryCta.label}</Link></Button>
              {secondaryCta ? (
                <Button className="bg-white text-primary border" asChild>
                  <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                </Button>
              ) : null}
            </div>
          </div>
          {image ? (
            <div>
              <Image src={image.src} alt={image.alt} width={1200} height={800} className="rounded-xl border" priority />
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  )
}