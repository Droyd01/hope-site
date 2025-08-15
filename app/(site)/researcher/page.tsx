import Link from 'next/link'
import { Section } from '@/components/section'
import { PageHeader } from '@/components/page-header'

export const metadata = { title: 'Meet the researcher' }

export default function ResearcherPage() {
  return (
    <>
      <Section>
        <PageHeader title="Meet the researcher" />
        <p>
          I’m Fiona Holroyd, a senior conductor working in early years Conductive Education and a lecturer at the National Institute
          for Conductive Education. This study forms part of my PhD at the University of Nottingham.
        </p>
      </Section>

      <Section>
        <PageHeader title="Selected publications" />
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Holroyd, F. (2022). Theories of Social Learning... <a className="underline" href="https://conductive-education.org.uk/wp-content/uploads/2022/12/00242_NICE_CE-Journal_2022_Proof-v4-161222.pdf">PDF</a>
          </li>
          <li>
            Emerson, A. & Holroyd, F. (2020) Conductive Education: thirty years on... <a className="underline" href="https://doi.org/10.1080/09687599.2019.1685791">DOI</a>
          </li>
        </ul>
        <p className="mt-4"><Link className="underline" href="/contact">Contact the researcher</Link></p>
      </Section>
    </>
  )
}