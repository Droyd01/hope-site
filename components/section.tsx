import { Container } from './container'

export function Section({ children, id, ariaLabel }: { children: React.ReactNode; id?: string; ariaLabel?: string }) {
  return (
    <section id={id} aria-label={ariaLabel} className="py-12 sm:py-16 lg:py-20">
      <Container>{children}</Container>
    </section>
  )
}