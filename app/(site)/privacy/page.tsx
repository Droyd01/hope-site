import { Section } from '@/components/section'
import { PageHeader } from '@/components/page-header'

export const metadata = { title: 'Privacy' }

export default function Privacy() {
  return (
    <Section>
      <PageHeader title="Privacy Policy" />
      <p className="mb-2">We collect only the information you provide via the contact form. We use it to respond to your enquiry and for research administration.</p>
      <p className="mb-2">Your data is kept confidential and stored securely. You can ask us to delete it at any time.</p>
      <p>For questions about privacy, please use the contact page.</p>
    </Section>
  )
}