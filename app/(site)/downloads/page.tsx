import Link from 'next/link'
import { Section } from '@/components/section'
import { PageHeader } from '@/components/page-header'

export const metadata = { title: 'Downloads' }

export default function DownloadsPage() {
  return (
    <>
      <Section>
        <PageHeader title="Downloads" />
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Participant Information Sheet (PDF) — <a className="underline" href="https://982aeb28-7edd-4b94-97a9-fbc89d920b7e.filesusr.com/ugd/77f89f_2d0c1604eb934f20a792d9a3c1b39472.pdf">Download</a>
          </li>
          <li>
            Participant Consent Form (DOCX) — <a className="underline" href="https://982aeb28-7edd-4b94-97a9-fbc89d920b7e.filesusr.com/ugd/77f89f_8ca2384ccd4b48afa5ad9b6606ca5adb.docx?dn=Participant+Consent+Form.docx">Download</a>
          </li>
        </ul>
      </Section>
    </>
  )
}