import Link from 'next/link'
import { Section } from '@/components/section'
import { PageHeader } from '@/components/page-header'

export const metadata = {
  title: 'About this research',
  description: 'Plain-language summary of the study and what taking part involves.'
}

export default function StudyPage() {
  return (
    <>
      <Section ariaLabel="About this research">
        <PageHeader title="About this research" />
        <p>
          We’d like to understand what “hope” means to you and what has influenced your views. Taking part begins with a short
          conversation with the researcher. Photographs are optional. You can stop at any time.
        </p>
      </Section>

      <Section ariaLabel="Who can take part">
        <PageHeader title="Who can take part?" />
        <ul className="list-disc pl-6 space-y-2">
          <li>Parent/carer of a child aged 5 or under.</li>
          <li>Your child started Conductive Education in the last 6 months.</li>
        </ul>
      </Section>

      <Section ariaLabel="What happens if I take part">
        <PageHeader title="What happens if I take part?" />
        <ol className="list-decimal pl-6 space-y-2">
          <li>We arrange a short interview at a time that suits you (in person or online if needed).</li>
          <li>You may bring photographs that represent hope to you—only if you wish.</li>
          <li>We anonymise information and store it securely.</li>
        </ol>
        <p className="mt-4">
          Read the full details in the <Link className="underline" href="/downloads">Participant Information Sheet</Link>.
        </p>
      </Section>

      <Section ariaLabel="Ethics">
        <PageHeader title="Ethics, confidentiality & GDPR" />
        <p>
          The study has University oversight and follows GDPR. Your data is kept confidential and used only for research purposes.
        </p>
      </Section>
    </>
  )
}