import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Hero } from '@/components/hero'
import { Section } from '@/components/section'
import { FAQ } from '@/components/faq'
import Link from 'next/link'
import { PageHeader } from '@/components/page-header'

export default function HomePage() {
  return (
    <>
      <Hero
        title="Hope, in parents’ own words."
        lead="We’re inviting parents of young children with cerebral palsy in Conductive Education to share what hope means to them."
        primaryCta={{ href: '/study', label: 'Read participant info' }}
        secondaryCta={{ href: '/participants#interest', label: 'Express interest (2 minutes)' }}
        image={{ src: '/images/hero.jpg', alt: 'Parent and young child at a CE session' }}
      />

      <Section id="eligibility" ariaLabel="Who can take part">
        <PageHeader title="Who can take part?" />
        <ul className="list-disc pl-6 space-y-2">
          <li>Parent or carer of a child aged 5 or under.</li>
          <li>Your child began Conductive Education in the last 6 months.</li>
        </ul>
      </Section>

      <Section id="what-to-expect" ariaLabel="What taking part involves">
        <PageHeader title="What taking part involves" />
        <ul className="grid sm:grid-cols-2 gap-4">
          <li>Friendly interview (30–60 minutes).</li>
          <li>Optional photographs—only if you want to.</li>
          <li>You can stop at any time.</li>
          <li>We anonymise your information.</li>
        </ul>
      </Section>

      <Section id="why" ariaLabel="Why this research matters">
        <PageHeader title="Why this matters" />
        <p>Your experience can help improve support for families like yours.</p>
      </Section>

      <Section id="faq" ariaLabel="Questions">
        <PageHeader title="Quick questions" />
        <FAQ
          items={[
            { q: 'Can I withdraw?', a: 'Yes. You can stop at any time—no reason needed.' },
            { q: 'Is my information confidential?', a: 'Yes. We follow University GDPR rules and ethics approval.' },
            { q: 'Where does the interview happen?', a: 'Where convenient for you; online is possible if needed.' }
          ]}
        />
      </Section>

      <Section id="contact" ariaLabel="Contact">
        <PageHeader title="Contact the research team" />
        <p className="mb-4">
          Prefer email or phone? <Link className="underline" href="/contact">Go to the contact page</Link>.
        </p>
        <Button asChild><Link href="/participants#interest">Express interest</Link></Button>
      </Section>
    </>
  )
}