import { Section } from '@/components/section'
import { PageHeader } from '@/components/page-header'
import { ContactForm } from '@/components/contact-form'

export const metadata = { title: 'Contact the research team' }

export default function ContactPage() {
  return (
    <>
      <Section>
        <PageHeader title="Contact the research team" />
        <p className="mb-4">We’re happy to answer questions or arrange a time to talk.</p>
        <ContactForm />
      </Section>
    </>
  )
}