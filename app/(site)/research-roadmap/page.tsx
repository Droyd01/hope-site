import Image from 'next/image'
import { Section } from '@/components/section'
import { PageHeader } from '@/components/page-header'

export const metadata = { title: 'Research roadmap' }

const steps = [
  { title: 'Planning & ethics', status: 'Complete' },
  { title: 'Recruitment', status: 'Now recruiting' },
  { title: 'Interviews', status: 'Starting' },
  { title: 'Analysis', status: 'Upcoming' },
  { title: 'Reporting', status: 'Upcoming' }
]

export default function RoadmapPage() {
  return (
    <>
      <Section>
        <PageHeader title="Research roadmap" />
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" aria-label="Roadmap steps">
          {steps.map((s) => (
            <li key={s.title} className="p-4 border rounded-lg">
              <h3 className="font-semibold">{s.title}</h3>
              <p className="text-sm mt-1">{s.status}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <figure>
          <Image src="/images/roadmap.jpg" alt="Diagram showing the research roadmap from planning to reporting" width={1200} height={600} />
          <figcaption className="sr-only">Diagram version of the roadmap</figcaption>
        </figure>
      </Section>
    </>
  )
}