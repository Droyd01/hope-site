import { Section } from '@/components/section'
import { PageHeader } from '@/components/page-header'

export const metadata = { title: 'Cookies' }

export default function Cookies() {
  return (
    <Section>
      <PageHeader title="Cookie Policy" />
      <p>We use privacy-friendly analytics. No marketing cookies are set. You can accept or decline analytics in the cookie banner.</p>
    </Section>
  )
}