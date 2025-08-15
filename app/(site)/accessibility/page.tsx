import { Section } from '@/components/section'
import { PageHeader } from '@/components/page-header'

export const metadata = { title: 'Accessibility' }

export default function Accessibility() {
  return (
    <Section>
      <PageHeader title="Accessibility statement" />
      <p className="mb-2">We aim to meet WCAG 2.2 AA. If you encounter any issues, contact us and we will provide information in an alternative format.</p>
    </Section>
  )
}