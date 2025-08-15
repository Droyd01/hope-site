import Link from 'next/link'
import { Section } from '@/components/section'
import { PageHeader } from '@/components/page-header'
import { ContactForm } from '@/components/contact-form'

export const metadata = { title: 'Take part in the study' }

export default function ParticipantsPage() {
  return (
    <>
      <Section>
        <PageHeader title="Take part in the study" />
        <p className="mb-4">We’re inviting parents/carers who meet the criteria below.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Parent/carer of a child aged 5 or under</li>
          <li>Your child began Conductive Education in the last 6 months</li>
        </ul>
      </Section>

      <Section id="interest">
        <PageHeader title="Express interest (2 minutes)" />
        <ContactForm compact />
        <p className="mt-4">
          Prefer to email or phone? Visit the <Link className="underline" href="/contact">contact page</Link>.
        </p>
        <p className="mt-2">
          For full details, see the <Link className="underline" href="/downloads">Participant Information Sheet</Link>.
        </p>
      </Section>
    </>
  )
}